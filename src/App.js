import React from "react";
import { Header, MainContainer } from "./components";
import CreateContainer from "./components/CreateContainer";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex-col bg-primary">
        <Header />
        <main className="mt-4 md:mt-0 px-8 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/CreateItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
