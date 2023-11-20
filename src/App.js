import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClientTable from "./components/data/client-table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/details";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="">
          <div className="app-main-content">
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<ClientTable />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
