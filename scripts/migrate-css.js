// scripts/migrate-css.js
// Script para migrar de App.css a la estructura modular de CSS

const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '../src');
const stylesPath = path.resolve(srcPath, 'styles');

// Asegurarse de que existe la carpeta de estilos
if (!fs.existsSync(stylesPath)) {
  console.log('Creando carpeta de estilos...');
  fs.mkdirSync(stylesPath, { recursive: true });
}

// Crear los archivos CSS en la carpeta de estilos
const cssFiles = [
  'index.css',
  'variables.css',
  'reset.css',
  'animations.css',
  'buttons.css',
  'navbar.css',
  'layout.css',
  'hero.css',
  'gallery.css',
  'car-details.css',
  'features.css',
  'price-section.css',
  'contact.css',
  'footer.css',
  'responsive.css'
];

// Verificar que todos los archivos existen
console.log('Verificando archivos CSS...');
let allFilesExist = true;
for (const file of cssFiles) {
  const filePath = path.resolve(stylesPath, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Falta el archivo: ${filePath}`);
    allFilesExist = false;
  }
}

if (!allFilesExist) {
  console.error('Faltan archivos CSS. Por favor, crea todos los archivos necesarios primero.');
  process.exit(1);
}

// Actualizar el archivo App.jsx
console.log('Actualizando App.jsx...');
const appJsxPath = path.resolve(srcPath, 'App.jsx');
let appJsxContent = fs.readFileSync(appJsxPath, 'utf8');
appJsxContent = appJsxContent.replace(
  "import './App.css'", 
  "import './styles/index.css'"
);
fs.writeFileSync(appJsxPath, appJsxContent);

// Eliminar App.css original
console.log('Eliminando App.css original...');
const appCssPath = path.resolve(srcPath, 'App.css');
if (fs.existsSync(appCssPath)) {
  fs.unlinkSync(appCssPath);
}

console.log('¡Migración completada con éxito!');
console.log('Los estilos ahora se organizan en archivos modulares en la carpeta src/styles/');