import React from 'react'

const Error = () => {
  return (
    <>
        <main className="flex-1 px-6 md:px-16 lg:px-32 py-12 md:py-20 flex flex-col items-center justify-center text-center">
  {/* Hero Illustration Area */}
  <div className="relative w-full max-w-2xl mb-12">
    <div className="absolute inset-0  from-primary/5 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
    <div className="flex justify-center items-center">
      <div className="relative editorial-shadow rounded-xl overflow-hidden bg-white p-8">
        {/* Evocative Illustration */}
        <div className="w-64 h-80 bg-surface-container-low rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
          {/* Background texture / visual soul */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#00236f 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />
          {/* Lost Book / Empty Shelf Graphic */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="material-symbols-outlined text-8xl text-slate-300/60 mb-4"
              style={{ fontVariationSettings: '"wght" 200' }}
            >
              local_library
            </span>
            <div className="w-32 h-1 bg-slate-200 rounded-full mb-2" />
            <div className="w-24 h-1 bg-slate-200 rounded-full opacity-60" />
          </div>
          {/* Decorative "Dust" or "Light" particles */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-100/30 blur-xl" />
          <div className="absolute bottom-10 left-4 w-16 h-16 rounded-full bg-blue-100/30 blur-xl" />
        </div>
        {/* Asymmetric Overlay Element */}
        <div className="absolute -right-4 -bottom-4 w-24 h-32 bg-surface-container-highest rounded-lg shadow-lg rotate-12 flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            search_off
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Text Content */}
  <div className="max-w-xl">
   
    <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-extrabold tracking-tight leading-tight mb-6">
      No se han encontrado resultados en los archivos.
    </h2>
    <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
      Parece que las páginas que buscas no han sido catalogadas aún, o quizás se
      encuentran bajo otro epígrafe en nuestra biblioteca digital.
    </p>
   
  </div>
  
        </main>
    </>
  )
}

export default Error