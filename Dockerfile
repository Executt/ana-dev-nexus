# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código da aplicação
COPY . .

# Expor porta (ajuste conforme sua aplicação)
EXPOSE 3000

# Comando para iniciar (ajuste conforme necessário)
CMD ["npm", "start"]
