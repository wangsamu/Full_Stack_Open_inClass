import React from 'react';

interface HistoryProps {
  avocados: number;
  cocos: number;
  allFruits: string[];
}

function History({ avocados, cocos, allFruits }: HistoryProps) {
  if (allFruits.length === 0) {
    return <p>Add some fruits!</p>;
  }

  return (
    <div>
      <p>
        Avocados:
        {Array.from({ length: avocados }, () => '🥑').map((avocado) => avocado)}
      </p>
      <p>
        Coconuts:
        {Array.from({ length: cocos }, () => '🥥').map((coco) => coco)}
      </p>
      <p>
        All fruits:
        {allFruits.map((fruit) => fruit)}
      </p>
    </div>
  );
}

export default History;
