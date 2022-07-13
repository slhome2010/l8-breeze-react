# l8-breeze-react
Laravel React auth test

Create your app directory

composer create-project --prefer-dist laravel/laravel backend "8.*"

Ater copy .env from other project we needs
php artisan key:generate

composer require laravel/breeze --dev

Create database with .env DB_DATABASE=l8-breeze-react with utfmb4 
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

php artisan migrate

php artisan serve

php artisan breeze:install react

? Change 'resources/js/app.js' to 'resources/js/app.jsx' in 

npm install
npm run dev