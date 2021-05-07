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

INSERT INTO `TowerTiers` VALUES (NULL, @tower_dart_monkey, 'b', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 0, 'Sharp Shots', 'Can pop 1 extra Bloon per shot.', 140, 100);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 1, 'Razor Sharp Shots', 'Can pop 2 more Bloons per shot.', 220, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 2, 'Spike-O-Pult', 'Converts the Dart Monkey into a Spike-o-pult that hurls a large spiked ball instead of darts. Good range, but slower attack speed. Each ball can pop lots of Bloons.', 300, 1900);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 3, 'Juggernaut', 'Hurls a giant spiked ball that pops lead and excels at crushing Ceramic Bloons.', 1800, 7500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 0, 4, 'Ultra-Juggernaut', 'Gigantic spiked ball splits twice into 6 Juggernaut balls for even more destructive power.', 15000, 22000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 0, 'Quick Shots', 'Shoots 15% faster.', 100, 80);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 1, 'Very Quick Shots', 'Shoots 33% faster!', 190, 400);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 2, 'Triple Shot', 'Throws 3 darts at a time instead of 1.', 400, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, true, 1, 3, 'Super Monkey Fan Club', 'Super Monkey Fan Club ability: Converts up to 10 nearby Dart Monkeys including himself into Super Monkeys for 15 seconds. Regular attack speed also increased.', 8000, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, true, 1, 4, 'Plasma Monkey Fan Club', 'Elite membership of this club grants the Dart Monkeys even more power!', 50000, 30000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 0, 'Long Range Darts', 'Makes the Dart Monkey shoot further than normal.', 90, 100);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 1, 'Enhanced Eyesight', 'Shoots even further and can detect Camo Bloons.', 200, 450);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 2, 'Crossbow', 'Uses a long range Crossbow that can pop 3 layers of Bloon for every hit.', 625, 2100);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 3, 'Sharp Shooter', 'Sharp Shooter does powerful Crit Shots every few seconds that do a lot more damage.', 2000, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 4, 'Crossbow Master', 'Crossbow Master shoots really fast and devastates most Bloon types with ease.', 25000, 35000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 's', 0, 2, 3, 0);
SELECT id INTO @ability_tiers_dart_monkey_s FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_s, 'eg,camo,chep', 'lg');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 'a', 0, 3, 2, 0);
SELECT id INTO @ability_tiers_dart_monkey_a FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_a, 'eg,camo,chep', 'lg');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dart_monkey, 'b', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_dart_monkey_b FROM AbilityTiers WHERE tower_id=@tower_dart_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dart_monkey_b, 'atksp,camo,bloons,eg,mg', 'moab');

--      Monkey - Boomerang Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Boomerang Monkey', 'Primary', 'Hurls a boomerang that follows a curved path. Good range and pierce', 325, 'boomerang-monkey.png');
SELECT id INTO @boomerang_monkey FROM Monkeys WHERE name='Boomerang Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @boomerang_monkey);
SELECT id INTO @tower_boomerang_monkey FROM Towers WHERE monkey_id=@boomerang_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_boomerang_monkey, 'b', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 0, 'Improved Rangs', 'Can pop up to 8 Bloons per throw.', 200, 100);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 1, 'Glaives', 'Throws sharper and faster glaives instead of boomerangs.', 280, 520);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 2, 'Glaive Ricochet', 'Glaives will bounce from Bloon to Bloon automatically and aggressively.', 1300, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 3, 'M.O.A.R Glaives', 'Mulitple Object Advanced Ricochet greatly enhances the already extraordinary powers of the Glaive Ricochet Monkey.', 3000, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 0, 4, 'Glaive Lord', 'Glaive Lord surrounds itself in 3 special glaives that shred anything that comes near. Glaive Lord\'s glaived now rip through MOAB-class Bloons, slowly tearing them apart from the inside.', 35000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 0, 'Faster Throwing', 'Throws 33% faster.', 175, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 1, 'Faster Rangs', 'Boomerangs travel around faster & attacks an additional 25% faster', 250, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 1, 2, 'Bionic Boomerang', 'Replaces arm with a strong bionic arm that can throw boomerangs extremely fast and does extra damage to MOAB-class bloons', 1600, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, true, 1, 3, 'Turbo Charge', 'Makes this Monkey attack incredibly fast for 10 seconds.', 4000, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, true, 1, 4, 'Perma Charge', 'Perma Charge has a permanent super fast attack speed. Ability increases the lethality even more.', 35000, 32000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 0, 'Long Range Rangs', 'Can throw boomerangs further than normal.', 100, 110);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 1, 'Red Hot Rangs', 'Allows boomerangs to pop Frozen and Lead Bloons. Also pops 2 layers.', 300, 490);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 2, 'Kylie Boomerang', 'Throws heavy Kylie boomerangs that follow a straight path instead of curved.', 1300, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 3, 'MOAB Press', 'Heavy Kylie boomerang hits MOAB-Class Bloons multiple times per throw and sometimes knocks them back a short way along the path.', 2200, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 4, 'MOAB Domination', 'Special knockback kylies trigger more often and do lots of extra damage.', 60000, 28000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 's', 2, 5, 0, 0);
SELECT id INTO @ability_tiers_boomerang_monkey_s FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_s, 'blnc,moab,dps,abil', 'trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 'a', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_boomerang_monkey_a FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_a, 'moab,frzn,lead,dps', 'fbl');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_boomerang_monkey, 'b', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_boomerang_monkey_b FROM AbilityTiers WHERE tower_id=@tower_boomerang_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_boomerang_monkey_b, 'camo,moab,kb', 'chep,ddt,trkp');



--      Monkey - Bomb Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Bomb Shooter', 'Primary', 'Launches a powerful bom that the Bloons. Slow rate of fire but afect a radius around the explosion', 600, 'bomb-shooter.png');
SELECT id INTO @bomb_shooter FROM Monkeys WHERE name='Bomb Shooter';
INSERT INTO `Towers` VALUES (NULL, NULL, @bomb_shooter);
SELECT id INTO @tower_bomb_shooter FROM Towers WHERE monkey_id=@bomb_shooter;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_bomb_shooter, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 0, 'Bigger Bombs', 'Shoots larger bombs, they have a larger blast area and more popping power.', 350, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 1, 'Heavy Bombs', 'Heavy duty bombs can smash through 2 layers of Bloon at once.', 650, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 2, 'Really Big Bombs', 'Huge bombs deal greater damage in a large area and allow Frags to pop more Bloons.', 1200, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 3, 'Bloon Impact', 'Explosions become so violent Bloons are stunned for a short time when they are hit.', 3600, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 0, 4, 'Bloon Crush', 'Bloon shattering explosions do massive damage and can stun MOAB-Class Bloons.', 55000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 0, 'Faster Reload', 'Reloads 20% faster.', 250, 180);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 1, 'Missile Launcher', 'Shoots missiles instead of bombs, missiles fly faster with longer range', 400, 640);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 1, 2, 'MOAB Mauler', 'MOAB Maulers do much more damage to MOAB-Class Bloons.', 900, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, true, 1, 3, 'MOAB Assassin', 'Assassinate MOAB ability: Special missile flies out and does massive damage to MOAB-Class Bloons. Regular attack range and MOAB-class damage also increased.', 3200, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, true, 1, 4, 'MOAB Eliminator', 'Assassinate ability does 6x damage with a shorter cooldown.', 25000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 0, 'Extra Range', 'Increases attack range', 200, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 1, 'Frag Bombs', 'Explosions throw out sharp fragments that can pop more Bloons including Black Bloons.', 300, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 2, 'Cluster Bombs', 'Throws out secondary bombs instead of sharp fragments every shot.', 800, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 3, 'Recursive Cluster', 'Every second shot the cluster bombs send out more cluster bombs for even more destruction.', 2800, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_shooter, false, 2, 4, 'Bomb Blitz', 'Deals much more damage and gains the passive Bomb Storm Ability - when lives are lost, the Bomb Storm automatically triggers which destroys all but the biggest of Bloons.', 35000, 25000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 's', 2, 3, 0, 0);
SELECT id INTO @ability_tiers_bomb_shooter_s_0 FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='s' AND middle_path=3;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_s_0, 'moab,bfb,zomg,chmp,lead,chep', 'spam');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 's', 2, 5, 0, 0);
SELECT id INTO @ability_tiers_bomb_shooter_s_1 FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='s' AND middle_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_s_1, 'zomg,ddt,bad,cm,abil', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 'a', 2, 0, 5, 0);
SELECT id INTO @ability_tiers_bomb_shooter_a FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_a, 'grpb,mg,abil', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_bomb_shooter, 'b', 4, 2, 0, 0);
SELECT id INTO @ability_tiers_bomb_shooter_b FROM AbilityTiers WHERE tower_id=@tower_bomb_shooter AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_bomb_shooter_b, 'scm,stnb,lead,chep', 'moab');



--      Monkey - Tack Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Tack Shooter', 'Primary', 'Shoots a short-range volley of sharp tacks in 8 directions.', 280, 'tack-shooter.png');
SELECT id INTO @tack_shooter FROM Monkeys WHERE name='Tack Shooter';
INSERT INTO `Towers` VALUES (NULL, NULL, @tack_shooter);
SELECT id INTO @tower_tack_shooter FROM Towers WHERE monkey_id=@tack_shooter;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_tack_shooter, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 0, 'Faster Shooting', 'Shoots tacks faster.', 150, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 1, 'Even Faster Shooting', 'Shoots tacks even faster.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 2, 'Hot Shots', 'Shoots superhot tacks that do extra damage and can pop Lead Bloons.', 600, 2400);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 3, 'Ring of Fire', 'Damages many more Bloons with a deadly ring of flame instead of tacks.', 3500, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 4, 'Inferno Ring', 'Deadly inferno of flame roasts Bloons into oblivion.', 50000, 32500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 0, 'Long Range Tacks', 'Tacks fly out further than normal.', 100, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 1, 'Super Range Tacks', 'Even longer range tacks that can pop more Bloons.', 225, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 1, 2, 'Blade Shooter', 'Switches tacks for sharp blades that can pop up to 5 additional Bloons.', 550, 2300);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, true, 1, 3, 'Blade Maelstrom', 'Blade Maelstrom ability: Covers the area in a storm of blades.', 2700, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, true, 1, 4, 'Super Maelstrom', 'Even more powerful Maelstrom ability and lasts longer.', 15000, 28000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 0, 'More Tacks', 'Shoots 10 tacks instead of 8.', 100, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 1, 'Even More Tacks', 'Shoots out 12 tacks per shot.', 100, 490);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 2, 'Tack Sprayer', 'Sprays out 16 tacks per volley.', 450, 2450);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 3, 'Overdrive', 'Shoots incredibly fast.', 3200, 8750);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 2, 4, 'The Tack Zone', 'Many, many tacks.', 24000, 26500);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 's', 2, 0, 5, 0);
SELECT id INTO @ability_tiers_tack_shooter_s FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_s, 'dps,chep,bln,moab', 'camo,trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 'a', 0, 4, 0, 0);
SELECT id INTO @ability_tiers_tack_shooter_a FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_a, 'eg,mg,abil,chep', 'camo,lead,trkp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_tack_shooter, 'b', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_tack_shooter_b FROM AbilityTiers WHERE tower_id=@tower_tack_shooter AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_tack_shooter_b, 'map,lead,dps', 'camo,purp,chep');



--      Monkey - Ice Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ice Monkey', 'Primary', 'Pops and freezes nearby Bloons for a short time. Frozen Bloons are immune to sharp damage. Can\'t freeze White, Zebra, or Lead Bloons.', 500, 'ice-monkey.png');
SELECT id INTO @ice_monkey FROM Monkeys WHERE name='Ice Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ice_monkey);
SELECT id INTO @tower_ice_monkey FROM Towers WHERE monkey_id=@ice_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ice_monkey, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 0, 'Permafrost', 'Bloons move slowly even after thawing out.', 100, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 1, 'Metal Freeze', 'Can freeze and pop Lead Bloons.', 300, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 2, 'Ice Shards', 'Razor sharp shards fly out when Frozen Bloons pop.', 1500, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 3, 'Embrittlement', 'Detects Camo Bloons and all Bloons hit become brittle, taking extra damage for a short time and losing Camo & Regrow properties permanently.', 2200, 8250);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 4, 'Super Brittle', 'Bloons take huge damage while frozen including MOAB-Class Bloons.', 28000, 25000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 0, 'Enhanced Freeze', 'Attacks faster and freezes for longer.', 225, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 1, 'Deep Freeze', 'Freezes through 2 layers of Bloon.', 350, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 2, 'Arctic Wind', 'Greatly increases pierce & gains a super cold aura that slows Bloons and freezes water nearby.', 2900, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 3, 'Snowstorm', 'Freezes all bloons on screen, and briefly freezes white, zebra, camo and MOAB class.', 3000, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 4, 'Absolute Zero', 'Ability is so cold it freezes all regular Bloons for longer, including White, Zebra, and Camo, slows MOAB-class longer, and greatly increases the attack speed of all Ice Monkeys for the duration.', 26000, 27500);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 0, 'Larger Radius', 'Larger freeze area.', 100, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 1, 'Re-Freeze', 'Can re-freeze Bloons that are already frozen.', 200, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 2, 'Cryo Cannon', 'Shoots freezing bombs at Bloons over longer range.', 1750, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 3, 'Icicles', 'Frozen Bloons grow sharp icicles that can pop Bloons that touch them.', 2000, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 4, 'Icicle Impale', 'Shoots huge icicle spikes that do huge damage to MOAB-Class Bloons and freezes them.', 30000, 30000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 's', 2, 0, 5, 0);
SELECT id INTO @ability_tiers_ice_monkey_s FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_s, 'moab,solo,cc,lead,', 'camo');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 'a', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_ice_monkey_a FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_a, 'supp,camo,bln,moab', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ice_monkey, 'b', 0, 5, 2, 0);
SELECT id INTO @ability_tiers_ice_monkey_b FROM AbilityTiers WHERE tower_id=@tower_ice_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ice_monkey_b, 'rang,abil,tbf,moab,bloon', 'chep');



--      Monkey - Glue Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Glue Gunner', 'Primary', 'Shoots a blob of sticky glue that slows Bloons down by 50%.', 275, 'glue-gunner.png');
SELECT id INTO @glue_gunner FROM Monkeys WHERE name='Glue Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @glue_gunner);
SELECT id INTO @tower_glue_gunner FROM Towers WHERE monkey_id=@glue_gunner;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_glue_gunner, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 0, 'Glue Soak', 'Glue soaks through all layers of Bloon.', 200, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 1, 'Corrosive Glue', 'Glued Bloons pop one layer every few seconds.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 2, 'Bloon Dissolver', 'Extreme solvents melt two layers every second.', 2500, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 3, 'Bloon Liquefier', 'Can glue one additional Bloon per shot and applies liquifying compounds that do 10 pops every second.', 5000, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 4, 'The Bloon Solver', 'Bloons a problem? Here\'s the solution.', 22000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 0, 'Bigger Globs', 'Can coat 2 Bloons per shot.', 100, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 1, 'Glue Splatter', 'Splatters glue across up to 6 Bloons per shot.', 1800, 900);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 2, 'Glue Hose', 'Shoots glue 3x as fast!', 3250, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 3, 'Glue Strike', 'Glue Strike Ability: Glues all Bloons on screen, causing them to take more damage from all sources while it lasts.', 3500, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 4, 'Glue Storm', 'Glue storm ability pelts the whole screen over 15 seconds with glue. Glued Bloons take extra damage while glued.', 15000, 25000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 0, 'Stickier Glue', 'Makes glue effect last much longer.', 120, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 1, 'Stronger Glue', 'Slows down Bloons even more.', 400, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 2, 'MOAB Glue', 'Improved glue formula allows it to stick to MOAB-Class Bloons.', 3400, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 3, 'Relentless Glue', 'Popped Bloons that were glued, leave a blob of glue on the track.', 3000, 8000);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 4, 'Super Glue', 'Glue so strong it temporarily immobilizes all affected Bloons!', 35000, 30000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 's', 0, 2, 3, 0);
SELECT id INTO @ability_tiers_glue_gunner_s FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_s, 'supp,moab,chep,cc,eg,mg,lg', 'camo');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 'a', 2, 5, 0, 0);
SELECT id INTO @ability_tiers_glue_gunner_a FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_a, 'supp,bln,cc,abil,eg,mg', 'moab');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_glue_gunner, 'b', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_glue_gunner_b FROM AbilityTiers WHERE tower_id=@tower_glue_gunner AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_glue_gunner_b, 'supp,cc,bln', 'moab,chep');



--      Monkey - Sniper Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Sniper Monkey', 'Military', 'Can shoot Bloons it can see anywhere on the screen with long-range rifle, and pops 2 layers off Bloons hit by it.', 350, 'sniper-monkey.png');
SELECT id INTO @sniper_monkey FROM Monkeys WHERE name='Sniper Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @sniper_monkey);
SELECT id INTO @tower_sniper_monkey FROM Towers WHERE monkey_id=@sniper_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_sniper_monkey, 'b', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 0, 'Full Metal Jacket', 'Shots pop through 4 layers of Bloon. Can pop Lead and Frozen Bloons.', 350, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 1, 'Large Calibre', 'Shots can pop through 7 layers of Bloon', 1500, 800);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 2, 'Deadly Precision', '20 damage per shot, plus bonus damage to Ceramics.', 3000, 3500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 3, 'Maim MOAB', 'Immobilizes MOAB-Class Bloons for a short time.', 5000, 10500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 4, 'Cripple MOAB', 'Crippled MOABs are immobilized for longer and take extra damage from all other attacks.', 40000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 0, 'Night Vision Goggles', 'Allows the sniper to detect and do an additional 2 damage to Camo Bloons.', 300, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 1, 'Shrapnel Shot', 'Damaged bloons spray out a cone of sharp shrapnel.', 450, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 2, 'Bouncing Bullet', 'Shots bounce to new targets up to 3 times.', 3200, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 3, 'Supply Drop', 'Supply Drop Ability: drops a crate full of cash. Regular attack also damages Lead Bloons and increases Shrapnel popping power.', 7200, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 4, 'Elite Sniper', 'Supply Drop gives much more cash. Grants Elite targeting prio to all snipers.', 13000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 0, 'Fast Firing', 'Shoots faster than normal.', 400, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 1, 'Even Faster Firing', 'Shoots even faster!', 400, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 2, 'Semi-Automatic', 'Attacks 3x as fast!', 3500, 2750);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 3, 'Full Auto Rifle', 'Fully automatic weapon with incredible popping power, including damage to Lead Bloons.', 4750, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 4, 'Elite Defender', 'A lost life gives this Sniper 4x attack speed for a short time in retaliation. Also attacks faster the further the Bloons are along the track.', 14000, 30000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 's', 4, 2, 0, 0);
SELECT id INTO @ability_tiers_sniper_monkey_s FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_s, 'camo,lead,frzn,cm,moab,supp,cc,gbl', 'lg');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 'a', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_sniper_monkey_a FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_a, 'camo,dps,lead,abil,gbl', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_sniper_monkey, 'b', 2, 5, 0, 0);
SELECT id INTO @ability_tiers_sniper_monkey_b FROM AbilityTiers WHERE tower_id=@tower_sniper_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_sniper_monkey_b, 'supp,lead,frzn,camo,abil,gbl', 'moab,chep');



--      Monkey - Monkey Sub
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Sub', 'Military', 'Shoots homing top-e-darts at nearby Bloons. Must be placed in water.', 325, 'monkey-sub.png');
SELECT id INTO @monkey_sub FROM Monkeys WHERE name='Monkey Sub';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_sub);
SELECT id INTO @tower_monkey_sub FROM Towers WHERE monkey_id=@monkey_sub;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_sub, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 0, 'Longer Range', 'Increases attack range.', 130, 125);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 1, 'Advanced Intel', 'Allows long range targeting of bloons that are in the radius of your other towers.', 500, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 2, 'Submerge and Support', 'Adds submerge targeting option permanently reveals Camo Bloons in its radius, but does not attack while submerged.', 500, 2250);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 3, 'Bloontonium Reactor', 'Submerge to detect Camo, pop Bloons and reduce ability cooldowns of nearby water-based monkeys by 15%.', 2500, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 4, 'Energizer', 'Reduces ability cooldowns everywhere by 20%. While in radius, heroes earn XP 50% faster and water Monkey ability cooldowns are halved.', 32000, 33000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 0, 'Barbed Darts', 'Sub''s darts can pop 5 Bloons each.', 450, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 1, 'Heat-tipped Darts', 'Heat tipped darts allow popping of Frozen and Lead Bloons.', 300, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 1, 2, 'Ballistic Missile', 'Missile seeks target over any distance and does extra MOAB and Ceramic damage.', 1400, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, true, 1, 3, 'First Strike Capability', 'A devastating missile strike on the largest Bloon on screen.', 13000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, true, 1, 4, 'Pre-Emptive Strike', 'Automatically triggers MOAB Assassin effect whenever MOAB-Class Bloon spawns from the Bloon entrance.', 32000, 45000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 0, 'Twin Guns', 'Added twin gun doubles attack speed. Enhances Ballistic missile and bloontonium reactor.', 450, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 1, 'Airburst Darts', 'Airburst darts split into 3 on impact for massively increased popping power. Further enhances Ballistic Missile and Bloontonium Reactor.', 1000, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 2, 'Triple Guns', 'Adds a third gun for even faster firing.', 1100, 2750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 3, 'Armor Piercing Darts', 'Special AP darts inflict more damage to MOAB-Class Bloons.', 3000, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 2, 4, 'Sub Commander', 'Grants +4 pierce and +1 damage to all Subs in its radius.', 25000, 25000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 's', 2, 0, 5, 0);
SELECT id INTO @ability_tiers_monkey_sub_s_0 FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='s' AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_s_0, 'blnc,tbf,buff,moab,rang', '');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 's', 2, 0, 3, 0);
SELECT id INTO @ability_tiers_monkey_sub_s_1 FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='s' AND bottom_path=3;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_s_1, 'chep,rang,dps', 'spam,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 'a', 4, 0, 2, 0);
SELECT id INTO @ability_tiers_monkey_sub_a FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_a, 'camo,eg,mg,bln,abil,chep', 'moab,sub,range');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_sub, 'b', 0, 4, 0, 0);
SELECT id INTO @ability_tiers_monkey_sub_b FROM AbilityTiers WHERE tower_id=@tower_monkey_sub AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_sub_b, 'abil,moab,lead,frzn', 'time');


--      Monkey - Monkey Buccaneer
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Buccaneer', 'Military', 'Shoots a single, heavy dart from both sides of the ship. Must be placed in water.', 500, 'monkey-buccaneer.png');
SELECT id INTO @monkey_buccaneer FROM Monkeys WHERE name='Monkey Buccaneer';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_buccaneer);
SELECT id INTO @tower_monkey_buccaneer FROM Towers WHERE monkey_id=@monkey_buccaneer;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_buccaneer, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 0, 'Faster Shooting', 'All weapons on board shoot faster', 350, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 1, 'Double Shot', '	Double ship weapons fired.', 500, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 2, 'Destroyer', 'Attacks super duper fast!', 2950, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 3, 'Aircraft Carrier', 'Launches waves of fighter planes that strafe the Bloons.', 7500, 12500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 0, 4, 'Carrier Flagship', 'Does extra damage. Can place other Monkeys on the upper decks of the ship and increases attack speed of all water based Monkeys and Monkey Aces.', 25000, 37000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 0, 'Grape Shot', 'Adds a spray of 5 sharpened grapes to the ship.', 550, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 1, 'Hot Shot', 'Burning hot grape shot can pop Lead Bloons and set Bloons on fire.', 500, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 1, 2, 'Cannon Ship', 'Add a powerful cannon that shoots out powerful bombs.', 900, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, true, 1, 3, 'Monkey Pirates', 'Adds 2 cannons to the ship and cannon attacks do more damage. MOAB Takedown Ability: harpoons a MOAB class Bloon and brings it down.', 4500, 13000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, true, 1, 4, 'Pirate Lord', 'Greatly increased attack speed for all attacks and can shoot 3 grappling hooks at once, plundering extra cash from each MOAB-class Bloon taken down.', 21000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 0, 'Long Range', 'Much longer range and projectiles fly faster.', 180, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 1, 'Crow''s Nest', 'Allows the ship to hit Camo Bloons.', 400, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 2, 'Merchantman', 'Generates cash each round automatically.', 2300, 3100);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 3, 'Favored Trades', 'Attacks faster and generates lots of money per round. Monkeys in radius have increased sell value and can stack up to 3 Favored Trades for 95% max sell value.', 5500, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_buccaneer, false, 2, 4, 'Trade Empire', 'Generates more cash per round, increases cash earned by up to 20 other Merchantmen by the number of Merchantmen, and boosts all Merchantmen damage.', 23000, 4000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 's', 5, 2, 0, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_s FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_s, 'lead,scm,solo,abil,tbf', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 'a', 3, 2, 0, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_a FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_a, 'lead,chep', 'camo');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_buccaneer, 'b', 2, 5, 0, 0);
SELECT id INTO @ability_tiers_monkey_buccaneer_b FROM AbilityTiers WHERE tower_id=@tower_monkey_buccaneer AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_buccaneer_b, 'lead,moab,abil', 'cd,solo,chep');



--      Monkey - Monkey Ace
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Ace', 'Military', 'Flies above the ground shooting volleys of high-pierce darts.', 800, 'monkey-ace.png');
SELECT id INTO @monkey_ace FROM Monkeys WHERE name='Monkey Ace';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_ace);
SELECT id INTO @tower_monkey_ace FROM Towers WHERE monkey_id=@monkey_ace;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_ace, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 0, 'Rapid Fire', 'Shoots faster than normal.', 650, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 1, 'Lots More Darts', 'Shoots 12 darts at a time.', 650, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 2, 'Fighter Plane', 'Flies fast and launches anti-MOAB missiles.', 1000, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 3, 'Operation: Dart Storm', 'Shoots 16 darts per volley, and twice as fast.', 3000, 8000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 4, 'Sky Shredder', 'The Bloons will wish they had never come.', 40000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 0, 'Exploding Pineapple', 'Drops pineapples to the ground that explode violently after a few seconds.', 200, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 1, 'Spy Plane', 'Allows Monkey Ace to hit Camo Bloons.', 350, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 2, 'Bomber Ace', 'Drops a line of bombs when crossing the Bloon track.', 900, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 3, 'Ground Zero', 'Bomb damage increased significantly. Ability drops a huge bomb that destroys most things on screen.', 14000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 4, 'Tsar Bomba', 'A very, very large bomb. Someone put a stop to this craziness!', 35000, 30000);

--          Botttom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 0, 'Sharper Darts', 'Darts can pop 8 Bloons each.', 500, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 1, 'Centered Path', 'New central flight path for maximum map coverage.', 300, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 2, 'Neva-Miss Targeting', 'Darts automatically seek out and pop Bloons by themselves.', 2200, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 3, 'Spectre', 'Rapidly fires darts and bombs, dominating most Bloon types easily.', 24000, 19000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 4, 'Flying Fortress', 'This is a BIG plane', 100000, 45000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 's', 2, 4, 0, 0);
SELECT id INTO @ability_tiers_monkey_ace_s FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_s, 'abil,scm,ddt,camo,bln', 'time');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 'a', 4, 0, 2, 0);
SELECT id INTO @ability_tiers_monkey_ace_a FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_a, 'dps,moab,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_ace, 'b', 2, 0, 4, 0);
SELECT id INTO @ability_tiers_monkey_ace_b FROM AbilityTiers WHERE tower_id=@tower_monkey_ace AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_ace_b, 'bln,mg', 'camo,chep,ddt');



--      Monkey - Heli Pilot
INSERT INTO `Monkeys` VALUES (NULL, 'Heli Pilot', 'Military', 'Hovers wherever you direct it. Shoots from twin heavy dart guns.', 1600, 'heli-pilot.png');
SELECT id INTO @heli_pilot FROM Monkeys WHERE name='Heli Pilot';
INSERT INTO `Towers` VALUES (NULL, NULL, @heli_pilot);
SELECT id INTO @tower_heli_pilot FROM Towers WHERE monkey_id=@heli_pilot;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_heli_pilot, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 0, 'Quad Darts', 'Shoots 4 darts per volley instead of 2.', 800, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 1, 'Pursuit', 'A new targeting option enables Heli to seek and pursue the Bloons automatically.', 500, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 2, 'Razor Rotors', 'Razor Rotor blades rip up Bloons on contact, including Lead and Frozen Bloons.', 1750, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 3, 'Apache Dartship', 'Adds a large missile array and powerful machine guns.', 19600, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 0, 4, 'Apache Prime', 'The Apache Prime leaves most Bloons wishing they''d never been inflated.', 45000, 200);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 0, 'Bigger Jets', 'Powerful jets make Heli move much faster.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 1, 'IFR', 'Allows Heli Pilot to detect and shoot Camo Bloons.', 600, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 1, 2, 'Downdraft', 'Blows Bloons away from the Heli, back toward the entrance.', 3000, 3300);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, true, 1, 3, 'Support Chinook', 'Drops lives and cash crates, or can pick up and redeploy most Monkey types.', 12000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, true, 1, 4, 'Special Poperations', 'Deploys a powerful special Monkey Marine with machine gun.', 30000, 40000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 0, 'Faster Darts', 'Darts are propelled much faster through the air.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 1, 'Faster Firing', 'Faster attack speed for all Heli attacks.', 350, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 2, 'MOAB Shove', 'Can collide with and shove MOAB-Class Bloons, reversing or slowing their movement. Shove is amplified by Bigger Jets and IFR upgrades.', 3500, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 3, 'Comanche Defense', 'Automatically calls in 3 more Comanches when they\'re most needed.', 8500, 12500);
INSERT INTO `Abilities` VALUES (NULL, @tower_heli_pilot, false, 2, 4, 'Comanche Commander', 'Upgraded weapons. Also automatically calls in 3 more Comanches. Permanently.', 35000, 50000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 's', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_heli_pilot_s FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_s, 'dps,blnc,gbl,mg,lg', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 'a', 0, 3, 2, 0);
SELECT id INTO @ability_tiers_heli_pilot_a FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_a, 'supp,bln,camo,chep', 'micr,moab,lead');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_heli_pilot, 'b', 2, 0, 3, 0);
SELECT id INTO @ability_tiers_heli_pilot_b FROM AbilityTiers WHERE tower_id=@tower_heli_pilot AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_heli_pilot_b, 'supp,cc,moab,chep', 'camo');



--      Monkey - Mortar Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Mortar Monkey', 'Military', 'Launches an exploding mortar shell to a fixed location anywhere on the screen.', 750, 'mortar-monkey.png');
SELECT id INTO @mortar_monkey FROM Monkeys WHERE name='Mortar Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @mortar_monkey);
SELECT id INTO @tower_mortar_monkey FROM Towers WHERE monkey_id=@mortar_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_mortar_monkey, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 0, 'Bigger Blast', 'Bigger shells deliver a bigger blast radius.', 500, 180);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 1, 'Bloon Buster', 'Smash through 2 layers of bloon at once!', 650, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 2, 'Shell Shock', 'Each blast creates a shockwave that stuns Bloons at impact point and pops Bloons further out.', 1100, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 3, 'The Big One', 'Devastating explosions pop 5 layers of bloon.', 8000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 0, 4, 'The Biggest One', 'Smashes through 20 layers of Bloon over a huge area.', 28000, 36000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 0, 'Faster Reload', 'Increases the attack speed of the Mortar.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 1, 'Rapid Reload', 'Even faster reload.', 500, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 2, 'Heavy Shells', 'Heavy shells do extra damage to Ceramic, Lead, and all Fortified Bloons. Can also pop Black Bloons.', 900, 2300);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 1, 3, 'Artillery Battery', 'Artillery battery has 3 barrels for triple the pain.', 5500, 12500);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, true, 1, 4, 'Pop and Awe', 'Rains explosions over the whole screen, popping and immobilizing all Bloons for a few seconds.', 30000, 32000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 0, 'Increased Accuracy', 'Makes the shots more accurate.', 200, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 1, 'Burny Stuff', 'Damaged Bloons are set ablaze momentarily with each hit.', 500, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 2, 'Signal Flare', 'Camo Bloons popped by flares lose their camouflage permanently.', 700, 2200);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 3, 'Shattering Shells', 'Shattering shells strip all bloon properties off all but the biggest bloons.', 11000, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 4, 'Blooncineration', 'Superhot burny stuff melts through 5 layers of bloon each shot, burns MOAB class bloons for extra damage, and strips DDT camo.', 40000, 35000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 's', 5, 2, 0, 0);
SELECT id INTO @ability_tiers_mortar_monkey_s FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_s, 'stnb,dps,stnb', 'camo,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 'a', 0, 2, 4, 0);
SELECT id INTO @ability_tiers_mortar_monkey_a FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_a, 'supp,moab,mg,lg,camo,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_mortar_monkey, 'b', 2, 4, 0, 0);
SELECT id INTO @ability_tiers_mortar_monkey_b FROM AbilityTiers WHERE tower_id=@tower_mortar_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_mortar_monkey_b, 'dps,chep,bln,eg,mg', 'camo,moab');



--      Monkey - Dartling Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Dartling Gunner', 'Military', 'Uses a dart-shooting machine-gun. Aims wherever you point on the screen.', 850, 'dartling-gunner.png');
SELECT id INTO @dartling_gunner FROM Monkeys WHERE name='Dartling Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @dartling_gunner);
SELECT id INTO @tower_dartling_gunner FROM Towers WHERE monkey_id=@dartling_gunner;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_dartling_gunner, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 0, 'Focused Firing', 'Increases accuracy of the Dartling Gun.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 1, 'Laser Shock', 'Laser tipped shots shock bloons into popping again 1 second after being struck.', 900, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 2, 'Laser Cannon', 'Rapid fires much more powerful laser blasts that can pop frozen Bloons.', 4250, 2600);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 3, 'Plasma Accelerator', 'Concentrates a powerful beam of energy to a single point.', 11000, 12500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 4, 'Ray of Doom', 'Creates a solid line of annihilation. You can erase most Bloons at your leisure', 95000, 75000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 0, 'Advanced Targeting', 'Allows Dartling Gunner to hit Camo Bloons.', 250, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 1, 'Faster Barrel Spin', 'Makes gun fire much faster.', 950, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 2, 'Hydra Rocket Pods', 'Shoots depleted bloontonium missiles that can damage all Bloons types and trigger multiple explosions.', 5250, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 3, 'Rocket Storm', 'Rocket Storm ability: Launches a powerful storm of rockets in a wide cone.', 4800, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 4, 'M.A.D', 'Moab Assured Destroyer. Slower firing mega missiles deal extreme damage to MOAB-class Bloons.', 60000, 60000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 0, 'Faster Swivel', 'Barrel can swivel much faster.', 150, 110);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 1, 'Powerful Darts', 'Darts move faster and can pop 3 bloons each.', 1200, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 2, 'Buckshot', 'Shoots blasts of deadly buckshot instead of darts.', 3800, 300);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 3, 'Bloon Area Denial System', '4-barreled auto-cannon that can be set to attack automatically.', 12000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 4, 'Bloon Exclusion Zone', 'Upgraded to 6 barrels and massively increased damage. Bloons are excluded from existence', 58000, 55000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 's', 0, 5, 2, 0);
SELECT id INTO @ability_tiers_dartling_gunner_s FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_s, 'solo,bln,moab,bad,abil,camo', 'cm,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 'a', 0, 4, 2, 0);
SELECT id INTO @ability_tiers_dartling_gunner_a FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_a, 'bln,camo,moab,chep,mg,abil', 'purp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_dartling_gunner, 'b', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_dartling_gunner_b FROM AbilityTiers WHERE tower_id=@tower_dartling_gunner AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_dartling_gunner_b, 'dps,camo', 'chep,buff');



--      Monkey - Wizard Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Wizard Monkey', 'Magic', 'Hurls magical bolts of energy at the Bloons. Can upgrade to a variety of powerful spells.', 450, 'wizard-monkey.png');
SELECT id INTO @wizard_monkey FROM Monkeys WHERE name='Wizard Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @wizard_monkey);
SELECT id INTO @tower_wizard_monkey FROM Towers WHERE monkey_id=@wizard_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_wizard_monkey, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 0, 'Guided Magic', 'Magic shots seek out the Bloons, even behind cover.', 125, 110);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 1, 'Arcane Blast', 'Bigger, more powerful magic blasts pop through 2 layers of Bloon.', 600, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 2, 'Arcane Mastery', 'Attacks 2X faster over 2X longer range and adds 4+ pierce.', 1300, 2300);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 3, 'Arcane Spike', 'Magic does extra damage to MOAB-Class Bloons and adds a 2X attack speed bonus', 10900, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 4, 'Archmage', 'A true master of magical wizardry. Gives the monkey Shimmer and Dragon''s Breath. Also doubles magic bolt fire rate and increases its pierce and damage', 32000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 0, 'Fireball', 'Every few seconds casts an explosive fireball spell.', 300, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 1, 'Wall of Fire', 'Creates a super hot wall of fire across the track to roast the Bloons as they pass.', 900, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 2, 'Dragon\'s Breath', 'Spews endless flames at nearby Bloons and enhances Fireball and Wall of Fire.', 3000, 2600);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 3, 'Summon Phoenix', 'Powerful phoenix wreaks Bloon havoc for 20 seconds.', 4000, 13000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 4, 'Wizard Lord Phoenix', 'Wizard Lord becomes a master of the flame, turns into a super powerful Lava Phoenix for a short time.', 54000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 0, 'Intense magic', '	More powerful magic shots move faster and can pop more Bloons.', 275, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 1, 'Monkey Sense', 'Allows the Wizard to hit Camo Bloons.', 300, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 2, 'Shimmer', 'Gains a dark magic attack that periodically reveals location of all nearby Camo bloons permanently.', 1700, 2200);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 3, 'Necromancer: Unpopped Army', 'Reanimate recently popped enemies as servants to destroy the Bloons.', 2800, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 4, 'Prince of Darkness', 'Reanimate even more powerful bloon servants to obliterate the enemy and buffs other Necromancers.', 24000, 30000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 's', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_wizard_monkey_s FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_s, 'dps,camo,chep,bln,moab,mg,lg', 'trkp');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 'a', 4, 2, 0, 0);
SELECT id INTO @ability_tiers_wizard_monkey_a FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_a, 'vis,moab', 'buff,camo,purp');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_wizard_monkey, 'b', 2, 0, 5, 0);
SELECT id INTO @ability_tiers_wizard_monkey_b FROM AbilityTiers WHERE tower_id=@tower_wizard_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_wizard_monkey_b, '', 'map');



--      Monkey - Super Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Super Monkey', 'Magic', 'Throws hundreds of darts and hypersonic speed with a huge attack range.', 2500, 'super-monkey.png');
SELECT id INTO @super_monkey FROM Monkeys WHERE name='Super Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @super_monkey);
SELECT id INTO @tower_super_monkey FROM Towers WHERE monkey_id=@super_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_super_monkey, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 0, 'Laser Blasts', 'Shoots powerful blasts of a laser instead of darts.', 2500, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 1, 'Plasma Blasts', 'Plasma vaporizes almost everything it touches.', 4500, 2200);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 2, 'Sun Avatar', 'Channels power from the core of the Sun.', 22000, 7000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 3, 'Sun Temple', 'Tower sacrifices enhance and modify the Temple''s attacks.', 100000, 50000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 4, 'True Sun God', 'Tremble before the AWESOME power of the TRUE Sun God!!	', 500000, 150000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 0, 'Super Range', 'Super Monkeys need Super Range.', 1000, 300);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 1, 'Epic Range', 'Why settle for super when you can have EPIC?', 1400, 1300);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 2, 'Robo Monkey', 'Half Super Monkey, half killer robot of death. Shoots from 2 guns at once!', 7000, 6000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 3, 'Tech Terror', 'Destroys most Bloons completely and utterly within blast radius.', 19000, 35000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 4, 'The Anti-Bloon', 'Program Directive><Eradicate Bloons><INITIATE>', 90000, 85000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 0, 'Knockback', 'Bloons get pushed backward or slowed after each hit.', 3000, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 1, 'Ultravision', 'Enables Super Monkey to shoot slightly further and to see Camo Bloons.', 1200, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 2, 'Dark Knight', 'Dark blades increase knockback and pierce and deal extra damage to MOAB-class Bloons. Gains Darkshift ability to shift to a nearby location.', 5500, 6500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 3, 'Dark Champion', 'Champion dark blades excel at puncturing and ruining all Bloon types.Gains long-range Darkshift Ability', 60000, 47500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 4, 'Legend of the Night', 'We turn to him, when all hope is lost...', 240000, 100000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 's', 3, 0, 2, 0);
SELECT id INTO @ability_tiers_super_monkey_s FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_s, 'kb,camo,dps,buff,blnc', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 'a', 3, 2, 0, 0);
SELECT id INTO @ability_tiers_super_monkey_a FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_a, 'rng,dps,buff', 'camo');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_super_monkey, 'b', 2, 0, 3, 0);
SELECT id INTO @ability_tiers_super_monkey_b FROM AbilityTiers WHERE tower_id=@tower_super_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_super_monkey_b, 'kb,camo,moab', 'micr');



--      Monkey - Ninja Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ninja Monkey', 'Magic', 'Stealthy and fast Monkey that throws bladed shurikens to pop the Bloons. Can target Camo Bloons.', 500, 'ninja-monkey.png');
SELECT id INTO @ninja_monkey FROM Monkeys WHERE name='Ninja Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ninja_monkey);
SELECT id INTO @tower_ninja_monkey FROM Towers WHERE monkey_id=@ninja_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ninja_monkey, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 0, 'Ninja Discipline', 'Increases attack range and attack speed.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 1, 'Sharp Shurikens', 'Shurikens can pop 4 Bloons each.', 350, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 2, 'Double Shot', 'Throws 2 shurikens at once.', 750, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 3, 'Bloonjitsu', 'Throws 5 shurikens at once!', 2750, 16000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 4, 'Grandmaster Ninja', 'Throws incredibly fast, 8 shurikens per shot!', 35000, 50000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 0, 'Distraction', 'Some Bloons will become distracted and move backwards.', 350, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 1, 'Counter-Espionage', 'Ninja attacks can strip camo from Bloons they damage.', 500, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 1, 2, 'Shinobi Tactics', 'Increases attack speed of all ninjas in its range - more Shinobi means more attack speed, with a cap of 20', 900, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, true, 1, 3, 'Bloon Sabotage', 'Lasts 15 seconds. During the sabotage, all Bloons move at half speed.', 5000, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, true, 1, 4, 'Grand Saboteur', 'Ability duration is longer, and MOAB-Class Bloons spawn with less health during the sabotage.', 22000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 0, 'Seeking Shuriken', 'Shurikens will seek out and pop Bloons automatically.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 1, 'Caltrops', 'Throws out spiked caltrops onto the track nearby.', 400, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 2, 'Flash Bomb', 'Throws a flash bomb that stuns multiple Bloons.', 2750, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 3, 'Sticky Bomb', 'Throws powerful timed charges at MOAB-Class Bloons.', 4500, 15500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 2, 4, 'Master Bomber', 'One Monkey MOAB demolition Machine.', 40000, 37500);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 's', 5, 0, 2, 0);
SELECT id INTO @ability_tiers_ninja_monkey_s FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_s, 'blnc,mg', 'chep,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 'a', 0, 5, 2, 0);
SELECT id INTO @ability_tiers_ninja_monkey_a FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_a, 'abil,supp,moab,cc,tbf', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_ninja_monkey, 'b', 2, 3, 0, 0);
SELECT id INTO @ability_tiers_ninja_monkey_b FROM AbilityTiers WHERE tower_id=@tower_ninja_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_ninja_monkey_b, 'camo,chep,cc,tbf,eg,mg', 'spam');



--      Monkey - Alchemist
INSERT INTO `Monkeys` VALUES (NULL, 'Alchemist', 'Magic', 'Harnessing powers of science and magic, splashes Bloons with acid, also brows various potions with different effects.', 550, 'alchemist.png');
SELECT id INTO @alchemist FROM Monkeys WHERE name='Alchemist';
INSERT INTO `Towers` VALUES (NULL, NULL, @alchemist);
SELECT id INTO @tower_alchemist FROM Towers WHERE monkey_id=@alchemist;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_alchemist, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 0, 'Larger Potions', 'Larger potions splash in a larger area.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 1, 'Acidic Mixture Dip', 'Throws a helpful potion at nearby Monkeys that allows them to pop Lead Bloons and do extra damage to Ceramic and MOAB-class Bloons. Wears off after several attacks.', 350, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 2, 'Berserker Brew', 'Special brew gives Monkeys extra damage, range, and attack speed.', 1250, 2250);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 3, 'Stronger Stimulant', 'Extra strong brew has even more powerful effect on the target.', 3000, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 0, 4, 'Permanent Brew', 'Berserker brew becomes PERMANENT on Monkeys who drink it.', 60000, 30000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 0, 'Stronger Acid', 'Acid potions dissolve Bloons faster.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 1, 'Perishing Potions', 'Attack potions deal more damage to MOAB-class Bloons and strip Fortified off smaller Bloons. Also strengthens Brews and Stimulants.', 475, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 1, 2, 'Unstable Concoction', 'Coats MOAB-Class Bloons in an explosive substance that causes a large explosion when they are popped.', 3000, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, true, 1, 3, 'Transforming Tonic', 'Turns Alchemist into powerful attack Monster for 20 seconds.', 4500, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, true, 1, 4, 'Total Transformation', 'Transforms five Monkeys nearby into crazy attack monsters for 20 seconds.', 45000, 28000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 0, 'Faster Throwing', 'Throws acid and potions faster.', 650, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 1, 'Acid Pool', 'If no Bloons are nearby Alchemist can drench nearby track with acid.', 450, 145);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 2, 'Lead To Gold', 'Converts Lead Bloons to GOLD! Special solvents do extra damage to Lead Bloons, destroying them in a one shot and generating cash.', 1000, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 3, 'Rubber to Gold', 'Converts all Bloons partially into gold, getting more cash per pop from affected Bloons.', 2750, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 4, 'Bloon Master Alchemist', 'Secret shrink potion converts all affected Bloons into Red Bloons', 40000, 24000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 's', 4, 2, 0, 0);
SELECT id INTO @ability_tiers_alchemist_s_0 FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='s' AND middle_path=2;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_s_0, 'chep,lead,fcm,moab', 'tbf');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 's', 4, 0, 1, 0);
SELECT id INTO @ability_tiers_alchemist_s_1 FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='s' AND bottom_path=1;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_s_1, 'tbf,lead,fcm,moab,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 'a', 5, 2, 0, 0);
SELECT id INTO @ability_tiers_alchemist_a FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_a, 'tbf,lead,fcm,moab', 'chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_alchemist, 'b', 3, 0, 1, 0);
SELECT id INTO @ability_tiers_alchemist_b FROM AbilityTiers WHERE tower_id=@tower_alchemist AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_alchemist_b, 'tbf,chep,eg,mg', 'lg');



--      Monkey - Druid
INSERT INTO `Monkeys` VALUES (NULL, 'Druid', 'Magic', 'Creates a blast of thorns for each attack. Upgrades can call forth powers of the Jungle, Storm or Wrath.', 425, 'druid.png');
SELECT id INTO @druid FROM Monkeys WHERE name='Druid';
INSERT INTO `Towers` VALUES (NULL, NULL, @druid);
SELECT id INTO @tower_druid FROM Towers WHERE monkey_id=@druid;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_druid, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 0, 'Hard Thorns', 'Hard thorns can pop 2 Bloons each and pop Frozen Bloons.', 250, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 1, 'Heart of Thunder', 'Unleashes regular blasts of forked lightning that arc from Bloon to Bloon.', 1000, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 2, 'Druid of the Storm', 'Gusts of wind blow Bloons off the track away from the exit.', 2000, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 3, 'Ball Lightning', 'Creates powerful balls of lightning that shoot additional lightning bolts.', 5500, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 4, 'Superstorm', 'Superstorm blasts all Bloon types for massive damage and blows them away from the exit. Can blow away ZOMGs', 90000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 0, 'Thorn Swarm', 'Shoots 8 thorns instead of 5.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 1, 'Heart of Oak', 'Thorns convert Regrow Bloons into normal Bloons.', 250, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 2, 'Druid of the Jungle', 'Calls a vine from the ground to entangle and crush Bloons one at a time.', 950, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 3, 'Jungle''s Bounty', 'Generates 200 money plus another 100 per Banana Farm type tower near the Druid.', 5000, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 4, 'Spirit of the Forest', 'Grows thorned vines along the path that deal constant damage plus bonus damage to ceramics, and generates lives and money when ability is activated.', 35000, 40000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 0, 'Druidic Reach', 'Increases range by a large amount.', 100, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 1, 'Heart of Vengeance', 'Gains attack speed up to 100 lives lost after getting this upgrade, Lives above maximum do not count.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 2, 'Druid of Wrath', 'Gains attack speed during the round as long as the Druid is popping Bloons.', 600, 1700);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 3, 'Poplust', 'Boosts attack speed for all Druids in the radius. Can stack up to 5 times on a single Druid.', 2500, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 4, 'Avatar of Wrath', 'The more bloons there are, the more damage it does', 45000, 33000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 's', 0, 1, 5, 0);
SELECT id INTO @ability_tiers_druid_s_0 FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='s' AND bottom_path=5;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_s_0, 'dps,chmp,tbf', 'chep');

INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 's', 2, 0, 4, 0);
SELECT id INTO @ability_tiers_druid_s_1 FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='s' AND bottom_path=4;

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_s_1, 'dps,chep,frzn', 'spam,buff');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 'a', 4, 0, 2, 0);
SELECT id INTO @ability_tiers_druid_a FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_a, 'supp,frzn,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_druid, 'b', 0, 4, 1, 0);
SELECT id INTO @ability_tiers_druid_b FROM AbilityTiers WHERE tower_id=@tower_druid AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_druid_b, 'supp,mny,abil', 'lg');



--      Monkey - Banana Farm
INSERT INTO `Monkeys` VALUES (NULL, 'Banana Farm', 'Support', 'Generates Bananas each round that convert into game money to spend on more stuff.', 1250, 'banana-farm.png');
SELECT id INTO @banana_farm FROM Monkeys WHERE name='Banana Farm';
INSERT INTO `Towers` VALUES (NULL, NULL, @banana_farm);
SELECT id INTO @tower_banana_farm FROM Towers WHERE monkey_id=@banana_farm;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_banana_farm, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 0, 'Increased Production', 'Grows 2 extra Banana bunches per round.', 500, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 1, 'Greater Production', 'Grows 2 MORE extra Banana bunches per round.', 600, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 2, 'Banana Plantation', 'Grows 16 Banana bunches per round.', 3000, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 3, 'Banana Research Facility', 'Produces 5 large Banana crates every round worth $300 each. Each crate contains 15 Bananas.', 19000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 4, 'Banana Central', 'You want Banana? We have Banana!', 100000, 50000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 0, 'Long Life Bananas', 'Bananas last 30 seconds before rotting instead of 15.', 300, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 1, 'Valuable Bananas', 'Bananas are worth 25% more cash per bunch.', 800, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 2, 'Monkey Bank', 'Generates money each round and stores it in the bank. Earns 15% interest each round.', 3500, 3500);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 3, 'IMF Loan', 'IMF Loan ability: Gives you $10,000 but you have to pay it back over time.', 7500, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 4, 'Monkey-Nomics', 'For when you''re too big to fail...', 100000, 50000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 0, 'EZ Collect', 'The collect radius of Bananas is larger. For Monkey Banks, glows when bank is full and ready to collect.', 250, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 1, 'Banana Salvage', 'Uncollected Bananas auto-collect for half the amount.', 200, 950);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 2, 'Marketplace', 'Generates 12 bananas each round and adds the money to your total. No fuss.', 2900, 3200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 3, 'Central Market', 'Earns heaps of money each round and gives Merchantmen +10% income.', 15000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 4, 'Monkey Wall Street', 'Hub of Monkey trades earns colossal income each round.', 60000, 50000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 's', 2, 3, 0, 0);
SELECT id INTO @ability_tiers_banana_farm_s FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_s, 'supp,mny,chep,buff,eg,mg,lg', 'micr');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 'a', 0, 2, 3, 0);
SELECT id INTO @ability_tiers_banana_farm_a FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_a, 'mny,chep,eg,mg', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_banana_farm, 'b', 5, 2, 0, 0);
SELECT id INTO @ability_tiers_banana_farm_b FROM AbilityTiers WHERE tower_id=@tower_banana_farm AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_banana_farm_b, 'mny,lg', 'micr,chep');



--      Monkey - Spike Factory
INSERT INTO `Monkeys` VALUES (NULL, 'Spike Factory', 'Support', 'Automatically generates piles of Road Spikes on the nearby track. Excellent last line of defense.', 1000, 'spike-factory.png');
SELECT id INTO @spike_factory FROM Monkeys WHERE name='Spike Factory';
INSERT INTO `Towers` VALUES (NULL, NULL, @spike_factory);
SELECT id INTO @tower_spike_factory FROM Towers WHERE monkey_id=@spike_factory;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_spike_factory, 's', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 0, 'Bigger Stacks', 'Creates larger piles of spikes per shot.', 800, 170);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 1, 'White Hot Spikes', 'Cuts through Lead Bloons and Frozen Bloons.', 600, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 2, 'Spiked Balls', 'Produces spiked balls that do extra damage to Ceramics and Fortified Bloons.', 2300, 2400);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 3, 'Spiked Mines', 'Spiked mines explode violently when they lose all their spikes.', 11000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 0, 4, 'Super Mines', 'Creates gigantic exploding spiked mines that can wipe out almost anything.', 162500, 32500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 0, 'Faster Production', 'Rapidly increases production rate.', 600, 180);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 1, 'Even Faster Production', 'Increases production rate even more.', 800, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 1, 2, 'MOAB SHREDR', 'Super-Hard-Rending-Engine-Driven-Razors shred MOAB-Class Bloons.', 2500, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, true, 1, 3, 'Spike Storm', 'Shoots out a thick layer of spikes over the entire track.', 5000, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, true, 1, 4, 'Carpet of Spikes', 'Regularly sets a carpet of spikes over the whole track.', 40000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 0, 'Long Reach', 'Increases range which spikes can be deposited.', 150, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 1, 'Smart Spikes', 'Spike Factory gains special targeting priority and accelerated production at the start of each round.', 400, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 2, 'Long Life Spikes', 'Spikes lasts much longer and can carry over one round.', 1400, 2100);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 3, 'Deadly Spikes', 'Extra deadly spikes can pop through 2 layers per spike.', 3500, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_spike_factory, false, 2, 4, 'Perma-Spike', 'Spikes become almost permanent.', 30000, 29500);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 's', 0, 2, 5, 0);
SELECT id INTO @ability_tiers_spike_factory_s FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_s, 'mg,buff', 'lead,chep');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 'a', 2, 4, 0, 0);
SELECT id INTO @ability_tiers_spike_factory_a FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_a, 'moab,bad,ddt,lead,frzn', 'solo,chep');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_spike_factory, 'b', 3, 2, 0, 0);
SELECT id INTO @ability_tiers_spike_factory_b FROM AbilityTiers WHERE tower_id=@tower_spike_factory AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_spike_factory_b, 'chep,eg,mg,scm,lead,frzn', 'spam');



--      Monkey - Monkey Village
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Village', 'Support', 'Hub of Monkey industry, has a number of different benefits to aid all of your Monkeys. Increases rawnge of all monkeys in its radius by 10%.', 1200, 'monkey-village.png');
SELECT id INTO @monkey_village FROM Monkeys WHERE name='Monkey Village';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_village);
SELECT id INTO @tower_monkey_village FROM Towers WHERE monkey_id=@monkey_village;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_monkey_village, 'a', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 0, 'Bigger Radius', 'Increases influence radius of the village.', 400, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 1, 'Jungle Drums', 'Increases attack speed of all Monkeys in the radius.', 1500, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 2, 'Primary Training', 'All Primary Monkeys in radius get more range, pierce and projectile speed.', 800, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 3, 'Primary Mentoring', 'All Primary Monkeys in radius get tier 1 upgrades for free.', 2500, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 0, 4, 'Primary Expertise', 'All Primary Monkeys in radius get tier 1 AND 2 upgrades for free. Gains Mega Ballista attack.', 25000, 32000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 0, 'Grow Blocker', 'Prevents Regrow Bloons from working while in the radius of the Village.', 250, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 1, 'Radar Scanner', 'Allows all Monkeys in the radius to attack Camo Bloons.', 2000, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 1, 2, 'Monkey Intelligence Bureau', 'The Bureau grants special Bloon popping knowledge, allowing nearby Monkeys to pop all Bloon types.', 7500, 3500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, true, 1, 3, 'Call To Arms', 'Call To Arms Ability: Gives all nearby Monkeys +50% attack speed and pops for a short time.', 20000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, true, 1, 4, 'Homeland Defense', 'Ability affects ALL Monkeys and for 20 seconds.', 40000, 30000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 0, 'Monkey Business', 'Provides 10% discount to all Monkeys and upgrades tier 3 or less purchased in the radius of the Village.', 500, 250);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 1, 'Monkey Commerce', 'An additional 5% discount that can stack with up to 2 other Villages with this upgrade.', 500, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 2, 'Monkey Town', 'All Monkeys within the radius of the Monkey Town get extra cash per Bloon pop.', 10000, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 3, 'Monkey City', 'Increases influence radius and gives you a free Dart Monkey every round.', 3000, 15500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_village, false, 2, 4, 'Monkeyopolis', 'Absorbs all nearby Banana Farms and their income, freeing up space for new Monkeys.', 5000, 28000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 's', 2, 3, 0, 0);
SELECT id INTO @ability_tiers_monkey_village_s FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_s, 'supp,camo,bln,tbf,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 'a', 0, 2, 0, 0);
SELECT id INTO @ability_tiers_monkey_village_a FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_a, 'supp,camo,buff,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_monkey_village, 'b', 0, 2, 3, 0);
SELECT id INTO @ability_tiers_monkey_village_b FROM AbilityTiers WHERE tower_id=@tower_monkey_village AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_monkey_village_b, 'supp,camo,mny,buff,chep', 'eg');



--      Monkey - Engineer Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Engineer Monkey', 'Support', 'Holds a trusty nail-gun to pop the Bloons. Can upgrade to creat its own nail-shooting sentry turrets.', 450, 'engineer-monkey.png');
SELECT id INTO @engineer_monkey FROM Monkeys WHERE name='Engineer Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @engineer_monkey);
SELECT id INTO @tower_engineer_monkey FROM Towers WHERE monkey_id=@engineer_monkey;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_engineer_monkey, 'b', 0);

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 0, 'Sentry Gun', 'Creates temporary sentry guns and deploys them nearby.', 500, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 1, 'Faster Engineering', 'Increased build speed produces sentries more often.', 400, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 2, 'Sprockets', 'Increased sentry gun and Engineer attack speed.', 525, 1850);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 3, 'Sentry Expert', 'Sentries deploy with different damage types based on your need.', 2500, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 0, 4, 'Sentry Paragon', 'Creates super-powerful but highly unstable sentries.', 32000, 30000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 0, 'Larger Service Area', 'Shoots further and deploys sentries in a much larger area.', 250, 170);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 1, 'Deconstruction', 'Nail gun and Sentry shots do extra damage to MOAB-class and Fortified Bloons.', 350, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 1, 2, 'Cleansing Foam', 'Sprays foam that removes Regrow and Camo and pops Lead Bloons.', 800, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 3, 'Overclock', 'Overclock Ability: Target another tower to supercharge its attack speed for a short time.', 13500, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 4, 'Ultraboost', 'Ultra-Overclocked Monkeys gain a small but permanent boost every time they are overclocked.', 120000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 0, 'Oversize Nails', 'Massivization allows nails to pop 8 Bloons at once, including frozen. Also increases Foam and Sentry effectiveness.', 450, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 1, 'Pin', 'Pins Bloons in place for a short time when struck.', 220, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 2, 'Double Gun', 'Two guns for twice the fun.', 500, 1800);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 3, 'Bloon Trap', 'Bloon Trap captures Bloons until full. Select to empty full trap for cash.', 3500, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 4, 'XXXL Trap', 'Huge Bloon Traps can trap some of the largest Bloons in them...', 60000, 40000);

--          Ability Tiers - S
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 's', 0, 4, 0, 0);
SELECT id INTO @ability_tiers_engineer_monkey_s FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='s';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_s, 'lead,moab,fbl,camo,abil,supp,buff,chep', '');

--          Ability Tiers - A
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 'a', 0, 0, 4, 0);
SELECT id INTO @ability_tiers_engineer_monkey_a FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='a';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_a, 'supp,frzn,mny,eg,chep', '');

--          Ability Tiers - B
INSERT INTO `AbilityTiers` VALUES (NULL, @tower_engineer_monkey, 'b', 0, 2, 3, 0);
SELECT id INTO @ability_tiers_engineer_monkey_b FROM AbilityTiers WHERE tower_id=@tower_engineer_monkey AND tier='b';

INSERT INTO `AbilityTiersInfo` VALUES (NULL, @ability_tiers_engineer_monkey_b, 'lead,frzn,moab,fbl,supp,eg,chep', '');



-- HEROES --


--      Hero - Quincy
INSERT INTO `Heroes` VALUES (NULL, 'Quincy', 'Archer', 'Proud, strong and intelligent, Quincy uses his bow to perform feats of amazing skill.', 540, 0, 'quincy.png');
SELECT id INTO @quincy FROM Heroes WHERE name='Quincy';
INSERT INTO `Towers` VALUES (NULL, @quincy, NULL);
SELECT id INTO @tower_quincy FROM Towers WHERE hero_id=@quincy;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_quincy, 'a', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 0, '', 'Quincy\'s arrows bounce to 3 different targets.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 1, '', 'Base attack bounces up to 4 targets.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, true, 0, 2, 'Rapid Shot', 'Triple attack speed for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 3, '', 'Slightly longer range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 4, '', 'Allows Quincy to detect Camo Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 5, '', 'Allows Quincy to fire two arrows.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 6, '', 'Quincy shoots an exploding arrow every 3rd shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 7, '', 'Arrows deal triple damage to MOAB-class bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 8, '', 'Base attack bounces up to 6 targets.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, true, 0, 9, 'Storm of Arrows', 'Covers a large area in a deadly rain of arrows.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 10, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 11, '', 'Each arrow gets more popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 12, '', 'Small range increase.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 13, '', 'Arrows do quad damage to MOAB-Class Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 14, '', 'Rapid shot becomes 4x attack speed and cooldown is reduced.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 15, '', 'More increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 16, '', 'Arrows last 25% longer.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 17, '', 'Quincy attacks faster and Storm of Arrows has reduced cooldown and 50% more arrows.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 18, '', 'Each arrow gets even more popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 19, '', 'Storm of Arrows increased damage per arrows and even more arrows.', 0, 0);


--      Hero - Gwendolin
INSERT INTO `Heroes` VALUES (NULL, 'Gwendolin', 'Pyromaniac', 'Gwendolin believes there hasn\'t been a Bloon problem that can\'t be solved with fire. Lots of fire.', 900, 0, 'gwendolin.png');
SELECT id INTO @gwendolin FROM Heroes WHERE name='Gwendolin';
INSERT INTO `Towers` VALUES (NULL, @gwendolin, NULL);
SELECT id INTO @tower_gwendolin FROM Towers WHERE hero_id=@gwendolin;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_gwendolin, 'b', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 0, '', 'Blasts Bloons with fire from her pyro gun.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 1, '', 'Slightly increases popping power per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, true, 0, 2, 'Cocktail of Fire', 'Hurls a flask of flammable liquid, burning bloons that pass through the fire.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 3, '', 'Heat it up - Every few seconds creates a powerful blast wave of fire that pops Bloons and adds fire to nearby Monkeys\' attacks.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 4, '', 'Increased popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 5, '', 'Attacks can cause a burn effect on target bloon.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 6, '', 'Heat it up has increased radius.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 7, '', 'Shoots 2 blasts of fire per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 8, '', 'Initial hit for per blast pops 1 extra layer.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, true, 0, 9, 'Firestorm', 'Sets the whole screen alight, burning all Bloons and granting the Heat It Up buff to all Monkeys.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 10, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 11, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 12, '', 'Greatly increased popping power, plus projectiles move faster and last longer.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 13, '', 'Cocktail of Fire does extra damage and sets MOAB class Bloons alight.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 14, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 15, '', 'Firestorm has increased duration. Purple Bloons are no longer immune to Gwendolin\'s attacks.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 16, '', 'Heat It Up empowers affected monkeys to pop 1 extra layer, and do +2 damage to Lead Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 17, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 18, '', 'Shoots 3 blasts of fire per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_gwendolin, false, 0, 19, '', 'Firestorm does hugely increased damage.', 0, 0);


--      Hero - Striker Jones
INSERT INTO `Heroes` VALUES (NULL, 'Striker Jones', 'Artillery Commander', 'Striker Jones is a string Commander who uses his knowledge of long range combat to greatly boost the power of explosives.', 750, 0, 'striker-jones.png');
SELECT id INTO @striker_jones FROM Heroes WHERE name='Striker Jones';
INSERT INTO `Towers` VALUES (NULL, @striker_jones, NULL);
SELECT id INTO @tower_striker_jones FROM Towers WHERE hero_id=@striker_jones;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_striker_jones, 'b', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 0, '', 'Striker Jones shoots a powerful bazooka to explode Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 1, '', 'Increased blast radius.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, true, 0, 2, 'Concussive Shell', 'Shoots a guided shell to the largest Bloon on screen, stunning it.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 3, '', 'All Bomb Shooters and Mortar Monkeys on screen shoot 10% faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 4, '', 'Makes Black Bloons less resistant to explosive attacks.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 5, '', 'Blast radius and popping power for Jones''s normal attacks increase greatly.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 6, '', 'Pops 2 layers per shot and Mortar Monkeys blast radius increased by 10%.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 7, '', 'All Bomb Shooters near Jones get +5% range and +25% piercing power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 8, '', 'Increased attack speed and increased Concussive Shell pierce, damage, and stun.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, true, 0, 9, 'Artillery Command', 'Resets cooldown on all Bomb Shooters and Mortar Monkeys.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 10, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 11, '', 'Slightly increased range and extra layer pop.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 12, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 13, '', 'Concussive Shell affects a larger area for a longer duration.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 14, '', 'Concussive Shell''s cooldown is reduced to 11 seconds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 15, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 16, '', 'Increased range and pops 4 layers per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 17, '', 'All Bomb Shooters and Mortar Monkeys get +10% attacking speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 18, '', 'Increased attack speed and makes all Black Bloons vulnerable to explosive damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_striker_jones, false, 0, 19, '', 'Artillery Command also gives double damage and popping power to all Bomb Shooters and Mortar Monkeys for 10 seconds.', 0, 0);


--      Hero - Obyn Greenfoot
INSERT INTO `Heroes` VALUES (NULL, 'Obyn Greenfoot', 'Forest Guardian', 'Commanding powers of nature, Obyn can shoot through solid obstacles with his spirit wolf attack.', 650, 0, 'obyn-greenfoot.png');
SELECT id INTO @obyn_greenfoot FROM Heroes WHERE name='Obyn Greenfoot';
INSERT INTO `Towers` VALUES (NULL, @obyn_greenfoot, NULL);
SELECT id INTO @tower_obyn_greenfoot FROM Towers WHERE hero_id=@obyn_greenfoot;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_obyn_greenfoot, 'a', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 0, '', 'Sends wolf spirits to attack the Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 1, '', 'Nature''s Wrath: All Druids in range get +1 pierce.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, true, 0, 2, 'Brambles', 'Creates a spiked bush on the track that can pop 50 bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 3, '', 'Every 18 seconds creates a totem that slows all bloons near the totem by 30%. Less effective vs MOAB-class Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 4, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 5, '', 'Increased popping power and projectiles move faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 6, '', 'Brambles can pop 100 bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 7, '', 'Nature''s ward totems slow down bloons by 40%.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 8, '', 'Attack pops extra layers.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, true, 0, 9, 'Wall of Trees', 'Summons a wall of trees across the track that destroy all Bloons that enter. When full, the tress burst into money.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 10, '', 'Nature\'s Clarity — all Magic Monkeys in range get an additional +5 range and +2 pierce, and Druids get an additional +1 pierce.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 11, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 12, '', 'Further increased popping power and projectile speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 13, '', 'Attack pops extra layers.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 14, '', 'Nature''s Ward slows Bloons by 60%, and has reduced cooldown.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 15, '', 'Brambles pop 500 Bloons each and can damage all Bloon type.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 16, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 17, '', 'Improved Wrath — all Druid of Wrath pops start each round at 200.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 18, '', 'Attack pops extra layers.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_obyn_greenfoot, false, 0, 19, '', 'Wall of Trees can hold a lot more Bloons.', 0, 0);


--      Hero - Sauda
INSERT INTO `Heroes` VALUES (NULL, 'Sauda', 'Swordmaster', 'With a calm fury, Sauda can carve Bloons up with her twin razor-sharp swords.', 600, 5000, 'sauda.png');
SELECT id INTO @sauda FROM Heroes WHERE name='Sauda';
INSERT INTO `Towers` VALUES (NULL, @sauda, NULL);
SELECT id INTO @tower_sauda FROM Towers WHERE hero_id=@sauda;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_sauda, 's', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 0, '', 'Slashes with both swords at nearby Bloons', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 1, '', 'Pops more Bloons per attack.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, true, 0, 2, 'Leaping Sword Attack', 'Sauda\'s dramatic leap attack slams down on her targeted Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 3, '', 'Sauda\'s swords slice through 2 layers of Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 4, '', 'Sauda attacks faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 5, '', 'Increased attack range and popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 6, '', 'Sauda preys on the Bloons\' weakness, doing extra damage if they are stunned, and she can now pop frozen Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 7, '', 'Sauda attacks even faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 8, '', 'Bloon Bleed: Sauda pops through 3 layers of Bloon with each strike, and causes a slow damage over time effect.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, true, 0, 9, 'Sword Charge', 'Sauda slides along the whole track, devastating Bloons as she goes.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 10, '', 'Sauda inflicts extra damage to any Bloon slowed, immobilized, or taking damage over time from other monkeys.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 11, '', 'Leaping Sword Attack increases greatly in power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 12, '', 'Enchanted blades do more damage and allow Sauda to damage all Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 13, '', 'Sauda attacks even faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 14, '', 'Increased attack range and popping power, and Bloon Bleed deals more damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 15, '', 'Sword Charge greatly increased damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 16, '', 'Sauda\'s sword attacks slice through many Bloon layers at once.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 17, '', 'Sauda\'s swords attack with a blur of speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 18, '', 'Enchanted Blades do extra damage to Regrow, Fortified, and Camo Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_sauda, false, 0, 19, '', 'Sword Charge sweeps all track paths three times!', 0, 0);

--      Hero - Captain Churchill
INSERT INTO `Heroes` VALUES (NULL, 'Captain Churchill', 'Tank', 'In his armored battle tank, the captain is a no-nonsense powerhouse on the battlefield.', 2000, 2500, 'captain-churchill.png');
SELECT id INTO @captain_churchill FROM Heroes WHERE name='Captain Churchill';
INSERT INTO `Towers` VALUES (NULL, @captain_churchill, NULL);
SELECT id INTO @tower_captain_churchill FROM Towers WHERE hero_id=@captain_churchill;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_captain_churchill, 'a', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 0, '', 'Piercing bombs shot from the tank can explode up to 3 times.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 1, '', 'Increased popping power per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, true, 0, 2, 'Armor Piercing Shells', 'Shots can pop Black Bloons and do extra damage to Ceramic Bloons. Duration increases as Churchill levels.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 3, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 4, '', 'Adds a fast firing machine gun to the tank.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 5, '', 'Binoculars allow Churchill to pop Camo Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 6, '', 'Shells deal more damage and can explode 4 times instead of 3.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 7, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 8, '', 'Shells can explode 5 times.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, true, 0, 9, 'MOAB Barrage', 'Launches a barrage of shells at up to 10 MOAB-Class Bloons on screen, dealing massive damage each time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 10, '', 'Increased popping power per shell.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 11, '', 'Shells get additional increased damage and can explode 6 times.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 12, '', 'Armor Piercing Shells pop 2 layers of Bloon and do extra damage to Ceramic and higher.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 13, '', 'Machine Gun and Main Gun can pop 1 additional layer per shot.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 14, '', 'All attacks do extra damage vs Fortified Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 15, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 16, '', 'Armor Piercing Shells do even more damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 17, '', 'All shells pop an extra layer of Bloon.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 18, '', 'Shells can explode 7 times.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_captain_churchill, false, 0, 19, '', 'MOAB Barrage and Main Gun do massively increased damage per hit.', 0, 0);

--      Hero - Benjamin
INSERT INTO `Heroes` VALUES (NULL, 'Benjamin', 'Code Monkey', 'Using his elite hacking skills, Benjamin can generate extra money for the cause.', 1200, 3000, 'benjamin.png');
SELECT id INTO @benjamin FROM Heroes WHERE name='Benjamin';
INSERT INTO `Towers` VALUES (NULL, @benjamin, NULL);
SELECT id INTO @tower_benjamin FROM Towers WHERE hero_id=@benjamin;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_benjamin, 'a', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 0, '', 'Hacks in income of $100 every round.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 1, '', 'Generates $150 per round instead of $100', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, true, 0, 2, 'Biohack', '4 closest Monkeys pop an extra layer per attack for 6 seconds. Affected Monkeys can\'t attack for 2 seconds after effect ends.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 3, '', 'Skimming - Earns +$1 for every new Bloon spawned.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 4, '', 'Bank Hack - All banks earn +5% income.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 5, '', 'Cyber Security - Restores 5 lives at the end of each round up to maximum.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 6, '', 'Bloon Trojan - Every few seconds sends a Trojan software virus to random Bloon. Affected Bloon spawns no children when destroyed and produces 2x cash.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 7, '', 'Income increased to $250 per round.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 8, '', 'Bank hack increased to 12%.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, true, 0, 9, 'Syphon Funding', 'Downgrades most newly spawned Bloons by 1 tier. Cash per pop from affected Bloons is double. Lasts 10 seconds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 10, '', 'Income increased to $300 per round.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 11, '', 'Skimming increased to $2 per Bloon.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 12, '', 'Biohack increases bonus damage and affects 6 monkeys for 8 seconds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 13, '', 'Cyber Security adds 10 lives per round and can go up to 100 over starting lives.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 14, '', 'Income increased to $500 per round.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 15, '', 'Bloon Trojan is sent more often and earns more cash.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 16, '', 'Income increased to $800.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 17, '', 'Bloon Trojan can affect BFBs and DDTs Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 18, '', 'Biohack lasts 9 seconds and affected Monkeys pop 3 extra layers instead of 2.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_benjamin, false, 0, 19, '', 'Syphon Funding lasts 20 seconds and cash per pop is tripled for affected Bloons.', 0, 0);

--      Hero - Ezili
INSERT INTO `Heroes` VALUES (NULL, 'Ezili', 'Voodoo Monkey', 'Ezili is a wielder of dark arts and manipulator of Bloons. Beware.', 600, 3000, 'ezili.png');
SELECT id INTO @ezili FROM Heroes WHERE name='Ezili';
INSERT INTO `Towers` VALUES (NULL, @ezili, NULL);
SELECT id INTO @tower_ezili FROM Towers WHERE hero_id=@ezili;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_ezili, 'b', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 0, '', 'Ezili curses Bloons with dark voodoo power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 1, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 2, 'Heartstopper', 'Prevents any Regrow from happening for 6 seconds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 3, '', 'Ezili\'s main attack now curses multiple bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 4, '', 'Increases attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 5, '', 'Damage over time lasts longer and damages faster.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 6, 'Sacrificial Totem', 'A totem that gives Camo detection, extra pierce, attack range, attack speed, and projectile speed to nearby Monkeys. Drains 10 lives.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 7, '', 'Ezili\'s attack does far more damage to MOAB-Class Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 8, '', 'Ezili\'s attack strips off Camo, Regrow and Fortified properties from non-MOAB Class Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, true, 0, 9, 'MOAB Hex', 'places a curse on a MOAB-Class Bloon, it takes damage every second until annihilated.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 10, '', 'Increased attack range. Increases pierce of reanimated Bloons by 50%.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 11, '', 'Heartstopper reduced cooldown and increased duration.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 12, '', 'Base attack larger splash radius and increased pierce.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 13, '', 'Faster damage over time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 14, '', 'Increased range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 15, '', 'Sacrificial Totem lasts longer and only costs 1 life to use.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 16, '', 'Base attack has an even larger splash radius and increased pierce.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 17, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 18, '', 'Each damage tick from base attack pop 2 layers.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_ezili, false, 0, 19, '', 'MOAB Hex works faster and can destroy BAD Bloons.', 0, 0);

--      Hero - Pat Fusty
INSERT INTO `Heroes` VALUES (NULL, 'Pat Fusty', 'Giant Monkey', 'Pat is a huge Monkey of enormous strength. His unique size and power is a great asset in the war on bloons.', 800, 3000, 'pat-fusty.png');
SELECT id INTO @pat_fusty FROM Heroes WHERE name='Pat Fusty';
INSERT INTO `Towers` VALUES (NULL, @pat_fusty, NULL);
SELECT id INTO @tower_pat_fusty FROM Towers WHERE hero_id=@pat_fusty;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_pat_fusty, 'a', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 0, '', 'Pat slams Bloons into the ground.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 1, '', 'Increased radius of Pat''s slam attack.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, true, 0, 2, 'Rallying Roar', 'All nearby Monkeys can pop +1 layer for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 3, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 4, '', 'Pat sometimes does a slap attack that pushes Bloons back a considerable distance.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 5, '', 'Bloons hit by Pat are stunned for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 6, '', 'Increased popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 7, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 8, '', 'Increased range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, true, 0, 9, 'Big Squeeze', 'Grabs a MOAB, BFB, ZOMG, or DDT (if granted camo detection) and crushes it over 5 seconds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 10, '', 'Pops more layers per attack.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 11, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 12, '', 'Attacks stun Bloons for longer and can stun MOAB-Class Bloons briefly.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 13, '', 'Rallying Roar has increased range and duration and increased damage of rallied monkeys.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 14, '', 'Slap attacks affect more Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 15, '', 'Increased range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 16, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 17, '', 'Increased popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 18, '', 'Attack pops more layers.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_pat_fusty, false, 0, 19, '', 'Big Squeeze can grab several big Bloons at once.', 0, 0);


--      Hero - Adora
INSERT INTO `Heroes` VALUES (NULL, 'Adora', 'High Priestess', 'Adora\'s devotion compels her to strike Bloons down with furious vengeance.', 1000, 5000, 'adora.png');
SELECT id INTO @adora FROM Heroes WHERE name='Adora';
INSERT INTO `Towers` VALUES (NULL, @adora, NULL);
SELECT id INTO @tower_adora FROM Towers WHERE hero_id=@adora;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_adora, 'b', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 0, '', 'Divine Bolt seeks out and destroys Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 1, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 2, 'The Long Arm of Light', 'Greatly increases attack range and power for a short time & damages all Bloon Types.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 3, '', 'Shoots double Divine Bolts.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 4, '', 'Divine bolts pierce through more Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 5, '', 'Shoots 3 Divine Bolts at a time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 6, 'Blood Sacrifice', 'Sacrifice a targeted Tower to grant Adora large amounts of XP and boost her attack range and rate of fire for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 7, '', 'Shoots 4 Divine Bolts at a time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 8, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, true, 0, 9, 'Ball of Light', 'Brings forth a powerful ball of energy to strike down the Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 10, '', 'Adora increases attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 11, '', 'Shoots 5 Divine Bolts at a time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 12, '', 'Divine Bolts pierce through more Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 13, '', 'Shoots 6 Divine Bolts at a time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 14, '', 'Divine Bolts burn through an extra Bloon layer.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 15, '', 'The Long Arm of Light becomes even more deadly.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 16, '', 'Adora increases attack speed even more.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 17, '', 'Shoots 8 Divine Bolts at a time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 18, '', 'Increased attack range.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_adora, false, 0, 19, '', 'Ball of Light is greatly improved.', 0, 0);


--      Hero - Admiral Brickell
INSERT INTO `Heroes` VALUES (NULL, 'Admiral Brickell', 'Naval Commander', 'Command all your water-based Monkeys to decisive victory. Requires water to place.', 750, 5000, 'admiral-brickell.png');
SELECT id INTO @admiral_brickell FROM Heroes WHERE name='Admiral Brickell';
INSERT INTO `Towers` VALUES (NULL, @admiral_brickell, NULL);
SELECT id INTO @tower_admiral_brickell FROM Towers WHERE hero_id=@admiral_brickell;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_admiral_brickell, 'b', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 0, '', 'Drops powerful sea mines that seek and destroy Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 1, '', 'Increased attack speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, true, 0, 2, 'Naval Tactics', 'Greatly increases attack speed of nearby water-based Monkeys for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 3, '', 'More popping power for Sea Mines.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 4, '', 'Naval Tactics increases popping power and allows affected Monkeys to hit all Bloon types except Camo.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 5, '', 'Increases the damage of Sea Mines and Pistol attacks.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 6, '', 'Increased attack range and Camo Bloon detection.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 7, '', 'Naval Tactics allows affected monkeys to hit Camo Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 8, '', 'Sea Mines do extra damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, true, 0, 9, 'Mega Mine', 'Deploys to any water area a devastating Mine that triggers on MOABs and stuns nearby Bloons. Mega Mines last 3 rounds.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 10, '', 'Faster deploy speed and deploy rate for Sea Mines.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 11, '', 'Pistol attack increased speed and damage, Sea Mines increased damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 12, '', 'Mega Mine cooldown reduced.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 13, '', 'Naval Tactics duration increased.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 14, '', 'Enhanced Sea Mines have a larger explosion, can damage Black Bloons and can remove Camo.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 15, '', 'Attack and Sea Mine deploy range increased slightly.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 16, '', 'Sea Mines do greatly increased damage.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 17, '', 'Mega Mine cooldown reduced even further.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 18, '', 'Naval Tactics affects all water-based towers everywhere.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_admiral_brickell, false, 0, 19, '', 'Mega Mine does massively increased damage and longer stun.', 0, 0);


--      Hero - Etienne
INSERT INTO `Heroes` VALUES (NULL, 'Etienne', 'Drone Operator', 'This high-tech hero can pursue the Bloons wherever they go with his remote controlled drone.', 850, 5000, 'etienne.png');
SELECT id INTO @etienne FROM Heroes WHERE name='Etienne';
INSERT INTO `Towers` VALUES (NULL, @etienne, NULL);
SELECT id INTO @tower_etienne FROM Towers WHERE hero_id=@etienne;

INSERT INTO `TowerTiers` VALUES (NULL, @tower_etienne, 's', 0);

INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 0, '', 'Flies a deadly little drone around to shoot at the Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 1, '', 'Etienne''s range increased.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, true, 0, 2, 'Drone Swarm', 'Etienne launches 4 more temporary drones to wreak some Bloon popping havoc.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 3, '', 'Drones increase in popping power.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 4, '', 'Drone increased attack speed and infra red camera allows shooting of Camo Bloons.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 5, '', 'Drone Swarm ability cooldown reduced.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 6, '', 'Etienne now controls 2 drones at once.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 7, '', 'UAV: all Monkeys gain Camo Bloon detection.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 8, '', 'Drones pop an extra Bloon layer.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, true, 0, 9, 'UCAV', 'high altitude surveillance drone becomes devastating combat drone for a short time.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 10, '', 'Etienne gains a third drone to control.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 11, '', 'Drone upgrades! Increased popping power and flight speed.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 12, '', 'UCAV ability cooldown reduced.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 13, '', 'Drone damage increased greatly.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 14, '', 'UCAV damage output and duration greatly increased.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 15, '', 'Etienne''s range, drone popping power, and Drone Swarm ability cooldown all improved.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 16, '', 'UCAV damage output greatly increased again!', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 17, '', 'Drone damage increased.', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 18, '', 'Etienne now controls four drones all the time!', 0, 0);
INSERT INTO `Abilities` VALUES (NULL, @tower_etienne, false, 0, 19, '', 'Perma-UCAV: Surveillance drone becomes permanent UCAV. When activated becomes more powerful for a short time and can pop all Bloon types.', 0, 0);
