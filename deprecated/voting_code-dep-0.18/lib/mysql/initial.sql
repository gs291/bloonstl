-- MySQL bloonstl initial.sql
-- Gregory Sanchez

DROP TABLE IF EXISTS TowerVotes;

CREATE TABLE `TowerVotes` (
    `id` INT(11) AUTO_INCREMENT NOT NULL,
    `tower_id` INT(11) NOT NULL,
    `tower_tier` VARCHAR(1) NOT NULL,
    `ability_tier` VARCHAR(1),
    `ability_top` TINYINT(1),
    `ability_middle` TINYINT(1),
    `ability_bottom` TINYINT(1),
    `pros` VARCHAR(255),
    `cons` VARCHAR(255),
    PRIMARY KEY (`id`),
    CONSTRAINT `v_t_fk_1` FOREIGN KEY (`tower_id`) REFERENCES `Towers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
