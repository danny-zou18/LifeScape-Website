import Image from "next/image";

export default function Login() {
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
          <form className="w-full flex flex-col space-y-4">
            <div className="flex flex-col w-full">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="p-2 border border-gray-300 rounded-lg w-full  text-black"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 border border-gray-300 rounded-lg w-full  text-black"
                placeholder="Enter your password"
              />
            </div>
            <button className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
