import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ backgroundColor: '#000', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>Carregando...</div>;
  }

  if (!user) {
    // Se não estiver logado, redireciona para a página de login original do enigma (que é o hash de login)
    // Usando a mesma rota para facilitar, mas com hash correspondente à página de login
    return <Navigate to="/gamejam/login-playstation" replace />; 
    // Nota: você precisa garantir que o componente de login do PlayStation
    // ainda seja acessível pelo usuário.
  }

  return <>{children}</>;
};
