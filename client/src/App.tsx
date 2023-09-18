import { Route, Routes } from "react-router-dom";
import { Main, Nav } from "./components/components";

function App() {
    return (
        <div className="h-screen w-screen flex flex-col">
            <Nav />

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
