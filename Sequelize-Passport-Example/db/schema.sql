DROP DATABASE IF EXISTS fitness_trackerdb;
create database fitness_trackerdb;
use fitness_trackerdb;
DROP TABLE IF EXISTS `User`;
CREATE TABLE IF NOT EXISTS `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) NOT NULL,
  `password` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `UserInfo`;
CREATE TABLE IF NOT EXISTS `UserInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) DEFAULT NULL,
  `firstName` varchar(30) DEFAULT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `weight` decimal(5, 2) DEFAULT NULL,
  `dateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
DROP TABLE IF EXISTS `activityData`;
CREATE TABLE IF NOT EXISTS `activityData` (
  `dataId` int(11) NOT NULL AUTO_INCREMENT,
  `activityType` varchar(30) default null,
  `time` int(11) DEFAULT NULL,
  `distance` decimal(5, 2) DEFAULT NULL,
  `dateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dataId`),
  FOREIGN KEY (`id`) REFERENCES `User`(id)
);