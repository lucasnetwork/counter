FROM node:20 AS build

WORKDIR /app

COPY . .
RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build


FROM nginx:1.27.4


COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]