import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import WaitListLogo from "@/assets/waitListLogo.svg"
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export function Confirmation() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')  // Redirect to the homepage (or any other route you prefer)
  }

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="w-[310px] md:w-full md:max-w-2xl bg-[#FFF7EF] font-Chillax md:rounded-[16px] rounded-md flex flex-col items-center justify-center p-6">
        <AlertDialogHeader className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-4">
            <img src={WaitListLogo} alt="Waitlist Logo" className="w-[134px] h-[181.16px]" />
          </div>
          <AlertDialogTitle className="text-center font-semibold text-2xl">
            Stay tuned!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="text-base font-medium text-center lg:w-96">
          Stay tuned! We’ll notify you as soon as the app launches, and the first lukcy 100 will snag a pair of AirPods!
        </div>
        <div className="mt-4">
          <Button
            onClick={handleClose}
            className="bg-[#FFAE63] hover:bg-orange-300 rounded-full text-black font-semibold text-sm p-6 md:p-5 md:w-32 w-full"
          >
            Close
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default Confirmation
