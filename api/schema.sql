DROP DATABASE IF EXISTS `projeto`;
CREATE DATABASE `dashboard`;
USE `dashboard`;

DROP TABLE IF EXISTS `servicos`;
CREATE TABLE `ligaservicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `servicos`;
CREATE TABLE `desligaservicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
);