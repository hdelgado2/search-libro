import React from 'react'

const Main = () => {
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
          Discover the next masterpiece for your{" "}
          <span className="text-primary italic">private collection</span>.
        </h1>
      </header>
      {/* Book Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {/* Book Card 1 */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-6 editorial-shadow transition-all duration-300 hover:-translate-y-1">
          <div className="relative -mt-12 mb-6 h-72 w-full rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
            <img
              alt="The Silent Archive book cover"
              className="w-full h-full object-cover"
              data-alt="classNameic book cover with elegant serif typography on a deep blue textured background, gold foil accents, sophisticated editorial look"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiDwnCYXqzTcAjm1U3YjPZZZ0E0JvcJHklBXI74WhptORhgI3zcwIylnLFkGDYecs-QcAlImwfD9P4oLM7jACclDqliw9ixX0NSY6WivhfFARuybwSNM0L_wYz1jhsW6VMkSDHFBiKTFpq5WenLItbcJdyrF11rUvyff2TPrUkPLqXPnO6e83-JCSLf5nVBdOuPwWOz1n9kwftvtDFX4Hljw4dmYadih_m42XVvzGavvAcl_Wckx4GDtDAQueuco94374MH5lFI3s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">
              Fiction • Noir
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mb-2">
              The Silent Archive
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              Julian V. Sterling
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
        {/* Book Card 2 */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-6 editorial-shadow transition-all duration-300 hover:-translate-y-1">
          <div className="relative -mt-12 mb-6 h-72 w-full rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
            <img
              alt="Architecture of Light book cover"
              className="w-full h-full object-cover"
              data-alt="Minimalist modern book cover featuring clean lines and geometric shadows, stark architectural aesthetic, premium paper texture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRFE2hmVUFrUG-CCSufCvYWH6_uymJU1afZkUCaWgg8bzMJiomp3ALwjCpz2M0CITCIoyYWYs-oro-38_jnI6WSlT4JfbD7E-dKDBQE7zRn7Pg8uio6M19G7MOd9USMmBt8mjhzkARk1xh_hrEcbGeJ-QjQkFZlzdZGdEnjMw0ASzE2tQ7ZojTboBBNdmhyZR8yzO0b6NJ5Gb3QFQSMyqT9Fgx0rgzzRG6SaOIxr4wxXN-tgoDgRxe-khJCnVe_n4lMx2f5oi_Wbo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">
              Non-Fiction • Design
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mb-2">
              Architecture of Light
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              Elena Moreau
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-on-surface">4.7</span>
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
        {/* Book Card 3 */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-6 editorial-shadow transition-all duration-300 hover:-translate-y-1">
          <div className="relative -mt-12 mb-6 h-72 w-full rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
            <img
              alt="Dust and Eternity book cover"
              className="w-full h-full object-cover"
              data-alt="Vintage style book cover with distressed textures, antique illustrations of constellations, mystical and literary mood"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW_9YNeAozM4YnxKngITUDj9e-q0tVdxFXTFtZvSNzFbffoMQ1nNuNS0dA3jQFz4WKNXbGigF_R0SakgcVaBQr1O2uCbVoo7RYQLwVEW0mOaBnTJTtgPxcI15Zep5iiDmr78hrB4AYItMedcJgXWANUhhurrvoEh8Iibe7cn6OTExrcJbFqe69j0wMHR-eqFZG4Qv9U_rqCam89QHwpfKIQoyJiBKd80gy6BCJxMYUQJpmV7GAB3I546I8tZlZA13bwkO1OFfFpzQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">
              Rare Finds • Poetry
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mb-2">
              Dust and Eternity
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              Omar El-Sayed
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-on-surface">5.0</span>
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
        {/* Book Card 4 */}
        <div className="group relative flex flex-col bg-surface-container-lowest rounded-xl p-6 editorial-shadow transition-all duration-300 hover:-translate-y-1">
          <div className="relative -mt-12 mb-6 h-72 w-full rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-[1.02]">
            <img
              alt="The Kinetic Soul book cover"
              className="w-full h-full object-cover"
              data-alt="Dynamic modern book cover with abstract vibrant shapes and bold typography, contemporary art style, energetic and intellectual"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8C--yxP_Is3bbyCRXyc9wgpJyJQbdgCtmQuW9cYM1vyX7d5imDeBvibe3-TUvVV6V0NoRsgCLuh55f4JrJpMvadTIOu1ULFwoUaPHiNCEc3cr7RPNyv3zJE7xCt9BbQGCrzmY5SDf6rjc9VXy1h-28a0Y5HxhOngcWRaOf7UxayQ1zqQ6ryiemuMYupFC3DZKhi6rzxXXaQlDtOZOzH4WzQzBpBY4GPrShT17Q2n3wUskpim9zs_T7v6MSHZ2o1LIrUijV4hA2Gg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-1">
              Fiction • Contemporary
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mb-2">
              The Kinetic Soul
            </h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">
              Sarah Chen
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-on-surface">4.8</span>
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
      </div>
     
    </main>
    </>
  )
}

export default Main