import { Database, Bot, BarChart3, LayoutDashboard, Plug, Calendar } from 'lucide-react'
import { useVersionT } from '../../hooks/useVersionT'

const CALENDLY_URL = 'https://calendly.com/anishammouche50'

const serviceIcons = [
  { key: 'pipelines', icon: Database },
  { key: 'bots', icon: Bot },
  { key: 'scoring', icon: BarChart3 },
  { key: 'dashboards', icon: LayoutDashboard },
  { key: 'integrations', icon: Plug },
]

function Services() {
  const { t } = useVersionT()

  return (
    <section id="services" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
            {t('services.sectionLabel')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mt-2">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIcons.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="p-6 rounded-2xl border border-gray-700/50 bg-surface-card hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Icon size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-light mb-2">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t(`services.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-lg cursor-pointer"
          >
            <Calendar size={22} />
            {t('services.cta')}
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            {t('services.ctaDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
