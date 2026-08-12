import React, { useEffect, useState } from 'react';

import logo from './assets/images/logo-sofia-en-voz-alta.png';
import isotipo from './assets/images/isotipo-sofia-en-voz-alta.png';
import sofiaFoto from './assets/images/sofia-foto.png';
import trabajo1 from './assets/images/1.png';
import trabajo2 from './assets/images/2.png';
import personaSofia from './assets/images/3.png';
import personaVictor from './assets/images/4.png';

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
            href="#servicios"
            onClick={closeMenu}
          >
            Servicios
          </a>

          <a
            href="#trabajos"
            onClick={closeMenu}
          >
            Trabajos
          </a>

          <a
            href="#como"
            onClick={closeMenu}
          >
            Cómo trabajamos
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
          >
            Contacto
          </a>

          <a
            href="#contacto"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Muéstrame tu marca
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

function ServicesSection() {
  return (
    <>
      <style>{`
        .services-ui {
          padding: 120px 0 110px;
          background: #fffefc;
          scroll-margin-top: 90px;
        }

        .services-ui-head {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, .75fr);
          gap: 70px;
          align-items: end;
          padding-bottom: 72px;
          border-bottom: 1px solid rgba(76, 18, 63, .13);
        }

        .services-ui-title {
          margin: 22px 0 0;
          max-width: 830px;
          color: var(--plum);
          font-size: clamp(3.4rem, 6.5vw, 6.8rem);
          line-height: .9;
          letter-spacing: -.065em;
        }

        .services-ui-intro {
          margin: 0 0 8px;
          max-width: 520px;
          color: #51494e;
          font-size: clamp(1.05rem, 1.55vw, 1.28rem);
          line-height: 1.55;
        }

        .services-ui-list {
          display: grid;
        }

        .services-ui-row {
          display: grid;
          grid-template-columns: 105px minmax(270px, .9fr) minmax(320px, 1fr) auto;
          gap: 38px;
          align-items: center;
          min-height: 170px;
          padding: 28px 8px;
          border-bottom: 1px solid rgba(76, 18, 63, .13);
        }

        .services-ui-number {
          color: rgba(76, 18, 63, .09);
          font-size: clamp(3.4rem, 5vw, 5.4rem);
          line-height: 1;
          font-weight: 950;
          letter-spacing: -.07em;
        }

        .services-ui-row:nth-child(2) .services-ui-number {
          color: rgba(233, 0, 98, .15);
        }

        .services-ui-name {
          margin: 0;
          color: var(--plum);
          font-size: clamp(2rem, 3.2vw, 3.35rem);
          line-height: .98;
          letter-spacing: -.045em;
        }

        .services-ui-description {
          margin: 0;
          max-width: 470px;
          color: #51494e;
          font-size: 1rem;
          line-height: 1.55;
        }

        .services-ui-cta {
          justify-self: end;
          white-space: nowrap;
          color: var(--plum);
          font-size: 1rem;
          font-weight: 900;
          transition: transform .2s ease, color .2s ease;
        }

        .services-ui-cta:hover {
          color: var(--rasp);
          transform: translateX(5px);
        }

        @media (max-width: 980px) {
          .services-ui {
            padding: 90px 0;
          }

          .services-ui-head {
            grid-template-columns: 1fr;
            gap: 25px;
            padding-bottom: 45px;
          }

          .services-ui-row {
            grid-template-columns: 72px 1fr;
            gap: 18px 24px;
            padding: 32px 0;
          }

          .services-ui-description {
            grid-column: 2;
          }

          .services-ui-cta {
            grid-column: 2;
            justify-self: start;
          }
        }

        @media (max-width: 680px) {
          .services-ui {
            padding: 76px 0;
          }

          .services-ui-title {
            font-size: clamp(3rem, 14vw, 4.6rem);
          }

          .services-ui-row {
            grid-template-columns: 58px 1fr;
            min-height: auto;
          }

          .services-ui-number {
            font-size: 3.4rem;
            align-self: start;
          }

          .services-ui-name {
            font-size: 2.25rem;
          }

          .services-ui-description,
          .services-ui-cta {
            grid-column: 1 / -1;
            margin-left: 0;
          }
        }
      `}</style>

      <section
        id="servicios"
        className="services-ui"
      >
        <div className="container">
          <div className="services-ui-head reveal">
            <div>
              <span className="eyebrow">
                ¿Qué necesitas?
              </span>

              <h2 className="services-ui-title">
                No todos llegan con el mismo problema.
              </h2>
            </div>

            <p className="services-ui-intro">
              No tienes que saber cómo se llama el servicio.
              Elige la situación que más se parece a la tuya.
            </p>
          </div>

          <div className="services-ui-list reveal">
            <article className="services-ui-row">
              <div className="services-ui-number">01</div>

              <h3 className="services-ui-name">
                Estoy empezando.
              </h3>

              <p className="services-ui-description">
                Todavía no tengo claro cómo debería verse mi negocio.
                Necesito logo, colores y una base que pueda empezar a usar.
              </p>

              <a
                className="services-ui-cta"
                href="#contacto"
              >
                Diseño de logo →
              </a>
            </article>

            <article className="services-ui-row">
              <div className="services-ui-number">02</div>

              <h3 className="services-ui-name">
                Ya tengo logo, pero quiero cambiarlo.
              </h3>

              <p className="services-ui-description">
                Mi negocio avanzó. Su imagen se quedó atrás.
                Quiero revisar qué vale la pena conservar y qué necesita cambiar.
              </p>

              <a
                className="services-ui-cta"
                href="#contacto"
              >
                Rediseño de logo →
              </a>
            </article>

            <article className="services-ui-row">
              <div className="services-ui-number">03</div>

              <h3 className="services-ui-name">
                Tengo muchas cosas, pero nada se conecta.
              </h3>

              <p className="services-ui-description">
                Logo, publicaciones, colores y piezas parecen de negocios distintos.
                Necesito poner todo de acuerdo.
              </p>

              <a
                className="services-ui-cta"
                href="#contacto"
              >
                Identidad de marca →
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function MultiSelectDropdown({
  label,
  options,
  selectedValues,
  onToggle,
  placeholder,
}) {
  const [open, setOpen] = useState(false);

  const selectedText =
    selectedValues.length === 0
      ? placeholder
      : selectedValues.length === 1
        ? selectedValues[0]
        : `${selectedValues.length} opciones seleccionadas`;

  return (
    <div className="multi-select">
      <button
        type="button"
        className={`multi-select-trigger ${
          open ? 'multi-select-trigger-open' : ''
        }`}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <span
          className={
            selectedValues.length === 0
              ? 'multi-select-placeholder'
              : ''
          }
        >
          {selectedText}
        </span>

        <span
          className={`multi-select-arrow ${
            open ? 'multi-select-arrow-open' : ''
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="multi-select-menu">
          {options.map((option, index) => {
            const id = `${label}-${index}`;

            const checked =
              selectedValues.includes(option.value);

            return (
              <label
                key={option.value}
                className={`multi-select-option ${
                  checked
                    ? 'multi-select-option-selected'
                    : ''
                }`}
                htmlFor={id}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onToggle(option.value)
                  }
                />

                <span className="multi-select-check">
                  {checked ? '✓' : ''}
                </span>

                <span className="multi-select-option-copy">
                  <strong>
                    {option.title}
                  </strong>

                  <span>
                    {option.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      )}

      {selectedValues.length > 0 && (
        <div className="multi-select-selected">
          {selectedValues.map((value) => (
            <span
              key={value}
              className="multi-select-chip"
            >
              {value}

              <button
                type="button"
                onClick={() =>
                  onToggle(value)
                }
                aria-label={`Quitar ${value}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TeamSection() {
  return (
    <>
      <style>{`
        .team-section {
          padding: 120px 0;
          background: #fffefc;
        }

        .team-wrap {
          position: relative;
        }

        .team-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);
          gap: 60px;
          align-items: end;
        }

        .team-title {
          margin: 18px 0 0;
          color: var(--plum);
          font-size: clamp(3rem, 5.8vw, 6rem);
          line-height: .92;
          letter-spacing: -.06em;
          max-width: 920px;
        }

        .team-intro {
          margin: 0 0 8px;
          color: #554d52;
          font-size: 1.08rem;
          line-height: 1.58;
          max-width: 430px;
        }

        .team-stage {
          margin-top: 70px;
          position: relative;
          min-height: 820px;
        }

        .team-line {
          position: absolute;
          left: 14%;
          right: 14%;
          top: 15%;
          bottom: 10%;
          z-index: 1;
        }

        .team-line svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .team-line path {
          fill: none;
          stroke: rgba(237, 0, 100, .42);
          stroke-width: 2.2;
        }

        .team-core {
          position: absolute;
          left: 50%;
          top: 48%;
          transform: translate(-50%, -50%);
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: var(--plum);
          color: #fff;
          display: grid;
          place-items: center;
          text-align: center;
          font-size: .7rem;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
          box-shadow: 0 22px 58px rgba(75, 17, 63, .2);
          z-index: 5;
        }

        .team-core::after {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(237, 0, 100, .18);
        }

        .team-person {
          position: absolute;
          display: grid;
          align-items: center;
          gap: 28px;
          z-index: 2;
        }

        .team-person-sofia {
          left: 0;
          top: 0;
          width: 58%;
          grid-template-columns: 1.05fr .95fr;
        }

        .team-person-victor {
          right: 0;
          bottom: 0;
          width: 49%;
          grid-template-columns: .92fr 1.08fr;
        }

        .team-photo {
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(75, 17, 63, .11);
          box-shadow: 0 26px 75px rgba(75, 17, 63, .10);
          background: #fff;
        }

        .team-person-sofia .team-photo {
          height: 390px;
        }

        .team-person-victor .team-photo {
          height: 390px;
          order: 2;
        }

        .team-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-person-sofia .team-photo img {
          object-position: center 22%;
        }

        .team-person-victor .team-photo img {
          object-position: center 30%;
        }

        .team-name {
          color: var(--plum);
          font-size: clamp(2.6rem, 4.8vw, 5rem);
          line-height: .9;
          letter-spacing: -.055em;
          font-weight: 900;
          margin: 0;
        }

        .team-tag {
          margin-top: 10px;
          color: var(--plum);
          font-size: clamp(1.32rem, 2.1vw, 2rem);
          line-height: 1.05;
          letter-spacing: -.03em;
          font-weight: 850;
        }

        .team-role {
          margin-top: 13px;
          color: var(--rasp);
          font-size: .73rem;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .team-desc {
          margin-top: 17px;
          color: #5a5156;
          font-size: .95rem;
          line-height: 1.58;
          max-width: 400px;
        }

        .team-badge {
          display: inline-flex;
          margin-top: 16px;
          padding: 8px 11px;
          border-radius: 999px;
          background: #fff2f6;
          color: var(--plum);
          font-size: .7rem;
          font-weight: 850;
        }

        .team-close {
          margin-top: 88px;
          border-top: 1px solid rgba(75, 17, 63, .11);
          padding-top: 36px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 42px;
          align-items: end;
        }

        .team-close h2 {
          margin: 0;
          color: var(--plum);
          font-size: clamp(2.6rem, 5vw, 5.3rem);
          line-height: .94;
          letter-spacing: -.052em;
        }

        .team-close h2 span {
          color: var(--rasp);
        }

        .team-close p {
          margin: 0;
          color: #746a70;
          font-size: .95rem;
          line-height: 1.55;
        }

        @media (max-width: 1050px) {
          .team-section {
            padding: 95px 0;
          }

          .team-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .team-stage {
            min-height: auto;
            display: grid;
            gap: 56px;
          }

          .team-person {
            position: relative;
            width: 100%;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
          }

          .team-person-sofia,
          .team-person-victor {
            grid-template-columns: 1fr 1fr;
          }

          .team-line,
          .team-core {
            display: none;
          }
        }

        @media (max-width: 720px) {
          .team-section {
            padding: 80px 0;
          }

          .team-title {
            font-size: clamp(2.9rem, 13vw, 4.7rem);
          }

          .team-person-sofia,
          .team-person-victor {
            grid-template-columns: 1fr;
          }

          .team-person-sofia .team-photo,
          .team-person-victor .team-photo {
            height: 470px;
          }

          .team-person-victor .team-photo {
            order: 0;
          }

          .team-close {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="team-section">
        <div className="container team-wrap">
          <div className="team-top reveal">
            <div>
              <span className="eyebrow">Las personas detrás</span>
              <h2 className="team-title">
                Esto no lo hace una agencia sin rostro.
              </h2>
            </div>

            <p className="team-intro">
              <strong>Sofía en Voz Alta</strong> está construido por dos personas que combinan criterio de marca, estructura y ejecución para trabajar cada proyecto con cuidado.
            </p>
          </div>

          <div className="team-stage reveal">
            <div className="team-line" aria-hidden="true">
              <svg viewBox="0 0 1000 700" preserveAspectRatio="none">
                <path d="M90 170 C260 110,350 280,500 350 C650 420,750 510,910 470" />
              </svg>
            </div>

           

            <article className="team-person team-person-sofia">
              <div className="team-copy">
                <h3 className="team-name">Sofía</h3>
                <div className="team-tag">Piensa la marca desde adentro.</div>
                <div className="team-role">Dirección de marca</div>
                <p className="team-desc">
                  Sofía observa, organiza y aterriza lo que un negocio quiere proyectar. Su trabajo no es adornar, sino ayudar a que cada marca tenga sentido, se vea coherente y se sienta propia.
                </p>
                <span className="team-badge">Claridad con intención</span>
              </div>

              <div className="team-photo">
                <img src={personaSofia} alt="Sofía" />
              </div>
            </article>

            <article className="team-person team-person-victor">
              <div className="team-photo">
                <img src={personaVictor} alt="Víctor" />
              </div>

              <div className="team-copy">
                <h3 className="team-name">Víctor</h3>
                <div className="team-tag">Pregunta si también funciona en la vida real.</div>
                <div className="team-role">Estructura y ejecución</div>
                <p className="team-desc">
                  Víctor conecta la idea con la realidad. Se fija en cómo aterrizar lo que se define, cómo se usa y cómo se convierte en una experiencia más clara para el negocio y para las personas que lo ven.
                </p>
                <span className="team-badge">Ideas que sí aterrizan</span>
              </div>
            </article>
          </div>

          <div className="team-close reveal">
            <h2>
              Una piensa cómo debería sentirse la marca.
              <br />
              <span>El otro pregunta si también funciona en la vida real.</span>
            </h2>

            <p>
              <strong>Creatividad con criterio.</strong> Estructura para llevarla a la realidad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const HELP_OPTIONS = [
    {
      value: 'Crear mi logo desde cero',
      title: 'Crear mi logo desde cero',
      description:
        'Estoy empezando y necesito una base clara.',
    },
    {
      value:
        'Mejorar o rediseñar mi logo actual',
      title:
        'Mejorar o rediseñar mi logo actual',
      description:
        'Ya tengo algo, pero siento que puede funcionar mejor.',
    },
    {
      value:
        'Organizar toda la identidad de mi marca',
      title:
        'Organizar toda la identidad de mi marca',
      description:
        'Quiero que logo, colores y piezas empiecen a sentirse conectados.',
    },
    {
      value: 'No estoy seguro todavía',
      title: 'No estoy seguro todavía',
      description:
        'Está bien. Lo revisamos contigo.',
    },
  ];

  const PROBLEM_OPTIONS = [
    {
      value: 'Estoy empezando',
      title: 'Estoy empezando',
      description:
        'Todavía no tengo una marca clara.',
    },
    {
      value:
        'Mi logo ya no me representa',
      title:
        'Mi logo ya no me representa',
      description:
        'Existe, pero no se siente como mi negocio hoy.',
    },
    {
      value:
        'Cada pieza parece de un negocio distinto',
      title:
        'Cada pieza parece de un negocio distinto',
      description:
        'Tengo logo, colores y publicaciones, pero nada se conecta.',
    },
    {
      value:
        'Mi negocio creció y la imagen se quedó atrás',
      title:
        'Mi negocio creció y la imagen se quedó atrás',
      description:
        'Siento que visualmente sigo en la etapa del comienzo.',
    },
    {
      value:
        'Mi negocio se ve menos profesional de lo que es',
      title:
        'Mi negocio se ve menos profesional de lo que es',
      description:
        'Lo que mostramos no está a la altura del trabajo que hacemos.',
    },
    {
      value: 'Es otra cosa',
      title: 'Es otra cosa',
      description:
        'Cuéntanos brevemente qué pasa.',
    },
  ];

  const [formData, setFormData] =
    useState({
      nombre: '',
      negocio: '',
      ayudas: [],
      problemas: [],
      otroProblema: '',
      enlaceMarca: '',
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
    const { name, value } =
      event.target;

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

  const handleCheckbox = (
    group,
    value
  ) => {
    setSubmitted(false);
    setErrorMessage('');

    setFormData((current) => {
      const selected =
        current[group];

      const exists =
        selected.includes(value);

      const nextValues =
        exists
          ? selected.filter(
              (item) =>
                item !== value
            )
          : [...selected, value];

      const nextState = {
        ...current,
        [group]: nextValues,
      };

      if (
        group === 'problemas' &&
        value === 'Es otra cosa' &&
        exists
      ) {
        nextState.otroProblema =
          '';
      }

      return nextState;
    });
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      return 'Cuéntanos cómo te llamas.';
    }

    if (!formData.negocio.trim()) {
      return 'Cuéntanos cómo se llama tu negocio y qué hace.';
    }

    if (
      formData.ayudas.length === 0
    ) {
      return 'Selecciona al menos una opción sobre cómo podemos ayudarte.';
    }

    if (
      formData.problemas.length ===
      0
    ) {
      return 'Selecciona al menos una opción sobre lo que está pasando con tu marca.';
    }

    if (
      formData.problemas.includes(
        'Es otra cosa'
      ) &&
      !formData.otroProblema.trim()
    ) {
      return 'Cuéntanos brevemente qué está pasando.';
    }

    if (
      formData.canal ===
        'whatsapp' &&
      !formData.whatsapp.trim()
    ) {
      return 'Escribe tu número de WhatsApp.';
    }

    if (
      formData.canal === 'correo' &&
      !formData.correo.trim()
    ) {
      return 'Escribe tu correo electrónico.';
    }

    return '';
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    const validationMessage =
      validateForm();

    if (validationMessage) {
      setErrorMessage(
        validationMessage
      );
      return;
    }

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage('');

    const request = {
      nombre:
        formData.nombre.trim(),

      negocio:
        formData.negocio.trim(),

      ayudas:
        formData.ayudas,

      problemas:
        formData.problemas,

      otroProblema:
        formData.problemas.includes(
          'Es otra cosa'
        )
          ? formData.otroProblema.trim()
          : null,

      enlaceMarca:
        formData.enlaceMarca.trim() ||
        null,

      canal:
        formData.canal,

      whatsapp:
        formData.canal ===
        'whatsapp'
          ? formData.whatsapp.trim()
          : null,

      correo:
        formData.canal ===
        'correo'
          ? formData.correo.trim()
          : null,
    };

    try {
      const API_URL =
        import.meta.env
          .VITE_API_URL ||
        'https://sofiaenvozalta.onrender.com';

      const response =
        await fetch(
          `${API_URL}/api/contact`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body:
              JSON.stringify(
                request
              ),
          }
        );

      let result = null;

      try {
        result =
          await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        let message =
          result?.message ||
          'No fue posible enviar tu solicitud.';

        if (result?.errors) {
          const validationMessages =
            Object.values(
              result.errors
            )
              .flat()
              .join(' ');

          if (
            validationMessages
          ) {
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
        ayudas: [],
        problemas: [],
        otroProblema: '',
        enlaceMarca: '',
        canal: 'correo',
        whatsapp: '',
        correo: '',
      });
    } catch (error) {
      setErrorMessage(
        error.message ||
          'No fue posible enviar tu solicitud. Inténtalo nuevamente.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .diagnostic-form {
          display: grid;
          gap: 28px;
        }

        .diagnostic-step {
          display: grid;
          gap: 11px;
        }

        .diagnostic-label {
          display: flex;
          align-items: baseline;
          gap: 10px;
          color: var(--plum);
          font-weight: 900;
          font-size: 1rem;
        }

        .diagnostic-num {
          color: var(--rasp);
          font-size: .8rem;
          font-weight: 950;
          letter-spacing: .06em;
        }

        .diagnostic-helper {
          color: #766b72;
          font-size: .8rem;
          line-height: 1.4;
        }

        .diagnostic-form input[type="text"],
        .diagnostic-form input[type="email"],
        .diagnostic-form input[type="tel"],
        .diagnostic-form input[type="url"],
        .diagnostic-form textarea {
          width: 100%;
          border: 1px solid rgba(75,17,63,.14);
          border-radius: 15px;
          background: #fff;
          padding: 14px 15px;
          color: #2a2328;
          outline: none;
          font: inherit;
        }

        .diagnostic-form textarea {
          min-height: 92px;
          resize: vertical;
        }

        .multi-select {
          position: relative;
        }

        .multi-select-trigger {
          width: 100%;
          min-height: 58px;
          border: 1px solid rgba(75,17,63,.14);
          border-radius: 15px;
          background: #fff;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: var(--plum);
          font: inherit;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
          transition: .18s;
        }

        .multi-select-trigger:hover,
        .multi-select-trigger-open {
          border-color: rgba(237,0,100,.38);
          box-shadow: 0 0 0 4px rgba(237,0,100,.05);
        }

        .multi-select-placeholder {
          color: #81777d;
          font-weight: 500;
        }

        .multi-select-arrow {
          color: var(--plum);
          font-size: 1.1rem;
          transition: transform .2s ease;
        }

        .multi-select-arrow-open {
          transform: rotate(180deg);
        }

        .multi-select-menu {
          position: absolute;
          z-index: 30;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          max-height: 360px;
          overflow-y: auto;
          background: #fff;
          border: 1px solid rgba(75,17,63,.13);
          border-radius: 18px;
          padding: 8px;
          box-shadow: 0 22px 60px rgba(75,17,63,.14);
        }

        .multi-select-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 13px;
          border-radius: 12px;
          cursor: pointer;
          transition: .15s;
        }

        .multi-select-option:hover {
          background: #fff7fa;
        }

        .multi-select-option-selected {
          background: #fff2f6;
        }

        .multi-select-option input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .multi-select-check {
          width: 20px;
          height: 20px;
          flex: 0 0 20px;
          border: 1.5px solid rgba(75,17,63,.28);
          border-radius: 6px;
          display: grid;
          place-items: center;
          color: white;
          font-size: .75rem;
          font-weight: 950;
        }

        .multi-select-option-selected .multi-select-check {
          background: var(--rasp);
          border-color: var(--rasp);
        }

        .multi-select-option-copy strong {
          display: block;
          color: var(--plum);
          font-size: .9rem;
          line-height: 1.25;
        }

        .multi-select-option-copy span {
          display: block;
          margin-top: 3px;
          color: #766b72;
          font-size: .75rem;
          line-height: 1.35;
        }

        .multi-select-selected {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 9px;
        }

        .multi-select-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 9px;
          border-radius: 999px;
          background: #fff2f6;
          color: var(--plum);
          font-size: .72rem;
          font-weight: 800;
        }

        .multi-select-chip button {
          border: 0;
          background: none;
          color: var(--rasp);
          font-size: 1rem;
          line-height: 1;
          cursor: pointer;
          padding: 0;
        }

        .diagnostic-contact-options {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .diagnostic-contact {
          position: relative;
        }

        .diagnostic-contact input {
          position: absolute;
          opacity: 0;
        }

        .diagnostic-contact label {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(75,17,63,.13);
          border-radius: 999px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 820;
          background: #fff;
        }

        .diagnostic-radio {
          width: 17px;
          height: 17px;
          border: 1.5px solid rgba(75,17,63,.30);
          border-radius: 50%;
          position: relative;
        }

        .diagnostic-contact input:checked + label {
          background: var(--plum);
          color: #fff;
        }

        .diagnostic-contact input:checked + label .diagnostic-radio {
          border-color: #fff;
        }

        .diagnostic-contact input:checked + label .diagnostic-radio::after {
          content: "";
          position: absolute;
          inset: 4px;
          background: #fff;
          border-radius: 50%;
        }

        .diagnostic-submit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .diagnostic-note {
          max-width: 300px;
          margin: 0;
          color: #766b72;
          font-size: .74rem;
        }

        .diagnostic-trust {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid rgba(75,17,63,.07);
          color: #6b6167;
          font-size: .72rem;
        }

        .diagnostic-trust span::before {
          content: "✓";
          color: var(--rasp);
          font-weight: 950;
          margin-right: 6px;
        }

        @media (max-width: 680px) {
          .diagnostic-submit {
            flex-direction: column;
            align-items: flex-start;
          }

          .diagnostic-note {
            max-width: none;
          }
        }
      `}</style>

      <form
        className="form diagnostic-form"
        onSubmit={handleSubmit}
      >
        <div className="diagnostic-step">
          <label
            className="diagnostic-label"
            htmlFor="nombre"
          >
            <span className="diagnostic-num">
              01
            </span>
            ¿Cómo te llamas?
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Laura Martínez"
            required
          />
        </div>

        <div className="diagnostic-step">
          <label
            className="diagnostic-label"
            htmlFor="negocio"
          >
            <span className="diagnostic-num">
              02
            </span>
            ¿Cómo se llama tu negocio y qué hace?
          </label>

          <textarea
            id="negocio"
            name="negocio"
            value={formData.negocio}
            onChange={handleChange}
            placeholder="Ej: Miga. Somos una panadería y café en Neiva."
            required
          />
        </div>

        <div className="diagnostic-step">
          <div className="diagnostic-label">
            <span className="diagnostic-num">
              03
            </span>
            ¿En qué te gustaría que te ayudemos?
          </div>

          <div className="diagnostic-helper">
            Puedes seleccionar más de una opción.
          </div>

          <MultiSelectDropdown
            label="help"
            options={HELP_OPTIONS}
            selectedValues={
              formData.ayudas
            }
            onToggle={(value) =>
              handleCheckbox(
                'ayudas',
                value
              )
            }
            placeholder="Selecciona una o varias opciones"
          />
        </div>

        <div className="diagnostic-step">
          <div className="diagnostic-label">
            <span className="diagnostic-num">
              04
            </span>
            ¿Qué está pasando con tu marca hoy?
          </div>

          <div className="diagnostic-helper">
            Puedes seleccionar más de una situación.
          </div>

          <MultiSelectDropdown
            label="problem"
            options={PROBLEM_OPTIONS}
            selectedValues={
              formData.problemas
            }
            onToggle={(value) =>
              handleCheckbox(
                'problemas',
                value
              )
            }
            placeholder="Selecciona una o varias situaciones"
          />

          {formData.problemas.includes(
            'Es otra cosa'
          ) && (
            <textarea
              name="otroProblema"
              value={
                formData.otroProblema
              }
              onChange={handleChange}
              placeholder="Cuéntanos brevemente qué está pasando."
              required
            />
          )}
        </div>

        <div className="diagnostic-step">
          <label
            className="diagnostic-label"
            htmlFor="enlaceMarca"
          >
            ¿Quieres mostrarnos tu marca antes de hablar?
            <span className="diagnostic-optional">
              Opcional
            </span>
          </label>

          <input
            id="enlaceMarca"
            name="enlaceMarca"
            type="url"
            value={
              formData.enlaceMarca
            }
            onChange={handleChange}
            placeholder="Instagram, página web o enlace"
          />
        </div>

        <div className="diagnostic-step">
          <div className="diagnostic-label">
            ¿Dónde prefieres que te contactemos?
          </div>

          <div className="diagnostic-contact-options">
            <div className="diagnostic-contact">
              <input
                id="contact-whatsapp"
                type="radio"
                name="canal"
                value="whatsapp"
                checked={
                  formData.canal ===
                  'whatsapp'
                }
                onChange={handleChange}
              />

              <label htmlFor="contact-whatsapp">
                <span className="diagnostic-radio" />
                WhatsApp
              </label>
            </div>

            <div className="diagnostic-contact">
              <input
                id="contact-correo"
                type="radio"
                name="canal"
                value="correo"
                checked={
                  formData.canal ===
                  'correo'
                }
                onChange={handleChange}
              />

              <label htmlFor="contact-correo">
                <span className="diagnostic-radio" />
                Correo
              </label>
            </div>
          </div>

          {formData.canal ===
            'whatsapp' && (
            <input
              name="whatsapp"
              type="tel"
              value={
                formData.whatsapp
              }
              onChange={handleChange}
              placeholder="Ej: +57 300 123 4567"
              required
            />
          )}

          {formData.canal ===
            'correo' && (
            <input
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ej: hola@minegocio.com"
              required
            />
          )}
        </div>

        <div className="diagnostic-submit">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? 'Enviando...'
              : 'Quiero que revisen mi marca →'}
          </button>

          <p className="diagnostic-note">
            Revisaremos lo que nos envíes y te contactaremos por el medio que elegiste.
          </p>
        </div>

        {submitted && (
          <div className="form-note success">
            ¡Listo! Recibimos tu solicitud. Te responderemos lo antes posible.
          </div>
        )}

        {errorMessage && (
          <div className="form-note error">
            {errorMessage}
          </div>
        )}

        <div className="diagnostic-trust">
          <span>
            4 preguntas rápidas
          </span>

          <span>
            No necesitas saber de branding
          </span>

          <span>
            Te respondemos personalmente
          </span>
        </div>
      </form>
    </>
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

        <ServicesSection />

        <section id="problema" className="section miga-section">
          <div className="container">
            <span className="eyebrow reveal">
              Cuando cada cosa va por su lado
            </span>

            <h2 className="miga-main-title reveal">
              Así se ve una marca cuando cada pieza se resuelve por separado.
            </h2>

            <p className="miga-intro reveal">
              Post por un lado. Story por otro. Empaque por otro. Y luego la misma
              pregunta de siempre:{' '}
              <strong>“¿cómo hacemos esto?”</strong>
            </p>

            <div className="miga-case-name reveal">
              <div className="miga-case-brand">
                <strong>MIGA</strong>
                <span>Panadería &amp; Café</span>
              </div>

              <div className="miga-case-hint">
                Mismo negocio. Mismas necesidades. Lo único que cambia es cómo se
                presenta.
              </div>
            </div>

            <div className="miga-compare reveal">
              <article className="miga-side miga-before">
                <div className="miga-side-head">
                  <span className="miga-side-label miga-before-label">Antes</span>

                  <div className="miga-side-head-copy">
                    <strong>Cada pieza parecía de un negocio diferente.</strong>
                    <span>
                      Nada estaba necesariamente “mal”. Cada cosa se resolvía por
                      separado.
                    </span>
                  </div>
                </div>

                <div className="miga-canvas">
                  <div className="miga-before-logo">
                    <div>
                      <div className="miga-before-script">Miga</div>
                      <div className="miga-before-sub">Panadería artesanal</div>
                    </div>
                    <div className="miga-wheat">🌾</div>
                  </div>

                  <div className="miga-before-post">
                    <div className="miga-oldmark">MIGA PAN</div>
                    <div className="miga-promo-hero">
                      2x1
                      <br />
                      EN CROISSANTS
                    </div>
                    <div className="miga-promo-sub">
                      Solo hoy · hasta agotar existencias
                    </div>
                  </div>

                  <div className="miga-before-story">
                    <div className="miga-doodle">🤎</div>
                    <strong>
                      HOY HAY
                      <br />
                      PAN DE
                      <br />
                      CHOCOLATE
                    </strong>
                    <span>otra letra, otro color, otra vibra</span>
                  </div>

                  <div className="miga-before-bag">
                    <div className="miga-cup">☕</div>
                    <div className="miga-bag-title">MIGA CAFÉ</div>
                    <div className="miga-bag-sub">café • pan • algo rico</div>
                  </div>

                  <div className="miga-before-menu">
                    <div className="miga-menu-brand-old">Miga Café</div>
                    <h3>MENÚ</h3>
                    <p>
                      Croissant .......... $
                      <br />
                      Latte ................. $
                      <br />
                      Pan chocolate .... $
                    </p>
                  </div>

                  <div className="miga-before-chat">
                    <div className="miga-chat-top">
                      <span className="miga-avatar" />
                      <strong>Diseño / Community</strong>
                    </div>
                    <div className="miga-bubble">¿Cuál logo pongo?</div>
                    <div className="miga-bubble miga-bubble-me">El marrón.</div>
                    <div className="miga-bubble">Tengo tres marrones 😅</div>
                    <div className="miga-bubble miga-bubble-me">
                      Pon el que usamos la semana pasada.
                    </div>
                  </div>

                  <div className="miga-micro-note miga-mn1">
                    cada pieza “bonita” por su lado
                  </div>
                  <div className="miga-micro-note miga-mn2">
                    pero ninguna parece hermana de la otra
                  </div>

                  <div className="miga-before-foot">
                    <strong>Cada cosa sale diferente.</strong>
                    <span>Logo · post · story · empaque · menú</span>
                  </div>
                </div>
              </article>

              <div className="miga-transition">
                <div className="miga-converge" aria-hidden="true">
                  <svg viewBox="0 0 114 760" preserveAspectRatio="none">
                    <path d="M0 120 C55 160,45 280,57 380 C69 470,55 600,114 635" />
                    <path d="M0 240 C65 250,40 325,57 380 C75 445,55 520,114 520" />
                    <path d="M0 560 C60 520,42 430,57 380 C72 330,54 240,114 180" />
                  </svg>
                </div>

                <div className="miga-order-chip">
                  <div>
                    <strong>
                      Ponemos
                      <br />
                      orden
                    </strong>
                    <span>→</span>
                  </div>
                </div>

                <div className="miga-order-note">
                  mismas piezas · una misma marca
                </div>
              </div>

              <article className="miga-side miga-after">
                <div className="miga-side-head">
                  <span className="miga-side-label miga-after-label">Después</span>

                  <div className="miga-side-head-copy">
                    <strong>Distintas piezas. La misma marca.</strong>
                    <span>
                      Post, story, empaque o menú: cambia la pieza, pero MIGA sigue
                      siendo MIGA.
                    </span>
                  </div>
                </div>

                <div className="miga-canvas">
                  <div className="miga-after-logo">
                    <div className="miga-mark">
                      <div className="miga-symbol" />
                      <div className="miga-word">
                        miga<span>.</span>
                      </div>
                    </div>
                    <div className="miga-after-sub">
                      Panadería &amp; Café · hecho todos los días
                    </div>
                  </div>

                  <div className="miga-after-palette">
                    <span className="miga-ap1" />
                    <span className="miga-ap2" />
                    <span className="miga-ap3" />
                    <span className="miga-ap4" />
                  </div>

                  <div className="miga-after-post">
                    <div className="miga-mini-logo">
                      miga<span>.</span>
                    </div>
                    <div className="miga-offer">
                      2x1 en
                      <br />
                      croissants.
                    </div>
                    <div className="miga-offer-sub">
                      El mismo plan rico. Mejor presentado.
                    </div>
                    <div className="miga-croissant">🥐</div>
                  </div>

                  <div className="miga-after-story">
                    <div className="miga-story-line" />
                    <div className="miga-bean">🍫</div>
                    <strong>
                      Hoy hay
                      <br />
                      pan de
                      <br />
                      chocolate.
                    </strong>
                    <span>recién horneado · hasta agotar</span>
                  </div>

                  <div className="miga-after-bag">
                    <div className="miga-bag-symbol" />
                    <strong>
                      miga<span>.</span>
                    </strong>
                    <small>Panadería &amp; Café</small>
                  </div>

                  <div className="miga-after-menu">
                    <div className="miga-menu-top">
                      <div className="miga-menu-brand">
                        miga<span>.</span>
                      </div>
                      <div className="miga-menu-dot" />
                    </div>
                    <h3>Menú del día</h3>
                    <p>
                      Croissant .................... $
                      <br />
                      Latte .......................... $
                      <br />
                      Pan de chocolate ......... $
                    </p>
                  </div>

                  <div className="miga-after-sticker">
                    <div>
                      <div className="miga-sticker-word">
                        miga<span>.</span>
                      </div>
                      <small>horneado hoy</small>
                    </div>
                  </div>

                  <div className="miga-micro-note miga-mn3">mismo tono</div>
                  <div className="miga-micro-note miga-mn4">misma intención</div>

                  <div className="miga-after-foot">
                    <strong>Ahora todo se reconoce como MIGA.</strong>
                    <span>Logo · post · story · empaque · menú</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="miga-remate reveal">
              <h2>
                No se trata de hacer todo igual.
                <br />
                <span>Se trata de que todo se sienta tuyo.</span>
              </h2>

              <p>
                Una story puede verse distinta a un empaque. Lo importante es que
                ambos sigan pareciendo del mismo negocio.
              </p>
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
            </div>

            <div className="work-grid">
              <article className="case reveal">
                <div className="case-visual case-image-wrap">
                  <img
                    className="case-image"
                    src={trabajo1}
                    alt="Antes y después de identidad visual para Remotos"
                  />
                </div>

                <div className="case-copy">
                  <h3>
                    De un logo saturado a una
                    marca más clara y fácil de
                    reconocer.
                  </h3>

                  <div className="case-meta">
                    <div>
                      <b>
                        Necesitaba
                      </b>

                      <span>
                        Reducir ruido visual y
                        ordenar la idea de marca.
                      </span>
                    </div>

                    <div>
                      <b>
                        Trabajamos
                      </b>

                      <span>
                        Símbolo, limpieza,
                        proporción y dirección
                        visual.
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="case reveal">
                <div className="case-visual case-image-wrap">
                  <img
                    className="case-image"
                    src={trabajo2}
                    alt="Antes y después de identidad visual para Café Élite"
                  />
                </div>

                <div className="case-copy">
                  <h3>
                    Una imagen más cuidada para
                    que el negocio se sintiera
                    mejor presentado.
                  </h3>

                  <div className="case-meta">
                    <div>
                      <b>
                        Necesitaba
                      </b>

                      <span>
                        Verse más consistente,
                        profesional y memorable.
                      </span>
                    </div>

                    <div>
                      <b>
                        Trabajamos
                      </b>

                      <span>
                        Logo, aplicaciones,
                        estilo visual y coherencia
                        de marca.
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <TeamSection />

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
            <a href="#servicios">
              Servicios
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