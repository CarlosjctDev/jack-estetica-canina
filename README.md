# Jack — Estética canina a domicilio

Sitio web estático para **Jack Estética Canina**, orientado a captar citas por WhatsApp desde Barranquilla, Soledad y pueblos cercanos. Incluye identidad navideña, sección de Instagram, SEO local, política de privacidad y términos.

## Stack

- Astro 7 (output `static`)
- Tailwind CSS 4 con `@tailwindcss/vite`
- TypeScript 6
- Bun como gestor de dependencias
- Fuentes variables: Fraunces, Cormorant Garamond y Plus Jakarta Sans

## Requisitos

- Bun instalado.
- No necesitas Node global: los scripts usan el binario local de `node@22.23.4` declarado en `package.json`.

## Instalación y uso

```bash
bun install
bun run dev
```

Abre `http://localhost:4321`.

### Scripts

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------ |
| `bun run dev`  | Servidor de desarrollo en `localhost:4321`.      |
| `bun run build`| Genera el sitio estático en `dist/`.             |
| `bun run preview` | Sirve localmente el resultado de `dist/`.     |
| `bun run check` | Verifica tipos y archivos Astro.                 |

Antes de entregar, ejecuta:

```bash
bun run check
bun run build
```

## Configuración central

Toda la información editable vive en `src/data/site.ts`:

| Variable             | Uso                                                                 |
| -------------------- | ------------------------------------------------------------------- |
| `brandName`          | Nombre de marca mostrado en títulos, footer y mensajes.             |
| `siteUrl`            | Dominio público. Se usa en canonical, OG/Twitter, sitemap, robots y JSON-LD. |
| `whatsappNumber`     | Teléfono único de contacto. De aquí se derivan `whatsappDigits` y `whatsappUrl`. |
| `whatsappMessage`    | Texto preconstruido para la cita por WhatsApp.                      |
| `instagramUrl`       | Perfil de Instagram. De aquí se deriva `instagramLabel`.            |
| `instagramBioUrl`    | URL con UTM para pegar en la bio de Instagram.                      |
| `groupDiscountNote`  | Copy de tarifa preferencial para 2+ perros en la misma zona.        |
| `nearbyTownsNote`    | Copy para consultas desde pueblos cercanos.                         |

Estado actual:

- `siteUrl`: `https://jack.bcarestyle.com`
- `whatsappNumber`: `+57 302 840 0101`
- `instagramUrl`: pendiente de reemplazar `https://www.instagram.com/tu_usuario/` por el perfil real.

Cuando cambies el dominio, el teléfono o el perfil de Instagram, edita solo `src/data/site.ts`. No hace falta tocar los componentes.

## Estructura

```text
src/
  components/
    Header.astro          Menú, logo y CTA de WhatsApp.
    Footer.astro          Contacto, enlaces legales y árbol navideño.
    ChristmasTree.astro   Árbol SVG animado.
  data/
    site.ts               Fuente única de datos del sitio.
  layouts/
    BaseLayout.astro      HTML base, meta SEO, OG/Twitter y JSON-LD.
  pages/
    index.astro           Landing principal.
    privacidad.astro      Política de privacidad.
    terminos.astro        Términos y condiciones.
    robots.txt.ts         Endpoint estático de robots.
    sitemap.xml.ts        Endpoint estático de sitemap.
  styles/
    global.css            Tokens, tipografías, copos de nieve y animaciones.
public/
  logo.webp / logo.avif   Logo con borde circular y alpha.
  favicon.ico / favicon.png / apple-touch-icon.png
  og-image.png            Imagen 1200x630 para redes sociales.
```

## SEO y redes

- `BaseLayout.astro` genera canonical, `og:*`, `twitter:*` y JSON-LD opcional.
- `index.astro` incluye un esquema `PetGroomer` con teléfono, zona, dirección, imagen y `sameAs` de Instagram.
- `/sitemap.xml` y `/robots.txt` se generan automáticamente desde `siteUrl`.
- `public/og-image.png` debe regenerarse si cambia la marca o el dominio visible en la imagen.
- Los enlaces internos del header usan rutas absolutas (`/#servicios`, `/#zonas`, etc.) para funcionar también desde Privacidad y Términos.

## Despliegue

El resultado es 100% estático y queda en `dist/`.

- Build command: `bun run build`
- Publish directory: `dist`
- Compatible con Vercel, Netlify, Cloudflare Pages o cualquier hosting estático.

No hay backend ni formularios: todas las acciones de contacto abren WhatsApp con el mensaje definido en `src/data/site.ts`.

## Notas de diseño

- Paleta verde suave (`paper`, `cream`, `mint`), bosque para secciones oscuras y dorado como acento.
- Titulares en Fraunces; logotipo tipográfico `jack.` en Cormorant.
- Copos de nieve grises en capa única, sin difuminados de color.
- Árbol navideño en el footer con animación suave y soporte para `prefers-reduced-motion`.
- Los textos legales son borradores operativos; revísalos con asesoría legal antes de producción si aplica.
