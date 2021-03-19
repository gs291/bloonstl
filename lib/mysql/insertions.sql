-- Monkeys (id, name, type, description, cost_gold
-- Heroes (id, name, type, description, cost_gold, cost_cash
-- Towers (id, hero_id, monkey_id)
-- Abilities (id, tower_id, upgrade_path, upgrade_tier, name, description, cost_gold, cost_xp

-- MONKEYS --

--      Monkey - Dart Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Dart Monkey', 'Primary', 'Throws a single dart at nearby bloons. Short range and low peirce but cheap.', 200, 'dart-monkey.jpeg');

SELECT id INTO @dart_monkey FROM Monkeys WHERE name='Dart Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @dart_monkey);
SELECT id INTO @tower_dart_monkey FROM Towers WHERE monkey_id=@dart_monkey;

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
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 3, 'Super Monkey Fan Club', 'Super Monkey Fan Club ability: Converts up to 10 nearby Dart Monkeys including himself into Super Monkeys for 15 seconds. Regular attack speed also increased.', 8000, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 1, 4, 'Plasma Monkey Fan Club', 'Elite membership of this club grants the Dart Monkeys even more power!', 50000, 30000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 0, 'Long Range Darts', 'Makes the Dart Monkey shoot further than normal.', 90, 100);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 1, 'Enhanced Eyesight', 'Shoots even further and can detect Camo Bloons.', 200, 450);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 2, 'Crossbow', 'Uses a long range Crossbow that can pop 3 layers of Bloon for every hit.', 625, 2100);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 3, 'Sharp Shooter', 'Sharp Shooter does powerful Crit Shots every few seconds that do a lot more damage.', 2000, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dart_monkey, false, 2, 4, 'Crossbow Master', 'Crossbow Master shoots really fast and devastates most Bloon types with ease.', 25000, 35000);

--      Monkey - Boomerang Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Boomerang Monkey', 'Primary', 'Hurls a boomerang that follows a curved path. Good range and pierce', 325, 'boomerang-monkey.jpeg');
SELECT id INTO @boomerang_monkey FROM Monkeys WHERE name='Boomerang Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @boomerang_monkey);
SELECT id INTO @tower_boomerang_monkey FROM Towers WHERE monkey_id=@boomerang_monkey;

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
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 3, 'MOAB Press', 'Heavy Kylie boomerang hits MOAB-Class Bloons multiple times per throw and sometimes knocks them back a short way along the path.', 1800, 9500);
INSERT INTO `Abilities` VALUES (NULL, @tower_boomerang_monkey, false, 2, 4, 'MOAB Domination', 'Special knockback kylies trigger more often and do lots of extra damage.', 60000, 28000);



--      Monkey - Bomb Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Bomb Tower', 'Primary', 'Launches a powerful bom that the Bloons. Slow rate of fire but afect a radius around the explosion', 600, 'bomb-shooter.jpeg');
SELECT id INTO @bomb_tower FROM Monkeys WHERE name='Bomb Tower';
INSERT INTO `Towers` VALUES (NULL, NULL, @bomb_tower);
SELECT id INTO @tower_bomb_tower FROM Towers WHERE monkey_id=@bomb_tower;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 0, 0, 'Bigger Bombs', 'Shoots larger bombs, they have a larger blast area and more popping power.', 350, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 0, 1, 'Heavy Bombs', 'Heavy duty bombs can smash through 2 layers of Bloon at once.', 650, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 0, 2, 'Really Big Bombs', 'Huge bombs deal greater damage in a large area and allow Frags to pop more Bloons.', 1200, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 0, 3, 'Bloon Impact', 'Explosions become so violent Bloons are stunned for a short time when they are hit.', 3600, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 0, 4, 'Bloon Crush', 'Bloon shattering explosions do massive damage and can stun MOAB-Class Bloons.', 55000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 1, 0, 'Faster Reload', 'Reloads 20% faster.', 250, 180);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 1, 1, 'Missile Launcher', 'Shoots missiles instead of bombs, missiles fly faster with longer range', 400, 640);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 1, 2, 'MOAB Mauler', 'MOAB Maulers do much more damage to MOAB-Class Bloons.', 900, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, true, 1, 3, 'MOAB Assassin', 'Assassinate MOAB ability: Special missile flies out and does massive damage to MOAB-Class Bloons. Regular attack range and MOAB-class damage also increased.', 3200, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, true, 1, 4, 'MOAB Eliminator', 'Assassinate ability does 6x damage with a shorter cooldown.', 25000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 2, 0, 'Extra Range', 'Increases attack range', 200, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 2, 1, 'Frag Bombs', 'Explosions throw out sharp fragments that can pop more Bloons including Black Bloons.', 300, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 2, 2, 'Cluster Bombs', 'Throws out secondary bombs instead of sharp fragments every shot.', 800, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 2, 3, 'Recursive Cluster', 'Every second shot the cluster bombs send out more cluster bombs for even more destruction.', 2400, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_bomb_tower, false, 2, 4, 'Bomb Blitz', 'Deals much more damage and gains the passive Bomb Storm Ability - when lives are lost, the Bomb Storm automatically triggers which destroys all but the biggest of Bloons.', 35000, 25000);



--      Monkey - Tack Shooter
INSERT INTO `Monkeys` VALUES (NULL, 'Tack Shooter', 'Primary', 'Shoots a short-range volley of sharp tacks in 8 directions.', 280, 'tack-shooter.jpeg');
SELECT id INTO @tack_shooter FROM Monkeys WHERE name='Tack Shooter';
INSERT INTO `Towers` VALUES (NULL, NULL, @tack_shooter);
SELECT id INTO @tower_tack_shooter FROM Towers WHERE monkey_id=@tack_shooter;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 0, 'Faster Shooting', 'Shoots tacks faster.', 150, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 1, 'Even Faster Shooting', 'Shoots tacks even faster.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 2, 'Hot Shots', 'Shoots superhot tacks that do extra damage and can pop Lead Bloons.', 600, 2400);
INSERT INTO `Abilities` VALUES (NULL, @tower_tack_shooter, false, 0, 3, 'Ring of Fire', 'Damages many more Bloons with a deadly ring of flame instead of tacks.', 4500, 9500);
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



--      Monkey - Ice Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ice Monkey', 'Primary', 'Pops and freezes nearby Bloons for a short time. Frozen Bloons are immune to sharp damage. Can\'t freeze White, Zebra, or Lead Bloons.', 500, 'ice-monkey.jpeg');
SELECT id INTO @ice_monkey FROM Monkeys WHERE name='Ice Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ice_monkey);
SELECT id INTO @tower_ice_monkey FROM Towers WHERE monkey_id=@ice_monkey;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 0, 'Permafrost', 'Bloons move slowly even after thawing out.', 100, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 1, 'Metal Freeze', 'Can freeze and pop Lead Bloons.', 300, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 2, 'Ice Shards', 'Razor sharp shards fly out when Frozen Bloons pop.', 1500, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 3, 'Embrittlement', 'Detects Camo Bloons and all Bloons hit become brittle, taking extra damage for a short time and losing Camo & Regrow properties permanently.', 3000, 8250);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 0, 4, 'Super Brittle', 'Bloons take huge damage while frozen including MOAB-Class Bloons.', 30000, 25000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 0, 'Enhanced Freeze', 'Attacks faster and freezes for longer.', 225, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 1, 'Deep Freeze', 'Freezes through 2 layers of Bloon.', 350, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 1, 2, 'Arctic Wind', 'Greatly increases pierce & gains a super cold aura that slows Bloons and freezes water nearby.', 3200, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 3, 'Snowstorm', 'Freezes all bloons on screen, and briefly freezes white, zebra, camo and MOAB class.', 3000, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, true, 1, 4, 'Absolute Zero', 'Ability is so cold it freezes all regular Bloons for longer, including White, Zebra, and Camo, slows MOAB-class longer, and greatly increases the attack speed of all Ice Monkeys for the duration.', 26000, 27500);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 0, 'Larger Radius', 'Larger freeze area.', 100, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 1, 'Re-Freeze', 'Can re-freeze Bloons that are already frozen.', 200, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 2, 'Cryo Cannon', 'Shoots freezing bombs at Bloons over longer range.', 2000, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 3, 'Icicles', 'Frozen Bloons grow sharp icicles that can pop Bloons that touch them.', 2000, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_ice_monkey, false, 2, 4, 'Icicle Impale', 'Shoots huge icicle spikes that do huge damage to MOAB-Class Bloons and freezes them.', 30000, 30000);



--      Monkey - Glue Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Glue Gunner', 'Primary', 'Shoots a blob of sticky glue that slows Bloons down by 50%.', 275, 'glue-gunner.jpeg');
SELECT id INTO @glue_gunner FROM Monkeys WHERE name='Glue Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @glue_gunner);
SELECT id INTO @tower_glue_gunner FROM Towers WHERE monkey_id=@glue_gunner;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 0, 'Glue Soak', 'Glue soaks through all layers of Bloon.', 200, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 1, 'Corrosive Glue', 'Glued Bloons pop one layer every few seconds.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 2, 'Bloon Dissolver', 'Extreme solvents melt two layers every second.', 3300, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 3, 'Bloon Liquefier', 'Can glue one additional Bloon per shot and applies liquifying compounds that do 10 pops every second.', 7000, 9000);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 0, 4, 'The Bloon Solver', 'Bloons a problem? Here\'s the solution.', 24000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 0, 'Bigger Globs', 'Can coat 2 Bloons per shot.', 100, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 1, 'Glue Splatter', 'Splatters glue across up to 6 Bloons per shot.', 1800, 900);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 1, 2, 'Glue Hose', 'Shoots glue 3x as fast!', 3250, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 3, 'Glue Strike', 'Glue Strike Ability: Glues all Bloons on screen, causing them to take more damage from all sources while it lasts.', 3500, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, true, 1, 4, 'Glue Storm', 'Glue storm ability pelts the whole screen over 15 seconds with glue. Glued Bloons take extra damage while glued.', 15000, 25000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 0, 'Stickier Glue', 'Makes glue effect last much longer.', 120, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 1, 'Stronger Glue', 'Slows down Bloons even more.', 400, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 2, 'MOAB Glue', 'Improved glue formula allows it to stick to MOAB-Class Bloons.', 3200, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 3, 'Relentless Glue', 'Popped Bloons that were glued, leave a blob of glue on the track.', 3000, 8000);
INSERT INTO `Abilities` VALUES (NULL, @tower_glue_gunner, false, 2, 4, 'Super Glue', 'Glue so strong it temporarily immobilizes all affected Bloons!', 35000, 30000);



--      Monkey - Sniper Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Sniper Monkey', 'Military', 'Can shoot Bloons it can see anywhere on the screen with long-range rifle, and pops 2 layers off Bloons hit by it.', 350, 'sniper-monkey.jpeg');
SELECT id INTO @sniper_monkey FROM Monkeys WHERE name='Sniper Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @sniper_monkey);
SELECT id INTO @tower_sniper_monkey FROM Towers WHERE monkey_id=@sniper_monkey;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 0, 'Full Metal Jacket', 'Shots pop through 4 layers of Bloon. Can pop Lead and Frozen Bloons.', 350, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 1, 'Large Calibre', 'Shots can pop through 7 layers of Bloon', 1500, 800);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 2, 'Deadly Precision', '20 damage per shot, plus bonus damage to Ceramics.', 3000, 3500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 3, 'Maim MOAB', 'Immobilizes MOAB-Class Bloons for a short time.', 5000, 10500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 0, 4, 'Cripple MOAB', 'Crippled MOABs are immobilized for longer and take extra damage from all other attacks.', 40000, 37500);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 0, 'Night Vision Goggles', 'Allows the sniper to detect and do an additional 2 damage to Camo Bloons.', 300, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 1, 'Shrapnel Shot', '	Damaged bloons spray out a cone of sharp shrapnel.', 450, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 1, 2, 'Bouncing Bullet', 'Shots bounce to new targets up to 3 times.', 3200, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 3, 'Supply Drop', 'Supply Drop Ability: drops a crate full of cash. Regular attack also damages Lead Bloons and increases Shrapnel popping power.', 7200, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, true, 1, 4, 'Elite Sniper', 'Supply Drop gives much more cash. Grants Elite targeting prio to all snipers.', 13000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 0, 'Fast Firing', 'Shoots faster than normal.', 400, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 1, 'Even Faster Firing', 'Shoots even faster!', 400, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 2, 'Semi-Automatic', 'Attacks 3x as fast!', 3500, 2750);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 3, 'Full Auto Rifle', 'Fully automatic weapon with incredible popping power, including damage to Lead Bloons.', 4750, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_sniper_monkey, false, 2, 4, 'Elite Defender', 'A lost life gives this Sniper 4x attack speed for a short time in retaliation. Also attacks faster the further the Bloons are along the track.', 14000, 30000);



--      Monkey - Monkey Sub
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Sub', 'Military', 'Shoots homing top-e-darts at nearby Bloons. Must be placed in water.', 325, 'monkey-sub.jpeg');
SELECT id INTO @monkey_sub FROM Monkeys WHERE name='Monkey Sub';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_sub);
SELECT id INTO @tower_monkey_sub FROM Towers WHERE monkey_id=@monkey_sub;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 0, 'Longer Range', 'Increases attack range.', 130, 125);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 1, 'Advanced Intel', 'Allows long range targeting of bloons that are in the radius of your other towers.', 500, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 2, 'Submerge and Support', 'Adds submerge targeting option permanently reveals Camo Bloons in its radius, but does not attack while submerged.', 500, 2250);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 3, 'Bloontonium Reactor', 'Submerge to detect Camo, pop Bloons and reduce ability cooldowns of nearby water-based monkeys by 15%.', 2500, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_sub, false, 0, 4, 'Energizer', 'Submerge to detect Camo, pop Bloons and reduce ability cooldowns of nearby water-based monkeys by 15%.', 40000, 33000);

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


--      Monkey - Monkey Buccaneer
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Buccaneer', 'Military', 'Shoots a single, heavy dart from both sides of the ship. Must be placed in water.', 500, 'monkey-buccaneer.jpeg');
SELECT id INTO @monkey_buccaneer FROM Monkeys WHERE name='Monkey Buccaneer';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_buccaneer);
SELECT id INTO @tower_monkey_buccaneer FROM Towers WHERE monkey_id=@monkey_buccaneer;

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



--      Monkey - Monkey Ace
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Ace', 'Military', 'Flies above the ground shooting volleys of high-pierce darts.', 800, 'monkey-ace.jpeg');
SELECT id INTO @monkey_ace FROM Monkeys WHERE name='Monkey Ace';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_ace);
SELECT id INTO @tower_monkey_ace FROM Towers WHERE monkey_id=@monkey_ace;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 0, 'Rapid Fire', 'Shoots faster than normal.', 650, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 1, 'Lots More Darts', 'Shoots 12 darts at a time.', 650, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 2, 'Fighter Plane', 'Flies fast and launches anti-MOAB missiles.', 1000, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 3, 'Operation: Dart Storm', 'Shoots 16 darts per volley, and twice as fast.', 3000, 8000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 0, 4, 'Sky Shredder', 'The Bloons will wish they had never come.', 40000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 0, 'Exploding Pineapple', 'Drops pineapples to the ground that explode violently after a few seconds.', 200, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 1, 'Spy Plane', 'Allows Monkey Ace to hit Camo Bloons.', 350, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 1, 2, 'Bomber Ace', 'Drops a huge bomb that destroys most things on screen.', 900, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 3, 'Ground Zero', 'Drops a huge bomb that destroys most things on screen.', 14000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, true, 1, 4, 'Tsar Bomba', 'A very, very large bomb. Someone put a stop to this craziness!', 35000, 30000);

--          Botttom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 0, 'Sharper Darts', 'Darts can pop 8 Bloons each.', 500, 160);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 1, 'Centered Path', 'New central flight path for maximum map coverage.', 300, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 2, 'Neva-Miss Targeting', 'Darts automatically seek out and pop Bloons by themselves.', 2200, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 3, 'Spectre', 'Rapidly fires darts and bombs, dominating most Bloon types easily.', 24000, 19000);
INSERT INTO `Abilities` VALUES (NULL, @tower_monkey_ace, false, 2, 4, 'Flying Fortress', 'This is a BIG plane', 120000, 45000);



--      Monkey - Heli Pilot
INSERT INTO `Monkeys` VALUES (NULL, 'Heli Pilot', 'Military', 'Hovers wherever you direct it. Shoots from twin heavy dart guns.', 1600, 'heli-pilot.jpeg');
SELECT id INTO @heli_pilot FROM Monkeys WHERE name='Heli Pilot';
INSERT INTO `Towers` VALUES (NULL, NULL, @heli_pilot);
SELECT id INTO @tower_heli_pilot FROM Towers WHERE monkey_id=@heli_pilot;

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



--      Monkey - Mortar Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Mortar Monkey', 'Military', 'Launches an exploding mortar shell to a fixed location anywhere on the screen.', 750, 'mortar-monkey.jpeg');
SELECT id INTO @mortar_monkey FROM Monkeys WHERE name='Mortar Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @mortar_monkey);
SELECT id INTO @tower_mortar_monkey FROM Towers WHERE monkey_id=@mortar_monkey;

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
INSERT INTO `Abilities` VALUES (NULL, @tower_mortar_monkey, false, 2, 4, 'Blooncineration', 'Superhot burny stuff melts through 5 layers of bloon each shot, burns MOAB class bloons for extra damage, and strips DDT camo.', 45000, 35000);



--      Monkey - Dartling Gunner
INSERT INTO `Monkeys` VALUES (NULL, 'Dartling Gunner', 'Military', 'Uses a dart-shooting machine-gun. Aims wherever you point on the screen.', 850, 'dartling-gunner.jpeg');
SELECT id INTO @dartling_gunner FROM Monkeys WHERE name='Dartling Gunner';
INSERT INTO `Towers` VALUES (NULL, NULL, @dartling_gunner);
SELECT id INTO @tower_dartling_gunner FROM Towers WHERE monkey_id=@dartling_gunner;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 0, 'Focused Firing', 'Increases accuracy of the Dartling Gun.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 1, 'Laser Shock', 'Laser tipped shots shock bloons into popping again 1 second after being struck.', 900, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 2, 'Laser Cannon', 'Rapid fires much more powerful laser blasts that can pop frozen Bloons.', 4250, 2600);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 3, 'Plasma Accelerator', 'Concentrates a powerful beam of energy to a single point.', 11000, 12500);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 0, 4, 'Ray of Doom', 'Creates a solid line of annihilation. You can erase most Bloons at your leisure', 110000, 75000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 0, 'Advanced Targeting', 'Allows Dartling Gunner to hit Camo Bloons.', 250, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 1, 'Faster Barrel Spin', 'Makes gun fire much faster.', 950, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 1, 2, 'Hydra Rocket Pods', 'Shoots depleted bloontonium missiles that can damage all Bloons types and trigger multiple explosions.', 5250, 2700);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 3, 'Rocket Storm', 'Rocket Storm ability: Launches a powerful storm of rockets in a wide cone.', 4800, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, true, 1, 4, 'M.A.D', 'Moab Assured Destroyer. Slower firing mega missiles deal extreme damage to MOAB-class Bloons.', 65000, 60000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 0, 'Faster Swivel', 'Barrel can swivel much faster.', 150, 110);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 1, 'Powerful Darts', 'Darts move faster and can pop 3 bloons each.', 1200, 650);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 2, 'Buckshot', 'Shoots blasts of deadly buckshot instead of darts.', 4000, 300);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 3, 'Bloon Area Denial System', '4-barreled auto-cannon that can be set to attack automatically.', 12000, 15000);
INSERT INTO `Abilities` VALUES (NULL, @tower_dartling_gunner, false, 2, 4, 'Bloon Exclusion Zone', 'Upgraded to 6 barrels and massively increased damage. Bloons are excluded from existence', 60000, 55000);



--      Monkey - Wizard Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Wizard Monkey', 'Magic', 'Hurls magical bolts of energy at the Bloons. Can upgrade to a variety of powerful spells.', 450, 'wizard-monkey.jpeg');
SELECT id INTO @wizard_monkey FROM Monkeys WHERE name='Wizard Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @wizard_monkey);
SELECT id INTO @tower_wizard_monkey FROM Towers WHERE monkey_id=@wizard_monkey;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 0, 'Guided Magic', 'Magic shots seek out the Bloons, even behind cover.', 150, 110);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 1, 'Arcane Blast', 'Bigger, more powerful magic blasts pop through 2 layers of Bloon.', 600, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 2, 'Arcane Mastery', 'Attacks 2X faster over 2X longer range and adds 4+ pierce.', 1300, 2300);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 3, 'Arcane Spike', 'Magic does extra damage to MOAB-Class Bloons and adds a 2X attack speed bonus', 10900, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 0, 4, 'Archmage', 'A true master of magical wizardry. Gives the monkey Shimmer and Dragon''s Breath. Also doubles magic bolt fire rate and increases its pierce and damage', 32000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 0, 'Fireball', 'Every few seconds casts an explosive fireball spell.', 300, 130);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 1, 'Wall of Fire', 'Creates a super hot wall of fire across the track to roast the Bloons as they pass.', 900, 700);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 1, 2, 'Dragon\'s Breath', 'Spews endless flames at nearby Bloons and enhances Fireball and Wall of Fire.', 3000, 2600);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 3, 'Summon Phoenix', 'Powerful phoenix wreaks Bloon havoc for 20 seconds.', 4000, 13000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, true, 1, 4, 'Wizard Lord Phoenix', 'Wizard Lord becomes a master of the flame, turns into a super powerful Lava Phoenix for a short time.', 60000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 0, 'Intense magic', '	More powerful magic shots move faster and can pop more Bloons.', 300, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 1, 'Monkey Sense', 'Allows the Wizard to hit Camo Bloons.', 300, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 2, 'Shimmer', 'Gains a dark magic attack that periodically reveals location of all nearby Camo bloons permanently.', 1800, 2200);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 3, 'Necromancer: Unpopped Army', 'Reanimate recently popped enemies as servants to destroy the Bloons.', 3500, 10000);
INSERT INTO `Abilities` VALUES (NULL, @tower_wizard_monkey, false, 2, 4, 'Prince of Darkness', 'Reanimate even more powerful bloon servants to obliterate the enemy and buffs other Necromancers.', 24000, 30000);


--      Monkey - Super Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Super Monkey', 'Magic', 'Throws hundreds of darts and hypersonic speed with a huge attack range.', 2500, 'super-monkey.jpeg');
SELECT id INTO @super_monkey FROM Monkeys WHERE name='Super Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @super_monkey);
SELECT id INTO @tower_super_monkey FROM Towers WHERE monkey_id=@super_monkey;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 0, 'Laser Blasts', 'Shoots powerful blasts of a laser instead of darts.', 2500, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 1, 'Plasma Blasts', 'Plasma vaporizes almost everything it touches.', 4500, 2200);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 2, 'Sun Avatar', 'Channels power from the core of the Sun.', 22000, 7000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 3, 'Sun Temple', 'Tower sacrifices enhance and modify the Temple''s attacks.', 100000, 50000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 0, 4, 'True Sun God', 'Tremble before the AWESOME power of the TRUE Sun God!!	', 500000, 150000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 0, 'Super Range', 'Super Monkeys need Super Range.', 1000, 300);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 1, 'Epic Range', 'Why settle for super when you can have EPIC?', 1400, 1300);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 1, 2, 'Robo Monkey', 'Half Super Monkey, half killer robot of death. Shoots from 2 guns at once!', 9000, 6000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 3, 'Tech Terror', 'Destroys most Bloons completely and utterly within blast radius.', 22000, 35000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 1, 4, 'The Anti-Bloon', 'Program Directive><Eradicate Bloons><INITIATE>', 90000, 85000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 0, 'Knockback', 'Bloons get pushed backward or slowed after each hit.', 3000, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, false, 2, 1, 'Ultravision', 'Enables Super Monkey to shoot slightly further and to see Camo Bloons.', 1200, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 2, 'Dark Knight', 'Dark blades increase knockback and pierce and deal extra damage to MOAB-class Bloons. Gains Darkshift ability to shift to a nearby location.', 5500, 6500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 3, 'Dark Champion', 'Champion dark blades excel at puncturing and ruining all Bloon types.Gains long-range Darkshift Ability', 60000, 47500);
INSERT INTO `Abilities` VALUES (NULL, @tower_super_monkey, true, 2, 4, 'Legend of the Night', 'We turn to him, when all hope is lost...', 240000, 100000);


--      Monkey - Ninja Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Ninja Monkey', 'Magic', 'Stealthy and fast Monkey that throws bladed shurikens to pop the Bloons. Can target Camo Bloons.', 500, 'ninja-monkey.jpeg');
SELECT id INTO @ninja_monkey FROM Monkeys WHERE name='Ninja Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @ninja_monkey);
SELECT id INTO @tower_ninja_monkey FROM Towers WHERE monkey_id=@ninja_monkey;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 0, 'Ninja Discipline', 'Increases attack range and attack speed.', 300, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 1, 'Sharp Shurikens', 'Shurikens can pop 4 Bloons each.', 350, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_ninja_monkey, false, 0, 2, 'Double Shot', 'Throws 2 shurikens at once.', 850, 2000);
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



--      Monkey - Alchemist
INSERT INTO `Monkeys` VALUES (NULL, 'Alchemist', 'Magic', 'Harnessing powers of science and magic, splashes Bloons with acid, also brows various potions with different effects.', 550, 'alchemist.jpeg');
SELECT id INTO @alchemist FROM Monkeys WHERE name='Alchemist';
INSERT INTO `Towers` VALUES (NULL, NULL, @alchemist);
SELECT id INTO @tower_alchemist FROM Towers WHERE monkey_id=@alchemist;

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
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 1, 'Acid Pool', 'If no Bloons are nearby Alchemist can drench nearby track with acid.', 600, 145);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 2, 'Lead To Gold', 'Converts Lead Bloons to GOLD! Special solvents do extra damage to Lead Bloons, destroying them in a one shot and generating cash.', 1000, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 3, 'Rubber to Gold', 'Converts all Bloons partially into gold, getting more cash per pop from affected Bloons.', 2750, 8500);
INSERT INTO `Abilities` VALUES (NULL, @tower_alchemist, false, 2, 4, 'Bloon Master Alchemist', 'Secret shrink potion converts all affected Bloons into Red Bloons', 40000, 24000);



--      Monkey - Druid
INSERT INTO `Monkeys` VALUES (NULL, 'Druid', 'Magic', 'Creates a blast of thorns for each attack. Upgrades can call forth powers of the Jungle, Storm or Wrath.', 425, 'druid.jpeg');
SELECT id INTO @druid FROM Monkeys WHERE name='Druid';
INSERT INTO `Towers` VALUES (NULL, NULL, @druid);
SELECT id INTO @tower_druid FROM Towers WHERE monkey_id=@druid;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 0, 'Hard Thorns', 'Hard thorns can pop 2 Bloons each and pop Frozen Bloons.', 250, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 1, 'Heart of Thunder', 'Unleashes regular blasts of forked lightning that arc from Bloon to Bloon.', 1000, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 2, 'Druid of the Storm', 'Gusts of wind blow Bloons off the track away from the exit.', 2000, 2500);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 3, 'Ball Lightning', 'Creates powerful balls of lightning that shoot additional lightning bolts.', 6000, 12000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 0, 4, 'Superstorm', 'Superstorm blasts all Bloon types for massive damage and blows them away from the exit. Can blow away ZOMGs', 90000, 35000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 0, 'Thorn Swarm', 'Shoots 8 thorns instead of 5.', 250, 140);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 1, 'Heart of Oak', 'Thorns convert Regrow Bloons into normal Bloons.', 350, 600);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 1, 2, 'Druid of the Jungle', 'Calls a vine from the ground to entangle and crush Bloons one at a time.', 950, 2000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 3, 'Jungle''s Bounty', 'Generates 200 money plus another 100 per Banana Farm type tower near the Druid.', 5000, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, true, 1, 4, 'Spirit of the Forest', 'Grows thorned vines along the path that deal constant damage plus bonus damage to ceramics, and generates lives and money when ability is activated.', 35000, 40000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 0, 'Druidic Reach', 'Increases range by a large amount.', 100, 120);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 1, 'Heart of Vengeance', 'Gains attack speed up to 100 lives lost after getting this upgrade, Lives above maximum do not count.', 300, 550);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 2, 'Druid of Wrath', 'Gains attack speed during the round as long as the Druid is popping Bloons.', 600, 1700);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 3, 'Poplust', 'Boosts attack speed for all Druids in the radius. Can stack up to 5 times on a single Druid.', 2500, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_druid, false, 2, 4, 'Avatar of Wrath', 'The more bloons there are, the more damage it does', 45000, 33000);



--      Monkey - Banana Farm
INSERT INTO `Monkeys` VALUES (NULL, 'Banana Farm', 'Support', 'Generates Bananas each round that convert into game money to spend on more stuff.', 1250, 'banana-farm.jpeg');
SELECT id INTO @banana_farm FROM Monkeys WHERE name='Banana Farm';
INSERT INTO `Towers` VALUES (NULL, NULL, @banana_farm);
SELECT id INTO @tower_banana_farm FROM Towers WHERE monkey_id=@banana_farm;

--          Top Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 0, 'Increased Production', 'Grows 2 extra Banana bunches per round.', 500, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 1, 'Greater Production', 'Grows 2 MORE extra Banana bunches per round.', 600, 750);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 2, 'Banana Plantation', 'Grows 16 Banana bunches per round.', 3000, 3000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 3, 'Banana Research Facility', 'Produces 5 large Banana crates every round worth $300 each. Each crate contains 15 Bananas.', 19000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 0, 4, 'Banana Central', 'You want Banana? We have Banana!', 100000, 50000);

--          Middle Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 0, 'Long Life Bananas', 'Bananas last 30 seconds before rotting instead of 15.', 300, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 1, 'Valuable Bananas', 'Bananas are worth 25% more cash per bunch.', 800, 1000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 1, 2, 'Monkey Bank', 'Generates money each round and stores it in the bank. Earns 15% interest each round.', 3300, 3500);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 3, 'IMF Loan', 'IMF Loan ability: Gives you $10,000 but you have to pay it back over time.', 7500, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, true, 1, 4, 'Monkey-Nomics', 'For when you''re too big to fail...', 100000, 50000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 0, 'EZ Collect', 'The collect radius of Bananas is larger. For Monkey Banks, glows when bank is full and ready to collect.', 250, 200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 1, 'Banana Salvage', 'Uncollected Bananas auto-collect for half the amount.', 200, 950);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 2, 'Marketplace', 'Generates 12 bananas each round and adds the money to your total. No fuss.', 2900, 3200);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 3, 'Central Market', 'Earns heaps of money each round and gives Merchantmen +10% income.', 15000, 20000);
INSERT INTO `Abilities` VALUES (NULL, @tower_banana_farm, false, 2, 4, 'Monkey Wall Street', 'Hub of Monkey trades earns colossal income each round.', 60000, 50000);


--      Monkey - Spike Factory
INSERT INTO `Monkeys` VALUES (NULL, 'Spike Factory', 'Support', 'Automatically generates piles of Road Spikes on the nearby track. Excellent last line of defense.', 1000, 'spike-factory.jpeg');
SELECT id INTO @spike_factory FROM Monkeys WHERE name='Spike Factory';
INSERT INTO `Towers` VALUES (NULL, NULL, @spike_factory);
SELECT id INTO @tower_spike_factory FROM Towers WHERE monkey_id=@spike_factory;

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



--      Monkey - Monkey Village
INSERT INTO `Monkeys` VALUES (NULL, 'Monkey Village', 'Support', 'Hub of Monkey industry, has a number of different benefits to aid all of your Monkeys. Increases rawnge of all monkeys in its radius by 10%.', 1200, 'monkey-village.jpeg');
SELECT id INTO @monkey_village FROM Monkeys WHERE name='Monkey Village';
INSERT INTO `Towers` VALUES (NULL, NULL, @monkey_village);
SELECT id INTO @tower_monkey_village FROM Towers WHERE monkey_id=@monkey_village;

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



--      Monkey - Engineer Monkey
INSERT INTO `Monkeys` VALUES (NULL, 'Engineer Monkey', 'Support', 'Holds a trusty nail-gun to pop the Bloons. Can upgrade to creat its own nail-shooting sentry turrets.', 450, 'engineer-monkey.jpeg');
SELECT id INTO @engineer_monkey FROM Monkeys WHERE name='Engineer Monkey';
INSERT INTO `Towers` VALUES (NULL, NULL, @engineer_monkey);
SELECT id INTO @tower_engineer_monkey FROM Towers WHERE monkey_id=@engineer_monkey;

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
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 3, 'Overclock', 'Overclock Ability: Target another tower to supercharge its attack speed for a short time.', 135000, 14000);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, true, 1, 4, 'Ultraboost', 'Ultra-Overclocked Monkeys gain a small but permanent boost every time they are overclocked.', 120000, 35000);

--          Bottom Path
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 0, 'Oversize Nails', 'Massivization allows nails to pop 8 Bloons at once, including frozen. Also increases Foam and Sentry effectiveness.', 450, 150);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 1, 'Pin', 'Pins Bloons in place for a short time when struck.', 220, 500);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 2, 'Double Gun', 'Two guns for twice the fun.', 500, 1800);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 3, 'Bloon Trap', 'Bloon Trap captures Bloons until full. Select to empty full trap for cash.', 3500, 11000);
INSERT INTO `Abilities` VALUES (NULL, @tower_engineer_monkey, false, 2, 4, 'XXXL Trap', 'Huge Bloon Traps can trap some of the largest Bloons in them...', 60000, 40000);



-- HEROES --


--      Hero - Quincy
INSERT INTO `Heroes` VALUES (NULL, 'Quincy', 'Archer', 'Proud, strong and intelligent, Quincy uses his bow to perform feats of amazing skill.', 540, 0, 'quincy.jpeg');
SELECT id INTO @quincy FROM Heroes WHERE name='Quincy';
INSERT INTO `Towers` VALUES (NULL, @quincy, NULL);
SELECT id INTO @tower_quincy FROM Towers WHERE hero_id=@quincy;

INSERT INTO `Abilities` VALUES (NULL, @tower_quincy, false, 0, 0, '', 'Quincy\'s arrows bounce up to 3 different targets.', 0, 0);


