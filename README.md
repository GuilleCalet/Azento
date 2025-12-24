# AZento Home – Sitio web (Next.js 14 + App Router)

Web corporativa para estudio de interiorismo/exteriorismo. Stack: Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn-style UI y Framer Motion.

## Cómo arrancar
1) Instala dependencias: `npm install`  
2) Dev server: `npm run dev` (http://localhost:3000)  
3) Lint opcional: `npm run lint`  

## Personalizar branding
- Paleta y tokens: `src/app/globals.css` define las variables CSS (`--primary`, `--accent`, etc.) y radios/sombras. Cambiando ahí actualizas todo Tailwind (se mapean en `tailwind.config.ts`).
- Tipografías: se cargan en `src/app/layout.tsx` (Inter + Playfair Display). Sustituye por tus fuentes y actualiza las variables `--font-sans` y `--font-serif`.
- Logo: coloca tu archivo en `public/logo-placeholder.svg` o ajusta el componente `src/components/logo.tsx`. Navbar y footer consumen ese wordmark.

## Editar contenido
- Texto y datos: `content/site.json`. Incluye navegación, hero, servicios, proyectos, proceso, testimonios, Instagram, contacto y footer. Edita textos, enlaces, teléfonos y correos ahí sin tocar componentes.
- Imágenes: cambia los JPG en `public/placeholder/` por fotos reales manteniendo los nombres de archivo (o actualiza las rutas en `content/site.json`). Dimensiones sugeridas 1400x1500 para cards/caratulas.
- Proyectos nuevos: añade objetos al array `projects` en `content/site.json` (incluye `slug`, `title`, `cover`, `images`, `category`, `tags`, `summary`, `challenge`, `solution`, `materials`, `timeline`).
- Servicios: ajusta el array `services` (slug, imágenes, beneficios, ideal para…); se usa en Home y en `/servicios`.

## Formularios y datos
- Endpoint: `/api/contact` valida con Zod y guarda envíos en `data/contact-submissions.json`. Sustituye la lógica de guardado por tu proveedor de email (Resend/Sendgrid) dentro del try/catch.
- Cliente: `src/components/forms/contact-form.tsx` usa `react-hook-form` + Zod. Textos de consentimiento en `content/site.json`.
- Analítica: placeholder en `src/lib/analytics.ts` (registra en consola). Sustituye por tu SDK preferido.

## Script opcional: extracción de paleta
- Comando: `npm run extract-palette` (por defecto lee `public/placeholder/*.jpg`).
- Salida: `palette-output.json` con colores sugeridos. Ajusta la ruta en el script o pasa tus imágenes: `npm run extract-palette -- ./mis-fotos/*.jpg`.

## Estructura rápida
- Páginas: `src/app/page.tsx` (Home), `/servicios`, `/proyectos`, `/proyectos/[slug]`, `/sobre`, `/contacto`.
- Componentes clave: `src/components/sections/*`, UI en `src/components/ui/*`, layouts en `src/components/layout/*`.
- Estilos: Tailwind + variables en `globals.css`.

## Deploy (Vercel)
1) Define `NODE_VERSION` ≥ 18.17 (ideal 20).  
2) Variables opcionales: `NEXT_PUBLIC_SITE_URL` si quieres ajustar `metadataBase`.  
3) Ejecuta `npm run build` en CI.  
4) Revisa que `public/` tenga favicon y logo definitivo.  

## Notas
- Stack mobile-first, animaciones suaves con Framer Motion.
- Diseño data-driven: todo el contenido editable desde `content/site.json`.
- Placeholders locales listos para reemplazar por fotos reales.
