# Kids Video Arcade Web UI
* The front end interface for Kids Video Arcade project. 
* If you want to have full control of the UI, host this locally.
* laravel + mysql + react

## **Installation**

* `cp .env.example .env`
* `npm install`
* `composer install`
* Generate APP_KEY in .env: `php artisan key:generate`
* Create database "kids_video_arcade" in MySQL
* Add MySQL password for DB_PASSWORD in .env file
* Create table: `php artisan migrate:fresh`
* Insert some test data: `php artisan db:seed`
* Build: `npm run dev`
* Start the server `php artisan serve --host 127.0.0.1` (change the host ip to your subnet IP (such as, 192.168.1.126), so that you can access it from other computers)
* Note: Click and back button are disabled on some of the pages in purpose.

## **EXTRA: Environment Setup on Ubuntu**

# install mysql + php

install mysql

`sudo apt-get install mysql-server`

change user 'root' password

`sudo mysql`

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your password';`

create database

`CREATE DATABASE kids_video_arcade;`

`exit;`

`sudo service mysql stop`

`sudo service mysql start`

install php

`sudo apt-get install php`

`sudo apt-get install php-{bcmath,bz2,intl,gd,mbstring,mysql,zip,fpm,dom,gmp,curl}`

disable apache

`sudo update-rc.d apache2 disable`

# install composer (php library management)

get first two lines of command from https://getcomposer.org/download/, because they are unique

the 3rd command is

`sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer`

remove composer-setup.php after

# install laravel

`sudo composer global require laravel/installer`

add laravel to path

`sudo nano ~/.bashrc`

add this line in the file `export PATH="~/.composer/vendor/bin:$PATH"`

`source ~/.bashrc`

# install npm

`sudo apt install nodejs npm`