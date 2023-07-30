//React
import { Fragment } from "react";

//Components
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Search from "./Components/Search/Search";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";
//CSS
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Tabs />
      <Search />
      <List />
      <Footer />
    </Fragment>
  );
}
