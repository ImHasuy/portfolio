import {Theme} from "../Components/Theme.tsx";
import BackGround from "../Components/BackGround.tsx";
import NavBar from "../Components/NavBar.tsx";

export const MainPage = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Themed page*/}
        <Theme/>
        {/*Backgorund*/}
        <BackGround/>
        {/*Navbar*/}
        <NavBar/>
        {/*Content*/}


        {/*Footer*/}


    </div>
}