import {BrowserRouter, Routes, Route} from "react-router-dom"
import StokBarang from "./components/stokBarang";
import TambahBarang from "./components/TambahBarang";
import EditBarang from "./components/EditBarang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StokBarang/>}/>
        <Route path="/add" element={<TambahBarang />} />
        <Route path="/edit/:id" element={<EditBarang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
