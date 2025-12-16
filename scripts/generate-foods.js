import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsvPath = join(__dirname, '../src/data/foods.tsv');
const outputPath = join(__dirname, '../src/data/foods.ts');

try {
  const tsvContent = readFileSync(tsvPath, 'utf-8');
  const lines = tsvContent.trim().split('\n');

  const foods = lines.map(line => {
    const [name, kcal] = line.split('\t');
    return {
      name: name.trim(),
      kcalPer100g: parseInt(kcal.trim(), 10)
    };
  });

  const tsContent = `import { Food } from '../types/food';

export const foods: Food[] = ${JSON.stringify(foods, null, 2)};
`;

  writeFileSync(outputPath, tsContent, 'utf-8');
  console.log(`✓ Generated ${outputPath}`);
  console.log(`✓ Processed ${foods.length} food items`);
} catch (error) {
  console.error('Error generating foods.ts:', error);
  process.exit(1);
}