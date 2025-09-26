FROM node:latest AS build

WORKDIR /app


# user related stuff
RUN adduser appuser
RUN chown appuser /app
USER appuser

# dependency related stuff
COPY --chown=appuser package*.json ./
RUN npm install

# our own app related stuff
COPY --chown=appuser . .

RUN npm run build



# our production build, that uses nginx base image
FROM nginxinc/nginx-unprivileged AS production
COPY --from=build /app/dist /usr/share/nginx/html
