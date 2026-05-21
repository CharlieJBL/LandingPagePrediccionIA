# 🛒 Tienda Abarrotes - Landing Page con Predicción de Ventas IA

![Versión](https://img.shields.io/badge/version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Estado](https://img.shields.io/badge/status-en%20desarrollo-brightgreen)

---

## 📋 Descripción del Proyecto

**Tienda Abarrotes** es una plataforma de comercio electrónico moderna que integra **Inteligencia Artificial** para la predicción de ventas. El sistema permite a los administradores visualizar tendencias de consumo y anticipar la demanda de productos utilizando el modelo **Prophet de Meta**.

Este repositorio contiene la **Landing Page** del proyecto, desarrollada con tecnologías web estándar (HTML5, CSS3 y JavaScript puro), sin frameworks externos, totalmente **responsive** y con **modo claro/oscuro**.

---

## 🚀 Características Principales

| Característica | Descripción |
|----------------|-------------|
| 🎨 **Diseño Moderno** | Interfaz limpia con efecto Glassmorphism en navbar |
| 📱 **Responsive** | Adaptación perfecta a móvil, tablet y desktop |
| 🌙 **Modo Oscuro/Claro** | Toggle manual con persistencia en localStorage |
| 🛒 **Catálogo de Productos** | Grid dinámico con tarjetas interactivas |
| 🤖 **Vista Previa IA** | Sección visual del sistema de predicción de ventas |
| 📧 **Newsletter** | Formulario de suscripción con validación |
| ⭐ **Testimonios** | Sección de reseñas de clientes |
| 🎠 **Carrusel Hero** | Slider automático de promociones |

---

## 🛠️ Tecnologías Utilizadas

┌─────────────────────────────────────────────────────────────┐
│ Frontend │
│ ├── HTML5 (Estructura semántica) │
│ ├── CSS3 (Estilos puros, sin frameworks) │
│ │ ├── Variables CSS (modo claro/oscuro) │
│ │ ├── Grid y Flexbox │
│ │ └── Animaciones keyframes │
│ └── JavaScript ES6 (Interactividad y DOM) │
│ ├── Carrusel automático │
│ ├── Dark mode toggle │
│ ├── Scroll animations │
│ └── Validación de formularios │
├─────────────────────────────────────────────────────────────┤
│ Recursos externos │
│ └── Unsplash API (imágenes de productos de alta calidad) │
└─────────────────────────────────────────────────────────────┘

text

---

## 📁 Estructura del Proyecto
proyecto-landing/
│
├── index.html # Página principal
│
├── css/
│ └── styles.css # Estilos completos (responsive + dark mode)
│
├── js/
│ └── main.js # Funcionalidades interactivas
│
├── assets/
│ └── img/ # Carpeta para imágenes locales (opcional)
│
└── README.md # Documentación del proyecto

text

---

## 🎨 Paleta de Colores

| Color | Uso | Código HEX |
|-------|-----|------------|
| 🌿 **Verde Lima** | Botones, acentos, hover | `#84cc16` |
| 💙 **Azul** | Logo gradient, footer | `#3b82f6` / `#0f172a` |
| 🖤 **Oscuro** | Textos principales, modo oscuro | `#0f172a` |
| 🤍 **Blanco** | Fondos, tarjetas | `#ffffff` |
| 🧡 **Naranja** | Etiquetas de oferta | `#f59e0b` |

---

## 🖥️ Vista Previa del Diseño

### Modo Claro
┌─────────────────────────────────────────────────────────────┐
│ [LOGO] 🔍 Buscar... Inicio Productos IA Dashboard 🌙│
├─────────────────────────────────────────────────────────────┤
│ │
│ 🖼️ CARRUSEL DE OFERTAS │
│ │
├─────────────────────────────────────────────────────────────┤
│ 🔥 Ofertas Especiales │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │Prod 1│ │Prod 2│ │Prod 3│ │Prod 4│ │
│ └──────┘ └──────┘ └──────┘ └──────┘ │
│ │
├─────────────────────────────────────────────────────────────┤
│ 🤖 Predicción de Ventas con IA │
│ ┌─────────────────────┐ ┌─────────────────────────────┐ │
│ │ Descripción del │ │ 📊 GRÁFICO DE PREDICCIÓN │ │
│ │ sistema predictivo │ │ ███ ███ ███ ███ │ │
│ └─────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

text

### Modo Oscuro
- Fondos oscuros (#0f172a, #1e293b)
- Textos claros (#f1f5f9)
- Acentos verdes (#84cc16)
- Persistencia de preferencia del usuario

---

## 📦 Instalación y Uso

### Requisitos previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar imágenes de Unsplash)

### Pasos para ejecutar

```bash
# 1. Clonar el repositorio (o descargar los archivos)
git clone https://github.com/tu-usuario/tienda-abarrotes-landing.git

# 2. Navegar al directorio del proyecto
cd tienda-abarrotes-landing

# 3. Abrir el archivo index.html en tu navegador
# Opción A: Doble clic en index.html
# Opción B: Usar un servidor local (recomendado)
npx serve .
# o
python -m http.server 8000