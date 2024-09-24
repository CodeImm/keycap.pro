'use client';

import React, { ReactNode, createContext, useContext } from 'react';

import { Session, User } from 'lucia';

interface SessionContext {
  user: User | null;
  session: Session | null;
}

const SessionContext = createContext<SessionContext>({ user: null, session: null });

interface SessionProviderProps {
  children: ReactNode;
  value: SessionContext;
}

const SessionProvider = ({ children, value }: SessionProviderProps) => {
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
