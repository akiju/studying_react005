import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1A } from "./Page1A";
import { Page1B } from "./Page1B";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">page1</Link>
        <br />
        <Link to="/Page2">page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Page1" element={<Page1 />}>
          <Route exact path="d1A" element={<Page1A />} />
          <Route exact path="d1B" element={<Page1B />} />
        </Route>
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
