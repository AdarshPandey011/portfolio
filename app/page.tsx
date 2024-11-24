// import { FaNodeJs } from "react-icons/fa"
// import HomePage from "./HomePage"
// // import { ref, get } from "firebase/database"
// // import { database } from "@/firebase"

// async function getData() {

//   // return await (await get(ref(database))).val()

//   const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL + '/.json'
//   const res = await fetch(DB_URL, { cache: 'no-store' })
//   const data = res.json()
//   return data
// }

// export default async function page() {

//   const data = await getData()

//   return (
//     <>
//       {data ?
//         <HomePage data={data} />
//         :
//         <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
//           <FaNodeJs size={100} className='animate-pulse' />
//           <p className='animate-pulse text-xl'>Loading...</p>
//         </div>
//       }
//     </>
//   )
// }

// app/page.tsx
import HomePage from "./HomePage"
import { staticData } from "@/data/portfolioData"  // Make sure this path is correct

export default function Page() {
  // For debugging
  console.log('Static Data:', staticData);
  
  return (
    <div>
      {staticData ? (
        <HomePage data={staticData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}