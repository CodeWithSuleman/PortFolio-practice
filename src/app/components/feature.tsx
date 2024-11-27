import { Heebo } from "next/font/google"
import Image from "next/image"
import Image1 from '@/app/assets/image1.png'
import Image2 from '@/app/assets/image2.png'
import Image3 from '@/app/assets/image3.png'

const heebo = Heebo({ subsets: ["latin"] })

export default function Feature() {
    return (
        <div className="flex flex-col md:px-5 gap-0 md:gap-0">
            <div><p className={`${heebo.className} pl-5 text-[19px] md:text-[22px] font-medium`}>Featured works</p></div>
            <div className="pt-6">
                <div className="flex flex-col space-y-5 mx-[10%]  md:mx-0 md:flex md:flex-row md:pl-10 md:space-x-5">

                    {/* image */}
                    <div className="w-[246px] h-[180px]">
                        <Image src={Image1} alt={""} />
                    </div>

                    {/* heading and para */}
                    <div className={`${heebo.className} md:w-[622px] md:h-[272px]`}>
                        <h1 className="text-[25px] md:text-[30px] font-bold">
                            Designing Dashboard
                        </h1>
                        <p className="text-[16px] md:text-[18px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 mx-[10%] pt-6 md:pt-0 md:mx-0 md:flex md:flex-row md:pl-10 md:space-x-5">

                    {/* image */}
                    <div className="w-[246px] h-[180px]">
                        <Image src={Image2} alt={""} />
                    </div>

                    {/* heading and para */}
                    <div className={`${heebo.className} md:w-[622px] md:h-[272px]`}>
                        <h1 className="text-[25px] md:text-[30px] font-bold">
                            Designing Dashboards
                        </h1>
                        <p className="text-[16px] md:text-[18px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 mx-[10%] pt-6 md:pt-0 md:mx-0 md:flex md:flex-row md:pl-10 md:space-x-5">

                    {/* image */}
                    <div className="w-[246px] h-[180px]">
                        <Image src={Image3} alt={""} />
                    </div>

                    {/* heading and para */}
                    <div className={`${heebo.className} md:w-[622px] md:h-[272px]`}>
                        <h1 className="text-[25px] md:text-[30px] font-bold">
                            Designing Dashboards
                        </h1>
                        <p className="text-[16px] md:text-[18px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}