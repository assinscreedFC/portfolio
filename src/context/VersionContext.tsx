import { createContext, useContext, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Version = 'student' | 'pro';

const VersionContext = createContext<Version>('pro');

export function VersionProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const version: Version = location.pathname.startsWith('/etudiant') ? 'student' : 'pro';

  return (
    <VersionContext.Provider value={version}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion(): Version {
  return useContext(VersionContext);
}
