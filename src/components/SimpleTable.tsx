import React from 'react';

const SimpleTable: React.FC = () => {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Header 1</th>
          <th className="border border-gray-300 px-4 py-2">Header 2</th>
          <th className="border border-gray-300 px-4 py-2">Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Row 1, Cell 1</td>
          <td className="border border-gray-300 px-4 py-2">Row 1, Cell 2</td>
          <td className="border border-gray-300 px-4 py-2">Row 1, Cell 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Row 2, Cell 1</td>
          <td className="border border-gray-300 px-4 py-2">Row 2, Cell 2</td>
          <td className="border border-gray-300 px-4 py-2">Row 2, Cell 3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SimpleTable;
