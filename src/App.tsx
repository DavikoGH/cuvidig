/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Inicio from './pages/Inicio';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Por defecto, al entrar a la web se muestran todas las tarjetas en CV Digitales */}
          <Route index element={<Navigate to="/cv-digital" replace />} />
          <Route path="cv-digital" element={<Home />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="personas" element={<Home />} />
          <Route path="categorias" element={<Home />} />
          <Route path="ciudades" element={<Home />} />
          <Route path="empresas" element={<Home />} />
          <Route path="persona/:id" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
