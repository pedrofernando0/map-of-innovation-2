import React from 'react';
import { motion } from 'motion/react';

interface LoadingProps {
  message?: string;
}

export function Loading({ message = 'Estamos trabalhando no seu Mapa de Inovação' }: LoadingProps) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center bg-gray-50">
      <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 border-4 border-gray-200 rounded-full"
        />
        <motion.div 
          className="absolute inset-0 border-4 border-[var(--color-geekie-cereja)] rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <motion.div 
          className="w-16 h-16 bg-[var(--color-geekie-cereja)] rounded-full opacity-20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      <div className="space-y-3 max-w-md">
        <h2 className="text-2xl font-bold text-[var(--color-geekie-preto)]">
          {message}
        </h2>
        <p className="text-gray-600">
          Analisando suas respostas e calibrando os indicadores para gerar insights personalizados para a sua escola.
        </p>
      </div>
    </div>
  );
}
