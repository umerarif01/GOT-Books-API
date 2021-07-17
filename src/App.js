import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [books, setBooks] =  useState(null);

    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
        console.log(response.data);
    }
  
  
  return (
    <>
    <center>
    <h1>Games of Thrones Books Api ⚔️</h1>
<button onClick={fetchData}>Fetch Data</button>
</center>

<div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <center>
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {cleanedDate}</p>
                  <p>📕: {book.publisher}</p>
                </div>
              </div>
              </center>
            );
          })}
     
      </div>
    </>
  );
}

export default App;
