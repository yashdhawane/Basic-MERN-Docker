FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npx prisma generate
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "dev:docker"]