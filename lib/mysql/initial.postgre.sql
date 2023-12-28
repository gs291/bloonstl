DROP TABLE IF EXISTS TowerStats;
DROP TABLE IF EXISTS TowerTiersInfo;
DROP TABLE IF EXISTS AbilityTiersInfo;
DROP TABLE IF EXISTS TowerTiers;
DROP TABLE IF EXISTS AbilityTiers;
DROP TABLE IF EXISTS Abilities;
DROP TABLE IF EXISTS Towers;
DROP TABLE IF EXISTS Monkeys;
DROP TABLE IF EXISTS Heroes;
DROP TABLE IF EXISTS Bloon;
DROP TABLE IF EXISTS Boss;

CREATE TABLE Monkeys (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    name VARCHAR(31) NOT NULL,
    type VARCHAR(31) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cost_gold INT NOT NULL,
    filename VARCHAR(31) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE Heroes (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    name VARCHAR(31) NOT NULL,
    type VARCHAR(31) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cost_gold INT NOT NULL,
    cost_cash INT NOT NULL,
    filename VARCHAR(31) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE Bloon (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    varName VARCHAR(31) NOT NULL,
    name VARCHAR(31) NOT NULL,
    rbe INT NOT NULL,
    hp INT NOT NULL,
    speed DECIMAL(9,6) NOT NULL,
    immune VARCHAR(255) NOT NULL,
    children VARCHAR(255) NOT NULL,
    parent VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE Boss (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    varName VARCHAR(31) NOT NULL,
    name VARCHAR(63) NOT NULL,
    rbe VARCHAR(127) NOT NULL,
    hp VARCHAR(127) NULL DEFAULT NULL,
    speed VARCHAR(127) NULL DEFAULT NULL,
    immune VARCHAR(127) NULL DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Towers (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    hero_id INT DEFAULT NULL,
    monkey_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT twr_fk_1 FOREIGN KEY (hero_id) REFERENCES Heroes (id) ON DELETE CASCADE,
    CONSTRAINT twr_fk_2 FOREIGN KEY (monkey_id) REFERENCES Monkeys (id) ON DELETE CASCADE
);

CREATE TABLE Abilities (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tower_id INT NOT NULL,
    active BOOLEAN NOT NULL,
    upgrade_path SMALLINT NOT NULL,
    upgrade_tier SMALLINT NOt NULL,
    name VARCHAR(31) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cost_gold INT NOT NULL,
    cost_xp INT NOT NULL,
    modifiers VARCHAR(1532) NULL DEFAULT '', -- (2^9 - 1) + (2^8 - 1) - (2 byte length)
    pros VARCHAR(255) NULL DEFAULT '',
    cons VARCHAR(255) NULL DEFAULT '',
    PRIMARY KEY (id),
    CONSTRAINT ab_fk_1 FOREIGN KEY (tower_id) REFERENCES Towers (id) ON DELETE CASCADE
);

CREATE TABLE TowerTiers (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tower_id INT NOT NULL,
    tier VARCHAR(1) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT twr_rnk_fk_1 FOREIGN KEY (tower_id) REFERENCES Towers (id) ON DELETE CASCADE
);

CREATE TABLE AbilityTiers (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tower_id INT NOT NULL,
    tier VARCHAR(1) NOT NULL,
    top_path SMALLINT NOT NULL,
    middle_path SMALLINT NOT NULL,
    bottom_path SMALLINT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT ab_rnk_fk_1 FOREIGN KEY (tower_id) REFERENCES Towers (id) ON DELETE CASCADE
);

CREATE TABLE AbilityTiersInfo (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tier_id INT NOT NULL,
    pros VARCHAR(255) NOT NULL,
    cons VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT ab_rnk_ifo_fk_1 FOREIGN KEY (tier_id) REFERENCES AbilityTiers (id) ON DELETE CASCADE
);

CREATE TABLE TowerTiersInfo (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tower_id INT NOT NULL,
    pros VARCHAR(255) NOT NULL,
    cons VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT twr_rnk_ifo_fk_1 FOREIGN KEY (tower_id) REFERENCES Towers (id) ON DELETE CASCADE
);

CREATE TABLE TowerStats (
    id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
    tower_id INT NOT NULL,
    range DECIMAL(14,4) NOT NULL,
    pierce INT NOT NULL,
    damage INT NOT NULL,
    boss_damage INT NULL DEFAULT 0,
    camo_damage INT NULL DEFAULT 0,
    crit_damage INT NULL DEFAULT 0,
    stun_damage INT NULL DEFAULT 0,
    status_damage INT NULL DEFAULT 0,
    moab_damage INT NULL DEFAULT 0,
    fortified_moab_damage INT NULL DEFAULT 0,
    ceramic_damage INT NULL DEFAULT 0,
    fortified_damage INT NULL DEFAULT 0,
    lead_damage INT NULL DEFAULT 0,
    fortified_lead_damage INT NULL DEFAULT 0,
    projectile_count INT NULL DEFAULT 1,
    attack_speed DECIMAL(9,6) NOT NULL,
    income INT NULL DEFAULT 0,
    cost INT NULL DEFAULT 0,
    duration INT NULL DEFAULT 0,
    note VARCHAR(510) NULL DEFAULT '',
    footprint INT NOT NULL,
    hotkey VARCHAR(32) NOT NULL,
    damage_type VARCHAR(31) NOT NULL,
    cooldown INT NULL DEFAULT 0,
    crit_occurance VARCHAR(7) NULL DEFAULT '0~0',
    delay INT NULL DEFAULT 0,
    PRIMARY KEY (id),
    CONSTRAINT twr_stats_fk_1 FOREIGN KEY (tower_id) REFERENCES Towers (id) ON DELETE CASCADE
);