#!/usr/bin/env bash
# Sestaví kuchapka.zip k nahrání na Netlify (Deploys -> přetáhnout ZIP).
# Nahrávej do STEJNÉHO projektu, jinak se změní adresa a v appce zmizí uložené recepty.
set -euo pipefail
cd "$(dirname "$0")"

FILES=(index.html styles.css app.js manifest.json sw.js icon-192.png icon-512.png _headers)

for f in "${FILES[@]}"; do
  [[ -f "$f" ]] || { echo "chybí soubor: $f" >&2; exit 1; }
done

node --check app.js
echo "app.js: syntaxe ok"

rm -f kuchapka.zip
zip -j -q kuchapka.zip "${FILES[@]}"

BUILD=$(grep -o 'build [0-9]*' index.html | head -1)
echo "hotovo: kuchapka.zip ($BUILD, $(du -h kuchapka.zip | cut -f1))"
