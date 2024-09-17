import Header from "./src/Header"
import Footer from "./src/Footer";
import "./App.css"
import Content from "./src/Content";
import react,{useState} from 'react'

function App() {
  const [currPage,setCurrentPage]  = useState("Portfolio");
  return (
    <div className="App">
     <Header currPage = {currPage} setCurrPage={setCurrentPage}/>
    <Content currPage = {currPage}/>
     <Footer />
    </div>
  );
}

export default App;