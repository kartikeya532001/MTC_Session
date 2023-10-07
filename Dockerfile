FROM node:16.14.2-alpine3.15        

WORKDIR aap

COPY . .

RUN npm cache clean -f
RUN npm i 
RUN npm install react-dom@5.3.3
RUN npm i node-sass
RUN i framer-motion
RUN npm i react-dotenv
RUN rebuild node-sass

EXPOSE 3000

CMD ["npm","start"]