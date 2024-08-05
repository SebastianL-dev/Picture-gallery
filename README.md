# Piucture Gallery

[**Piucture**](https://piucture.vercel.app) es una aplicación web diseñada para visualizar imágenes en línea. Puedes ver cualquier tipo de imagen, descargarla y disfrutarla desde tu galería. Además, ¡Puedes darle like a una imagen para guardarla en [**Piucture**](https://piucture.vercel.app) y nunca perderla!

---

> [!NOTE]
> **Piucture** usa diferentes tecnologias para funcionar.

### Librerias, frameworks y API's usados

- [React](https://es.react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Masonry](https://mui.com/material-ui/react-masonry/)
- [TailWindCSS](https://tailwindcss.com)
- [AOS](https://michalsnik.github.io/aos/)
- [Vite](https://vitejs.dev)
- [Pexels API](https://www.pexels.com/api/)

---

## 1. Instalación

### Clonación del repositorio

> [!IMPORTANT]
> Sigue los pasos escribiendo los siguentes codigos en tu terminal.

<div style="padding: 5px; border: 1px solid #ddd; border-radius: 4px; background-color: #f5f5f5; display: inline-block;">
  <strong style="color: #333;">Bash</strong>
</div>

```bash
git clone https://github.com/tu_usuario/piucture.git
```

### Instalación de dependencias

> [!TIP]
> Usa pnpm para mayor comodidad.

<div style="padding: 5px; border: 1px solid #ddd; border-radius: 4px; background-color: #f5f5f5; display: inline-block;">
  <strong style="color: #333;">Bash</strong>
</div>

```bash
cd piucture
pnpm install
```

## 2. Ejecución

<div style="padding: 5px; border: 1px solid #ddd; border-radius: 4px; background-color: #f5f5f5; display: inline-block;">
  <strong style="color: #333;">Bash</strong>
</div>

```bash
pnpm run dev
```

---

## 3. Estructura

La siguiente es la estructura que contiene los ficheros y directorios mas importantes de [**Piucture**](https://piucture.vercel.app).

```plaintext
Picture-gallery/
├── public/
│   ├── images
├── src/
│   ├── assets/
│   │   ├── images
│   ├── components/
│   │   ├── global/
│   │   │   ├── Download.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── Photo.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Body.tsx
│   │   │   ├── Buttons.tsx
│   │   │   └── Saved.tsx
│   │   ├── contexts/
│   │   │   ├── imagesCtx.tsx
│   │   │   └── singleImageCtx.tsx
│   │   ├── hooks/
│   │   │   └── SaveStorage.ts
│   │   ├── interfaces/
│   │   │   └── Images.ts
│   │   ├── services/
│   │   │   └── Pictures.ts
│   │   └── styles/
│   │       ├── index.css
│   │       ├── App.tsx
│   │       └── main.tsx
├── .env.local
├── index.html
└── README.md
```

---

### Descripción

Esta es la descripción de la función que tienen los ficheros guardados en cada directorio de [**Piucture**](https://piucture.vercel.app).

> [!NOTE]
> Descripcion de cada fichero y directorio de la estructura del proyecto.

1. **`public/`**: Contiene archivos públicos, como imágenes.
2. **`src/`**: Carpeta principal del código.
   - **`assets/`**: Carpeta para archivos de recursos, como imagenes, videos, audios etc.
   - **`components/`**: Contiene todos los componentes usados.
     - **`global/`**: Componentes generales en la aplicación.
     - **`contexts/`**: Contextos de react para manejar el estado.
     - **`hooks/`**: Hook personalizado para guardar las imagenes con like.
     - **`interfaces/`**: Definición de interfaz.
     - **`services/`**: Servicios para llamar a la API.
     - **`styles/`**: Archivos de estilos.
3. **Archivos de configuración y otros archivos**:
   - **`.env.local`**, **`index.html`**, **`README.md`**.

---

© 2024 | Creado por [**Sebastián Lozano**](https://github.com/SebastianL-dev)
