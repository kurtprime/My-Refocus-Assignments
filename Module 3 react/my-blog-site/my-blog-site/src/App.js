import "./App.css";
import BlogPost from "./Components/BlogPost";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { createContext, useState } from "react";

export const myContext = createContext();

function App() {
  const [submitForm, setSubmitForm] = useState([
    {
      id: 1,
      title: "How to Make a Delicious Smootie",
      author: "Jane Doe",
      date: "2023-03-01",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto at veniam provident, quos nulla aperiam explicabo! Minima impedit quibusdam perferendis optio numquam, commodi ab explicabo necessitatibus laboriosam repudiandae neque!",
    },
    {
      id: 2,
      title: "The Benefits of Running Every Day",
      author: "Jane Doe",
      date: "2023-04-01",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt dignissimos optio sapiente fuga. Fugit, quod enim magni dolores quos, nisi atque tenetur assumenda, voluptatem provident adipisci iusto dignissimos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusamus eum. Cum est quia maxime, nihil ipsa iure, delectus nisi odit accusamus similique eos. Vitae dolores maiores in. Vero, aperiam.",
    },
    {
      id: 3,
      title: "10 Tips For Traveling on a Budget",
      author: "Jem Laguna",
      date: "2023-04-26",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt dignissimos optio sapiente fuga. Fugit, quod enim magni dolores quos, nisi atque tenetur assumenda, voluptatem provident adipisci iusto dignissimos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusamus eum. Cum est quia maxime, nihil ipsa iure, delectus nisi odit accusamus similique eos. Vitae dolores maiores in. Vero, aperiam.",
    },
  ]);
  return (
    <myContext.Provider value={{ submitForm, setSubmitForm }}>
      <Navbar />

      <BlogPost />

      <Footer />
    </myContext.Provider>
  );
}

export default App;
