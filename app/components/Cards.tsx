import useSWR from "swr";
import { getPerson } from "../api/starwards";
import Loading from "../loading";

const Cards = () => {
  const { data, isLoading } = useSWR("/api/starwards", getPerson);
  console.log("data", data)
  return (
    <>
      {isLoading ? (
        <Loading />
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
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{p.gender}</p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-500 rounded-lg hover:bg-neutral-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cards