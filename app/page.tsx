import Image from "next/image";
import Link from "next/link";

const handleGetStartedCLick = () => {};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            layout="fill"
            objectFit="fill"
            alt="Background"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full z-10">
          <div className="w-full flex px-10 pb-4">
            <Image 
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          <div className="w-full flex px-10">
            <p className="text-slate-950 text-4xl font-bold">catSpector</p>
          </div>
        </div>
        <div className="absolute bottom-10 right-10">
          <Link href="/login" passHref>
            <button className="bg-slate-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-1000">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
