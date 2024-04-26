import useSWR from "swr";
import { getFunFact } from "../api/dog-api";
import Loading from "../loading";
import { useEffect, useState } from "react";
import moment from "moment";

const FunFact = () => {
  
  const { data: factData, isLoading: factLoading } = useSWR("/api/dog-fun-facts", getFunFact, {
    refreshInterval: 86400000, // refresh once a day
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const funFactData =
    factData && factData.data && factData.data[0] && factData.data[0].attributes
      ? factData.data[0].attributes.body
      : null;

  const nowTime = moment().format("YYYY-MM-DD");

  return (
    <>
      {factLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-400 text-center font-bold text-zinc-50">
                T
              </div>
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Tami Kim
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {nowTime}
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                  {funFactData}
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FunFact;
