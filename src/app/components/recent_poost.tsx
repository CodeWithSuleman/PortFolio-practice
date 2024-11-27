import { Heebo } from "next/font/google";
import Link from "next/link";
import RecentPostCard from "./recent_post_card";
 const heebo = Heebo({subsets:["latin"]})
export default function RecentPost (){
    return(
        <div className="bg-recentBackground my-[66px] md:h-[502px] flex flex-col justify-evenly ">
            <div className="w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between">
               <div className="flex flex-row justify-between">
               <h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post </h2>
                <Link href={""} className={`${heebo.className} text-[22px] text-primary font-medium`}>View all</Link>
            
                   </div>
                   
                <div className="mt-[16px] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
                    <RecentPostCard/>
                    <RecentPostCard/>
                </div>
            </div>
         
        </div>
    )
}