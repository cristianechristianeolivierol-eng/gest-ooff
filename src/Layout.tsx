import React from 'react';
import { Mail, Phone, Camera, Globe } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      {/* Cabeçalho Minimalista */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex flex-col">
          <h1 className="text-xl font-black italic tracking-tighter uppercase text-indigo-400">
            Convites Conexões & Magia
          </h1>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Digital Experience</span>
        </div>
        
        <div className="flex gap-5 text-slate-400">
          <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">
            <Camera className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Email" className="hover:text-indigo-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Telefone" className="hover:text-indigo-400 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Conteúdo Dinâmico */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Rodapé */}
      <footer className="p-10 border-t border-white/5 bg-black/40 text-center">
        <div className="flex justify-center gap-2 mb-4 text-slate-600">
           <Globe className="w-4 h-4" />
           <span className="text-[10px] uppercase tracking-[0.2em]">Contagem, MG</span>
        </div>
        <p className="text-sm font-bold text-slate-600 uppercase tracking-tighter">
          Conexões & Magia © 2026
        </p>
      </footer>
    </div>
  );
}