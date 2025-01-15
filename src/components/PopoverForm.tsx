// components/PopoverForm.tsx
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RefreshCcw, X } from "lucide-react";
import JammelOGO from "@/assets/Icon 1.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PopoverFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const PopoverForm: React.FC<PopoverFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    userType: "",
    workTodo: "",
    fullName: "",
    email: "",
    company: "",
    country: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState("ABC123");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCaptchaRefresh = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(newCaptcha);
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    onSubmit(); // Trigger the submit action
    onClose(); // Close the popup after submit
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <div className="absolute top-4 right-4">
          <AlertDialogCancel
            onClick={onClose}
            className="text-sm font-medium text-black hover:text-gray-800 font-Chillax"
          >
            <X size={16} />
          </AlertDialogCancel>
        </div>

        <AlertDialogHeader>

          <AlertDialogDescription>
            <div className="contact__box flex justify-start">
              <div className="form__main w-full flex flex-col gap-5 justify-center items-start">
                <div className="contact__logo w-full flex justify-start items-center">
                  <img
                    src={JammelOGO}
                    alt="Jamme"
                    className="w-16 h-auto object-cover aspect-square"
                  />
                </div>
                <AlertDialogTitle className="text-xl font-semibold mb-2">Let's Talk</AlertDialogTitle>

                <form
                  id="contact__form"
                  className="contact__form w-full flex flex-col gap-5 justify-start items-start"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex flex-col gap-4 w-full">
                    <div className="option__select flex items-center gap-2 w-1/2">
                      <Label
                        htmlFor="userType"
                        className="text-lg font-semibold text-gray-300 flex-shrink-0"
                      >
                        I am
                      </Label>
                      <Select defaultValue="a jamme user" required>
                        <SelectTrigger className="bg-transparent border border-grey-200 text-lg font-semibold text-yellow-400">
                          <SelectValue placeholder="Select User Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a jamme user">a jamme user</SelectItem>
                          <SelectItem value="an influencer">an influencer</SelectItem>
                          <SelectItem value="a brand/business">a brand/business</SelectItem>
                          <SelectItem value="an agency">an agency</SelectItem>
                          <SelectItem value="other">other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-2 w-1/2">
                      <Label
                        htmlFor="workTodo"
                        className="text-lg font-semibold text-gray-300 flex-shrink-0"
                      >
                        looking to
                      </Label>
                      <Select defaultValue="get support" required>
                        <SelectTrigger className="bg-transparent border border-gray-200 text-lg font-semibold text-sky-500">
                          <SelectValue placeholder="Select Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="get support">get support</SelectItem>
                          <SelectItem value="report an issue">report an issue</SelectItem>
                          <SelectItem value="collab">collab</SelectItem>
                          <SelectItem value="drive revenue">drive revenue</SelectItem>
                          <SelectItem value="drive traffic">drive traffic</SelectItem>
                          <SelectItem value="promote my brand/business">
                            promote my brand/business
                          </SelectItem>
                          <SelectItem value="post audio">post audio</SelectItem>
                          <SelectItem value="others">other options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                  </div>

                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-white text-sm focus:border-white"
                  />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-white text-sm focus:border-white"
                  />
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Company"
                    className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-white text-sm focus:border-white"
                  />
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleInputChange("country", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      {/* Add more countries */}
                    </SelectContent>
                  </Select>

                  {/* Captcha */}
                  <div className="flex items-center gap-3">
                    <span className="text-lg bg-yellow-400 p-1 rounded">{captcha}</span>
                    <Button onClick={handleCaptchaRefresh}>
                      <RefreshCcw size={16} />
                    </Button>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter the Captcha"
                    value={formData.captcha}
                    onChange={(e) => handleInputChange("captcha", e.target.value)}
                    required
                  />

                  {/* Submit */}
                  <Button type="submit" className="py-2 px-3 w-full mt-2">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PopoverForm;
