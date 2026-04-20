# CV System - Sistema Unificado de CVs Profesionales

## 🚀 Descripción del Proyecto

Sistema unificado de CVs que combina múltiples metodologías de desarrollo web moderno para crear perfiles profesionales escalables, accesibles y altamente personalizables.

### 👥 Perfiles Incluidos

1. **Alejandro Battaglio** - Chief Technology Officer (Tema Azul)
2. **Jeferson Zambrano** - IT & Web Ops Lead (Tema Verde)
3. **Claudia Mallea** - Directora Creativa (Tema Coral/Terracota)

## 📁 Estructura de Archivos

```
cv-system/
├── index.html                    # Página principal del sistema
├── assets/
│   ├── css/
│   │   ├── cv-root.css          # Variables CSS y temas
│   │   └── cv-styles.css        # Estilos principales
│   └── js/
│       └── cv-config.js         # Configuración JavaScript
├── alejandro/
│   ├── index.html               # CV de Alejandro
│   ├── favicon.svg              # Favicon con iniciales "AB"
│   └── logo.svg                 # Logo completo
├── jeferson/
│   ├── index.html               # CV de Jeferson
│   ├── favicon.svg              # Favicon con inicial "J"
│   └── logo.svg                 # Logo completo
└── claudia/
    ├── index.html               # CV de Claudia
    ├── favicon.svg              # Favicon con inicial "C"
    └── logo.svg                 # Logo completo
```

## 🎨 Sistema de Temas

### Tema Alejandro (Azul - Por defecto)
```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-primary-light: #3b82f6;
    --color-accent: #f59e0b;
}
```

### Tema Jeferson (Verde)
```css
[data-theme="jeferson"] {
    --color-primary: #10b981;
    --color-primary-dark: #059669;
    --color-primary-light: #34d399;
    --color-accent: #2979FF;
}
```

### Tema Claudia (Coral/Terracota)
```css
[data-theme="claudia"] {
    --color-primary: #F97316;
    --color-primary-dark: #EA580C;
    --color-primary-light: #FB923C;
    --color-accent: #10B981;
}
```

## 🏗️ Metodologías Implementadas

### **SMACSS (Scalable and Modular Architecture for CSS)**
- **Base**: Reset, elementos HTML base
- **Layout**: Estructuras principales (`.l-container`, `.l-grid`)
- **Modules**: Componentes (`.navbar`, `.hero`, `.timeline`)
- **State**: Estados (`.is-active`, `.navbar--scrolled`)
- **Theme**: Variaciones de tema por perfil

### **BEM (Block Element Modifier)**
```css
.navbar                    /* Block */
.navbar__container         /* Element */
.navbar--scrolled         /* Modifier */
.navbar__link--active      /* Element + Modifier */
```

### **OOCSS (Object-Oriented CSS)**
- **Separación estructura/apariencia**:
  ```css
  .btn                  /* Estructura */
  .btn--primary         /* Skin/apariencia */
  .btn--secondary       /* Skin/apariencia */
  ```

### **Fluid Design con clamp()**
```css
--font-size-display: clamp(2.5rem, 5vw, 4rem);
--spacing-xl: clamp(2rem, 3vw, 3rem);
```

## 🚀 Implementación

### Para cada perfil:

**Alejandro:**
```html
<html lang="es"> <!-- Sin data-theme = tema por defecto -->
```

**Jeferson:**
```html
<html lang="es" data-theme="jeferson">
```

**Claudia:**
```html
<html lang="es" data-theme="claudia">
```

### Archivos requeridos:
```html
<link rel="stylesheet" href="../assets/css/cv-root.css">
<link rel="stylesheet" href="../assets/css/cv-styles.css">
<script src="../assets/js/cv-config.js"></script>
```

## 📝 Configuración por Perfil

```javascript
const CV_CONFIG = {
    alejandro: {
        name: "Alejandro Battaglio",
        role: "Chief Technology Officer",
        theme: "default"
    },
    jeferson: {
        name: "Jeferson Zambrano", 
        role: "IT & Web Ops Lead",
        theme: "jeferson"
    },
    claudia: {
        name: "Claudia Mallea",
        role: "Directora Creativa", 
        theme: "claudia"
    }
};
```

## 🛠️ Características Técnicas

### Componentes Unificados:
- ✅ Sistema de navegación responsive
- ✅ Hero section adaptable por tema
- ✅ Timeline de experiencia profesional
- ✅ Grid de competencias clave
- ✅ Formulario de contacto funcional
- ✅ Footer con redes sociales
- ✅ Animaciones AOS
- ✅ Navegación hamburger móvil

### Componentes Específicos:
- **Alejandro**: Enfoque ejecutivo CTO
- **Jeferson**: Value proposition, stats avanzadas
- **Claudia**: Enfoque creativo y portfolio

## 📱 Diseño Responsive

### Breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Adaptaciones:
- Grid layouts adaptativos
- Navegación hamburger móvil
- Tipografía fluida con `clamp()`
- Espaciado proporcional

## ♿ Accesibilidad

- Indicadores de foco consistentes
- Contraste WCAG AA
- Navegación por teclado
- Soporte para screen readers
- Soporte para motion reducido
- Estilos optimizados para impresión

## 🎯 Extensibilidad

### Para agregar un nuevo perfil:

1. **Definir tema CSS**:
```css
[data-theme="nuevo-perfil"] {
    --color-primary: #color-principal;
    --color-primary-dark: #color-oscuro;
    --color-primary-light: #color-claro;
}
```

2. **Agregar configuración**:
```javascript
nuevo_perfil: {
    name: "Nombre",
    role: "Rol",
    theme: "nuevo-perfil"
}
```

3. **Crear estructura de archivos**:
```
nuevo-perfil/
├── index.html
├── favicon.svg
└── logo.svg
```

## 📊 Optimizaciones de Rendimiento

- CSS custom properties para cambios de tema rápidos
- Componentes reutilizables
- Animaciones optimizadas
- JavaScript modular
- Lazy loading preparado

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables, Grid, Flexbox, clamp()
- **JavaScript ES6+**: Clases, modules, async/await
- **Font Awesome**: Iconografía
- **AOS**: Animaciones on scroll
- **Inter Font**: Tipografía moderna

## 📈 Métricas de Calidad

### Objetivos de Rendimiento:
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s  
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

### Compatibilidad:
- Chrome, Firefox, Safari, Edge (últimas versiones)
- Soporte móvil completo
- Degradación elegante en navegadores antiguos

## 📋 Próximos Pasos

1. Configurar GitHub Pages
2. Implementar analytics
3. Agregar más temas de color
4. Optimizar imágenes SVG
5. Implementar service worker

## 👥 Equipo

- **Alejandro Battaglio** - CTO & IT Specialist
- **Jeferson Zambrano** - Frontend Lead & UX Designer  
- **Claudia Mallea** - Creative Director & Graphic Designer

---

**Versión:** 1.1.0  
**Última actualización:** Septiembre 2025  
**Licencia:** Propietaria  
**Arquitectura:** SMACSS + BEM + OOCSS + Fluid Design