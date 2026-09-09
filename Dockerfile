FROM node:24 AS base

WORKDIR /app

COPY package* .

RUN npm ci --ignore-scripts

COPY . /app

RUN chown -R node:node .

USER node


FROM base AS dev

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]


FROM base AS builder

RUN npm run build



FROM nginx AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

