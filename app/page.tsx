import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <main>
        <Image
          src="/griot.png"
          alt="Griot logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
