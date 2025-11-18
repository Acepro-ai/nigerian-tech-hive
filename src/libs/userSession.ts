import { v4 as uuidv4 } from 'uuid';

// User session management without authentication
export interface UserSession {
  sessionId: string;
  email?: string;
  hasPaid: boolean;
  paidPlan?: 'basic' | 'professional' | 'enterprise';
  paymentDate?: string;
  createdAt: string;
  lastActivity: string;
}

const SESSION_KEY = 'nth_user_session';
const SESSION_EXPIRY_DAYS = 30; // Sessions expire after 30 days of inactivity

export const getCurrentSession = (): UserSession | null => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return null;

    const session: UserSession = JSON.parse(sessionData);

    // Check if session has expired
    const lastActivity = new Date(session.lastActivity);
    const now = new Date();
    const daysSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24);

    if (daysSinceActivity > SESSION_EXPIRY_DAYS) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    // Update last activity
    session.lastActivity = now.toISOString();
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));

    return session;
  } catch (error) {
    console.error('Error reading user session:', error);
    return null;
  }
};

export const createNewSession = (email?: string): UserSession => {
  const now = new Date().toISOString();
  const session: UserSession = {
    sessionId: uuidv4(),
    email,
    hasPaid: false,
    createdAt: now,
    lastActivity: now
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
};

export const updateSessionPayment = (
  plan: 'basic' | 'professional' | 'enterprise',
  email?: string
): UserSession => {
  const existingSession = getCurrentSession();
  const now = new Date().toISOString();

  const session: UserSession = existingSession ? {
    ...existingSession,
    hasPaid: true,
    paidPlan: plan,
    paymentDate: now,
    email: email || existingSession.email,
    lastActivity: now
  } : {
    sessionId: uuidv4(),
    email,
    hasPaid: true,
    paidPlan: plan,
    paymentDate: now,
    createdAt: now,
    lastActivity: now
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
};

export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
};

export const isPremiumUser = (): boolean => {
  const session = getCurrentSession();
  return session?.hasPaid || false;
};

export const getUserPlan = (): 'basic' | 'professional' | 'enterprise' | null => {
  const session = getCurrentSession();
  return session?.paidPlan || null;
};