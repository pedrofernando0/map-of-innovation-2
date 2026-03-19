#!/bin/bash

echo "🚀 Inicializando Mapa de Inovação..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js 16+"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js: $NODE_VERSION"

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm: $NPM_VERSION"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi
echo "✅ Dependências instaladas"
echo ""

# Verificar .env
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        echo "⚙️  Criando arquivo .env a partir de .env.example..."
        cp .env.example .env
        echo "⚠️  ⚠️  IMPORTANTE: Configure GEMINI_API_KEY no arquivo .env"
        echo ""
    else
        echo "⚠️  Arquivo .env não encontrado e .env.example não existe"
    fi
else
    echo "✅ Arquivo .env encontrado"
fi

echo ""
echo "🎉 Setup concluído!"
echo ""
echo "Para iniciar o servidor de desenvolvimento:"
echo "  npm run dev"
echo ""
echo "A aplicação estará disponível em:"
echo "  📱 http://localhost:3000"
echo "  🌐 http://$(hostname -I | awk '{print $1}'):3000"
