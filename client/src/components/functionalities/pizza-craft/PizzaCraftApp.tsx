import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Counter from "./components/counter";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import { AnimatePresence } from "framer-motion";


interface IPizza {
  base: string;
  toppings: string[];
  image?: string;
}

function App() {
  const [pizza, setPizza] = useState<IPizza>({
    base: "",
    toppings: [

    ],
  });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping) 
  
    ) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Aside />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza}
             setShowModal={setShowModal} />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
