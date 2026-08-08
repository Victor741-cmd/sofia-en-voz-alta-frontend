# Sofía en Voz Alta — Frontend React

Migración del HTML original a React con Vite.

## Requisitos

- Node.js 18 o superior
- npm

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Estructura principal

```text
src/
├── assets/
│   └── images/
│       ├── favicon.png
│       ├── isotipo-sofia-en-voz-alta.png
│       ├── logo-sofia-en-voz-alta.png
│       └── sofia-foto.png
├── App.jsx
├── main.jsx
└── styles.css
```

## Formulario

El formulario ya está controlado por React mediante estado local. Actualmente `handleSubmit` no llama a ningún servicio: solamente deja preparado el objeto que luego enviaremos al backend.

Campos actuales:

- nombre
- negocio
- situacion
- canal (`whatsapp` o `correo`)

Cuando se construya el backend, se puede sustituir el bloque marcado con `TODO` en `ContactForm` por un `fetch` o por un servicio HTTP dedicado.
