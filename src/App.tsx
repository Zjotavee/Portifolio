/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Admin from './pages/Admin';

/**
 * Verifica se o ambiente atual é um ambiente de preview/desenvolvimento em nuvem.
 */
function checkPreviewEnvironment(): boolean {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname;
  const href = window.location.href;
  
  const previewIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox',
    '.run.app' // Added for AI Studio preview
  ];

  return previewIndicators.some(indicator => 
    hostname.includes(indicator) || href.includes(indicator)
  );
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Seleciona o roteador apropriado
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/admin" element={<Admin />} />
        {/* Fallback para rotas não encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
