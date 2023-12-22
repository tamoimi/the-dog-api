"use client";

import useSWR from "swr";
import { getPerson } from "./api/starwards";
import { SWRProvider } from "./swr-provider";

export default function Home() {
  const { data, isLoading } = useSWR("/api/starwards", getPerson);
  console.log("data", data);
  return (
    <SWRProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              {data?.results.map((p: any) => (
                <div key={p.url} className=" m-5">
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{p.birth_year}</p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-500 rounded-lg hover:bg-neutral-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </SWRProvider>
  );
}
