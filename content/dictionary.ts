import type { Lang } from "@/lib/i18n";

export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    projects: { title: string; description: string };
    contact: { title: string; description: string };
    /** Plantilles amb {name} — s'omplen amb fill() (el diccionari ha de ser serialitzable). */
    project: { title: string; description: string };
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    services: string;
    contact: string;
    switchTo: string; // "Castellano" / "Català"
    skip: string;
  };
  cursor: { view: string; open: string; project: string };
  hero: {
    kicker: string; // frase serif ("Agència digital")
    lines: string[]; // 3 línies curtes en majúscules
    intro: string;
    prev: string;
    next: string;
    services: { label: string; text: string }[];
  };
  about: { label: string; text: string; cta: string; photoAlt: string };
  services: {
    label: string; // "Què oferim"
    serviceN: string; // "Servei"
    includes: string; // "Inclou"
    title: string;
    intro: string;
    items: { name: string; desc: string; includes: string[]; image: string; alt: string }[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    view: string;
    visit: string;
    prev: string;
    next: string;
    all: string;
    counterOf: string; // "de"
  };
  process: { label: string; title: string; intro: string; steps: { title: string; desc: string }[] };
  testimonials: { label: string; title: string };
  faq: {
    label: string;
    title: string;
    titleAccent: string;
    intro: string;
    sideText: string;
    sideCta: string;
    sideAlt: string;
    items: { q: string; a: string }[];
  };
  cta: { label: string; title: string; titleAccent: string; text: string; whatsappWith: string; or: string; form: string; button: string; photoAlt: string; tag: string };
  sticky: { label: string; title: string; close: string };
  footer: { title: string; tagline: string; nav: string; social: string; contact: string; rights: string; made: string; language: string };
  contactPage: {
    title: string;
    titleAccent: string;
    intro: string;
    direct: string;
    formTitle: string;
    formIntro: string;
    name: string;
    business: string;
    message: string;
    messagePlaceholder: string;
    sendWhatsapp: string;
    sendEmail: string;
    to: string;
    hint: string;
    required: string;
  };
  aboutPage: {
    title: string;
    titleAccent: string;
    lead: string;
    who: string;
    founder: string;
    valuesLabel: string;
    values: { title: string; desc: string }[];
    toolsLabel: string;
    toolsTitle: string;
    toolsText: string;
    nfcAlt: string;
    cta: string;
  };
  projectsPage: { title: string; intro: string };
  projectPage: {
    client: string;
    sector: string;
    service: string;
    location: string;
    website: string;
    visit: string;
    did: string;
    theySay: string;
    next: string;
    back: string;
    mobileAlt: string;
    coverAlt: string;
  };
  notFound: { title: string; text: string; back: string };
};

const ca: Dictionary = {
  meta: {
    home: {
      title: "DakerStudio — Agència digital. Webs, apps, IA i automatitzacions a mida",
      description:
        "Agència digital catalana. Dissenyem webs, aplicacions, agents d'IA, automatitzacions, xarxes socials i targetes NFC per a negocis reals. Estudiem cada cas i proposem una solució a mida.",
    },
    about: {
      title: "Qui som — DakerStudio",
      description:
        "Som dos joves apassionats per la tecnologia i el disseny. Ajudem negocis reals a créixer online amb solucions digitals pensades a mida.",
    },
    projects: {
      title: "Projectes — DakerStudio",
      description: "Webs reals per a negocis reals: Restaurant Cal Franc i BVS Servei de Neteja.",
    },
    contact: {
      title: "Contacte — DakerStudio",
      description: "Parlem del teu projecte per WhatsApp, correu o Instagram. Sense compromís.",
    },
    project: {
      title: "{name} — Projecte de DakerStudio",
      description: "Com vam dissenyar i desenvolupar la web de {name}.",
    },
  },
  nav: {
    home: "Inici",
    about: "Qui som",
    projects: "Projectes",
    services: "Serveis",
    contact: "Contacte",
    switchTo: "Castellano",
    skip: "Salta al contingut",
  },
  cursor: { view: "Veure més", open: "Obrir", project: "Veure projecte" },
  hero: {
    kicker: "Agència digital",
    lines: ["Pensat per durar.", "Fet a mida.", "Cuidat en cada detall."],
    intro:
      "Dissenyem i construïm webs, aplicacions, agents d'IA i automatitzacions per a negocis reals. Estudiem cada cas i proposem una solució a mida.",
    prev: "Servei anterior",
    next: "Servei següent",
    services: [
      { label: "Webs", text: "Webs que expliquen bé qui ets i converteixen visites en clients." },
      { label: "Xarxes socials", text: "Contingut i estratègia perquè les xarxes treballin per al teu negoci." },
      { label: "Aplicacions", text: "Aplicacions a mida per resoldre problemes concrets del dia a dia." },
      { label: "Agents d'IA", text: "Agents que responen, orienten i atenen els teus clients a qualsevol hora." },
      { label: "Automatitzacions", text: "Automatitzem les tasques repetitives perquè guanyis temps." },
      { label: "Targetes NFC", text: "Targetes NFC per aconseguir ressenyes de Google amb un sol toc." },
    ],
  },
  about: {
    label: "Qui som",
    text: "Som dos joves apassionats per la tecnologia, el disseny i el món digital. A DakerStudio ajudem negocis reals a créixer online amb solucions digitals pensades a mida. Treballem amb serietat, comunicació directa i compromís en cada projecte.",
    cta: "Més sobre nosaltres",
    photoAlt: "David i Iker, fundadors de DakerStudio",
  },
  services: {
    label: "Què oferim",
    serviceN: "Servei",
    includes: "Inclou",
    title: "Sis maneres d'ajudar el teu negoci.",
    intro: "Sense sector fix i sense paquets tancats. Mirem què necessites i ho construïm.",
    items: [
      {
        name: "Disseny i desenvolupament web",
        desc: "Webs a mida, ràpides i pensades per convertir: des de la primera idea fins a la publicació i el manteniment.",
        includes: ["Disseny a mida", "Desenvolupament", "Multiidioma", "SEO bàsic", "Manteniment"],
        image: "project-calfranc-desktop-1",
        alt: "Web del Restaurant Cal Franc, dissenyada per DakerStudio",
      },
      {
        name: "Xarxes socials",
        desc: "Estratègia, calendari i contingut perquè les teves xarxes tinguin una veu clara i constant.",
        includes: ["Estratègia de contingut", "Calendari editorial", "Creació de publicacions", "Seguiment"],
        image: "service-xarxes-socials",
        alt: "Persona escrivint en un portàtil",
      },
      {
        name: "Aplicacions",
        desc: "Aplicacions web i mòbils dissenyades per a un problema concret del teu negoci, sense funcions que no faràs servir.",
        includes: ["Anàlisi de necessitats", "Disseny d'interfície", "Desenvolupament", "Publicació"],
        image: "service-aplicacions",
        alt: "Codi en una pantalla",
      },
      {
        name: "Agents d'IA",
        desc: "Assistents que responen preguntes, recullen contactes i orienten els clients, integrats al teu web o a WhatsApp.",
        includes: ["Assistent de web o WhatsApp", "Entrenat amb el teu contingut", "Integració amb les teves eines"],
        image: "service-agents-ia",
        alt: "La Terra de nit vista des de l'espai, amb les ciutats il·luminades",
      },
      {
        name: "Automatitzacions",
        desc: "Connectem les eines que ja fas servir perquè les tasques repetitives passin soles: formularis, correus, fulls de càlcul, avisos.",
        includes: ["Fluxos automàtics", "Integracions", "Notificacions", "Informes"],
        image: "service-automatitzacions",
        alt: "Portàtil il·luminat a la foscor",
      },
      {
        name: "Targetes NFC per a ressenyes",
        desc: "Una targeta o un suport a la barra o a la taula: el client hi acosta el mòbil i deixa la ressenya de Google al moment.",
        includes: ["Targeta o suport personalitzat", "Enllaç directe a Google", "Configuració i entrega"],
        image: "nfc-cards",
        alt: "Targetes i suports NFC per a ressenyes de Google",
      },
    ],
  },
  projects: {
    label: "Projectes",
    title: "Treball real per a negocis reals.",
    intro: "De moment, dos projectes en línia i funcionant. Cada web, pensada per al negoci que hi ha al darrere.",
    view: "Veure projecte",
    visit: "Visitar la web",
    prev: "Projecte anterior",
    next: "Projecte següent",
    all: "Tots els projectes",
    counterOf: "de",
  },
  process: {
    label: "Procés",
    title: "Un procés clar, sense sorpreses.",
    intro: "Quatre passos, sense sorpreses. Sempre saps en quin punt és el projecte.",
    steps: [
      {
        title: "Coneixem el teu negoci",
        desc: "Parlem amb tu, mirem què tens ara i entenem què vols aconseguir. Sense compromís.",
      },
      {
        title: "Creem una proposta",
        desc: "Et preparem una proposta concreta: què farem, com ho farem i amb quin pressupost.",
      },
      {
        title: "La veus i decideixes",
        desc: "Revisem la proposta junts. Si encaixa, endavant; si no, l'ajustem o ho deixem aquí.",
      },
      {
        title: "Continuem amb tu",
        desc: "Un cop publicat, no desapareixem: manteniment, millores i suport quan el necessitis.",
      },
    ],
  },
  testimonials: { label: "Clients", title: "El que diuen els qui ja hi han treballat." },
  faq: {
    label: "Preguntes",
    title: "Les teves preguntes,",
    titleAccent: "respostes.",
    intro: "Un resum ràpid de com treballem i què pots esperar.",
    sideText: "Encara tens dubtes o necessites alguna cosa concreta? Escriu-nos i t'ho resolem.",
    sideCta: "Contacta'ns",
    sideAlt: "Targetes NFC per a ressenyes de Google, un dels productes de DakerStudio",
    items: [
      {
        q: "Quant costa una web o un projecte?",
        a: "Depèn del que necessitis. No treballem amb paquets tancats: després d'una primera conversa et fem una proposta amb un pressupost concret, sense compromís.",
      },
      {
        q: "Quant de temps triga?",
        a: "Ho concretem a la proposta segons l'abast del projecte. Et diem un calendari realista abans de començar i t'anem informant durant el procés.",
      },
      {
        q: "Treballeu amb qualsevol tipus de negoci?",
        a: "Sí. Hem treballat amb restauració i serveis, però no ens limitem a cap sector: estudiem cada negoci i proposem el que té sentit per a ell.",
      },
      {
        q: "Què necessito per començar?",
        a: "Només explicar-nos què fas i què vols aconseguir. Si tens logo, fotos o textos, millor; si no, t'ajudem a definir-ho.",
      },
      {
        q: "Feu manteniment després de publicar?",
        a: "Sí. Podem encarregar-nos del manteniment, les actualitzacions i les millores perquè no t'hagis de preocupar de res.",
      },
      {
        q: "Com ens comuniquem durant el projecte?",
        a: "Directament amb nosaltres, per WhatsApp o correu. Sense intermediaris: parles amb les persones que fan la feina.",
      },
    ],
  },
  cta: {
    label: "Treballa amb nosaltres",
    title: "El gran treball",
    titleAccent: "comença aquí",
    text: "Escriu-nos per WhatsApp i t'expliquem com ho faríem. Sense compromís.",
    whatsappWith: "WhatsApp amb",
    or: "o també",
    form: "Formulari de contacte",
    button: "Comença un projecte",
    photoAlt: "David i Iker, de DakerStudio",
    tag: "DakerStudio · Catalunya",
  },
  sticky: { label: "WhatsApp", title: "Amb qui vols parlar?", close: "Tancar" },
  footer: {
    title: "Parlem.",
    tagline: "Escriu-nos per WhatsApp i t'expliquem com ho faríem. Sense compromís.",
    nav: "Navegació",
    social: "Xarxes",
    contact: "Contacte",
    rights: "Tots els drets reservats.",
    made: "Fet a Catalunya.",
    language: "Idioma",
  },
  contactPage: {
    title: "Parlem",
    titleAccent: "del teu projecte.",
    intro: "El camí més ràpid és WhatsApp. Si prefereixes escriure amb calma, tens el formulari i el correu.",
    direct: "Directe",
    formTitle: "Explica'ns el projecte",
    formIntro: "Omple el que vulguis i tria per on ens ho envies.",
    name: "Nom",
    business: "Negoci o projecte",
    message: "Què necessites?",
    messagePlaceholder: "Una web nova, una app, automatitzar alguna cosa…",
    sendWhatsapp: "Enviar per WhatsApp",
    sendEmail: "Enviar per correu",
    to: "a",
    hint: "El formulari obre WhatsApp o el teu programa de correu amb el missatge ja escrit. No guardem cap dada.",
    required: "Escriu almenys què necessites.",
  },
  aboutPage: {
    title: "Dos joves,",
    titleAccent: "un estudi.",
    lead: "Som dos joves apassionats per la tecnologia, el disseny i el món digital. A DakerStudio ajudem negocis reals a créixer online amb solucions digitals pensades a mida. Treballem amb serietat, comunicació directa i compromís en cada projecte.",
    who: "L'equip",
    founder: "Cofundador",
    valuesLabel: "Com treballem",
    values: [
      {
        title: "Estudiem cada negoci",
        desc: "No hi ha dos negocis iguals. Abans de proposar res, entenem què fas, a qui et dirigeixes i què vols aconseguir.",
      },
      {
        title: "Comunicació directa",
        desc: "Parles amb les persones que fan la feina. Per WhatsApp, per correu o en persona, sense intermediaris.",
      },
      {
        title: "Transparència",
        desc: "Propostes clares, pressupostos concrets i un calendari realista. Sempre saps en quin punt és el projecte.",
      },
      {
        title: "Compromís",
        desc: "Publicar no és el final. Ens quedem per mantenir, millorar i acompanyar el que hem construït junts.",
      },
    ],
    toolsLabel: "Més enllà de la web",
    toolsTitle: "Tecnologia que es toca.",
    toolsText:
      "També treballem amb eines físiques com les targetes NFC per a ressenyes de Google: el client hi acosta el mòbil i deixa la valoració al moment. Petits detalls que fan créixer un negoci.",
    nfcAlt: "Targetes i suports NFC de DakerStudio per aconseguir ressenyes de Google",
    cta: "Parlem del teu projecte",
  },
  projectsPage: {
    title: "Projectes",
    intro: "De moment, dos. Cadascun amb la seva web en línia i funcionant. Aquesta pàgina creixerà amb cada nou projecte.",
  },
  projectPage: {
    client: "Client",
    sector: "Sector",
    service: "Servei",
    location: "Lloc",
    website: "Web",
    visit: "Visitar la web",
    did: "Què vam fer",
    theySay: "El que en diuen",
    next: "Projecte següent",
    back: "Tots els projectes",
    mobileAlt: "Versió mòbil de la web de {name}",
    coverAlt: "Pàgina d'inici de la web de {name}",
  },
  notFound: {
    title: "Pàgina no trobada",
    text: "Aquesta pàgina no existeix o s'ha mogut.",
    back: "Tornar a l'inici",
  },
};

const es: Dictionary = {
  meta: {
    home: {
      title: "DakerStudio — Agencia digital. Webs, apps, IA y automatizaciones a medida",
      description:
        "Agencia digital catalana. Diseñamos webs, aplicaciones, agentes de IA, automatizaciones, redes sociales y tarjetas NFC para negocios reales. Estudiamos cada caso y proponemos una solución a medida.",
    },
    about: {
      title: "Quiénes somos — DakerStudio",
      description:
        "Somos dos jóvenes apasionados por la tecnología y el diseño. Ayudamos a negocios reales a crecer online con soluciones digitales pensadas a medida.",
    },
    projects: {
      title: "Proyectos — DakerStudio",
      description: "Webs reales para negocios reales: Restaurante Cal Franc y BVS Servicio de Limpieza.",
    },
    contact: {
      title: "Contacto — DakerStudio",
      description: "Hablemos de tu proyecto por WhatsApp, correo o Instagram. Sin compromiso.",
    },
    project: {
      title: "{name} — Proyecto de DakerStudio",
      description: "Cómo diseñamos y desarrollamos la web de {name}.",
    },
  },
  nav: {
    home: "Inicio",
    about: "Quiénes somos",
    projects: "Proyectos",
    services: "Servicios",
    contact: "Contacto",
    switchTo: "Català",
    skip: "Saltar al contenido",
  },
  cursor: { view: "Ver más", open: "Abrir", project: "Ver proyecto" },
  hero: {
    kicker: "Agencia digital",
    lines: ["Pensado para durar.", "Hecho a medida.", "Cuidado en cada detalle."],
    intro:
      "Diseñamos y construimos webs, aplicaciones, agentes de IA y automatizaciones para negocios reales. Estudiamos cada caso y proponemos una solución a medida.",
    prev: "Servicio anterior",
    next: "Servicio siguiente",
    services: [
      { label: "Webs", text: "Webs que explican bien quién eres y convierten visitas en clientes." },
      { label: "Redes sociales", text: "Contenido y estrategia para que las redes trabajen para tu negocio." },
      { label: "Aplicaciones", text: "Aplicaciones a medida para resolver problemas concretos del día a día." },
      { label: "Agentes de IA", text: "Agentes que responden, orientan y atienden a tus clientes a cualquier hora." },
      { label: "Automatizaciones", text: "Automatizamos las tareas repetitivas para que ganes tiempo." },
      { label: "Tarjetas NFC", text: "Tarjetas NFC para conseguir reseñas de Google con un solo toque." },
    ],
  },
  about: {
    label: "Quiénes somos",
    text: "Somos dos jóvenes apasionados por la tecnología, el diseño y el mundo digital. En DakerStudio ayudamos a negocios reales a crecer online con soluciones digitales pensadas a medida. Trabajamos con seriedad, comunicación directa y compromiso en cada proyecto.",
    cta: "Más sobre nosotros",
    photoAlt: "David e Iker, fundadores de DakerStudio",
  },
  services: {
    label: "Qué ofrecemos",
    serviceN: "Servicio",
    includes: "Incluye",
    title: "Seis maneras de ayudar a tu negocio.",
    intro: "Sin sector fijo y sin paquetes cerrados. Miramos qué necesitas y lo construimos.",
    items: [
      {
        name: "Diseño y desarrollo web",
        desc: "Webs a medida, rápidas y pensadas para convertir: desde la primera idea hasta la publicación y el mantenimiento.",
        includes: ["Diseño a medida", "Desarrollo", "Multiidioma", "SEO básico", "Mantenimiento"],
        image: "project-calfranc-desktop-1",
        alt: "Web del Restaurante Cal Franc, diseñada por DakerStudio",
      },
      {
        name: "Redes sociales",
        desc: "Estrategia, calendario y contenido para que tus redes tengan una voz clara y constante.",
        includes: ["Estrategia de contenido", "Calendario editorial", "Creación de publicaciones", "Seguimiento"],
        image: "service-xarxes-socials",
        alt: "Persona escribiendo en un portátil",
      },
      {
        name: "Aplicaciones",
        desc: "Aplicaciones web y móviles diseñadas para un problema concreto de tu negocio, sin funciones que no vas a usar.",
        includes: ["Análisis de necesidades", "Diseño de interfaz", "Desarrollo", "Publicación"],
        image: "service-aplicacions",
        alt: "Código en una pantalla",
      },
      {
        name: "Agentes de IA",
        desc: "Asistentes que responden preguntas, recogen contactos y orientan a los clientes, integrados en tu web o en WhatsApp.",
        includes: ["Asistente de web o WhatsApp", "Entrenado con tu contenido", "Integración con tus herramientas"],
        image: "service-agents-ia",
        alt: "La Tierra de noche vista desde el espacio, con las ciudades iluminadas",
      },
      {
        name: "Automatizaciones",
        desc: "Conectamos las herramientas que ya usas para que las tareas repetitivas ocurran solas: formularios, correos, hojas de cálculo, avisos.",
        includes: ["Flujos automáticos", "Integraciones", "Notificaciones", "Informes"],
        image: "service-automatitzacions",
        alt: "Portátil iluminado en la oscuridad",
      },
      {
        name: "Tarjetas NFC para reseñas",
        desc: "Una tarjeta o un soporte en la barra o en la mesa: el cliente acerca el móvil y deja la reseña de Google al momento.",
        includes: ["Tarjeta o soporte personalizado", "Enlace directo a Google", "Configuración y entrega"],
        image: "nfc-cards",
        alt: "Tarjetas y soportes NFC para reseñas de Google",
      },
    ],
  },
  projects: {
    label: "Proyectos",
    title: "Trabajo real para negocios reales.",
    intro: "De momento, dos proyectos online y funcionando. Cada web, pensada para el negocio que hay detrás.",
    view: "Ver proyecto",
    visit: "Visitar la web",
    prev: "Proyecto anterior",
    next: "Proyecto siguiente",
    all: "Todos los proyectos",
    counterOf: "de",
  },
  process: {
    label: "Proceso",
    title: "Un proceso claro, sin sorpresas.",
    intro: "Cuatro pasos, sin sorpresas. Siempre sabes en qué punto está el proyecto.",
    steps: [
      {
        title: "Conocemos tu negocio",
        desc: "Hablamos contigo, miramos qué tienes ahora y entendemos qué quieres conseguir. Sin compromiso.",
      },
      {
        title: "Creamos una propuesta",
        desc: "Te preparamos una propuesta concreta: qué haremos, cómo lo haremos y con qué presupuesto.",
      },
      {
        title: "La ves y decides",
        desc: "Revisamos la propuesta juntos. Si encaja, adelante; si no, la ajustamos o lo dejamos aquí.",
      },
      {
        title: "Seguimos contigo",
        desc: "Una vez publicado, no desaparecemos: mantenimiento, mejoras y soporte cuando lo necesites.",
      },
    ],
  },
  testimonials: { label: "Clientes", title: "Lo que dicen quienes ya han trabajado con nosotros." },
  faq: {
    label: "Preguntas",
    title: "Tus preguntas,",
    titleAccent: "respondidas.",
    intro: "Un resumen rápido de cómo trabajamos y qué puedes esperar.",
    sideText: "¿Aún tienes dudas o necesitas algo concreto? Escríbenos y te lo resolvemos.",
    sideCta: "Contáctanos",
    sideAlt: "Tarjetas NFC para reseñas de Google, uno de los productos de DakerStudio",
    items: [
      {
        q: "¿Cuánto cuesta una web o un proyecto?",
        a: "Depende de lo que necesites. No trabajamos con paquetes cerrados: tras una primera conversación te hacemos una propuesta con un presupuesto concreto, sin compromiso.",
      },
      {
        q: "¿Cuánto tiempo tarda?",
        a: "Lo concretamos en la propuesta según el alcance del proyecto. Te damos un calendario realista antes de empezar y te vamos informando durante el proceso.",
      },
      {
        q: "¿Trabajáis con cualquier tipo de negocio?",
        a: "Sí. Hemos trabajado con restauración y servicios, pero no nos limitamos a ningún sector: estudiamos cada negocio y proponemos lo que tiene sentido para él.",
      },
      {
        q: "¿Qué necesito para empezar?",
        a: "Solo contarnos qué haces y qué quieres conseguir. Si tienes logo, fotos o textos, mejor; si no, te ayudamos a definirlo.",
      },
      {
        q: "¿Hacéis mantenimiento después de publicar?",
        a: "Sí. Podemos encargarnos del mantenimiento, las actualizaciones y las mejoras para que no tengas que preocuparte de nada.",
      },
      {
        q: "¿Cómo nos comunicamos durante el proyecto?",
        a: "Directamente con nosotros, por WhatsApp o correo. Sin intermediarios: hablas con las personas que hacen el trabajo.",
      },
    ],
  },
  cta: {
    label: "Trabaja con nosotros",
    title: "El gran trabajo",
    titleAccent: "empieza aquí",
    text: "Escríbenos por WhatsApp y te contamos cómo lo haríamos. Sin compromiso.",
    whatsappWith: "WhatsApp con",
    or: "o también",
    form: "Formulario de contacto",
    button: "Empieza un proyecto",
    photoAlt: "David e Iker, de DakerStudio",
    tag: "DakerStudio · Cataluña",
  },
  sticky: { label: "WhatsApp", title: "¿Con quién quieres hablar?", close: "Cerrar" },
  footer: {
    title: "Hablemos.",
    tagline: "Escríbenos por WhatsApp y te contamos cómo lo haríamos. Sin compromiso.",
    nav: "Navegación",
    social: "Redes",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    made: "Hecho en Cataluña.",
    language: "Idioma",
  },
  contactPage: {
    title: "Hablemos",
    titleAccent: "de tu proyecto.",
    intro: "El camino más rápido es WhatsApp. Si prefieres escribir con calma, tienes el formulario y el correo.",
    direct: "Directo",
    formTitle: "Cuéntanos el proyecto",
    formIntro: "Rellena lo que quieras y elige por dónde nos lo envías.",
    name: "Nombre",
    business: "Negocio o proyecto",
    message: "¿Qué necesitas?",
    messagePlaceholder: "Una web nueva, una app, automatizar algo…",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por correo",
    to: "a",
    hint: "El formulario abre WhatsApp o tu programa de correo con el mensaje ya escrito. No guardamos ningún dato.",
    required: "Escribe al menos qué necesitas.",
  },
  aboutPage: {
    title: "Dos jóvenes,",
    titleAccent: "un estudio.",
    lead: "Somos dos jóvenes apasionados por la tecnología, el diseño y el mundo digital. En DakerStudio ayudamos a negocios reales a crecer online con soluciones digitales pensadas a medida. Trabajamos con seriedad, comunicación directa y compromiso en cada proyecto.",
    who: "El equipo",
    founder: "Cofundador",
    valuesLabel: "Cómo trabajamos",
    values: [
      {
        title: "Estudiamos cada negocio",
        desc: "No hay dos negocios iguales. Antes de proponer nada, entendemos qué haces, a quién te diriges y qué quieres conseguir.",
      },
      {
        title: "Comunicación directa",
        desc: "Hablas con las personas que hacen el trabajo. Por WhatsApp, por correo o en persona, sin intermediarios.",
      },
      {
        title: "Transparencia",
        desc: "Propuestas claras, presupuestos concretos y un calendario realista. Siempre sabes en qué punto está el proyecto.",
      },
      {
        title: "Compromiso",
        desc: "Publicar no es el final. Nos quedamos para mantener, mejorar y acompañar lo que hemos construido juntos.",
      },
    ],
    toolsLabel: "Más allá de la web",
    toolsTitle: "Tecnología que se toca.",
    toolsText:
      "También trabajamos con herramientas físicas como las tarjetas NFC para reseñas de Google: el cliente acerca el móvil y deja la valoración al momento. Pequeños detalles que hacen crecer un negocio.",
    nfcAlt: "Tarjetas y soportes NFC de DakerStudio para conseguir reseñas de Google",
    cta: "Hablemos de tu proyecto",
  },
  projectsPage: {
    title: "Proyectos",
    intro: "De momento, dos. Cada uno con su web online y funcionando. Esta página crecerá con cada nuevo proyecto.",
  },
  projectPage: {
    client: "Cliente",
    sector: "Sector",
    service: "Servicio",
    location: "Lugar",
    website: "Web",
    visit: "Visitar la web",
    did: "Qué hicimos",
    theySay: "Lo que dicen",
    next: "Proyecto siguiente",
    back: "Todos los proyectos",
    mobileAlt: "Versión móvil de la web de {name}",
    coverAlt: "Página de inicio de la web de {name}",
  },
  notFound: {
    title: "Página no encontrada",
    text: "Esta página no existe o se ha movido.",
    back: "Volver al inicio",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { ca, es };
export const getDict = (lang: Lang) => dictionaries[lang];

/** Omple una plantilla: fill("Web de {name}", { name: "Cal Franc" }). */
export const fill = (template: string, vars: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? "");
