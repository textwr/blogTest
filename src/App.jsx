import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import listData from "./Data";
import "./App.css";

function App() {
  const [contents, setContents] = useState(listData);
  return (
    <>
      <Header></Header>
      <Main contents={contents} setContents={setContents}></Main>
      <Sidebar contents={contents}></Sidebar>
      <Footer></Footer>
    </>
  );
}

export default App;
