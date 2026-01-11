# 🚀 Alexiz Y. Amado - Portafolio Web

Un portafolio web moderno y minimalista desarrollado con React, Vite y Tailwind CSS. Diseñado para showcase de proyectos y perfil profesional con una experiencia de usuario excepcional.

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
- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para construir interfaces de usuario
- **[Vite](https://vitejs.dev/)** - Herramienta de construcción ultra-rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS para diseño utility-first
- **[Iconify](https://iconify.design/)** - Biblioteca de iconos vectoriales

### Desarrollo
- **[JavaScript ES6+](https://developer.mozilla.org/es/docs/Web/JavaScript)** - Lenguaje de programación
- **[CSS3](https://developer.mozilla.org/es/docs/Web/CSS)** - Estilos y animaciones
- **[HTML5](https://developer.mozilla.org/es/docs/Web/HTML)** - Estructura semántica

### Herramientas
- **[ESLint](https://eslint.org/)** - Linting para código limpio
- **[Prettier](https://prettier.io/)** - Formateo de código consistente
- **[Git](https://git-scm.com/)** - Control de versiones

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                 # Archivos estáticos
│   ├── logo.svg           # Logo del portafolio
│   └── assets/            # Imágenes y recursos
├── src/
│   ├── components/        # Componentes React
│   │   ├── About.jsx      # Sección sobre mí
│   │   ├── Contact.jsx    # Formulario de contacto
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Hero.jsx       # Sección principal
│   │   └── Projects.jsx   # Showcase de proyectos
│   ├── assets/            # Imágenes locales
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html             # Plantilla HTML
├── package.json           # Dependencias del proyecto
├── vite.config.js         # Configuración de Vite
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
- npm o pnpm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/PentaAQ/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
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
- Presentación personal con foto de perfil
- Badge de "Desarrollador Full-Stack"
- Botones de navegación a Proyectos y Contacto
- Enlaces a redes sociales

### 👤 About Me
- Tarjetas informativas sobre perfil, objetivos y experiencia
- Grid de tecnologías y stack técnico
- Iconos personalizados para cada sección

### 💼 Projects
- Grid de proyectos con imágenes previas
- Información de tecnologías utilizadas
- Enlaces directos a proyectos en vivo
- Efectos hover sutiles

### 📧 Contact
- Formulario de contacto funcional con Formspree
- Validación de campos en tiempo real
- Estados de loading y éxito
- Diseño centrado y accesible

## 🔧 Configuración

### Variables de Entorno
```env
# Formspree Form ID
VITE_FORMSPREE_ID=mzzjjgke

# Google Analytics (opcional)
VITE_GA_ID=G-BGW4NPMT49
```

### Personalización
- **Colores**: Modificar variables CSS en `src/index.css`
- **Contenido**: Editar textos en componentes individuales
- **Proyectos**: Actualizar array `proyects` en `Projects.jsx`
- **Redes**: Modificar array `redes` en `Hero.jsx`

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

- **Email**: alexiz.yucra@example.com
- **LinkedIn**: [linkedin.com/in/eddy-alexiz-yucra-amado](https://www.linkedin.com/in/eddy-alexiz-yucra-amado-/)
- **GitHub**: [github.com/PentaAQ](https://github.com/PentaAQ)
- **Portfolio**: [alexizyucra.dev](https://alexizyucra.dev)

## 🙏 Agradecimientos

- **React Team** - Por el increíble framework
- **Tailwind CSS** - Por las utilidades CSS increíbles
- **Vite** - Por la experiencia de desarrollo ultra-rápida
- **Iconify** - Por la increíble biblioteca de iconos

---

⭐ **Si te gusta este proyecto, no olvides darle una estrella!**

🔖 **Hecho con ❤️ y ☕ por [Alexiz Y. Amado](https://github.com/PentaAQ)**