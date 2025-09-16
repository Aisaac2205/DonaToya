# Dockerfile para Vite + React en Railway
FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile
COPY . .
RUN npm run build || yarn build

FROM node:20-alpine as prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json* ./
RUN npm install --production --frozen-lockfile || yarn install --production --frozen-lockfile
EXPOSE 8080
CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
