# Mapa de Inovação - React Application

Um aplicativo React interativo para explorar e analisar mapas de inovação com integração ao Gemini AI.

## Requisitos

- **Node.js** 16+ (verificar com `node --version`)
- **npm** 7+ (verificar com `npm --version`)

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
# Copie .env.example para .env e adicione sua chave Gemini
cp .env.example .env
# Edite .env e adicione: GEMINI_API_KEY="sua-chave-aqui"

# 3. Rodar aplicação
npm run dev
```

## Acesso da Aplicação

Após rodar `npm run dev`, acesse:
- **Local:** http://localhost:3000 (ou http://localhost:3001 se 3000 estiver ocupado)
- **Network:** http://10.104.59.123:3000

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot-reload |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Valida tipos TypeScript |
| `npm run clean` | Remove pasta dist |

## Estrutura do Projeto

```
src/
├── components/      # Componentes React reutilizáveis
├── screens/         # Telas da aplicação
├── services/        # Serviços (Gemini API, Storage)
├── App.tsx         # Componente principal
└── main.tsx        # Ponto de entrada
```

## Variáveis de Ambiente

```env
GEMINI_API_KEY=       # API key do Google Gemini (obrigatória)
APP_URL=              # URL da aplicação (padrão: http://localhost:3000)
```

**Para obter a GEMINI_API_KEY:**
1. Visite https://ai.google.dev
2. Clique em "Get API Key"
3. Crie uma nova API key
4. Copie e cole em .env

## Tecnologias

- **React 19** - UI framework
- **Vite 6** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Gemini API** - AI integration
- **Recharts** - Gráficos
- **React Markdown** - Markdown rendering

## Troubleshooting

### Porta 3000 em uso
Se receber erro "Port 3000 already in use", o Vite automaticamente usa 3001.

### Erro: GEMINI_API_KEY não definida
Certifique-se que:
1. Arquivo `.env` existe na raiz do projeto
2. `GEMINI_API_KEY` está configurada
3. Você não está usando `.env.local` (use apenas `.env`)

### Limpar cache
```bash
npm run clean
rm -rf node_modules
npm install
npm run dev
```

## Deployment

Para fazer deploy em produção:

```bash
npm run build
npm run preview
```

Os arquivos estáticos ficarão em `dist/` prontos para deployment.

## Documentação Adicional

- [Arquitetura](./docs/arquitetura.md)
- [Design Results](./docs/design-result.md)
