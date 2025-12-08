import {ArrowUp} from "lucide-react";

export default function Footer() {


    return (
        <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap  justify-between">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Csanád Gáspár, All rights reserved.
            </p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary transition-colors ">
                <ArrowUp/>
            </a>
        </footer>
    )
}