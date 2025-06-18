"use client";

import { sendEmail } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ContactFormSchema } from "@/schemas";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle,
} from "lucide-react";

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data);

    if (result.error) {
      toast.error("An error occurred! Please try again later.");
      return;
    }

    setIsSuccess(true);
    toast.success("Message sent successfully!");

    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30"></div>

      <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>

        {isSuccess && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm">
            <div className="text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-400 animate-bounce" />
              <p className="mt-4 text-xl font-semibold text-white">
                Message Sent!
              </p>
              <p className="text-green-300">Thank you for reaching out</p>
            </div>
          </div>
        )}

        <CardContent className="relative p-8">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
            </div>
            <p className="text-gray-400">Let&apos;s start a conversation</p>
          </div>

          <form onSubmit={handleSubmit(processForm)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative group/field">
                <div
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur transition-all duration-300 ${
                    focusedField === "name"
                      ? "opacity-30"
                      : "group-hover/field:opacity-20"
                  }`}
                ></div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                    <User
                      className={`h-5 w-5 transition-colors duration-300 ${
                        focusedField === "name"
                          ? "text-blue-400"
                          : "text-gray-500"
                      }`}
                    />
                  </div>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="given-name"
                    className="relative h-12 rounded-xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-blue-500/25"
                    onFocus={() => setFocusedField("name")}
                    {...register("name", {
                      onBlur: () => setFocusedField(null),
                    })}
                  />

                  <div
                    className={`absolute left-12 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ${
                      focusedField === "name" ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="text-gray-400">Enter your name</span>
                  </div>
                </div>

                {errors.name?.message && (
                  <p className="mt-2 text-sm text-red-400 animate-fade-in flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-red-400"></span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="relative group/field">
                <div
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur transition-all duration-300 ${
                    focusedField === "email"
                      ? "opacity-30"
                      : "group-hover/field:opacity-20"
                  }`}
                ></div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                    <Mail
                      className={`h-5 w-5 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-purple-400"
                          : "text-gray-500"
                      }`}
                    />
                  </div>

                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    className="relative h-12 rounded-xl border border-white/20 bg-white/5 pl-12 pr-4 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-purple-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/25"
                    onFocus={() => setFocusedField("email")}
                    {...register("email", {
                      onBlur: () => setFocusedField(null),
                    })}
                  />
                </div>

                {errors.email?.message && (
                  <p className="mt-2 text-sm text-red-400 animate-fade-in flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-red-400"></span>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="relative group/field">
              <div
                className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 blur transition-all duration-300 ${
                  focusedField === "message"
                    ? "opacity-30"
                    : "group-hover/field:opacity-20"
                }`}
              ></div>

              <div className="relative">
                <div className="absolute left-3 top-4 z-10">
                  <MessageSquare
                    className={`h-5 w-5 transition-colors duration-300 ${
                      focusedField === "message"
                        ? "text-green-400"
                        : "text-gray-500"
                    }`}
                  />
                </div>

                <Textarea
                  rows={5}
                  placeholder="Your Message"
                  autoComplete="off"
                  className="relative min-h-[120px] rounded-xl border border-white/20 bg-white/5 pl-12 pr-4 pt-4 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-green-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-green-500/25 resize-none"
                  onFocus={() => setFocusedField("message")}
                  {...register("message", {
                    onBlur: () => setFocusedField(null),
                  })}
                />
              </div>

              {errors.message?.message && (
                <p className="mt-2 text-sm text-red-400 animate-fade-in flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-red-400"></span>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="relative group/button">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition-all duration-300 group-hover/button:opacity-50"></div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <ReloadIcon className="h-5 w-5 animate-spin" />
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                    <PaperPlaneIcon className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </div>
                )}

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/button:translate-x-full rounded-xl"></div>
              </Button>
            </div>
          </form>

          <div className="absolute top-4 right-4 opacity-20">
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
              <div
                className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </CardContent>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </Card>
    </div>
  );
}
