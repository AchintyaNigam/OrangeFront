import Image from "next/image";

export default function Home() {
  return (
  
    <div className="bg-white">
      <Image src="/background.png" className="object-fill h-screen w-screen scroll-none" width={1920} height={1080} alt="Background" />
      <div className="flex-1">
        <p>catSpector</p>
      </div>
    </div>
  );
}
