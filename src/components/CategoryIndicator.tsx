import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CategoryIndicatorProps {
  score: number;
  className?: string;
}

const categories = [
  { 
    name: 'Essencial', 
    range: '0 - 40', 
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    description: 'A escola possui as condições mínimas de funcionamento na dimensão avaliada. Práticas inovadoras existem de forma pontual ou dependem de iniciativas individuais. A infraestrutura tecnológica é básica ou subutilizada. Há espaço significativo para estruturação e intencionalidade.'
  },
  { 
    name: 'Explorador', 
    range: '41 - 70', 
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'A escola demonstra processos em construção, com orientação institucional parcial. Há práticas inovadoras e uso de tecnologia em diferentes contextos, mas a integração ainda não é sistêmica. A coexistência de práticas tradicionais e inovadoras é característica deste estágio.'
  },
  { 
    name: 'Integrada', 
    range: '71 - 100', 
    color: 'bg-green-100 text-green-800 border-green-200',
    description: 'A escola demonstra cultura institucional consolidada de inovação. Práticas pedagógicas ativas e uso intencional de tecnologia estão integrados ao currículo, à formação e à gestão. Há ciclos contínuos de avaliação e melhoria.'
  },
];

export function CategoryIndicator({ score, className }: CategoryIndicatorProps) {
  const activeIndex = score >= 71 ? 2 : score >= 41 ? 1 : 0;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex gap-2">
        {categories.map((cat, index) => (
          <div 
            key={cat.name}
            className={cn(
              "flex-1 p-4 rounded-xl border-2 transition-all duration-500",
              index === activeIndex ? cat.color : "bg-gray-50 border-gray-100 opacity-50"
            )}
          >
            <div className="font-bold text-lg">{cat.name}</div>
            <div className="text-xs font-medium opacity-80">{cat.range} pontos</div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-100 leading-relaxed">
        <strong className="text-gray-900">{categories[activeIndex].name}:</strong> {categories[activeIndex].description}
      </div>
    </div>
  );
}
