import { useEffect } from "react"

export default function CaseStudies() {
    useEffect(() => {
        document.title = "UI Design Research";
    }, []);

    return (
        <div>
            Hello from CaseStudies
        </div>
    )
}