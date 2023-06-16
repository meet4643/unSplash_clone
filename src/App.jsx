import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Editorial from "./examples/Editorial/Editorial";
import Header from "./examples/Navbar/Header";
import Wallpaper from "./examples/Editorial/Wallpaper";
import Renders from "./examples/Editorial/3d-renders";
import Nature from "./examples/Editorial/Nature";
import Street_photography from "./examples/Editorial/Street_photography";
import Textures_patterns from "./examples/Editorial/Textures-patterns";
import Film from "./examples/Editorial/Film";
import Animal from "./examples/Editorial/Animal";
import Work from "./examples/Editorial/Work";
import Navbar from "./examples/Navbar/Navbar";
import Travel from "./examples/Editorial/Travel";
import { Provider } from "react-redux";
import store from "../store/Index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Editorial />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          <Route path="/3d-renders" element={<Renders />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/street-photography" element={<Street_photography />} />
          <Route path="/textures-patterns" element={<Textures_patterns />} />
          <Route path="/film" element={<Film />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
