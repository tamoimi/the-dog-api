import useSWR from "swr";
import { getDogData, getFunFact } from "../api/dog-api";
import Loading from "../loading";
import Image from "next/image";
import FunFact from "./FunFact";

const DogCard = () => {
  const { data, isLoading } = useSWR("api/dog-api", getDogData, {
    refreshInterval: 86400000, // refresh once a day
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: factData, isLoading: factLoading } = useSWR("/api/dog-fun-facts", getFunFact, {
    refreshInterval: 86400000, // refresh once a day
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log("factData", factData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FunFact />
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            {/* {dataImg?.map((i: any) => (
              <div key={i.id}>
                <Image src={i.url} alt="random_dogs" width={i.width} height={i.height} />
              </div>
            ))} */}

            {data?.data.map((dog: any) => (
              <div key={dog.id} className="m-5">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-xl underline decoration-blue-400  font-bold tracking-tight text-gray-900 dark:text-white">
                    {dog.attributes.name}
                  </h5>
                  <div className="bg-neutral-100 p-2 rounded-md mb-2">
                    <p className="text-gray-700 dark:text-gray-400 ">
                      <span className="font-semibold">Life Span:</span> {dog.attributes.life.min} -{" "}
                      {dog.attributes.life.max} years
                    </p>
                    <p className="text-gray-700 dark:text-gray-400">
                      <span className="font-semibold">Male Weight:</span>{" "}
                      {dog.attributes.male_weight.min} - {dog.attributes.male_weight.max} kg
                    </p>
                    <p className="text-gray-700 dark:text-gray-400">
                      <span className="font-semibold">Female Weight:</span>{" "}
                      {dog.attributes.female_weight.min} - {dog.attributes.female_weight.max} kg
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 text-sm">{dog.attributes.description}</p>

                  {/* Uncomment and modify to display dog images */}
                  {/* <Image src={dogImageURL} alt={dog.attributes.name} width={200} height={200} /> */}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DogCard;

{
  /* <p className="mb-2  tracking-tight text-gray-900 dark:text-white">{d.bred_for}</p>
                  <p className="mb-2  tracking-tight text-gray-900 dark:text-white">{d.life_span}</p>
                  <p className="mb-2  tracking-tight text-gray-900 dark:text-white">{d.temperament}</p>
                  <p className="mb-2  tracking-tight text-gray-900 dark:text-white">height: {d.height.metric}</p>
                  <p className="mb-2  tracking-tight text-gray-900 dark:text-white">weight: {d.weight.metric}</p> */
}
