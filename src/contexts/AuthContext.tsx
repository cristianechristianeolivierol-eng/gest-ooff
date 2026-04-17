import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext<any>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState({ name: 'Cris' });
  const [isAdmin] = useState(true);
  const logout = () => console.log("Saindo...");
  return (
    <AuthContext.Provider value={{ user, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);