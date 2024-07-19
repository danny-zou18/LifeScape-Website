"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: FieldValues) => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
        .then(() => {
          console.log("Signed in");
        })
        .catch((error) => {
          console.log("Failed to sign in");
        });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200 w-full h-[100vh]">
      <div className="w-[75%] flex flex-col gap-12">
        <Image
          src="/LifeScape_logo.png"
          alt="LifeScape Logo"
          width={150}
          height={150}
          className="mb-1"
        />
        <div className="w-full flex flex-col justify-center items-center space-y-4 bg-black p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col space-y-4"
          >
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="p-2 border border-gray-300 rounded-lg w-full  text-black"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-2 border border-gray-300 rounded-lg w-full  text-black"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-700"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
