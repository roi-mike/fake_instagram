import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IndexHome from "./pages/IndexHome";
import Register from "./pages/Register.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexHome />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
