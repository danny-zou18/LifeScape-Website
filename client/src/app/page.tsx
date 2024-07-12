"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigateToLogin = () => {
    router.push("login");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-red-400 w-full h-[100vh] ">
      <div className="w-[75%] flex flex-row gap-12">
        <div className="w-[60%] flex flex-col justify-center items-start space-y-4">
          <h1 className="text-2xl font-bold ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo
          </h1>
          <h1 className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </h1>
          <div
            className="bg-green-300 text-black rounded-full p-4 cursor-pointer "
            onClick={navigateToLogin}
          >
            Get Started
          </div>
        </div>
        <div className="w-[40%]">
          <Image
            src="/LifeScape_logo.png"
            alt="LifeScape Logo"
            width={250}
            height={150}
            className="w-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}
