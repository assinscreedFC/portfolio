import React from 'react';
import { Card, CardContent } from '../ui/card';
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Calendar
} from 'lucide-react';
import BlurText from '../bits/TextAnimations/BlurText/BlurText';
import { useVersionT } from '../../hooks/useVersionT';
import { useVersion } from '../../context/VersionContext';

const CALENDLY_URL = 'https://calendly.com/anishammouche50';

const Contact: React.FC = () => {
  const { t } = useVersionT();
  const version = useVersion();

  const socialLinks = [
    {
      name: t('contact.socialLinks.github.name'),
      username: t('contact.socialLinks.github.username'),
      url: 'https://github.com/assinscreedfc',
      icon: Github,
      color: 'hover:text-gray-400 hover:bg-gray-800/20',
      description: t('contact.socialLinks.github.description')
    },
    {
      name: t('contact.socialLinks.linkedin.name'),
      username: t('contact.socialLinks.linkedin.username'),
      url: 'https://www.linkedin.com/in/anis-h',
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:bg-blue-800/20',
      description: t('contact.socialLinks.linkedin.description')
    },
    {
      name: t('contact.socialLinks.email.name'),
      username: t('contact.socialLinks.email.username'),
      url: 'mailto:anishammouche50@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-400 hover:bg-blue-800/20',
      description: t('contact.socialLinks.email.description')
    }
  ];

  return (
    <section id="contact" className="w-[90%] md:w-[80%]">
      <section className="w-full max-w-7xl mx-auto py-20">
        <div className="text-left mb-16">
          <BlurText text={t('contact.sectionLabel')} className="text-light text-2xl font-semibold mb-2" />
          <h1 className="text-3xl md:text-5xl font-semibold text-light leading-tight">{t('contact.title')}</h1>
        </div>

        {/* CTA Calendly (pro only) */}
        {version === 'pro' && (
          <div className="mb-12 p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
            <p className="text-light text-lg mb-2">
              {t('contact.description2')}
            </p>
            <button
              onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
              className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-lg cursor-pointer"
            >
              <Calendar size={22} />
              {t('services.cta')}
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-light mb-4">
                {t('contact.socialHeading')}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('contact.description1')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('contact.description3')}
              </p>
            </div>
          </div>

          {/* Social Media Cards */}
          <div className="space-y-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Card
                  key={index}
                  className={`border-0 bg-gradient-to-br from-surface-hover/30 to-surface-base/20 relative overflow-hidden transition-all duration-300 hover:from-surface-hover/40 hover:to-surface-base/30 cursor-pointer group ${social.color}`}
                >
                  <CardContent className="p-6 relative z-10">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-black/40 group-hover:bg-black/60 transition-colors duration-200">
                          <IconComponent className="w-6 h-6 text-accent-warm" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-light group-hover:text-current transition-colors duration-200">
                            {social.name}
                          </h3>
                          <p className="text-accent-warm/80 text-sm mb-1">
                            {social.username}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {social.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-accent-warm/60 group-hover:text-current transition-colors duration-200" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
