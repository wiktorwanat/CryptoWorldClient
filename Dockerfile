FROM nginx:1.19.7-alpine
EXPOSE 8000
COPY /dist/CryptoWorldClient /usr/share/nginx/html