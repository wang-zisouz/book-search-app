From node
WORKDIR /xiaosi
# RUN yarn global add @angular/cli
COPY book-search-app/package.json book-search-app/package-lock.json  ./
COPY book-search-app ./
RUN yarn install
EXPOSE 4200
CMD ["npx","ng","serve","--host","0.0.0.0"]
