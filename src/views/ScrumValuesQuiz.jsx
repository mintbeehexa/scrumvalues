import { useEffect } from "react"
import Button from "../components/Button"

export default function ScrumValuesQuiz() {
    useEffect(() => {
        // const favicon = document.querySelector('link[rel="icon"]');
        // favicon.href = "../../public/scrum.png";
        document.title = "Scrum Values Quiz";
    }, []);

    return (
        <div>
            Check out different UIs
            <div className="ui-navigation">
                {[1, 2, 3, 4, 5].map((number, index) => (
                    <Button
                        key={number}
                        type="page-change"
                        content={number}
                        to={`/scrumvalues-${number}`}
                    />
                ))}
            </div>
        </div>
    )
}