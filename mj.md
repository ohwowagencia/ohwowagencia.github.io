# SISTEMA CV UNIFICADO - CONFIGURACIÓN ROOT
# Alejandro Battaglio & Jeferson Zambrano

## 📋 ESTRUCTURA DE ARCHIVOS

```
cv-system/
├── unified-styles.css      # Estilos unificados con sistema de temas
├── cv-config.js           # Configuración y JavaScript común
├── alejandro/
│   ├── index.html         # HTML específico de Alejandro
│   ├── favicon.svg        # Favicon con iniciales "AB"
│   └── logo.svg           # Logo completo
└── jeferson/
    ├── index.html         # HTML específico de Jeferson  
    ├── favicon.svg        # Favicon con inicial "J"
    └── logo.svg           # Logo completo
```

## 🎨 SISTEMA DE TEMAS

### Tema Alejandro (Azul - Por defecto)
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #3b82f6;
    --accent-color: #f59e0b;
}
```

### Tema Jeferson (Naranja)
```css
[data-theme="jeferson"] {
    --primary-color: #f59e0b;
    --primary-dark: #d97706;
    --primary-light: #fbbf24;
    --accent-color: #2563eb;
}
```

## 🚀 IMPLEMENTACIÓN

### Para Alejandro:
1. Usar HTML sin atributo `data-theme` (tema por defecto)
2. Incluir: `<link rel="stylesheet" href="../unified-styles.css">`
3. Incluir: `<script src="../cv-config.js"></script>`

### Para Jeferson:
1. Añadir `data-theme="jeferson"` al elemento `<html>`
2. Incluir: `<link rel="stylesheet" href="../unified-styles.css">`
3. Incluir: `<script src="../cv-config.js"></script>`

## 📝 CONFIGURACIÓN POR PERFIL

### Variables de configuración en cv-config.js:
```javascript
const CV_CONFIG = {
    alejandro: {
        name: "Alejandro Battaglio",
        role: "Chief Technology Officer",
        email: "alebattaquin@gmail.com",
        phone: "+34 665 543 280",
        linkedin: "desarollador-alejandro-battaglio",
        github: "alebattaquin",
        theme: "default"
    },
    jeferson: {
        name: "Jeferson Zambrano", 
        role: "IT & Web Ops Lead",
        email: "jeffproduccion@gmail.com",
        phone: "+34 688 351 935",
        linkedin: "jeffzambrano-diseno-web",
        github: "jeffzambrano",
        theme: "jeferson"
    }
};
```

## 🛠️ CARACTERÍSTICAS UNIFICADAS

### Componentes comunes:
- ✅ Sistema de navegación responsive
- ✅ Hero section adaptable
- ✅ Timeline de experiencia
- ✅ Grid de competencias
- ✅ Formulario de contacto
- ✅ Footer con redes sociales
- ✅ Animaciones AOS
- ✅ Modo móvil (hamburger menu)

### Componentes específicos:
- **Alejandro**: Estadísticas simples, enfoque CTO
- **Jeferson**: Value proposition box, stats en grid 2x2, nota para reclutadores

## 📱 RESPONSIVIDAD

### Breakpoints unificados:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px  
- **Mobile**: 320px - 767px

### Adaptaciones por dispositivo:
- Grid layouts adaptativos
- Navegación hamburger móvil
- Tipografía escalable
- Espaciado proporcional

## ♿ ACCESIBILIDAD

### Características implementadas:
- Focus indicators consistentes
- Contraste WCAG AA
- Navegación por teclado
- Screen reader support
- Reduced motion support
- Print styles optimizados

## 🎯 PERSONALIZACIÓN

### Para crear un nuevo perfil:
1. Definir tema en `:root` o `[data-theme="nuevo"]`
2. Añadir configuración en `CV_CONFIG`
3. Crear carpeta con HTML específico
4. Ajustar componentes únicos si necesario

### Colores disponibles:
- **Azul**: #2563eb (Alejandro)
- **Naranja**: #f59e0b (Jeferson)
- **Verde**: #10b981 (futuro)
- **Violeta**: #8b5cf6 (futuro)
- **Rosa**: #ec4899 (futuro)

## 📊 MÉTRICAS Y RENDIMIENTO

### Optimizaciones implementadas:
- CSS custom properties para temas
- Componentes reutilizables
- Animaciones con `will-change`
- Lazy loading listo
- Minificación preparada

### Métricas objetivo:
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s  
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms

## 🔧 MANTENIMIENTO

### Actualizaciones centralizadas:
- Estilos base en `unified-styles.css`
- JavaScript común en `cv-config.js`
- Solo HTML específico por perfil
- Temas fácilmente extensibles

### Control de versiones:
```
v1.0.0 - Sistema base Alejandro & Jeferson
v1.1.0 - Nuevos temas y componentes
v1.2.0 - Optimizaciones de rendimiento
```

---

**Creado por:** Claude Assistant  
**Fecha:** Septiembre 2025  
**Versión:** 1.0.0