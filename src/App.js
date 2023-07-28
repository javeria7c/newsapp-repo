import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*Notes
1. Advantages of using rtk: short code, readability, fast, easily maintainable.
2. When we use react redux, we have to a use a gobal store for storing and saving again and again, and issue of refetch arises, react query saves us from this problem, becasue it serves as a global store, and a single source of trutch which holds the information about states, and prevetns refetching.
3. By using react query, products are only gonna fetched once, and storing the cache and manipulating everything for us.*/
