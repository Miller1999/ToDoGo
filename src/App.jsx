//React

//Components
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";
//CSS
import "./App.css";
import ToDo from "./Components/ToDo/ToDo";
import ToDos from "./Components/ToDos/ToDos";

const ToDoPrueba = [
  {
    text: "Item 1",
    completed: false,
  },
  {
    text: "Item 2",
    completed: false,
  },
  {
    text: "Item 3",
    completed: true,
  },
];

export default function App() {
  return (
    <main className="flex flex-col gap-5 justify-center w-2/4 relative">
      <Header />
      <Tabs />
      <Search />
      <ToDos>
        {ToDoPrueba.map((todo) => {
          return (
            <ToDo key={todo.text} text={todo.text} completed={todo.completed} />
          );
        })}
      </ToDos>
      <Footer />
    </main>
  );
}
