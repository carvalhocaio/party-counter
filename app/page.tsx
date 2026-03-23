import { AddToCalendar } from "./components/add-to-calendar";
import { Countdown } from "./components/countdown";

export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-background sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-primary tracking-tight font-headline">
            PAGODE DA GABI
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="font-medium font-body text-primary border-b-2 border-primary pb-1 hover:text-secondary transition-colors duration-300"
              href="#location"
            >
              Localização
            </a>
          </div>
          <AddToCalendar />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex flex-col items-center justify-center px-6 overflow-hidden pt-12">
          {/* Asymmetric Background Blobs */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-fixed opacity-10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary-container opacity-20 rounded-full blur-3xl" />

          <div className="z-10 text-center max-w-4xl w-full">
            <h1 className="font-headline font-bold text-6xl md:text-8xl text-primary tracking-tighter mb-4 leading-none">
              PAGODE DA GABI
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium italic mb-12 handwritten-style">
              Deixa a vida te levar até o meu aniversário
            </p>

            {/* Countdown Bento Grid */}
            <Countdown />
          </div>
        </section>

        {/* Line-up Section */}
        <section className="py-24 px-6 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-5xl text-primary mb-4 tracking-tight">
                Line-up
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto rounded-full" />
            </div>

            <div className="relative">
              {/* Vertical Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-surface-container-high -translate-x-1/2" />

              <div className="space-y-12 relative">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
                  <div className="w-full md:w-[45%] mb-4 md:mb-0 text-center md:text-right">
                    <div className="bg-primary-container inline-block px-6 py-2 rounded-lg beer-shadow">
                      <span className="font-headline font-black text-3xl text-on-primary-container">
                        15:00
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  <div className="w-full md:w-[45%] text-center md:text-left">
                    <h3 className="font-headline font-bold text-2xl text-on-surface mb-1">
                      Pagode com Carol Rost
                    </h3>
                    <p className="text-on-surface-variant font-medium">
                      O melhor do samba e pagode para começar os trabalhos.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full">
                  <div className="w-full md:w-[45%] mb-4 md:mb-0 text-center md:text-left">
                    <div className="bg-tertiary-container inline-block px-6 py-2 rounded-lg beer-shadow">
                      <span className="font-headline font-black text-3xl text-on-tertiary-container">
                        18:00
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary border-4 border-background z-10" />
                  <div className="w-full md:w-[45%] text-center md:text-right">
                    <h3 className="font-headline font-bold text-2xl text-on-surface mb-1">
                      Sertanejo com Jo e Edinho
                    </h3>
                    <p className="text-on-surface-variant font-medium">
                      Modão e animação para fechar com chave de ouro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convite Section: The Poster */}
        <section className="py-24 px-6 bg-surface-container-low relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              {/* Stylized Frame */}
              <div className="bg-surface-container-lowest p-4 rounded-lg beer-shadow -rotate-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Aniversário da Gabi em um estilo de festa de pagode"
                  className="w-full h-auto rounded-sm object-cover"
                  src="/gabi.jpg"
                />
              </div>
              {/* Overlapping Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-container rounded-full flex items-center justify-center rotate-12 beer-shadow z-20">
                <span className="material-symbols-outlined text-4xl text-on-primary-container">
                  cake
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Um Sábado de <span className="text-tertiary">Puro Samba</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Prepare o coração e o gogó! Vou comemorar meu aniversário do
                jeito que a gente mais gosta: com muito pagode, cerveja
                trincando e os melhores amigos ao redor da mesa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container">
                  <span className="material-symbols-outlined text-secondary">
                    celebration
                  </span>
                  <div>
                    <h4 className="font-bold font-label text-on-surface">
                      Atração Ao Vivo
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Pagode e sertanejo pra não deixar ninguém parado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container">
                  <span className="material-symbols-outlined text-primary">
                    sports_bar
                  </span>
                  <div>
                    <h4 className="font-bold font-label text-on-surface">
                      Open Bar
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Cerveja gelada liberada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 px-6 bg-background" id="location">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-5xl text-primary mb-4">
                Onde vai acontecer
              </h2>
              <p className="text-on-surface-variant font-label font-medium">
                Não tem erro, é só seguir o som do pandeiro.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-xl overflow-hidden beer-shadow grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-bold font-label mb-4">
                    ESPAÇO ROCHA
                  </span>
                  <h3 className="font-headline font-bold text-3xl mb-2 text-on-surface">
                    Espaço Rocha
                  </h3>
                  <p className="text-on-surface-variant">
                    Rua Brasília - Novo Horizonte, Cuiabá - MT, 78058-695
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                      <span className="material-symbols-outlined">
                        schedule
                      </span>
                    </div>
                    <div>
                      <p className="font-bold font-label">A partir das 12:00</p>
                      <p className="text-sm text-on-surface-variant">
                        Chegue cedo para pegar o melhor lugar!
                      </p>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-secondary font-bold font-label hover:underline decoration-primary-fixed underline-offset-8 transition-all"
                    href="https://maps.google.com/maps?q=-15.578592300415039%2C-56.033973693847656&z=17&hl=pt-BR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">
                      directions
                    </span>
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

              <div className="h-[400px] md:h-auto min-h-[400px] bg-surface-container-highest relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Mapa do local do evento"
                  className="w-full h-full object-cover grayscale opacity-60 contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3EqiP-m420lvzwmUwidDTNN9QYGlxi3hCs1ng1AywFJmYz46jnhnGX29PMMRkw6Yi6iXTj3WP6_nf_8FVnVcC0UFDbVSrXOR1uRW_jbuYsMV6Nw70OFgwXaoOH4lywocQtfAorfvSp7SboIKHRq2yflJSBU4UFVZSaq90K-1f9SSGTCYMLvg-5R0ohywjGv7qwD7bJJPVSsk7Oy5YHRbRpXQbYKxZ01rm5co8rBhhJgMOhuxGdnCEYnOuhgRQ7lP72_7ehshp1sF"
                />
                {/* Marker Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span
                      className="material-symbols-outlined text-6xl text-primary animate-bounce"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-on-surface/20 rounded-full blur-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background w-full py-12 mt-auto border-t border-outline-variant/15">
        <div className="flex flex-col items-center gap-6 w-full px-8">
          <div className="text-lg font-bold text-primary font-headline">
            PAGODE DA GABI
          </div>
          <nav className="flex gap-8">
            <a
              className="text-on-surface font-bold font-label hover:underline decoration-primary-container underline-offset-4 transition-all duration-200"
              href="#location"
            >
              Localização
            </a>
          </nav>
          <p className="text-sm font-body text-on-surface text-center max-w-md opacity-80">
            © 2026 Pagode da Gabi • Deixa a vida me levar
          </p>
        </div>
      </footer>
    </>
  );
}
