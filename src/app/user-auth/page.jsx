"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React,{ useEffect, useState} from "react";
import {toast} from 'react-toastify';
import Loader from "../components/Loader";
import { signIn } from "next-auth/react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_NEXTAUTH_URL

  useEffect(() => {
    localStorage.removeItem('hasShownWelcome');
  }, []);

  const handleLogin = async(provider) => {
    setIsLoading(true);
    try{
      await signIn(provider,{callbackUrl:url})
      toast.info(`logging with ${provider}`)
    } catch (error) {
      toast.error("Login failed. Please try again." + provider);
    }
  }
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">
      {isLoading && <Loader/>}
      <div className="hidden w-1/2 bg-gray-100 lg:block">
        <Image
          src="/images/meet_image.jpg"
          width={1080}
          height={1080}
          alt="login_image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center w-full p-8 lg:w-1/2">
        <div className="max-w-md mx-auto">
          <h1 className="mb-4 text-4xl font-bold">Welcome to FaceCase</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-100">
            Join our online meeting platform to connect with friends, family,
            and colleagues. Experience seamless video calls, screen sharing, and
            real-time collaboration. Sign up now to start your journey with
            FaceCase!
          </p>
          <div className="space-y-4">
            <Button
              className="w-full dark:hover:bg-white dark:hover:text-black"
              variant="outline"
              onClick={() => handleLogin('google')}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Login with Google
            </Button>
          </div>
          <div className="flex flex-col space-y-4 mt-6">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>

              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-gray-600">Or</span>
              </div>
            </div>
            <Button className='w-full bg-black text-white dark:hover:bg-gray-200 dark:text-black dark:bg-white' variant='ghost' onClick={() => handleLogin('github')}>
               <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0.297C5.37 0.297 0 5.668 0 12.298c0 5.29 3.438 9.773 8.205 11.366.6.111.82-.261.82-.58 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.745.082-.73.082-.73 1.204.084 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.52.117-3.165 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.05.138 3 .405 2.29-1.553 3.295-1.23 3.295-1.23.653 1.645.24 2.862.118 3.165.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.81 1.1.81 2.22 0 1.6-.015 2.89-.015 3.28 0 .32.215.698.825.58C20.565 22.067 24 17.582 24 12.298 24 5.668 18.627.297 12 .297z" />
  </svg>
              Login with GitHub
            </Button>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don&apos;t have an account? {" "}
              <Link href="#" className="text-blue-500 hover:underline dark:text-blue-400">
              Create now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
