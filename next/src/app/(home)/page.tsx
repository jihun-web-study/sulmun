"use client";

import Image from "next/image";

export default function Home() {
  console.log(process.env.VITE_SUPABASE_KEY);

  return (
    <div className="">
      <Image src="/images/logo.png" alt="sulmun logo" width={32} height={32} priority />
    </div>
  );
}
