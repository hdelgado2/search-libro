'use client'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
import ENDPOINT from "./Endpoint";

export default function Home() {
  const [Search, setSearch] = useState("")
  const [Libros, setLibros] = useState([])


  const getBooks = async () => {
    setLibros([])
    const response = await fetch(`${ENDPOINT}?q=${Search}`)
    const data = await response.json()
    const {docs} = data
    setLibros(docs)
  
  }
  return (
    <main className="bg-surface text-on-surface">
      <Header setSearch={setSearch} search={Search} getBooks={getBooks}/>
      <div className="flex max-w-screen-2xl mx-auto">

        <Main Libros={Libros}/>
      </div>
      {/* Footer */}
      <Footer />
    </main>

  );
}
