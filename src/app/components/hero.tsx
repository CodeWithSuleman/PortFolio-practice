import Image from "next/image"
import Profile from '@/app/assets/profile.png'
import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ['latin'] })
export default function Hero() {
    return (
        <div className="p-6 my-[66px] w-[93%] md:w-[1030px] md:h-[308px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className=" md:w-[521px] h-[305px] flex flex-col items-start md:justify-between justify-evenly">
                <h1 className={`${heebo.className} mt-6 md:mt-0 text-[27px] md:text-[48px] font-black text-heading`}>Hi, I am John,<br />
                    Creative Technologist</h1>
                <p className={`${heebo.className} text-heading font-normal text-[16px]`}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className={`${heebo.className} text-[18px] font-medium w-[205px] h-[50px] shadow-md shadow-black/60 bg-primary rounded-sm  text-white`}>Download NOW</button>
            </div>

            <div className="w-[292px] h-[299px] relative">
                <Image className="z-50" src={Profile} alt="" width={292} height={299} />
                <div className="absolute right-3 top-3 bg-profileBackground -z-10 w-[292px] h-[299px] rounded-full" />
            </div>
        </div>
    )
}