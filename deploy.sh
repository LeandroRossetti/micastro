#!/bin/bash

# Salir si algo falla
set -e

echo "🚀 Construyendo el sitio con Astro..."
npm run build

echo "🧼 Entrando a dist y preparando archivos..."
cd dist
touch .nojekyll

echo "🔁 Inicializando Git y haciendo push a gh-pages..."
git init
git checkout -b gh-pages
git add .
git commit -m "🚀 Deploy automático a GitHub Pages"
git remote add origin https://github.com/LeandroRossetti/micastro.git
git push -f origin gh-pages

echo "✅ ¡Deploy completo! Verificá en: https://leandrorossetti.github.io/micastro/"
