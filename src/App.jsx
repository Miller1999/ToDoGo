//React

//Components
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Footer from "./Components/Footer/Footer";
//CSS
import "./App.css";

// const ToDoPrueba = [
//   {
//     text: "Item 1",
//     completed: true,
//   },
//   {
//     text: "Item 2",
//     completed: false,
//   },
//   {
//     text: "Item 3",
//     completed: true,
//   },
// ];

export default function App() {
  return (
    <main className="flex flex-col gap-5 justify-center w-2/4 relative">
      <Header />
      <Tabs />
      <Footer />
    </main>
  );
}
