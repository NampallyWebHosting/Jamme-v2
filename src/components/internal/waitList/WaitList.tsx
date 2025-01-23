import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WaitListLogo from "@/assets/waitListLogo.svg";
import Mixpanel from "../mixpanel/mixpanel";
import { ChevronDown } from "lucide-react";
import IndiaFlag from "@/assets/twemoji_flag-india.svg"
// Your validation schemas
const nameSchema = z.object({
  name: z
    .string()
    .trim() // Remove leading and trailing spaces
    .min(1, "Name is required") // Ensure it's not empty after trimming
    .max(25, "Name cannot exceed 25 characters") // Maximum length of 25 characters
    .regex(/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"), // Only alphabets and spaces
});

const collegeSchema = z.object({
  college: z
    .string()
    .trim()
    .min(1, "College is required")
    .regex(/^[A-Za-z\s]+$/, "College name can only contain alphabets"),
});

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .min(1, "Email is required")
    .regex(/\S/, "Email cannot be just spaces"),
});

const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers")
    .regex(/\S/, "Phone number cannot be just spaces"),
});

type FormData = { name?: string; college?: string; email?: string; phoneNumber?: string };

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, watch, formState: { errors, touchedFields }, reset, trigger } = useForm<FormData>({
    resolver: async (data) => {
      let schema;
      switch (step) {
        case 0:
          schema = nameSchema;
          break;
        case 1:
          schema = collegeSchema;
          break;
        case 2:
          schema = emailSchema;
          break;
        case 3:
          schema = phoneSchema;
          break;
        default:
          schema = z.object({});
      }
      try {
        schema.parse(data);
        return { values: data, errors: {} };
      } catch (e) {
        if (e instanceof z.ZodError) {
          const fieldErrors = e.errors.reduce((acc, error) => {
            acc[error.path[0]] = { message: error.message };
            return acc;
          }, {} as any);
          return { values: {}, errors: fieldErrors };
        }
        return { values: data, errors: {} };
      }
    },
  });

  const { onSubmit, isSubmitting, errorMessage } = useSubmitForm();

  const currentFieldValue = (() => {
    switch (step) {
      case 0:
        return watch("name");
      case 1:
        return watch("college");
      case 2:
        return watch("email");
      case 3:
        return watch("phoneNumber");
      default:
        return "";
    }
  })();

  // Trigger validation whenever the input changes
  useEffect(() => {
    trigger(); // Trigger validation for the current step
  }, [currentFieldValue, trigger]); // Re-trigger on field value change

  const isNextDisabled = !currentFieldValue || !!errors[step === 0 ? "name" : step === 1 ? "college" : step === 2 ? "email" : "phoneNumber"];

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep((prev) => {
        const newStep = prev + 1;
        if (newStep === 3) {
          // Track when the user reaches the last step
          Mixpanel.track("Reached Last Step", { step: newStep });
        }
        return newStep;
      });
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleFormSubmit = (data: FormData) => {
    // Track form submission
    Mixpanel.track("Form Submitted", { formData: data });
    onSubmit(data, reset, setStep);
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="w-[310px] md:w-full md:max-w-2xl lg:max-w-3xl border-t-0 bg-[#FFF7EF] font-Chillax md:rounded-[16px] rounded-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center ">
            <img src={WaitListLogo} alt="" className="w-[134px] h-[181.16px] -mt-[110px]" />
          </div>
          <AlertDialogTitle className="text-center font-semibold text-2xl">Welcome to Jamme</AlertDialogTitle>
          <AlertDialogDescription className="text-center font-medium text-base text-black">Sign up now! This exclusive social app is invite-only</AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {step === 0 && (
            <div>
              <Label htmlFor="name" className="block font-medium text-base">Your name</Label>
              <Input id="name" type="text" {...register("name")} className="block w-full mt-1 text-xs md:text-base font-bold border-[#AD9780] bg-[#FFEFE0] rounded-xl" />
              {/* Only show error if the field is touched */}
              {touchedFields.name && errors.name && <span className="text-red-500 text-xs ml-2 font-medium">{errors.name.message}</span>}
            </div>
          )}

          {step === 1 && (
            <div>
              <Label htmlFor="college" className="block font-medium text-base">College/University name</Label>
              <Input id="college" type="text" {...register("college")} className="block w-full mt-1 text-xs md:text-base font-bold border-[#AD9780] bg-[#FFEFE0] rounded-xl" />
              {touchedFields.college && errors.college && <span className="text-red-500 text-xs ml-2 font-medium">{errors.college.message}</span>}
            </div>
          )}

          {step === 2 && (
            <div>
              <Label htmlFor="email" className="block font-medium text-base">Your email</Label>
              <Input id="email" type="email" {...register("email")} className="block w-full mt-1 text-xs md:text-base font-bold border-[#AD9780] bg-[#FFEFE0] rounded-xl" />
              {touchedFields.email && errors.email && <span className="text-red-500 text-xs ml-2 font-medium">{errors.email.message}</span>}
            </div>
          )}

          {step === 3 && (
            <div>
              <Label htmlFor="phoneNumber" className="block font-medium text-base">Phone Number</Label>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center border p-[9px] border-[#946437] rounded-md w-20 bg-[#FFEFE0] mt-1.5 gap-1">
                  <img src={IndiaFlag} alt="India" className="w-5 h-5" />
                  <ChevronDown />
                </div>
                <Input id="phoneNumber" type="text" {...register("phoneNumber")} className="block w-full mt-1 text-xs md:text-base font-bold border-[#AD9780] bg-[#FFEFE0] rounded-md" />
              </div>
              {touchedFields.phoneNumber && errors.phoneNumber && <span className="text-red-500 text-xs ml-2 font-medium">{errors.phoneNumber.message}</span>}
            </div>
          )}

          {errorMessage && <div className="text-red-500 text-xs ml-2 font-medium">{errorMessage}</div>}

          <div className="flex flex-col items-center md:flex-row-reverse md:items-center">
            {step < 3 ? (
              <AlertDialogAction
                type="button"
                onClick={nextStep}
                disabled={isNextDisabled}
                className="bg-[#FFAE63] hover:bg-orange-300 rounded-full text-black font-semibold text-sm p-6 md:p-5 md:w-32 w-full"
              >
                Next
              </AlertDialogAction>
            ) : (
              <AlertDialogAction type="submit" disabled={isSubmitting} className="bg-[#FFAE63] hover:bg-orange-300 rounded-full text-black font-semibold text-sm p-6 md:p-5 md:w-32 w-full">
                {isSubmitting ? "Submitting..." : "Submit"}
              </AlertDialogAction>
            )}
            {step > 0 && (
              <AlertDialogCancel onClick={prevStep} className="border-none shadow-none bg-[#FFF7EF] hover:bg-[#FFF7EF] text-[#9B3B36] text-sm font-semibold">
                Previous
              </AlertDialogCancel>
            )}
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default MultiStepForm;
