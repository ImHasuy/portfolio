import {useEffect, useState} from "react";
import type star from "../interfaces/star";
import type meteors from "../interfaces/meteors";

export default function BackGround() {



    const generateStars = () => {
        const starNumber = Math.floor(window.innerWidth * window.innerHeight / 8000);
        const _stars:star[] = []
        for (let i = 0; i < starNumber; i++) {
            _stars.push(
                {
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2
                }
            )
        }
        return _stars;
    }

    const [stars, setStars] = useState<star[]>(() => generateStars())

    const [meteors] = useState<meteors[]>(() => {
        const meteorNumber = 4;
        const _meteors:meteors[] = []
        for (let i = 0; i < meteorNumber; i++) {
            _meteors.push(
                {
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 60,
                    delay: Math.random() * 10,
                    animationDuration: Math.random() * 3 + 3
                }
            )
        }
        return _meteors;
    })

    useEffect(() => {
        const handleResize = () => {
            setStars(generateStars())
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    },[])

    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{height: "100dvh", width: "100vw"}}>
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s"
                }}/>
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 20 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDuration: meteor.animationDuration + "s"
                }}/>
            ))}
        </div>
    );
}