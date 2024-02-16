"use client";

import Image from "next/image";
import Cards from "./components/DogCard";
import { SWRProvider } from "./swr-provider";

export default function Home() {
  return (
    <SWRProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 gap-6">
        <div className="flex">
          <p className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Everything about&nbsp;
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              dogs!{" "}
            </span>
          </p>
          <Image src={"/german_shepherd.png"} alt="german_shepherd" width={100} height={80} />
        </div>
        <Cards />
      </main>
    </SWRProvider>
  );
}
