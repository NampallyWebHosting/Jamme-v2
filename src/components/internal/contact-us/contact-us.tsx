import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUserForm from "@/hooks/useCreateUserForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import JammelOGO from "@/assets/NewLogo.svg";
import { Loader2, RotateCw } from "lucide-react";
import { schema } from "../types/schema";
import { Textarea } from "@/components/ui/textarea";
import countries from "@/assets/countries copy.json";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

type FormData = z.infer<typeof schema>;

const generateCaptcha = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};

const CreateUserForm: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,  // Reset method from react-hook-form
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { onSubmit, loading } = useCreateUserForm();

  const handleCaptchaValidation = (data: FormData) => {
    if (captcha !== captchaInput) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha()); // Generate a new CAPTCHA on error
    } else {
      setCaptchaError("");
      // Pass the reset method to onSubmit and reset captcha
      onSubmit(data, reset); // reset form fields after successful submission

      // Reset CAPTCHA state after successful submission
      setCaptcha(generateCaptcha()); // Generate new CAPTCHA
      setCaptchaInput(""); // Clear CAPTCHA input field
    }
  };
  return (
    <>
      <SecondaryHeader />
      <div className="w-full min-h-screen font-Chillax p-2">
        <Card className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mb-20">
          <div className="contact__logo w-full flex flex-col justify-center items-center">
            <img
              src={JammelOGO}
              alt="Jamme"
              className=" w-20 lg:w-24 object-cover "
            />
            <h1 className="text-2xl font-semibold mb-4">Jamme Support</h1>
          </div>
          <form onSubmit={handleSubmit(handleCaptchaValidation)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row  md:items-center gap-2 md:w-64">
                <Label
                  htmlFor="userType"
                  className="lg:text-lg font-semibold flex-shrink-0"
                >
                  I am
                </Label>
                <Controller
                  name="userType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                      required
                    >
                      <SelectTrigger className="bg-transparent border border-gray-200 lg:text-lg font-semibold text-yellow-400">
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
                  )}
                />
                {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
              </div>

              <div className="flex flex-col md:flex-row  md:items-center gap-2 md:w-96">
                <Label
                  htmlFor="supportType"
                  className="lg:text-lg font-semibold  flex-shrink-0"
                >
                  looking to
                </Label>
                <Controller
                  name="supportType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                      required
                    >
                      <SelectTrigger className="bg-transparent border border-gray-200 lg:text-lg font-semibold text-sky-500">
                        <SelectValue placeholder="Select Support Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="get support">get support</SelectItem>
                        <SelectItem value="report an issue">report an issue</SelectItem>
                        <SelectItem value="collab">collab</SelectItem>
                        <SelectItem value="drive revenue">drive revenue</SelectItem>
                        <SelectItem value="drive traffic">drive traffic</SelectItem>
                        <SelectItem value="promote my brand/business">promote my brand/business</SelectItem>
                        <SelectItem value="post audio">post audio</SelectItem>
                        <SelectItem value="others">other options</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.supportType && <p className="text-red-500 text-sm">{errors.supportType.message}</p>}
              </div>
            </div>
            <Input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Name"
              className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            <Input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Email"
              className="w-full p-2 bg-transparent border-b border-gray-300 outline-none  text-sm focus:border-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            <Input
              type="text"
              id="companyName"
              {...register("companyName")}
              placeholder="Company Name"
              className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
            />
            {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
            <div>
              <Textarea
                id="reason"
                {...register("reason")}
                placeholder="Reason"
                className="w-full p-2 bg-transparent border-b border-gray-300 outline-none text-sm focus:border-white"
              ></Textarea>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={field.onChange}
                    value={field.value}
                    required
                  >
                    <SelectTrigger className="bg-transparent border border-gray-200">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.country_code} value={country.country}>
                          <div className="flex items-center justify-center">
                            <img
                              src={country.country_image_url}
                              alt={country.country}
                              className="w-6 h-6 mr-2"
                            />
                            {country.country}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 mb-2">
                <span className="px-4 py-1 bg-yellow-400 text-gray-800 font-mono rounded-md">
                  {captcha}
                </span>
                <span
                  onClick={() => setCaptcha(generateCaptcha())}
                >
                  <RotateCw />
                </span>
              </div>
              <Input
                type="text"
                id="captchaInput"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter CAPTCHA"
              />
              {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="py-5 px-3 w-full mt-4 bg-[#FFAE63] text-black hover:bg-orange-400 rounded-full"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin text-black" /> : "Submit"}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default CreateUserForm;
