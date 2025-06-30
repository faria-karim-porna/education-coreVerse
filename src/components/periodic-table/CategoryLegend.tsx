import React from 'react';

interface CategoryLegendProps {
  categories: { id: string; label: string; color: string }[];
}

export function CategoryLegend({ categories }: CategoryLegendProps) {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {categories.slice(1).map((category) => (
        <div key={category.id} className="d-flex align-items-center gap-2">
          <div className={`${category.color} rounded`} style={{ width: '16px', height: '16px' }}></div>
          <span className="small text-muted">{category.label}</span>
        </div>
      ))}
    </div>
  );
}