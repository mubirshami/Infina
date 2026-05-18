# Infina

Infina is a frontend starter built with React, Vite and Tailwind CSS. It includes a small component/layout system and a few example pages to jumpstart development.

## Features

- Vite-powered dev server and build
- React (JSX) components under [src/](src/)
- Tailwind CSS for utility-first styling
- Example pages in [src/pages/](src/pages/)

## Quick Start

Prerequisites: Node.js (16+), npm or yarn.

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Project Structure

- [src/](src/) — application source (components, pages, assets)
- [public/](public/) — static files copied to the build
- [build/](build/) — production output (generated)

Key entry files:

- [src/index.jsx](src/index.jsx) — app bootstrap
- [src/App.jsx](src/App.jsx) — top-level app component

## Deployment

The production build is generated to the `build/` directory. Deploy the contents of `build/` to any static hosting provider (Netlify, Vercel, Surge, S3, etc.). You can also run `npm run preview` to serve the production build locally.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with changes.