import "./App.css";
import AddListItem from "./components/AddListItem";
import AddNewItem from "./components/AddNewItem";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<AddListItem />} />
          <Route path="/createItem" element={<AddNewItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
