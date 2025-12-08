import { BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage.tsx";
import {NotFound} from "./pages/NotFound.tsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />}/>
                {/*All other not defined routes will be redirected to 404 page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
