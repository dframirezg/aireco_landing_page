"use client";

import {
  ArrowDownRight, ArrowRight, Building2, Check, CheckCircle2, ChevronDown,
  CircleGauge, ClipboardCheck, Factory, Fan, GraduationCap, HardHat,
  HeartPulse, Hospital, Leaf, Mail, MapPin, Menu, PackageCheck, Phone,
  Search, Settings, ShieldCheck, ShoppingBag, SlidersHorizontal, Sparkles,
  TimerReset, ToolCase, Wind, Wrench, X, Zap,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const CONTACT = {
  email: "info@aireco-sas.com",
  address: "Carrera 44 # 20C-96, Bogotá D.C.",
  maintenance: "+57 316 242 0434",
  equipment: "+57 301 467 7262",
  information: "+57 316 741 1461",
  whatsapp: "573167411461",
};

const services = [
  { icon: SlidersHorizontal, n: "01", title: "Diseño e ingeniería", text: "Sistemas de climatización y ventilación pensados desde la necesidad técnica, arquitectónica y operativa de cada espacio." },
  { icon: PackageCheck, n: "02", title: "Suministro de equipos", text: "Equipos y soluciones seleccionados para responder con precisión a las condiciones reales de cada proyecto." },
  { icon: HardHat, n: "03", title: "Instalación", text: "Ejecución planeada, segura y técnicamente rigurosa, desde el montaje hasta la puesta en marcha." },
  { icon: TimerReset, n: "04", title: "Mantenimiento preventivo", text: "Rutinas programadas que anticipan fallas, conservan el desempeño y prolongan la vida útil de los equipos." },
  { icon: Wrench, n: "05", title: "Mantenimiento correctivo", text: "Diagnóstico y solución de fallas para restablecer la operación con criterio técnico y oportunidad." },
  { icon: Wind, n: "06", title: "Ventilación mecánica", text: "Soluciones para renovar, extraer y controlar el aire en espacios con exigencias específicas." },
  { icon: ToolCase, n: "07", title: "Repuestos y accesorios", text: "Suministro de componentes que respaldan la continuidad y el correcto funcionamiento de los sistemas." },
  { icon: Search, n: "08", title: "Diagnóstico técnico", text: "Evaluación del estado y desempeño para identificar fallas, riesgos y oportunidades de mejora." },
];

const sectors = [
  { icon: Hospital, title: "Salud", text: "Calidad del aire y continuidad para entornos de alta exigencia." },
  { icon: GraduationCap, title: "Educación e investigación", text: "Confort y renovación de aire para aprender, crear y descubrir." },
  { icon: Building2, title: "Institucional", text: "Operación confiable en espacios de servicio y atención al público." },
  { icon: CircleGauge, title: "Financiero", text: "Control térmico estable para personas e infraestructura crítica." },
  { icon: ShoppingBag, title: "Comercial", text: "Ambientes confortables que mejoran la experiencia de cada visitante." },
  { icon: HardHat, title: "Construcción", text: "Ingeniería coordinada con la arquitectura y el cronograma de obra." },
  { icon: Sparkles, title: "Corporativo", text: "Confort eficiente para oficinas productivas y espacios de encuentro." },
  { icon: Factory, title: "Industrial", text: "Ventilación y climatización adaptadas a procesos y cargas especiales." },
];

const process = ["Diagnóstico", "Diseño e ingeniería", "Selección y suministro", "Instalación", "Puesta en marcha", "Mantenimiento", "Optimización continua"];

const faqs = [
  ["¿En qué ciudades presta servicios AIRECO?", "AIRECO atiende proyectos y servicios a nivel nacional. La cobertura y programación se confirman de acuerdo con la ciudad, el alcance y la urgencia de cada solicitud."],
  ["¿Realizan mantenimiento preventivo y correctivo?", "Sí. Diseñamos planes preventivos y atendemos necesidades correctivas en sistemas de aire acondicionado y ventilación mecánica."],
  ["¿Atienden proyectos nuevos de climatización?", "Sí. Acompañamos el ciclo completo: diagnóstico, diseño, selección de equipos, suministro, instalación y puesta en marcha."],
  ["¿Suministran equipos, repuestos y accesorios?", "Sí. Suministramos equipos, componentes, repuestos y accesorios seleccionados según el requerimiento técnico del sistema."],
  ["¿Cómo se solicita una visita técnica?", "Complete el formulario con la ciudad, tipo de instalación y necesidad principal. El equipo revisará la información para coordinar el siguiente paso."],
  ["¿Qué información ayuda a preparar una cotización?", "Ubicación, uso del espacio, dimensiones aproximadas, equipos existentes, síntomas o necesidad y, cuando sea posible, fotografías o planos."],
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className="brand" href="#inicio" aria-label="AIRECO S.A.S. — Inicio">
      <Image
        className="brand-logo"
        src={inverse ? "/brand/aireco-logo-inverse.svg" : "/brand/aireco-logo-original.svg"}
        alt="AIRECO S.A.S."
        width={5340}
        height={1231}
        priority
      />
    </a>
  );
}

function SectionHead({ label, title, copy, inverse = false }: { label: string; title: string; copy?: string; inverse?: boolean }) {
  return (
    <div className={`section-head reveal ${inverse ? "inverse" : ""}`}>
      <span className="eyebrow"><i />{label}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function AirSystem() {
  return (
    <div className="air-system" aria-label="Visualización técnica de un sistema de climatización">
      <div className="system-topline"><span>HVAC / SISTEMA 01</span><span className="live-dot">OPERANDO</span></div>
      <div className="system-canvas">
        <div className="floor floor-a"><span>Zona A</span><b>22.4°</b><small>Confort estable</small></div>
        <div className="floor floor-b"><span>Zona B</span><b>21.8°</b><small>Flujo nominal</small></div>
        <div className="floor floor-c"><span>Zona C</span><b>23.1°</b><small>Calibrando</small></div>
        <div className="ahu"><Fan /><span>UMA—01</span></div>
        <div className="duct duct-main"><i /><i /><i /></div>
        <div className="duct duct-one"><i /></div><div className="duct duct-two"><i /></div>
        <div className="air-node n1" /><div className="air-node n2" /><div className="air-node n3" />
        <div className="measure m1">68%<small>CARGA</small></div><div className="measure m2">1.2<small>m/s</small></div>
      </div>
      <div className="system-footer"><span><i /> Aire en movimiento</span><span>BOG / 4.63°N</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  function submitForm(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Brand />
          <nav className={menuOpen ? "is-open" : ""} aria-label="Navegación principal">
            <a href="#servicios" onClick={closeMenu}>Servicios</a><a href="#proceso" onClick={closeMenu}>Soluciones</a><a href="#sectores" onClick={closeMenu}>Sectores</a><a href="#proyectos" onClick={closeMenu}>Proyectos</a><a href="#nosotros" onClick={closeMenu}>Nosotros</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>Solicitar diagnóstico <ArrowDownRight /></a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-airflow" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell hero-inner">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><i />INGENIERÍA HVAC / COLOMBIA</span>
            <h1>Ingeniería para que el aire <em>trabaje mejor.</em></h1>
            <p>Diseñamos, suministramos, instalamos y mantenemos sistemas de aire acondicionado y ventilación mecánica para organizaciones que necesitan eficiencia, continuidad y respaldo técnico.</p>
            <div className="hero-actions"><a className="button button-yellow" href="#contacto">Solicitar diagnóstico <ArrowRight /></a><a className="button button-ghost" href="#servicios">Explorar servicios <ArrowDownRight /></a></div>
            <div className="hero-proof"><div><strong>15+</strong><span>Años mejorando<br />el confort</span></div><div><strong>CO</strong><span>Cobertura<br />nacional</span></div><div><ShieldCheck /><span>Equipo técnico<br />capacitado</span></div></div>
          </div>
          <div className="hero-visual"><AirSystem /></div>
        </div>
        <div className="hero-bottom"><span>DESPLAZA PARA EXPLORAR</span><i /></div>
      </section>

      <section className="trust-strip" aria-label="Compromisos de AIRECO"><div className="shell trust-grid">{["Experiencia comprobada", "Procesos estandarizados", "Seguridad en cada intervención", "Mejora continua"].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}<Check /></div>)}</div></section>

      <section className="section services" id="servicios"><div className="shell">
        <SectionHead label="CAPACIDAD INTEGRAL" title="Todo el sistema. Un solo equipo experto." copy="Desde el primer diagnóstico hasta el mantenimiento continuo, conectamos cada decisión para que su infraestructura funcione mejor." />
        <div className="services-grid">{services.map(({ icon: Icon, n, title, text }, i) => <article className="service-card reveal" style={{ transitionDelay: `${(i % 4) * 70}ms` }} key={title}><div className="card-top"><span>{n}</span><Icon /></div><h3>{title}</h3><p>{text}</p><a href="#contacto" aria-label={`Consultar sobre ${title}`}>Consultar servicio <ArrowRight /></a></article>)}</div>
      </div></section>

      <section className="section process-section" id="proceso"><div className="process-grid" aria-hidden="true" /><div className="shell">
        <SectionHead inverse label="DE PRINCIPIO A FIN" title="Una ruta clara hacia el confort." copy="Cada etapa entrega información a la siguiente. Menos incertidumbre, mejores decisiones y una ejecución que se puede seguir." />
        <div className="process-flow reveal"><div className="process-line"><span /></div>{process.map((item, i) => <div className="process-step" key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div>
        <div className="process-summary reveal"><div><CircleGauge /><strong>Visión completa</strong><p>Diseño, equipos y mantenimiento alineados desde el inicio.</p></div><div><ClipboardCheck /><strong>Control técnico</strong><p>Procesos estandarizados para ejecutar con consistencia.</p></div><div><Zap /><strong>Respuesta enfocada</strong><p>Diagnósticos que convierten síntomas en decisiones.</p></div></div>
      </div></section>

      <section className="section sectors" id="sectores"><div className="shell">
        <div className="split-head"><SectionHead label="EXPERIENCIA MULTISECTOR" title="Cada espacio respira distinto." /><p className="split-copy reveal">Entendemos que no existe una solución universal. Diseñamos alrededor del uso, las personas, la operación y las exigencias de cada entorno.</p></div>
        <div className="sector-grid">{sectors.map(({ icon: Icon, title, text }, i) => <article className="sector-card reveal" key={title} style={{ transitionDelay: `${(i % 4) * 60}ms` }}><Icon /><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><ArrowDownRight /></article>)}</div>
      </div></section>

      <section className="section performance"><div className="shell performance-grid">
        <div className="performance-copy"><SectionHead label="MÁS QUE TEMPERATURA" title="Un buen sistema no solo enfría." copy="Protege la operación, optimiza los recursos y transforma la experiencia de quienes usan cada espacio." /><ul className="benefit-list reveal">{["Temperaturas más estables", "Menos interrupciones inesperadas", "Mejor desempeño de los equipos", "Mayor vida útil del sistema", "Renovación de aire controlada", "Ambientes más confortables"].map(item => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div>
        <div className="comfort-panel reveal"><div className="comfort-header"><span>PERFIL DE CONFORT</span><span>EN RANGO</span></div><div className="temperature"><b>22</b><sup>°C</sup><span>Temperatura objetivo</span></div><div className="range"><i /><span>18°</span><span>24°</span><span>30°</span></div><div className="comfort-stats"><div><span>FLUJO</span><b>Estable</b></div><div><span>OPERACIÓN</span><b>Continua</b></div><div><span>CONTROL</span><b>Activo</b></div></div><div className="air-rings" aria-hidden="true"><i /><i /><i /><Fan /></div></div>
      </div></section>

      <section className="section management" id="nosotros"><div className="shell management-grid">
        <div className="management-title"><span className="eyebrow"><i />SISTEMA INTEGRADO DE GESTIÓN</span><h2>La calidad no se improvisa. <em>Se diseña.</em></h2><p>AIRECO integra estandarización, seguridad y mejora continua para convertir el conocimiento técnico en una operación confiable.</p><a className="text-link" href="#contacto">Conocer nuestro enfoque <ArrowRight /></a></div>
        <div className="management-map reveal"><div className="mg-center"><span>AIRECO</span><b>Sistema<br />integrado</b></div><div className="mg-node node-a"><ShieldCheck /><span>Seguridad</span></div><div className="mg-node node-b"><Leaf /><span>Ambiente</span></div><div className="mg-node node-c"><HeartPulse /><span>Personas</span></div><div className="mg-node node-d"><ClipboardCheck /><span>Calidad</span></div><div className="mg-node node-e"><Settings /><span>Procesos</span></div><div className="mg-node node-f"><Zap /><span>Mejora</span></div></div>
      </div></section>

      <section className="section projects" id="proyectos"><div className="shell">
        <div className="split-head"><SectionHead label="EXPERIENCIA EN CAMPO" title="Ingeniería que se ve en operación." /><p className="split-copy reveal">Imágenes reales del equipo AIRECO en intervenciones técnicas. La información detallada de cada caso se incorporará con autorización del cliente.</p></div>
        <div className="project-grid"><article className="project-card project-large reveal"><Image src="/aireco-project-01.jpg" alt="Equipo técnico de AIRECO trabajando en unidades de climatización de cubierta" fill sizes="(max-width: 760px) 100vw, 60vw" priority /><div className="project-overlay"><span>01 / OPERACIÓN</span><h3>Mantenimiento en cubierta</h3><p>Inspección técnica • Bogotá</p></div></article><article className="project-card reveal"><Image src="/aireco-project-03.jpg" alt="Técnico de AIRECO realizando diagnóstico de una unidad condensadora" fill sizes="(max-width: 760px) 100vw, 40vw" /><div className="project-overlay"><span>02 / DIAGNÓSTICO</span><h3>Precisión en cada componente</h3></div></article><article className="project-card reveal"><Image src="/aireco-project-05.jpg" alt="Personal de AIRECO movilizando equipos y herramientas para una intervención" fill sizes="(max-width: 760px) 100vw, 40vw" /><div className="project-overlay"><span>03 / EQUIPO</span><h3>Listos para intervenir</h3></div></article></div>
        <div className="project-note reveal"><span>PORTAFOLIO EN CONSTRUCCIÓN</span><p>Este espacio está preparado para documentar retos, soluciones y resultados verificables de proyectos reales.</p><a href="#contacto">Solicitar referencias <ArrowRight /></a></div>
      </div></section>

      <section className="section maintenance"><div className="shell">
        <SectionHead label="DECIDIR ANTES DE LA FALLA" title="De reaccionar a tener el control." copy="Un plan de mantenimiento transforma emergencias impredecibles en una operación que se puede anticipar." />
        <div className="compare reveal"><div className="compare-side reactive"><span className="compare-label">MANTENIMIENTO REACTIVO</span><h3>Esperar a que algo falle.</h3><ul>{["Interrupciones inesperadas", "Decisiones de emergencia", "Costos difíciles de anticipar", "Desgaste acelerado"].map(x => <li key={x}><X />{x}</li>)}</ul></div><div className="compare-divider"><span>VS</span></div><div className="compare-side planned"><span className="compare-label">PLANIFICADO CON AIRECO</span><h3>Conocer antes de decidir.</h3><ul>{["Inspecciones programadas", "Detección temprana", "Mayor continuidad operativa", "Registro y soporte técnico"].map(x => <li key={x}><Check />{x}</li>)}</ul><a className="button button-yellow" href="#contacto">Programar visita <ArrowRight /></a></div></div>
      </div></section>

      <section className="section team"><div className="shell team-grid"><div className="team-photo reveal"><Image src="/aireco-project-04.jpg" alt="Equipo técnico de AIRECO realizando mantenimiento en una cubierta" fill sizes="(max-width: 760px) 100vw, 52vw" /><div className="photo-tag"><ShieldCheck /><span>TRABAJO SEGURO<br /><b>EQUIPO CAPACITADO</b></span></div></div><div className="team-copy"><SectionHead label="PERSONAS QUE RESPONDEN" title="La técnica comienza con el equipo." copy="Especialistas en cada labor, vinculados formalmente y comprometidos con una atención cortés, puntual y profesional." /><div className="team-points reveal"><div><strong>01</strong><p>Personal capacitado y certificado por el SENA.</p></div><div><strong>02</strong><p>Seguridad, respeto y profesionalismo en cada intervención.</p></div><div><strong>03</strong><p>Trabajo coordinado entre las áreas técnica, comercial y administrativa.</p></div></div></div></div></section>

      <section className="section faq"><div className="shell faq-grid"><SectionHead label="PREGUNTAS FRECUENTES" title="Lo esencial, antes de empezar." copy="Si su necesidad requiere una evaluación particular, nuestro equipo puede orientarle directamente." /><div className="accordion reveal">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary><span>{String(i + 1).padStart(2, "0")}</span>{q}<ChevronDown /></summary><p>{a}</p></details>)}</div></div></section>

      <section className="contact-section" id="contacto"><div className="contact-air" aria-hidden="true"><i /><i /><i /></div><div className="shell contact-heading reveal"><span className="eyebrow"><i />HABLEMOS DE SU SISTEMA</span><h2>El confort comienza con una <em>buena decisión.</em></h2><p>Cuéntenos qué necesita. Podemos ayudarle a diagnosticar, diseñar, instalar o mantener su sistema de climatización y ventilación.</p></div>
        <div className="shell contact-grid"><div className="contact-data reveal"><div className="contact-primary"><span>RESPUESTA DIRECTA</span><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"><Phone />{CONTACT.information}<ArrowDownRight /></a><a href={`mailto:${CONTACT.email}`}><Mail />{CONTACT.email}<ArrowDownRight /></a></div><div className="contact-list"><div><span>MANTENIMIENTO</span><a href="tel:+573162420434">{CONTACT.maintenance}</a></div><div><span>EQUIPOS Y REPUESTOS</span><a href="tel:+573014677262">{CONTACT.equipment}</a></div><div><span>SEDE PRINCIPAL</span><p><MapPin />{CONTACT.address}</p></div><div><span>COBERTURA</span><p><Wind />Atención a nivel nacional</p></div></div></div>
          <div className="form-panel reveal">{sent ? <div className="form-success"><span><Check /></span><h3>Solicitud preparada</h3><p>Gracias por contactar a AIRECO. Este prototipo ya valida la experiencia; antes del lanzamiento conectaremos el formulario al canal oficial de recepción.</p><button onClick={() => setSent(false)}>Enviar otra solicitud</button></div> : <form onSubmit={submitForm}><div className="form-intro"><span>SOLICITUD TÉCNICA</span><b>01 / DATOS DEL PROYECTO</b></div><div className="field-row"><label>Nombre completo<input name="name" required autoComplete="name" placeholder="Su nombre" /></label><label>Empresa<input name="company" autoComplete="organization" placeholder="Nombre de la empresa" /></label></div><div className="field-row"><label>Correo corporativo<input name="email" type="email" required autoComplete="email" placeholder="nombre@empresa.com" /></label><label>Teléfono<input name="phone" type="tel" required autoComplete="tel" placeholder="+57 300 000 0000" /></label></div><div className="field-row"><label>Ciudad<input name="city" required autoComplete="address-level2" placeholder="Ciudad del servicio" /></label><label>Servicio<select name="service" required defaultValue=""><option value="" disabled>Seleccione una opción</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label></div><label>Cuéntenos sobre la necesidad<textarea name="message" required rows={4} placeholder="Tipo de instalación, equipos existentes, síntomas o alcance esperado…" /></label><label className="consent"><input type="checkbox" required /><span>Acepto el tratamiento de mis datos para recibir respuesta a esta solicitud.</span></label><button className="button button-yellow submit" type="submit">Enviar solicitud <ArrowRight /></button><small>Los datos de este formulario no se almacenan en esta versión de demostración.</small></form>}</div>
        </div>
      </section>

      <footer><div className="shell footer-main"><div className="footer-brand"><Brand inverse /><p>Ingeniería de aire acondicionado y ventilación mecánica para organizaciones que necesitan continuidad y confort.</p></div><div className="footer-links"><strong>Explorar</strong><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#sectores">Sectores</a><a href="#proyectos">Proyectos</a></div><div className="footer-links"><strong>Contacto</strong><a href={`mailto:${CONTACT.email}`}>Correo</a><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.zonapagos.com/t_Airecosas/" target="_blank" rel="noreferrer">Pagos en línea</a><span>Bogotá, Colombia</span></div><div className="footer-badge"><Wind /><span>COBERTURA<br /><b>NACIONAL</b></span></div></div><div className="shell footer-bottom"><span>© 2026 AIRECO S.A.S.</span><div><span>Política de privacidad</span><span>Tratamiento de datos</span></div><span>INGENIERÍA DEL AIRE</span></div></footer>
      <a className="mobile-contact" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer"><Phone /> Hablar con AIRECO</a>
    </main>
  );
}
