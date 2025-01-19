import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"

const nameSchema = z.object({ name: z.string().min(1, "Name is required") })
const collegeSchema = z.object({ college: z.string().min(1, "College is required") })
const emailSchema = z.object({ email: z.string().email("Invalid email address").min(1, "Email is required") })
const phoneSchema = z.object({
  phoneNumber: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
})

type FormData = { name?: string; college?: string; email?: string; phoneNumber?: string }

export function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm<FormData>({
    resolver: async (data) => {
      let schema
      switch (step) {
        case 0: schema = nameSchema; break
        case 1: schema = collegeSchema; break
        case 2: schema = emailSchema; break
        case 3: schema = phoneSchema; break
        default: schema = z.object({})
      }
      try {
        schema.parse(data)
        return { values: data, errors: {} }
      } catch (e) {
        if (e instanceof z.ZodError) {
          const fieldErrors = e.errors.reduce((acc, error) => {
            acc[error.path[0]] = { message: error.message }
            return acc
          }, {} as any)
          return { values: {}, errors: fieldErrors }
        }
        return { values: data, errors: {} }
      }
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("https://jammeads.jamme.app/api/v1/jamme-waitlist/add-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit form")
      }

      reset()
      setStep(0)
      navigate("/confirmation")
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    const isValid = await trigger()
    if (isValid) setStep((prev) => prev + 1)
  }

  const prevStep = () => setStep((prev) => prev - 1)

  // Watch the current field value based on the step
  const currentFieldValue = (() => {
    if (step === 0) return watch("name");
    if (step === 1) return watch("college");
    if (step === 2) return watch("email");
    if (step === 3) return watch("phoneNumber");
    return undefined;
  })();
  

  const isNextDisabled = !currentFieldValue || !!errors[step === 0 ? "name" : step === 1 ? "college" : step === 2 ? "email" : "phoneNumber"]

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Waitlist</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill in the details to add to the waitlist.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 0 && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" type="text" {...register("name")} className="block w-full mt-1 border rounded-md" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
          )}

          {step === 1 && (
            <div>
              <label htmlFor="college" className="block text-sm font-medium text-gray-700">College</label>
              <input id="college" type="text" {...register("college")} className="block w-full mt-1 border rounded-md" />
              {errors.college && <span className="text-red-500">{errors.college.message}</span>}
            </div>
          )}

          {step === 2 && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" {...register("email")} className="block w-full mt-1 border rounded-md" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
          )}

          {step === 3 && (
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phoneNumber" type="text" {...register("phoneNumber")} className="block w-full mt-1 border rounded-md" />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
            </div>
          )}

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <div className="flex justify-between mt-6">
            <AlertDialogCancel onClick={prevStep} disabled={step === 0}>Back</AlertDialogCancel>
            {step < 3 ? (
              <AlertDialogAction
                type="button"
                onClick={nextStep}
                disabled={isNextDisabled} // Disable if the field is empty or invalid
              >
                Next
              </AlertDialogAction>
            ) : (
              <AlertDialogAction type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </AlertDialogAction>
            )}
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default MultiStepForm
