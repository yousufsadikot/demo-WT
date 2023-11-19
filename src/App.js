import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientTable from "./components/data/client-table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientTable />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
