
import { BrowserRouter as Router } from "react-router-dom"; 
import { Navbar, Content } from "./components";
import { AppProvider } from "./context/appContext";
import "./App.css";

function App() {
  return (
    <AppProvider>
  {/* // useCallbacki araştır hangi durumlarda kullanılır ona göre ekle */}
      <Router> 
        <div className="container" style={{ display: "flex" }}>
          <Navbar />      
          <Content /> 
        </div>
      </Router>
    </AppProvider>
  );
}


export default App;
