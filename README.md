# 🚀 Portfolio - Alexiz Yucra Amado

Portafolio web personal de Alexiz Yucra Amado, desarrollador Full-Stack. Construido con React, Vite y Tailwind CSS para presentar proyectos profesionales y perfil técnico con diseño moderno y experiencia de usuario optimizada.

## ✨ Características

- 🎨 **Diseño Minimalista**: Interfaz limpia y moderna con paleta de colores naranja sobre fondo negro
- 📱 **Totalmente Responsive**: Adaptado perfectamente para móviles, tablets y desktop
- ⚡ **Rendimiento Optimizado**: Construido con Vite para tiempos de carga rápidos
- 🎭 **Animaciones Suaves**: Transiciones elegantes y micro-interacciones sutiles
- 🌍 **Multiidioma**: Contenido disponible en español
- ♿ **Accesible**: Semántica HTML5 y buenas prácticas de accesibilidad
- 🔍 **SEO Optimizado**: Meta etiquetas optimizadas para motores de búsqueda

## 🛠️ Stack Tecnológico

### Frontend
- **[React 19.2.1](https://reactjs.org/)** - Biblioteca JavaScript para construir interfaces de usuario
- **[Vite 7.2.6](https://vitejs.dev/)** - Herramienta de construcción ultra-rápida
- **[Tailwind CSS 4.1.17](https://tailwindcss.com/)** - Framework CSS para diseño utility-first
- **[@iconify/react 6.0.2](https://iconify.design/)** - Biblioteca de iconos vectoriales
- **[@fontsource/poppins 5.2.7](https://fonts.google.com/specimen/Poppins)** - Tipografía Poppins

### Backend & Services
- **[Formspree React 3.0.0](https://formspree.io/)** - Formularios de contacto
- **[Supabase](https://supabase.com/)** - Base de datos y backend (usado en proyectos)

### Desarrollo
- **[JavaScript ES6+](https://developer.mozilla.org/es/docs/Web/JavaScript)** - Lenguaje de programación
- **[CSS3](https://developer.mozilla.org/es/docs/Web/CSS)** - Estilos y animaciones personalizadas
- **[HTML5](https://developer.mozilla.org/es/docs/Web/HTML)** - Estructura semántica

### Herramientas
- **[ESLint 9.39.1](https://eslint.org/)** - Linting para código limpio
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes
- **[Git](https://git-scm.com/)** - Control de versiones

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                 # Archivos estáticos
│   └── logo.svg           # Logo personal del portafolio
├── src/
│   ├── components/        # Componentes React
│   │   ├── About.jsx      # Sección sobre mí con stack técnico
│   │   ├── Contact.jsx    # Formulario de contacto (Formspree)
│   │   ├── Header.jsx     # Navegación responsive
│   │   ├── Hero.jsx       # Sección principal con perfil
│   │   └── Projects.jsx   # Showcase de proyectos reales
│   ├── assets/            # Imágenes de proyectos
│   │   ├── ecomws.png     # Proyecto EcomWS
│   │   ├── fotoperfil.jpg # Foto de perfil
│   │   ├── personpage.png # Proyecto personal
│   │   └── rampal.png     # Proyecto Rampal Contadores
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada React
│   └── index.css          # Estilos globales y animaciones
├── index.html             # Plantilla HTML con meta tags SEO
├── package.json           # Dependencias (v 0.0.0)
├── pnpm-lock.yaml         # Lock file de dependencias
├── vite.config.js         # Configuración de Vite con Tailwind
├── eslint.config.js       # Configuración ESLint
└── README.md              # Documentación del proyecto
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Principal**: Naranja vibrante (`#f97316`)
- **Fondo**: Negro neutro (`#000000`)
- **Texto**: Blanco y grises neutros
- **Acentos**: Variaciones de naranja (`#fb923c`, `#ea580c`)

### Tipografía
- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Google Fonts
- Peso: 100-900 para máxima flexibilidad tipográfica

### Animaciones
- Entradas suaves con `ease-out`
- Transiciones de hover elegantes
- Efectos de parallax sutiles
- Loading states optimizados

## 🚀 Comenzando

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/PentaAQ/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abrir en navegador**
   ```
   http://localhost:5173
   ```

## 📝 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Linting del código
npm run lint
```

## 🌐 Secciones del Portafolio

### 🏠 Hero
- Presentación personal: "Hola, soy Alexiz Y. Amado"
- Badge "Desarrollador Full-Stack" con animación
- Stack principal: React, Tailwind, Supabase, MySQL
- Botones de navegación a Proyectos y Contacto
- Redes sociales: GitHub (PentaAQ) y LinkedIn

### 👤 About Me
- Tres tarjetas: "¿Quién soy?", "Mi Objetivo", "Mi Perfil"
- Stack técnico completo: HTML, CSS, JavaScript, Tailwind, React, MySQL, Python, Django, Supabase, Git
- Descripción de experiencia full-stack
- Iconos personalizados y animaciones hover

### 💼 Projects
- **Rampal Contadores**: Sitio corporativo (Tailwind - JavaScript - React - Astro)
- **UTP+Foro**: Sistema académico (Python - Django - SQL)
- **Sitio Web Personal**: Portfolio actual (React - Tailwind)
- **EcomWS**: Plataforma e-commerce (React - Tailwind - Supabase)
- Enlaces directos a proyectos en producción
- Imágenes previas y descripciones detalladas

### 📧 Contact
- Formulario funcional con Formspree (ID: mzzjjgke)
- Validación en tiempo real con ValidationError
- Estados: loading, éxito y error
- Campos: Nombre, Email, Mensaje
- Diseño centrado con tema naranja/negro

## 🔧 Configuración

### Personalización
- **Colores**: Variables CSS en `src/index.css` (tema naranja #f97316)
- **Contenido**: Editar textos en componentes individuales
- **Proyectos**: Actualizar array `proyects` en `src/components/Projects.jsx`
- **Redes**: Modificar array `redes` en `src/components/Hero.jsx`
- **Contacto**: Configurar Formspree en `src/components/Contact.jsx`

## 📱 Responsive Design

- **Mobile** (< 768px): Layout de una columna con menú hamburguesa
- **Tablet** (768px - 1024px): Grid de dos columnas
- **Desktop** (> 1024px): Layout completo con todas las características

## 🚀 Optimizaciones

### Performance
- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Code Splitting**: División automática de código
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: CSS y JavaScript comprimidos

### SEO
- **Meta Tags**: Descripción y keywords optimizadas
- **Open Graph**: Compartir en redes sociales
- **Semantic HTML**: Estructura accesible
- **Alt Text**: Imágenes descriptivas

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **GitHub**: [github.com/PentaAQ](https://github.com/PentaAQ)
- **LinkedIn**: [linkedin.com/in/eddy-alexiz-yucra-amado-](https://www.linkedin.com/in/eddy-alexiz-yucra-amado-/)
- **Formulario**: Disponible en el portafolio (integrado con Formspree)
- **Proyectos en vivo**: 
  - [Rampal Contadores](https://www.rampalcontadores.com/)
  - [UTP+Foro](https://utpforopadre.onrender.com/)
  - [EcomWS](https://ecomws.vercel.app/)

## 🙏 Agradecimientos

- **React Team** - Por el increíble framework v19.2.1
- **Tailwind CSS** - Por las utilidades CSS v4.1.17
- **Vite** - Por la experiencia de desarrollo ultra-rápida v7.2.6
- **Iconify** - Por la increíble biblioteca de iconos
- **Formspree** - Por el servicio de formularios de contacto
- **FontSource** - Por la tipografía Poppins

---

⭐ **Si te gusta este proyecto, no olvides darle una estrella!**

🔖 **Hecho con ❤️ y ☕ por [Alexiz Y. Amado](https://github.com/PentaAQ)**