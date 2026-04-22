"use client"
import React, { useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <>
  <footer className="w-full h-fullmt-auto bg-slate-950 text-white border-t border-white/5 transition-colors duration-300">
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-10 sm:py-14 w-full max-w-screen-2xl mx-auto text-center sm:text-left gap-10">
      
      {/* Decorative element - Appears at the TOP on mobile vertical layout */}
      <div className="flex items-center gap-6 group">
        <div className="h-px w-8 bg-blue-500/50 transition-all group-hover:w-12 hidden sm:block"></div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
          Premium Experience
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl">
        <span className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 tracking-tighter">
          Busca tu Libro Favorito
        </span>
        <p className="font-inter text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 leading-relaxed sm:leading-loose">
          © {year} Busca tu Libro Favorito. <br className="sm:hidden"/> 
          <span className="block sm:inline mt-2 sm:mt-0">
            Una Biblioteca Digital Editorial creada por Hendrix Delgado.
          </span>
        </p>
      </div>
      
    </div>
  </footer>
    </>
  )
}

export default Footer