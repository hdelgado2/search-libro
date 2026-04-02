import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="w-full mt-auto bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
    <div className="flex flex-col md:flex-row justify-between items-center px-16 py-12 w-full max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-4 mb-8 md:mb-0">
        <span className="text-lg font-black text-blue-900 dark:text-blue-200">
          The Literary Curator
        </span>
        <p className="font-inter text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          © 2024 The Literary Curator. An Editorial Digital Library.
        </p>
      </div>
      <nav className="flex flex-wrap gap-8 items-center font-inter text-xs uppercase tracking-widest">
        <a
          className="text-slate-400 dark:text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 opacity-80 hover:opacity-100 transition-opacity"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-slate-400 dark:text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 opacity-80 hover:opacity-100 transition-opacity"
          href="#"
        >
          Archive Policy
        </a>
        <a
          className="text-slate-400 dark:text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 opacity-80 hover:opacity-100 transition-opacity"
          href="#"
        >
          Privacy
        </a>
        <a
          className="text-slate-400 dark:text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 opacity-80 hover:opacity-100 transition-opacity"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-amber-600 dark:text-amber-400 hover:text-blue-900 dark:hover:text-blue-100 opacity-80 hover:opacity-100 transition-opacity"
          href="#"
        >
          Contact Curator
        </a>
      </nav>
    </div>
  </footer>
    </>
  )
}

export default Footer