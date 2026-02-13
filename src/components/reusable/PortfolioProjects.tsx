import { Github, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

const CircularGallery = lazy(() => import("../bits/Components/CircularGallery/CircularGallery"))

interface PortfolioProject {
  image: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  link?: string;
  github?: string;
}

// Inline SVG terminal-style visuals as data URIs
const createTerminalSvg = (lines: string[], accent: string) => {
  const lineElements = lines
    .map(
      (line, i) =>
        `<text x="20" y="${48 + i * 18}" fill="${line.startsWith('>') || line.startsWith('$') ? accent : line.startsWith('✓') ? '#4ade80' : '#9ca3af'}" font-family="monospace" font-size="11">${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`
    )
    .join("");
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#0a0a0a" rx="8"/>
      <rect x="0" y="0" width="400" height="28" fill="#1a1a1a" rx="8"/>
      <rect x="0" y="14" width="400" height="14" fill="#1a1a1a"/>
      <circle cx="16" cy="14" r="5" fill="#ff5f57"/>
      <circle cx="32" cy="14" r="5" fill="#febc2e"/>
      <circle cx="48" cy="14" r="5" fill="#28c840"/>
      ${lineElements}
    </svg>`
  )}`;
};

const surebetImage = createTerminalSvg(
  [
    "$ python surebet_bot.py --scan",
    "Scanning 30+ bookmakers...",
    "✓ Arbitrage found: PSG vs Lyon",
    "  Bet365: 2.10 | Betway: 2.05",
    "  Profit: +3.2% (~€32/1000)",
    "✓ Alert sent via Telegram",
    "  Throughput: 487 req/min",
    "  Uptime: 99.8% (30d)",
  ],
  "#22d3ee"
);

const vintedImage = createTerminalSvg(
  [
    "$ python sniper.py --batch",
    "Fetching listings via Scrapling...",
    "✓ Bypass: Cloudflare OK",
    "  Items scanned: 1,247",
    "  Score: 94/100 | Gap: 62%",
    "  Median price: €45.00",
    "✓ Top 5 deals sent to Telegram",
    "  Accuracy: 95% hit rate",
  ],
  "#facc15"
);

const xmonitorImage = createTerminalSvg(
  [
    "$ docker run x-monitor-bot",
    "Session initialized (cookies OK)",
    "✓ Monitoring @target_user...",
    "  New tweet detected: #breaking",
    "  Latency: 1.2s detection",
    "✓ Alert forwarded to Telegram",
    "  Uptime: 30d / 0 restarts",
    "  Anti-detection: stealth mode",
  ],
  "#60a5fa"
);

const ocrImage = createTerminalSvg(
  [
    "$ python ocr_pipeline.py input/",
    "Processing 128 documents...",
    "✓ Preprocessing: OpenCV resize",
    "  Tesseract OCR: extracting...",
    "  Accuracy: 98.4% chars",
    '  Output: {"text": "Invoice #"}',
    "✓ API served on :8000/extract",
    "  Batch: 128/128 completed",
  ],
  "#a78bfa"
);

const scrappingImage = createTerminalSvg(
  [
    "$ python scrapper.py --all",
    "Loading target definitions...",
    "✓ Proxy rotation: 12 proxies",
    "  Pages scraped: 10,482/hr",
    "  Anti-detect: headers rotated",
    "  Retry: 3/3 recovered",
    "✓ Export: data/output.json",
    "  Total records: 45,291",
  ],
  "#4ade80"
);

const ortholyseImage = createTerminalSvg(
  [
    "$ python ortholyse.py analyze",
    'Input: "Les enfent joue dehors"',
    "✓ Analysis complete:",
    '  enfent -> enfants (98.7%)',
    '  joue -> jouent (99.1%)',
    "  Corrections: 2 found",
    "  Rule-based: 1 | ML-based: 1",
    "✓ Confidence: 98.9% overall",
  ],
  "#f472b6"
);

const portfolioProjects: PortfolioProject[] = [
  {
    image: surebetImage,
    titleKey: "project.projects.surebetbot.title",
    descriptionKey: "project.projects.surebetbot.description",
    tech: ["Python", "The Odds API", "Telegram", "SQLite"],
    github: "https://github.com/your-username/surebet_bot",
  },
  {
    image: vintedImage,
    titleKey: "project.projects.vintedsniper.title",
    descriptionKey: "project.projects.vintedsniper.description",
    tech: ["Python", "Scrapling", "SQLite", "Telegram"],
    github: "https://github.com/your-username/vinted-sniper",
  },
  {
    image: xmonitorImage,
    titleKey: "project.projects.xmonitor.title",
    descriptionKey: "project.projects.xmonitor.description",
    tech: ["Python", "Selenium", "Docker", "Telegram"],
    github: "https://github.com/your-username/x-monitor-bot",
  },
  {
    image: ocrImage,
    titleKey: "project.projects.ocrproject.title",
    descriptionKey: "project.projects.ocrproject.description",
    tech: ["Python", "Tesseract", "OpenCV", "FastAPI"],
    github: "https://github.com/your-username/ocr-project",
  },
  {
    image: scrappingImage,
    titleKey: "project.projects.scrappingauto.title",
    descriptionKey: "project.projects.scrappingauto.description",
    tech: ["Python", "Scrapling", "Selenium", "SQLite"],
    github: "https://github.com/your-username/scrapping-automatisation",
  },
  {
    image: ortholyseImage,
    titleKey: "project.projects.ortholyse.title",
    descriptionKey: "project.projects.ortholyse.description",
    tech: ["Python", "NLP", "FastAPI", "React"],
    github: "https://github.com/your-username/OrthoLyse",
  },
];

function ProjectCard({ project }: { project: PortfolioProject }) {
  const { t } = useTranslation();

  return (
    <Card className="w-[300px] md:w-[335px] bg-[#0e0e0e] border-gray-700/50 text-[#FCF7F8] shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="w-full h-40 object-cover rounded-t-lg -mt-6"
        />
      </CardHeader>
      <CardContent className="p-4 -mt-6">
        <h3 className="text-lg font-semibold mb-2">{t(project.titleKey)}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{t(project.descriptionKey)}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/50 text-[#FCF7F8] text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2 -mt-4">
        {project.github && (
          <Button
            asChild
            variant="outline"
            className="flex-1 h-10 px-4 border-gray-700/50 text-[#FCF7F8] hover:bg-gray-700/50 text-sm"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <Github size={16} className="mr-1" /> {t("project.ariaLabels.viewGithub") || "GitHub"}
            </a>
          </Button>
        )}
        {project.github && (
          <Button
            asChild
            className="flex-1 h-10 px-4 bg-[#FCF7F8] text-[#0e0e0e] hover:bg-[#FCF7F8]/80 text-sm"
          >
            <a
              href={`${project.github}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <FileText size={16} className="mr-1" /> {t("project.ariaLabels.viewLive") || "Docs"}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function PortfolioGallery() {
  return (
    <div className="h-[80vh] lg:-mt-20">
      <CircularGallery
        items={portfolioProjects}
        bend={1}
        scrollSpeed={2}
        scrollEase={0.08}
      >
        {(project: PortfolioProject) => <ProjectCard project={project} />}
      </CircularGallery>
    </div>
  );
}