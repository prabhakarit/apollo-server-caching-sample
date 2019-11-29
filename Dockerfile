FROM node:10.16-alpine as intr-build
WORKDIR /app

ARG BEFFE_URL

COPY package.json /app/package.json
RUN npm install
# RUN npm install react-scripts@3.0.1 -g
COPY ./ /app/
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=intr-build /app/dist /var/www/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

