

const Header = ({ setSearch, search, getBooks }: { setSearch: (search: string) => void, search: string, getBooks: () => void }) => {

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-16 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold text-blue-900 dark:text-blue-200 tracking-tight">
             Busca Tu Libro Favorito
            </span>

          </div>
          <div className="flex items-center gap-6">
            <div className="relative flex items-center group">

              <input
                className="pl-5 pr-6 py-2.5 w-64 bg-surface-container-highest border-none rounded-full text-sm font-body focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                placeholder="Buscar ..."
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyDown={getBooks}
              />

              <button  onClick={getBooks} className="material-symbols-outlined absolute right-4 text-slate-400 group-focus-within:text-primary transition-colors">
                search
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header