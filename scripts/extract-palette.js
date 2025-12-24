#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const Vibrant = require("node-vibrant");

const images = process.argv.slice(2);

async function main() {
  if (images.length === 0) {
    console.log("Uso: npm run extract-palette -- path/a/imagenes/*.jpg");
    process.exit(1);
  }

  const results = [];
  for (const imagePath of images) {
    try {
      const palette = await Vibrant.from(imagePath).getPalette();
      const swatches = Object.values(palette)
        .filter(Boolean)
        .map((swatch) => ({
          hex: swatch.getHex(),
          population: swatch.getPopulation()
        }));
      results.push({ image: path.basename(imagePath), swatches });
      console.log(`Palette extraída de ${imagePath}`);
    } catch (error) {
      console.error(`No se pudo procesar ${imagePath}`, error);
    }
  }

  const outputPath = path.join(process.cwd(), "palette-output.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Listo. Mira ${outputPath}`);
}

main();
