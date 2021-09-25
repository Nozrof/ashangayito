import "./App.css";
import Components from "./Components/Components";
import { BrowserRouter,Redirect,Route,Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Components />
    </BrowserRouter>
  );
}

export default App;
