import { FiCode, FiServer, FiCpu, FiTool } from "react-icons/fi";
import Carousel, { type CarouselItem } from "../bits/Components/Carousel/Carousel";
import BlurText from "../bits/TextAnimations/BlurText/BlurText";
import { useTranslation } from "react-i18next";

function WhatIUse() {
  const { t } = useTranslation();

  // AI & Core
  const aiItems: CarouselItem[] = [
    {
      title: t("whatIUse.categories.ai.technologies.python.title"),
      description: t("whatIUse.categories.ai.technologies.python.description"),
      id: 1,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.ai.technologies.langgraph.title"),
      description: t("whatIUse.categories.ai.technologies.langgraph.description"),
      id: 2,
      icon: <FiCpu className="h-[24px] w-[24px] text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.ai.technologies.scrapling.title"),
      description: t("whatIUse.categories.ai.technologies.scrapling.description"),
      id: 3,
      icon: <FiCode className="h-[24px] w-[24px] text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.ai.technologies.tensorflow.title"),
      description: t("whatIUse.categories.ai.technologies.tensorflow.description"),
      id: 4,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.ai.technologies.pytorch.title"),
      description: t("whatIUse.categories.ai.technologies.pytorch.description"),
      id: 5,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.ai.technologies.selenium.title"),
      description: t("whatIUse.categories.ai.technologies.selenium.description"),
      id: 6,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" className="h-[24px] w-[24px]" />,
    },
  ];

  // Backend & API
  const backendItems: CarouselItem[] = [
    {
      title: t("whatIUse.categories.backend.technologies.fastapi.title"),
      description: t("whatIUse.categories.backend.technologies.fastapi.description"),
      id: 1,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.backend.technologies.nodejs.title"),
      description: t("whatIUse.categories.backend.technologies.nodejs.description"),
      id: 2,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.backend.technologies.postgresql.title"),
      description: t("whatIUse.categories.backend.technologies.postgresql.description"),
      id: 3,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.backend.technologies.mongodb.title"),
      description: t("whatIUse.categories.backend.technologies.mongodb.description"),
      id: 4,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.backend.technologies.docker.title"),
      description: t("whatIUse.categories.backend.technologies.docker.description"),
      id: 5,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.backend.technologies.sqlite.title"),
      description: t("whatIUse.categories.backend.technologies.sqlite.description"),
      id: 6,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" className="h-[24px] w-[24px]" />,
    },
  ];

  // Frontend & Mobile
  const frontendItems: CarouselItem[] = [
    {
      title: t("whatIUse.categories.frontend.technologies.react.title"),
      description: t("whatIUse.categories.frontend.technologies.react.description"),
      id: 1,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.frontend.technologies.nextjs.title"),
      description: t("whatIUse.categories.frontend.technologies.nextjs.description"),
      id: 2,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.frontend.technologies.reactnative.title"),
      description: t("whatIUse.categories.frontend.technologies.reactnative.description"),
      id: 3,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.frontend.technologies.typescript.title"),
      description: t("whatIUse.categories.frontend.technologies.typescript.description"),
      id: 4,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-[24px] w-[24px]" />,
    },
  ];

  // Tools
  const toolsItems: CarouselItem[] = [
    {
      title: t("whatIUse.categories.tools.technologies.git.title"),
      description: t("whatIUse.categories.tools.technologies.git.description"),
      id: 1,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.tools.technologies.github.title"),
      description: t("whatIUse.categories.tools.technologies.github.description"),
      id: 2,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.tools.technologies.vscode.title"),
      description: t("whatIUse.categories.tools.technologies.vscode.description"),
      id: 3,
      icon: <FiCode className="h-[24px] w-[24px] text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.tools.technologies.postman.title"),
      description: t("whatIUse.categories.tools.technologies.postman.description"),
      id: 4,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.tools.technologies.linux.title"),
      description: t("whatIUse.categories.tools.technologies.linux.description"),
      id: 5,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="h-[24px] w-[24px]" />,
    },
    {
      title: t("whatIUse.categories.tools.technologies.swagger.title"),
      description: t("whatIUse.categories.tools.technologies.swagger.description"),
      id: 6,
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" alt="Swagger" className="h-[24px] w-[24px]" />,
    },
  ];

  const carouselConfigs = [
    {
      title: t("whatIUse.categories.ai.title"),
      items: aiItems,
      icon: <FiCpu className="h-6 w-6 text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.backend.title"),
      items: backendItems,
      icon: <FiServer className="h-6 w-6 text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.frontend.title"),
      items: frontendItems,
      icon: <FiCode className="h-6 w-6 text-[#ead3c1]" />,
    },
    {
      title: t("whatIUse.categories.tools.title"),
      items: toolsItems,
      icon: <FiTool className="h-6 w-6 text-[#ead3c1]" />,
    },
  ];

  return (
    <section id="what-i-use" className="w-[90%] md:w-[80%] mx-auto">
      <section className="w-full max-w-7xl mx-auto py-20">
        <div className="text-left mb-16">
          <BlurText
            text={t("whatIUse.sectionLabel")}
            className="text-[#FCF7F8] text-2xl font-semibold mb-2"
          />
          <h1 className="text-3xl md:text-5xl font-semibold text-[#FCF7F8] leading-tight">
            {t("whatIUse.title")}
          </h1>
          <p className="text-red-100/60 leading-relaxed text-lg mt-4 max-w-2xl">
            {t("whatIUse.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {carouselConfigs.map((config, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-full border border-gray-700/50 text-[#FCF7F8]">
                  {config.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#FCF7F8]">
                  {config.title}
                </h3>
              </div>
              <Carousel
                items={config.items}
                baseWidth={280}
                baseHeight={240}
                autoplay={true}
                autoplayDelay={3000 + index * 500}
                pauseOnHover={true}
                loop={true}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default WhatIUse;