"use client";

import Image from "next/image";
import Cards from "./components/Cards";
import { SWRProvider } from "./swr-provider";

export default function Home() {
  return (
    <SWRProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Cards />
      </main>
    </SWRProvider>
  );
}
