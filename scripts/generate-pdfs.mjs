import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const cvDir = path.join(rootDir, 'src', 'cv');
const publicDir = path.join(rootDir, 'public');

const cvFiles = [
  'cv-student-fr',
  'cv-student-en',
  'cv-pro-fr',
  'cv-pro-en',
];

async function generatePDFs() {
  const browser = await puppeteer.launch({ headless: true });

  for (const name of cvFiles) {
    const htmlPath = path.join(cvDir, `${name}.html`);
    if (!fs.existsSync(htmlPath)) {
      console.error(`Missing: ${htmlPath}`);
      continue;
    }

    const page = await browser.newPage();
    const fileUrl = `file://${htmlPath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    const pdfPath = path.join(publicDir, `${name}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await page.close();
    console.log(`OK: ${pdfPath}`);
  }

  await browser.close();
}

generatePDFs().catch((err) => {
  console.error(err);
  process.exit(1);
});
