FROM node:latest
WORKDIR /app
ADD package.json .
RUN npm install
ADD . .
EXPOSE 3000
CMD ["node", "src/index.js"]
