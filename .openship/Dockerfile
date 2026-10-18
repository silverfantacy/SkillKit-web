# syntax=docker/dockerfile:1
FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY . .
RUN npm run build
FROM caddy:2-alpine
COPY --from=builder /app/dist /srv
COPY .openship/Caddyfile /etc/caddy/Caddyfile
EXPOSE 8080
