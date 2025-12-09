import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {cn} from "../lib/utils";

export const Theme = () => {
    const [isLightMode, setIsLightMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "light"
        }
        return true
    })

    useEffect(() => {
        if(isLightMode){
            document.documentElement.classList.add("light")
            localStorage.setItem("theme", "light")
        }
        else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
    }, [])

    const toggleTheme = () => {
        if(isLightMode){
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsLightMode(false)
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsLightMode(true)
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden",
        "top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300")}>
        {isLightMode ?
        <MoonIcon className={"h-6 w-6 text-blue-900"}/>
        :
        <SunIcon className={"h-6 w-6 text-yellow-300"}/>}
    </button>
}