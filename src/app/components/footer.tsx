import { Heebo } from "next/font/google"
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const heebo = Heebo({ subsets: ['latin'] })

export default function Footer() {
    return (
        <div className="bg-footerBackground space-y-6 h-[243px] flex flex-col  items-center justify-center">
            <div className="flex space-x-5">

                <Link href={""}><FaFacebookSquare className="w-[30px] h-[30px]" /></Link>
                <Link href={""}><FaInstagram className="w-[30px] h-[30px]" /></Link>
                <Link href={""}><FaTwitter className="w-[30px] h-[30px]" /></Link>
                <Link href={""}><FaLinkedin className="w-[30px] h-[30px]" /></Link>



            </div>
            <p className={`${heebo.className} text-center font-medium text-[22px]`}>
                Copyright ©2020 All rights reserved</p>
        </div>
    )
}  