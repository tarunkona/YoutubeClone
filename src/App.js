import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommend from "./Recommend";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path="/search/:searchTerm" element={
            <div>
              <div className="app__page">
                <Sidebar/>
                <SearchPage/>
              </div>
            </div>
          } />
          <Route path="/" element={
            <div>
              <div className="app__page">
                <Sidebar/>
                <Recommend/>
              </div>
            </div>
          } />
        </Routes>
      </Router>
      

    </div>
  );
}


export default App;
