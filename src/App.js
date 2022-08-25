import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element={<About />}/>
          {/* search */}
          <Route path = "/search/:queryString" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
