-- MySQL bloonstl initial.sql
-- Gregory Sanchez

DROP TABLE IF EXISTS Abilities;
DROP TABLE IF EXISTS Towers;
DROP TABLE IF EXISTS Monkeys;
DROP TABLE IF EXISTS Heroes;

CREATE TABLE `Monkeys` (
                           `id` INT(11) AUTO_INCREMENT NOT NULL,
                           `name` VARCHAR(31) NOT NULL,
                           `description` VARCHAR(255) NOT NULL,
                           `cost_gold` INT(11) NOT NULL,
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
                             `path` TINYINT(1) NOT NULL,
                             `tier` TINYINT(2) NOt NULL,
                             `name` VARCHAR(31) NOT NULL,
                             `description` VARCHAR(255) NOT NULL,
                             `cost_gold` MEDIUMINT(6) NOT NULL,
                             `cost_xp` MEDIUMINT(6) NOT NULL,
                             PRIMARY KEY (`id`),
                             CONSTRAINT `ab_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Monkeys` VALUES (1,
                              'Dart Monkey',
                              'Throws a single dart at nearby bloons. Short range and low peirce but cheap.',
                              170 );

INSERT INTO `Heroes` VALUES (1,
                             'Quincy',
                             'Archer',
                             'Proud, strong and intelligent, Quincy uses his bow to perform feats of amazing skill.',
                             540,
                             0);

INSERT INTO `Towers` VALUES (1, 1, NULL); -- Add Quincy into Towers
INSERT INTO `Towers` VALUES (2, NULL, 1); -- Add Dart Monkey into Towers

INSERT INTO `Abilities` VALUES (1,  -- Add Sharp Shots Dart Monkey Ability
                                2,
                                0,
                                0,
                                'Sharp Shots',
                                'Can pop 1 extra Bloon per shot.',
                                140,
                                100);

INSERT INTO `Abilities` VALUES (2,  -- Add Quick Shots Dart Monkey Ability
                                2,
                                1,
                                0,
                                'Quick Shots',
                                'Shoots 15% faster.',
                                140,
                                100);

INSERT INTO `Abilities` VALUES (3,  -- Add Long Range Darts Dart Monkey Ability
                                2,
                                2,
                                0,
                                'Long Range Darts',
                                'Makes the Dart Monkey shoot furter than normal.',
                                90,
                                100);

INSERT INTO `Abilities` VALUES (4,  -- Add Level 1 Quincy Ability
                                1,
                                0,
                                0,
                                '',
                                'Quincy\'s arrows bounce up to 3 different targets.',
                                0,
                                0);
