import Main from '@/app/Components/Main'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Link from 'next/link'
import { ENDPOINT_DETAILS } from '@/app/Endpoint'

interface BookData {
  description?: string;
  // ... otros campos
}


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const decodedId = decodeURIComponent(id)
  const [bookTitle, authorName, coverId, key] = decodedId.split('@@')
  
  let description = "Estamos buscando el resumen de este libro para tí..."
  let subjects: string[] = []

  if (key) {
    try {
      const response = await fetch(`${ENDPOINT_DETAILS}${key}.json`)
      if (response.ok) {
        const data = await response.json()
        
        if (data.description) {
          description = typeof data.description === 'string' 
            ? data.description 
            : data.description.value
        } else {
          description = "No hay una descripción disponible para este libro en este momento."
        }
        
        if (data.subjects) {
          subjects = data.subjects.slice(0, 5)
        }
      }
    } catch (error) {
      console.error("Error fetching book details:", error)
      description = "No pudimos cargar la descripción del libro."
    }
  }
  



  return (
    <>
      <Header />
      <Main>
        
          <Link href="/" className="inline-flex items-center text-primary font-bold mb-6 hover:gap-2 transition-all">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Volver al Inicio
          </Link>
          
            <main className="pt-32 pb-24 px-16 max-w-screen-2xl mx-auto">
            {/* Hero Section: Editorial Asymmetry */}
            <section className="grid grid-cols-12 gap-16 items-center mb-32">
              <div className="col-span-5 relative group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg book-shadow transform -rotate-1 transition-transform hover:rotate-0 duration-500">
                  <img
                    alt="La Arquitectura del Silencio"
                    className="w-full h-full object-cover"
                    data-alt="Elegant minimalist book cover featuring abstract white architectural planes with deep shadows and refined typography on high-quality textured paper"
                    src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
                  />
                </div>
                {/* Decorative element following Asymmetry Rule */}
                <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
              </div>
              <div className="col-span-7">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-tertiary-fixed-variant font-label text-sm font-semibold tracking-widest uppercase">
                      New Acquisition
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-tight">
                      {bookTitle}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-on-surface-variant font-medium">
                      {authorName}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {subjects.length > 0 ? (
                      subjects.map((subject, index) => (
                        <span key={index} className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-xs font-medium uppercase tracking-wider">
                          {subject}
                        </span>
                      ))
                    ) : (
                      <>
                        <span className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-sm font-medium">
                          Literary
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-sm font-medium">
                          General
                        </span>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </section>
            <div className="grid grid-cols-12 gap-20">
              {/* Main Content: Synopsis & Author */}
              <div className="col-span-12 space-y-24">
                {/* Synopsis */}
                <section>
                  <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
                    Synopsis
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
                    {description.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </section>
                
              </div>
              {/* Sidebar: Details & Curator's Note */}

            </div>
          </main>

        
      </Main>
      <Footer />
    </>
  )
}

export default Page

