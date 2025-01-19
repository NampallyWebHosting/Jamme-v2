import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (
    data: Record<string, any>,
    reset: () => void,
    setStep: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setIsSubmitting(true);
    setErrorMessage(null); // Reset any previous errors

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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      reset(); // Reset the form on successful submission
      setStep(0); // Reset the step to the first step
      navigate("/confirmation"); // Navigate to the confirmation page
    } catch (error: any) {
      setErrorMessage(error.message); // Display the backend error message
    } finally {
      setIsSubmitting(false); // Stop submitting
    }
  };

  return { onSubmit, isSubmitting, errorMessage };
}
