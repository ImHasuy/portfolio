import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {cn} from "../lib/utils";

export const Theme = () => {
    const [isDarkmode, setIsDarkmode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark"
        }
        return true
    })

    useEffect(() => {
        if(isDarkmode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else{
            document.documentElement.classList.add("light")
            localStorage.setItem("theme", "light")
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkmode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkmode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkmode(true)
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm::hidden",
        "top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300")}>
        {isDarkmode ?
        <SunIcon className={"h-6 w-6 text-yellow-300"}/>
        :
        <MoonIcon className={"h-6 w-6 text-blue-900"}/>}
    </button>
}