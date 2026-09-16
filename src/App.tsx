import "./Timer.css";
import Timer from "./Timer.tsx";

function App() {
    const title = import.meta.env.VITE_APP_TITLE || "title not set";

    return (
        <main className="container">
            <article>
                <h1>{title}</h1>
                <Timer />
            </article>
        </main>
    );
}

export default App;
