import logo from './logo.svg';
import './App.css';
import Mynav from './components/Mynav';
import Myfooter from './components/Myfooter';
import Allmybooks from './components/Allmybooks';
import { useContext, useState } from 'react';
import books from "./books/history.json"
import { ThemeContextProvider } from "./context/ThemeContextProvider"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookDetails from "./pages/BookDetails"
import NotFound from "./pages/NotFound";

function App() {

  const [search, setSearch] = useState(" ")
  const [resultSearch, setResultSearch] = useState(books)
  const handleSearch = (e) => {
    setSearch(e.target.value)
    const resultTemp = books.filter((book) => {
      return book.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setResultSearch(resultTemp)
  }
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <div>
          <Mynav handleSearch={handleSearch} />
           <Routes>
            <Route path="/" element={<Allmybooks resultSearch={resultSearch} />} />
            <Route path="/bookdetails/:asin" element={<BookDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
          <Myfooter />
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
