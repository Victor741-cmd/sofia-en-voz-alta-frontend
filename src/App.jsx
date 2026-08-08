import React, { useEffect, useState } from 'react';

import logo from './assets/images/logo-sofia-en-voz-alta.png';
import isotipo from './assets/images/isotipo-sofia-en-voz-alta.png';
import sofiaFoto from './assets/images/sofia-foto.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container nav">
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Sofía en Voz Alta"
          />
        </a>

        <nav
          className={`nav-links ${
            menuOpen ? 'nav-links-open' : ''
          }`}
        >
          <a
            href="#problema"
            onClick={closeMenu}
          >
            Qué hacemos
          </a>

          <a
            href="#como"
            onClick={closeMenu}
          >
            Cómo trabajamos
          </a>

          <a
            href="#trabajos"
            onClick={closeMenu}
          >
            Trabajos
          </a>

          <a
            href="#contacto"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Hablemos de tu marca
          </a>
        </nav>

        <button
          className="menu"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    situacion: '',
    canal: 'correo',
    whatsapp: '',
    correo: '',
  });

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSubmitted(false);
    setErrorMessage('');

    if (name === 'canal') {
      setFormData((current) => ({
        ...current,
        canal: value,

        whatsapp:
          value === 'whatsapp'
            ? current.whatsapp
            : '',

        correo:
          value === 'correo'
            ? current.correo
            : '',
      }));

      return;
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage('');

    const request = {
      nombre: formData.nombre.trim(),

      negocio: formData.negocio.trim(),

      situacion: formData.situacion.trim(),

      canal: formData.canal,

      whatsapp:
        formData.canal === 'whatsapp'
          ? formData.whatsapp.trim()
          : null,

      correo:
        formData.canal === 'correo'
          ? formData.correo.trim()
          : null,
    };

    console.log(
      'Request enviado al backend:',
      request
    );

    try {
      const response = await fetch(
        'https://sofiaenvozalta.onrender.com/api/contact',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify(request),
        }
      );

      let result = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      console.log(
        'Respuesta del backend:',
        result
      );

      if (!response.ok) {
        let message =
          result?.message ||
          'No fue posible enviar tu solicitud.';

        if (result?.errors) {
          const validationMessages =
            Object.values(result.errors)
              .flat()
              .join(' ');

          if (validationMessages) {
            message =
              validationMessages;
          }
        }

        throw new Error(message);
      }

      setSubmitted(true);

      setFormData({
        nombre: '',
        negocio: '',
        situacion: '',
        canal: 'correo',
        whatsapp: '',
        correo: '',
      });
    } catch (error) {
      console.error(
        'Error enviando formulario:',
        error
      );

      setErrorMessage(
        error.message ||
          'No fue posible enviar tu solicitud. Inténtalo nuevamente.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="nombre">
          Nombre
        </label>

        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="¿Cómo te llamas?"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="negocio">
          Negocio
        </label>

        <input
          id="negocio"
          name="negocio"
          type="text"
          value={formData.negocio}
          onChange={handleChange}
          placeholder="¿Cómo se llama tu negocio?"
        />
      </div>

      <div className="field">
        <label htmlFor="situacion">
          ¿Qué está pasando?
        </label>

        <textarea
          id="situacion"
          name="situacion"
          value={formData.situacion}
          onChange={handleChange}
          placeholder="Cuéntanos. No tiene que sonar técnico."
          required
        />
      </div>

      <div className="field">
        <label>
          ¿Dónde podemos responderte?
        </label>
      </div>

      <div className="channel">
        <label>
          <input
            type="radio"
            name="canal"
            value="whatsapp"
            checked={
              formData.canal ===
              'whatsapp'
            }
            onChange={handleChange}
          />{' '}
          WhatsApp
        </label>

        <label>
          <input
            type="radio"
            name="canal"
            value="correo"
            checked={
              formData.canal ===
              'correo'
            }
            onChange={handleChange}
          />{' '}
          Correo
        </label>
      </div>

      {formData.canal ===
        'whatsapp' && (
        <div className="field conditional-field">
          <label htmlFor="whatsapp">
            Número de WhatsApp
          </label>

          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Ej: +57 300 123 4567"
            required
          />
        </div>
      )}

      {formData.canal === 'correo' && (
        <div className="field conditional-field">
          <label htmlFor="correo">
            Correo electrónico
          </label>

          <input
            id="correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ej: hola@minegocio.com"
            required
          />
        </div>
      )}

      <button
        className="btn btn-primary"
        type="submit"
        disabled={submitting}
      >
        {submitting
          ? 'Enviando...'
          : 'Quiero contarles →'}
      </button>

      {submitted && (
        <div className="form-note success">
          ¡Listo! Recibimos tu
          solicitud. Te responderemos lo
          antes posible.
        </div>
      )}

      {errorMessage && (
        <div className="form-note error">
          {errorMessage}
        </div>
      )}

      {!submitted &&
        !errorMessage && (
          <div className="form-note">
            Usaremos tus datos únicamente
            para responder tu solicitud.
          </div>
        )}
    </form>
  );
}

export default function App() {
  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                'show'
              );
            }
          });
        },
        {
          threshold: 0.12,
        }
      );

    const revealElements =
      document.querySelectorAll(
        '.reveal'
      );

    revealElements.forEach(
      (element) => {
        observer.observe(element);
      }
    );

    const heroArt =
      document.querySelector(
        '.hero-art'
      );

    const handleScroll = () => {
      const y = Math.min(
        window.scrollY,
        700
      );

      if (heroArt) {
        heroArt.style.transform =
          `translateY(${
            y * 0.035
          }px)`;
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      revealElements.forEach(
        (element) => {
          observer.unobserve(
            element
          );
        }
      );

      observer.disconnect();

      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <section
          id="inicio"
          className="hero"
        >
          <div className="container hero-grid">
            <div className="reveal">
              <span className="eyebrow">
                Identidad de marca para
                negocios reales
              </span>

              <h1>
                ¿Tienes un negocio pero no
                sabes cómo debería verse tu
                marca?
              </h1>

              <div className="hero-copy">
                <p>
                  Logo, colores, letras,
                  publicaciones…{' '}
                  <strong>
                    no tienes que inventarlo
                    todo cada vez.
                  </strong>
                </p>

                <p>
                  Te ayudamos a ponerlo en
                  orden para que tu negocio
                  tenga una imagen clara,
                  cuidada y que se sienta
                  realmente tuya.
                </p>
              </div>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="#contacto"
                >
                  Quiero organizar mi marca
                  →
                </a>
              </div>

              <div className="start-note">
                ¿Estás empezando?{' '}
                <a
                  className="small-link"
                  href="#contacto"
                >
                  También podemos hablar.
                </a>
              </div>
            </div>

            <div className="hero-art reveal">
              <div className="hero-shape-a" />

              <div className="hero-shape-b" />

              <img
                className="hero-isotipo"
                src={isotipo}
                alt=""
              />

              <div className="hero-dots">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="hero-curve">
                <svg
                  viewBox="0 0 700 180"
                  preserveAspectRatio="none"
                >
                  <path d="M5 110 C120 12,230 162,350 84 C455 15,535 135,695 58" />

                  <circle
                    cx="5"
                    cy="110"
                    r="5"
                  />

                  <circle
                    cx="350"
                    cy="84"
                    r="5"
                  />

                  <circle
                    cx="695"
                    cy="58"
                    r="5"
                  />
                </svg>
              </div>

              <div className="photo-stage">
                <img
                  src={sofiaFoto}
                  alt="Sofía"
                />
              </div>

              <div className="thought t1">
                ¿qué logo uso?
              </div>

              <div className="thought t2">
                ¿estos colores sí van
                juntos?
              </div>

              <div className="thought t3">
                ¿cómo hago que todo se vea
                de la misma marca?
              </div>
            </div>
          </div>
        </section>

        <section
          id="problema"
          className="section problem"
        >
          <div
            className="global-thread"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 1100"
              preserveAspectRatio="none"
            >
              <path d="M-40 130 C180 30,250 270,470 180 C650 110,710 260,900 165 C1090 70,1220 235,1480 110" />

              <circle
                cx="245"
                cy="165"
                r="5"
              />

              <circle
                cx="900"
                cy="165"
                r="5"
              />
            </svg>
          </div>

          <div className="container">
            <div className="problem-head reveal">
              <div>
                <span className="eyebrow">
                  Cuando tu marca se arma por
                  partes
                </span>

                <h2 className="display">
                  Tu marca no debería
                  sentirse armada por partes.
                </h2>
              </div>

              <p className="lead">
                Un logo por un lado.
                Colores por otro. Letras que
                cambian. Publicaciones que
                parecen de negocios
                distintos.{' '}
                <strong>
                  La idea es que todo
                  empiece a sentirse parte
                  del mismo negocio.
                </strong>
              </p>
            </div>

            <div className="brand-lab reveal">
              <div className="lab-grid">
                <div className="scattered">
                  <div className="lab-title">
                    Antes: cada cosa por su
                    lado
                  </div>

                  <div className="scrap logo">
                    LOGO_v7.png
                  </div>

                  <div className="scrap color">
                    ¿este rosado?
                  </div>

                  <div className="scrap type">
                    Poppins / Montserrat / ¿?
                  </div>

                  <div className="scrap msg">
                    “hazlo parecido al post
                    de la semana pasada”
                  </div>

                  <div className="scrap post" />
                </div>

                <div className="bridge">
                  <svg
                    viewBox="0 0 130 470"
                    preserveAspectRatio="none"
                  >
                    <path d="M5 70 C110 120,10 200,110 245 C10 300,100 365,5 420" />
                  </svg>

                  <div className="arrow">
                    →
                  </div>
                </div>

                <div className="organized">
                  <div className="lab-title">
                    Después: una misma marca
                  </div>

                  <div className="brand-board">
                    <div className="board-top">
                      <img
                        src={logo}
                        alt="Sofía en Voz Alta"
                      />
                    </div>

                    <div className="board-body">
                      <div className="palette">
                        <div className="swatch sw1" />
                        <div className="swatch sw2" />
                        <div className="swatch sw3" />
                        <div className="swatch sw4" />
                      </div>

                      <div className="type-row">
                        <strong>
                          Aa
                        </strong>

                        <span>
                          mismas letras
                          <br />
                          misma intención
                        </span>
                      </div>

                      <div className="msg-card">
                        Una forma de hablar
                        que sí se siente
                        parte de tu negocio.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lab-remate reveal">
              Todo empieza a verse parte
              del{' '}
              <span>
                mismo negocio.
              </span>
            </div>
          </div>
        </section>

        <section className="section transform">
          <div className="container">
            <span className="eyebrow reveal">
              De dudas a respuestas
            </span>

            <h2 className="display reveal">
              Para que dejes de improvisar
              cada vez.
            </h2>

            <div className="transform-wrap reveal">
              <div className="half half-left">
                <h3>
                  Antes: dudas cada vez.
                </h3>

                <div className="qs">
                  <div className="pill">
                    ¿Cuál logo uso?
                  </div>

                  <div className="pill">
                    ¿Qué color ponemos?
                  </div>

                  <div className="pill">
                    ¿Esta letra sí es de la
                    marca?
                  </div>

                  <div className="pill">
                    ¿Cómo debería verse esta
                    publicación?
                  </div>
                </div>
              </div>

              <div className="clarity">
                claridad
              </div>

              <div className="half half-right">
                <h3>
                  Después: respuestas
                  claras.
                </h3>

                <div className="ans">
                  <div className="pill">
                    Este es el logo.
                  </div>

                  <div className="pill">
                    Estos son los colores.
                  </div>

                  <div className="pill">
                    Estas son las letras.
                  </div>

                  <div className="pill">
                    Así debería verse.
                  </div>
                </div>
              </div>
            </div>

            <div className="transform-remate reveal">
              <strong>
                Menos improvisar.
                <br />

                <span>
                  Más saber qué hacer.
                </span>
              </strong>

              <p>
                La página no intenta darte
                una clase de branding. Te
                muestra una diferencia que
                puedas reconocer en tu
                negocio.
              </p>
            </div>
          </div>
        </section>

        <section
          id="como"
          className="section process"
        >
          <div className="container">
            <span className="eyebrow reveal">
              Cómo trabajamos
            </span>

            <h2 className="display reveal">
              Tres pasos. Sin convertirte
              en diseñador.
            </h2>

            <div className="process-track reveal">
              <article className="step-card">
                <div className="step-no">
                  01
                </div>

                <h3>
                  Te escuchamos.
                </h3>

                <p>
                  Nos cuentas qué haces, qué
                  tienes y qué sientes que
                  ya no encaja.
                </p>

                <div className="mini-line" />
              </article>

              <article className="step-card">
                <div className="step-no">
                  02
                </div>

                <h3>
                  Lo organizamos.
                </h3>

                <p>
                  Definimos qué se queda,
                  qué cambia y cómo debería
                  verse y hablar tu marca.
                </p>

                <div className="mini-line" />
              </article>

              <article className="step-card">
                <div className="step-no">
                  03
                </div>

                <h3>
                  Te enseñamos a usarlo.
                </h3>

                <p>
                  Recibes lo acordado
                  organizado y sabes qué
                  usar cuando vuelvas a
                  necesitarlo.
                </p>

                <div className="mini-line" />
              </article>
            </div>

            <div className="access reveal">
              <img
                className="access-isotipo"
                src={isotipo}
                alt=""
              />

              <small>
                No hace falta ser una
                empresa gigante
              </small>

              <h3>
                Tu negocio también merece
                verse bien pensado.
              </h3>

              <p>
                Empezamos por entender qué
                necesitas realmente. Si
                necesitas algo puntual, lo
                hablamos. Si hace falta
                algo más completo, también
                te lo explicamos.
              </p>
            </div>
          </div>
        </section>

        <section
          id="trabajos"
          className="section work"
        >
          <div className="container">
            <div className="work-head reveal">
              <div>
                <span className="eyebrow">
                  Trabajo real
                </span>

                <h2 className="display">
                  Mejor te mostramos.
                </h2>
              </div>

              <p className="lead">
                Aquí los proyectos deben
                verse como piezas de
                identidad de verdad:
                visuales fuertes, contexto
                breve y ninguna promesa que
                no podamos demostrar.
              </p>
            </div>

            <div className="work-grid">
              <article className="case reveal">
                <div className="case-visual">
                  <div className="curve-a" />
                  <div className="curve-b" />

                  <div className="line">
                    <svg
                      viewBox="0 0 700 140"
                      preserveAspectRatio="none"
                    >
                      <path d="M-20 100 C100 20,220 130,350 60 C470 0,580 125,720 48" />
                    </svg>
                  </div>

                  <img
                    className="case-isotipo"
                    src={isotipo}
                    alt=""
                  />

                  <div className="case-chip">
                    IDENTIDAD / ANTES →
                    DESPUÉS
                  </div>
                </div>

                <div className="case-copy">
                  <h3>
                    Una marca que necesitaba
                    dejar de sentirse
                    improvisada.
                  </h3>

                  <p>
                    En la versión final este
                    espacio se reemplaza por
                    un proyecto real,
                    mostrando qué necesitaba
                    el negocio y qué
                    elementos trabajamos.
                  </p>

                  <div className="case-meta">
                    <div>
                      <b>
                        Necesitaba
                      </b>

                      <span>
                        Ordenar elementos que
                        ya existían.
                      </span>
                    </div>

                    <div>
                      <b>
                        Trabajamos
                      </b>

                      <span>
                        Logo, versiones,
                        colores y reglas
                        acordadas.
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="case reveal">
                <div className="case-visual">
                  <div
                    className="curve-a"
                    style={{
                      background:
                        'var(--rasp)',
                      width: 240,
                      height: 240,
                    }}
                  />

                  <div
                    className="curve-b"
                    style={{
                      background:
                        '#ece5eb',
                      width: 340,
                      height: 340,
                    }}
                  />

                  <div className="line">
                    <svg
                      viewBox="0 0 700 140"
                      preserveAspectRatio="none"
                    >
                      <path d="M-20 40 C120 120,260 0,390 70 C520 140,600 30,720 88" />
                    </svg>
                  </div>

                  <img
                    className="case-isotipo"
                    src={isotipo}
                    alt=""
                  />

                  <div className="case-chip">
                    IDENTIDAD / APLICACIONES
                  </div>
                </div>

                <div className="case-copy">
                  <h3>
                    Un negocio con buenas
                    ideas, pero sin una
                    misma forma de verse.
                  </h3>

                  <p>
                    El diseño del portafolio
                    también funciona como
                    una prueba visual de
                    criterio: menos mockup
                    genérico y más sistema
                    gráfico con intención.
                  </p>

                  <div className="case-meta">
                    <div>
                      <b>
                        Necesitaba
                      </b>

                      <span>
                        Que todo se sintiera
                        parte del mismo
                        negocio.
                      </span>
                    </div>

                    <div>
                      <b>
                        Trabajamos
                      </b>

                      <span>
                        Imagen, versiones y
                        documentación
                        acordada.
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="section contact"
        >
          <div className="container">
            <div className="contact-shell reveal">
              <div className="contact-copy">
                <span className="eyebrow">
                  Hablemos
                </span>

                <h2>
                  Cuéntanos qué está pasando
                  con tu marca.
                </h2>

                <p>
                  No tienes que explicarlo
                  bonito. Cuéntanos qué
                  sientes que no cuadra y
                  nosotros hacemos las
                  preguntas después.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <section className="direct">
          <div className="container">
            <div className="direct-top reveal">
              <div>
                <span className="eyebrow">
                  Contacto directo
                </span>

                <h2
                  className="display"
                  style={{
                    fontSize:
                      'clamp(2.7rem,5vw,5.4rem)',
                  }}
                >
                  ¿Prefieres escribirnos
                  directamente?
                </h2>
              </div>

              <p className="lead">
                También puedes contactarnos
                directamente por nuestros
                canales.
              </p>
            </div>

            <div className="direct-grid reveal">

              {/* WHATSAPP */}
              <a
                className="direct-row"
                href="https://wa.me/573214321697?text=Hola%20Sof%C3%ADa%2C%20vi%20su%20p%C3%A1gina%20web%20y%20quiero%20informaci%C3%B3n%20sobre%20mi%20marca."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir a Sofía en Voz Alta por WhatsApp"
              >
                <div className="social-icon">
                  W
                </div>

                <div>
                  <h3>
                    WhatsApp
                  </h3>

                  <p>
                    Hablemos por mensaje.
                  </p>
                </div>

                <div className="go">
                  WhatsApp →
                </div>
              </a>

              {/* INSTAGRAM */}
              <a
                className="direct-row"
                href="https://www.instagram.com/sofiaenvozalta?igsh=MWhkYWlkdDkzZWY2Zg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Sofía en Voz Alta"
              >
                <div className="social-icon">
                  I
                </div>

                <div>
                  <h3>
                    Instagram
                  </h3>

                  <p>
                    Síguenos o escríbenos.
                  </p>
                </div>

                <div className="go">
                  Instagram →
                </div>
              </a>

              {/* FACEBOOK */}
              <a
                className="direct-row"
                href="https://www.facebook.com/share/19C55gK5qb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Facebook de Sofía en Voz Alta"
              >
                <div className="social-icon">
                  F
                </div>

                <div>
                  <h3>
                    Facebook
                  </h3>

                  <p>
                    Encuéntranos aquí.
                  </p>
                </div>

                <div className="go">
                  Facebook →
                </div>
              </a>

              {/* CORREO */}
              <a
                className="direct-row"
                href="mailto:sofiaenvozalta@gmail.com?subject=Quiero%20informaci%C3%B3n%20sobre%20mi%20marca"
                aria-label="Enviar correo a Sofía en Voz Alta"
              >
                <div className="social-icon">
                  @
                </div>

                <div>
                  <h3>
                    Correo
                  </h3>

                  <p>
                    Para conversaciones más
                    formales.
                  </p>
                </div>

                <div className="go">
                  Escribir →
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="close">
          <div className="container reveal">
            <img
              className="close-isotipo"
              src={isotipo}
              alt=""
            />

            <h2>
              Una marca no necesita
              aparentar.
              <br />

              <span>
                Necesita tener sentido.
              </span>
            </h2>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <img
            src={logo}
            alt="Sofía en Voz Alta"
          />

          <div className="footer-links">
            <a href="#problema">
              Qué hacemos
            </a>

            <a href="#como">
              Cómo trabajamos
            </a>

            <a href="#trabajos">
              Trabajos
            </a>

            <a href="#contacto">
              Contacto
            </a>

            <a
              href="https://www.instagram.com/sofiaenvozalta?igsh=MWhkYWlkdDkzZWY2Zg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/19C55gK5qb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a href="#contacto">
              Política de privacidad
            </a>
          </div>
        </div>
      </footer>

      <div className="mobile-cta">
        <a
          className="btn btn-primary"
          href="#contacto"
        >
          Hablemos de tu marca
        </a>
      </div>
    </>
  );
}