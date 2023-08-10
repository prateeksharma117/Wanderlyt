import { BiHomeCircle } from "react-icons/bi"
import { AiOutlineInfoCircle, AiOutlineLogin } from "react-icons/ai"
import { BsJournalBookmark,BsGear } from "react-icons/bs"

export const menuItems=[
    {
        title:"Home",
        url:"/",
        cName:"nav-links",
        icon:<BiHomeCircle size={20}/>
    },

    {
        title:"About",
        url:"/about",
        cName:"nav-links",
        icon:<AiOutlineInfoCircle size={20}/>
    },

    {
        title:"Services",
        url:"/service",
        cName:"nav-links",
        icon:<BsGear size={20}/>,
    },

    {
        title:"Contact",
        url:"/contact",
        cName:"nav-links",
        icon:<BsJournalBookmark size={20}/>
    },

    {
        title:"Sign Up",
        url:"/signup",
        cName:"nav-links-mobile",
        icon:<AiOutlineLogin size={20}/>
    }
]