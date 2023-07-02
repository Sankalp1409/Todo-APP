import ReactDOM from "react-dom/client";
import App from "./App";

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<App />);
