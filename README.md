# node-beginner-tutorial
Learn First Node 

> This is simple Node.js project for learning the basic code, or learning to use popular dependencies provided as needed

## Build Setup

```bash
# install dependencies
Use `npm install` for install all dependencies

# serve with hot reload at localhost:8000
$ npm run dev
```

This project using Sequelize v5 as ORM. So before start please follow these steps:

```bash
# install Sequelize CLI (if you don't have)
$ npm install -g sequelize-cli

# run all migrations for create table
$ sequelize db:migrate

# run seeders for insert dummy data into table
$ sequelize db:seed:all

For more documentation, you can check this source: https://sequelize.org/v5/manual/migrations.html 
```

Source : 
1. http://mfikri.com/artikel/tutorial-nodejs
2. https://sequelize.org/v5/manual/migrations.html
3. https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0
