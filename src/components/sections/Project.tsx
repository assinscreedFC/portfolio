import { Github } from 'lucide-react';
import BlurText from '../bits/TextAnimations/BlurText/BlurText';
import PortfolioProjects from '../reusable/PortfolioProjects';
import { useVersionT } from '../../hooks/useVersionT';

const Project = () => {
  const { t } = useVersionT();

  return (
    <section id="projects" className="md:mt-16 w-[90%] md:w-[80%]">
      <div className="md:mb-20">
        <BlurText text={t('project.sectionLabel')} className="text-light text-2xl font-semibold mb-2" />
        <h1 className="text-3xl md:text-5xl font-semibold text-light leading-tight">{t('project.title')}</h1>
        <p className="text-gray-400 leading-relaxed text-lg mt-4 max-w-2xl">
          {t('project.description')}
        </p>
      </div>

      <div>
        <PortfolioProjects />
      </div>

      <div>
        <a
          href="https://github.com/assinscreedfc"
          target="_blank"
          className="flex items-center justify-center gap-2 mt-6 w-full px-6 py-4 bg-surface-card text-light rounded-xl border border-gray-700/50 hover:bg-surface-card/50 transition-colors duration-300"
        >
          {t('project.cta')} <Github size={16} />
        </a>
      </div>
    </section>
  );
};

export default Project;