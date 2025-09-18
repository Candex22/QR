# 🧡 Generador de Código QR

Un generador de códigos QR moderno y fácil de usar, especialmente diseñado para compartir proyectos en exposiciones técnicas. Permite generar códigos QR personalizables con diferentes colores y tamaños a partir de cualquier URL.

## ✨ Características

- **Interfaz moderna**: Diseño responsive con gradientes naranjas y efectos glassmorphism
- **Personalización completa**: 
  - 7 colores diferentes para el QR
  - 5 tamaños disponibles (128px a 400px)
- **Validación inteligente**: Detecta y corrige automáticamente URLs sin protocolo
- **Descarga directa**: Exporta el QR como imagen PNG con timestamp
- **Experiencia fluida**: Animaciones, loading states y mensajes de confirmación
- **Accesibilidad**: Navegación por teclado (Enter para generar)

## 📁 Estructura del Proyecto

```
generador-qr/
├── index.html      # Estructura principal
├── style.css       # Estilos y animaciones
├── script.js       # Lógica de la aplicación
├── LICENSE         # Licencia
└── README.md       # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Grid y Flexbox para layout
  - Gradientes y efectos visuales
  - Animaciones y transiciones
  - Diseño responsive
- **JavaScript (ES6+)**:
  - Manipulación del DOM
  - Validación de URLs
  - Canvas API para generación de QR
- **QRCode.js**: Librería externa para generar códigos QR

## 📦 Instalación y Uso

### Opción 1: Uso Directo
1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

## 🎨 Personalización

### Colores Disponibles
- 🖤 Negro (clásico)
- 🧡 Naranja (tema por defecto)
- 🟠 Naranja Intenso
- 💚 Verde
- 💙 Azul
- ❤️ Rojo
- 💜 Púrpura

### Tamaños Disponibles
- 128px (Pequeño)
- 192px (Mediano)
- 256px (Grande) - *por defecto*
- 320px (Extra Grande)
- 400px (Máximo)

## 📱 Responsividad

La aplicación está optimizada para:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🔧 Funcionalidades Técnicas

### Validación de URLs
- Detecta URLs con y sin protocolo
- Agrega automáticamente `https://` si es necesario
- Valida formato usando la API URL nativa

### Generación de QR
- **Nivel de corrección**: Alto (H)
- **Formato de salida**: Canvas HTML5
- **Calidad**: Vectorial, escalable sin pérdida

### Descarga
- **Formato**: PNG
- **Nomenclatura**: `codigo_qr_pwd_YYYY-MM-DD.png`
- **Método**: Descarga automática via blob URL

## 🎯 Casos de Uso

### Para Estudiantes
- Compartir repositorios de GitHub
- Enlaces a proyectos deployados (Netlify, Vercel, GitHub Pages)
- Documentación de proyectos
- Presentaciones online

### Para Exposiciones
- Códigos QR en posters o stands
- Enlaces rápidos a demos
- Contacto y redes sociales
- Portafolios digitales

## ⚡ Optimizaciones

- **Lazy loading** de la librería QR
- **Debounce** en validación de input
- **Canvas optimizado** para mejor rendimiento
- **Compresión automática** de imágenes generadas

## 🐛 Solución de Problemas

### El QR no se genera
- Verifica que la URL sea válida
- Revisa la conexión a internet (CDN de QRCode.js)
- Intenta con una URL más simple

### Problemas de descarga
- Algunos navegadores requieren interacción del usuario
- Verifica permisos de descarga en el navegador

### Errores de visualización
- Asegúrate de que JavaScript esté habilitado
- Limpia la caché del navegador

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente en tus proyectos personales y comerciales.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Contacto

¿Preguntas? ¿Sugerencias? ¡Contáctame!

- GitHub: Candex22 (https://github.com/Candex22)
- Email: candemolinari20@gmail.com

---

⭐ **¡No olvides darle una estrella al repo si te fue útil!**
