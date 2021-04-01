-- MySQL bloonstl initial.sql
-- Gregory Sanchez

DROP TABLE IF EXISTS Abilities;
DROP TABLE IF EXISTS Towers;
DROP TABLE IF EXISTS Monkeys;
DROP TABLE IF EXISTS Heroes;
DROP TABLE IF EXISTS TowerRanks;
DROP TABLE IF EXISTS AbilityRanks;

CREATE TABLE `Monkeys` (
                           `id` INT(11) AUTO_INCREMENT NOT NULL,
                           `name` VARCHAR(31) NOT NULL,
                           `type` VARCHAR(31) NOT NULL,
                           `description` VARCHAR(255) NOT NULL,
                           `cost_gold` INT(11) NOT NULL,
                           `filename` VARCHAR(31) NOT NULL,
                           PRIMARY KEY (`id`),
                           UNIQUE KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Heroes` (
                          `id` INT(11) AUTO_INCREMENT NOT NULL,
                          `name` VARCHAR(31) NOT NULL,
                          `type` VARCHAR(31) NOT NULL,
                          `description` VARCHAR(255) NOT NULL,
                          `cost_gold` INT(11) NOT NULL,
                          `cost_cash` INT(11) NOT NULL,
                          `filename` VARCHAR(31) NOT NULL,
                          PRIMARY KEY (`id`),
                          UNIQUE KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Towers` (
                          `id` INT(11) AUTO_INCREMENT NOT NULL,
                          `hero_id` INT(11) DEFAULT NULL,
                          `monkey_id` INT(11) DEFAULT NULL,
                          PRIMARY KEY (`id`),
                          CONSTRAINT `twr_fk_1` FOREIGN KEY (`hero_id`) REFERENCES `Heroes` (`id`) ON DELETE CASCADE,
                          CONSTRAINT `twr_fk_2` FOREIGN KEY (`monkey_id`) REFERENCES `Monkeys` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Abilities` (
                             `id` INT(11) AUTO_INCREMENT NOT NULL,
                             `tower_id` INT(11) NOT NULL,
                             `active` BOOLEAN NOT NULL,
                             `upgrade_path` TINYINT(1) NOT NULL,
                             `upgrade_tier` TINYINT(2) NOt NULL,
                             `name` VARCHAR(31) NOT NULL,
                             `description` VARCHAR(255) NOT NULL,
                             `cost_gold` MEDIUMINT(6) NOT NULL,
                             `cost_xp` MEDIUMINT(6) NOT NULL,
                             PRIMARY KEY (`id`),
                             CONSTRAINT `ab_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `TowerRanks` (
                             `id` INT(11) AUTO_INCREMENT NOT NULL,
                             `tower_id` INT(11) NOT NULL,
                             `tier` VARCHAR(1) NOT NULL,
                             `votes` INT(11) NOT NULL,
                             PRIMARY KEY (`id`),
                             CONSTRAINT `twr_rnk_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `AbilityRanks` (
                         `id` INT(11) AUTO_INCREMENT NOT NULL,
                         `tower_id` INT(11) NOT NULL,
                         `tier` VARCHAR(1) NOT NULL,
                         `top_path` TINYINT(1) NOT NULL,
                         `middle_path` TINYINT(1) NOT NULL,
                         `bottom_path` TINYINT(1) NOT NULL,
                         `votes` INT(11) NOT NULL,
                         PRIMARY KEY (`id`),
                         CONSTRAINT `ab_rnk_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;