# Food Energy Density Cheat Sheet

A visual reference tool for comparing calorie density across common foods. This app displays foods with their energy content per 100g, along with visual bars scaled to show relative calorie density.

## Features

- Visual comparison of calorie density across 21 foods
- Scaled blue bars showing relative energy content (max 884 kcal/100g)
- Food images for visual reference
- Data-driven approach with TSV source file

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Updating Food Data

The food data is stored in a TSV file at `src/data/foods.tsv`. To update:

1. Edit `src/data/foods.tsv` with your changes (tab-delimited format)
2. Run the generation script to convert TSV to TypeScript:

```bash
npm run generate:foods
```

This will regenerate `src/data/foods.ts` with your updated data.

## Adding Food Images

1. Add PNG images to `src/assets/`
2. Import and map them in `src/data/foodImages.ts`

Example:
```typescript
import newFood from '../assets/newfood.png';

export const foodImages: Record<string, string> = {
  "Food Name": newFood,
  // ... existing mappings
};
```

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS
