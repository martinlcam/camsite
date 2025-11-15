"use client";

import React, { useState } from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { Toast } from "radix-ui";
import * as Form from "@radix-ui/react-form";
import * as Label from "@radix-ui/react-label";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  EyeOpenIcon,
  EyeClosedIcon,
  LockClosedIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

// Google Icon
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="currentColor"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="currentColor"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="currentColor"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export default function AuthComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in attempt");
  };

  return (
    <>
      <Toast.Provider swipeDirection="right">
        <div className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="fixed inset-0 z-0"></div>

          <div className="relative z-20 w-full max-w-md">
            <div className="bg-white/30 backdrop-blur-2xl rounded-xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="px-8 pt-8">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome Back
                  </h1>
                </div>
              </div>

              <div className="px-8 pb-6">
                <Form.Root onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <Form.Field name="email" className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label.Root
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </Label.Root>
                      <Form.Message
                        className="text-sm text-red-600"
                        match="valueMissing"
                      >
                        Please enter your email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <EnvelopeClosedIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Enter your email"
                          className="block w-full pl-10 pr-3 py-3 border border-black/30 bg-white/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </Form.Control>
                  </Form.Field>

                  {/* Password Field */}
                  <Form.Field name="password" className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label.Root
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                      >
                        Password
                      </Label.Root>
                      <Form.Message
                        className="text-sm text-red-600"
                        match="valueMissing"
                      >
                        Please enter your password
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <PasswordToggleField.Root>
                        <div className="relative flex items-center">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LockClosedIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <PasswordToggleField.Input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="block w-full pl-10 pr-12 py-3 border border-black/30 bg-white/20 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          />
                          <PasswordToggleField.Toggle className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <PasswordToggleField.Icon
                              visible={
                                <EyeOpenIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                              }
                              hidden={
                                <EyeClosedIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                              }
                            />
                          </PasswordToggleField.Toggle>
                        </div>
                      </PasswordToggleField.Root>
                    </Form.Control>
                  </Form.Field>

                  {/* Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox.Root
                        id="remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) =>
                          setRememberMe(checked as boolean)
                        }
                        className="h-4 w-4 rounded border border-gray-300 bg-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        <Checkbox.Indicator className="flex items-center justify-center text-white">
                          <svg
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <Label.Root
                        htmlFor="remember-me"
                        className="text-sm text-gray-700 select-none"
                      >
                        Remember me
                      </Label.Root>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Forgot password clicked");
                        setOpen(false);
                        window.clearTimeout(timerRef.current);
                        timerRef.current = window.setTimeout(() => {
                          setOpen(true);
                        }, 100);
                      }}
                      className="text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Form.Submit asChild>
                    <button
                      type="submit"
                      className="w-full bg-purple-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Sign In
                    </button>
                  </Form.Submit>
                </Form.Root>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300/50" />
                  </div>
                  <div className="relative flex justify-center text-sm"></div>
                </div>

                <button
                  onClick={handleGoogleSignIn}
                  className="w-full bg-white/50 border border-white/30 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <GoogleIcon />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        <Toast.Root
          className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="mb-[5px] text-[15px] font-medium text-gray-900 [grid-area:_title]">
            Password Reset
          </Toast.Title>
          <Toast.Description className="m-0 text-[13px] leading-[1.3] text-gray-600 [grid-area:_description]">
            If an account exists for this email, you'll receive password reset instructions.
          </Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText="Close toast"
          >
            <button 
              className="inline-flex h-[25px] items-center justify-center rounded bg-purple-100 px-2.5 text-xs font-medium leading-[25px] text-purple-700 shadow-[inset_0_0_0_1px] shadow-purple-200 hover:shadow-[inset_0_0_0_1px] hover:shadow-purple-300 focus:shadow-[0_0_0_2px] focus:shadow-purple-400"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </Toast.Action>
        </Toast.Root>

        {/* Toast Viewport - where toasts appear */}
        <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
      </Toast.Provider>
    </>
  );
}
