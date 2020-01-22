FROM php:7.3-apache

RUN apt-get -y update
RUN docker-php-ext-install pdo_mysql
RUN apt-get install net-tools -y
RUN apt-get install vim -y
RUN apt-get install bind9 -y
RUN apt-get install iproute2 -y
RUN apt-get install iputils-ping -y
RUN apt-get install sudo -y
RUN echo "www-data ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers