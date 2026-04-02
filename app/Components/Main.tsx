import React from 'react'

const Main = ({Libros}: {Libros: any[]}) => {
  return (
    <>
        <main className="flex-1 bg-surface-container-low min-h-screen px-16 py-12">
      <header className="mb-16 space-y-4">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">
            Editorial Selection
          </span>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>
        <h1 className="text-5xl font-extrabold text-on-surface tracking-tight leading-tight max-w-2xl">
          Buscas tu Libro Favorito 
          <span className="text-primary italic">Encontralo Aqui</span>.
        </h1>
      </header>
      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {/* Book Card 1 */}
        {Libros.map(({key, title, author_name, first_publish_year,  cover_i}) => (
          <div key={key} className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-6 editorial-shadow transition-all duration-300 hover:-translate-y-1">
          <div className="relative -mt-12 mb-6 h-72 w-full rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
            <img
              alt="The Silent Archive book cover"
              className="w-full h-full object-cover"
              data-alt="classNameic book cover with elegant serif typography on a deep blue textured background, gold foil accents, sophisticated editorial look"
              src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
            />
            <div className="absolute inset-0from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">
              {first_publish_year}
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mb-2">
                {title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              {author_name}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-on-surface">4.9</span>
              </div>
              <button className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                View Details
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
     
    </main>
    </>
  )
}

export default Main