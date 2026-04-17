import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './Layout'; // Ajuste o caminho se o Layout estiver em outra pasta

// Componentes simples para testar as telas
const Dashboard = () => <div className="p-8 text-white"><h1 className="text-2xl font-bold">Painel de Gestão</h1><p>Bem-vindo ao sistema de convites.</p></div>;
const Vitrine = () => <div className="p-8 text-white"><h1 className="text-2xl font-bold">Vitrine de Modelos</h1><p>Escolha seu design premium.</p></div>;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shop" element={<Vitrine />} />
            <Route path="*" element={<div className="text-white p-8">Página 404: Não encontrada</div>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;