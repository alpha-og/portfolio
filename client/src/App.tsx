import { Route, Routes } from "react-router-dom";
import { Footer, Landing, Nav } from "./components/components";

function App() {
    return (
        <div className="h-screen flex flex-col">
            <Nav />

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
