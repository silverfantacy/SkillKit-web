# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY . .
RUN npm run build
FROM nginx:alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /srv
COPY .openship/nginx.conf /etc/nginx/conf.d/app.conf
EXPOSE 8080
