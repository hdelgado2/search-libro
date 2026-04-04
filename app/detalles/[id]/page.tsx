import Main from '@/app/Components/Main'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Link from 'next/link'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const title = decodeURIComponent(id)

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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvarCLRg0IwW0vn5q5cI1o9yBU97ymnh2h7CWFeb3IrxwH5OXHXeXB8g4N2oEHM5LB3JtduQ7DPaS7YXmokn-5RuuyazdckGZclS1cDt5lBFhD-ZTru75iwgXGkFdRHhUqRNnJfy-Q3GpjnZ53zhW-u8b3bVcy1fsAOFVYr8Fw5dfoKgSR1QqS-10qN4utFypIDMbFEyQcwcio8k0o9kQ4r-bOaGki-2FJhkYJPUC9Ox1cmL3M2caeBDaEnJ0UF1HTtfbo4BSXYEI"
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
          <h1 className="text-7xl font-extrabold tracking-tighter text-primary leading-tight">
            La Arquitectura del Silencio
          </h1>
          <p className="text-2xl text-on-surface-variant font-medium">
            Elena Valdivia
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-sm font-medium">
            Minimalism
          </span>
          <span className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-sm font-medium">
            Architecture
          </span>
          <span className="px-4 py-1.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed-variant text-sm font-medium">
            Essay
          </span>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <button className="px-10 py-4 bg-primary text-on-primary rounded-lg font-headline font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined" data-icon="menu_book">
              menu_book
            </span>
            Read Now
          </button>
          <button className="px-10 py-4 bg-secondary-container text-on-secondary-container rounded-lg font-headline font-bold text-lg hover:bg-secondary-container/80 transition-all flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              data-icon="bookmark_add"
            >
              bookmark_add
            </span>
            Save to Library
          </button>
        </div>
      </div>
    </div>
  </section>
  <div className="grid grid-cols-12 gap-20">
    {/* Main Content: Synopsis & Author */}
    <div className="col-span-8 space-y-24">
      {/* Synopsis */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
          Synopsis
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant max-w-[70ch]">
          <p>
            In <em className="italic">La Arquitectura del Silencio</em>, Elena
            Valdivia explores the philosophical intersection between the built
            environment and the human psyche. She argues that in an increasingly
            cacophonous world, the most essential function of modern
            architecture is not to provide shelter, but to curate silence.
          </p>
          <p>
            Through a series of evocative essays, Valdivia traverses the
            globe—from the austere monasteries of the Spanish plateau to the
            subterranean meditation chambers of contemporary Tokyo. She dissects
            how light, material, and negative space can be orchestrated to
            create "pockets of stillness" that allow for profound introspection
            and cognitive restoration.
          </p>
          <p>
            This is not merely a technical manual on minimalism; it is a
            manifesto for a slower, more intentional way of existing within our
            spaces. Valdivia challenges the reader to look beyond the aesthetic
            of the void and recognize the structural necessity of quietude in
            our daily lives.
          </p>
        </div>
      </section>
      {/* Author Spotlight */}
      <section className="bg-surface-container-low rounded-xl p-12 flex gap-12 items-start">
        <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
          <img
            alt="Elena Valdivia"
            className="w-full h-full object-cover"
            data-alt="Professional portrait of a middle-aged woman with dark hair and glasses, wearing a minimalist black turtleneck, soft natural lighting, professional studio setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEJB-Tk57IsqAWqspY6HNO_lvUla-fuORKbfFL4gfboMc_4YGoNHBiYs5W9escwDnhuIH4Ai7fg47hl3DMlGvOYdT0DFHNQtr9B2H-wPt4_e1F4bdS2G1iSldOcG_j4JRCH6XML7IbNFDKHlstMQCHuy6P2hVxwaJwIv9rCGBtaP7ap4aT6qfq1r65IS-faX4j9lzjbwx2ZgM2aJSAtYIdxHwSCBhFnT1Nn9uMVuJMDMgyuQ8EhXC4yCwlkiUQS-HKZuj8sZ1JJOU"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
            Elena Valdivia
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            Elena Valdivia is a Pritzker-shortlisted architect and a leading
            theorist in phenomenological design. Based in Barcelona, her
            practice focuses on the integration of natural elements with
            industrial minimalism. Her previous works, including{" "}
            <em className="italic">The Tectonics of Memory</em>, have been
            translated into twelve languages and remain essential reading in
            architectural schools worldwide.
          </p>
          <a
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            href="#"
          >
            View Author Portfolio
            <span
              className="material-symbols-outlined"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </a>
        </div>
      </section>
    </div>
    {/* Sidebar: Details & Curator's Note */}
    <aside className="col-span-4 space-y-12">
      {/* Curator's Note */}
      <div className="relative bg-tertiary-container rounded-xl p-10 overflow-hidden">
        {/* Glassmorphism accent */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span
            className="material-symbols-outlined text-8xl"
            data-icon="format_quote"
          >
            format_quote
          </span>
        </div>
        <h3 className="text-tertiary-fixed font-headline font-bold text-xl mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined" data-icon="verified">
            verified
          </span>
          Curator's Note
        </h3>
        <blockquote className="text-2xl font-headline font-semibold text-white italic leading-snug mb-8">
          "The most profound book on design I've read this decade."
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              alt="Julian Vance"
              className="w-full h-full object-cover"
              data-alt="Portrait of a distinguished man with graying hair, wearing a navy blazer, scholarly appearance, warm soft lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ohv03CrWd7tombZyISLMXeapSR9IetpLlh-K3EmXqDs4CAoekJQ0xi4-DCzNVkWgvxYm6EiIZZi5kRxSmyDP6Stc3AbhcaYS5v7t0_ujqAXwSXQExuIQ-Qsepxj27iItjJqULDyqmQAairV7Fl-mGQGvmkerGyV9z9PV3VbUcMC58YslMGiusZwnJh_kyKRuuPHJvagXsO3w9_pO1hjCi8zHwGLeWYfxen8AbqJH5JWn__D5vvbyTjHaiR3itYwk76_whgCpGIs"
            />
          </div>
          <div>
            <p className="text-white font-bold leading-tight">Julian Vance</p>
            <p className="text-tertiary-fixed-dim text-sm">Senior Curator</p>
          </div>
        </div>
      </div>
      {/* Edition Details */}
      <div className="bg-surface-container-lowest rounded-xl p-10 space-y-8">
        <h3 className="text-primary font-headline font-bold text-xl">
          Edition Details
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
            <span className="text-on-surface-variant text-sm font-medium">
              Publisher
            </span>
            <span className="text-on-surface font-bold">Lumina Press</span>
          </div>
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
            <span className="text-on-surface-variant text-sm font-medium">
              ISBN
            </span>
            <span className="text-on-surface font-bold">978-3-16-148410-0</span>
          </div>
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
            <span className="text-on-surface-variant text-sm font-medium">
              Format
            </span>
            <span className="text-on-surface font-bold">Hardcover</span>
          </div>
          <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
            <span className="text-on-surface-variant text-sm font-medium">
              Published
            </span>
            <span className="text-on-surface font-bold">October 2023</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-on-surface-variant text-sm font-medium">
              Language
            </span>
            <span className="text-on-surface font-bold">
              Spanish (English Edition)
            </span>
          </div>
        </div>
        <button className="w-full py-4 rounded-lg bg-surface-container-highest text-primary font-bold hover:bg-surface-container-high transition-colors">
          Request Institutional Access
        </button>
      </div>
    </aside>
  </div>
</main>

        
      </Main>
      <Footer />
    </>
  )
}

export default Page