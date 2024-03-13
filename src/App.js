import  {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Coins" element={<Coins/>} />
      <Route path="/Exchanges" element={<Exchanges/>} />
      <Route path="/Coin/:id" element={<CoinDetails/>} />
      
    </Routes>

  </Router>
}

export default App;
