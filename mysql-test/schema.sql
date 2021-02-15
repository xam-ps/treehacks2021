create schema socialshazam;
use socialshazam;

CREATE TABLE `socialshazam`.`Songs` (
  `Id` VARCHAR(255) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `artist` VARCHAR(45) NOT NULL,
  `album` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `index2` (`title` ASC) VISIBLE);


CREATE TABLE `socialshazam`.`discoveredSongs` (
  `songId` VARCHAR(255) NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  `timestamp` DATE NULL,
  PRIMARY KEY (`songId`, `userEmail`),
  INDEX `index2` (`songId` ASC) VISIBLE,
  INDEX `index3` (`userEmail` ASC) VISIBLE,
  CONSTRAINT `song_id`
    FOREIGN KEY (`songId`)
    REFERENCES `socialshazam`.`Songs` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `socialshazam`.`Groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `groupName` VARCHAR(50) NULL,
  `userEmail` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `index2` (`groupName` ASC) VISIBLE,
  INDEX `index3` (`userEmail` ASC) VISIBLE);


CREATE TABLE `socialshazam`.`usersInGroup` (
  `groupId` INT NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  INDEX `index1` (`groupId` ASC) VISIBLE,
  CONSTRAINT `group_id`
    FOREIGN KEY (`groupId`)
    REFERENCES `socialshazam`.`Groups` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);