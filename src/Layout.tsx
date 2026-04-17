import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getInviteUrl } from './config'; 
import {
  LayoutDashboard,
  Users,
  MailOpen,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Instagram,
  Eye,
  Monitor,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

import { useAuth } from './contexts/AuthContext';
import { recentInvitations } from './data/mock';

// Definição para o TypeScript reconhecer os dados das prévias
interface Invitation {
  id: string;
  title: string;
  aspectRatio: string;
}

const navigation = [
  { name: 'Dashboard Admin', href: '/', icon: LayoutDashboard, adminOnly: true },
  { name: 'Vitrine Premium', href: '/shop', icon: MailOpen, adminOnly: false },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [previewInv, setPreviewInv] = useState<Invitation | null>(null);
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();

  const filteredNavigation = navigation.filter(item => !item.adminOnly || isAdmin);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Mobile */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", sidebarOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 bg-slate-900/80" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between h-16 px-6 border-b border-indigo-500/10">
            <span className="text-sm font-black text-indigo-500 italic tracking-tighter uppercase">convitesconexoesmagia</span>
            <button onClick={() => setSidebarOpen(false)} className="text-slate-500 hover:text-slate-400">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {filteredNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 mr-3", isActive ? "text-indigo-400" : "text-slate-400")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-indigo-500/10 lg:bg-[#080808]">
        <div className="flex items-center h-16 px-6 border-b border-indigo-500/10">
          <span className="text-sm font-black text-indigo-400 italic tracking-tighter uppercase">convitesconexoesmagia</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {filteredNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-indigo-600/10 text-indigo-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5 mr-3", isActive ? "text-indigo-400" : "text-slate-500")} />
                {item.name}
              </Link>
            );
          })}

          {/* Seção de Visualização de Clientes */}
          {isAdmin && (
            <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
              <h3 className="px-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic">Visualização do Cliente</h3>
              <div className="space-y-1">
                {recentInvitations.map((inv) => (
                  <button
                    key={inv.id}
                    onClick={() => setPreviewInv(inv)}
                    className="w-full flex items-center px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all group text-left"
                  >
                    <Eye className="w-3.5 h-3.5 mr-3 opacity-40 group-hover:opacity-100" />
                    <span className="truncate">{inv.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3 text-slate-500" />
            Sair
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen bg-[#050505]">
        <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-4 bg-black/40 backdrop-blur-xl border-b border-white/5 sm:px-6 lg:px-8">
          <button
            className="lg:hidden text-slate-400"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-end flex-1 space-x-4">
            <button className="p-2 text-slate-400 hover:text-slate-300 relative">
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
              <Bell className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full bg-slate-800 border border-white/10"
                src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=6366f1&color=fff`}
                alt="Avatar"
              />
            </div>
          </div>
        </header>

        <main className="relative z-10 flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        <footer className="mt-auto py-10 px-6 border-t border-white/5 bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-sm font-black text-indigo-400 italic tracking-tighter uppercase">convitesconexoesmagia</span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Conexões & Magia © 2026</p>
            </div>

            <a
              href="https://www.instagram.com/convitesconexoesmagia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
            >
              <Instagram className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-slate-300">Siga @convitesconexoesmagia</span>
            </a>
          </div>
        </footer>
      </div>

      {/* MODAL DE PRÉVIA */}
      {previewInv && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 backdrop-blur-2xl bg-black/80">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={() => setPreviewInv(null)}
                className="p-4 bg-white/10 hover:bg-rose-600 text-white rounded-full transition-all border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-indigo-400">{previewInv.title}</h2>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mt-2">
                Modo Prévia: {previewInv.aspectRatio === '7/4' ? 'Desktop' : 'Mobile'}
              </p>
            </div>

            <div className={cn(
              "relative bg-black rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden transition-all duration-700",
              previewInv.aspectRatio === '7/4' ? "w-full max-w-5xl aspect-[7/4]" : "w-[360px] aspect-[9/16]"
            )}>
              <iframe
                src={getInviteUrl(previewInv.id)}
                className="w-full h-full border-none"
                title="Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}