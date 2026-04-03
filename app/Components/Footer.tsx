import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="w-full mt-auto bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
    <div className="flex flex-col md:flex-row justify-between items-center px-16 py-12 w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-4 mb-8 md:mb-0">
        <span className="text-lg font-black text-blue-900 dark:text-blue-200">
          Busca tu Libro Favorito
        </span>
        <p className="font-inter text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          © 2024 The Literary Curator. An Editorial Digital Library.
        </p>
      </div>
     
    </div>
  </footer>
    </>
  )
}

export default Footer