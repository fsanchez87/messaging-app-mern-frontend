import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <div className="app__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
