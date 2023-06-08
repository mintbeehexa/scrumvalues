import { useEffect } from "react"

export default function Summary() {
    useEffect(() => {
        document.title = "UI Design Research";
    }, []);

    return (
        <div>
            Hello from Summary
        </div>
    )
}