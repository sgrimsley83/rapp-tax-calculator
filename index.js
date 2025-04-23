import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaxImpactCalculator from './TaxImpactCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaxImpactCalculator />
  </React.StrictMode>
);