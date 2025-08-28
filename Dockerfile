# Dockerfile para Procura-se Desaparecido
# Imagem base oficial do Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Build da aplicação para produção
RUN npm run build

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando para iniciar o servidor de preview do Vite
CMD ["npm", "run", "preview", "--", "--host"]
