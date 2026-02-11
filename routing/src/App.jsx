import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/navbar";
import Product from "./Pages/Product";
import UserList from "./Components/UserList";
import PostDetails from "./Components/PostDetails";
import ToDo from "./Pages/ToDo";
import ToDoProvider from "./context/contextProvider/ToDoProvider";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/users/:id" element={<UserList />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>

        
        <ToDoProvider>
          <ToDo />
        </ToDoProvider>
      </div>
    </div>
  );
}

export default App;
