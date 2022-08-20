<<<<<<< HEAD
# student
Student Details
=======
## Deploying instruction:

* Clone the Repository
* Switch to master branch
* Install latest & necessary softwares like Node js 18.0, npm, postgres 12 above
* Create a Database with username and password
* Create new .env file, copy .env.example content there, replace DB_DATABASE, DB_USERNAME, DB_PASSWORD to your database credentials
* After setting up environment
* Run from Console:
```
npm i
sudo chmod 777 -R *your_folder*
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start
```
## Swagger Documentation

 * After Deploying you can check swagger documentation in `http://localhost:8000/api-docs/` and can test all the api here.
 * Sample Csv file will be in `src/uploads` folder of your project directory
>>>>>>> master
