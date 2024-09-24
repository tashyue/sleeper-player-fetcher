import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav >
      <ul>
        <li className="flex space-x-6">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/draft">Draft</a>
        </li>
        <li>
          <a href="/faab-rank">FAAB</a>
        </li>
        <li>
          <a href="/trade-rank">Trades</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

