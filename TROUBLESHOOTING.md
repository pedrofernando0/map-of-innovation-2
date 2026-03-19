# 🔧 Troubleshooting - npm run dev

## Problemas Comuns e Soluções

### ❌ Erro: "Port 3000 is already in use"

**Causa:** Outra aplicação usando a porta 3000

**Solução:**
- O Vite automaticamente tenta porta 3001
- Acesse: http://localhost:3001
- Ou mate o processo: `lsof -i :3000 && kill -9 <PID>`

---

### ❌ Erro: "Cannot find module '@google/genai'"

**Causa:** Dependências não instaladas

**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### ❌ Erro: "GEMINI_API_KEY is undefined"

**Causa:** Arquivo .env não configurado

**Solução:**
1. Certifique-se que arquivo `.env` existe:
   ```bash
   ls -la .env
   ```
2. Adicione sua API key:
   ```bash
   echo 'GEMINI_API_KEY="sua-chave-aqui"' >> .env
   ```
3. Reinicie o servidor:
   ```bash
   npm run dev
   ```

---

### ❌ Erro: "TypeScript compilation errors"

**Causa:** Tipos não definidos ou incompatibilidades

**Solução:**
```bash
npm run lint  # Para ver todos os erros
npm run clean
npm install
npm run dev
```

---

### ❌ "Module not found" ou "Cannot resolve imports"

**Causa:** Paths incorretos ou alias não configurado

**Solução:**
1. Verifique `vite.config.ts` - alias `@` está configurado
2. Importe corretamente:
   ```tsx
   import { Component } from '@/src/components/Component'
   ```

---

### ❌ Hot Reload não funciona (changes não aparecem)

**Causa:** HMR desabilitado ou cache

**Solução:**
```bash
# Limpar cache Vite
rm -rf .vite

# Reiniciar servidor
npm run dev
```

---

### ❌ "EACCES: permission denied" ao rodar npm install

**Causa:** Permissões de arquivo

**Solução:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ Aplicação carrega mas não renderiza

**Causa:** Erro em componente React

**Solução:**
1. Abra console do navegador (F12)
2. Procure por erro em vermelho
3. Verifique arquivo que reporta erro
4. Simples restart geralmente funciona:
   ```bash
   npm run dev
   ```

---

## 🔍 Diagnóstico

Execute este comando para diagnosticar problemas:

```bash
# Verificar versões
node --version
npm --version

# Verificar dependências
npm ls @google/genai
npm ls vite

# Verificar arquivos críticos
ls -la package.json vite.config.ts src/main.tsx .env

# Limpar e reinstalar
npm cache clean --force
rm -rf node_modules
npm install
npm run dev
```

---

## 📊 Performance

Se aplicação está lenta:

```bash
# Build de produção e preview
npm run build
npm run preview

# Checar tamanho dos bundles
npm run build  # Vê output em dist/
```

---

## 🆘 Último Recurso

Se nada funcionar:

```bash
# Reset completo
rm -rf node_modules .vite dist package-lock.json
npm cache clean --force
npm install
npm run dev
```

Se persistir, abra uma issue no GitHub com:
- Versão do Node.js (`node -v`)
- Versão do npm (`npm -v`)
- Mensagem de erro completa
- Resultado de `npm run lint`

---

## 💡 Dicas Úteis

1. **Manter npm atualizado:**
   ```bash
   npm install -g npm@latest
   ```

2. **Usar nvm para gerenciar Node versions:**
   ```bash
   nvm install 20
   nvm use 20
   ```

3. **Debugar com Node inspector:**
   ```bash
   node --inspect node_modules/.bin/vite
   ```

4. **Log detalhado:**
   ```bash
   npm run dev -- --debug
   ```

---

**Última atualização:** 19 de Março de 2026
**Status:** ✅ Sistema testado e validado
