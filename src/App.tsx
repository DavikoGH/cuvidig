/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="personas" element={<Home />} />
        <Route path="categorias" element={<Home />} />
        <Route path="ciudades" element={<Home />} />
        <Route path="empresas" element={<Home />} />
        <Route path="persona/:id" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
