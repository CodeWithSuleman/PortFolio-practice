import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({subsets:['latin']})

export default function NaveBar(){
 const navitems = [
    {
    name:"Works",
    link:"#",
 },
    {
    name:"Blogs",
    link:"#",
 },
    {
    name:"Contacts",
    link:"#",
 },
]
    return(
    
    <ul className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px] space-x-6`}>
        {/* <li>Works</li>
        <li>Blogs</li>
        <li>Contacts</li> */}

        {navitems.map((item,i)=>(
            
            <li key={i}>
                <Link href={item.link}>
                {item.name}
                </Link>
                </li>
        ))}
    </ul>
        
    )
}