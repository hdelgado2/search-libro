import React from 'react'

const Header = () => {
  return (
    <>
       <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
    <div className="flex justify-between items-center px-16 py-4 w-full max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-12">
        <span className="text-2xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">
          The Literary Curator
        </span>
        <nav className="hidden md:flex gap-8 items-center font-manrope tracking-tight font-medium">
          <a
            className="text-blue-900 dark:text-blue-400 border-b-2 border-amber-500 pb-1 hover:text-blue-700 transition-colors duration-200 ease-in-out"
            href="#"
          >
            Browse
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors duration-200 ease-in-out"
            href="#"
          >
            Collections
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors duration-200 ease-in-out"
            href="#"
          >
            Library
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors duration-200 ease-in-out"
            href="#"
          >
            Curator's Choice
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative flex items-center group">
          <span className="material-symbols-outlined absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="pl-12 pr-6 py-2.5 w-64 bg-surface-container-highest border-none rounded-full text-sm font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
            placeholder="Search the archives..."
            type="text"
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-blue-900 dark:text-blue-400 hover:text-blue-700 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-blue-900 dark:text-blue-400 hover:text-blue-700 transition-colors">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
            <img
              alt="User profile curator avatar"
              data-alt="Sophisticated portrait of a professional woman with a clean minimal background, soft studio lighting, editorial style"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS2j7qJcplWz9g6LikJF4jB2l6k8c0QgjUCIS79w9UqD1ByQpUVSpvrdBi-xOJ49fkFAJmlAgOVpicoT6R3Onu1TtKogUuQQW7whFVmVGBSCjK9bOFjJaYqR_qhAnqX4XBRCtFbZrzwuqEcSJKJUCRQQbCDqk7DrrfwNNXbpUMXhO6xY7LLSztbixL5WBWccmDDwmSjd5ZL6sSPVrAXIdax24rNlo1XE5OqTOfeVKtNKyXvyeMzxF4JoFFySMB9L7Cqzyt_U6xCqM"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header