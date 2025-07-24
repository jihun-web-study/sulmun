"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { testAction } from "@/server-actions/test";
import { ModeToggle } from "@/app/(home)/dark-mode-btn";

export default function Home() {
  // console.log("Supabase key:", process.env.NEXT_PUBLIC_SUPABASE_KEY); // REMOVE before commit
  const router = useRouter();

  return (
    <div className="">
      <Image src="/images/logo.png" alt="sulmun logo" width={32} height={32} priority />
      <Hr />
      <ModeToggle />
      <Hr />
      <button onClick={() => router.push("/about")}>About</button>
      <Hr />
      <button onClick={() => testAction()}>Test</button>
    </div>
  );
}

function Hr() {
  return <hr className="my-4" />;
}
