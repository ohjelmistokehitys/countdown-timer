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


FROM nginx AS production
COPY --from=build /app/dist /usr/share/nginx/html
