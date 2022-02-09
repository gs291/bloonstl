-- Monkeys (id, name, type, description, cost_gold
-- Heroes (id, name, type, description, cost_gold, cost_cash
-- Towers (id, hero_id, monkey_id)
-- Abilities (id, tower_id, upgrade_path, upgrade_tier, name, description, cost_gold, cost_xp

-- MONKEYS --

--      Monkey - Dart Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Dart Monkey', 'Primary', 'Throws a single dart at nearby bloons. Short range and low peirce but cheap.', 200, 'dart-monkey.png');

SELECT id INTO @dart_monkey FROM Monkeys WHERE name='Dart Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @dart_monkey);
SELECT id INTO @tower_dart_monkey FROM Towers WHERE monkey_id=@dart_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_dart_monkey, 'c');

--          Statistics      --  (  id,           tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_dart_monkey, 32, 2, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.95, DEFAULT, DEFAULT, NULL,  6, 'Q', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 0, 'Sharp Shots', 'Can pop 1 extra Bloon per shot.', 140, 100, '+1p,cross:105:+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 1, 'Razor Sharp Shots', 'Can pop 2 more Bloons per shot.', 220, 500, '+2p,cross:205:+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 2, 'Spike-O-Pult', 'Converts the Dart Monkey into a Spike-o-pult that hurls a large spiked ball instead of darts. Good range, but slower attack speed. Each ball can pop lots of Bloons and rebounds off obstacles.', 300, 1900, '+1cd,+17p,1.15s,type:shatter,note:(3-0-0) Can rebound off walls', 'frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 3, 'Juggernaut', 'Hurls a giant spiked ball that pops lead and excels at crushing Ceramic Bloons.', 1800, 7500, '+1d,+2cd,+28p,+4.8r,1.0s,type:normal', 'lead,reb', 'atksp');
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 4, 'Ultra-Juggernaut', 'Gigantic spiked ball splits twice into 6 Juggernaut balls for even more destructive power.', 15000, 22000, '+3d,+6cd,+150p,type:normal,note:(5-0-0) Can rehit bloons after rebounding,attack:juggernauts:|1d;|2cd;|6j;|100p;type:|normal;desc:Two juggernauts spawn. One at 50% pierce and another at 100% pierce,note:(5-0-0) both sets of juggernauts can also be emitted by the projectile expiring', 'rehit', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 0, 'Quick Shots', 'Shoots 15% faster.', 100, 80, '*85%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 1, 'Very Quick Shots', 'Shoots 33% faster!', 190, 400, '*78.82%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 2, 'Triple Shot', 'Throws 3 darts at a time instead of 1.', 400, 2000, '+2j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, true, 1, 3, 'Super Monkey Fan Club', 'Super Monkey Fan Club ability: Converts up to 10 nearby Dart Monkeys including himself into Super Monkeys for 15 seconds. Regular attack speed also increased.', 8000, 9500, '*75%s,abil:fan_club:|50clt;|15dur;desc:Transform monkeys into superfans;attack:superfans:|1d=|2p=|40r=|0.06s=type:|sharp=desc:Transformed Dart Monkey;note:(0-4-0) Transforms 10 nearest dart monkeys (with upgrades up to 2-4-2) into superfans', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, true, 1, 4, 'Plasma Monkey Fan Club', 'Elite membership of this club grants the Dart Monkeys even more power!', 50000, 30000, 'abil:fan_club-plasma_club:50clt;15dur;attack:superfans-plasmafans:2d=5p=40r=0.03s=type:plasma;note:(0-5-0) transforms 20 nearest dart monkeys (with upgrades up to 2-5-2) into plasmafans;note:(0-5-0) upgrades such as 1-X-X are inherited', DEFAULT, 'chep');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 0, 'Long Range Darts', 'Makes the Dart Monkey shoot further than normal.', 90, 100, '+8r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 1, 'Enhanced Eyesight', 'Shoots even further and can detect Camo Bloons.', 200, 450, '+8r,+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 2, 'Crossbow', 'Uses a long range Crossbow that can pop 3 layers of Bloon for every hit.', 625, 2100, '+2d,+1p,+8r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 3, 'Sharp Shooter', 'Sharp Shooter does powerful Crit Shots every few seconds that do a lot more damage.', 2000, 12000, '+3d,0.75s,50dc,8~12co', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 4, 'Crossbow Master', 'Crossbow Master shoots really fast and devastates most Bloon types with ease.', 23500, 35000, '+7p,+20r,0.16s,type:normal,4~8co', 'atksp,lead,frzn', DEFAULT);

--          Paragon
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 3, 0, 'Apex Plasma Master', 'Fill the area with Bloon shredding plasma juggernaut balls, leaving nothing behind...', 350000, 500000, '+camo,20d,30cd,80bd,3j,200p,85r,0.3s,type:normal,attack:juggernauts:|20d;|30cd;|80bd;|6j;|200p;type:|normal;desc:Spawned at 50% pierce and 100% pierce from basic attack', 'camo,dps,blimp,bln', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 's', 0, 2, 3);
SELECT id INTO @ability_tiers_dart_monkey_s FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_s, 'eg,camo,chep', 'lg');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 'a', 0, 3, 2);
SELECT id INTO @ability_tiers_dart_monkey_a_0 FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='a' AND middle_path=3;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_a_0, 'eg,camo,chep', 'lg');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 'a', 5, 5, 5);
SELECT id INTO @ability_tiers_dart_monkey_a_1 FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='a' AND top_path=5 AND middle_path=5 AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_a_1, 'lg,camo,dps', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 'b', 0, 2, 5);
SELECT id INTO @ability_tiers_dart_monkey_b FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_b, 'atksp,camo,eg,mg', 'blimp');


--      Monkey - Boomerang Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Boomerang Monkey', 'Primary', 'Hurls a boomerang that follows a curved path. Good range and pierce', 325, 'boomerang-monkey.png');
SELECT id INTO @boomerang_monkey FROM Monkeys WHERE name='Boomerang Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @boomerang_monkey);
SELECT id INTO @tower_boomerang_monkey FROM Towers WHERE monkey_id=@boomerang_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_boomerang_monkey, 'b');


--          Statistics      --  (  id,                tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_boomerang_monkey, 43, 4, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.2, DEFAULT, DEFAULT, NULL,  7, 'W', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 0, 'Improved Rangs', 'Can pop up to 8 Bloons per throw.', 200, 100, '+4p,cross:104:attack:press:+100p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 1, 'Glaives', 'Throws sharper and faster glaives instead of boomerangs.', 280, 520, '+5p,cross:204:attack:press:+120p=note:(2-0-4) +50% knockback distance,cross:205:attack:press:attack:press_explosion:-10p@+25r@*85%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 2, 'Glaive Ricochet', 'Glaives will bounce from Bloon to Bloon automatically and aggressively.', 1300, 2500, '+37p,note:(3-0-0) Basic attack jumps to a nearby target after hitting (62.5 units)', 'jump', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 3, 'M.O.A.R Glaives', 'Mulitple Object Advanced Ricochet greatly enhances the already extraordinary powers of the Glaive Ricochet Monkey.', 3000, 8500, '+50p,*50%s,note:(4-0-0) Basic attack jumps to a nearby target after hitting (187.5 units)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 4, 'Glaive Lord', 'Glaive Lord surrounds itself in 3 special glaives that shred anything that comes near. Glaive Lord\'s glaived now rip through MOAB-class Bloons, slowly tearing them apart from the inside.', 35000, 37500, '+7d,status:shred:|100md;|1s;|15.1dur;desc:First hit of basic attack applies shred status,attack:orbital_glaive:|2d;|5cd;|5md;|2fd;|1000p;|30r;|0.1s;type:|sharp;+camo;desc:Extra attack gained from 5-0-0', 'dps,mg', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 0, 'Faster Throwing', 'Throws boomerangs faster.', 175, 120, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 1, 'Faster Rangs', 'Boomerangs fire and travel faster.', 250, 550, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 2, 'Bionic Boomerang', 'Replaces arm with a strong bionic arm that can throw boomerangs extremely fast and does extra damage to MOAB-class bloons', 1450, 2500, '+2md,0.238s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, true, 1, 3, 'Turbo Charge', 'Makes this Monkey attack incredibly fast for 10 seconds.', 4200, 9000, 'abil:turbo_charge:|45clt;|10dur;|1d;|0.034s;desc:Buffs tower damage and increases attack speed to', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, true, 1, 4, 'Perma Charge', 'Perma Charge has a permanent super fast attack speed. Ability increases the lethality even more.', 35000, 32000, '+3d,0.034s,abil:turbo_charge-permacharge:40clt;15dur;+8d', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 0, 'Long Range Rangs', 'Can throw boomerangs further than normal.', 100, 110, '+6.45r,cross:501:attack:orbital_glaive:+4.5r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 1, 'Red Hot Rangs', 'Allows boomerangs to pop Frozen and Lead Bloons and do more damage to all.', 300, 490, '+1d,cross:502:attack:orbital_glaive:+1d=type:normal,type:normal,cross:052:+4d;abil:permacharge:+2d', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 2, 'Kylie Boomerang', 'Throws heavy Kylie boomerangs that follow a straight path instead of curved.', 1300, 3000, '+14p,type:normal,note:(0-0-3) Can rehit bloons after 0.3s', 'rehit', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 3, 'MOAB Press', 'Heavy Kylie boomerang hits MOAB-Class Bloons multiple times per throw and sometimes knocks them back a short way along the path.', 2200, 9500, 'attack:press:|1d;|4md;|200p;|49.45r;|10s;type:|normal;note:(0-0-4) Can rehit bloons after 0.1s;note:(0-0-4) Knocks back blimps;-bad;desc:Extra attacked gained by 0-0-4', 'kb', 'bad');
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 4, 'MOAB Domination', 'Special knockback kylies trigger more often and do lots of extra damage.', 50000, 28000, '+10d,*50%s,attack:press:+20md;+100p;+50.55r;*50%s;+bad;attack:press_explosion:desc:Deals damage after attack press expires or 100% pierce=|100d=|40p=|50r=type:|normal=status:burn:desc:Burn applied by explosion@|50d@|1s@|4dur', 'bad,blimp,vis,stnb', DEFAULT);

--          Paragon
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 3, 0, 'Glaive Dominus', 'The Bloons will look upon my Glaives, and they will know fear.', 350000, 500000, '+camo,20d,60bd,100p,75r,0.04s,type:normal,status:shred:desc:Applied by first basic attack hit;|750md;|1s;|15.1dur,attack:orbital_glaive:desc:Extra paragon attack;|42d;|20cd;|20md;|2fd;|160bd;|1000p;|60r;|0.1s;type:|normal,attack:press:desc:Extra paragon attack;|1d;|19md;|300p;|100r;|2.5s;type:|normal;-bln;+blimp;note:Can only target blimps;note:knocks back blimps;status:stun:desc:Stun applied by press=|0.25dur;attack:press_explosion:desc:Explode on expire or 100% pierce=|2500d=|5000bd=|20p=|50r=type:|normal=status:burn:desc:Applied after explosion@|500d@|1s@|4dur', 'dps,solo,jump,rehit,cc,kb,blimp,bln,camo,lg', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 's', 2, 5, 0);
SELECT id INTO @ability_tiers_boomerang_monkey_s FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_s, 'blnc,blimp,dps,abil', 'trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 'a', 5, 0, 2);
SELECT id INTO @ability_tiers_boomerang_monkey_a_0 FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='a' AND top_path=5 AND bottom_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_a_0, 'blimp,frzn,lead,dps', 'fbl');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 'a', 5, 5, 5);
SELECT id INTO @ability_tiers_boomerang_monkey_a_1 FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='a' AND top_path=5 AND middle_path=5 AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_a_1, 'lg,camo,dps', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 'b', 0, 2, 5);
SELECT id INTO @ability_tiers_boomerang_monkey_b FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_b, 'camo,blimp,kb', 'chep,trkp');


--      Monkey - Bomb Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Bomb Shooter', 'Primary', 'Launches a powerful bomb at the Bloons. Slow rate of fire but affects a radius around the explosion', 525, 'bomb-shooter.png');
SELECT id INTO @bomb_shooter FROM Monkeys WHERE name='Bomb Shooter';
INSERT INTO `Towers` VALUES (NULL, NULL, @bomb_shooter);
SELECT id INTO @tower_bomb_shooter FROM Towers WHERE monkey_id=@bomb_shooter;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_bomb_shooter, 's');

--          Statistics      --  (  id,            tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,          dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_bomb_shooter, 40, 14, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.5, DEFAULT, DEFAULT, NULL,  7, 'E', 'explosion', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 0, 'Bigger Bombs', 'Shoots larger bombs, they have a larger blast area and more popping power.', 350, 200, '+6p,cross:104:attack:supercluster:+6p;attack:subcluster:+36p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 1, 'Heavy Bombs', 'Heavy duty bombs can smash through 2 layers of Bloon at once.', 650, 1000, '+1d,+10p,cross:204:attack:supercluster:+10p=+1d;attack:subcluster:+60p=+1d;attack:superbomb:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 2, 'Really Big Bombs', 'Huge bombs deal greater damage in a large area and allow Frags to pop more Bloons.', 1200, 3000, '+1d,+20p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 3, 'Bloon Impact', 'Explosions become so violent Bloons are stunned for a short time when they are hit.', 3600, 10000, '+3r,status:stun:|1dur;-blimp;desc:Applied to bloons on basic attack explosion', 'stnb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 4, 'Bloon Crush', 'Bloon shattering explosions do massive damage and can stun MOAB-Class Bloons.', 55000, 37500, '+9d,type:normal,status:stun:2dur;+blimp;desc:Applied to bloons and blimps on basic attack explosion', 'black', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 0, 'Faster Reload', 'Reloads 20% faster.', 250, 180, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 1, 'Missile Launcher', 'Shoots missiles instead of bombs, missiles fly faster with longer range', 400, 640, '*73.33%s,+4r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 2, 'MOAB Mauler', 'MOAB Maulers do much more damage to MOAB-Class Bloons.', 1100, 2700, '+5r,+18md', 'blimp,moab,bfb,zomg', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, true, 1, 3, 'MOAB Assassin', 'Assassinate MOAB ability: Special missile flies out and does massive damage to MOAB-Class Bloons. Regular attack range and MOAB-class damage also increased.', 3200, 10000, '+5r,+3cd,+12md,abil:assassinate:|30clt;|750d;|$1r;desc:Huge damage that targets the strongest blimp;attack:assassinate_explosion:|3d=|100p=|30r=type:|normal=desc:Deals damage after ability contact with blimp', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, true, 1, 4, 'MOAB Eliminator', 'Assassinate ability does 6x damage with a shorter cooldown.', 25000, 35000, '+69md,type:normal,abil:assassinate-eliminate:10clt;4500d', 'zomg,ddt,bad', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 0, 'Extra Range', 'Increases attack range', 200, 150, '+7r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 1, 'Frag Bombs', 'Explosions throw out sharp fragments that can pop more Bloons including Black Bloons.', 300, 600, '+2r,type:normal,attack:frags:|1d;|8j;|1p;type:|sharp;desc:Deals damage on contact,cross:302:attack:frags:+1p,cross:402:attack:frags:+1d,cross:502:attack:frags:+10d=+1p', 'black', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 2, 'Cluster Bombs', 'Throws out secondary bombs instead of sharp fragments every shot.', 800, 2500, 'attack:frags-clusters:1d;8j;10p;15r;type:normal', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 3, 'Recursive Cluster', 'Every second shot the cluster bombs send out more cluster bombs for even more destruction.', 2800, 10000, 'attack:superbomb:|1d;|18p;|12r;type:|normal;desc:Every other bomb replaced by superbomb,attack:supercluster:|1d;|8j;|10p;|15r;type:|normal;desc:Deals damage when superbomb expires,attack:subcluster:|1d;|60p;|34r;type:|normal;desc:Deals damage 0.45 seconds after supercluster explodes;note:visually 8 explosions are shown but it is in fact just one large one', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 4, 'Bomb Blitz', 'Deals much more damage and gains the passive Bomb Storm Ability - when lives are lost, the Bomb Storm automatically triggers which destroys all but the biggest of Bloons.', 35000, 25000, '+4d,attack:superbomb:desc:All bombs replaced by superbombs,abil:bomb_blitz:|40clt;|2000d;|$1p;|$1r;type:|normal;+camo;desc:Passive ability that is triggered on leak;note:destroys anything remaining below BFB', 'abil,supp', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 's', 2, 3, 0);
SELECT id INTO @ability_tiers_bomb_shooter_s_0 FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='s' AND middle_path=3;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_s_0, 'moab,bfb,zomg,chmp,lead,chep', 'spam');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 's', 2, 5, 0);
SELECT id INTO @ability_tiers_bomb_shooter_s_1 FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='s' AND middle_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_s_1, 'zomg,ddt,bad,cm,abil', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 'a', 2, 0, 5);
SELECT id INTO @ability_tiers_bomb_shooter_a FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_a, 'grpb,mg,abil', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 'b', 4, 2, 0);
SELECT id INTO @ability_tiers_bomb_shooter_b FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_b, 'scm,stnb,chep', 'blimp');


--      Monkey - Tack Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Tack Shooter', 'Primary', 'Shoots a short-range volley of sharp tacks in 8 directions.', 280, 'tack-shooter.png');
SELECT id INTO @tack_shooter FROM Monkeys WHERE name='Tack Shooter';
INSERT INTO `Towers` VALUES (NULL, NULL, @tack_shooter);
SELECT id INTO @tower_tack_shooter FROM Towers WHERE monkey_id=@tack_shooter;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_tack_shooter, 'a');

--          Statistics      --  (  id,            tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld, j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_tack_shooter, 23, 1, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 8, 1.4, DEFAULT, DEFAULT, NULL,  6, 'R', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 0, 'Faster Shooting', 'Shoots tacks faster.', 150, 150, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 1, 'Even Faster Shooting', 'Shoots tacks even faster.', 300, 550, '*60%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 2, 'Hot Shots', 'Shoots superhot tacks that do extra damage and can pop Lead Bloons.', 600, 2400, '+1d,type:normal', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 3, 'Ring of Fire', 'Damages many more Bloons with a deadly ring of flame instead of tacks.', 3500, 9500, '+1d,+59p,0.4725s,type:fire,-purp', DEFAULT, 'purp');
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 4, 'Inferno Ring', 'Deadly inferno of flame roasts Bloons into oblivion.', 50000, 32500, '+1d,+6md,+11.5r,0.1s,attack:meteor:|700d;|1p;|$1r;|4.0s;type:|fire;+camo;desc:Attack gained by 5-0-0;note:can see past obstacles;status:burn:|50d=|1s=type:|fire=|4.1dur=desc:Burn applied by meteor attack;attack:meteor_explosion:|50d=|10p=|18r=type:|explosion=-camo=desc:Deals damage on meteor contact', 'blimp,atksp', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 0, 'Long Range Tacks', 'Tacks fly out further than normal.', 100, 140, '+4r,cross:410:+10p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 1, 'Super Range Tacks', 'Even longer range tacks that can pop more Bloons.', 225, 500, '+1p,+4r,cross:420:+9p,cross:520:attack:meteor:+1p,cross:025:+5p;+12r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 2, 'Blade Shooter', 'Switches tacks for sharp blades that can pop up to 5 additional Bloons.', 550, 2300, '+4p,1.19s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, true, 1, 3, 'Blade Maelstrom', 'Blade Maelstrom ability: Covers the area in a storm of blades.', 2700, 9000, 'abil:maelstrom:|20clt;|3dur;|1d;|2j;|200p;|0.0333s;type:|sharp;desc:Large damage spinning blade death', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, true, 1, 4, 'Super Maelstrom', 'Even more powerful Maelstrom ability and lasts longer.', 15000, 28000, '+1d,type:normal,abil:maelstrom-super_maelstrom:9dur;2d;4j;500p;0.0333s;type:normal', 'lead,frzn', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 0, 'More Tacks', 'Shoots 10 tacks instead of 8.', 100, 150, '+2j,cross:401:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 1, 'Even More Tacks', 'Shoots out 12 tacks per shot.', 100, 490, '+2j,cross:402:+1d,cross:502:attack:meteor:+300d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 2, 'Tack Sprayer', 'Sprays out 16 tacks per volley.', 450, 2450, '+4j,*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 3, 'Overdrive', 'Shoots incredibly fast.', 3200, 8750, '+1p,*33.33%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 4, 'The Tack Zone', 'Many, many tacks.', 24000, 26500, '+1d,+16j,+2p,+7r,*75%s', 'dps', DEFAULT);


--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 's', 2, 0, 5);
SELECT id INTO @ability_tiers_tack_shooter_s FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_s, 'dps,chep,blimp', 'camo,trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 'a', 0, 4, 0);
SELECT id INTO @ability_tiers_tack_shooter_a FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_a, 'eg,mg,abil,chep', 'camo,lead,trkp,frzn');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 'b', 5, 0, 2);
SELECT id INTO @ability_tiers_tack_shooter_b FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_b, 'map,lead,dps', 'camo,purp,chep,trkp');


--      Monkey - Ice Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ice Monkey', 'Primary', 'Pops and freezes nearby Bloons for a short time. Frozen Bloons are immune to sharp damage. Can\'t freeze White, Zebra, or Lead Bloons.', 500, 'ice-monkey.png');
SELECT id INTO @ice_monkey FROM Monkeys WHERE name='Ice Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ice_monkey);
SELECT id INTO @tower_ice_monkey FROM Towers WHERE monkey_id=@ice_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ice_monkey, 'a');

--          Statistics      --  (  id,          tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,     dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_ice_monkey, 20, 40, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2.4, DEFAULT, DEFAULT, NULL,  6, 'T', 'cold', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 0, 'Permafrost', 'Bloons move slowly even after thawing out.', 100, 160, 'status:permafrost:|50%slow;desc:50% slow on bloons. 25% slow on blimps (if targetable)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 1, 'Cold Snap', 'Can freeze and pop Lead Bloons.', 250, 500, '+lead,+camo,cross:204:attack:icicles:+lead', 'lead,camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 2, 'Ice Shards', 'Razor sharp shards fly out when Frozen Bloons pop.', 1500, 2500, '+5r,attack:shards:|1d;|3j;|3p;type:|shatter;desc:Emitted when frozen bloons are popped', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 3, 'Embrittlement', 'Detects Camo Bloons and all Bloons hit become brittle, taking extra damage for a short time and losing Camo & Regrow properties permanently.', 2200, 8250, '+camo,+decamo,+degrow,+blimp,status:brittle:|1d;|2dur;desc:Take +1 damage and no damage immunity,attack:shards:+decamo;+degrow', 'degrow,decamo,blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 4, 'Super Brittle', 'Bloons take huge damage while frozen including MOAB-Class Bloons.', 28000, 25000, '*90%s,type:normal,status:brittle:+4d;3dur', 'white,frzn', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 0, 'Enhanced Freeze', 'Attacks faster and freezes for longer.', 225, 160, '*75%s,note:(0-1-0) frozen status duration increased to 2.2 seconds', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 1, 'Deep Freeze', 'Freezes through 2 layers of Bloon.', 350, 500, 'note:(0-2-0) frozen status soaks through 1 layer', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 2, 'Arctic Wind', 'Greatly increases pierce & gains a super cold aura that slows Bloons and freezes water nearby.', 2900, 2500, '+60p,attack:slow:|40%slow;-white;-lead;-blimp;desc:Attack gained by 0-3-0', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 3, 'Snowstorm', 'Freezes all bloons on screen, and briefly freezes white, zebra, camo and MOAB class.', 3000, 8500, '+10r,abil:snowstorm:|30clt;|1d;|$1p;|$1r;+camo;type:|shatter;desc:Freezes all bloons on screen;status:frozen:6dur=note:(0-4-0) applies frozen status (6 seconds duration or 3 seconds for camo/white/blimp)', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 4, 'Absolute Zero', 'Ability is so cold it freezes all regular Bloons for longer, including White, Zebra, and Camo, slows MOAB-class longer, and greatly increases the attack speed of all Ice Monkeys for the duration.', 26000, 27500, '+200p,+10r,+blimp,attack:slow:60%slow,note:(0-5-0) blimps will take damage but cannot be frozen,abil:snowstorm-absolute_zero:20clt;+camo;type:normal;note:all ice towers gain 66.66% attack speed buff for 10 seconds;status:frozen:note:(0-5-0) applies frozen status for 10 seconds', 'blimp', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 0, 'Larger Radius', 'Larger freeze area.', 175, 160, '+7r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 1, 'Re-Freeze', 'Can re-freeze Bloons that are already frozen.', 225, 500, 'type:glacier', 'frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 2, 'Cryo Cannon', 'Shoots freezing bombs at Bloons over longer range.', 1950, 2500, '+1d,+19r,-10p,1s,-blimp,status:frozen:desc:Status applied by basic attack;|1.5dur,note:(0-0-3) Cannot target blimps', DEFAULT, 'blimp');
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 3, 'Icicles', 'Frozen Bloons grow sharp icicles that can pop Bloons that touch them.', 2750, 9000, 'attack:icicles:|2d;|3p;type:|sharp;desc:Icicles attached to frozen bloons', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 4, 'Icicle Impale', 'Shoots huge icicle spikes that do huge damage to MOAB-Class Bloons and freezes them.', 30000, 30000, '+48md,*75%s,type:shatter,+blimp,note:(0-0-5) blimps can be targeted,note:(0-0-5) Frozen ZOMGSs are 50% slower,note:(0-0-5) Other frozen blimps move at ZOMGs\' original speed', 'blimp,white', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 's', 2, 0, 5);
SELECT id INTO @ability_tiers_ice_monkey_s FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_s, 'blimp,solo,cc', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 'a', 5, 0, 2);
SELECT id INTO @ability_tiers_ice_monkey_a FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_a, 'supp,camo,bln,blimp', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 'b', 0, 5, 2);
SELECT id INTO @ability_tiers_ice_monkey_b FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_b, 'rang,abil,blimp,bln', 'chep');


--      Monkey - Glue Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Glue Gunner', 'Primary', 'Shoots a blob of sticky glue that slows Bloons down by 50%.', 275, 'glue-gunner.png');
SELECT id INTO @glue_gunner FROM Monkeys WHERE name='Glue Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @glue_gunner);
SELECT id INTO @tower_glue_gunner FROM Towers WHERE monkey_id=@glue_gunner;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_glue_gunner, 'a');

--          Statistics      --  (  id,           tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,    mon,  dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_glue_gunner, 46, 1, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, DEFAULT,  11, NULL,  6, 'Y', 'acid', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 0, 'Glue Soak', 'Glue soaks through all layers of Bloon.', 200, 150, 'status:glued:note:(1-0-0) soaks all layers', 'cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 1, 'Corrosive Glue', 'Glued Bloons pop one layer every few seconds.', 300, 550, '+blimp,note:(2-0-0) blimp glue lasts half as long,status:glued:|1d;|2.3s;type:|normal,cross:203:note:(2-0-3) glue level 2,cross:240:abil:glue_strike|glue_storm:status:weakening_glue:+blimp,cross:205:status:glued:1d=2s', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 2, 'Bloon Dissolver', 'Extreme solvents melt two layers every second.', 2500, 2500, 'status:glued:1d;0.65s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 3, 'Bloon Liquefier', 'Can glue one additional Bloon per shot and applies liquifying compounds that do 10 pops every second.', 5000, 9000, '+1p,status:glued:1d;2cd;0.1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 4, 'The Bloon Solver', 'Bloons a problem? Here\'s the solution.', 22000, 37500, '2j,*25%s,status:glued:3cd;4md,attack:splat:|5p;|12r;note:(0-0-5) applies glued status;desc:Deals damage on basic attack contact', 'supp', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 0, 'Bigger Globs', 'Can coat 2 Bloons per shot.', 100, 120, '+1p,cross:510:attack:splat:+1p', 'cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 1, 'Glue Splatter', 'Splatters glue across up to 6 Bloons per shot.', 1800, 900, 'attack:splat:|5p;|13r;note:(0-2-0) applies glued status,cross:520:attack:splat:+4p=+13r,cross:025:attack:splat:+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 2, 'Glue Hose', 'Shoots glue 3x as fast!', 3250, 2500, '34%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 3, 'Glue Strike', 'Glue Strike Ability: Glues all Bloons on screen, causing them to take more damage from all sources while it lasts.', 3500, 8500, 'abil:glue_strike:|30clt;|$1p;|$1r;+camo;-blimp;desc:Glues all bloons on screen;status:weakening_glue:|11dur=|2d=-blimp=|50%slow=note:(0-4-0) soaks 6 layers=desc:Take 2 extra damage and no sharp immunity', 'abil,supp,bln', '');
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 4, 'Glue Storm', 'Glue storm ability pelts the whole screen over 15 seconds with glue. Glued Bloons take extra damage while glued.', 15000, 25000, 'abil:glue_strike-glue_storm:30clt;15dur;2.0s;+camo;status:weakening_glue:22dur=75%slow=note:(0-5-0) soaks 9 layers', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 0, 'Stickier Glue', 'Makes glue effect last much longer.', 120, 130, 'status:glued:+13dur,cross:051:abil:glue_storm:status:weakening_glue:48dur', 'cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 1, 'Stronger Glue', 'Slows down Bloons even more.', 400, 600, 'status:glued:75%slow,cross:051:abil:glue_storm:status:weakening_glue:90%slow', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 2, 'MOAB Glue', 'Improved glue formula allows it to stick to MOAB-Class Bloons.', 3400, 2500, '+blimp,note:(0-0-3) blimps glue lasts half as long,status:glued:note:(0-0-3) 37.5%slow to blimps', 'blimp,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 3, 'Relentless Glue', 'Popped Bloons that were glued, leave a blob of glue on the track.', 3000, 8000, 'note:(0-0-4) bloons drop glue on track when fully popped that keep applying the glue status up to 2 times', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 4, 'Super Glue', 'Glue so strong it temporarily immobilizes all affected Bloons!', 35000, 30000, '+5p,status:glued:1d;2.3s;50md;100%slow;note:(0-0-5) bloons are slowed 100% for the full 24 seconds;note:(0-0-5) MOABs and DDTs are slowed 100% for 5 seconds;note:(0-0-5) BFBs are slowed 95% for 2 seconds;note:(0-0-5) ZOMGs are slowed 90% for 1 second', 'rehit', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 's', 0, 2, 3);
SELECT id INTO @ability_tiers_glue_gunner_s FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_s, 'supp,blimp,chep,cc,eg,mg,lg', 'camo');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 'a', 2, 5, 0);
SELECT id INTO @ability_tiers_glue_gunner_a FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_a, 'supp,bln,cc,abil,eg,mg', 'blimp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 'b', 5, 0, 2);
SELECT id INTO @ability_tiers_glue_gunner_b FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_b, 'supp,cc,bln', 'chep');


--      Monkey - Sniper Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Sniper Monkey', 'Military', 'Can shoot Bloons it can see anywhere on the screen with long-range rifle, and pops 2 layers off Bloons hit by it.', 350, 'sniper-monkey.png');
SELECT id INTO @sniper_monkey FROM Monkeys WHERE name='Sniper Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @sniper_monkey);
SELECT id INTO @tower_sniper_monkey FROM Towers WHERE monkey_id=@sniper_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_sniper_monkey, 'b');

--          Statistics      --  (  id,             tower_id,         r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_sniper_monkey, 110000000, 1, 2, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.59, DEFAULT, DEFAULT, NULL,  6, 'Z', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 0, 'Full Metal Jacket', 'Shots pop through 4 layers of Bloon. Can pop Lead and Frozen Bloons.', 350, 120, '+2d,type:normal,cross:105:+1md', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 1, 'Large Calibre', 'Shots can pop through 7 layers of Bloon', 1500, 800, '+3d,cross:230:note:(2-3-0) Basic attack jump distance increased to 50 units,cross:205:+1md', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 2, 'Deadly Precision', '20 damage per shot, plus bonus damage to Ceramics.', 3000, 3500, '+13d,+15cd', 'cm', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 3, 'Maim MOAB', 'Immobilizes MOAB-Class Bloons for a short time.', 5000, 10500, '+10d,status:stun:|3dur;desc:Applied by basic attack;note:(4-0-0) 3 second duration for MOABs & BFBs 1.5 seconds. ZOMGs & DDTs 0.75 seconds', 'cc,blimp,dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 4, 'Cripple MOAB', 'Crippled MOABs are immobilized for longer and take extra damage from all other attacks.', 40000, 37500, '+50d,status:stun:7dur;note:(5-0-0) MOAB 7 seconds. BFB 6 seconds. ZOMG 3 seconds. DDT 4 seconds,status:crippled:+5d;desc:Applied by basic attack;note:same durations as stun', DEFAULT, DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 0, 'Night Vision Goggles', 'Allows the sniper to detect and do an additional 2 damage to Camo Bloons.', 300, 200, '+camo,+2cmd', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 1, 'Shrapnel Shot', 'Damaged bloons spray out a cone of sharp shrapnel.', 450, 600, 'attack:shrapnel:|1d;|5j;|2p;type:|sharp;desc:Deals damage on basic attack damage,cross:120:attack:shrapnel:type:normal,cross:220:attack:shrapnel:+1d,cross:320:attack:shrapnel:+2d,cross:420:attack:shrapnel:+2d;note:(4-2-0) applies stun,cross:520:attack:shrapnel:+6d;note:(5-2-0) applies crippled', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 2, 'Bouncing Bullet', 'Shots bounce to new targets up to 3 times.', 3200, 2500, '4i,note:(0-3-0) Basic attack now jumps to targets within 40 units,attack:shrapnel:+1p', 'jump', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 3, 'Supply Drop', 'Supply Drop Ability: drops a crate full of cash. Regular attack also damages Lead Bloons and increases Shrapnel popping power.', 7200, 11000, 'type:normal,attack:shrapnel:+3p,abil:supply_drop:|90clt;|3mpr;|1200mon;desc:Drops a crate full of cash', 'abil,mny,lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 4, 'Elite Sniper', 'Supply Drop gives much more cash. Grants Elite targeting prio to all snipers.', 13000, 35000, '*40%s,buff:elite:|75%s;desc:Gain increased attack speed;note:affects all snipers excluding self,abil:supply_drop-elite_supplies:90clt;3mpr;+1800mon,note:(0-5-0) gains elite targeting that prioritises First if bloons are past 75% of the track. Then Ceramics if there are any. Otherwise Strong', 'atksp', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 0, 'Fast Firing', 'Shoots faster than normal.', 400, 130, '*70%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 1, 'Even Faster Firing', 'Shoots even faster!', 400, 600, '*70%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 2, 'Semi-Automatic', 'Attacks 3x as fast!', 3500, 2750, '*33.33%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 3, 'Full Auto Rifle', 'Fully automatic weapon with incredible popping power, including damage to Lead Bloons.', 4250, 10000, '*50%s,+1md', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 4, 'Elite Defender', 'A lost life gives this Sniper 4x attack speed for a short time in retaliation. Also attacks faster the further the Bloons are along the track.', 14000, 30000, '*50%s,+1md,abil:retaliation:|10clt;|7dur;|25%s;desc:Leaking causes increased attack speed,note:additionally shoots x% faster. where x% is how far along the track the furthest forward bloon is', DEFAULT, DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 's', 4, 2, 0);
SELECT id INTO @ability_tiers_sniper_monkey_s FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_s, 'camo,lead,frzn,cm,blimp,supp,cc,gbl', 'lg');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 'a', 0, 2, 5);
SELECT id INTO @ability_tiers_sniper_monkey_a FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_a, 'camo,dps,lead,abil,gbl,atksp', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 'b', 2, 5, 0);
SELECT id INTO @ability_tiers_sniper_monkey_b FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_b, 'supp,lead,frzn,camo,abil,gbl', 'blimp,chep');


--      Monkey - Monkey Sub
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Sub', 'Military', 'Shoots homing top-e-darts at nearby Bloons. Must be placed in water.', 325, 'monkey-sub.png');
SELECT id INTO @monkey_sub FROM Monkeys WHERE name='Monkey Sub';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_sub);
SELECT id INTO @tower_monkey_sub FROM Towers WHERE monkey_id=@monkey_sub;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_sub, 's');

--          Statistics      --  (  id,          tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_monkey_sub, 42, 2, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.75, DEFAULT, DEFAULT, NULL,  7, 'X', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 0, 'Longer Range', 'Increases attack range.', 130, 125, '+10r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 1, 'Advanced Intel', 'Allows long range targeting of bloons that are in the radius of your other towers.', 500, 750, 'note:(2-0-0) uses shared range that can target anything in the visibile range circle of any tower,cross:230:attack:missile:note:(2-3-0) missiles also gain shared range', 'rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 2, 'Submerge and Support', 'Adds submerge targeting option permanently reveals Camo Bloons in its radius, but does not attack while submerged.', 500, 2250, 'note:(3-0-0) gains submerge targeting option,attack:sonar:|$1p;|1.5s;+decamo;desc:Replaces basic attack when submerged', 'sub', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 3, 'Bloontonium Reactor', 'Submerge to detect Camo, pop Bloons and reduce ability cooldowns of nearby water-based monkeys by 15%.', 2500, 11000, 'attack:sonar:0.3s,attack:radioactive:|1d;|50p;|52r;|0.3s;type:|shatter;desc:Attack gained when submerged,note:(4-0-0) while submerged abilities of water towers in range -15% cooldown time', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 4, 'Energizer', 'Reduces ability cooldowns everywhere by 20%. While in radius, heroes earn XP 50% faster and water Monkey ability cooldowns are halved.', 32000, 33000, 'attack:radioactive:+2d;+950p,note:(5-0-0) while submerged abilities of water towers in range have -50% cooldown time. All other abilities have -20% cooldown time,note:(5-0-0) heroes in range gain +50% XP', DEFAULT, DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 0, 'Barbed Darts', 'Sub''s darts can pop 5 Bloons each.', 450, 130, '+3p,cross:410:attack:radioactive:+20p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 1, 'Heat-tipped Darts', 'Heat tipped darts allow popping of Frozen and Lead Bloons.', 300, 600, 'type:normal,cross:420:attack:radioactive:+1ld;+30p', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 2, 'Ballistic Missile', 'Missile seeks target over any distance and does extra MOAB and Ceramic damage.', 1400, 3000, '+8r,attack:missile:|50r;|0.9945s;desc:Attack gained by 0-3-0;attack:missile_explosion:|1d=|5cd=|5md=|100p=|18r=type:|explosion=desc:Delayed missile explosion', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, true, 1, 3, 'First Strike Capability', 'A devastating missile strike on the largest Bloon on screen.', 13000, 20000, 'abil:first_strike:|60clt;|0.6del;|10000d;|$1r;type:|normal;+camo;desc:Huge damage on largest bloon;attack:first_strike_explosion:desc:Large damage after explosion=|350d=|80p=|65r=type:normal=note:penetrates blimp layers', 'abil', 'time');
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, true, 1, 4, 'Pre-Emptive Strike', 'Automatically triggers MOAB Assassin effect whenever MOAB-Class Bloon spawns from the Bloon entrance.', 32000, 45000, 'attack:missile:0.5s;attack:missile_explosion:+9d,abil:first_strike:45clt,abil:pre_emptive_strike:|45clt;|750d;type:|normal;+camo;desc:Huge damage on a blimp entering the map', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 0, 'Twin Guns', 'Added twin gun doubles attack speed. Enhances Ballistic missile and bloontonium reactor.', 450, 150, '*50%s,cross:301:attack:sonar:*85%s,cross:401:attack:radioactive:*85%s,cross:031:attack:missile:*87.5%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 1, 'Airburst Darts', 'Airburst darts split into 3 on impact for massively increased popping power. Further enhances Ballistic Missile and Bloontonium Reactor.', 1000, 1000, '-1p,0.375s,attack:subdart:|1d;|3j;|2p;desc:Deals damage on basic attack contact or expire,cross:302:attack:sonar:*75%s,cross:402:attack:radioactive:*75%s,cross:032:attack:missle:*90%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 2, 'Triple Guns', 'Adds a third gun for even faster firing.', 1100, 2750, '*67%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 3, 'Armor Piercing Darts', 'Special AP darts inflict more damage to MOAB-Class Bloons.', 3000, 10000, '+1d,+2md,attack:subdart:+1md;+3p', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 4, 'Sub Commander', 'Grants +4 pierce and +1 damage to all Subs in its radius.', 25000, 25000, '*50%s,buff:command:desc:Doubles damage and increased pierce to all attacks;note:affects all subs in range including self', 'tbf', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 's', 2, 0, 5);
SELECT id INTO @ability_tiers_monkey_sub_s_0 FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='s' AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_s_0, 'blnc,tbf,buff,blimp,rang', '');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 's', 2, 0, 3);
SELECT id INTO @ability_tiers_monkey_sub_s_1 FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='s' AND bottom_path=3;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_s_1, 'chep,rang,dps', 'spam,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 'a', 4, 0, 2);
SELECT id INTO @ability_tiers_monkey_sub_a FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_a, 'camo,eg,mg,bln,abil,chep', 'blimp,sub,range');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 'b', 0, 4, 0);
SELECT id INTO @ability_tiers_monkey_sub_b FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_b, 'abil,blimp,lead,frzn', 'time');


--      Monkey - Monkey Buccaneer
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Buccaneer', 'Military', 'Shoots a single, heavy dart from both sides of the ship. Must be placed in water.', 500, 'monkey-buccaneer.png');
SELECT id INTO @monkey_buccaneer FROM Monkeys WHERE name='Monkey Buccaneer';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_buccaneer);
SELECT id INTO @tower_monkey_buccaneer FROM Towers WHERE monkey_id=@monkey_buccaneer;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_buccaneer, 'a');

--          Statistics      --  (  id,                tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_monkey_buccaneer, 60, 4, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, DEFAULT, DEFAULT, NULL,  8, 'C', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 0, 'Faster Shooting', 'All weapons on board shoot faster', 350, 150, '*75%s,cross:110:attack:grape:*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 1, 'Double Shot', 'Double ship weapons fired.', 500, 700, '+1j,cross:210:attack:grape:+5j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 2, 'Destroyer', 'Attacks super duper fast!', 2950, 3000, '*20%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 3, 'Aircraft Carrier', 'Launches waves of fighter planes that strafe the Bloons.', 7500, 12500, 'attack:forward_dart:|1d;|2j;|9p;|0.15s;type:|sharp;desc:One of three permanent plane subtowers;note:(4-0-0) can only aim in front,attack:radial_dart:|1d;|8j;|9p;|1.0s;type:|sharp;desc:One of three permanent plane subtowers,attack:moab_missile:|$1r;|3s;-bloon;note:moderate homing;desc:One of three permanent plane subtowers;attack:moab_missile_explosion:|15d=|3p=|30r=type:|explosion=desc:Deals damage on moab missile explosion,note:New attacks do not inherit alchemist buffs', 'supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 4, 'Carrier Flagship', 'Does extra damage. Can place other Monkeys on the upper decks of the ship and increases attack speed of all water based Monkeys and Monkey Aces.', 25000, 37000, 'type:normal,attack:forward_dart:+1d;1j;+3cd;+5p;$1r;type:normal;note:(5-0-0) aimed according to the main tower\'s targeting instead of straight forward,attack:radial_dart:+1d;+3cd;+5p;type:normal,attack:moab_missile:*50%s;attack:moab_missile_explosion:+15d=+1p=type:normal,buff:flagship:|85%s;desc:Increased attacked speed;note:affects all water towers and aces including self,note:+2 small platforms to place towers', 'lead,frzn,tbf,solo', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 0, 'Grape Shot', 'Adds a spray of 5 sharpened grapes to the ship.', 550, 200, 'attack:grape:|1d;|5j;|1p;|1.3s;desc:Attack gained by 0-1-0,cross:310:attack:grape:*40%s,cross:014:attack:grape:0.75s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 1, 'Hot Shot', 'Burning hot grape shot can pop Lead Bloons and set Bloons on fire.', 500, 650, 'attack:grape:type:fire;status:burn:|3.1dur=type:|fire=|1d=|1.5s=desc:Grape applies burn', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 2, 'Cannon Ship', 'Add a powerful cannon that shoots out powerful bombs.', 900, 2700, 'attack:cannonball:|1.2s;desc:Attack gained by 0-3-0;attack:cannonball_explosion:|1d=|28p=|40r=type:|explosion=desc:Deals damage on cannonball contact;attack:frags:|1d=|8j=|1p=type:|sharp=note:damage cannot be buffed=desc:Deals damage on cannonball contact', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, true, 1, 3, 'Monkey Pirates', 'Adds 2 cannons to the ship and cannon attacks do more damage. MOAB Takedown Ability: harpoons a MOAB class Bloon and brings it down.', 4500, 13000, 'attack:cannonball:+2j;1.3s;attack:cannonball_explosion:+1d,abil:takedown:|50clt;|1j;desc:Harpoons a MOAB class Bloon and brings it down;note:(0-4-0)targets the strongest "small" blimp (not ZOMG or BAD) immediately removing it and gaining the full amount of cash it would have given', 'abil,moab,bfb', 'bad,timing');
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, true, 1, 4, 'Pirate Lord', 'Greatly increased attack speed for all attacks and can shoot 3 grappling hooks at once, plundering extra cash from each MOAB-class Bloon taken down.', 21000, 35000, '*50%s,attack:grape:+4d;+5cd;*50%s,abil:takedown-zomg_takedown:30clt;+2j;desc:Harpoons up to 3 MOAB class bloons and brings it down;note:(0-5-0) Hooks all blimps other than BAD. ZOMGs use 2 hooks;note:(0-5-0) Gains double cash', 'zomg,ddt,mny,atksp', 'bad');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 0, 'Long Range', 'Much longer range and projectiles fly faster.', 180, 150, '+1p,+11r,cross:011:attack:grape:+1p,cross:401:attack:forward_dart:+1p;attack:radial_dart:+1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 1, 'Crow''s Nest', 'Allows the ship to hit Camo Bloons.', 400, 600, '+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 2, 'Merchantman', 'Generates cash each round automatically.', 2300, 3100, '+200mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 3, 'Favored Trades', 'Attacks faster and generates lots of money per round. Monkeys in radius have increased sell value and can stack up to 3 Favored Trades for 95% max sell value.', 5500, 10000, '+300mon,*50%s,buff:cashback:desc:Increases sellback price;note:increases sellback price by 10% of anything in range including self', 'tbf,atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 4, 'Trade Empire', 'Generates more cash per round, increases cash earned by up to 20 other Merchantmen by the number of Merchantmen, and boosts all Merchantmen damage.', 23000, 4000, '+300mon,+1d,+1cd,+1md,buff:trade:desc:Buccaneer extra damage and money buff;+1d;+1cd;+1md;note:trade buff affects up to 2-0 X-X-3 or X-X-4 buccaneers;note:+$20 * n income where n is the number of buffed towers', 'mny', DEFAULT);

--          Paragon
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 3, 0, 'Navarch of the Seas', 'The greatest thing ever to float on water.', 500000, 500000, '+camo,3200mon,attack:cannon:desc:Gains 6 independent cannon attacks;|3j;|60r;|0.429s;attack:cannon_explosion:desc:On contact explosion=|60d=|60md=|60bd=|28p=|40r=type:|normal,attack:grape:desc:Gains 6 independent grape attacks;|25d;|30md;|30bd;|10j;|10p;|60r;|0.429s;type:|normal,abil:grapple:desc:Passively harpoons a MOAB class Bloon and brings it down;|10clt;|$1r;|1s;note:cooldown starts once 10 hooks have been used;note:either uses 2 hooks to take down a ZOMG or 1 hook to take down a smaller blimp,abil:bad_takedown:desc:Removes strongest blimp from the map;|30clt;|2mpr;note:targets the strongest blimp and immediately removes it,buff:flagship:desc:Water and air buff;|85%s;note:affects all water towers and aces,buff:cashback:desc:Increased sellback price;note:(Degree 1) +10% sellback price;note:affects anything in range including self,buff:trade:desc:Buccaneer damage and money buff;+10d;+10cd;+10md;note:affects up to 20 X-X-3 or X-X-4 buccaneers;note:+$20 * n income (n is the number of buffed towers);note:stacks with the same buff from X-X-5 buccaneer,attack:forward_dart:desc:Attack from three permanent plane subtowers;|44d;|44bd;|14p;|$1r;|0.15s;type:|normal,attack:moab_missile:desc:Attack from three permanent plane subtowers;|4j;|$1r;|1.5s;-bln;+blimp;attack:explosion:desc:Missile explosion=|200d=|200bd=|10p=|30r=type:|normal,note:spawns three permanent plane subtowers,note:has 2 small platforms that can be used to place towers,note:towers on a platform should see over most obstacles', 'camo,dps,lg,blimp,bln,abil,mny,tbf,vis', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 's', 5, 2, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_s FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_s, 'lead,scm,solo,abil,tbf', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 'a', 3, 2, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_a_0 FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_a_0, 'lead,chep', 'camo');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 'a', 5, 5, 5);
SELECT id INTO @ability_tiers_monkey_buccaneer_a_1 FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='a' AND top_path=5 AND middle_path=5 AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_a_1, 'lg,camo,dps', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 'b', 2, 5, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_b FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_b, 'lead,blimp,abil', 'cd,solo,chep');


--      Monkey - Monkey Ace
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Ace', 'Military', 'Flies above the ground shooting volleys of high-pierce darts.', 800, 'monkey-ace.png');
SELECT id INTO @monkey_ace FROM Monkeys WHERE name='Monkey Ace';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_ace);
SELECT id INTO @tower_monkey_ace FROM Towers WHERE monkey_id=@monkey_ace;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_ace, 'a');

--          Statistics      --  (  id,          tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld, j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_monkey_ace, 22, 5, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 8, 1.68, DEFAULT, DEFAULT, NULL, 20, 'V', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 0, 'Rapid Fire', 'Shoots faster than normal.', 650, 160, '*75%s,cross:110:attack:pineapple|bombing_run:*60%s,cross:130:attack:bombing_run:*60%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 1, 'Lots More Darts', 'Shoots 12 darts at a time.', 650, 750, '+4j,cross:204:attack:dart:+25%p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 2, 'Fighter Plane', 'Flies fast and launches anti-MOAB missiles.', 1000, 2700, 'note:(3-0-0) flies 20% faster,attack:moab_missile:|2j;|3s;-bloon;desc:Attack gained by 3-0-0;attack:moab_missile_explosion:|18d=|4p=|30r=type:|explosion=desc:Deals damage on moab missile contact', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 3, 'Operation: Dart Storm', 'Shoots 16 darts per volley, and twice as fast.', 3000, 8000, '+4j,*50%s,attack:moab_missile:*50%s;attack:moab_missile_explosion:+6d', 'atksp,dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 4, 'Sky Shredder', 'The Bloons will wish they had never come.', 40000, 35000, '+2d,+2cd,+16j,+3p,*50%s,type:normal,attack:moab_missile:attack:moab_missile_explosion:+126d=+1p=type:normal', 'lead,frzn,solo', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 0, 'Exploding Pineapple', 'Drops pineapples to the ground that explode violently after a few seconds.', 200, 120, 'attack:pineapple:|2s;|1d;|20p;|25r;type:|explosion;desc:Attack gained by 1-0-0;attack:explosion:|1d=|20p=|25r=|2s=type:|explosion=desc:Deals damage when pineapple expires,cross:310:attack:moab_missile:attack:moab_missile_explosion:+2p=+4.5r,cross:014:attack:bomb:+15p,+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 1, 'Spy Plane', 'Allows Monkey Ace to hit Camo Bloons.', 350, 600, '+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 2, 'Bomber Ace', 'Drops a line of bombs when crossing the Bloon track.', 900, 2500, 'attack:pineapple-bombing_run:4j;1.7s;+2d;+10r;attack:explosion:+2d=+10r=1.7s=type:explosion', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 3, 'Ground Zero', 'Bomb damage increased significantly. Ability drops a huge bomb that destroys most things on screen.', 18000, 15000, 'attack:bombing_run:+7d;+20p,abil:ground_zero:|45clt;|0.7del;|700d;|1000p;type:|normal;desc:Drops a huge bomb on the screen', 'abil', 'time');
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 4, 'Tsar Bomba', 'A very, very large bomb. Someone put a stop to this craziness!', 30000, 30000, 'attack:bombing_run:type:normal,abil:ground_zero-tsar_bomba:35clt;3000d;5000p;type:normal;status:stun:|8.2dur=desc:Applied after bomb explosion', 'lead,frzn', DEFAULT);

--          Botttom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 0, 'Sharper Darts', 'Darts can pop 8 Bloons each.', 500, 160, '+3p,cross:011:attack:pineapple|bombing_run:attack:explosion:+12p,cross:031:attack:bombing_run:+12p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 1, 'Centered Path', 'New central flight path for maximum map coverage.', 300, 600, 'note:(0-0-2) gains centred path targeting', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 2, 'Neva-Miss Targeting', 'Darts automatically seek out and pop Bloons by themselves.', 2200, 3000, 'note:(0-0-3) Moderate homing. Increased projectile speed', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 3, 'Spectre', 'Rapidly fires darts and bombs, dominating most Bloon types easily.', 24000, 19000, '$1r,0.06s,note:(0-0-4) alternately fires a dart and bomb,attack:dart:|2d;|2cd;|15p;desc:Alternatively fired by basic attack,attack:bomb:|3d;|2cd;|30p;|20r;type:|explosion;desc:Alternatively fired by basic attack', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 4, 'Flying Fortress', 'This is a BIG plane', 85000, 45000, '*68.66%s,+2j,attack:dart:+2d;type:normal,attack:bomb:+2d,type:normal,note:(0-0-5) gains 2 more copies of barrage which target last and close', 'blnc', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 's', 2, 4, 0);
SELECT id INTO @ability_tiers_monkey_ace_s FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_s, 'abil,scm,ddt,camo,bln', 'time');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 'a', 4, 0, 2);
SELECT id INTO @ability_tiers_monkey_ace_a FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_a, 'dps,blimp,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 'b', 2, 0, 4);
SELECT id INTO @ability_tiers_monkey_ace_b FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_b, 'bln,mg', 'camo,chep,ddt');


--      Monkey - Heli Pilot
INSERT INTO `Monkeys` VALUES (NULL, 'Heli Pilot', 'Military', 'Hovers wherever you direct it. Shoots from twin heavy dart guns.', 1600, 'heli-pilot.png');
SELECT id INTO @heli_pilot FROM Monkeys WHERE name='Heli Pilot';
INSERT INTO `Towers` VALUES (NULL, NULL, @heli_pilot);
SELECT id INTO @tower_heli_pilot FROM Towers WHERE monkey_id=@heli_pilot;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_heli_pilot, 'a');

--          Statistics      --  (  id,          tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld, j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_heli_pilot, 42, 3, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2, 0.57, DEFAULT, DEFAULT, NULL, 27, 'B', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 0, 'Quad Darts', 'Shoots 4 darts per volley instead of 2.', 800, 200, '+2j,cross:104:abil:comanche_defense:+2j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 1, 'Pursuit', 'A new targeting option enables Heli to seek and pursue the Bloons automatically.', 500, 650, 'note:(2-0-0) gains pursuit targeting option', 'gbl,micr', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 2, 'Razor Rotors', 'Razor Rotor blades rip up Bloons on contact, including Lead and Frozen Bloons.', 1750, 2700, 'attack:rotor:|2d;|10p;|35r;|0.75s;type:|normal;desc:Attack gained by 3-0-0', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 3, 'Apache Dartship', 'Adds a large missile array and powerful machine guns.', 19600, 20000, '*75%s,attack:machinegun:|1d;|5p;|42r;|0.05s;type:|sharp;desc:Attack gained by 4-0-0,attack:rocket:|4j;|173r;|1s;desc:Attack gained by 4-0-0;attack:rocket_explosion:|2d=|40p=|25r=type:|explosion=desc:Deals damage on rocket contact', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 4, 'Apache Prime', 'The Apache Prime leaves most Bloons wishing they''d never been inflated.', 45000, 55000, '+5d,+20p,type:energy,attack:machinegun:+4d;+6p;type:plasma,attack:rocket:+15md', 'dps,blnc', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 0, 'Bigger Jets', 'Powerful jets make Heli move much faster.', 300, 150, 'note:(0-1-0) flies faster,cross:013:attack:shove:note:(0-1-3) pushes back more (MOABs -44%. BFBs -11%. ZOMGs and DDTs 22%)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 1, 'IFR', 'Allows Heli Pilot to detect and shoot Camo Bloons.', 600, 650, '+camo,cross:024:abil:comanche_defense:+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 2, 'Downdraft', 'Blows Bloons away from the Heli, back toward the entrance.', 3000, 3300, 'attack:downdraft:|1p;|32r;|0.15s;-blimp;-lead;desc:Attack gained by 0-3-0;note:sends bloons 32-300 units back', 'kb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, true, 1, 3, 'Support Chinook', 'Drops lives and cash crates, or can pick up and redeploy most Monkey types.', 12000, 15000, 'abil:redeploy:|60clt;desc:Move most towers;note:move a tower except for: aces. helis. farms. villages. aircraft carriers (4-X-X or 5-X-X buccaneers). temples (4-X-X or 5-X-X supers),abil:supplies:|3mpr;|1800mon;desc:Drops a cash/health crate;note:(0-4-0) Crate drops 10 lives', 'supp,abil,mny,hlth', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, true, 1, 4, 'Special Poperations', 'Deploys a powerful special Monkey Marine with machine gun.', 30000, 40000, 'abil:special_poperations:desc:Deploys a marine subtower;|25clt;|30dur;|6d;|20p;|50r;|0.05s;type:|normal,abil:supplies:+2700mon;note:(0-5-0) +15 lives', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 0, 'Faster Darts', 'Darts are propelled much faster through the air.', 250, 140, 'note:(0-0-1) increased projectile speed', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 1, 'Faster Firing', 'Faster attack speed for all Heli attacks.', 350, 550, '*80%s,cross:032:attack:downdraft:*80%s,cross:402:attack:machinegun:*80%s;attack:rocket:*80%s,cross:052:abil:special_poperations:*80%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 2, 'MOAB Shove', 'Can collide with and shove MOAB-Class Bloons, reversing or slowing their movement. Shove is amplified by Bigger Jets and IFR upgrades.', 3500, 2500, 'attack:shove:|1p;desc:Slowing attack gained by 0-0-3;note:(0-0-3) slows MOABs to -33% normal speed. BFBs to 0%. DDTs and ZOMGs to 33%,attack:rocket:|$1r;|3s;desc:Attack gained by 0-0-3;attack:rocket_explosion:|1d=|2cd=|2md=|10p=|18r=type:|explosion=desc:Deals damage on rocket contact', 'supp,cc,blimp,kb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 3, 'Comanche Defense', 'Automatically calls in 3 more Comanches when they\'re most needed.', 8500, 12500, '+1d,attack:rocket:1s;attack:rocket_explosion:+2d=+20p,abil:comanche_defense:|1d;|3j;|4p;|43r;|0.15s;type:|sharp;desc:Support choppers appear by bloon progress;attack:comanche_defense_rocket:|1d=|2cd=|2md=|100p=|18r=type:|explosion=desc:Deals damage on rocket contact;note:(0-0-4) summons up to 1 mini-comanche when a bloon crosses 25% of the track. 2 mini-comanches when a bloon crosses 50%. and 3 at 75%', 'dps,abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 4, 'Comanche Commander', 'Upgraded weapons. Also automatically calls in 3 more Comanches. Permanently.', 35000, 50000, '+2d,abil:comanche_defense:+1d;note:(0-0-5) Comanches now are permanent', DEFAULT, 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 's', 5, 0, 2);
SELECT id INTO @ability_tiers_heli_pilot_s FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_s, 'dps,blnc,gbl,mg,lg', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 'a', 0, 3, 2);
SELECT id INTO @ability_tiers_heli_pilot_a FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_a, 'supp,bln,camo,chep', 'micr,blimp,lead');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 'b', 2, 0, 3);
SELECT id INTO @ability_tiers_heli_pilot_b FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_b, 'supp,cc,blimp,chep', 'camo');


--      Monkey - Mortar Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Mortar Monkey', 'Military', 'Launches an exploding mortar shell to a fixed location anywhere on the screen.', 750, 'mortar-monkey.png');
SELECT id INTO @mortar_monkey FROM Monkeys WHERE name='Mortar Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @mortar_monkey);
SELECT id INTO @tower_mortar_monkey FROM Towers WHERE monkey_id=@mortar_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_mortar_monkey, 'b');

--          Statistics      --  (  id,             tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,          dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_mortar_monkey, 20, 40, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2, DEFAULT, DEFAULT, NULL, 11, 'N', 'explosion', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 0, 'Bigger Blast', 'Bigger shells deliver a bigger blast radius.', 500, 180, '+5p,+8r,cross:103:attack:flare:+20r,cross:104:attack:strip:+5p=+8r,cross:105:attack:wall_of_fire:+5p=+6r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 1, 'Bloon Buster', 'Smash through 2 layers of bloon at once!', 500, 600, '+1d,cross:205:attack:wall_of_fire:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 2, 'Shell Shock', 'Each blast creates a shockwave that stuns Bloons at impact point and pops Bloons further out.', 900, 2500, '+10r,attack:stun_explosion:|0.5dur;|45p;|19r;-blimp;-black;-zebra;desc:Stuns on basic attack expire,attack:shockwave:|1d;|45p;|57r;desc:Deals damage on basic attack expire;note:attack is only on outer inner half of radius', 'stnb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 3, 'The Big One', 'Devastating explosions pop 5 layers of bloon.', 8000, 15000, '+5d,+40p,+20r,type:normal,attack:stun_explosion:+40p;+10r,attack:shockwave:+40p;+30r;type:normal', 'dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 4, 'The Biggest One', 'Smashes through 20 layers of Bloon over a huge area.', 28000, 36000, '+15d,+20cd,20md,+115p,+16r,type:normal,attack:stun_explosion:+115p;+8r,attack:shockwave:+115p;+20cd;+24r;type:normal', 'dps,black', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 0, 'Faster Reload', 'Increases the attack speed of the Mortar.', 300, 150, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 1, 'Rapid Reload', 'Even faster reload.', 500, 600, '*75%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 2, 'Heavy Shells', 'Heavy shells do extra damage to Ceramic, Lead, and all Fortified Bloons. Can also pop Black Bloons.', 900, 2300, '+3cd,+1md,+1fd,+1ld,+2sd,type:normal', 'dps,black', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, true, 1, 3, 'Artillery Battery', 'Artillery battery has 3 barrels for triple the pain.', 5500, 12500, '*25%s,abil:bombardment:|60clt;|8dur;|25%s;|3r;desc:Increased tower attack speed and range', 'atksp,abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, true, 1, 4, 'Pop and Awe', 'Rains explosions over the whole screen, popping and immobilizing all Bloons for a few seconds.', 30000, 32000, '+9cd,+3md,+3fd,+3ld,+8sd,abil:pop_and_awe:|60clt;|8dur;|20d;|$1p;|$1r;|1.0s;type:|normal;desc:Rains explosions over the whole screen;status:stun:|1dur=desc:Stuns all bloons', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 0, 'Increased Accuracy', 'Makes the shots more accurate.', 200, 140, 'note:(0-0-1) 8 units random target variance', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 1, 'Burny Stuff', 'Damaged Bloons are set ablaze momentarily with each hit.', 500, 650, 'status:burn:|3.85dur;|1d;|1.25s;type:|fire;desc:Status applied on basic attack damage,cross:302:status:burn:2d=1.5s=note:(3-0-2) burn tic\'s twice as fast and also expires twice as fast,cross:402:status:burn:5d=1.5s,cross:502:status:burn:25d=1.5s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 2, 'Signal Flare', 'Camo Bloons popped by flares lose their camouflage permanently.', 700, 2200, '+camo,attack:flare:|80p;|50r;desc:Attack gained by 0-0-3;+decamo;-ddt', 'camo,decamo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 3, 'Shattering Shells', 'Shattering shells strip all bloon properties off all but the biggest bloons.', 11000, 12000, 'attack:strip:|40p;|20r;desc:Attack gained by 0-0-4;+degrow;+defortify;-ddt;-zomg;-bad', 'degrow,defortify', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 4, 'Blooncineration', 'Superhot burny stuff melts through 5 layers of bloon each shot, burns MOAB class bloons for extra damage, and strips DDT camo.', 40000, 35000, 'type:normal,status:burn:5d;100md;1s,attack:wall_of_fire:|1d;|20p;|15r;|0.1s;type:|fire;desc:Attack gained by 0-0-5;+camo,attack:flare:+ddt,attack:strip:+ddt', 'dps,black', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 's', 5, 2, 0);
SELECT id INTO @ability_tiers_mortar_monkey_s FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_s, 'stnb,dps', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 'a', 0, 2, 4);
SELECT id INTO @ability_tiers_mortar_monkey_a FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_a, 'supp,moab,bfb,mg,lg,camo,chep', 'ddt,zomg,bad');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 'b', 2, 4, 0);
SELECT id INTO @ability_tiers_mortar_monkey_b FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_b, 'dps,chep,bln,eg,mg', 'camo,blimp');


--      Monkey - Dartling Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Dartling Gunner', 'Military', 'Uses a dart-shooting machine-gun. Aims wherever you point on the screen.', 850, 'dartling-gunner.png');
SELECT id INTO @dartling_gunner FROM Monkeys WHERE name='Dartling Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @dartling_gunner);
SELECT id INTO @tower_dartling_gunner FROM Towers WHERE monkey_id=@dartling_gunner;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_dartling_gunner, 'b');

--          Statistics      --  (  id,               tower_id,           r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_dartling_gunner, 110000000, 1, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.2, DEFAULT, DEFAULT, NULL,  7, 'M', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 0, 'Focused Firing', 'Increases accuracy of the Dartling Gun.', 300, 150, 'note:(1-0-0) spread reduced to 9.2 degrees,cross:103:note:(1-0-3) grants distance to projectiles +25%', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 1, 'Laser Shock', 'Laser tipped shots shock bloons into popping again 1 second after being struck.', 900, 600, '1std,status:shocked:|1dur;|1d;|0.95s;desc:Deals damage on basic attack damage', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 2, 'Laser Cannon', 'Rapid fires much more powerful laser blasts that can pop frozen Bloons.', 4250, 2600, '+1d,+3p,type:energy,status:shocked:+1dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 3, 'Plasma Accelerator', 'Concentrates a powerful beam of energy to a single point.', 11000, 12500, '-1d,1std,+46p,type:plasma,status:shocked:+3dur,attack:focus:|2d;|10md;|1std;type:|plasma;desc:Focus on bloon with unused pierce;note:applies shocked status,note:(4-0-0) solid beam from the tower to the target or obstacle if in the way', 'dps,rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 4, 'Ray of Doom', 'Creates a solid line of annihilation. You can erase most Bloons at your leisure', 80000, 75000, '+24d,+14std,+950p,type:normal,status:shocked:+19d,note:(5-0-0) solid beam to edge of screen', 'gbl', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 0, 'Advanced Targeting', 'Allows Dartling Gunner to hit Camo Bloons.', 250, 130, '+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 1, 'Faster Barrel Spin', 'Makes gun fire much faster.', 950, 700, '*66%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 2, 'Hydra Rocket Pods', 'Shoots depleted bloontonium missiles that can damage all Bloons types and trigger multiple explosions.', 5250, 2700, '+5p,0.132s,attack:explosion:|1d;|6p;|8r;type:|normal;desc:Deals damage on basic attack contact', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 3, 'Rocket Storm', 'Rocket Storm ability: Launches a powerful storm of rockets in a wide cone.', 4800, 14000, '+2p,attack:explosion:+2p,abil:rocket_storm:|40clt;|9.5dur;|1i;|10j;|0.5s;desc:Launches a powerful storm of rockets;attack:rocket_storm_explosion:|5d=|10p=|8r=type|normal=desc:Deals damage on rocket contact;note:can shoot past obstacles', 'abil,bln', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 4, 'M.A.D', 'Moab Assured Destroyer. Slower firing mega missiles deal extreme damage to MOAB-class Bloons.', 60000, 60000, '550md,+4p,*300%s,attack:explosion:+2d,abil:rocket_storm:attack:rocket_storm_explosion:+4cd=+18md=+10p=+4r', 'dps,atksp,solo,blimp', 'chep');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 0, 'Faster Swivel', 'Barrel can swivel much faster.', 150, 110, 'note:(0-0-1) rotates twice as fast', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 1, 'Powerful Darts', 'Darts move faster and can pop 3 bloons each.', 1200, 650, '+2p,type:shatter,cross:402:+23p,note:(0-0-2) There is a bug from this crosspath: it overrides any other changes to damage type to shatter type', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 2, 'Buckshot', 'Shoots blasts of deadly buckshot instead of darts.', 3800, 300, '+3d,6j,+1p,130r,1.5s,type:shatter,status:knockback:|0.2dur;desc:Knoackback applied to bloons;note:300% slow for regular bloons. 150% for leads and ceramics', 'kb,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 3, 'Bloon Area Denial System', '4-barreled auto-cannon that can be set to attack automatically.', 12000, 15000, '0.375s,note:(0-0-4) gains 3 buckshot attacks with independent targeting,note:(0-0-4) each barrel has a different vertical position. so higher ones may see over obstacles that lower ones do not', 'dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 4, 'Bloon Exclusion Zone', 'Upgraded to 6 barrels and massively increased damage. Bloons are excluded from existence', 58000, 55000, '+6j,0.25s,+4d,+2p,note:(0-0-5) gains 2 more buckshot attacks,note:(0-0-5) all attacks buffed', DEFAULT, 'buff,chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 's', 0, 5, 2);
SELECT id INTO @ability_tiers_dartling_gunner_s FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_s, 'solo,bln,blimp,bad,abil,camo', 'cm,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 'a', 0, 4, 2);
SELECT id INTO @ability_tiers_dartling_gunner_a FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_a, 'bln,camo,blimp,chep,mg,abil', 'purp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 'b', 0, 2, 5);
SELECT id INTO @ability_tiers_dartling_gunner_b FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_b, 'dps,camo', 'chep,buff');


--      Monkey - Wizard Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Wizard Monkey', 'Magic', 'Hurls magical bolts of energy at the Bloons. Can upgrade to a variety of powerful spells.', 375, 'wizard-monkey.png');
SELECT id INTO @wizard_monkey FROM Monkeys WHERE name='Wizard Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @wizard_monkey);
SELECT id INTO @tower_wizard_monkey FROM Towers WHERE monkey_id=@wizard_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_wizard_monkey, 's');

--          Statistics      --  (  id,             tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_wizard_monkey, 40, 3, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.1, DEFAULT, DEFAULT, NULL,  7, 'A', 'energy', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 0, 'Guided Magic', 'Magic shots seek out the Bloons, even behind cover.', 125, 110, 'note:(1-0-0) moderate homing,note:(1-0-0) can see past obstacles,cross:110:attack:fireball:note:(1-1-0) can see past obstacles,cross:120:attack:wall_of_fire:note:(1-2-0) can be placed behind walls,cross:130:attack:flame:note:(1-3-0) can see past obstacles but will collide with them,cross:104:attack:reanimate:note:(1-0-4) zombloons travel for 250 units,cross:105:attack:reanimate_blimp_zmoab:note:(1-0-5) zmoabs travel for 300 units;attack:reanimate_blimp_zbfb:note:(1-0-5) zbfbs travel for 225 units', 'vis', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 1, 'Arcane Blast', 'Bigger, more powerful magic blasts pop through 2 layers of Bloon.', 600, 600, '+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 2, 'Arcane Mastery', 'Attacks 2X faster over 2X longer range and adds 4+ pierce.', 1300, 2300, '20r,+1d,+4p,*50%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 3, 'Arcane Spike', 'Magic does extra damage to MOAB-Class Bloons and adds a 2X attack speed bonus', 10000, 11000, '+2d,+11md,*50%s,type:plasma', 'atksp,dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 4, 'Archmage', 'A true master of magical wizardry. Gives the monkey Shimmer and Dragon''s Breath. Also doubles magic bolt fire rate and increases its pierce and damage', 32000, 35000, '+2d,+6md,+4p,*50%s,attack:shimmer:|200p;|70r;|2.5s;+camo;+decamo;desc:Attack gained by 5-0-0,attack:flame:|1d;|1cd;|4p;|70r;|0.1s;type:|fire;desc:Attack gained by 5-0-0;status:burn:|1d=|1.5s=type:|fire=|3.1dur=desc:Burn status applied with flame attack', DEFAULT, 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 0, 'Fireball', 'Every few seconds casts an explosive fireball spell.', 300, 130, 'attack:fireball:|1d;|2.2s;type:|fire;desc:Attack gained by 0-1-0;attack:explosion:|1d=|15p=|10r=type:|explosion=desc:Deals damage on fireball damage', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 1, 'Wall of Fire', 'Creates a super hot wall of fire across the track to roast the Bloons as they pass.', 950, 700, 'attack:wall_of_fire:|5.5clt;|1d;|15p;|15r;|0.15s;type:|fire;|4.5dur;desc:Passively places the wall on the closest track', DEFAULT, 'trkp');
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 2, 'Dragon\'s Breath', 'Spews endless flames at nearby Bloons and enhances Fireball and Wall of Fire.', 3000, 2600, 'attack:fireball:attack:explosion:+8d,attack:wall_of_fire:4.5clt;0.1s,attack:flame:|1d;|1cd;|4p;|50r;|0.1s;type:|fire;desc:Attack gained by 0-3-0;status:burn:|1d=|1.5s=|3.1dur=type:|fire=desc:Applies burn with flame attack', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 3, 'Summon Phoenix', 'Powerful phoenix wreaks Bloon havoc for 20 seconds.', 4000, 13000, 'abil:summon:|45clt;|20dur;desc:Summons Phoenix subtower;attack:flame:|5d=|10p=|$1r=|0.1s=type:fire=+camo=desc:Attack gained by Phoenix subtower;note:(0-4-0)summons phoenix subtower that does not inherit buffs but can receive buffs by flying through their range of influence', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 4, 'Wizard Lord Phoenix', 'Wizard Lord becomes a master of the flame, turns into a super powerful Lava Phoenix for a short time.', 54000, 35000, 'attack:fireball:attack:explosion:+18d,attack:wall_of_fire:+2d,attack:flame:+5d;+46p,abil:summon-transform:45clt;20dur;desc:Transforms into Phoenix Lord;attack:flame:+15d=50p=0.1s=type:normal=+camo=desc:Attack gained by Phoenix Lord;attack:meteor:|50d=|8j=|500p=$1r=|1s=type:|normal=+camo=desc:Attack gained by Phoenix Lord;note:(0-5-0) technically a separate tower. Not affected by buffs from original wizard', 'dps,solo', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 0, 'Intense magic', '	More powerful magic shots move faster and can pop more Bloons.', 275, 140, '+5p,cross:021:attack:wall_of_fire:+4p,cross:031:attack:flame:+2p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 1, 'Monkey Sense', 'Allows the Wizard to hit Camo Bloons.', 300, 500, '+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 2, 'Shimmer', 'Gains a dark magic attack that periodically reveals location of all nearby Camo bloons permanently.', 1700, 2200, '+20r,attack:shimmer:|200p;|70r;|2.5s;+camo;+decamo;desc:Attack gained by 0-0-3;note:Can see past obstacles', 'decamo', 'trkp');
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 3, 'Necromancer: Unpopped Army', 'Reanimate recently popped enemies as servants to destroy the Bloons.', 2800, 10000, 'attack:reanimate:|40r;|4j;|1.5s;|2d;|11p;type:|normal;desc:Spawning bloon attack gained by 0-0-4;|10dur;note:(0-0-4) spawns 1-4 zombloons (each using 1-10 pops from the graveyard) that travel backwards along the track for 175 units,note:(0-0-4) gains a graveyard that holds up to 500 bloon layers,note:(0-0-4) Pops after round 80 are worth 7-13 graveyard bloons,note:(0-0-4) +1d for every 200 graveyard bloons stacking additively up to 10 times,note:(0-0-4) -10%s for every 100 graveyard bloons stacking additively up to 5 times', 'dps,bln,rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 4, 'Prince of Darkness', 'Reanimate even more powerful bloon servants to obliterate the enemy and buffs other Necromancers.', 24000, 30000, '*25%s,attack:shimmer:*50%s,attack:reanimate_blimp_zmoab:|3s;|40d;|20p;type:normal;|20dur;desc:Zombie MOAB/Blimp creator;note: if < 2000 pops in the graveyard use 20 to spawn zmoab that travels for 225 units,attack:reanimate_blimp_zbfb:|3s;|100d;|50p;type:|normal;|13.3dur;desc:Zombie BFB Creator;note: if > 2000 pops in the graveyard use 50 to spawn zbfb that travels for 150 units', 'solo,blnc,blimp,chep', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 's', 0, 2, 5);
SELECT id INTO @ability_tiers_wizard_monkey_s FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_s, 'dps,camo,chep,bln,blimp,mg,lg', 'trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 'a', 4, 2, 0);
SELECT id INTO @ability_tiers_wizard_monkey_a FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_a, 'vis,blimp', 'buff,camo,purp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 'b', 2, 0, 5);
SELECT id INTO @ability_tiers_wizard_monkey_b FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_b, '', 'map');


--      Monkey - Super Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Super Monkey', 'Magic', 'Throws hundreds of darts and hypersonic speed with a huge attack range.', 2500, 'super-monkey.png');
SELECT id INTO @super_monkey FROM Monkeys WHERE name='Super Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @super_monkey);
SELECT id INTO @tower_super_monkey FROM Towers WHERE monkey_id=@super_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_super_monkey, 'a');

--          Statistics      --  (  id,             tower_id,  r, p, d,     bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_super_monkey, 50, 1, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.06, DEFAULT, DEFAULT, NULL, 11, 'S', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 0, 'Laser Blasts', 'Shoots powerful blasts of a laser instead of darts.', 2500, 500, '+1p,type:energy,note:(1-0-0) shoots from eye level instead of hand level so can see over some obstacles', 'frzn', 'purp');
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 1, 'Plasma Blasts', 'Plasma vaporizes almost everything it touches.', 3000, 2200, '*50%s,type:plasma', 'lead', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 2, 'Sun Avatar', 'Channels power from the core of the Sun.', 20000, 7000, '+4p,+2j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 3, 'Sun Temple', 'Tower sacrifices enhance and modify the Temple''s attacks.', 100000, 50000, 'note:(4-0-0) REFER TO RESOURCES -> TEMPLES TO LEARN HOW TO UPGRADE THE SUN TEMPLE,+4d,+14p,+15r,type:normal,note:(4-0-0) can see past obstacles', 'purp,abil,solo,rang,dps', 'chep');
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 4, 'True Sun God', 'Tremble before the AWESOME power of the TRUE Sun God!!	', 500000, 150000, '+10d,note:(5-0-0) when upgraded absorbs all towers in range for even more power with all four tower categories in effect', DEFAULT, DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 0, 'Super Range', 'Super Monkeys need Super Range.', 1000, 300, '+1p,+10r,cross:015:-1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 1, 'Epic Range', 'Why settle for super when you can have EPIC?', 1400, 1300, '+1p,+12r,cross:025:-1p', 'rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 2, 'Robo Monkey', 'Half Super Monkey, half killer robot of death. Shoots from 2 guns at once!', 8000, 6000, '+3p,+1j,10dc,15~20co', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 3, 'Tech Terror', 'Destroys most Bloons completely and utterly within blast radius.', 19000, 35000, '+2p,0.048s,type:plasma,abil:annihilate:|45clt;|2500d;|2000p;|70r;type:|normal;+camo;+blimp;desc:Obliterate bloons/blimps', 'lead,frzn,abil,blimp', 'purp');
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 4, 'The Anti-Bloon', 'Program Directive><Eradicate Bloons><INITIATE>', 90000, 85000, '+4d,+5p,+10r,type:normal,50dc,13~17co,abil:annihilate-anti_bloon:45clt;+2500d;+8000p;+50r;type:normal;+camo;+blimp', 'dps,purp', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 0, 'Knockback', 'Bloons get pushed backward or slowed after each hit.', 3000, 550, 'status:knockback:|0.5dur;desc:Bloon and Blimp knockbacker;note:(0-0-1) 125% slow (move backwards at 25% speed) for regular bloons. 60% for leads and ceramics. 30% for blimps', 'kb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 1, 'Ultravision', 'Enables Super Monkey to shoot slightly further and to see Camo Bloons.', 1200, 2000, '+3r,+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 2, 'Dark Knight', 'Dark blades increase knockback and pierce and deal extra damage to MOAB-class Bloons. Gains Darkshift ability to shift to a nearby location.', 5600, 6500, '2md,+4p,status:knockback:note:(0-0-3) 90% slow to leads and ceramics,abil:darkshift:|20clt;desc:Tower Teleporter;note:(0-0-3) teleport to a chosen point within range', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 3, 'Dark Champion', 'Champion dark blades excel at puncturing and ruining all Bloon types.Gains long-range Darkshift Ability', 60000, 47500, '+1d,+1md,+2cd,+2p,*50%s,type:normal,status:knockback:note:(0-0-4) 100% slow to leads and ceramics,abil:darkshift:note:(0-0-4) can teleport anywhere', 'abil,dps,atksp,dps', 'chep');
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 4, 'Legend of the Night', 'We turn to him, when all hope is lost...', 200000, 100000, '+3d,+15p,+4r,abil:black_hole:|120clt;|8dur;desc:The map saver;note:anything about to leak is deleted instead', 'chmp,abil', 'cd');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 's', 3, 0, 2);
SELECT id INTO @ability_tiers_super_monkey_s FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_s, 'kb,camo,dps,buff,blnc', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 'a', 3, 2, 0);
SELECT id INTO @ability_tiers_super_monkey_a FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_a, 'rng,dps,buff', 'camo');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 'b', 2, 0, 3);
SELECT id INTO @ability_tiers_super_monkey_b FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_b, 'kb,camo,blimp', 'micr');


--      Monkey - Ninja Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ninja Monkey', 'Magic', 'Stealthy and fast Monkey that throws bladed shurikens to pop the Bloons. Can target Camo Bloons.', 500, 'ninja-monkey.png');
SELECT id INTO @ninja_monkey FROM Monkeys WHERE name='Ninja Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ninja_monkey);
SELECT id INTO @tower_ninja_monkey FROM Towers WHERE monkey_id=@ninja_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ninja_monkey, 'a');

--          Statistics      --  (  id,             tower_id,  r, p, d,     bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_ninja_monkey, 40, 2, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.7, DEFAULT, DEFAULT, NULL,  6, 'D', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 0, 'Ninja Discipline', 'Increases attack range and attack speed.', 300, 150, '+7r,*62%s,cross:102:attack:caltrop:+7r=*62%s,cross:103:attack:flash_bomb:+7r,cross:104:attack:sticky_bomb:+11.5r=*62%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 1, 'Sharp Shurikens', 'Shurikens can pop 4 Bloons each.', 350, 500, '+2p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 2, 'Double Shot', 'Throws 2 shurikens at once.', 750, 2000, '+2p,+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 3, 'Bloonjitsu', 'Throws 5 shurikens at once!', 2750, 16000, '+3j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 4, 'Grandmaster Ninja', 'Throws incredibly fast, 8 shurikens per shot!', 35000, 50000, '+10r,+1d,*50%s,+3j', 'dps,rang,blnc', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 0, 'Distraction', 'Some Bloons will become distracted and move backwards.', 350, 200, 'note:(0-1-0) 15% chance to send bloons 10-300 units back', 'kb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 1, 'Counter-Espionage', 'Ninja attacks can strip camo from Bloons they damage.', 500, 600, '+decamo', 'decamo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 2, 'Shinobi Tactics', 'Increases attack speed of all ninjas in its range - more Shinobi means more attack speed, with a cap of 20', 900, 2000, 'buff:shinobi:desc:Attack speed and pierce buff increase;note:affects ninjas in range with 92% increased attack speed (stacking multiplicative) and +8 pierce (stacking additively);note:stacks up to 20 times', 'tbf,atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, true, 1, 3, 'Bloon Sabotage', 'Lasts 15 seconds. During the sabotage, all Bloons move at half speed.', 5000, 14000, 'abil:sabotage:|60clt;|15dur;desc:Bloons and blimps move at half speed;note:(0-4-0) all bloons and blimps move at half speed but not children of blimps', 'abil,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, true, 1, 4, 'Grand Saboteur', 'Ability duration is longer, and MOAB-Class Bloons spawn with less health during the sabotage.', 22000, 35000, 'abil:sabotage-grand_sabotage:+15dur;note:(0-5-0) 25% damage to new blimps entering the map', 'blimp', 'time');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 0, 'Seeking Shuriken', 'Shurikens will seek out and pop Bloons automatically.', 250, 140, 'note:(0-0-1) strong homing', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 1, 'Caltrops', 'Throws out spiked caltrops onto the track nearby.', 400, 500, 'attack:caltrop:|40r;|4.4s;|1d;|6p;desc:Attack gained by 0-0-2;type:|sharp;|70dur;note:placed randomly on path', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 2, 'Flash Bomb', 'Throws a flash bomb that stuns multiple Bloons.', 2750, 2500, 'attack:flash_bomb:|1d;|60p;|40r;desc:Attack substituted for basic attacks;type:|normal;status:stun:|1s=desc:Stun applied to bloons=+bln;note:replaces every 4th basic attack with this stun', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 3, 'Sticky Bomb', 'Throws powerful timed charges at MOAB-Class Bloons.', 4500, 15500, 'attack:sticky_bomb:|60r;|5s;-bloon;+blimp;desc:Attack gained by 0-0-4;note:can only affect blimps;status:bombed:desc:On expiry deal damage and an explosion=|3dur=|500d;attack:bombed_explosion:desc:Bombed on expiry explosion=|100d=|10p=|40r=type:|normal', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 4, 'Master Bomber', 'One Monkey MOAB demolition Machine.', 40000, 37500, 'attack:flash_bomb:+9d;status:stun:0.25dur=+blimp=note:(0-0-5) can affect blimps,attack:sticky_bomb:$1r;*40%s;status:stun:desc:Applies stun=|1dur;status:bombed:+500d;attack:bombed_explosion:+200d', 'cc', DEFAULT);

--          Paragon
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 3, 0, 'Ascended Shadow', 'The complete assassin package for dealing with any Bloon threat.', 600000, 1000000, '32d,32bd,8j,4p,70r,0.217s,type:normal,+decamo,note:All attacks (except sabotage) have a 15% chance to send bloons 10-300 units back,attack:flash_bomb:desc:Paragon attack;|5j;|70r;|1.5s;attack:bomb_explosion:desc:Bomb on contact explosion=|96d=|96bd=|50p=|40r=type:|normal=+decamo=status:stun:desc:Applied by explosion@|3dur@note:3s duration for bloons 1s for blimps;attack:mini_shuriken:desc:Bomb on contact attack=|80d=|80bd=|3j=|20p=type:|normal=+decamo,attack:sticky_bomb:desc:Paragon attack;|$1r;|5.5s;-bln;+blimp;note:Can only affect blimps;status:bombed:desc:Status applied to blimp=|3dur=|16000d=|32000bd=attack:explosion:desc:Bombed on expired@|3500d@|1400bd@|10p@|40r@type:|normal,attack:sabotage:desc:Paragon slow attack;|$1p;|$1r;|50%slow', 'decamo,cc,kb,dps,lg,stnb,blimp,bln,solo', 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 's', 5, 0, 2);
SELECT id INTO @ability_tiers_ninja_monkey_s FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_s, 'blnc,mg', 'chep,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 'a', 0, 5, 2);
SELECT id INTO @ability_tiers_ninja_monkey_a_0 FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='a' AND middle_path=5 AND bottom_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_a_0, 'abil,supp,blimp,cc,tbf', 'chep');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 'a', 5, 5, 5);
SELECT id INTO @ability_tiers_ninja_monkey_a_1 FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='a' AND top_path=5 AND middle_path=5 AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_a_1, 'lg,camo,dps', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 'b', 2, 3, 0);
SELECT id INTO @ability_tiers_ninja_monkey_b FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_b, 'camo,chep,cc,tbf,eg,mg', 'spam');


--      Monkey - Alchemist
INSERT INTO `Monkeys` VALUES (NULL, 'Alchemist', 'Magic', 'Harnessing powers of science and magic, splashes Bloons with acid, also brows various potions with different effects.', 550, 'alchemist.png');
SELECT id INTO @alchemist FROM Monkeys WHERE name='Alchemist';
INSERT INTO `Towers` VALUES (NULL, NULL, @alchemist);
SELECT id INTO @tower_alchemist FROM Towers WHERE monkey_id=@alchemist;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_alchemist, 's');

--          Statistics      --  (  id,         tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_alchemist, 45, 15, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 2, DEFAULT, DEFAULT, NULL,  6, 'F', 'acid', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 0, 'Larger Potions', 'Larger potions splash in a larger area.', 250, 140, '+5p,+7r,cross:130:attack:unstable_potion:attack:unstable_splash:+7r,cross:104:attack:gold_potion:+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 1, 'Acidic Mixture Dip', 'Throws a helpful potion at nearby Monkeys that allows them to pop Lead Bloons and do extra damage to Ceramic and MOAB-class Bloons. Wears off after several attacks.', 350, 550, 'attack:acid_drip:|45r;|10s;desc:Attack gained by 2-0-0;buff:acidfied:desc:Limited lasting damage buff=|1cd=|1md=|1fld=+lead=note:(2-0-0) stacks by adding 10 more shots each time capped at 200', 'tbf,supp,lead', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 2, 'Berserker Brew', 'Special brew gives Monkeys extra damage, range, and attack speed.', 1250, 2250, 'attack:brew:desc:Attack gained by 3-0-0;|45r;|8s;buff:berserk:desc:Damage/Pierce/Attack Speed/Percentage Range Buff=|5dur=|1d=|2p=|90%s=|10%r=note:(3-0-0) lasts 5.0 seconds or 25 shots but cannot be reapplied for 5.0 seconds', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 3, 'Stronger Stimulant', 'Extra strong brew has even more powerful effect on the target.', 3000, 10000, 'attack:brew:buff:berserk:12dur=+1d=+3p=85%s=15%r=note:(4-0-0) lasts 12.0 seconds or 40 shots', 'chep', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 4, 'Permanent Brew', 'Berserker brew becomes PERMANENT on Monkeys who drink it.', 60000, 30000, 'note:(5-0-0) acidified and berserk buffs are permanent (unless this alchemist is sold)', DEFAULT, DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 0, 'Stronger Acid', 'Acid potions dissolve Bloons faster.', 250, 140, 'status:acid:|1d;|1.5s;|4.55dur;desc:Acid status applied by basic attack', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 1, 'Perishing Potions', 'Attack potions deal more damage to MOAB-class Bloons and strip Fortified off smaller Bloons. Also strengthens Brews and Stimulants.', 475, 500, '+4md,+15fmd,+defortify,cross:220:attack:acid_drip:buff:acidfied:note:(2-2-0) +3 shots per buff,cross:320:attack:brew:buff:berserk:+1dur=note:(3-2-0) lasts 40 shots and cannot be reapplied for 4.0 seconds,cross:420:attack:brew:buff:berserk:+1dur', 'defortify', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 2, 'Unstable Concoction', 'Coats MOAB-Class Bloons in an explosive substance that causes a large explosion when they are popped.', 3000, 2500, 'attack:unstable_potion:|67.5r;|6s;-bloon;+blimp;desc:Attack gained by 0-3-0;note:Can only target blimps;attack:unstable_splash:desc:Potion on contact applies status=|3p=|14r=note:Applies unstable status,status:unstable:|50p;|40r;type:|normal;desc:Deals damage on unstable splash pop;note:(0-3-0) damage to blimps. 20 damage from MOABs. 70 damage from BFBs. 40 damage from DDTs. 400 damage from ZOMGs and BADs. 1000 damage from bosses', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, true, 1, 3, 'Transforming Tonic', 'Turns Alchemist into powerful attack Monster for 20 seconds.', 4500, 10000, 'abil:transform:desc:Transform into a monster;|60clt;|20dur;|2d;|6p;|72r;|0.03s;type:|plasma;note:(0-4-0) transforms into a monster that can see past obstacles but will collide with them', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, true, 1, 4, 'Total Transformation', 'Transforms five Monkeys nearby into crazy attack monsters for 20 seconds.', 45000, 28000, 'abil:transform-total_transform:desc:Transform into a monster along with 5 nearby towers;40clt;20dur;2d;10p;72r;0.03s;type:plasma;note:(0-5-0) additionally transforms 5 nearby towers (tier 3 or lower) into monsters', DEFAULT, DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 0, 'Faster Throwing', 'Throws acid and potions faster.', 650, 700, '*80%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 1, 'Acid Pool', 'If no Bloons are nearby Alchemist can drench nearby track with acid.', 450, 145, 'attack:puddle:desc:Attack gained from 0-0-2;1d;5p;7dur;note:creates a puddle if no bloons in range', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 2, 'Lead To Gold', 'Converts Lead Bloons to GOLD! Special solvents do extra damage to Lead Bloons, destroying them in a one shot and generating cash.', 1000, 2000, '+9ld,status:golden_lead:desc:Extra income from leads;note:gives $50 when the lead layer is popped. unaffected by income cuts or cash modifiers', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 3, 'Rubber to Gold', 'Converts all Bloons partially into gold, getting more cash per pop from affected Bloons.', 2750, 8500, 'attack:gold_potion:desc:Attack gained by 0-0-4;|45r;|5s;-bad;|15p;note:applies golden status,status:golden:desc:Increased cash modifier;note:+2 cash modifier. Making golden bloons drop 3.0x more cash (with no extra bonuses)', 'mny', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 4, 'Bloon Master Alchemist', 'Secret shrink potion converts all affected Bloons into Red Bloons', 40000, 24000, 'attack:shrink_potion:desc:Attack gained by 0-0-5;-bad;|$1r;|10s;|200p;note:transforms target into a red bloon;note:MOABs use 20 pierce. BFBs and DDTs use 50 pierce. and ZOMGs use 100 pierce', 'dps', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 's', 4, 2, 0);
SELECT id INTO @ability_tiers_alchemist_s_0 FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='s' AND middle_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_s_0, 'chep,lead,fcm,moab', 'tbf');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 's', 4, 0, 1);
SELECT id INTO @ability_tiers_alchemist_s_1 FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='s' AND bottom_path=1;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_s_1, 'tbf,lead,fcm,moab,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 'a', 5, 2, 0);
SELECT id INTO @ability_tiers_alchemist_a FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_a, 'tbf,lead,fcm,moab', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 'b', 3, 0, 1);
SELECT id INTO @ability_tiers_alchemist_b FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_b, 'tbf,chep,eg,mg', 'lg');


--      Monkey - Druid
INSERT INTO `Monkeys` VALUES (NULL, 'Druid', 'Magic', 'Creates a blast of thorns for each attack. Upgrades can call forth powers of the Jungle, Storm or Wrath.', 400, 'druid.png');
SELECT id INTO @druid FROM Monkeys WHERE name='Druid';
INSERT INTO `Towers` VALUES (NULL, NULL, @druid);
SELECT id INTO @tower_druid FROM Towers WHERE monkey_id=@druid;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_druid, 'b');

--          Statistics      --  (  id,     tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld, j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_druid, 35, 1, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 5, 1.1, DEFAULT, DEFAULT, NULL,  7, 'G', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 0, 'Hard Thorns', 'Hard thorns can pop 2 Bloons each and pop Frozen Bloons.', 250, 150, '+1p,type:normal', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 1, 'Heart of Thunder', 'Unleashes regular blasts of forked lightning that arc from Bloon to Bloon.', 1000, 750, 'attack:lightning:desc:Attack gained by 2-0-0;|5i;|35r;|2.3s;|1d;type:|plasma;note:If any pierce remain splits into 2;note:Both copies jump to a new target within 86 units,cross:205:note:(2-0-5) +1 damage for every 6000 total bloon count on screen capped at +15', 'jump', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 2, 'Druid of the Storm', 'Gusts of wind blow Bloons off the track away from the exit.', 1650, 2500, 'attack:tornado:|0d;|30p;|2.5s;type:|normal;-blimp;-lead;desc:Attack gained by 3-0-0;note:removes glue and frozen status;note:(3-0-0) sends back 100-200 units', 'kb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 3, 'Ball Lightning', 'Creates powerful balls of lightning that shoot additional lightning bolts.', 4500, 12000, 'attack:lightball:|5dur;|2d;|43r;|0.3s;desc:Attack gained by 4-0-0,attack:tornado:+30p;note:(4-0-0) sends back 150-250 units', 'supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 4, 'Superstorm', 'Superstorm blasts all Bloon types for massive damage and blows them away from the exit. Can blow away ZOMGs', 65000, 35000, '+camo,attack:lightning:+2d;+camo,attack:lightball:+3d;+camo,attack:superstorm:desc:Attack gained by 5-0-0;+camo;|12d;|200p;|4s;-bad;|5.7dur;note:MOABs use 5 pierce. BFBs 20 pierce. ZOMGs 50 pierce. DDTs 10 pierce;note:Removes glue and frozen status;note:Sends back at least 100 units;note:Sends back ZOMGs for half the distance', 'camo', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 0, 'Thorn Swarm', 'Shoots 8 thorns instead of 5.', 250, 140, '+3j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 1, 'Heart of Oak', 'Thorns convert Regrow Bloons into normal Bloons.', 250, 600, '+degrow,cross:220:attack:lightning:+degrow,cross:320:attack:tornado:+degrow,cross:420:attack:lightball:+degrow,cross:520:attack:superstorm:+degrow', 'degrow', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 2, 'Druid of the Jungle', 'Calls a vine from the ground to entangle and crush Bloons one at a time.', 950, 2000, 'attack:vine_grab:desc:Attack gained by 0-3-0;|$1r;|1.4s;status:snared:|1d=|30p=|2r=|0.3s=type:|normal=|4.5dur=+degrow=desc:Snare and pop bloons', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 3, 'Jungle\'s Bounty', 'Generates 200 money plus another 100 per Banana Farm type tower near the Druid.', 5000, 11000, '+10r,attack:vine_grab:2j,abil:jungle_bounty:desc:Money generator;|60clt;|3mpr;|240mon;note:(0-4-0) +$120 for every farm within range', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 4, 'Spirit of the Forest', 'Grows thorned vines along the path that deal constant damage plus bonus damage to ceramics, and generates lives and money when ability is activated.', 35000, 40000, '+1d,+1000mon,attack:vine_grab:0.3s;status:snared:+4d,abil:jungle_bounty:note:(0-5-0) +25 lives,attack:brambles:desc:Attack gained by 0-5-0;|$1p;|$1r;+camo;note:anywhere in range 2 damage per 0.5s. 10 ceramic damage per 0.5 seconds. 10 moab damage per 0.5 seconds. Sharp type;note:within 100 range: +1 damage per second. +4 ceramic damage per second. +4 moab damage per second. Sharp type;note:within 50 range: +1 damage per second. +4 ceramic damage per second. +4 moab damage per second. Sharp type', 'mny,dps,hlth,rang', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 0, 'Druidic Reach', 'Increases range by a large amount.', 100, 120, '+10r', 'rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 1, 'Heart of Vengeance', 'Gains attack speed up to 100 lives lost after getting this upgrade, Lives above maximum do not count.', 300, 550, 'note:(0-0-2) +x% speed capped at +100% where x is 10 + (number of lives)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 2, 'Druid of Wrath', 'Gains attack speed during the round as long as the Druid is popping Bloons.', 600, 1700, 'note:(0-0-3) +5% speed per 10 damage dealt capped at +100%. Resets if this druid is idle for 2 seconds', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 3, 'Poplust', 'Boosts attack speed for all Druids in the radius. Can stack up to 5 times on a single Druid.', 2500, 14000, 'buff:poplust:desc:Increased pierce and attack speed;|15%s;|15%p;note:affects druids in range excluding itself;note:In addition to pierce it does +15% speed and both can stack (additively) up to 5 times total', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 4, 'Avatar of Wrath', 'The more bloons there are, the more damage it does', 45000, 33000, '+3d,+5r,*50%s,note:(0-0-5) +1 damage for every 3000 rbe on screen capped at +30', 'dps', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 's', 0, 1, 5);
SELECT id INTO @ability_tiers_druid_s_0 FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='s' AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_s_0, 'dps,chmp,tbf', 'chep');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 's', 2, 0, 4);
SELECT id INTO @ability_tiers_druid_s_1 FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='s' AND bottom_path=4;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_s_1, 'dps,chep,frzn', 'spam,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 'a', 4, 0, 2);
SELECT id INTO @ability_tiers_druid_a FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_a, 'supp,frzn,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 'b', 0, 4, 1);
SELECT id INTO @ability_tiers_druid_b FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_b, 'supp,mny,abil', 'lg');


--      Monkey - Banana Farm
INSERT INTO `Monkeys` VALUES (NULL, 'Banana Farm', 'Support', 'Generates Bananas each round that convert into game money to spend on more stuff.', 1250, 'banana-farm.png');
SELECT id INTO @banana_farm FROM Monkeys WHERE name='Banana Farm';
INSERT INTO `Towers` VALUES (NULL, NULL, @banana_farm);
SELECT id INTO @tower_banana_farm FROM Towers WHERE monkey_id=@banana_farm;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_banana_farm, 'a');

--          Statistics      --  (  id,           tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld, j, s, mon, dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_banana_farm, 40, 0, 0, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 4, 0,  80,  15, NULL,  30, 'H', 'money', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 0, 'Increased Production', 'Grows 2 extra Banana bunches per round.', 500, 200, '+2j,+40mon,cross:130:+230mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 1, 'Greater Production', 'Grows 2 MORE extra Banana bunches per round.', 600, 750, '+2j,+40mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 2, 'Banana Plantation', 'Grows 16 Banana bunches per round.', 3000, 3000, '+8j,+160mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 3, 'Banana Research Facility', 'Produces 5 large Banana crates every round worth $300 each. Each crate contains 15 Bananas.', 19000, 20000, '5j,1500mon', 'mny', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 4, 'Banana Central', 'You want Banana? We have Banana!', 100000, 50000, '+4500mon,buff:productivity:desc:Farm Income Buff;note:+25% income to all 4-X-X farms;note:Stacks multiplicatively with X-2-X valuable bananas', 'tbf', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 0, 'Long Life Bananas', 'Bananas last 30 seconds before rotting instead of 15.', 300, 200, '+15dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 1, 'Valuable Bananas', 'Bananas are worth 25% more cash per bunch.', 800, 1000, 'note:(0-2-0) +25% income', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 2, 'Monkey Bank', 'Generates money each round and stores it in the bank. Earns 15% interest each round.', 3500, 3500, '+150mon,note:(0-3-0) bank\'s balance increases by 15% at the end of a round. up to a capacity of $7000', 'supp,mny', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 3, 'IMF Loan', 'IMF Loan ability: Gives you $10,000 but you have to pay it back over time.', 7500, 20000, 'abil:loan:desc:Take out a loan;|90clt;|2mpr;note:(0-4-0) loan $10k to be repaid by taking 50% from all future income,note:(0-4-) bank capacity increased by +$3000', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 4, 'Monkey-Nomics', 'For when you\'re too big to fail...', 100000, 50000, 'abil:loan-grant:50clt;note:(0-5-0) gain $10k which does not need to be repaid', DEFAULT, 'chep');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 0, 'EZ Collect', 'The collect radius of Bananas is larger. For Monkey Banks, glows when bank is full and ready to collect.', 250, 200, 'note:(0-0-1) banana collection radius +50% and expired bananas are worth 50%,cross:031:note:(0-3-1) has a flashing dollar sign when full', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 1, 'Banana Salvage', 'Uncollected Bananas auto-collect for half the amount.', 200, 950, 'note:(0-0-2)expired bananas now worth 85%. +10% sell back,cross:032:note:(0-3-2) auto collects if the balance was capped for the whole round', 'micr', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 2, 'Marketplace', 'Generates 12 bananas each round and adds the money to your total. No fuss.', 2900, 3200, '+12j,+240mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 3, 'Central Market', 'Earns heaps of money each round and gives Merchantmen +10% income.', 15000, 20000, '+800mon,buff:marketplace:desc:Buccaneer income buff;note:+10% end of round income to all X-X-3+ buccaneers;note:stacks additively up to 10 times (+100%) but does not stack with Trade Empire (X-X-5 Buccaneer)', 'mny,tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 4, 'Monkey Wall Street', 'Hub of Monkey trades earns colossal income each round.', 60000, 50000, '4000mon,note:(0-0-5) 5 end of round lives', DEFAULT, 'chep');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 's', 2, 3, 0);
SELECT id INTO @ability_tiers_banana_farm_s_0 FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='s' AND top_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_s_0, 'supp,mny,chep,eg,mg,lg', 'micr');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 's', 0, 3, 2);
SELECT id INTO @ability_tiers_banana_farm_s_1 FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='s' AND bottom_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_s_1, 'supp,mny,chep,buff,eg,mg,lg,micr', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 'a', 0, 2, 3);
SELECT id INTO @ability_tiers_banana_farm_a FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_a, 'mny,chep,eg,mg', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 'b', 5, 2, 0);
SELECT id INTO @ability_tiers_banana_farm_b FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_b, 'mny,lg', 'micr,chep');


--      Monkey - Spike Factory
INSERT INTO `Monkeys` VALUES (NULL, 'Spike Factory', 'Support', 'Automatically generates piles of Road Spikes on the nearby track. Excellent last line of defense.', 1000, 'spike-factory.png');
SELECT id INTO @spike_factory FROM Monkeys WHERE name='Spike Factory';
INSERT INTO `Towers` VALUES (NULL, NULL, @spike_factory);
SELECT id INTO @tower_spike_factory FROM Towers WHERE monkey_id=@spike_factory;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_spike_factory, 's');

--          Statistics      --  (  id,             tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon, dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_spike_factory, 34, 5, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.75, DEFAULT,  50, NULL,  8, 'J', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 0, 'Bigger Stacks', 'Creates larger piles of spikes per shot.', 800, 170, '+5p,cross:105:+35p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 1, 'White Hot Spikes', 'Cuts through Lead Bloons and Frozen Bloons.', 600, 600, 'type:normal', 'lead,frzn', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 2, 'Spiked Balls', 'Produces spiked balls that do extra damage to Ceramics and Fortified Bloons.', 2300, 2400, '+1d,+3cd,+1fd,+4p', 'supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 3, 'Spiked Mines', 'Spiked mines explode violently when they lose all their spikes.', 11000, 15000, '+3cd,attack:explosion:desc:Attack gained by 4-0-0;|10d;|2cd;|1fd;|40p;|19r;type:|explosion:status:burn:|1d=|2s=|6dur=desc:Burn applied by explosion', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 4, 'Super Mines', 'Creates gigantic exploding spiked mines that can wipe out almost anything.', 150000, 32500, '+48d,+14cd,+14fd,attack:mini_explosion:desc:Attack gained by 5-0-0;|20d;|10cd;|5fd;|30p;|20r;type:|normal,attack:explosion:+990d;0cd;+249fd;+20p;100r;type:normal', 'dps', 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 0, 'Faster Production', 'Rapidly increases production rate.', 600, 180, '*80%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 1, 'Even Faster Production', 'Increases production rate even more.', 800, 650, '*70%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 2, 'MOAB SHREDR', 'Super-Hard-Rending-Engine-Driven-Razors shred MOAB-Class Bloons.', 2500, 2500, '+4md', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, true, 1, 3, 'Spike Storm', 'Shoots out a thick layer of spikes over the entire track.', 5000, 11000, 'abil:spike_storm:desc:Cover the map in spikes;|40clt;|$1r;|0.005s;|1d;|4md;|5p;type:|sharp;|13dur;note:places 200 spikes randomly on the track', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, true, 1, 4, 'Carpet of Spikes', 'Regularly sets a carpet of spikes over the whole track.', 40000, 35000, '+2d,abil:spike_storm:+2d;note:(0-5-0) additionally triggered automatically every 15 seconds', 'micr', DEFAULT);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 0, 'Long Reach', 'Increases range which spikes can be deposited.', 150, 120, '+8r,+50dur,cross:041:abil:spike_storm:+6.5dur=note:(0-4-1) +50% lifetime', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 1, 'Smart Spikes', 'Spike Factory gains special targeting priority and accelerated production at the start of each round.', 400, 550, 'note:(0-0-2) gains 4 extra targeting options,note:(0-0-2) close targets closest point to the tower in range,note:(0-0-2) far targets furthest point from the tower in range,note:(0-0-2) smart targets point closest to the exit on active paths only,note:(0-0-2) passive ability (1 round cooldown) 4x faster for 2.5s,cross:042:abil:spike_storm:note:(0-4-2) only target active paths', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 2, 'Long Life Spikes', 'Spikes lasts much longer and can carry over one round.', 1400, 2100, '+40dur,note:(0-0-3) 1 round lifespan', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 3, 'Deadly Spikes', 'Extra deadly spikes can pop through 2 layers per spike.', 3500, 9000, '+1d,note:(0-0-4) 2 round lifespan', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 4, 'Perma-Spike', 'Spikes become almost permanent.', 30000, 29500, '+8d,+45p,4.85s,+160dur,note:(0-0-5) 3 round lifespan', 'dps,supp,buff', DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 's', 0, 2, 5);
SELECT id INTO @ability_tiers_spike_factory_s FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_s, 'mg,buff', 'lead,frzn,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 'a', 2, 4, 0);
SELECT id INTO @ability_tiers_spike_factory_a FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_a, 'blimp,bad,ddt,lead,frzn,chep', 'solo');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 'b', 3, 2, 0);
SELECT id INTO @ability_tiers_spike_factory_b FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_b, 'chep,eg,mg,scm,lead,frzn', 'spam');


--      Monkey - Monkey Village
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Village', 'Support', 'Hub of Monkey industry, has a number of different benefits to aid all of your Monkeys. Increases range of all monkeys in its radius by 10%.', 1200, 'monkey-village.png');
SELECT id INTO @monkey_village FROM Monkeys WHERE name='Monkey Village';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_village);
SELECT id INTO @tower_monkey_village FROM Towers WHERE monkey_id=@monkey_village;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_village, 'b');

--          Statistics      --  (  id,              tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,     dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_monkey_village, 40, 0, 0, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0, DEFAULT, DEFAULT, NULL,  9, 'K', 'buff', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 0, 'Bigger Radius', 'Increases influence radius of the village.', 400, 160, '+8r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 1, 'Jungle Drums', 'Increases attack speed of all Monkeys in the radius.', 1500, 1000, 'buff:support:desc:Gain increased attack speed;|85%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 2, 'Primary Training', 'All Primary Monkeys in radius get more range, pierce and projectile speed.', 800, 2000, 'buff:primary_support:desc:Increased pierce and range percentage buff;+1p;+10%r;note:affects primary towers', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 3, 'Primary Mentoring', 'All Primary Monkeys in radius get tier 1 upgrades for free.', 2500, 12000, 'buff:primary_support:+5r;note:(4-0-0) free tier 1 upgrades;note:-10% ability cooldown time', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 4, 'Primary Expertise', 'All Primary Monkeys in radius get tier 1 AND 2 upgrades for free. Gains Mega Ballista attack.', 25000, 32000, '+7r,buff:primary_support:+2p;note:(5-0-0) free tier 2 upgrades;note:(5-0-0)-10% ability cooldown time,attack:catapult:desc:Attack gained by 5-0-0;|10d;|190cd;|190md;|100p;|$1r;|3s;|2.5del;type:|normal;+camo;note:blimps use 10 pierce;note:jumps to a nearby target after hitting;note:Cannot be used with subs to gain camo detection', 'dps', DEFAULT);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 0, 'Grow Blocker', 'Prevents Regrow Bloons from working while in the radius of the Village.', 250, 150, '+degrow', 'degrow', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 1, 'Radar Scanner', 'Allows all Monkeys in the radius to attack Camo Bloons.', 2000, 2500, '+camo', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 2, 'Monkey Intelligence Bureau', 'The Bureau grants special Bloon popping knowledge, allowing nearby Monkeys to pop all Bloon types.', 7500, 3500, 'type:normal', 'tbf,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, true, 1, 3, 'Call To Arms', 'Call To Arms Ability: Gives all nearby Monkeys +50% attack speed and pops for a short time.', 20000, 20000, 'abil:call_to_arms:desc:Gain increased attack speed and perice;|45clt;|12dur;buff:ability_buff:desc:Increased percentage pierce and range buff=|50%p=|66.67%s', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, true, 1, 4, 'Homeland Defense', 'Ability affects ALL Monkeys and for 20 seconds.', 40000, 30000, 'abil:call_to_arms-homeland_defense:45clt;20dur;buff:ability_buff:100%p=50%s', DEFAULT, 'chep');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 0, 'Monkey Business', 'Provides 10% discount to all Monkeys and upgrades tier 3 or less purchased in the radius of the Village.', 500, 250, 'note:(0-0-1) +10% discount to base towers and upgrades to tier 3', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 1, 'Monkey Commerce', 'An additional 5% discount that can stack with up to 2 other Villages with this upgrade.', 500, 750, 'note:(0-0-2) +5% discount to base towers and upgrades to tier 3. stackable up to 3 time total', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 2, 'Monkey Town', 'All Monkeys within the radius of the Monkey Town get extra cash per Bloon pop.', 10000, 3000, 'note:(0-0-3) +50% cash modifier', 'mny,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 3, 'Monkey City', 'Increases influence radius and gives you a free Dart Monkey every round.', 3000, 15500, '+10r,note:(0-0-4) provides a free dart monkey at the end of each round,buff:income_support:note:+15% income;desc:Increased income in range;note:affects income towers in range', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 4, 'Monkeyopolis', 'Absorbs all nearby Banana Farms and their income, freeing up space for new Monkeys.', 5000, 28000, 'note:(0-0-5) Gains $300 * (amount spent on sacrifices / 2000) per round. minimum $300,note:(0-0-5) *actual cost of this upgrade is $5000 times the number of non-tier-5 farms in range regardless of difficulty. These farms are sacrificed to the village when upgraded', DEFAULT, DEFAULT);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 's', 2, 3, 0);
SELECT id INTO @ability_tiers_monkey_village_s FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_s, 'supp,camo,bln,tbf,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 'a', 0, 2, 0);
SELECT id INTO @ability_tiers_monkey_village_a FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_a, 'supp,camo,buff,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 'b', 0, 2, 3);
SELECT id INTO @ability_tiers_monkey_village_b FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_b, 'supp,camo,mny,buff,chep', 'eg');


--      Monkey - Engineer Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Engineer Monkey', 'Support', 'Holds a trusty nail-gun to pop the Bloons. Can upgrade to create its own nail-shooting sentry turrets.', 400, 'engineer-monkey.png');
SELECT id INTO @engineer_monkey FROM Monkeys WHERE name='Engineer Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @engineer_monkey);
SELECT id INTO @tower_engineer_monkey FROM Towers WHERE monkey_id=@engineer_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_engineer_monkey, 'c');

--          Statistics      --  (  id,               tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_engineer_monkey, 40, 3, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.7, DEFAULT, DEFAULT, NULL,  7, 'L', 'sharp', DEFAULT, DEFAULT, DEFAULT);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 0, 'Sentry Gun', 'Creates temporary sentry guns and deploys them nearby.', 500, 160, 'attack:sentry:desc:Sentry subtower creator;|25dur;|45r;|0.95s;|1d;|2p;type:|sharp;note:unable to be buffed by alchemist;note:(1-0-0) places a tower every 10 seconds randomly on land', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 1, 'Faster Engineering', 'Increased build speed produces sentries more often.', 400, 550, 'attack:sentry:note:(2-0-0) places a tower every 6 seconds randomly on land,cross:230:attack:place_foam:*60%s,cross:204:attack:trap:9s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 2, 'Sprockets', 'Increased sentry gun and Engineer attack speed.', 575, 1850, '*60%s,attack:sentry:*60%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 3, 'Sentry Expert', 'Sentries deploy with different damage types based on your need.', 2500, 9500, 'attack:crushing_sentry:desc:One of four sentries gained by 4-0-0;|2d;|1cd;|22p;|50r;|1.1s;type:|sharp;note:skipped if there are leads (unless black and white are also present) but never skipped if there are ceramics,attack:boom_sentry:desc:One of four sentries gained by 4-0-0;|50r;|0.9s;|2d;|30p;type:|explosion;note:skipped if there are blacks (unless white and lead are also present),attack:cold_sentry:desc:One of four sentries gained by 4-0-0;|50r;|1d;|15p;type:|cold;note:skipped if there are whites (unless lead and black are also present),attack:energy_sentry:desc:One of four sentries gained by 4-0-0;|2d;|8p;|50r;|0.57s;type:|energy;note:skipped if there are leads (unless black and white are also present) and always skipped if there are purples,note:(4-0-0) places crushing_sentry & boom_sentry & cold_sentry & energy_sentry on a cycle. Sentries may be skipped', 'supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 4, 'Sentry Paragon', 'Creates super-powerful but highly unstable sentries.', 32000, 30000, 'attack:champion_sentry_plasma:desc:Sentry gained by 5-0-0;|2d;|5p;|50r;|0.06s;type:|plasma,attack:champion_sentry_self_destruct:|100d;|50p;|50r;type:|plasma;desc:Self exploding attack;note:activates when sold or 2 seconds after expiring', DEFAULT, 'chep');

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 0, 'Larger Service Area', 'Shoots further and deploys sentries in a much larger area.', 250, 170, '+20r,cross:110:attack:sentry:+4r,cross:410:attack:crushing_sentry:+4r=+1md=+1fd;attack:boom_sentry:+4r=+1md=+1fd;attack:cold_sentry:+4r=+1md=+1fd;attack:energy_sentry:+4r=+1md=+1fd', 'rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 1, 'Deconstruction', 'Nail gun and Sentry shots do extra damage to MOAB-class and Fortified Bloons.', 350, 500, '+1md,+1fd,cross:120:attack:sentry:+1md=+1fd', 'fbl', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 2, 'Cleansing Foam', 'Sprays foam that removes Regrow and Camo and pops Lead Bloons.', 800, 2000, 'attack:place_foam:desc:Foam placed at a point;|60r;|2s;|1ld;|10p;type:|normal;|8.5dur;+decamo;+degrow', 'decamo,degrow,lead', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 3, 'Overclock', 'Overclock Ability: Target another tower to supercharge its attack speed for a short time.', 13500, 14000, '+12p,abil:overclock:desc:Buff a tower for a short time;|45clt;note:(0-4-0) chosen tower\'s attack speed increased by 40%;note:(0-4-0) farms can be overclocked. producing bananas is an "attack" whose cooldown changes according to the current round length;note:(0-4-0) villages can be overclocked even when not upgraded to 5-X-X the range is increased by 25%', 'abil,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 4, 'Ultraboost', 'Ultra-Overclocked Monkeys gain a small but permanent boost every time they are overclocked.', 120000, 35000, '+15p,abil:overclock-ultraboost:35clt;note:(0-5-0) additionally applies a permanent 4% reload buff which stacks additively up to 10 times (in the case of villages this is +2.5% to range)', DEFAULT, 'chep');

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 0, 'Oversize Nails', 'Massivization allows nails to pop 8 Bloons at once, including frozen. Also increases Foam and Sentry effectiveness.', 450, 150, '+5p,type:shatter,cross:101:attack:sentry:+1p=type:shatter,cross:031:attack:place_foam:+5p,cross:401:attack:crushing_sentry:+6p;attack:boom_sentry:+8p;attack:cold_sentry:+4p;attack:energy_sentry:+2p,cross:501:champion_sentry_plasma:+1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 1, 'Pin', 'Pins Bloons in place for a short time when struck.', 220, 500, 'status:pinned:desc:Pins bloons to the map;|1dur;|100%slow;note:100% slow. Ceramic and higher are immune,cross:302:attack:sentry:note:(3-0-2) sentry nail applies pinned status on damage,cross:402:note:(4-0-2) all sentries apply pinned status,cross:502:note:(5-0-2) champion sentry plasma applies pinned status', 'cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 2, 'Double Gun', 'Two guns for twice the fun.', 500, 1800, '*50%s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 3, 'Bloon Trap', 'Bloon Trap captures Bloons until full. Select to empty full trap for cash.', 3500, 11000, 'attack:trap:desc:Trap placed at selected point;|500p;|12s;+bln;-blimp;note:(0-0-4) pops any bloon (not blimps) up to its pierce limit with a +1 cash modifier but stores this cash until the pierce is entirely used up', 'supp,mny', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 4, 'XXXL Trap', 'Huge Bloon Traps can trap some of the largest Bloons in them...', 60000, 40000, 'attack:trap:10000p;-bad;+blimp;note:(0-0-5) build time removed;note:(0-0-5) the trap does not need to have more pierce than of a blimp in order to capture it', 'dps', 'chep,bad');

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 's', 0, 4, 0);
SELECT id INTO @ability_tiers_engineer_monkey_s FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_s, 'lead,fbl,abil,supp,buff,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 'a', 0, 0, 4);
SELECT id INTO @ability_tiers_engineer_monkey_a FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_a, 'supp,frzn,mny,eg,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 'b', 0, 2, 3);
SELECT id INTO @ability_tiers_engineer_monkey_b FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_b, 'lead,frzn,moab,fbl,supp,eg,chep', '');

-- HEROES --


--      Hero - Quincy
INSERT INTO `Heroes` VALUES (NULL, 'Quincy', 'Archer', 'Proud, strong and intelligent, Quincy uses his bow to perform feats of amazing skill.', 540, 0, 'quincy.png');
SELECT id INTO @quincy FROM Heroes WHERE name='Quincy';
INSERT INTO `Towers` VALUES (NULL, @quincy, NULL);
SELECT id INTO @tower_quincy FROM Towers WHERE hero_id=@quincy;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_quincy, 'b');

--          Statistics      --  (  id,      tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,      fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_quincy, 50, 3, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.95, DEFAULT, DEFAULT, NULL,  7, 'U', 'sharp', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 0, '', 'Quincy\'s arrows bounce to 3 different targets.', 0, 0, 'note:(Lvl 1) Basic attack jumps to nearby targets (50 units)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 1, '', 'Base attack bounces up to 4 targets.', 0, 180, '+1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, true, 0, 2, 'Rapid Shot', 'Triple attack speed for a short time.', 0, 460, 'abil:rapid_shot:desc:Gain increased attack speed;|60clt;|3.5dur;|33.33%s;note:duration increases 0.5 seconds per level', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 3, '', 'Slightly longer range.', 0, 1000, '+2r,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 4, '', 'Allows Quincy to detect Camo Bloons.', 0, 1860, '+camo,abil:rapid_shot:+0.5dur', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 5, '', 'Allows Quincy to fire two arrows.', 0, 3280, '+1j,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 6, '', 'Quincy shoots an exploding arrow every 3rd shot.', 0, 5180, 'attack:bomb_arrow:desc:Replaces every third basic attack;|1d;|10p;|25.7r;type:|explosion,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 7, '', 'Arrows deal triple damage to MOAB-class bloons.', 0, 8320, '+2md', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 8, '', 'Base attack bounces up to 6 targets.', 0, 9380, '+2p,attack:bomb_arrow:+2p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, true, 0, 9, 'Storm of Arrows', 'Covers a large area in a deadly rain of arrows.', 0, 13620, 'abil:storm_of_arrows:desc:Shower the screen with arrows;|70clt;|3dur;|6d;|6md;|$1p;|100r;|0.05s;type:|sharp,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 10, '', 'Increased attack speed.', 0, 16380, '0.6s,abil:rapid_shot:+0.5dur', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 11, '', 'Each arrow gets more popping power.', 0, 14400, '+1p,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 12, '', 'Small range increase.', 0, 16650, '+2r,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 13, '', 'Arrows do quad damage to MOAB-Class Bloons.', 0, 14940, '+1md,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 14, '', 'Rapid shot becomes 4x attack speed and cooldown is reduced.', 0, 16380, 'abil:rapid_shot:45clt;*25%s,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 15, '', 'More increased attack speed.', 0, 17820, '0.4s,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 16, '', 'Arrows last 25% longer.', 0, 19260, '+25%dur,attack:bomb_arrow:desc:Replaces every second basic attack,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 17, '', 'Quincy attacks faster and Storm of Arrows has reduced cooldown and 50% more arrows.', 0, 20700, '0.25s,abil:storm_of_arrows:55clt,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 18, '', 'Each arrow gets even more popping power.', 0, 16470, '+2p,abil:rapid_shot:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 19, '', 'Storm of Arrows increased damage per arrows and even more arrows.', 0, 17280, '0.2s,abil:storm_of_arrows:+4d;+4md,abil:rapid_shot:+0.5dur', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_quincy, 'blnc,chep,eg,mg,dps,blimp', 'lg');


--      Hero - Gwendolin
INSERT INTO `Heroes` VALUES (NULL, 'Gwendolin', 'Pyromaniac', 'Gwendolin believes there hasn\'t been a Bloon problem that can\'t be solved with fire. Lots of fire.', 900, 0, 'gwendolin.png');
SELECT id INTO @gwendolin FROM Heroes WHERE name='Gwendolin';
INSERT INTO `Towers` VALUES (NULL, @gwendolin, NULL);
SELECT id INTO @tower_gwendolin FROM Towers WHERE hero_id=@gwendolin;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_gwendolin, 'b');

--          Statistics      --  (  id,         tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,     dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_gwendolin, 38, 3, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.5, DEFAULT, DEFAULT, NULL,  7, 'U', 'fire', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 0, '', 'Blasts Bloons with fire from her pyro gun.', 0, 0, '', 'lead', 'purp');
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 1, '', 'Slightly increases popping power per shot.', 0, 180, '+1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, true, 0, 2, 'Cocktail of Fire', 'Hurls a flask of flammable liquid, burning bloons that pass through the fire.', 0, 460, 'abil:cocktail_of_fire:|30clt;desc:Places wall of fire on the track;attack:wall_of_fire:desc:Burning wall of fire=|1d=|40p=|15r=|0.2s=|12dur=type:|fire=+camo=note:can see past obstacles', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 3, '', 'Heat it up - Every few seconds creates a powerful blast wave of fire that pops Bloons and adds fire to nearby Monkeys\' attacks.', 0, 1000, 'attack:heat_it_up:desc:Powerful blast wave of fire;|3d;|$1p;|38r;type:|fire;note:(Lvl 4) triggered by either the 40th shot or any shot after 4.5 seconds (whichever takes longer);buff:heat_it_up:|8dur=|1p=|1ld=+lead=desc:Gain increased pierce and lead damage', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 4, '', 'Increased popping power.', 0, 1860, '+2p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 5, '', 'Attacks can cause a burn effect on target bloon.', 0, 3280, 'status:burn:|1d;|1.5s;type:|fire;|3.05dur;desc:Applied by basic attack', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 6, '', 'Heat it up has increased radius.', 0, 5180, 'attack:heat_it_up:+5r,abil:cocktail_of_fire:attack:wall_of_fire:0.1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 7, '', 'Shoots 2 blasts of fire per shot.', 0, 8320, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 8, '', 'Initial hit for per blast pops 1 extra layer.', 0, 9380, '+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, true, 0, 9, 'Firestorm', 'Sets the whole screen alight, burning all Bloons and granting the Heat It Up buff to all Monkeys.', 0, 13620, 'abil:firestorm:desc:Sets the whole screen alight;|60clt;|2d;|$1p;|$1r;type:|fire;status:burn:desc:Burns all bloons=|1d=|0.5s=|5md=|8.05dur=type:|fire', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 10, '', 'Increased attack range.', 0, 16380, '+3r,attack:heat_it_up:+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 11, '', 'Increased attack speed.', 0, 14400, '0.4s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 12, '', 'Greatly increased popping power, plus projectiles move faster and last longer.', 0, 16650, '+3p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 13, '', 'Cocktail of Fire does extra damage and sets MOAB class Bloons alight.', 0, 14940, 'abil:cocktail_of_fire:attack:wall_of_fire:+1d=note:(Lvl 14) burn applies to blimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 14, '', 'Increased attack speed.', 0, 16380, '0.3s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 15, '', 'Firestorm has increased duration. Purple Bloons are no longer immune to Gwendolin\'s attacks.', 0, 17820, 'type:normal,abil:firestorm:status:burn:10.05dur', 'purp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 16, '', 'Heat It Up empowers affected monkeys to pop 1 extra layer, and do +2 damage to Lead Bloons.', 0, 19260, 'attack:heat_it_up:+1d;+1ld', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 17, '', 'Increased attack speed.', 0, 20700, '0.15s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 18, '', 'Shoots 3 blasts of fire per shot.', 0, 16470, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 19, '', 'Firestorm does hugely increased damage.', 0, 17280, 'abil:firestorm:+3d;status:burn:+1d=+7.5md', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_gwendolin, 'eg,mg,tbf,cm', 'camo');


--      Hero - Striker Jones
INSERT INTO `Heroes` VALUES (NULL, 'Striker Jones', 'Artillery Commander', 'Striker Jones is a string Commander who uses his knowledge of long range combat to greatly boost the power of explosives.', 750, 0, 'striker-jones.png');
SELECT id INTO @striker_jones FROM Heroes WHERE name='Striker Jones';
INSERT INTO `Towers` VALUES (NULL, @striker_jones, NULL);
SELECT id INTO @tower_striker_jones FROM Towers WHERE hero_id=@striker_jones;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_striker_jones, 'b');

--          Statistics      --  (  id,             tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,          dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_striker_jones, 55, 10, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.2, DEFAULT, DEFAULT, NULL,  7, 'U', 'explosion', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 0, '', 'Striker Jones shoots a powerful bazooka to explode Bloons.', 0, 0, '', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 1, '', 'Increased blast radius.', 0, 180, '+4r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, true, 0, 2, 'Concussive Shell', 'Shoots a guided shell to the largest Bloon on screen, stunning it.', 0, 460, 'abil:concussive_shell:desc:Shoots a guided shell to the larges Bloon;|16clt;|$1r;note:can see past obstacles;attack:explosion:desc:Ability on contact explosion=|2d=|48p=|27r=type:|normal=status:stun:desc:Stun on explosion@|1dur', 'abil,stnb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 3, '', 'All Bomb Shooters and Mortar Monkeys on screen shoot 10% faster.', 0, 1000, 'buff:explosive_expert:|90%s;desc:Gain increased attack speed;note:affects all bomb and mortar towers', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 4, '', 'Makes Black Bloons less resistant to explosive attacks.', 0, 1860, 'status:blast_weakness:desc:Weakens bloons to explosions;note:(Lvl 5) black property has a 50% chance of being ignored by explosions', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 5, '', 'Blast radius and popping power for Jones''s normal attacks increase greatly.', 0, 3280, 'abil:concussive_shell:attack:explosion:+10p=+1.5r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 6, '', 'Pops 2 layers per shot and Mortar Monkeys blast radius increased by 10%.', 0, 5180, '+1d,buff:mortar_expert:desc:Gain increased percentage radius;note:+10% blast radius;note:affects all mortars', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 7, '', 'All Bomb Shooters near Jones get +5% range and +25% piercing power.', 0, 8320, 'buff:bomb_expert:desc:Gain increased percentage pierce and range;|25%p;|5%r;note:affects bomb towers in range', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 8, '', 'Increased attack speed and increased Concussive Shell pierce, damage, and stun.', 0, 9380, '0.9s,abil:concussive_shell:attack:explosion:+10d=+10p=status:stun:5dur@note:(Lvl 9) stuns bloons for 5 seconds and blimps for 3 seconds', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, true, 0, 9, 'Artillery Command', 'Resets cooldown on all Bomb Shooters and Mortar Monkeys.', 0, 13620, 'abil:artillery_command:|80clt;desc:Cooldown reset;note:Every bomb and mortar ability is immediately ready to use', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 10, '', 'Increased attack speed.', 0, 16380, '0.65s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 11, '', 'Slightly increased range and extra layer pop.', 0, 14400, '+1d,+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 12, '', 'Increased attack speed.', 0, 16650, '0.65s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 13, '', 'Concussive Shell affects a larger area for a longer duration.', 0, 14940, 'abil:concussive_shell:attack:explosion:+12r=status:stun:+2.5dur@note:(Lvl 14) 7.5 seconds on bloons. 4.5 seconds on blimps)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 14, '', 'Concussive Shell''s cooldown is reduced to 11 seconds.', 0, 16380, 'abil:concussive_shell:11clt', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 15, '', 'Increased attack speed.', 0, 17820, '0.35s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 16, '', 'Increased range and pops 4 layers per shot.', 0, 19260, '+1d,+2r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 17, '', 'All Bomb Shooters and Mortar Monkeys get +10% attacking speed.', 0, 20700, 'buff:explosive_expert:80%s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 18, '', 'Increased attack speed and makes all Black Bloons vulnerable to explosive damage.', 0, 16470, '0.2s,status:blast_weakness:note:(Lvl 19) black property is always ignored by explosions', 'black', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 19, '', 'Artillery Command also gives double damage and popping power to all Bomb Shooters and Mortar Monkeys for 10 seconds.', 0, 17280, 'abil:artillery_command:10dur;note:(Lvl 20) for the next 10s every bomb and mortar has double damage and double pierce', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_striker_jones, 'supp', 'camo,trkp');


--      Hero - Obyn Greenfoot
INSERT INTO `Heroes` VALUES (NULL, 'Obyn Greenfoot', 'Forest Guardian', 'Commanding powers of nature, Obyn can shoot through solid obstacles with his spirit wolf attack.', 650, 0, 'obyn-greenfoot.png');
SELECT id INTO @obyn_greenfoot FROM Heroes WHERE name='Obyn Greenfoot';
INSERT INTO `Towers` VALUES (NULL, @obyn_greenfoot, NULL);
SELECT id INTO @tower_obyn_greenfoot FROM Towers WHERE hero_id=@obyn_greenfoot;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_obyn_greenfoot, 'c');

--          Statistics      --  (  id,              tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,    s,     mon,     dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_obyn_greenfoot, 43, 4, 2, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.35, DEFAULT, DEFAULT, NULL,  7, 'U', 'plasma', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 0, '', 'Sends wolf spirits to attack the Bloons.', 0, 0, 'note:moderate homing', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 1, '', 'Nature\'s Wrath: All Druids in range get +1 pierce.', 0, 180, 'buff:natures_wrath:desc:Gain increased pierce;|1p;note:affects all druids in range', 'tbf', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, true, 0, 2, 'Brambles', 'Creates a spiked bush on the track that can pop 50 bloons.', 0, 460, 'abil:brambles:desc:Spiked bush placed on track;|35clt;|1d;|50p;type:|sharp;|120dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 3, '', 'Every 18 seconds creates a totem that slows all bloons near the totem by 30%. Less effective vs MOAB-class Bloons.', 0, 1000, 'attack:natures_ward:desc:Passively creates a slowing totem;|18s;|32r;|15dur;|30%slow;note:(Lvl 4) 30% slow for bloons. 15% for blimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 4, '', 'Increased attack speed.', 0, 1860, '1.1s,buff:jungle_support:desc:Gain increased percentage range to druids;|20%r;note:affects all X-3-X+ druids', 'cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 5, '', 'Increased popping power and projectiles move faster.', 0, 3280, '+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 6, '', 'Brambles can pop 100 bloons.', 0, 5180, 'abil:brambles:+50p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 7, '', 'Nature\'s ward totems slow down bloons by 40%.', 0, 8320, 'attack:natures_ward:note:(Lvl 8) 40% slow for bloons. 20% for blimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 8, '', 'Attack pops extra layers.', 0, 9380, '+2d,buff:storm_support:desc:Gain increased moab damage;|1md;note:affects all 3-X-X+ druids', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, true, 0, 9, 'Wall of Trees', 'Summons a wall of trees across the track that destroy all Bloons that enter. When full, the tress burst into money.', 0, 13620, 'abil:wall_of_trees:desc:Summons a wall of trees across the track;|90clt;|3000p;note:pops anything up to its pierce limit with a +1 cash modifier but stores this cash until the pierce is entirely used up', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 10, '', 'Nature\'s Clarity — all Magic Monkeys in range get an additional +5 range and +2 pierce, and Druids get an additional +1 pierce.', 0, 16380, 'buff:natures_wrath:+2p;note:(Lvl 11) affects magic towers in range;note:(Lvl 11) stacks with the existing +1p for druids,buff:natures_clarity:desc:Gains increased range;|5r;note:Affects magic towers in range;note:applies after all other buffs so is not affected by multipliers', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 11, '', 'Increased attack speed.', 0, 14400, '0.8s,buff:natures_energy:desc:Gain lower cooldown times;note:-5% ability cooldown times;note:Affects all magic towers', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 12, '', 'Further increased popping power and projectile speed.', 0, 16650, '+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 13, '', 'Attack pops extra layers.', 0, 14940, '+2d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 14, '', 'Nature''s Ward slows Bloons by 60%, and has reduced cooldown.', 0, 16380, 'attack:natures_ward:12s;note:(Lvl 15) 60% slow for bloons. 30% for blimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 15, '', 'Brambles pop 500 Bloons each and can damage all Bloon type.', 0, 17820, 'abil:brambles:+400p;type:normal', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 16, '', 'Increased attack speed.', 0, 19260, '0.5s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 17, '', 'Improved Wrath — all Druid of Wrath pops start each round at 200.', 0, 20700, 'buff:wrath_support:desc:Druid popper;note:whenever a round starts wrath counter is set to the maximum 200 pops for +100% speed;note:affects all X-X-3+ druids', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 18, '', 'Attack pops extra layers.', 0, 16470, '+2d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 19, '', 'Wall of Trees can hold a lot more Bloons.', 0, 17280, 'abil:wall_of_trees:+2000p', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_obyn_greenfoot, 'lead,eg', 'camo,purp,supp');


--      Hero - Captain Churchill
INSERT INTO `Heroes` VALUES (NULL, 'Captain Churchill', 'Tank', 'In his armored battle tank, the captain is a no-nonsense powerhouse on the battlefield.', 2000, 2500, 'captain-churchill.png');
SELECT id INTO @captain_churchill FROM Heroes WHERE name='Captain Churchill';
INSERT INTO `Towers` VALUES (NULL, @captain_churchill, NULL);
SELECT id INTO @tower_captain_churchill FROM Towers WHERE hero_id=@captain_churchill;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_captain_churchill, 'b');

--          Statistics      --  (  id,                 tower_id,  r,  p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,          dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_captain_churchill, 63, 15, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.7, DEFAULT, DEFAULT, NULL,  8, 'U', 'explosion', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 0, '', 'Piercing bombs shot from the tank can explode up to 3 times.', 0, 0, '', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 1, '', 'Increased popping power per shot.', 0, 308, '+3p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, true, 0, 2, 'Armor Piercing Shells', 'Shots can pop Black Bloons and do extra damage to Ceramic Bloons. Duration increases as Churchill levels.', 0, 787, 'abil:armor_piercing_shells:desc:Buffs all attacks;|90clt;|9dur;|3cd;|3md;type:|normal;note:Buffs explosion with increased ceramic and moab damage;note:All tower attacks have normal as its type', 'abil,cm,black', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 3, '', 'Increased attack range.', 0, 1710, '+3r,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 4, '', 'Adds a fast firing machine gun to the tank.', 0, 3181, 'attack:machine_gun:desc:Attack gained by Lvl 5;|1d;|1p;|66r;|0.1s;type:|sharp,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 5, '', 'Binoculars allow Churchill to pop Camo Bloons.', 0, 5609, '+camo,abil:armor_piercing_shells:+0.5dur', 'camo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 6, '', 'Shells deal more damage and can explode 4 times instead of 3.', 0, 8858, '+1d,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 7, '', 'Increased attack speed.', 0, 14227, '0.5s,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 8, '', 'Shells can explode 5 times.', 0, 16040, 'abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, true, 0, 9, 'MOAB Barrage', 'Launches a barrage of shells at up to 10 MOAB-Class Bloons on screen, dealing massive damage each time.', 0, 23290, 'abil:moab_barrage:desc:Barrage of shells launched to Blimps;|60clt;|8dur;|200d;|0.5s;type:|normal;note:Attacks up to 16 times or until target pops;note:gains up to 10 barrage attacks. one for each of the 10 strongest blimps,abil:armor_piercing_shells:+0.5dur', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 10, '', 'Increased popping power per shell.', 0, 28010, '+5p,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 11, '', 'Shells get additional increased damage and can explode 6 times.', 0, 24624, '+1d,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 12, '', 'Armor Piercing Shells pop 2 layers of Bloon and do extra damage to Ceramic and higher.', 0, 28472, 'abil:armor_piercing_shells:+1d;+7cd;+7md;+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 13, '', 'Machine Gun and Main Gun can pop 1 additional layer per shot.', 0, 25547, '+1d,attack:machine_gun:+1d,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 14, '', 'All attacks do extra damage vs Fortified Bloons.', 0, 28010, '+1fd,attack:machine_gun:+1fd,abil:armor_piercing_shells:+0.5dur', 'fbl', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 15, '', 'Increased attack speed.', 0, 30472, '0.3s,abil:armor_piercing_shells:+0.5dur', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 16, '', 'Armor Piercing Shells do even more damage.', 0, 32935, 'abil:armor_piercing_shells:+2d;+11cd;+11md;+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 17, '', 'All shells pop an extra layer of Bloon.', 0, 35397, '+1d,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 18, '', 'Shells can explode 7 times.', 0, 28164, 'abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 19, '', 'MOAB Barrage and Main Gun do massively increased damage per hit.', 0, 29549, 'abil:moab_barrage:30clt;+300d;note:(Lvl 20) Churchill +3 damage;note:(Lvl 20) Up to 8000 damage total per blimp,abil:armor_piercing_shells:+0.5dur', DEFAULT, DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_captain_churchill, 'dps', 'chep,ddt,xp');


--      Hero - Benjamin
INSERT INTO `Heroes` VALUES (NULL, 'Benjamin', 'Code Monkey', 'Using his elite hacking skills, Benjamin can generate extra money for the cause.', 1200, 3000, 'benjamin.png');
SELECT id INTO @benjamin FROM Heroes WHERE name='Benjamin';
INSERT INTO `Towers` VALUES (NULL, @benjamin, NULL);
SELECT id INTO @tower_benjamin FROM Towers WHERE hero_id=@benjamin;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_benjamin, 'a');

--          Statistics      --  (  id,        tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s, mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_benjamin, 20, 0, 0, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0, 100, DEFAULT, NULL,  7, 'U', 'hacks', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 0, '', 'Hacks in income of $100 every round.', 0, 0, '100mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 1, '', 'Generates $150 per round instead of $100', 0, 270, '+50mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, true, 0, 2, 'Biohack', '4 closest Monkeys pop an extra layer per attack for 6 seconds. Affected Monkeys can\'t attack for 2 seconds after effect ends.', 0, 690, 'abil:biohack:desc:Buffs nearest towers;|30clt;buff:hacked:desc:Damage buff applied to nearest 4 attacking towers=|6dur=|1d=note:Cannot attack for 2 seconds after buff expires=note:(Lvl 3) Applies buff to 4 nearest attacking towers', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 3, '', 'Skimming - Earns +$1 for every new Bloon spawned.', 0, 1500, 'attack:skimming:|1mon;note:(Lvl 4) $1 income for each new bloon spawned', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 4, '', 'Bank Hack - All banks earn +5% income.', 0, 2790, 'buff:bank_hack:desc:Increased bank income;note:(Lvl 5) +5% income;note:(Lvl 5) affects all X-3-X+ farms', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 5, '', 'Cyber Security - Restores 5 lives at the end of each round up to maximum.', 0, 4920, 'note:+5 end of round healing', 'hlth', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 6, '', 'Bloon Trojan - Every few seconds sends a Trojan software virus to random Bloon. Affected Bloon spawns no children when destroyed and produces 2x cash.', 0, 7770, 'attack:bloon_trojan:desc:Attack gained by Lvl 7;|$1r;|5s;note:targets a random bloon from pink to moab;status:corrupted:desc:Spawns no children=note:Cash bonus applied on bloon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 7, '', 'Income increased to $250 per round.', 0, 12480, '+100mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 8, '', 'Bank hack increased to 12%.', 0, 14070, 'buff:bank_hack:note:(Lvl 9) now +12% income', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, true, 0, 9, 'Syphon Funding', 'Downgrades most newly spawned Bloons by 1 tier. Cash per pop from affected Bloons is double. Lasts 10 seconds.', 0, 20430, 'abil:syphon_funding:desc:Spawn smaller bloons;|65clt;|10dur;-ddt;-bad;note:(Lvl 10) Any new spawns other than a DDT or BAD will be one rank lower and give double cash', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 10, '', 'Income increased to $300 per round.', 0, 24570, '+50mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 11, '', 'Skimming increased to $2 per Bloon.', 0, 21600, 'attack:skimming:note:(Lvl 12) Now a $2 income', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 12, '', 'Biohack increases bonus damage and affects 6 monkeys for 8 seconds.', 0, 24975, 'abil:biohack:buff:hacked:+2d=8dur=desc:Damage buff applied to nearest 6 attacking towers=note:(Lvl 13) Applies buff to 6 nearest attacking towers', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 13, '', 'Cyber Security adds 10 lives per round and can go up to 100 over starting lives.', 0, 22410, 'note:(Lvl 14) increased starting lives not available in impoppable or chimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 14, '', 'Income increased to $500 per round.', 0, 24570, '+200mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 15, '', 'Bloon Trojan is sent more often and earns more cash.', 0, 26730, 'attack:bloon_trojan:3s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 16, '', 'Income increased to $800.', 0, 28890, '+300mon', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 17, '', 'Bloon Trojan can affect BFBs and DDTs Bloons.', 0, 31050, '+camo,attack:bloon_trojan:+bfb;+ddt', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 18, '', 'Biohack lasts 9 seconds and affected Monkeys pop 3 extra layers instead of 2.', 0, 24705, 'abil:biohack:buff:hacked:+3d=9dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 19, '', 'Syphon Funding lasts 20 seconds and cash per pop is tripled for affected Bloons.', 0, 25920, 'abil:syphon_funding:20dur;note:(Lvl 20) affected bloons now give triple cash', DEFAULT, DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_benjamin, 'mny,supp,hlth,eg,mg', 'chmp');


--      Hero - Ezili
INSERT INTO `Heroes` VALUES (NULL, 'Ezili', 'Voodoo Monkey', 'Ezili is a wielder of dark arts and manipulator of Bloons. Beware.', 600, 3000, 'ezili.png');
SELECT id INTO @ezili FROM Heroes WHERE name='Ezili';
INSERT INTO `Towers` VALUES (NULL, @ezili, NULL);
SELECT id INTO @tower_ezili FROM Towers WHERE hero_id=@ezili;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ezili, 'c');

--          Statistics      --  (  id,     tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_ezili, 40, 5, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.2, DEFAULT, DEFAULT, NULL,  7, 'U', 'plasma', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 0, '', 'Ezili curses Bloons with dark voodoo power.', 0, 0, '+camo,attack:splash:desc:Deals damage on basic attack contact;|1d;|5p;|8r;type:|plasma,status:cursed:desc:Applied by basic attack;|1d;|2.5s;|2.6dur;note:if the target is already cursed its duration is refreshed', 'camo', 'purp');
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 1, '', 'Increased attack range.', 0, 256, '+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 2, 'Heartstopper', 'Prevents any Regrow from happening for 6 seconds.', 0, 655, 'abil:heartstopper:desc:Prevents any Regrow;|60clt;|6dur;|$1r;|$1p;|0.1s;+degrow', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 3, '', 'Ezili\'s main attack now curses multiple bloons.', 0, 1425, 'attack:splash:note:(Lvl4) Applies cursed status', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 4, '', 'Increases attack speed.', 0, 2650, '1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 5, '', 'Damage over time lasts longer and damages faster.', 0, 4674, 'status:cursed:1.8s;5.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 6, 'Sacrificial Totem', 'A totem that gives Camo detection, extra pierce, attack range, attack speed, and projectile speed to nearby Monkeys. Drains 10 lives.', 0, 7381, 'abil:sacrificial_totem:|90clt;desc:Places a totem that buffs towers;|78r;|30dur;note:(Lvl 7) costs 10 lives;buff:support:desc:Buffs towers with increase pierce and percentage range & attack speed=|1p=|20%r=|86%s=+camo=note:affects all towers in range', 'abil,tbf', 'hlth');
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 7, '', 'Ezili\'s attack does far more damage to MOAB-Class Bloons.', 0, 11856, '+19md;status:cursed:+1d;+19md', 'blimp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 8, '', 'Ezili\'s attack strips off Camo, Regrow and Fortified properties from non-MOAB Class Bloons.', 0, 13366, '+degrow,+defortify,+decamo,attack:splash:+degrow;+defortify;+decamo,note:(Lvl 9) Degrow defortify and decamo not applied to blimps', 'degrow,defortify,decamo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 9, 'MOAB Hex', 'places a curse on a MOAB-Class Bloon, it takes damage every second until annihilated.', 0, 19408, 'abil:moab_hex:desc:Place a curse on a Blimp until its destroyed;|60clt;|25dur;-bad;note:transfers to the next target if it pops with time remaining;note:Spawns no children', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 10, '', 'Increased attack range. Increases pierce of reanimated Bloons by 50%.', 0, 23341, '+2r;note:(Lvl 11)gains buff for all X-X-4+ wizards: zombloon +1 pierce zmoab +10 pierce', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 11, '', 'Heartstopper reduced cooldown and increased duration.', 0, 20520, '+10md,attack:splash:+10md,abil:heartstopper:45clt;15dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 12, '', 'Base attack larger splash radius and increased pierce.', 0, 23726, 'attack:splash:+10p;+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 13, '', 'Faster damage over time.', 0, 21289, 'status:cursed:4.05dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 14, '', 'Increased range.', 0, 23341, '+2r,status:cursed:6.05dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 15, '', 'Sacrificial Totem lasts longer and only costs 1 life to use.', 0, 25393, 'abil:sacrificial_totem:60dur;note:(Lvl 16) costs 1 life', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 16, '', 'Base attack has an even larger splash radius and increased pierce.', 0, 27445, 'attack:splash:+10p,+2r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 17, '', 'Increased attack speed.', 0, 29497, '0.8s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 18, '', 'Each damage tick from base attack pop 2 layers.', 0, 23469, 'status:cursed:+1d;+10md;1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 19, '', 'MOAB Hex works faster and can destroy BAD Bloons.', 0, 24624, '+20md,attack:splash:+20md,abil:moab_hex:40clt;+bad', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_ezili, 'lead,bln,fbl,scm,chep', 'eg,grpb');


--      Hero - Pat Fusty
INSERT INTO `Heroes` VALUES (NULL, 'Pat Fusty', 'Giant Monkey', 'Pat is a huge Monkey of enormous strength. His unique size and power is a great asset in the war on bloons.', 800, 3000, 'pat-fusty.png');
SELECT id INTO @pat_fusty FROM Heroes WHERE name='Pat Fusty';
INSERT INTO `Towers` VALUES (NULL, @pat_fusty, NULL);
SELECT id INTO @tower_pat_fusty FROM Towers WHERE hero_id=@pat_fusty;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_pat_fusty, 's');

--          Statistics      --  (  id,         tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd, cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_pat_fusty, 24, 5, 3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT,  2, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1.1, DEFAULT, DEFAULT, NULL,  7, 'U', 'normal', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 0, '', 'Pat slams Bloons into the ground.', 0, 0, 'attack:aoe:|2d;|2cd;|10p;|8r;type:|normal;desc:Deals damage on basic attack contact', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 1, '', 'Increased radius of Pat\'s slam attack.', 0, 256, 'attack:aoe:+5r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, true, 0, 2, 'Rallying Roar', 'All nearby Monkeys can pop +1 layer for a short time.', 0, 655, 'abil:rallying_roar:desc:Gain increased damage buff;|45clt;|8dur;|30r;|1d;note:includes self', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 3, '', 'Increased attack speed.', 0, 1425, '0.9s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 4, '', 'Pat sometimes does a slap attack that pushes Bloons back a considerable distance.', 0, 2650, 'attack:slap:desc:Replaces every 5th basic attack;|10p;-bfb;-zomg;-ddt;-bad;status:knockback:desc:Knockback bloons=|1dur=note:move backwards at 3x normal speed. Also applies aoe on contact', 'kb,cc', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 5, '', 'Bloons hit by Pat are stunned for a short time.', 0, 4674, 'attack:aoe:+7r;status:stun:desc:Stun bloons in aoe=|0.3dur', 'stnb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 6, '', 'Increased popping power.', 0, 7381, '+1d,attack:aoe:+1d;+10p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 7, '', 'Increased attack speed.', 0, 11856, '0.75s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 8, '', 'Increased range.', 0, 13366, '+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, true, 0, 9, 'Big Squeeze', 'Grabs a MOAB, BFB, ZOMG, or DDT (if granted camo detection) and crushes it over 5 seconds.', 0, 19408, 'abil:big_squeeze:desc:Squeezes biggest blimp to annihilation;|20clt;|5dur;|35r;+moab;+bfb;+zomg;+ddt;-bad;note:stuns children for 2 seconds;note:cannot use any other attack for the duration of this ability', 'abil', 'bad');
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 10, '', 'Pops more layers per attack.', 0, 23341, '+1d,attack:aoe:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 11, '', 'Increased attack speed.', 0, 20520, '0.65s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 12, '', 'Attacks stun Bloons for longer and can stun MOAB-Class Bloons briefly.', 0, 23726, 'attack:aoe:status:stun:note:(Lvl 13) 0.5 seconds for bloons. 0.2 seconds for blimps', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 13, '', 'Rallying Roar has increased range and duration and increased damage of rallied monkeys.', 0, 21289, 'abil:rallying_roar:10dur;+10r;+3d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 14, '', 'Slap attacks affect more Bloons.', 0, 23341, '+10p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 15, '', 'Increased range.', 0, 25393, '+5cd,+2r,attack:aoe:+6cd', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 16, '', 'Increased attack speed.', 0, 27445, '0.55s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 17, '', 'Increased popping power.', 0, 29497, 'attack:aoe:+10p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 18, '', 'Attack pops more layers.', 0, 23469, '+5d,attack:aoe:+5d', 'dps', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 19, '', 'Big Squeeze can grab several big Bloons at once.', 0, 24624, 'abil:big_squeeze:note:(Lvl 20) affects up to 4 blimps', DEFAULT, DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_pat_fusty, 'bln,chmp', 'camo,trkp,time');


--      Hero - Adora
INSERT INTO `Heroes` VALUES (NULL, 'Adora', 'High Priestess', 'Adora\'s devotion compels her to strike Bloons down with furious vengeance.', 1000, 5000, 'adora.png');
SELECT id INTO @adora FROM Heroes WHERE name='Adora';
INSERT INTO `Towers` VALUES (NULL, @adora, NULL);
SELECT id INTO @tower_adora FROM Towers WHERE hero_id=@adora;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_adora, 'b');

--          Statistics      --  (  id,     tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,       dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_adora, 45, 5, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, DEFAULT, DEFAULT, NULL,  7, 'U', 'plasma', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 0, '', 'Divine Bolt seeks out and destroys Bloons.', 0, 0, '', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 1, '', 'Increased attack range.', 0, 308, '+4r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 2, 'The Long Arm of Light', 'Greatly increases attack range and power for a short time & damages all Bloon Types.', 0, 787, 'abil:long_arm_of_light:desc:Gain increased pierce range and damage;|45clt;|10dur;note:main attack pierce and range are doubled and damage type is normal', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 3, '', 'Shoots double Divine Bolts.', 0, 1710, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 4, '', 'Divine bolts pierce through more Bloons.', 0, 3181, '+3p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 5, '', 'Shoots 3 Divine Bolts at a time.', 0, 5609, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 6, 'Blood Sacrifice', 'Sacrifice a targeted Tower to grant Adora large amounts of XP and boost her attack range and rate of fire for a short time.', 0, 8858, 'abil:blood_sacrifice:desc:Sacrifice a tower for increased stats;|10clt;|10dur;buff:sacrifice:desc:Gain increased range and attack speed=note:+(10+x)%range (90-x)%attack speed where x is amount sacrificed / 100 (capped at 15)=note:affects self and 3-X-X+ Super Monkeys in range;note:sacrifices a chosen tower to gain 4x the amount spent on it as XP', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 7, '', 'Shoots 4 Divine Bolts at a time.', 0, 14227, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 8, '', 'Increased attack range.', 0, 16040, '+5r', 'rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 9, 'Ball of Light', 'Brings forth a powerful ball of energy to strike down the Bloons.', 0, 23290, 'abil:ball_of_light:desc:Ball of energy dealing tons of damage;|60clt;|12dur;|3d;|8p;|$1r;|0.05s;type:|plasma;note:can see past obstacles', 'abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 10, '', 'Adora increases attack speed.', 0, 28010, '0.8s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 11, '', 'Shoots 5 Divine Bolts at a time.', 0, 24624, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 12, '', 'Divine Bolts pierce through more Bloons.', 0, 28472, '+5p,abil:ball_of_light:+5p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 13, '', 'Shoots 6 Divine Bolts at a time.', 0, 25547, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 14, '', 'Divine Bolts burn through an extra Bloon layer.', 0, 28010, '+1d,abil:ball_of_light:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 15, '', 'The Long Arm of Light becomes even more deadly.', 0, 30472, 'abil:long_arm_of_light:15dur;+2d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 16, '', 'Adora increases attack speed even more.', 0, 32935, '0.6s', 'atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 17, '', 'Shoots 8 Divine Bolts at a time.', 0, 35397, '+2j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 18, '', 'Increased attack range.', 0, 28164, '+5r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 19, '', 'Ball of Light is greatly improved.', 0, 29549, 'abil:blood_sacrifice:60dur;note:(Lvl 20)+(10+x)%r (90-x)%s where x = amount sacrificed / 50 (capped at 40),abil:ball_of_light:20dur;20d;type:normal,note:(Lvl 20) if a super monkey is upgraded to 5-X-X with Adora in range she transforms into sun-form (+8 damage, +30 pierce)', DEFAULT, DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_adora, 'lead,dps,bln,eg,buff', 'camo,purp,supp,chimp,mg');


--      Hero - Admiral Brickell
INSERT INTO `Heroes` VALUES (NULL, 'Admiral Brickell', 'Naval Commander', 'Command all your water-based Monkeys to decisive victory. Requires water to place.', 750, 5000, 'admiral-brickell.png');
SELECT id INTO @admiral_brickell FROM Heroes WHERE name='Admiral Brickell';
INSERT INTO `Towers` VALUES (NULL, @admiral_brickell, NULL);
SELECT id INTO @tower_admiral_brickell FROM Towers WHERE hero_id=@admiral_brickell;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_admiral_brickell, 'c');

--          Statistics      --  (  id,                tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_admiral_brickell, 50, 1, 3, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.8, DEFAULT, DEFAULT, NULL,  7, 'U', 'sharp', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 0, '', 'Drops powerful sea mines that seek and destroy Bloons.', 0, 0, 'attack:mine:desc:Passively places mines randomly in water;|1d;|20p;|25r;type:|explosion;|120dur;|3s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 1, '', 'Increased attack speed.', 0, 256, '0.7s,attack:mine:2.8s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, true, 0, 2, 'Naval Tactics', 'Greatly increases attack speed of nearby water-based Monkeys for a short time.', 0, 655, 'abil:naval_tactics:desc:Gain increased attack speed;|50clt;|9dur;|50%s;note:buffs water towers attack speed in range including self', 'tbf,abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 3, '', 'More popping power for Sea Mines.', 0, 1425, 'attack:mine:+8p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 4, '', 'Naval Tactics increases popping power and allows affected Monkeys to hit all Bloon types except Camo.', 0, 2650, 'abil:naval_tactics:type:normal;+1p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 5, '', 'Increases the damage of Sea Mines and Pistol attacks.', 0, 4674, '+2d,attack:mine:+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 6, '', 'Increased attack range and Camo Bloon detection.', 0, 7381, '+8r,+camo', 'camo,rang', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 7, '', 'Naval Tactics allows affected monkeys to hit Camo Bloons.', 0, 11856, 'abil:naval_tactics:+camo;+1p;note:(Lvl 8) grants a permanent +1 pierce to all water towers in radius', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 8, '', 'Sea Mines do extra damage.', 0, 13366, 'attack:mine:+5d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, true, 0, 9, 'Mega Mine', 'Deploys to any water area a devastating Mine that triggers on MOABs and stuns nearby Bloons. Mega Mines last 3 rounds.', 0, 19408, 'abil:mega_mine:desc:Places anti-blimp mine in selected location;|60clt;|4000d;|100p;|100r;type:|normal;|180dur;status:stun:|5dur=desc:Stuns on mega mine contact;note:Homes in on blimps when near enough', 'blimp', 'time');
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 10, '', 'Faster deploy speed and deploy rate for Sea Mines.', 0, 23341, 'attack:mine:2.5s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 11, '', 'Pistol attack increased speed and damage, Sea Mines increased damage.', 0, 20520, '+2d,0.4s,attack:mine:+5d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 12, '', 'Mega Mine cooldown reduced.', 0, 23726, 'abil:mega_mine:50clt', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 13, '', 'Naval Tactics duration increased.', 0, 21289, 'abil:naval_tactics:12dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 14, '', 'Enhanced Sea Mines have a larger explosion, can damage Black Bloons and can remove Camo.', 0, 23341, '+2d,attack:mine:+10r;type:normal;+decamo', 'black,decamo', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 15, '', 'Attack and Sea Mine deploy range increased slightly.', 0, 25393, '+4r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 16, '', 'Sea Mines do greatly increased damage.', 0, 27445, '+2d,attack:mine:+10d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 17, '', 'Mega Mine cooldown reduced even further.', 0, 29497, 'abil:mega_mine:40clt', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 18, '', 'Naval Tactics affects all water-based towers everywhere.', 0, 23469, 'abil:naval_tactics:note:(Lvl 19) globally affects all water towers', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 19, '', 'Mega Mine does massively increased damage and longer stun.', 0, 24624, 'abil:mega_mine:+11000d;+20r;status:stun:+5dur', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_admiral_brickell, 'camo,eg', 'wtrp,map,camo');


--      Hero - Etienne
INSERT INTO `Heroes` VALUES (NULL, 'Etienne', 'Drone Operator', 'This high-tech hero can pursue the Bloons wherever they go with his remote controlled drone.', 850, 5000, 'etienne.png');
SELECT id INTO @etienne FROM Heroes WHERE name='Etienne';
INSERT INTO `Towers` VALUES (NULL, @etienne, NULL);
SELECT id INTO @tower_etienne FROM Towers WHERE hero_id=@etienne;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_etienne, 's');

--          Statistics      --  (  id,       tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_etienne, 55, 2, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.7, DEFAULT, DEFAULT, NULL,  7, 'U', 'sharp', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 0, '', 'Flies a deadly little drone around to shoot at the Bloons.', 0, 0, 'note:drone targeting is indicated by a small light on the drone - blue = first green = last yellow = strong purple = close', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 1, '', 'Etienne\'s range increased.', 0, 180, '+5r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, true, 0, 2, 'Drone Swarm', 'Etienne launches 4 more temporary drones to wreak some Bloon popping havoc.', 0, 460, 'abil:drone_swarm:desc:Spawn extra drones;|70clt;|18.5dur;note:spawns 4 extra drones (1 blue 1 green 2 yellow)', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 3, '', 'Drones increase in popping power.', 0, 1000, '+1p,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 4, '', 'Drone increased attack speed and infra red camera allows shooting of Camo Bloons.', 0, 1860, '+camo,0.55s,abil:drone_swarm:+0.5dur', 'camo,atksp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 5, '', 'Drone Swarm ability cooldown reduced.', 0, 3280, 'abil:drone_swarm:55clt;+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 6, '', 'Etienne now controls 2 drones at once.', 0, 5180, '+1j,note:(Lvl 7) gains targeting option "divide and conquer" that is a mix of yellow and blue drones,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 7, '', 'UAV: all Monkeys gain Camo Bloon detection.', 0, 8320, 'note:(Lvl 8) Grants permanent UAV subtower,note:(Lvl 8) camo detection applied to all towers,abil:drone_swarm:+0.5dur', 'tbg,supp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 8, '', 'Drones pop an extra Bloon layer.', 0, 9380, '+1d,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, true, 0, 9, 'UCAV', 'high altitude surveillance drone becomes devastating combat drone for a short time.', 0, 13620, 'abil:ucav:desc:UAV becomes devastating combat drone;|90clt;|18dur;|10j;|$1r;|0.6s;|2d;|25p;type:|explosion,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 10, '', 'Etienne gains a third drone to control.', 0, 16380, '+1j,note:(Lvl 11) gains targeting option "zone defense" that is all different blue yellow and green drones,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 11, '', 'Drone upgrades! Increased popping power and flight speed.', 0, 14400, '+3p,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 12, '', 'UCAV ability cooldown reduced.', 0, 16650, 'abil:ucav:75clt,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 13, '', 'Drone damage increased greatly.', 0, 14940, '+1d,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 14, '', 'UCAV damage output and duration greatly increased.', 0, 16380, 'abil:ucav:20dur;+2d;+5p,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 15, '', 'Etienne\'s range, drone popping power, and Drone Swarm ability cooldown all improved.', 0, 17820, '+3p,+20r,abil:drone_swarm:50clt;+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 16, '', 'UCAV damage output greatly increased again!', 0, 19260, 'abil:ucav:+3d,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 17, '', 'Drone damage increased.', 0, 20700, '+1d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 18, '', 'Etienne now controls four drones all the time!', 0, 16470, '+1j,abil:drone_swarm:+0.5dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 19, '', 'Perma-UCAV: Surveillance drone becomes permanent UCAV. When activated becomes more powerful for a short time and can pop all Bloon types.', 0, 17280, 'abil:ucav:+8d;+5p;type:normal,abil:ucav:attack:missile:|10j=|$1r=|0.6s=note:(Lvl 20) This attack is permanent=attack:missile_explosion:|2d@|25p@|20r@type:|explosion,abil:drone_swarm:+0.5dur', 'dps', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_etienne, 'rang,dps,blnc,mg,lg,vis', 'trg,eg,cd');


--      Hero - Sauda
INSERT INTO `Heroes` VALUES (NULL, 'Sauda', 'Swordmaster', 'With a calm fury, Sauda can carve Bloons up with her twin razor-sharp swords.', 600, 5000, 'sauda.png');
SELECT id INTO @sauda FROM Heroes WHERE name='Sauda';
INSERT INTO `Towers` VALUES (NULL, @sauda, NULL);
SELECT id INTO @tower_sauda FROM Towers WHERE hero_id=@sauda;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_sauda, 's');

--          Statistics      --  (  id,     tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,  md,    fmd, cd,      fd,      ld,     fld,       j,   s,     mon,     dur, note, fp,  hk,      dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_sauda, 23, 4, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT,  1, DEFAULT,  1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 0.4, DEFAULT, DEFAULT, NULL,  7, 'U', 'sharp', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 0, '', 'Slashes with both swords at nearby Bloons', 0, 0, '', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 1, '', 'Pops more Bloons per attack.', 0, 256, '+2p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, true, 0, 2, 'Leaping Sword Attack', 'Sauda\'s dramatic leap attack slams down on her targeted Bloons.', 0, 655, 'abil:leaping_sword:desc:Leaping slam attack;|30clt;|20d;|80md;|20p;|15r;type:|normal;note:leaps to any bloon according to current targeting', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 3, '', 'Sauda\'s swords slice through 2 layers of Bloons.', 0, 1425, '+1d,+1cd,+1md', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 4, '', 'Sauda attacks faster.', 0, 2650, '0.32s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 5, '', 'Increased attack range and popping power.', 0, 4674, '+2p,+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 6, '', 'Sauda preys on the Bloons\' weakness, doing extra damage if they are stunned, and she can now pop frozen Bloons.', 0, 11856, 'type:shatter,+2d,note:(Lvl 7) +20 moab damage to stunned targets', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 7, '', 'Sauda attacks even faster.', 0, 7381, '0.25s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 8, '', 'Bloon Bleed: Sauda pops through 3 layers of Bloon with each strike, and causes a slow damage over time effect.', 0, 13366, '+1d,+1cd,+1md,status:bleed:desc:Applied by basic attack damage;|1d;|20md;|2s;|4.05dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, true, 0, 9, 'Sword Charge', 'Sauda slides along the whole track, devastating Bloons as she goes.', 0, 19408, 'abil:sword_charge:desc:Charge and damage along the whole path;|45clt;|20d;|400p;type:|normal;note:Can rehit;note:charges backwards along each path', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 10, '', 'Sauda inflicts extra damage to any Bloon slowed, immobilized, or taking damage over time from other monkeys.', 0, 23341, '+2d,note:(Lvl 11) +10 moab damage to targets with any status other than stun or bleed', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 11, '', 'Leaping Sword Attack increases greatly in power.', 0, 20520, 'abil:leaping_sword:+50d;+50md;+20p', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 12, '', 'Enchanted blades do more damage and allow Sauda to damage all Bloons.', 0, 23726, 'type:normal,+1sd', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 13, '', 'Sauda attacks even faster.', 0, 21289, '0.16s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 14, '', 'Increased attack range and popping power, and Bloon Bleed deals more damage.', 0, 23341, '+2p,+3r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 15, '', 'Sword Charge greatly increased damage.', 0, 25393, 'abil:sword_charge:+100d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 16, '', 'Sauda\'s sword attacks slice through many Bloon layers at once.', 0, 27445, '+1d,+1cd,+1md,note:(Lvl 17) +1 damage to targets with a status other than bleed,status:bleed:+9d;+30md;6dur', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 17, '', 'Sauda\'s swords attack with a blur of speed.', 0, 29497, '0.1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 18, '', 'Enchanted Blades do extra damage to Regrow, Fortified, and Camo Bloons.', 0, 23469, '+2d;note:(Lvl 19) +10 moab damage to targets with camo or regrow or fortified', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 19, '', 'Sword Charge sweeps all track paths three times!', 0, 24624, 'abil:leaping_sword:+500d;+20p,abil:sword_charge:+100d;+1000p;note:(Lvl 20) charges along each path 3 times in a row', DEFAULT, DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_sauda, 'dps,camo,atksp,bln,chep', 'rang,map,trkp');


--      Hero - Psi
INSERT INTO `Heroes` VALUES (NULL, 'Psi', 'Psionic Monkey', 'A gifted monkey child, Psi uses only the power of the mind to destroy Bloons from the inside out.', 800, 5000, 'psi.png');
SELECT id INTO @psi FROM Heroes WHERE name='Psi';
INSERT INTO `Towers` VALUES (NULL, @psi, NULL);
SELECT id INTO @tower_psi FROM Towers WHERE hero_id=@psi;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_psi, 'a');

--          Statistics      --  (  id,   tower_id,  r, p, d,      bd,     cmd,      dc,      sd,     std,      md,     fmd,      cd,      fd,      ld,     fld,       j, s,     mon,     dur, note, fp,  hk,        dt,     clt,      co,     del)
INSERT INTO `TowerStats` VALUES (NULL, @tower_psi, 20, 0, 1, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1, DEFAULT, DEFAULT, NULL,  7, 'U', 'psychic', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 0, '', 'Over any range or obstacle, Psi sets up deadly vibrations that completely destroy one Bloon at a time. Can target Camo.', 0, 0, 'status:vibrating:desc:Applied by basic attack damage;|1d;|0.2s;|15dur;note:Continues until fully popped,+camo,-purple,-lead,-ceramic,-blimp', 'camo', 'purp,lead,cm,blimp');
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 1, '', 'Attacks slightly faster.', 0, 270, '0.85s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, true, 0, 2, 'Psychic Blast', 'Psi unleashes a wave of power that stuns nearby Bloons for a long time.', 0, 690, 'abil:psychic_blast:desc:Unleash a wave of power that stuns;|40clt;|50p;|60r;|1dur;note:Pulses once;status:stun:desc:Stuns bllons and blimps=|6dur=note:(Lvl 3) bloons 6.0 seconds and blimps 1.5 seconds', 'stnb,abil', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 3, '', 'Psi\'s attack can hit another Bloon if very close to the targeted Bloon', 0, 1500, '+1p,attack:splash:desc:Attack gained by Lvl 4;|1p;|6r;note:Applies vibrating status', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 4, '', 'The psionic vibrations destroy Bloons faster than normal.', 0, 2790, 'status:vibrating:0.15s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 5, '', 'Psi\'s powerful mind can penetrate through Lead Bloons.', 0, 4920, '+lead,attack:splash:+1p', 'lead', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 6, '', 'Psychic Blast pulses twice. Psi can now destroy Ceramic Bloons.', 0, 7770, '+ceramic,abil:psychic_blast:+50p;|2s;2dur;note:(Lvl 7) Now pulses twice', 'cm', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 7, '', 'Destructive Resonance causes Bloons destroyed by Psi\'s main attack to damage other Bloons nearby.', 0, 12480, 'status:vibrating:attack:vibrating_explosion:|1d=|10p=|20r=type:|plasma=desc:Vibrating status creates an explosion', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 8, '', 'Split the Mind. Psi can now target two different Bloons at once.', 0, 14070, '+1j,note:(Lvl 9) copy of main attack that uses elite targeting', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, true, 0, 9, 'Psionic Scream', 'Psi unleashes a silent scream that throws the Bloons into utter chaos.', 0, 20430, 'abil:psionic_scream:desc:Unleashes a silent scream;|60clt;|2000p;|$1r;note:50% chance to apply vibrating status. otherwise the target is sent back 50-300 units;-purple;-blimp', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 10, '', 'The psionic vibrations destroy Bloons even faster.', 0, 24570, 'status:vibrating:0.1s', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 11, '', 'Psychic Blast pulses three times.', 0, 21600, 'abil:psychic_blast:4dur;note:(Lvl 12) Now pulses three times', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 12, '', 'Not even Purple Bloons can resist the power of Psi\'s mind attacks.', 0, 24975, '+purple,abil:psionic_scream:+purple', 'purp', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 13, '', 'Psi\'s immense psychic power allows targeting and destruction of MOABs.', 0, 22410, 'status:vibrating:+3d,+moab', 'moab', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 14, '', 'Destructive Resonance is more destructive.', 0, 24570, 'status:vibrating:attack:vibrating_explosion:+2d', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 15, '', 'The psionic vibrations destroy Bloons very fast. Psi can now target BFBs.', 0, 26730, 'status:vibrating:0.075s,+bfb', 'bfb', DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 16, '', 'Split the Mind. Psi can now target three different Bloons at once.', 0, 28890, '+1j', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 17, '', 'Psi\'s attacks affect Bloons within a larger radius of the target Bloon.', 0, 31050, 'attack:splash:+3p;+9r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 18, '', 'Destructive Resonance is much much more destructive.', 0, 24705, 'status:vibrating:attack:vibrating_explosion:+7d=+10r', DEFAULT, DEFAULT);
INSERT INTO `Abilities` VALUES (NULL, @tower_psi, false, 0, 19, '', 'Psionic Scream holds and damages all Bloons on screen. Psi can now target DDTs and ZOMGs.', 0, 25920, '+zomg,+ddt,abil:psionic_scream:+zomg;+ddt;note:(Lvl 20) chance of applying vibrating increased to 100%', 'zomg,ddt', DEFAULT);

INSERT INTO `TowerTiersInfo` VALUES (NULL, @tower_psi, 'eg,mg,lg,supp', 'xp');

