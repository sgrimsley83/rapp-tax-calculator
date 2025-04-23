import React, { useState } from "react";

export default function TaxImpactCalculator() {
  const [assessedValue, setAssessedValue] = useState(350000);
  const [taxRate, setTaxRate] = useState(0.55);
  const [fireLevy, setFireLevy] = useState(false);

  const baseTax = (assessedValue / 100) * taxRate;
  const fireTax = fireLevy ? (assessedValue / 100) * 0.01 : 0;
  const totalTax = baseTax + fireTax;
  const monthlyImpact = totalTax / 12;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Rappahannock Tax Impact Calculator</h1>

      <p className="text-sm mb-2 text-gray-600 text-center">
        Find your assessed value at{' '}
        <a
          href="https://www.rappahannockcountyva.gov/government/departments/commissioner_of_the_revenue/index.php"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rappahannock County Revenue Office
        </a>
      </p>

      <label className="block mb-2 font-semibold">Assessed Property Value ($):</label>
      <input
        type="number"
        className="w-full border p-2 rounded mb-4"
        value={assessedValue}
        onChange={(e) => setAssessedValue(Number(e.target.value))}
      />

      <label className="block mb-2 font-semibold">Select Tax Rate:</label>
      <select
        className="w-full border p-2 rounded mb-4"
        value={taxRate}
        onChange={(e) => setTaxRate(Number(e.target.value))}
      >
        <option value={0.55}>Current Rate - $0.55</option>
        <option value={0.57}>Proposed Rate - $0.57 (Administrator's Budget)</option>
        <option value={0.58}>Full School Funding Scenario - $0.58</option>
      </select>

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={fireLevy}
          onChange={(e) => setFireLevy(e.target.checked)}
        />
        Add $0.01 Fire Levy
      </label>

      <div className="bg-gray-100 p-4 rounded text-center">
        <p className="text-lg font-semibold text-gray-700">Estimated Annual Tax: ${totalTax.toFixed(2)}</p>
        <p className="text-md text-gray-600">Monthly Impact: ${monthlyImpact.toFixed(2)}</p>
      </div>
    </div>
  );
}