import Image from "next/image";

const WA = {
  alexander: "593985126836",
  byron: "593995158295",
};

const waLink = (numero: string, mensaje: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

const CTA_PRINCIPAL = waLink(
  WA.byron,
  "Hola NodoTech, quiero una página web para mi negocio."
);

const servicios = [
  {
    n: "01",
    titulo: "Landing page",
    gancho: "Una sola página. Un solo objetivo.",
    texto:
      "Para presentar un servicio, lanzar una campaña o captar contactos. Todo lo que el visitante necesita saber, en una sola pantalla que baja.",
    incluye: [
      "Diseño propio, sin plantillas",
      "Versión móvil cuidada",
      "Formulario y botón de WhatsApp",
      "Textos escritos para convertir",
    ],
  },
  {
    n: "02",
    titulo: "Sitio institucional",
    gancho: "Varias páginas. Una sola voz.",
    texto:
      "Para empresas y profesionales que necesitan mostrar servicios, equipo, casos y contenido, y aparecer en los buscadores.",
    incluye: [
      "Arquitectura de varias páginas",
      "Blog o sección de recursos",
      "Posicionamiento y analítica",
      "Panel para editar contenidos",
    ],
    destacado: true,
  },
  {
    n: "03",
    titulo: "Plataforma a medida",
    gancho: "Cuando el sitio tiene que hacer cosas.",
    texto:
      "Acceso por usuarios, cobros en línea, reservas, cursos, juegos, paneles de administración. Software hecho para su operación.",
    incluye: [
      "Registro y acceso de usuarios",
      "Pasarela de pagos",
      "Panel de administración",
      "Integraciones y automatizaciones",
    ],
  },
];

const proyectos = [
  {
    marca: "Clínica Dental Sonrisa",
    tipo: "Landing page",
    texto:
      "Una sola página pensada para que el paciente entienda el servicio y agende sin dar vueltas.",
    tags: ["Landing", "Agendamiento", "WhatsApp"],
    imagenes: [
      { src: "/proyectos/dental-hero.webp", alt: "Portada del sitio de Clínica Dental Sonrisa" },
      { src: "/proyectos/dental-servicios.webp", alt: "Sección de servicios de Clínica Dental Sonrisa" },
    ],
  },
  {
    marca: "FUNDIPRODE",
    tipo: "Plataforma completa",
    texto:
      "Sitio institucional con cursos, juegos de trivia, agendamiento de citas y pasarela de pago integrada.",
    tags: ["Plataforma", "Pagos en línea", "Usuarios", "Gamificación"],
    imagenes: [
      { src: "/proyectos/fundiprode-hero.webp", alt: "Portada de la plataforma de FUNDIPRODE" },
      { src: "/proyectos/fundiprode-juegos.webp", alt: "Sección de juegos educativos de FUNDIPRODE" },
    ],
  },
  {
    marca: "ALTAlex",
    tipo: "Sitio institucional + herramientas",
    texto:
      "Estudio jurídico con su propio conjunto de calculadoras legales y generador de documentos.",
    tags: ["Institucional", "Herramientas propias", "Cálculo"],
    imagenes: [
      { src: "/proyectos/altalex-hero.webp", alt: "Portada del sitio del estudio jurídico ALTAlex" },
      { src: "/proyectos/altalex-lexec.webp", alt: "Calculadoras legales del sitio ALTAlex" },
    ],
  },
  {
    marca: "El Club del Plot Twist",
    tipo: "Blog con panel propio",
    texto:
      "Reseñas de libros y películas, abiertas al público, con panel de administración para publicar sin depender de nadie.",
    tags: ["Blog", "Panel de control", "Comunidad"],
    imagenes: [
      { src: "/proyectos/plottwist-hero.webp", alt: "Portada de El Club del Plot Twist" },
      { src: "/proyectos/plottwist-perfil.webp", alt: "Página de autora de El Club del Plot Twist" },
    ],
  },
];

const pasos = [
  {
    n: "01",
    titulo: "Conversamos",
    texto:
      "Un mensaje de WhatsApp basta para empezar. Entendemos qué vende, a quién y qué debe lograr el sitio.",
  },
  {
    n: "02",
    titulo: "Propuesta por escrito",
    texto:
      "Alcance, estructura, plazo y precio en un documento. Lo que está incluido y lo que no. Sin sorpresas después.",
  },
  {
    n: "03",
    titulo: "Construcción a la vista",
    texto:
      "Le mostramos el sitio funcionando, no maquetas. Usted corrige sobre lo real, mientras se construye.",
  },
  {
    n: "04",
    titulo: "Publicación y entrega",
    texto:
      "Dominio, alojamiento, analítica y capacitación. Todos los accesos quedan a nombre suyo, no del nuestro.",
  },
];

function IconoWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.8 9.8 0 0 0 4.69 1.2h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19 4.87 9.75 9.75 0 0 0 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.19 8.2-8.19a8.15 8.15 0 0 1 8.19 8.2c0 4.52-3.68 8.19-8.19 8.19Z" />
    </svg>
  );
}

function Flecha() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  const enlaces = [
    { href: "#servicios", texto: "Servicios" },
    { href: "#trabajo", texto: "Trabajo" },
    { href: "#proceso", texto: "Proceso" },
    { href: "#nosotros", texto: "Nosotros" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-mist-50">
          Nodo<span className="text-ember-500">Tech</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="text-sm text-mist-400 transition-colors hover:text-mist-50"
            >
              {e.texto}
            </a>
          ))}
        </nav>
        <a
          href={CTA_PRINCIPAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-ember-400"
        >
          <IconoWhatsApp className="h-4 w-4" />
          Escríbenos
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-ember-500/12 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-ink-900/70 px-3 py-1 text-xs font-medium tracking-wide text-mist-400">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
            Estudio digital · Ecuador · Atención 100% en línea
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-mist-50 sm:text-5xl lg:text-6xl">
            De una sola página
            <br />
            a una plataforma
            <br />
            <span className="text-ember-500">completa.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
            Diseñamos y programamos sitios web a medida. Desde una landing que
            convierte hasta plataformas con acceso de usuarios y cobros en
            línea. Sin plantillas y sin intermediarios: usted habla con quien
            construye.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={CTA_PRINCIPAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-ember-400"
            >
              <IconoWhatsApp />
              Conversemos por WhatsApp
            </a>
            <a
              href="#trabajo"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist-200 transition-colors hover:border-mist-600 hover:text-mist-50"
            >
              Ver nuestro trabajo
              <Flecha />
            </a>
          </div>
        </div>

        <div className="relative h-[210px] sm:h-[400px] lg:h-[460px]">
          <div className="absolute right-0 top-0 w-full overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/60 sm:w-[78%] sm:rotate-[2.5deg]">
            <Image
              src="/proyectos/fundiprode-hero.webp"
              alt="Plataforma web desarrollada por NodoTech"
              width={1200}
              height={645}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-0 hidden w-[70%] -rotate-[3deg] overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/70 sm:block">
            <Image
              src="/proyectos/altalex-hero.webp"
              alt="Sitio institucional desarrollado por NodoTech"
              width={1200}
              height={645}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Franja() {
  const items = [
    "Atención 100% en línea",
    "Entregas en días, no en meses",
    "Código propio, sin plantillas",
    "Los accesos quedan a su nombre",
  ];
  return (
    <div className="border-b border-line/70 bg-ink-900">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-8 sm:grid-cols-4">
        {items.map((t) => (
          <p key={t} className="px-2 text-center text-xs font-medium leading-relaxed text-mist-400 sm:text-sm">
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

function Titulo({ etiqueta, titulo, bajada }: { etiqueta: string; titulo: string; bajada?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ember-500">{etiqueta}</p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-mist-50 sm:text-4xl">
        {titulo}
      </h2>
      {bajada && <p className="mt-4 text-base leading-relaxed text-mist-400">{bajada}</p>}
    </div>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="border-b border-line/70 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Titulo
          etiqueta="Servicios"
          titulo="Tres niveles, según lo que su negocio necesite hoy."
          bajada="No todos los negocios necesitan lo mismo el primer día. Se empieza por donde tiene sentido y el sitio crece después."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {servicios.map((s) => (
            <article
              key={s.n}
              className={`flex flex-col rounded-2xl border p-7 transition-colors ${
                s.destacado
                  ? "border-ember-500/40 bg-ink-850"
                  : "border-line bg-ink-900 hover:border-mist-600/50"
              }`}
            >
              <p className="font-display text-sm font-bold text-ember-500">{s.n}</p>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-mist-50">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm font-medium text-ember-300">{s.gancho}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist-400">{s.texto}</p>
              <ul className="mt-7 space-y-2.5 border-t border-line pt-6 lg:mt-auto">
                {s.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-mist-200">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portafolio() {
  return (
    <section id="trabajo" className="border-b border-line/70 bg-ink-900 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Titulo
          etiqueta="Trabajo realizado"
          titulo="Sitios que ya están en línea y funcionando."
          bajada="Cada uno resolvió un problema distinto. Es la mejor forma de mostrar hasta dónde llega el trabajo."
        />
        <div className="space-y-20">
          {proyectos.map((p, idx) => (
            <article
              key={p.marca}
              className={`grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center ${
                idx % 2 === 1 ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-500">
                  {p.tipo}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-mist-50 sm:text-3xl">
                  {p.marca}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-400 sm:text-base">{p.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-ink-850 px-3 py-1 text-xs text-mist-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`grid gap-4 sm:grid-cols-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {p.imagenes.map((im) => (
                  <div
                    key={im.src}
                    className="overflow-hidden rounded-xl border border-line bg-ink-850 shadow-xl shadow-black/40"
                  >
                    <Image
                      src={im.src}
                      alt={im.alt}
                      width={1200}
                      height={645}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className="border-b border-line/70 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Titulo
          etiqueta="Cómo trabajamos"
          titulo="Cuatro pasos, sin vueltas."
          bajada="Todo se hace en línea. No hace falta que se traslade ni que coordine reuniones presenciales."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.n} className="bg-ink-900 p-7">
              <p className="font-display text-3xl font-bold text-ink-700">{p.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold text-mist-50">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-b border-line/70 bg-ink-900 py-24">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-ember-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ember-500">
          Quiénes somos
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-mist-50 sm:text-4xl">
          Esto empezó de la nada.
        </h2>
        <div className="mt-7 space-y-5 text-base leading-relaxed text-mist-400">
          <p>
            NodoTech nació de un hobby. De quedarse hasta tarde probando cómo
            funcionaba algo, sin que nadie lo pidiera y sin que nadie lo pagara.
            Ese hobby se volvió oficio, y el oficio terminó siendo una forma de
            trabajar: hacer las cosas bien porque nos gusta hacerlas.
          </p>
          <p className="border-l-2 border-ember-500 pl-5 text-mist-200">
            La inteligencia artificial llegó para ayudarnos, no para
            reemplazarnos. La usamos todos los días, y justamente por eso
            sabemos dónde termina su trabajo y dónde empieza el criterio de una
            persona. Detrás de cada sitio hay alguien pensando. Siempre.
          </p>
          <p>
            Somos dos socios fundadores. No hay call center, no hay ejecutivo de
            cuenta, no hay intermediarios: usted conversa directamente con quien
            diseña y programa su sitio.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const socios = [
    { nombre: "Alexander Matute", numero: WA.alexander, visible: "098 512 6836" },
    { nombre: "Byron Molina", numero: WA.byron, visible: "099 515 8295" },
  ];
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl border border-line bg-ink-850 p-10 sm:p-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ember-500">
              Contacto
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-mist-50 sm:text-4xl">
              Cuéntenos qué necesita. La primera conversación no cuesta nada.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-400">
              Escríbanos por WhatsApp con una idea de lo que quiere lograr.
              Le respondemos con una propuesta de alcance, plazo y precio, por
              escrito.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {socios.map((s) => (
              <a
                key={s.numero}
                href={waLink(s.numero, `Hola ${s.nombre.split(" ")[0]}, los encontré en la web de NodoTech.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink-900 p-6 transition-colors hover:border-ember-500/50"
              >
                <span>
                  <span className="block font-display text-lg font-bold text-mist-50">
                    {s.nombre}
                  </span>
                  <span className="mt-1 block text-sm text-mist-400">{s.visible}</span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500 text-ink-950 transition-transform group-hover:scale-105">
                  <IconoWhatsApp />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-mist-600">
            Atendemos en línea desde Ecuador, de lunes a sábado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/70 bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-28 pt-10 sm:flex-row sm:items-center sm:justify-between sm:pb-10 sm:pr-24">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-mist-50">
            Nodo<span className="text-ember-500">Tech</span>
          </p>
          <p className="mt-1 text-sm text-mist-600">
            Desarrollo web a medida · Ecuador · Atención en línea
          </p>
        </div>
        <p className="text-xs text-mist-600">
          © {new Date().getFullYear()} NodoTech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function BotonFlotante() {
  return (
    <a
      href={CTA_PRINCIPAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ember-500 text-ink-950 shadow-lg shadow-black/50 transition-transform hover:scale-105"
    >
      <IconoWhatsApp className="h-7 w-7" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Franja />
        <Servicios />
        <Portafolio />
        <Proceso />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <BotonFlotante />
    </>
  );
}
