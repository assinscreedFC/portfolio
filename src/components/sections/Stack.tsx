import { cn } from "../../lib/utils";
import { Marquee } from "../magicui/marquee";

const techItems = [
  // AI & Core
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Scrapling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Playwright",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  },
  {
    name: "Scrapy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  // Backend & API
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },

  // Frontend & Mobile
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Swagger",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
];



const TechCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-6 py-2 gap-x-2 rounded-xl bg-[#0e0e0e]/40 border border-gray-50/[.1] hover:bg-[#0e0e0e]/50"
      )}
    >
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 transition-transform duration-200 group-hover:scale-105"
      />
      <span className="text-base font-medium text-white text-center">{name}</span>
    </div>
  );
};
export default function Stack() {
  return (
    <div className="relative flex w-[90%] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {techItems.map((item) => (
          <TechCard key={item.name} icon={item.icon} name={item.name} />
        ))}
      </Marquee>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/6"
        style={{
          background:
            'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0) 100%)',
        }}
      ></div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/6"
        style={{
          background:
            'linear-gradient(270deg, #0a0a0a 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0) 100%)',
        }}
      ></div>
    </div>
  );
}
