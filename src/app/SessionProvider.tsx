'use client';

import React, { ReactNode, createContext, useContext } from 'react';

import { Session, User } from 'lucia';

interface SessionProviderProps {
  user: User | null;
  session: Session | null;
}

const SessionContext = createContext<SessionProviderProps>({ user: null, session: null });

const SessionProvider = ({ children, value }: { children: ReactNode; value: SessionProviderProps }) => {
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return sessionContext;
};

export default SessionProvider;
