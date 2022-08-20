<<<<<<< HEAD
# student
Student Details
=======
## Deploying instruction:

* Clone the Repository
* Install necessary softwares like Node js, npm, postgres
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

 * After Deploying you can check swagger documentation in `http://localhost:8000/api-docs/` 
 * Sample Csv file will be in `src/uploads` folder of your project directory
>>>>>>> master
