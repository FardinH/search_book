import './App.css';
import React from "react";

import SearchBarContainer from "./componets/Search/SearchBarContainer";
import ViewBookCardContainer from "./componets/ViewBook/ViewBookCardContainer";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">


        <Routes>
            <Route path="/" element={ <SearchBarContainer/>}>
            </Route>

            <Route path="book" element={<ViewBookCardContainer />}>
                <Route path=":bookId" element={<ViewBookCardContainer />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
