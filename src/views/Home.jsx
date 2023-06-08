import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        document.title = "UI Design Research";
    }, []);

    return (
        <div>
            Hello from Home
        </div>
    )
}