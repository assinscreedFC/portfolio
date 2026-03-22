import { useTranslation } from 'react-i18next';
import { useVersion } from '../context/VersionContext';

export function useVersionT() {
  const version = useVersion();
  const { t, i18n } = useTranslation();

  const vt = (key: string, options?: Record<string, unknown>): string => {
    if (version === 'pro') {
      const proKey = `pro:${key}`;
      if (i18n.exists(proKey)) {
        return String(t(proKey, options as never));
      }
    }
    return String(t(key, options as never));
  };

  return { t: vt, i18n, version };
}
