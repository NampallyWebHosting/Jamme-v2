import  { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for validation using Zod
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  phonenumber: z
    .string()
    .regex(/^\+?\d{10,15}$/, "Phone number must be a valid format"), // E.g., +1234567890
});

// Type for the form data
type FormData = z.infer<typeof schema>;

export function AlertDialogDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Submit function to call the API
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true); // Show loading indicator
    setApiError(null); // Clear any previous error

    try {
      const response = await fetch(
        "https://jammeads.jamme.app/api/v1/jamme-waitlist/add-waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result); // Handle success (you can update the UI accordingly)
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error: any) {
      setApiError(error.message); // Set error if the request fails
    } finally {
      setIsSubmitting(false); // Hide loading indicator
    }
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Form with React Hook Form & Zod</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the form below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <input
                  {...field}
                  id="name"
                  type="text"
                  className="mt-1 p-2 border rounded"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <Controller
              control={control}
              name="phonenumber"
              render={({ field }) => (
                <input
                  {...field}
                  id="phonenumber"
                  type="text"
                  className="mt-1 p-2 border rounded"
                />
              )}
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-sm">{errors.phonenumber.message}</p>
            )}
          </div>

          {apiError && (
            <p className="text-red-500 text-sm mt-2">{apiError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertDialogDemo;
