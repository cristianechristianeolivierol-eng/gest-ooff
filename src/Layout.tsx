import React from 'react';
// @ts-ignore
import { Instagram, Mail, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Cabeçalho */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md">
        <h1 className="text-xl font-black italic text-indigo-400 uppercase tracking-tighter">
          Convites Conexões & Magia
        </h1>
        
        <div className="flex gap-4 text-slate-400">
          <Instagram className="w-5 h-5" />
          <Mail className="w-5 h-5" />
          <Phone className="w-5 h-5" />
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1">
        {children}
      </main>

      {/* Rodapé */}
      <footer className="p-8 border-t border-white/5 text-center text-[10px] text-slate-600 uppercase tracking-widest">
        © 2026 Conexões & Magia
      </footer>
    </div>
  );
}