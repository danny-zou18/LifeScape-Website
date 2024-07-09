import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-red-400 w-full h-[100vh] ">
      <div className="w-[65%] flex flex-row ">
        <div className="w-[60%] flex flex-col justify-center items-start ">
          <h1 className="text-3xl ">Hello</h1>
          <h1 className="text-2xl">Hello ^2</h1>
          <div className="bg-green-300 text-black rounded-full p-4 " onClick={}>
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
