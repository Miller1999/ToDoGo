//React

//Components
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Footer from "./Components/Footer/Footer";
//CSS
import "./App.css";

export default function App() {
  return (
    <main className="flex flex-col gap-5 relative main">
      <Header />
      <Tabs />
      <Footer />
    </main>
  );
}
