import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AllUsers from './pages/AllUsers';
import AddUser from './pages/AddUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
