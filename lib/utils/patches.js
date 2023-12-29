export const patchVersions = [
    "34.0", "33.0", "32.3", "32.2", "32.1", "32.0", "31.0", "30.0", "29.4", "29.3", "29.2", "29.1","29.0","28.3","28.2","28.1","28.0",
    "27.2", "27.1","27.0", "26.1","26.0", "25.1", "25.0","24.2","24.1","24.0","23.0","21.1","21.0","20.1","20.0"
];

export const latest = patchVersions[0];

export const latestMajor = "32.0";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    "34.0": {
        "release": "2022-12-06",
        "items": [
            {
                "title": "Key New Features",
                "items": [
                    {
                        "title": "New Boss Bloon: Dreadbloon!",
                        "items": [
                            {
                                "text": "From the dark underground depths to the skies above, Dreadbloon brings its signature connection to the subterranean to combat even the toughest of Monkey defenses. Destroy Dreadbloon’s earthen armor only to find a lead interior with new special properties - complete immunity to different Monkey Tower categories each time the armor reforms. Even Paragons in those categories are rendered temporarily harmless. As if that’s not enough, Dreadbloon also spawns resilient Rock Bloons each time a skull is reached and until its stone armor is destroyed, and these Rock Bloons are so fearsome that any Monkey set to strong targeting will feel taunted to attack the Rock Bloon before anything else. Watch out for Dreadbloon in upcoming weekly Boss events and win those prestigious Dreadbloon badges!"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Beginner Map: One Two Tree!",
                        "items": [
                            {
                                "text": "A fun seasonal beginner map with an interesting twist! At certain rounds the trees are taken away to decorate Monkey homes leaving more space in which to build defenses. A bit like an automated Cornfield, but these plots also confer a handful of special properties to the Monkeys placed there. Pay attention to the colors and shapes on the billboard legend to help understand which Monkeys will benefit from each plot. This was a fun system to enable for use in maps, so we’ll plan to do more of this in the future and we also expect this will be heaps of fun for custom challenges - we look forward to seeing your ideas!"
                            }
                        ]
                    },
                    {
                        "title": "New Hero Skin: Sleigh Churchill skin",
                        "items": [
                            {
                                "text": "Inspired by the work done in Bloons Pop, Churchill’s combat ready sleigh was an easy pick for a seasonal hero skin. We had heaps of fun with this voiceover recording; Kevin Orlando did an amazing job as always, and we promise we only made a couple of sleigh homonym puns!"
                            }
                        ]
                    },
                    {
                        "title": "New Achievement: Invigoration"                 
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Game & UI: Avatar 66 - Avatar of Wrath, Avatar 68 - Absolute Zero"
                            }
                        ]
                    },
                    {
                        "title": "Competition Winning items",
                        "items": [
                            {
                                "text": "Banner 24 - Boomerang Glaives by u/ReconScoutTeemo"
                            },
                            {
                                "text": "Banner 25 - Glyphs by u/PvtMagnuS"
                            }
                        ]
                    },
                    {
                        "title": "Limited Time only",
                        "items": [
                            { "text": "We’ve had heaps of requests for projectile swaps, so be careful what you wish for. Some really fun ones below, but they are limited time so win those Trophies and get them while you can!" },
                            { "text": "Co-op - Fullscreen Sleighbells emote" },
                            { "text": "Banana farm - Presents projectile swap" },
                            { "text": "Ninja Monkey - Snowflake shuriken projectile swap" },
                            { "text": "Dart Monkey - Snowballs projectile swap" },
                            { "text": "Tack Shooter - Icicles and Snowflakes projectile swap" },
                            { "text": "Avatar 65 - Christmas wreath avatar (Obyn Wolf)" },
                            { "text": "Avatar 67 - Happy Holidays avatar (Etienne)" },
                            { "text": "Banner 23 - Seasons Greetings" }
                        ]
                    },
                    {
                        "title": "New CT Team Store items",
                        "items": [
                            [
                                { "text": "Building Props: Christmas Tree prop" },
                                { "text": "Team Banners: Team Banner 9 - Delicate Snowflake, Team Banner 10 - Roast Banana" },
                                { "text": "Icons: Alien Icon, Crown Icon" },
                                { "text": "Frames: Bloon Frame, Military Frame" }
                            ]
                        ]                                    
                    }
                ]       
            },
            {
                "title": "What’s Not Here - Yet!",
                "items": [
                    { 
                        "title": "Context and Reality Check",
                        "items": [
                            { "text": "2022 was a big year for the BTD6 team and Ninja Kiwi overall. Getting out of lockdowns and back to work in person was a huge gift and we were excited to build big and exciting updates. Both Geraldo and Contested Territory pushed the game into new design and technical areas, but also required additional post-launch work." },
                            { "text": "From a team perspective, getting out of lockdowns and the return of travel also meant long overdue family reunions and we supported extended time off for those purposes without hesitation. In parallel, we also saw more sick leave this year as unsurprisingly cold and flu season hit us particularly hard in Auckland this year, causing significantly more time off for ill health during September and October. While we did plan more time and did one fewer update this year than last in order to make room for a huge end of year update, this important leave time did impact us more than expected and planned." },
                            { "text": "Rather than delay the entire update, we decided to delay two elements so we could still bring the Dreadbloon, the One Two Tree map, Sleigh Churchill, and new Trophy and Team Store items out for holiday." }
                        ]
                        
                    },
                    { 
                        "title": "Dark Dungeon Expert Map",
                        "items": [
                            { "text": "We’ve been excited to respond to community requests for another difficult Expert map, especially with this excellent and inspiring community design. We implemented as designed and then iterated the room areas and path splits, in particular MOAB-class entering from two paths to prevent single path clustering. We riffed on the secret statue tower and included secrets and traps to match the dungeon theme and balance difficulty across modes and late game. These changes were producing a fantastic quality map but the nuances of the statue tower design, art, code, and QA made it compete for attention with the Beast Handler. At the point where we felt Beast Handler could still be delivered, we had to push Dark Dungeon to update 35 in the new year." },
                        ]
                        
                    },
                    { 
                        "title": "Beast Handler",
                        "items": [
                            { "text": "This tower is very unique. The Beasts were completely different from any other mechanic in the game, and they of course required 15 new models and animation sets completely separate from the normal tower model and animations. Sharing more about the tower functionality than we have before, the Beasts were also designed to synergize, so several Handlers together would combine their Beasts in order to enable higher tier Beasts. Amazing art and animations were built, signature code was written and optimized, and design was iterated. In many ways, the Beast Handler was completed, bug tested, and nearly ready to release - nearly. Up until last week, we thought the changes were making progress, but ultimately during the last playtests of the week at both Auckland and Dundee offices, we agreed there was too much confusion with the combination system and how Beasts would interact with other Handlers. Ninja Kiwi has always cared about quality and providing our players with the best possible experience and the tower just didn’t feel like it was there. It wasn’t up to the standard we set ourselves and the standard we hold the game to. While we are extremely disappointed that we won’t be able to release a new tower this year, the team felt it was the right call to make as the Beast Handler was just not quite ready to be unleashed. This was a very difficult call after all the incredibly hard teamwork that was put in to get this done - for us to simply say that it is not yet ready to play. We can and will make this better but with the amount of revision needed, we are moving the Beast Handler out at least two updates to update 36 at the earliest. This is not a set date for the release, however. We are giving ourselves a few months to go back to the fundamental design and make sure we can make good on our commitment to quality. We will be working hard to get the Beast Handlers into your hands but we want to release a tower you all find enjoyable, challenging (in a good way!) and, most importantly, fun! We really appreciate the love and support you have all provided us with this year and we hope you will understand the decision we've made and why." },
                        ]
                        
                    }
                ]
            },
            {
                "title": "Game Changes / Additions",
                "items": [
                    { "text": "A number of localization fixes, especially centered around the newer Polish language option, thank you to everyone who offered their feedback on that." },
                    { "text": "Advanced challenges & Time Attack tiles in CT will no longer earn XP" },
                    { "text": "Failed CT score submissions due to internet problems are now able to attempt to resubmit" },
                    { "text": "Boss Events now support multipliers to Boss Speed & Boss HP as an event rule" },
                    { "text": "Boss Events now support paragon count limits as an event rule" },
                    { "text": "CT Events now support splitting up tile degradation rules based on the tile type" },
                    { "text": "CT Events rules now support the option of tiles going ‘stale’, not awarding any more points but still remaining captured - we’ve built out some systems to address issues players are having with how CT works currently and will be trying some things out in future now that the systems are in place" },
                    { "text": "The Trophy Store icon on the main menu will now display a notification when there are limited-time items available that you don’t yet own" }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    { "text": "Resolved an issue with placing certain towers near the top of the map preventing their model from loading" },
                    { "text": "Resolved a game crash on boost upgrading a hero that has already leveled past 10" },
                    { "text": "Save icon on maps should no longer interact with clicks as if it is its own separate button" },
                    { "text": "Resolved a crash that could occur when exiting a custom input mode for a tower" },
                    { "text": "Resolved an issue preventing the first game launch without internet for no reason" },
                    { "text": "Resolved a number of map-specific placement issues" },
                    { "text": "Resolved a crash that could occur when quickly entering and exiting from CT" },
                    { "text": "Resolved an edge case with host re-joining lobby causing games to run in different modes for each player" },
                    { "text": "Resolved an issue where focus markers could remain on CT map after a new event start" },
                    { "text": "Resolved a noticeable lag spike on the game saving the player profile" },
                    { "text": "Resolved an issue with stacking model assets on CT island menu" },
                    { "text": "Resolved an issue with store-purchased relics & their regular counterparts sometimes not stacking together" },
                    { "text": "Resolved an issue with CT King item restarting its full animation on every interaction" },
                    { "text": "Resolved an issue that could occur with the pre-game prep knowledge spikes being removed if not hitting any Bloons" },
                    { "text": "Resolved an issue with remaining Race Passes sometimes being unable to update display to the correct amount that you have" },
                    { "text": "Added ‘Teams’ icons to available player banners that are available from their Teams" },
                    { "text": "Resolved an issue where creating a paragon from the middle path T5 tower would recover cooldown instantly" },
                    { "text": "Resolved an issue where default hero skins were not initially displayed as a selectable hero skin choice" },
                    { "text": "All CT Team Store notification Pips should now be clearable by clicking on the items" },
                    { "text": "Resolved an issue with the ‘Go to Trophy Store’ button instead saying ‘remove’ on banners you don't have" },
                    { "text": "Removed Hidden T-Posing Monkeys in the background easter egg that could occur when a menu is opened over the top of the Main Menu." },
                    { "text": "Resolved some language filtering issues" },
                    { "text": "Optimizations made to the Team Search / Quick Join search results" },
                    { "text": "Resolved some low framerate issues on specific pixel devices" },
                    { "text": "Resolved an issue with Monkey Team rewards not visually displaying for all players in co-op" },
                    { "text": "Resolved a crash that could occur when purchasing race passes on the pause menu" },
                    { "text": "Resolved a crash that could occur when loading a save with a necromancer in an odyssey" },
                    { "text": "Resolved some menu UI situations that displayed a blackened out background" },
                    { "text": "Potentially fixed that old crooked medal visual bug that still gets reported a lot" },
                    { "text": "A number of behind-the-scenes optimizations" },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "Resolved niche cases in which Juggernaut’s projectiles would not properly be able to hit targets again after rebounds"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "5-X-X Glaive Lord DoT can no longer be applied to DDTs from a camo village without being able to deal damage to lead"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "Inferno Ring should now swap to 'first' target on upgrade purchase"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Resolved an issue with Goliath doomship degree 100 end trail fx were being culled from the simulation incorrectly"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Comanche X-X-4 upgrade damage should no longer incorrectly change with crosspathing"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            { "text": "5-X-X True Sun God resolved a potential Co-op error on purchasing upgrade" },
                            { "text": "4-X-X & 5-X-X Super Monkeys should no longer attack during upgrade animation" }
                        ]
                        
                    },
                    {
                        "tower": "Captain Churchill",
                        "items": [
                            {
                                "text": "Captain Churchill's Tank Drop Trophy Store item's animation now works correctly again"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Resolved an issue with Vengeful Adora projectile assets not correctly displaying"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "items": [
                            { "text": "Resolved an error where Etienne would not record all stats correctly to your profile" },
                            { "text": "Lv3 Drone Swarm ability now has a forced expiration after the drone swarm duration +10s to prevent them getting stuck" },
                            { "text": "ETn beam down animation should now play correctly on loading a save" }
                        ]
                    }
                ]
            },
            {
                "title": "Platform Specific fixes",
                "items": [
                    { "text": "Windows Store: Resolved a crash that could occur on save" },
                    { "text": "Epic version: Webview now supports Linking Codes" },
                    { "text": "Apple Arcade: Monkey Names trophy item is no longer available for Child Accounts" },
                    { "text": "Apple Arcade: Resolved an infinite loading screen some users could come across" },
                    { "text": "Apple Arcade: Resolved an issue with Save Slot 3 not saving to iCloud when using multiple devices logged into the same iCloud account" },
                    { "text": "Apple Arcade: Resolved an issue with fresh local saves not conflicting with remote saves" },
                    { "text": "Apple Arcade: New UI to notify players of their iCloud account's enabled/disabled state" },
                    { "text": "MacOS: can no longer set game resolution to smaller than 800 x 600 since it cannot properly support a resolution that small" },
                    { "text": "MacOS: Resolved a game softlock on initial loading screen after selecting new cloud data on older version of the game" },
                    { "text": "Resolved a crash that could occur on certain iOS devices" },
                    { "text": "Resolved a map compression issue for the Alpine Run map on Android devices." }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "While not appreciated by all because of a lack of map situations it applies well in, we enjoy the quite specific niche that Juggernaut fills. However, we wanted to make some minor tweaks allowing it to apply itself better against fortified ceramics & reducing the exceptionally high ultra-juggernaut secondary balls pierce in favour of damage that can be more reliably used up.",
                        "items": [
                            { "text": "4-X-X Juggernaut fortified damage 0 > 2" },
                            { "text": "5-X-X Ultra-Juggernaut main ball fortified damage 0 > 5" },
                            { "text": "5-X-X Ultra-Juggernaut mini juggernaut ball damage 1 > 2" },
                            { "text": "5-X-X Ultra-Juggernaut mini juggernaut ball fortified damage 0 > 2" },
                            { "text": "5-X-X Ultra-Juggernaut mini juggernaut ball pierce 100 -> 50" }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "In many situations, especially moving into the deeper lategame, T4 MOAR Glaives didn’t quite feel like enough of a step up over the T3; leading on into the high ceramic cleanup of the T5 we have decided to introduce that ceramic bonus earlier at T4 along with allowing Glaives to overcome their long-standing weakness of being consumed by nearby blockers at T4 with MOAR Glaives ignoring all blocking objects completely. In efforts to cut down on unnecessarily high pierce for more reliable base stats Glaive Lord is having its excessive orbit pierce converted into high base ceramic damage bonus on the orbit & an added bonus to the main attack as well. When the Dart & Boomerang paragons were first introduced the more expensive T5 upgrades were not taken into account for balance as much as the raw paragon upgrade cost, in addition to this we have for a long time taken a no-MK approach to general game balance, however paragons have proven that they should follow the opposite of this ideal and be balanced around a max MK assumed approach, due to MK balance the Dart Paragon gains an incredible degree bonus, so we would like to counterbalance some of that advantage in the base Boomerang design by reducing the price greatly.",
                        "items": [
                            { "text": "4-X-X MOAR Glaives gains bonus to ceramic +1" },
                            { "text": "4-X-X MOAR Glaives now ignores blocking objects" },
                            { "text": "5-X-X Glaive Lord Glaive main attack gains bonus to ceramic +8" },
                            { "text": "5-X-X Glaive Lord Rotating Glaives bonus to ceramic increased 5 > 8" },
                            { "text": "5-X-X Glaive Lord Rotating Glaives pierce reduced to 80" },
                            { "text": "Boomerang Paragon price reduced from $400k > $325k" }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "Cluster Bombs has far superior pierce over top path which is the actual pierce path while also providing better overall cleanup power, so for now we’d like to reign those in a little closer.",
                        "items": [
                            {"text": "X-X-3 Cluster Bombs cluster pierce reduced 10 > 8"},
                            {"text": "3-X-X Really Big Bombs pierce increased 50 > 60"}
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Ice Monkey base pierce is too high, very easily countering large numbers of strong Bloons early, mid or late in the game for small investment, leading to very low tiers of ice monkey (below t3) being highly effective spam options over upgrading your ice. We are reworking some of this base pierce to require crosspath investment and buffing the damage Ice 3xx Ice Shards to compensate for some of its reduced pierce.",
                        "items": [
                            {"text": "0-0-0 Ice Monkey pierce reduced from 40 -> 30"},
                            {"text": "X-X-3 Cryo Cannon pierce reduced from 30 -> 20"},
                            {"text": "X-2-X Deep Freeze now also increases pierce by +10"},
                            {"text": "X-2-X Deep Freeze price increased from 350 -> 450"},
                            {"text": "X-3-X Arctic Wind price reduced from $2900 -> 2800"},
                            {"text": "3-X-X Ice Shards base damage increased 1 -> 2"},
                            {"text": "X-X-4 Icicles can now target MOABs but not slow"}
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "Glue Gunner base level doesn’t fit in as a starter placement, while not really changing that at all we feel for now if it was cheaper than $250 you'd be able to start with 2 dart monkeys & a glue on medium for more casual variety. With an expensive tier 2 and the T3 breaking the $3k mark Glue Hose doesn’t feel justifiable a lot of the time so base cost is being shifted up to T4. Bloon Solver appears to be in a fair state now but with low value save up into it from Dissolver & Liquifier, slight improvements have been made here to assist them in cleaning up in some cases it feels they should.",
                        "items": [
                            {"text": "Base cost reduced from $275 > 225"},
                            {"text": "X-3-X Glue Hose price reduced from $3250 > 2900"},
                            {"text": "X-4-X Glue Strike price increased from $3500 > 3850"},
                            {"text": "3-X-X Bloon Dissolver pierce increased from 1 > 2"},
                            {"text": "4-X-X Bloon Liquefier ceramic bonus increased 1 > 2"},
                            {"text": "3-X-X Bloon Dissolver tic rate 0.65s > 0.575"}
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "All paths of the Sniper Monkey are really starting to show strong use in different cases, and we’re quite happy with this, although bottom path feels like it relies a little too heavily on the top-end upgrades for such an overall cheap path, we are shifting a small amount of price out from the T3 into the T5",
                        "items": [
                            {"text": "X-X-3 Semi-Automatic price reduced from $3500 > 3000"},
                            {"text": "X-X-5 Elite Defender price increased from $14,000 > 14,500"}
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "While working on the Ace paragon we found a way to make homing appear much cleaner on super long-range attacks, so we’d like to try out this new setup on the Flagship for a little experiment to see if this improves the gameplay feeling there. Recent changes were very popular for Pirate Lord, so now it no longer feels like it needs to be such a cheap T5. While this isn’t enough of a change to curb its newfound power too much the price will be increasing. Buccaneer Farming at the base level is in-line with other farming options, slightly weaker but with enough dps to compensate, we recently experimented with lowering the benefit Trade Empire grants to T3s to slow down this early benefit & this turned out to be quite successful however they still scale too well too quickly for a low price so we’re bringing that down more.",
                        "items": [
                            {"text": "5-X-X Flagship new homing style"},
                            {"text": "X-5-X Pirate Lord $21,000 -> 26,000"},
                            {"text": "X-X-5 Trade Empire benefit to X-X-3's reduced from $15 > 10"}
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Sky Shredder has a higher skill ceiling than most towers so has evaded many nerfs, but is still too good for what it offers so is finally seeing a slight price increase. Same as mentioned above for the flagship, we are experimenting with new homing changes for the Spectre & Flying Fortress to improve their feeling. Users have noticed that Goliath Doomship's ability overall has far less pierce than the T4 ability, while this rarely matters at all the pierce value downgrading by that much was not an intended reduction, so we are bumping up each of those ability bombs to bring the total pierce up.",
                        "items": [
                            {"text": "5-X-X Sky Shredder price increased from $40,000 > 41,500"},
                            {"text": "X-X-4 Spectre new homing style"},
                            {"text": "Goliath Doomship carpet-bomb pierce increased 50 -> 150"}
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "The recent Mortar 5xx rework significantly devalued 502 crosspath, undermining the work we previously put into trying to balance that choice, likewise 205 Mortar is not often used as base damage isn't relevant for Blooncineration compared to attack speed, following along with the idea of Top Path improving burny stuff damage in addition to base hit damage both of these paths will now benefit from increase burn DoT in such a way.",
                        "items": [
                            {"text": "5-0-2 The Biggest One DoT damage increased 25 > 45"},
                            {"text": "2-0-4 Shattering Shells DoT damage increased 5 > 8"},
                            {"text": "2-0-5 Blooncineration DoT damage increased 5 > 8"},
                            {"text": "2-0-5 Blooncineration MOAB DoT damage increased 100 > 150"}
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Laser Cannon feels it needs a small price buff. BADS on the bottom currently feels like it brings far too much power to carry the midgame for cheap so price is being shifted around from the T5 down into the T4.",
                        "items": [
                            {"text": "3-0-0 Laser Cannon price reduced from $4250 -> $3750"},
                            {"text": "X-X-4 BADS cost $12000 -> $16000"},
                            {"text": "X-X-5 BEZ cost $58000 -> $54000"}
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Wizard Archmage currently doubles the attack speed of the main attack along with adding a sizable MOAB damage bonus, but these benefits are not applied to the extra attacks that it gains as a 533 tower, which specifically makes the 520 crosspath benefits feel disappointing and the base dragon's breath it gains quite insignificant to the main tower. Phoeniis still far too strong for an extremely cheap T4, so cost is being shifted from the T5 down.",
                        "items": [
                            {"text": "5-1-0 Archmage's Fireball damage increased to match X-3-X bonus fireball damage 1 > 9"},
                            {
                                "text": "5-X-X Archmage base attack rate increases now apply to secondary attacks",
                                "items": [
                                    {"text": "5-1-0 Fireball rate 2.2 > 1.1"},
                                    {"text": "5-2-0 WoF rate 6.5 > 3.25"},
                                    {"text": "5-X-X Dragon's Breath rate 0.1 > 0.05"},
                                    {"text": "5-X-X Shimmer rate 2.5 > 1.25"},
                                ]
                            },
                            {
                                "text": "5-X-X Archmage now also adds bonus MOAB damage to extra attacks",
                                "items": [
                                    {"text": "5-0-0 Dragon's Breath MOAB bonus added +2"},
                                    {"text": "5-1-0 Fireball MOAB bonus added +9"},
                                    {"text": "5-2-0 Wall of Fire MOAB bonus added +1"},
                                ]
                            },
                            {"text": "X-4-X Summon Phoenix price increased from $4500 > 6000"},
                            {"text": "X-5-X Wizard Lord Phoenix price reduced from $54,000 > $52,500"}
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "Tech Terror's ability runs into niche issues before r100 with some cases causing it to break BFBs into ceramic rushes instead of destroying them entirely, we found a very small damage buff resolves this up to r100, solving this problem for the base game modes, and while we were here added for the possibility for the ability to also deal consistant critical hits.",
                        "items": [
                            {"text": "X-4-X Tech Terror ability damage increased from 2500 > 2600"},
                            {"text": "X-5-X Anti Bloon ability damage increased from 5000 > 5200"},
                            {"text": "X-4-X Tech Terror every 3rd ability use crits for +50%"}
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "Druid’s vine brambles are very bottom-heavy in power, with high performance leading into a comparably small T4 increase, so some of the pierce is being moved up into the T4.",
                        "items": [
                            {"text": "X-3-X Druid of the Jungle brambles pierce reduced from 30 > 20"},
                            {"text": "X-4-X Jungle's Bounty brambles pierce increased from 30 > 40"}
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "description": "Bank is a little too much more efficient than any other Banana Farm option, this price nerf should leave it so it really somewhat still is but not so far ahead.",
                        "items": [
                            {"text": "X-3-X Monkey Bank price increased from $3500 > 3800"}
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Overclock's considerable longer duration benefit on lower tiers currently serves little purpose and only leads to weirdness in upgrading boosted towers, so for now we’d rather minimize this on the early cases that don’t serve much purpose.",
                        "items": [
                            {"text": "X-4-X Overclock buff to T0 reduced 1.75x > 1"},
                            {"text": "X-4-X Overclock buff to T1 reduced 1.5x > 1"},
                            {"text": "X-X-4 Overclock buff to T2 reduced 1.25x > 1"}
                        ]
                    },
                    {
                        "tower": "Quincy",
                        "description": "Quincy is a fairly average jack of all trades early on and does what’s required of him there fine, and while he’s an entry level hero that is very much meant to embody that jack of all trades but master of none feeling we’d like to add a little later end-game performance boost to his currently weak lv19 so he doesn’t drop off as much.",
                        "items": [
                            { "text": "Lv19 Quincy gains projectiles 2 > 3" }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "description": "Obyn’s Wall of Trees increase at level 20 feels like it can be a bit more of an increase, to assist him in his cleanup duty of end game super ceramics more effectively.",
                        "items": [
                            { "text": "Lv20 Obyn Wall of Trees pierce increased from 5000 > 9001" }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "description": "Some players don’t want their Trojan to activate until a certain point, or at all. The Trojan is as it is by design, however since currently Ben’s location doesn’t seem to matter much we feel that by limiting the Trojan to not target through walls this will allow that strategic use to be made if chosen via clever positioning depending on the map.",
                        "items": [
                            { "text": "Ben Lv7 Bloon Trojan can no longer attack through walls" }
                        ]
                    },
                    {
                        "tower": "Geraldo",
                        "description": "Geraldo's Sharpening Stone still stands out as extremely powerful for such a low cost, and how early he can be placed as a fast leveling hero allows for extremely easy power ramping from early on.",
                        "items": [
                            {"text": "Lv1 Geraldo placement cost increased from $600 > $700"},
                            {"text": "Lv5 Sharpening Stone duration reduced 15 > 10 rounds"}
                        ]
                    },
                    {
                        "title": "Relic Balance",
                        "description": "A small list of number changes have been changed up for CT Relic Knowledge. We are mainly here hoping to create a standout use-case difference for Restoration & Regeneration rather than one being purely better in every way.",
                        "items": [
                            {"text": "MOAB Clash: reduced from +3 > 2"},
                            {"text": "Regeneration: restore lives/round (up to starting lives) 10 > 20"},
                            {"text": "Restoration: restore lives/round (up to starting lives +200) 20 > 10"},
                            {"text": "Starting Cash: starting cash bonus reduced from $300 -> $250"},
                            {"text": "Air and Sea: discount amount reduced from 10% > 5%"},
                            {"text": "Box of Monkey: free tower cost limit reduced from $500 -> $400"},
                            {"text": "Primary Primates: Primary Monkeys discount 10% -> 8%"},
                            {"text": "Military Monkeys: Military discount 10% -> 8%"},
                            {"text": "Magic Monkeys: Magic discount 10% -> 8%"},
                            {"text": "Monkey Tycoon: All Monkeys discount 5% -> 4%"},
                            {"text": "Heartless: regrow rate reduction 25% > 50%"}
                        ]
                    },
                    {
                        "tower": "Sauda",
                        "description": "Saving this for last, as it is the biggest rework here with the most to say. There was too much already changed to include even further changes with her all at once, but we want to take this rework further after seeing your feedback, so Sauda fans please take your time over the holidays to really get a feel for how this changes things. At first this looks like a lot of numbers going down, but that is not our only intention with the changes, Sauda’s feeling is far too much of a ‘set and forget’ play, leading her to be extremely overvalued on simple maps but have a highly lackluster feeling on many difficult ones that require further interaction. To steer away from this her base power is being lowered at a number of points, with some tweaks to both her abilities overall improving their power mainly with a huge buff to her level 7 & 11 Bloon Weakness debuffs now benefitting her abilities with CONSIDERABLY more damage than previously (previously +2 regardless of the ability damage)",
                        "items": [
                            {"text": "Lv2 pierce reduced from 6 > 5"},
                            {"text": "Lv3 Leaping Sword DoT damage increased from 1 > 2"},
                            {"text": "Lv3 Leaping Sword DoT duration increased from 5 > 6.5"},
                            {"text": "Lv3 Leaping Sword DoT duration now increased by +0.5 for each level"},
                            {"text": "(Lv20 Leaping Sword DoT duration from this is increased 10 > 15)"},
                            {"text": "Lv3 Leaping Sword pierce increased from 20 > 30"},
                            {"text": "Lv10 Sword Charge damage increased from 20 > 30"},
                            {"text": "Lv12 Leaping Sword Bonus impact bonus damage to MOABs increased from 130 > 160"},
                            {"text": "Lv12 Leaping Sword DoT damage increased from 1 > 3"},
                            {"text": "Lv15 Leaping Sword DoT damage increased from 1 > 4"},
                            {"text": "Lv20 Leaping Sword DoT damage reduced from 16 > 6"},
                            {"text": "Lv12 Leaping Sword damage reduced from 70 > 40"},
                            {"text": "Lv15 Leaping Sword damage increased from 70 > 80"},
                            {"text": "Lv20 Leaping Sword damage reduced from 570 > 400"},
                            {
                                "text": "Bloon Weakness Lv7 & Lv11 much larger bonus to abilities, potentially doubling total damage.",
                                "items": [
                                    {"text": "Lv7+ Leaping Sword impact bonus to Stunned Bloons 2 > leaping sword damage/2 (10)"},
                                    {"text": "Lv7+ Leaping Sword impact bonus to Stunned MOABs 2 > leaping sword damage (20)"},
                                    {"text": "Lv7+ Leaping Sword DoT bonus to Stunned Bloons 2 > leaping sword DoT damage (2)"},
                                    {"text": "Lv7+ Leaping Sword DoT bonus to Stunned MOABs 20 > 10 + leaping sword DoT damage * 5 (20)"},
                                    {"text": "Lv10+ Sword Charge bonus to Stunned Bloons 2 > sword charge damage / 2 (15)"},
                                    {"text": "Lv10+ Sword Charge bonus to Stunned MOABs 2 > sword charge damage (30)"},
                                    {"text": "Lv11+ Same bonuses applied to all cases for Sauda's Lv11 Bloon weakness bonus"}
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Looking Forward",
                "items": [
                    {
                        "text": "While we need to look at our planning overall and learn from the places where we bit off more than we could chew, we’re still planning on incredible updates for next year!"
                    },
                    {
                        "text": "Console: we’ve made great progress on the Xbox and Playstation versions of BTD6, and we will have these released as early next year as possible given the approval process on these platforms; we’ll update on this as we have meaningful news but we can tell you that 4 player couch co-op is truly awesomer!",
                    },
                    { "text": "Update 35: we need these first updates of the year to be smaller so the team can rest and relax over the holidays, but we will have Dark Dungeon and as much extra as we can squeeze in" },
                    { "text": "Update 36: we’ll be pushing to have Beast Handler ready for this update but we’ll continue to hold it until it’s ready; there will be extra awesome here as well but still juggling whether that would be a Paragon or Boss" },
                    { 
                        "text": "Key Goals: we’re still brainstorming and pitching ideas for next year so there will be more than the list below but these are areas where we are excited to build new awesome",
                        "items": [
                            { "text": "Quests: both as events and as a player-paced progression system, we’re already underway with a system to support multiple linked games with short narratives and special rewards" },
                            { "text": "New Heroes, Paragons, and Bosses: with particular focus on new mechanics, challenge variety, and exciting visuals" },
                            { "text": "New Team Events and Features: more ways for Teams to play, compete, and have fun together, focusing on skill rather than grind, as well as new Team tools to help find like-minded players and safely communicate" },
                            { "text": "Creators: improved coordination around releases, creator events, and expanding the creator code program" },
                            { "text": "Map Editor and Player Creators: a fully functional in-game map creation tool with a curation pipeline is a huge goal; we’ll attempt to build this in stages so we can get more frequent community feedback about what should come next" }
                        ]
                    },
                    { 
                        "text": "2023 and Beyond: we’ll start working on these pieces in 2023 but we’re not sure whether they will land in 2023 or after",
                        "items": [
                            { "text": "Mod support: whether via direct support or 3rd party tools, we’ll be developing better ways for modders to have fun with the game while improving the tracking and compartmentalizing of mod-based play to alleviate friction with accounts, main game progress, and fair competitive play" },
                            { "text": "Tower & Bloon Editor: potentially overlapping with mod support, we’ll continue working on ways to play and have fun tweaking existing Monkey Towers and Bloons, and ultimately create a safely curated pipeline for new Tower and Bloon ideas" },
                            { "text": "Player Creator payback: a challenge on the technical, legal, and financial fronts, we still think that it’s important to share back with player creators if they help create valuable content for others. We love the idea that someone might get into game design and development because of the work they started in BTD6 or that others might be able to make a little bit of extra money and make their lives better by playfully working on a game they already enjoy. This is a massive challenge but we like the old wisdom that rising tides should lift all boats, and we know Admiral Brickell agrees." }
                        ]
                    }
                ]
            },
            {
                "text": "And finally, Happy Holidays! We absolutely love this game and working together as a team on it. We are so thankful to our players, our community, the content creators and the added entertainment they create, the player creators who push gameplay even further, and the amazing fan art, ideas, and questions that inspire us to do our best. We have huge plans for where to take Bloons TD 6 and we hope you all will keep playing and have fun helping us get there. Let’s all plan on having a very happy 2023 together as we look for more ways to involve the community in our vision and plans for where we go next, and until then please know that everyone at Ninja Kiwi wishes you the absolute best for a restful and playful holiday season!"
            }
        ]
    },
    "33.3": {
        "release": "2022-11-02",
        "items": [
            {
                "title": "Changes",
                "items": [
                    { "text": "Paragon change discussed in 33.2 now actually removed!"}
                ]
            },
            {
                "title": "Fixes",
                "items": [
                    { "text": "Resolved a crash that could occur when loading into the Contested Territory world and closing the daily reward popup before the world has finished loading" },
                    { "text": "Special Halloween game icon has now been changed back to the Dartling Gunner icon" },
                    { "text": "Resolved a bug that could occur preventing some relics from being selected when too many are owned" },
                    { "text": "Resolved a crash that occurred sometimes when entering the CT menu and attempting to view teams" },
                    { "text": "Resolved an issue where entering the CT team store would sometimes display white squares instead of the first icon on the page" }
                ]
                
            }
        ]
    },
    "33.2": {
        "release": "2022-10-27",
        "items": [
            {
                "title": "Changes",
                "items": [
                    { "text": "Paragon limit was planned to be removed from base gameplay in this update but unfortunately, we have had a bug with this and the limit is still in place. This will be coming in 33.3!" }
                ]
            },
            {
                "title": "Fixes",
                "items": [
                    { "text": "Resolved an issue where Doomship’s ability targeting could misalign from target points" },
                    { "text": "Resolved a crash quickly double pressing Race! button" },
                    { "text": "Resolved a crash when closing the app in the Race Event screen" },
                    { "text": "Resolved a crash that could occur exiting custom input mode for a destroyed tower" },
                    { "text": "Resolved a crash that could occur returning to the main menu" },
                    { "text": "Resolved a crash that could occur with low-quality devices attempting to join boss lobbies as settings are being changed" },
                    { "text": "Resolved a crash that could occur when opening the race event screen without having previously downloaded the player's online data" },
                    { "text": "Resolved an issue where Bloonarious Prime's path switching art asset was not displaying correctly" },
                    { "text": "Resolved an issue that could occur when exiting out of Boss Menu as rewards are being distributed" },
                    { "text": "Resolved a possible infinite load screen issue" },
                    { "text": "Resolved an Arcade version issue with names displayed incorrectly under Content Browser" }
                ]
            }
        ]
    },
    "33.1": {
        "release": "2022-10-20",
        "items": [
            {
                "title": "Changes",
                "items": [
                    { 
                        "text": "Base game paragon count restriction increased to 4 in response to feedback that with a restriction having support for 4 player co-op to each push for a paragon is more fair",
                        "items": [
                            { "text": "We have heard even more clearly from the community that this was a frustrating change, even for players who didn’t push for multiple paragons. We’re certainly not happy that our balance-focused decision has created such concern, and we certainly don’t want nerf-blaster toting giant head monkes showing up at our doors." },
                            { 
                                "text": "Superceding the 33.0 notes, we are planning for 34.0:",
                                "items": [
                                    { "text": "- Continued review of the use of Paragons and discussion with the community and creators around Paragon limits overall" },
                                    { "text": "- Maintain a default of 4 Paragons in Boss Events and CT, but allow this to be edited per event, consistent with the Content Browser feature below" },
                                    { "text": "- Provide the Content Browser feature previously discussed, to allow individual Paragons to be excluded and total Paragon limits to be edited for maximum challenge creation flexibility" },
                                ]
                            },
                        ]
                    },
                    { "text": "Intro animation for CT will no longer play together with the 'Daily Bonus' popup" },
                    { "text": "Added Tile Recap title & pop-up to recap mode in Contested Territory" }
                ]
            },
            {
                "title": "Fixes",
                "items": [
                    { "text": "Resolved an issue with Sentries not placing on Covered Gardens" },
                    { "text": "Resolved visual issues related to disconnecting and rejoining a co-op game on Covered Garden" },
                    { "text": "Resolved visual issues related to modified starting round on Covered Garden challenges" },
                    { "text": "Resolved an issue with xx4 Buccaneers receiving a small income buff from the Navarch Paragon" },
                    { "text": "Resolved an issue with x3x Bomber Ace bombs exploding instantly on Covered Garden with no fall animation" },
                    { "text": "Resolved a crash loading a save using a Goliath Doomship set to wingmonkey" },
                    { "text": "Resolved some cases in which CT Building 3D elements would carry over into other parts of the game or become duplicated visually" },
                    { "text": "Resolved a crash that could occur when adding Geraldo to your Odyssey crew" },
                    { "text": "Resolved a crash that could occur when entering and backing out of the CT menu too quickly" },
                    { "text": "Resolved a crash that could occur on Android devices that did not have Google Play installed" }
                ]                
            }
        ]
    },
    "33.0": {
        "release": "2022-10-11",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Paragon Tower - New Paragon Tower - the Monkey Ace Goliath Doomship!",
                        "items": [
                            {
                                "text": "Endless jokes about big planes aside, we’ve been very excited to build and balance the first air Paragon!"
                            },
                            {
                                "text": "While we resist thinking about Paragons as 5/5/5+ Monkey Towers, the Goliath Doomship did allow for logical blending of features from all 3 paths, plus we included a powerful activated ability that adds further tactical control that plays out usefully across various map shapes"
                            },
                            {
                                "text": "At $800k cash, you will have to make sure your eco game is strong but Doomship’s power is balanced to that lofty setup cost"
                            }
                        ]
                    },
                    {
                        "title": "New Halloween game icon",
                        "items": [
                            {
                                "text": "Your eyes are not failing, nor is your screen - our icon is simply celebrating the ghoulish colors of Halloween!"
                            }
                        ]
                    },
                    {
                        "title": "New Maps",
                        "items": [
                            {
                                "text": "Advanced Map - Midnight Mansion"
                            },
                            {
                                "text": "Intermediate Community designed map - Covered Garden from u/SuperPsou"
                            }
                        ]                    
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Joan of Arc Adora - Dragon Pet"
                            },
                            {
                                "text": "Monkeys: Monkey Ace - Dragonfly Pet"
                            },
                            {
                                "text": "Co-op: Psigh emote"
                            },
                            {
                                "text": "Game & UI: Banana Farmer - Banana Costume, Glue Trap - Honey Bee skin, Profile Banner - Patchwork, Profile Banner- Sun Rays, Profile Banner - Star Burst"
                            },
                            {
                                "text": "Banner winner by DREAD_LEAD (Engineer Foam)"
                            },
                            {
                                "text": "Banner winner by LordTeddington (Grand Master Ninja)"
                            }
                        ]                 
                    },
                    {
                        "title": "New Limited Time Items: DDT Bloon Skin - Spider, Avatar - The Scream , Avatar - Monkey Brains.",              
                    },
                    {
                        "title": "New CT Team Store Items",
                        "items": [
                            {
                                "text": "Building Prop: Fortified Castle"
                            },
                            {
                                "text": "Base Props: Refracting Telescope, Pirate Crew"
                            },
                            {
                                "text": "Water Prop: Mini Pirate Boat"
                            },
                            {
                                "text": "Flying Prop: Moon Rabbit"
                            },
                            {
                                "text": "Team Banners: Pet Frenzy banner, Contested Territory banner"
                            },
                            {
                                "text": "Icons: Kung Fu Kiwi icon, All-Seeing Eyecon"
                            },
                            {
                                "text": "Frames: Cognition frame, Ninja Scroll frame"
                            }
                        ]                                    
                    }
                ]       
            },
            {
                "title": "Game Changes / Additions",
                "items": [
                    {
                        "title": "New Languages - Polish and “Monkelish” are now supported"
                    },
                    {
                        "title": "Team Browser - Added more intuitive UI to the \"Advanced Search\" panel"
                    },
                    {
                        "title": "Paragon tower placement restrictions",
                        "items": [
                            {
                                "text": "We’ve set a maximum of 3 per game in 33.0, as we now have a baseline of general purpose DPS paragons and want to move into more synergies and interesting mechanical interactions between them, which become more interesting when choices need to be made"
                            },
                            {
                                "text": "We have heard the clear feedback from the community about this general restriction based on the preview notes and now plan to do the following in future major updates, or minor ones if feasible:",
                                "items": [
                                    {
                                        "text": "Increase the limit to 4, based on feedback about 4 player co-op in particular"
                                    },
                                    {
                                        "text": "Include a Content Browser editor function that allows players to set higher limits or unrestricted in player-created Content Browser games"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Contested Territory",
                        "items": [
                            {
                                "text": "The number of steps required to use Relics felt like too many, so we’ve removed Relic Voting from the team store. Now, when viewing any tile players will be able to pop up a full list of their available relics to personally select from."
                            },
                            {
                                "text": "To improve active team coordination we have allowed Vice-Mayors to also set focus markers on the CT map."
                            },
                            {
                                "text": "The total number of focus markers each team can set in CT has been increased from 1 to 4, to allow for diverse preference and strategies."
                            },
                            {
                                "text": "Contested Territory matchmaking improved for better groupings based on activity & overall rank."
                            },
                            {
                                "text": "Added a Daily Reward to welcome back players entering the Contested Territory event."
                            },
                            {
                                "text": "The Main Menu CT Icon now shows a pip displaying available tickets."
                            },
                            {
                                "text": "Tidied the CT Info panel up for much clearer readability."
                            },
                            {
                                "text": "Added a spooky Seasonal Theme to CT screens, in preparation for Halloween!"
                            },
                            {
                                "text": "Added Discord & Steam Rich Presence for Contested Territory."
                            },
                            {
                                "text": "Team Banners can now be set on personal profiles, as long as your team owns that banner."
                            },
                            {
                                "text": "Over 32.4 to 33.0 we made general constant improvements to the balance of Banner/Relic tile distribution over the CT map."
                            }
                        ]
                        
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Team Island should correctly reflect your Team Color in CT"
                    },
                    {
                        "text": "Resolved an issue where loading a save and restarting would not allow you to earn a Black Border from that run"
                    },
                    {
                        "text": "Resolved a number of background errors in CT"
                    },
                    {
                        "text": "Changed team permissions so that Mayors can only transfer leadership to members who have already been promoted to Vice-Mayors"
                    },
                    {
                        "text": "Changing search filters in Team Browser will now trigger a search"
                    },
                    {
                        "text": "Resolved an issue where disabling friend requests would not save"
                    },
                    {
                        "text": "Resolved a number of map-specific placement issues"
                    },
                    {
                        "text": "Loading a profile from the cloud will no longer keep boss event saves"
                    },
                    {
                        "text": "Resolved a crash on using boss checkpoints"
                    },
                    {
                        "text": "Resolved an issue preventing some challenge codes from being searched"
                    },
                    {
                        "text": "Resolved an issue where powers could be disabled in unranked co-op Bosses"
                    },
                    {
                        "text": "Paragon towers should be correctly sold when their supporting arctic wind platform is removed"
                    },
                    {
                        "text": "Resolved an issue with the CT event main menu banner appearing prior to level 30"
                    },
                    {
                        "text": "Improvements made to camera zoom in CT"
                    },
                    {
                        "text": "Large texture cleanup for all Paragon towers"
                    },
                    {
                        "text": "Resolved an issue with logging out of accounts on some devices"
                    },
                    {
                        "text": "General cleanup and optimizations of the Team Store"
                    },
                    {
                        "text": "A number of localization issues resolved"
                    },
                    {
                        "text": "Resolved an issue where players could add duplicate entries to their Friends List"
                    },
                    {
                        "text": "Resolved an issue with friends showing 'default' avatar for their high scores on maps"
                    },
                    {
                        "text": "Resolved a number of issues around joining and leaving Teams"
                    },
                    {
                        "text": "Resolved a number of cases in which the background for some menus would show entirely black"
                    },
                    {
                        "text": "Optimizations made to a number of large textures"
                    },
                    {
                        "text": "Team/Friends - Popup dialogs can no longer appear off-screen"
                    },
                    {
                        "text": "Team Trophy balance now correctly updates visually upon purchase"
                    },
                    {
                        "text": "Resolved a minor graphical glitch on Frozen Over map when Cave Monkey is released"
                    },
                    {
                        "text": "Resolved an issue with heroes gaining more than one level at a time counting as tiers purchased with the least tiers ruleset"
                    },
                    {
                        "text": "Resolved an issue with missing or wrong badges displaying on CT leaderboards"
                    },
                    {
                        "text": "Resolved an issue with Team Search not allowing Space entries"
                    },
                    {
                        "text": "Resolved low-quality splash screen issues"
                    },
                    {
                        "text": "Heroes are now purchasable from the upgrades menu in-game"
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "5-X-X Embrittlement now slows MOABs the correct amount with permafrost"
                            },
                            {
                                "text": "2-5-0 Absolute Zero now slows MOABs the correct amount with permafrost"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-X-4 Relentless Glue no longer targets Bosses/BADs"
                            },
                            {
                                "text": "1-0-4 Glue Gunner should no longer sometimes apply green glue assets"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "3-X-X Submerge subs should now submerge correctly on Quarry"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Buccaneer paragon should no longer mis-align its platforms if upgraded from the trade empire"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "0-2-5 Legend of the Night now correctly gains crosspath pierce"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "items": [
                            {
                                "text": "Highlighting on Snowman Pat Fusty no longer disappears at Lv3"
                            },
                            {
                                "text": "Pat’s legs should no longer sometimes not sink into water when taking a dip"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "items": [
                            {
                                "text": "No longer clips into ship badly at Lv12"
                            }
                        ]
                    },
                    {
                        "tower": "Psi",
                        "items": [
                            {
                                "text": "Psi is now able to target Leads when the Alchemist Touch relic knowledge is equipped"
                            }
                        ]
                    },
                    {
                        "tower": "Geraldo",
                        "items": [
                            {
                                "text": "Description spelling errors resolved"
                            },
                            {
                                "text": "When fitting multiple sentry items on top of a flagship platform, these will now correctly relocate when creating the Paragon"
                            },
                            {
                                "text": "Rejuvenation Potion will no longer reset Paragon cooldowns"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Added Linking Codes to Epic clients"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "title": "Freeplay",
                        "description": "To encourage challenge diversity using the new extended list of preset rounds in freeplay, we have decided to make a tweak to freeplay income tax to drop it off slightly slower and allow a little more cash to be earned naturally in this range.",
                        "items": [
                            {
                                "text": "Round 101+ natural income generation increased from 2% -> 5%"
                            },
                            {
                                "text": "Round 121+ natural income generation remains at 2%"
                            }
                        ]
                    },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "As Sharpshooter’s crit occurrence didn’t feel frequent enough the overall attack rate has been increased also just to lead better into the T5’s already high rate of fire. Along with this all Crossbow criticals have been standardized, overall with T5 criticals occurring more frequently in exchange for a slight reduction in base pierce to improve Sharp Shot crosspath value. Apex Plasma Master excels generally for the cheapest paragon & how easy it is to start scaling early degrees so is seeing a rate decrease.",
                        "items": [
                            {
                                "text": "X-X-4 Sharpshooter attack cooldown reduced from 0.75 > 0.6"
                            },
                            {
                                "text": "X-X-5 Crossbow Master attack cooldown unchanged"
                            },
                            {
                                "text": "X-X-4 Sharpshooter crit rate changed from 8-12 shots to every 10th"
                            },
                            {
                                "text": "X-X-5 Crossbow Master crit rate changed from 4-8 shots to every 5th"
                            },
                            {
                                "text": "X-X-5 Crossbow Master pierce reduced from 10 > 8"
                            },
                            {
                                "text": "Apex Plasma Master attack cooldown increased from 0.3 > 0.35"
                            }
                        ]
                        
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "The Tack Zone’s all-purpose high single target & grouped DPS plus cleanup utility scales too well with so many options, as this is primarily intended to be the single-target damage path. To reinforce this we have traded off damage for a bonus to MOABs in order to nerf its unbuffed cleanup potential, so watch out for cluster and Super Ceramics now. Ring of Fire should pick up in that area for cleanup use & general destruction but it has more pierce than it really needs in most scenarios with other important stats sitting lower to compensate for high pierce, so we have shifted this high pierce more into requiring the pierce crosspath in exchange for more base power and an overall buff. Inferno Ring’s meteor will now also follow target priority since that was a fun idea that was worth adding.",
                        "items": [
                            {
                                "text": "X-X-5 Tack Zone damage reduced from 2 > 1"
                            },
                            {
                                "text": "X-X-5 Tack Zone gains bonus damage to MOABs +1"
                            },
                            {
                                "text": "4-X-X Ring of Fire attack cooldown reduced 0.4725 > 0.315 (buff of +25 > 50%)"
                            },
                            {
                                "text": "4-X-X Ring of Fire pierce reduced from 60 > 40"
                            },
                            {
                                "text": "4-X-X Ring of Fire damage increased from 3 > 5"
                            },
                            {
                                "text": "5-X-X Inferno Ring damage increased from 4 > 8"
                            },
                            {
                                "text": "5-X-X Inferno Ring MOAB bonus reduced from 6 > 4"
                            },
                            {
                                "text": "5-X-X Inferno Ring attack speed unchanged"
                            },
                            {
                                "text": "5-X-X Inferno Ring Meteor now follows Target Priority"
                            }
                        ]
                        
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Arctic Wind hardly gets used for its actual basic intended purpose, which would be cool to see used for more than just causing ice platform bug reports.",
                        "items": [
                            {
                                "text": "Arctic Wind aura slow amount increased from 40 > 60%"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "We want to achieve an effect with Bloon Solver’s acid burning through the layers quickly but not instantly, though we haven’t so far achieved a good balance of this along with eliminating Super Ceramics in a timely manner, causing it to be disappointing or impractical on shorter maps. To solve this while retaining the vision we have boosted the ceramic bonus up significantly along with preventing this bonus from overflowing into the children layers.",
                        "items": [
                            {
                                "text": "5-X-X Bloon Solver DoT's Ceramic bonus damage increased from 2 -> 8"
                            },
                            {
                                "text": "5-X-X Bloon Solver DoT’s increased Ceramic damage will not skip through extra children layers upon breaking the ceramic layer"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "After the lower tier nerfs Elite Sniper still remains just a bit too good even without considering its cash production.",
                        "items": [
                            {
                                "text": "X-5-X Elite Sniper price increased from $13,000 > $14,500"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Monkey Pirates is great for the first couple MOABs but with the long ability cooldown it very quickly falls off after that point, we have pushed it and Pirate Lord’s base stats up to feel more competitive especially with possible Brickell synergy. Trade Empire farming power even with the water requirement feels like it takes off too easily, so the bonus cash it provides will now require T4 Favored Trades for the full benefit.",
                        "items": [
                            { "text": "X-4-X Monkey Pirates Grapes damage increased 1 > 2" },
                            { "text": "X-4-X Monkey Pirates Grapes ceramic bonus increased 1 > 2" },
                            { "text": "X-4-X Monkey Pirates Cannonball explosion damage increased 2 > 3" },
                            { "text": "X-4-X Monkey Pirates Cannonball explosion MOAB bonus increased 0 > 6" },
                            { "text": "X-4-X Monkey Pirates price increased $4,500 > $4,900" },
                            { "text": "X-5-X Pirate Lord Grapes damage increased 5 > 10" },
                            { "text": "X-5-X Pirate Lord Grapes ceramic bonus increased 5 > 10" },
                            { "text": "X-5-X Pirate Lord Grapes burn damage increased 1 -> 9" },
                            { "text": "X-5-X Pirate Lord Cannonball explosion damage increased 2 -> 5" },
                            { "text": "X-5-X Pirate Lord Cannonball explosion MOAB bonus increased 0 -> 10" },
                            { "text": "X-5-X Pirate Lord Cannonball frags damage increased 1 -> 10" },
                            { "text": "X-5-X Pirate Lord Cannonball frags MOAB bonus increased 0 -> 5" },
                            { "text": "X-X-5 Trade Empire cash per round per merchant when applied to X-X-3 Merchantmen reduced $20 -> $15" },
                            { "text": "X-X-5 Trade Empire cash per round per merchant when applied to X-X-4 Favored Trades remains at $20" }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "To help you work towards the new Ace Paragon we have reduced Spectre’s lategame ceramic weakness with improved targeting for the bomb projectiles & a large increase to their bonus Ceramic damage to help out later on, to change focus on these projectiles we have also shifted damage around for the darts to deal single target with the bombs providing ceramic AoE cleanup. Flying Fortress’s value drops off by the lategame when you can realistically afford it, so following on with this dart single target focus change at T4 we have added a large MOAB damage bonus to Flying Fortress darts.",
                        "items": [
                            { "text": "X-X-4 Spectre darts & bombs now both have a weaker homing effect" },
                            { "text": "X-X-4 Spectre dart damage increased from 2 > 3" },
                            { "text": "X-X-4 Spectre bomb damage reduced from 3 > 2" },
                            { "text": "X-X-4 Spectre bomb ceramic bonus increased from 2 > 4" },
                            { "text": "X-X-5 Flying Fortress darts now deal bonus damage to MOABs +10" }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Heli’s Razor Rotors don’t scale with higher tiers so improvements have been made specifically to that attack for Dartship & Apache Prime. Support Chinook use is too niche outside of farming for the high cost, so the upgrade cost along with that effective cash gain amount from ability usage has been lowered to retain the same farming while improving niche use. Downdraft has more general use throughout the game and scales better than the more expensive MOAB Shove upgrade though they both see use, so the price of these upgrades has been swapped around. Faster Darts xx1 upgrade will now increase the attack distance of Heli Dart attacks in order to assist with cluttering issues where large numbers of Helis will push each other away from nearby targets.",
                        "items": [
                            { "text": "4-X-X Apache Dartship rotors damage increased 2 > 4" },
                            { "text": "4-X-X Apache Dartship rotors pierce increased 10 -> 20" },
                            { "text": "5-X-X Apache Prime rotors damage increased 2 > 8" },
                            { "text": "5-X-X Apache Prime rotors pierce increased 10 -> 40" },
                            { "text": "X-4-X Support Chinook price reduced $12,000 -> $10,500" },
                            { "text": "X-4-X Support Chinook crate cash reduced $1,800 -> $1,650" },
                            { "text": "X-3-X Downdraft price increased $3,000 -> $3,500" },
                            { "text": "X-X-3 MOAB Shove price reduced $3,500 -> $3,000" },
                            { "text": "X-X-1 Faster Darts also increases the attack distance of dart attacks by +30%" }
                        ]
                        
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "It has been hard for The Bloon Solver & The Biggest One to exist so close in the same price range when they fill the same role but with The Biggest One being simply better and more versatile, so we have ramped The Biggest One to fill a better role but for a higher cost. Artillery Battery’s special stun bonus is completely ineffective against targets which are impossible to stun, so it is receiving a small damage bonus to these targets to compensate. Other similarly priced decamo options are able to decamo DDTs, so Signal Flare feels like a far lesser choice here having this basic decamo utility locked behind Monkey Knowledge, so that’s being freed up.",
                        "items": [
                            { "text": "4-X-X The Big One shockwave gains bonus to ceramic +1" },
                            { "text": "5-X-X The Biggest One price increased from $28,000 -> $36,000" },
                            { 
                                "text": "5-X-X The Biggest One can now stun MOAB Class Bloons at a reduced rate",
                                "items": [
                                    { "text": "MOAB 0.3s, BFB/DDT 0.2s, ZOMG 0.1s" }
                                ]
                            },
                            { "text": "X-4-X Artillery Battery deals bonus damage to BADs & Bosses targets > 4" },
                            { "text": "X-5-X Pop & Awe deals bonus damage to BADs & Bosses targets > 10" },
                            { "text": "X-5-X Pop & Awe grants all other X-4-X mortars bonus damage to BADs & Bosses > 6" },
                            { "text": "X-X-3 Signal Flare can now decamo DDTs" },
                            { "text": "Paint Stripper MK now instead allows X-X-4 Shattering Shells to remove Fortification from DDT's" },
                            { "text": "X-X-4 Shattering Shells DoT damage per tic increased 1 > 5" },
                            { "text": "X-X-5 Blooncineration DoT damage per tic remains at 5" }
                        ]
                        
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Rocket Storm being cheaper than its T3 when the T3 is more of a decent stepping stone into the good T4 didn’t quite sit right, so these prices have just been swapped. Buckshot pierce has been increased to help make its attacks cut through more for a chunkier hit. Focused Firing’s distance bonus on 203 due to how it is setup with projectile speed dropoff was a bit less than this written ‘25%’ realistically closer to 18.75%, so this number has been increased enough to give it roughly a true 30% increase in distance.",
                        "items": [
                            { "text": "X-3-X Hydra Rockets price reduced from $5,250 > $5,100" },
                            { "text": "X-4-X Rocket Storm price increased from $5,100 > $5,250" },
                            { "text": "X-X-3 Buckshot dartling pierce increased 4 -> 6" },
                            { "text": "X-X-5 Bloon Exclusion Zone pierce remains at 6" },
                            { "text": "2-0-3 Focused Firing distance bonus 25% > 40%" }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Wall of Fire’s exceptional T2 power needs to be moved around for improved crosspathing, along with a slight nerf to Phoenix as it is currently performing too well, and both of these upgrades are shifting some of their power into Dragon’s Breath so it can stand out as more than just a buff to WoF & a stepping stone to Phoenix. Shimmer is prone to missing a lot of camo Bloons due to the low attack rate, we do want it to be slower than other decamos to account for the larger radius and better T5 so we are making the radius benefit more noticable and lowering price",
                        "items": [
                            { "text": "0-2-0 Wall of Fire pierce per tic reduced from 15 -> 10" },
                            { "text": "0-2-1 Wall of Fire pierce per tic reduced from 19 -> 15" },
                            { "text": "0-2-0 Wall of Fire damage Tic rate reduced 0.1 -> 0.15" },
                            { "text": "0-2-0 Wall of Fire wall spawn rate reduced 5.5 -> 6.5" },
                            { "text": "1-2-0 Wall of Fire duration increased 4.5 -> 5.5" },
                            { "text": "1-2-0 Wall of Fire no longer auto-targets but gains a target marker (like X-3-X Engineer)" },
                            { "text": "0-3-0 Dragon's Breath base damage increased 1 > 2" },
                            { "text": "0-3-0 Dragon's Breath WoF damage Tic rate remains 0.1" },
                            { "text": "0-3-0 Dragon's Breath WoF pierce per tic increased 15 -> 20" },
                            { "text": "X-4-X Summon Phoenix price increased $4,000 -> $4,500" },
                            { "text": "X-4-X Summon Phoenix pierce reduced 10 > 8" },
                            { "text": "X-X-3 Shimmer radius increased 70 > 80" },
                            { "text": "X-X-3 Shimmer price reduced $1,700 -> $1,500" }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "Ultravision is a lackluster crosspath with so many other ways to get camo detection cheaper &/or for more towers. The Anti-Bloon is expensive but as a quite underused tower feels it doesn’t live up to the super monkey name for that cost, for now the ability is seeing a cooldown decrease. We feel Legend of the Night’s base tower is more usable now after recent buffs, so without a total need to lean entirely on the passive ability for use we are increasing this cooldown to prevent some issues.",
                        "items": [
                            { "text": "X-5-X The Anti Bloon ability cooldown reduced 45 -> 30s" },
                            { "text": "X-X-2 Ultravision grants bonus damage to camo bloons +1" },
                            { "text": "X-X-5 Legend of the Night cooldown increased 120 > 180s" }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "Sticky Bomb feels like it is in a very strong point right now in a lot of situations, though flash bomb isn’t good enough without a great deal of support leading into it, this shift should open up for challenge viability especially in Alternate Bloon Rounds games.",
                        "items": [
                            { "text": "X-X-3 Flash Bomb price reduced $2,750 > $2,250" },
                            { "text": "X-X-4 Sticky Bomb price increased $4,500 > $5,000" }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Transforming Tonic has always had a large struggle with pierce, rather than directly throwing onto the base pierce we have added crosspathing pierce & rate benefits for transformation enjoyers to now choose between. Acidic Mixture Dip stacking from multiple alchemists / stalling tactics too effectively lowered use of other lead counter options in a way we didn’t like, so the maximum stacks here without Permabrew has been reduced considerably.",
                        "items": [
                            { "text": "1-4-0 Transforming Tonic monster pierce increased 6 -> 9" },
                            { "text": "0-4-1 Transforming Tonic attack speed increased 0.03 -> 0.024s" },
                            { "text": "2-X-X Acidic Mixture Dip max number of stacks reduced 200 -> 40" }
                        ]
                        
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "Top path Heart of Thunder doesn’t scale well with tiers for an upgrade with such niche use & generally feels lacking, so it is seeing general power improvements across the board to upgrades that incorporate this attack. Druid of the Jungle’s vines feel too strong already for this, but for quality of life the T4 Jungle’s Bounty Druid will now gain targeting options for the global vine attack, which we hope will make all players as well as Druid fans happy.",
                        "items": [
                            { "text": "2-X-X Heart of Thunder damage increased from 1 > 2" },
                            { "text": "4-X-X Ball Lightning (HoT) damage increased from 1 > 3" },
                            { "text": "4-X-X Ball Lightning (Ball) damage increased from 2 > 3" },
                            { "text": "5-X-X Superstorm (HoT) damage increased from 3 > 10" },
                            { "text": "5-X-X Superstorm (Ball) damage increased from 5 > 10" },
                            { "text": "2-0-5 Avatar of Wrath applies its full RBE damage bonus scaling to Heart of Thunder" },
                            { "text": "X-4-X Jungle's Bounty vine can now follow tower Target Priority" }
                        ]
                        
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Spike Factory 4xx feels it needs a small boost in order to really start feeling worth upgrading to rather than getting multiple T3s in the lategame due to the improved Spiked Mines pierce not being as needed for Super Ceramics.",
                        "items": [
                            { "text": "4-X-X Spiked Mines spikes bonus to fortified increased 1 > 3" },
                            { "text": "4-X-X Spiked Mines explosions bonus to fortified increased 1 > 3" }
                        ]
                        
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "The MOAB offense of top path lacks for a mainly dps tower that is quite complex to use, T3 Sprockets already feels underwhelming so is seeing a buff here carrying up to T4, and the 320 crosspath will now be able to double dip on the Fortified & MOAB damage bonuses that it gains. Cleansing Foam is only seeing a slight tweak to help it be more viable if you want to attempt it as 'main camo detection’, and this mainly fixes some issues in ABR games allowing it to catch quick initial camo spawns.",
                        "items": [
                            { "text": "3-X-X Sprockets buff amount to sentry rate & deployment increased 40 > 50%" },
                            { "text": "1-2-0 Sentries can now benefit from both the MOAB and fort damage bonuses on one target if that target is a fortified MOAB" },
                            { "text": "X-3-X Cleansing Foam attack gains 1s of 4x rate on round start" }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "description": "As she’s a little average all around these days with other heroes overtaking in the past years, Gwendolin is seeing some improved quality of life, synergization, and extra juice to the initial hit of Firestorm since currently the ability is, well, not heroic enough and the first impact does very little compared to the DoT.",
                        "items": [
                            { "text": "Lv3 Cocktail of Fire gains a target selection point" },
                            { "text": "Lv5 Pyrotechnics Expert: All Ring of Fire, Signal Flare & Dragon's Breath gain 10% rate & radius (This follows normal buff rules, applying to higher tiers, but not subtowers)" },
                            { "text": "Lv18 Pyrotechnics Master: Ring of Fire, Signal Flare & Dragon's Breath buff increased from 10% to 20%" },
                            { "text": "Lv10 Firestorm initial damage increased 2 -> 5" },
                            { "text": "Lv10 Firestorm initial MOAB damage increased 2 -> 20" },
                            { "text": "Lv20 Firestorm initial damage increased 5 -> 10" },
                            { "text": "Lv20 Firestorm initial MOAB damage increased 5 -> 50" }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "description": "Ezili’s niche use is in an extremely strong spot right now so we shouldn’t really buff her, but anyway Heartstopper & Sacrificial Totem both feel too limited in total possible synergies, these are having quality of life improved and Heartstopper will additionally allow all towers to damage Purple Bloons to open up more combination options and give more reason to use it.",
                        "items": [
                            { "text": "Lv3 Heartstopper can now activate if there are Purple Bloons spawned regardless of if they are regrow or not" },
                            { "text": "Lv3 Heartstopper now also removes Purple Bloon immunity for duration" },
                            { "text": "Lv3 Heartstopper duration increased 6 -> 10s" },
                            { "text": "Lv3 Heartstopper cooldown reduced 60 -> 45s" },
                            { "text": "Lv7 Sacrificial Totem now gains a targeting option for spawn" },
                            { "text": "Lv7 Sacrificial Totem grants an additional pierce to Wizards 1 > 2" },
                            { "text": "Lv7 Sacrificial Totem grants an additional attack speed to Wizards 15 > 20" },
                            { "text": "Lv12 Heartstopper cooldown reduced 45 -> 40" }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "description": "Adora feels like the perfect target to fill a current hole heroes have, we so far have no real dedicated ‘Fortification Buster’ among us in the hero lineup so giving this to Adora will hopefully allow for new unique use cases that the others don’t fill.",
                        "items": [
                            { "text": "Lv3 Long arm of the Light cooldown reduced from 45 -> 35s" },
                            { "text": "Lv9 Main attack gains increased damage to fortified Bloons +2" },
                            { "text": "Lv13 Main attack fortified damage bonus increased to +3" },
                            { "text": "Lv19 Main attack fortified damage bonus increased to +4" },
                            { "text": "Lv10 Ball of Light gains increased damage to fortified Bloons +3" },
                            { "text": "Lv15 Ball of Light fortified damage bonus increased to +5" },
                            { "text": "Lv20 Ball of Light fortified damage bonus increased to +20" }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "description": "We had people request a specific funny use case of Brickell on Ravine, which we respect and approve, and overall we wanted to scale her main revolver attack better into late game, so she is seeing slight and slightly experimental improvements.",
                        "items": [
                            { "text": "Lv10 Mega Mine explosion no longer blocked by map line of sight" },
                            { "text": "Lv12 Main handgun damage increased 7 -> 8" },
                            { "text": "Lv15 Main handgun damage increased 9 -> 12" },
                            { "text": "Lv17 Main handgun damage increased 11 -> 18" }
                        ]
                    },
                    {
                        "title": "Contested Territory - Relic Knowledge",
                        "description": "Most balance time this update was dedicated to actual towers, but a few Relic Knowledge points in CT stood out to us as far too strong or weak & are seeing the numbers update below. In future updates we will be taking a closer look at top & bottom performing relic points, so if you want to have your voice heard on that matter the next month will be the time.",
                        "items": [
                            { "text": "Camo Trap: Number provided reduced from 2 > 1" },
                            { "text": "Flint Tips: DoT tic rate reduced 2 > 2.5s (4 > 5s total)" },
                            { "text": "Camo Flogged: Bonus damage to Camo increased from 1 > 3" },
                            { "text": "Hero Boost: Increased XP value increased 10 > 15%" },
                            { "text": "Going the Distance: Range bonus increased from 10 > 20%" },
                            { "text": "Bigger Bloon Sabotage: It goes without saying the Bigger Bloon Sabotage relic was not intended to apply to Boss Bloons and this has been resolved. This was a bug resolved in 32.2 but deserves mentioning here with the rest of the changes" }
                        ]
                    }
                ]
            },
            {
                "title": "Looking Forward",
                "items": [
                    {
                        "text": "We said a lot in 32.0 notes so not as much new-new news here but we restate our commitment to keeping players updated and looking for more ways to get the community involved in future development directions, so your feedback is encouraged, respected, and appreciated."
                    },
                    {
                        "title": "34.0",
                        "items": [
                            { "text": "Heads down on Beast Handler - from the look to the variety of each path, we are putting great effort into making this all-new BTD tower something special. While we’re excited to preview, we have to set realistic expectations that the work involved may not leave much time before the update for sneak peeks, but we’ll do what we can!" },
                            { "text": "More Maps - still aiming for 2 new maps to make sure there is plenty of new badges to grab over the holidays" }
                        ]
                    },
                    {
                        "title": "Creators",
                        "items": [
                            {
                                "text": "Huge thanks to these creators for supporting the early partnership with Nexus.gg and figuring out the ins and outs of the system:",
                                "items": [
                                    { "text": "Tewtiy: https://www.youtube.com/channel/UCh_qU1GUf4FcNtV4-fJm3MA" },
                                    { "text": "Ethan Reid: https://www.youtube.com/channel/UCbdbgaxLYyqYiSyGT3uDlFg" },
                                    { "text": "TrippyPepper: https://www.youtube.com/channel/UCBczY8q9siLYhV_kP92JpmA" },
                                    { "text": "SJB: https://www.youtube.com/channel/UCzIVHVDqZmvqFiTud7cILnw" },
                                    { "text": "ISAB: https://www.youtube.com/channel/UC7WQH4kpgxXJYHp8r9IAO-Q & https://www.twitch.tv/btdisab" },
                                    { "text": "Boltrix: https://www.youtube.com/channel/UClGJXPEYFjjhsvPN0WgBD-A" },
                                    { "text": "Aidanz: https://www.youtube.com/channel/UCxpyUFmh0jT5TZd7Y5ZgpoQ" },
                                    { "text": "Dabloon: https://www.youtube.com/channel/UC-dsyRY8AXvoLqKPiSeRf4g" },
                                    { "text": "Alukian: https://www.youtube.com/channel/UCkKjISVs-Th9kGc5mLFmk8w" },
                                    { "text": "Hbomb: https://www.youtube.com/channel/UCMV2-8sFDZmyqY48ysw5iEQ & https://www.twitch.tv/smackdaddyjosh" },
                                    { "text": "Sensation: https://www.youtube.com/channel/UCDxfRwPvQX4p-JGFfr2z_Cg" },
                                    { "text": "JeromeASF: https://www.youtube.com/channel/UCrYnLkVfvVf0Qy0YOUQdk2A" },
                                    { "text": "Tewbre: https://www.youtube.com/channel/UCCCOyUvlbt1YagerVgbwopQ" }
                                ]
                            },
                            {
                                "text": "We’re still working with Nexus on improvements and tools and hope to include more creators by the end of this year. Stay tuned!"
                            }
                        ]
                    },
                    {
                        "title": "Console",
                        "items": [
                            { "text": "We are still pushing hard to get BTD6 submitted for PlayStation and Xbox this year. 4 player couch co-op is so much fun and we can’t wait to share it, but we cannot speak to a launch date, or even whether it’s late this year or early next. As soon as we can update you on release targets, we will!" }
                        ]
                    }
                ]
            }
        ]
    },
    "32.3": {
        "release": "2022-09-04",
        "items": [
            {
                "title": "Changes",
                "items": [
                    {
                        "text": "Resolved an issue with the El Dorado relic not applying correctly"
                    },
                    {
                        "text": "Resolved an issue in CT where players could be sent back 2 checkpoints instead of 1 if they tried to return home after continuing"
                    },
                    {
                        "text": "Resolved a game crash that could occur when attempting to join an existing team via Quick Join"
                    },
                    {
                        "text": "Resolved an issue with 5-0-2 Bomb Shooter not correctly recieving bonus frag ceramic damage"
                    },
                    {
                        "text": "Resolved an issue where 2-0-5 boomerang crosspath reduced the pierce of the X-X-5 explosion"
                    },
                    {
                        "text": "Resolved an issue with CT Banner Tile income showing incorrectly"
                    },
                    {
                        "text": "Added individual Player Ecos to CT Team Roster"
                    },
                    {
                        "text": "Resolved an issue with friends button sometimes being clickable when they should not be"
                    },
                    {
                        "text": "Teams that you are not allowed to join currently will now correctly have their join buttons grayed out"
                    },
                    {
                        "text": "Searching for a team code should now show the team if it exists regardless of filters"
                    },
                    {
                        "text": "Resolved some minor errors with Team Messages"
                    },
                    {
                        "text": "Resolved an iOS crash with too much information when viewing global CT leaderboard"
                    },
                    {
                        "text": "Resolved some CT map lockup button issues"
                    },
                    {
                        "text": "Resolved Nexus Creator codes being case-sensitive when they shouldn't be"
                    },
                    {
                        "text": "Added Teams screen \"invite member\" option to insert player friend codes for invites"
                    },
                    {
                        "text": "Resolved some locs issues with Team Tickets"
                    },
                    {
                        "text": "Resolved some minor UI issues with messenger popups related to Teams menus"
                    },
                    {
                        "text": "Added more messaging to why some options around teams are not available when you are not in a team"
                    },
                    {
                        "text": "Resolved rare cases with incorrect team member count displays"
                    },
                    {
                        "text": "Resolved a Minor display inconsistency in CT"
                    },
                    {
                        "text": "Resolved an issue where Team buttons always display \"Teams\" rather than \"My Team\" at first when the game is launched"
                    },
                    {
                        "text": "Team Browser should no longer list the teams of friends that have not accepted your friend request in the Friend’s Team’s search"
                    },
                    {
                        "text": "Added ‘Hide Team Code’ option to the Teams menu"
                    },
                    {
                        "text": "Navigating into a teams UI and out should now resume from correct page/tab"
                    },
                    {
                        "text": "Resolved some niche case crashes & softlocks"
                    }
                ]
            }
        ]
    },
    "32.2": {
        "release": "2022-08-22",
        "items": [
            {
                "title": "Upcoming CT Event Settings Changes for 2nd event",
                "items": [
                    {
                        "text": "In response to internal review and community feedback on the first Contested Territories (CT) event, we have made several changes that will be in effect for the next CT event. We will also share a roadmap soon for other CT changes planned for future updates.",
                        "items": [
                            {
                                "text": "CT Event #2 will run for 7 days - everyone agreed the first one was too long, so we will now try 7 days on, 7 days off and be open to future duration tweaks"
                            },
                            {
                                "text": "Degradation back to neutral timer increased from 24 to 28 hours - coming back the next day at a similar time and seeing your owned tiles neutral if not captured was disheartening. We increased to 28 hours so there is a window of overlap that will not throw off point balance too much. We want to make small, iterative changes here as there are many balance consequences."
                            },
                            {
                                "text": "Degradation curve changed to maintain the challenge of beating the new best score for longer - tiles will now not degrade at all for 4 hours, then degrade more slowly from there and not reach such high values at the end of the curve"
                            },
                            {
                                "text": "Team creation cost will be increased significantly - we elected to have generous Team creation with the low 200MM cost and that helped generate a lot of Teams, but many players seemed to create Teams and join an instance only to not participate. By increasing this cost to 2000MM we are making Team creation a more considered decision, which we hope will direct more casually interested players to join already created public Teams"
                            },
                            {
                                "text": "Added 3 buckets of matchmaking to pool teams together with others of similar activity - we’re not giving much detail here intentionally, as it is complex and iterative but the intent is to connect similarly motivated Teams together"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Additions",
                "items": [
                    {
                        "text": "Added CT event prop to main menu to indicate live events"
                    },
                    {
                        "text": "Added more detail to tile capture messages in the team feed"
                    },
                    {
                        "text": "Added visual feedback for Master Builder’s self boosting effect"
                    },
                    {
                        "text": "Added popup for unlocking Team Flair items"
                    },
                    {
                        "text": "Added hover info to ‘kick pending’ in teams"
                    },
                    {
                        "text": "Added a “score eco” stat to local Teams score UI, which displays the current expected score increase when scores are added to the leaderboards - intended to clarify the relative rate of earning for each Team and inform tactical decisions about which tiles and ownerships to go after"
                    },
                    {
                        "text": "Added player Online status settings for friends & teams, with Invisibility settings for privacy"
                    },
                    {
                        "text": "Added player restrictions preventing team hopping during active CT events"
                    },
                    {
                        "text": "Added pages to Friend’s Teams tab for better organization"
                    },
                    {
                        "text": "CT Tile Victory will no longer display rewards that you didn’t earn (CT Points/Relics) if you beat the map but did not beat the capture score"
                    },
                    {
                        "text": "Technical integration of Nexus.gg to enable curator codes - we will share more information about this separately when sign-up pages are ready"
                    }
                ]
            },
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "Purchasing Hero Booster from the upgrades page now refreshes the UI correctly to display the new level"
                    },
                    {
                        "text": "0-4-2 Dartling Gunner no longer loses lead popping on the ability"
                    },
                    {
                        "text": "Resolved an issue where the save state of ultraboost stacks would be forgotten after creating Master Builder"
                    },
                    {
                        "text": "Resolved an issue where camo trap could miss DDTs if another Bloon passed over it at the same time"
                    },
                    {
                        "text": "Resolved an issue where selling an IMF Loan at the same time and taking a loan would not immediately try to pay back the loan with that tower’s sellback"
                    },
                    {
                        "text": "Resolved Bloon Traps re-placing within the map terrain after reloading a save"
                    },
                    {
                        "text": "Resolved X-X-2 Spike Factory buff applying to other towers & allowing extra buffs to be applied"
                    },
                    {
                        "text": "Some Master Builder Sentries will no longer see but fail to hit Camos"
                    },
                    {
                        "text": "Resolved a crash that could occur with xx4 Necromancer"
                    },
                    {
                        "text": "Royal Treatment relic now allows Psi to target Purple Bloons"
                    },
                    {
                        "text": "Bigger Bloons Sabotage no longer also applies to Boss Bloons"
                    },
                    {
                        "text": "Relic related Life/Shield regeneration functions should no longer interfere with Mana Shield"
                    },
                    {
                        "text": "Resolved a crash related to restarts in Monkey Teams"
                    },
                    {
                        "text": "Fixed some UI softlock scenarios"
                    },
                    {
                        "text": "Local co-op lobby once again shows cosmetics of the lobby host"
                    },
                    {
                        "text": "Team Vice Mayors can have leadership transferred to them without having to first be demoted again"
                    },
                    {
                        "text": "Resolved some CT messages not displaying through into Team Feed"
                    },
                    {
                        "text": "Resolved an error that could occur removing team members"
                    },
                    {
                        "text": "Resolved some incorrect localizations with Teams & CT"
                    },
                    {
                        "text": "Resolved a common crash on the CT Base Island menu"
                    },
                    {
                        "text": "Resolved a crash that could occur when returning to main menu from a race defeat"
                    },
                    {
                        "text": "Resolved a crash that could occur when leaving menu after joining a guild"
                    },
                    {
                        "text": "Resolved issues with ghost notifications in the team inventory tab"
                    },
                    {
                        "text": "Resolved Team Join button sometimes failing to work & a few other Team Join related issues"
                    },
                    {
                        "text": "Resolved a crash that could occur logging out on Android devices"
                    },
                    {
                        "text": "Resolved an issue introduced in 32.1 that would cause some players to see an empty ‘global teams’ field in their CT rewards"
                    }
                ]
            }
        ]
    },
    "32.1": {
        "release": "2022-08-10",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "Resolved a number of issues with Contested Territory ticket assignment and generation"
                    },
                    {
                        "text": "Resolved an issue where Teams Roster page was not showing player point earnings"
                    },
                    {
                        "text": "Resolved an issue where the Master Builder’s Sentry ability would not snap placement to your next tap on mobile"
                    },
                    {
                        "text": "Resolved an error when attempting to re-capture a tile with no surrounding tiles in CT"
                    },
                    {
                        "text": "Updated UI around member removal / promotions on team pages"
                    },
                    {
                        "text": "Resolved a rare crash on rejecting a team invite"
                    },
                    {
                        "text": "Resolved UI alignment issues on certain screen resolutions around CT"
                    },
                    {
                        "text": "A number of optimizations & fixes made to team messages"
                    },
                    {
                        "text": "Prevented some team browser errors from popping up multiple times in a row"
                    },
                    {
                        "text": "Resolved an issue where Ice towers buffed by the Camo Flogged Relic would not freeze camo bloons"
                    },
                    {
                        "text": "My Teams button should now read \"Teams\" if not in a team"
                    },
                    {
                        "text": "Engineer's 032 Cleansing Foam slow no longer stacks on a single target"
                    },
                    {
                        "text": "Resolved an issue where CT Teammate's score was not loaded correctly when restarting/checkpoint loading a point before their score was set"
                    },
                    {
                        "text": "\"Tile Degraded\" should no longer show when a teammate sets a better score on a tile in CT"
                    },
                    {
                        "text": "x5x Ultraboost ability limited to 3 uses per round"
                    },
                    {
                        "text": "150 Absolute Zero ability no longer applies an excessively strong permafrost effect"
                    },
                    {
                        "text": "Resolved an issue where \"Team mate set better score\" would show in the background behind victory screen in CT"
                    },
                    {
                        "text": "Resolved an issue with Boss checkpoint costs being pulled down causing T5 boss checkpoint to be free"
                    },
                    {
                        "text": "Resolved art issues with the x3x Druid vine attack"
                    },
                    {
                        "text": "Resolved an issue with selecting more than 4 relics in CT"
                    },
                    {
                        "text": "Resolved a number of incorrect damage type issues"
                    },
                    {
                        "text": "Resolved an issue preventing Quick Join teams from working correctly"
                    },
                    {
                        "text": "Resolved a game crash that could occur when exiting from CT"
                    },
                    {
                        "text": "Fixed a number of locs issues"
                    },
                    {
                        "text": "Resolved an issue where full teams would still display at the top of the team browser list"
                    },
                    {
                        "text": "Closed Teams are now called “invite only teams”"
                    },
                    {
                        "text": "Resolved some pixel line errors that could occur on team emblems on certain resolutions"
                    },
                    {
                        "text": "Resolved a number of leaderboard load issues"
                    },
                    {
                        "text": "Resolved a number of issues with Team Browser filter search results"
                    },
                    {
                        "text": "Resolved a number of edge cases crashes related to UI / HUD updates"
                    },
                    {
                        "text": "Resolved a number of ‘missing background’ scenarios"
                    }
                ]
            }
        ]
    },
    "32.0": {
        "release": "2022-08-03",
        "items": [
            {
                "title": "Key New Features",
                "items": [
                    {
                        "title": "Massive new Event system - Contested Territories!",
                        "items": [
                            {
                                "text": "We set out to make this big, inspired by Bloons Monkey City’s instanced six player, single challenge framework but pushing it to be truly next level for BTD6. Big was an understatement - we’ve made a whole new game inside the game!"
                            },
                            {
                                "text": "Now with 90 players per instance across six player-selected Teams (see below), Contested Territories combines a massive map of 150+ unique PvE challenge-based tiles with the PvP competition of vying for the best score"
                            },
                            {
                                "text": "With a range of difficulties that increase across Regular, Relic, and Banner tiles, the intent is to allow all player levels and styles to participate. Less experienced players can concentrate on Regular tiles, while more competitive players can duke it out over Relic and Banner tiles. Regular tiles give balanced rewards, Relic tiles give more Team Trophies and Relic Knowledge, and Banner tiles give the most points for the competitive leaderboards."
                            },
                            {
                                "text": "More details available on our preview reddit post below, as well as the in-event info button: https://www.reddit.com/r/btd6/comments/va7jwc/contested_territory_overview_sneak_peek/"
                            },
                            {
                                "text": "We’ve spent extra time polishing and balancing this huge new system, so thank you for your patience! As always: feedback welcome on reddit and Discord."
                            }
                        ]
                    },
                    {
                        "title": "All new player-selected Teams feature!",
                        "items": [
                            {
                                "text": "To support Contested Territories and other future features, we’ve added a guilds/clans system called Teams"
                            },
                            {
                                "text": "Up to 15 players can join together, manage membership, set tactical targets, unlock CT-specific boosts, and unlock a range of cosmetic items to customize your Team"
                            },
                            {
                                "text": "Closely linked with the Friends system to make it easier to invite or join up with in-game Friends"
                            },
                            {
                                "text": "Earn Team Trophies from Contested Territory to spice up your Player Teams with cosmetics including Team Banners, Icons & Frames to decorate your team page plus all sorts of 3D items to customize your Team Base Tile"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Paragon tower, the Engineer Master Builder",
                        "items": [
                            {
                                "text": "Yes, your Sentry Paragon is back! We ultimately chose Master Builder for the name as it represents the range of abilities better and relates more closely to the awesome construction exo suit that the art team had fun designing"
                            },
                            {
                                "text": "Deploying 3 powerful activated sentry types that explode on sell and deploy their own sub sentries, the Master Builder maintains its own powerful nail attack that overclocks itself every round"
                            },
                            {
                                "text": "Pushing for higher Paragon degrees improves nail gun attacks, activated sentry attacks, and activated sentry explosions on sell"
                            },
                            {
                                "text": "Master Builder is very expensive, almost as much as the Ascended Shadow, so farm hard and check the nets if you want methods to practice, like Hbomb’s here: The Fastest Way To FarmOr Ethan Reid’s farming comparison here: This is the Best Banana Farm in BTD6! (11.4% Return)"
                            }
                        ]
                    },
                    {
                        "title": "New Intermediate Map, Quarry",
                        "items": [
                            {
                                "text": "Digging deep into mother Earth usually leads to trouble, and the same is true in the Monkeyverse! Quarry’s zig zag path may look long, but the Bloons move faster on those downslope water channels. Expect the unexpected!"
                            }
                        ]
                    },
                    {
                        "title": "New Hero Skin, Voidora",
                        "items": [
                            {
                                "text": "Reaching us from the Great Beyond, Voidora makes playing the Adora Hero powerset an otherworldly experience of sight and sound"
                            }
                        ]
                    },
                    {
                        "title": "New Contested Territory Achievements",
                        "items": [
                            {
                                "text": "Conquested Territory | Capture 5 tiles off other players"
                            },
                            {
                                "text": "Stage of Empires | Capture 50 tiles"
                            },
                            {
                                "text": "Territory Sampler | Capture 1 of each: Boss, Time Attack, Least Tiers and Least Cash tiles"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Mountain Obyn - Balfrog Pet"
                            },
                            {
                                "text": "Monkeys: Monkey Village - Pride Flag"
                            },
                            {
                                "text": "Co-op: Rainbow fullscreen emote, Need More! emote"
                            },
                            {
                                "text": "Game & UI: Avatar 61 - Dart monkey, Avatar 62 - Geraldo, Music Track - Tribes Jaloon Mix"
                            },
                            {
                                "text": "Competition winners",
                                "items": [
                                    {
                                        "text": "Banner winner by LordTeddington(OG btd style)"
                                    },
                                    {
                                        "text": "Banner winner by tricky999tricky (Druid)"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Added a Hero counter to the new Hero Screen as well as a total count to the Achievements Screen for the collectionists"
                    },
                    {
                        "text": "Big behind the scenes refactoring to Monkey Knowledge to improve load time & memory, this includes a number of bug fixes and resolutions to some minor quirks in functionality. Current enabled Monkey Knowledge for a save game will now be locked upon creation of that game"
                    },
                    {
                        "text": "Behind the scenes refactoring to Hero Skin Data to improve load time & memory"
                    },
                    {
                        "text": "Changes to Boss auto-play behavior, if a Boss or its spawn are on screen the game & next round always starts immediately. If a Boss is not on screen then the game does not start automatically, play button is shown, & if you have auto-start toggled off then the game will stop between rounds."
                    },
                    {
                        "text": "Added a new checkpoint at round 20 for boss events"
                    },
                    {
                        "text": "Restart functionality added to the pause menu in Race modes"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Fixed the bug where v32.0 was not yet released"
                    },
                    {
                        "text": "Resolved an issue where some heroes were not adding their category to your profile to display recorded hero stats"
                    },
                    {
                        "text": "Setup \"Add Friend\" buttons to player profiles & some general improvements & fixes to friends online status/notifications"
                    },
                    {
                        "text": "Resolved an issue with Lych’s Soul having health and speed ramped up via freeplay scaling after round 80"
                    },
                    {
                        "text": "Resolved an issue with Fortified Golden Bloons causing lives to be leaked"
                    },
                    {
                        "text": "Resolved Audio slider sounds persisting on loop forever if you really specifically tried to go out of your way to break them"
                    },
                    {
                        "text": "Playing challenges from the browser should no longer add attempts to your games played stat"
                    },
                    {
                        "text": "Resolved a UI issue that could occur when returning from buying a hero booster from the fullscreen hero page"
                    },
                    {
                        "text": "Resolved some minor inconsistent UI font size issues across different screens."
                    },
                    {
                        "text": "Resolved player name not displaying on main menu on first launch of the game on Apple Arcade"
                    },
                    {
                        "text": "Removed \"i\" info button from sub tower's tower portrait panels"
                    },
                    {
                        "text": "Resolved Ravine easter egg animation issues on some android devices"
                    },
                    {
                        "text": "Resolved incorrect Boss menu UI visuals when viewed from play social menu"
                    },
                    {
                        "text": "Resolved Adoras temple map no longer animating on game start"
                    },
                    {
                        "text": "Resolved an issue allowing players to open a broken boss menu while no boss event was active"
                    },
                    {
                        "text": "Resolved issues where one paragon’s UI could be used to create different paragon"
                    },
                    {
                        "text": "Resolved an issue in which some activated abilities upon being sold could block usage of other newly purchased activated abilities"
                    },
                    {
                        "text": "Resolved currently selected hero upgrade on the heroes upgrade menu being lost when navigating to a skin UI and returning."
                    },
                    {
                        "text": "Resolved a crash that could occur when logging out of an account"
                    },
                    {
                        "text": "Deleted Accounts will no longer appear on your friends list"
                    },
                    {
                        "text": "Paragon upgrade audio no longer plays on loading a save with a paragon"
                    },
                    {
                        "text": "Resolved some issues with navigating between certain menus causing the background to turn black or blurry"
                    },
                    {
                        "text": "Resolved a number of minor crashes"
                    },
                    {
                        "text": "Resolved a number of localisation issues"
                    },
                    {
                        "text": "Scottish flag is no longer called the New Zealand flag when playing in German"
                    },
                    {
                        "text": "Resolved various minor map specific issues"
                    },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "Optimisations made to dart paragon lightning effects"
                            },
                            {
                                "text": "Resolved some inconsistency in Paragon degree results related to the Master Double Cross MK"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "Resolved overlays from X-X-4 relentless glue’s track puddles using green glue assets instead of pink"
                            },
                            {
                                "text": "X-X-5 Super Glue new art assets added for Glue DoT"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-5-X Pre-emptive Strike sub passive attack animation should no longer break on crosspath"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-X-4 Spectre no longer missing bonus ceramic damage on darts"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Optimisations made to some dartling lightning effects"
                            },
                            {
                                "text": "Resolved some projectile eject marker inconsistencies across Bottom Path"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "Resolved some Invalid engineer foam targeting related to height"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "items": [
                            {
                                "text": "Resolved an issue with Gwendolin’s Lv3 ability not playing it’s voiceline"
                            },
                            {
                                "text": "Resolved the initial hit from Gwendolin’s firestorm not keeping improved value at level 20"
                            }
                        ]
                    },
                    {
                        "tower": "Captain Churchill",
                        "items": [
                            {
                                "text": "Resolved an issue where upon reaching level 20 Sentai Churchill would play 2 voice lines at once"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "items": [
                            {
                                "text": "Resolved a voice-line conflict on Admiral Brickell when attempting to place her level 10 Mega Mine, where it would also attempt to play a selection voice line."
                            }
                        ]
                    },
                    {
                        "tower": "Geraldo",
                        "items": [
                            {
                                "text": "Resolved placing some items from Geraldo's shop into play, only playing Geraldo's voiceline instead of item placement"
                            },
                            {
                                "text": "Resolved Geraldo's Bunny not rotating and getting stuck on rotating platforms"
                            },
                            {
                                "text": "Resolved closing Geraldo's shop via the hotkey not adding back the 'button' to open it again"
                            },
                            {
                                "text": "When Geraldo reaches level 18 his Genie Bottle description now updates from \"Blue Bottle\" to Gold."
                            },
                            {
                                "text": "Resolved a crash that could occur when reassigning Geraldo’s action figure in coop"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Added GlueRatJam emote to the discord server"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Boomerang  Monkey",
                        "type": "Primary",
                        "description": "A small price increase to MOAB Press as combinations of this tower with others slows or spam with more of itself is very strong.",
                        "items": [
                            {
                                "text": "X-X-4 MOAB Press price increased from $2200 -> 2400"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "Has been a standout tier 3 for long enough, T4 remaining unchanged to still encourage more focussed use over low tier spam.",
                        "items": [
                            {
                                "text": "X-3-X MOAB Mauler bonus MOAB damage 18 -> 15"
                            },
                            {
                                "text": "X-4-X MOAB Assassin damage unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Ice monkey Enhanced Freeze is too good at low tiers, allowing full stunlock of ceramics for very cheap, as the fire rate increase alone of this Enhanced Freeze is a powerful addition most of the increased freeze duration has been moved up as it makes more sense to have duration with the currently less desirable T2 Deep Freeze. Permafrost was previously reduced to a lower price than we’d like to try increase desirability of this crosspath, but as the reworks to metal freeze have had more success there in pulling this path ahead we want to add a little back on here. Cryo Cannon has now been overperforming compared to any towers that perform similar roles with either of these crosspaths so is also seeing a general reduction.",
                        "items": [
                            {
                                "text": "0-1-0 Enhanced Freeze freeze duration reduced from 2.2 -> 1.75"
                            },
                            {
                                "text": "0-2-0 Deep Freeze freeze duration remains at 2.2"
                            },
                            {
                                "text": "1-X-X Permafrost price increased from $100 -> $150"
                            },
                            {
                                "text": "X-X-3 Cryo Cannon attack delay increased from 1s -> 1.2"
                            },
                            {
                                "text": "X-X-3 Cryo Cannon price increased from $1950 -> 2250"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "Sniper middle path is too strong for how easy to use it is, while having infinite range & cash production as well. We have removed the free +1 pierce increase shrapnel gains at T3 in addition to the added bounce. Maim MOABs grouped stun potential when crosspathed with Shrapnel feels it is overperforming too much so the shrapnel will now have a reduced stun amount compared to the initial target hit",
                        "items": [
                            {
                                "text": "X-3-X Bouncing Bullet shrapnel pierce reduced from 3 -> 2"
                            },
                            {
                                "text": "X-4-X Supply Drop shrapnel pierce reduced from 6 -> 5"
                            },
                            {
                                "text": "4-2-0 Maim MOAB's shrapnel stun reduced by about 33% effectiveness",
                                "items": [
                                    {
                                        "text": "MOAB 3s -> 2"
                                    },
                                    {
                                        "text": "BFB 1.5s -> 1"
                                    },
                                    {
                                        "text": "ZOMG 0.75s -> 0.5"
                                    }
                                ]
                            },
                            {
                                "text": "5-2-0 Cripple MOAB Shrapnel stun/debuff duration reduced",
                                "items": [
                                    {
                                        "text": "MOAB 7s -> 4.5"
                                    },
                                    {
                                        "text": "BFB 6s -> 4"
                                    },
                                    {
                                        "text": "ZOMG 3s -> 2"
                                    },
                                    {
                                        "text": "DDT 4s -> 2.5"
                                    },
                                    {
                                        "text": "BAD 0.75s -> 0.5"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "Similar types of camo reveal like Shimmer/Signal Flare/Embrittlement are all pierce limited, but the Submerge sub has practically infinite pierce while also being extremely cheap with a very fast rate and a T4 that is far better at camo removal than those other towers can reach. Giving this upgrade a more reasonable pierce value brings these more in line and allows for the pierce crosspath to have some potential meaning.",
                        "items": [
                            {
                                "text": "3-X-X Submerge and Support camo pulse pierce reduced to -> 100"
                            },
                            {
                                "text": "3-1-0 Submerge and Support camo pulse pierce reduced to -> 120"
                            },
                            {
                                "text": "3-2-0 Submerge and Support camo pulse pierce reduced to -> 150"
                            },
                            {
                                "text": "5-0-0 Energizer camo pulse pierce reduced to -> 1000"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Navarch Paragon feels too dominant over other expensive paragons, as such a powerful choice it feels overused even on many low water volume maps",
                        "items": [
                            {
                                "text": "Navarch paragon price increased from $500,000 -> 550,000"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Neva-Miss has been generally over performing for quite a cheap T3, increasing price here slightly but not carrying that increase up through higher tiers.",
                        "items": [
                            {
                                "text": "X-X-3 Neva-Miss Targeting price increased from $2200 -> 2800"
                            },
                            {
                                "text": "X-X-4 Spectre price reduced from $24,000 -> 23,400"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Heli’s blowback has always been extremely effective from early on, and as players have become more knowledgeable the use into lategame as well only seems to go up especially moving into Super Ceramics. This change shouldn’t really have as large an impact at higher level gameplay as total map length is so much shorter you will often still be blowing back the entire track, but the blowback range has been reduced at T3 leading back into the old value at T4",
                        "items": [
                            {
                                "text": "X-3-X Downdraft blowback distance reduced from 32-300 to 32-150"
                            },
                            {
                                "text": "X-4-X Support Chinook blowback distance remains at 32-300"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Polishing some crosspaths, 130 Dragons Breath is the only crosspath for Guided Magic that doesn't yet attack through walls, and 011 Fireball also does not benefit from having the pierce crosspath",
                        "items": [
                            {
                                "text": "1-3-0 Dragons Breath now target through walls from Guided Magic"
                            },
                            {
                                "text": "0-1-1 Wizard Fireball pierce increased from 15 -> 20"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "Legend of the Night outside of very specific niche challenges isn’t worth the cost as any more than VTSG fodder",
                        "items": [
                            {
                                "text": "0-0-5 Legend of the Night damage increased 5 -> 10"
                            },
                            {
                                "text": "0-0-5 Legend of the Night ceramic bonus increased 2 -> 4"
                            },
                            {
                                "text": "0-0-5 Legend of the Night moab bonus increased 3 -> 8"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "More needed crosspath reworking for the new 1xx Hard Thorns upgrade, as it now upgrades the druid from sharp to normal damage it doesn't make sense for the track brambles on 030 to not require this crosspath for lead popping. Spirit of the Forest's base attack has also had a simple damage increase as it contributes very little to the power of the tower by T5 and the tower lacks in single target.",
                        "items": [
                            {
                                "text": "0-3-0 Druid of the Jungle bramble piles dmg type Normal -> Sharp"
                            },
                            {
                                "text": "1-3-0 Druid of the Jungle bramble piles dmg type back to Normal"
                            },
                            {
                                "text": "0-5-0 Spirit of the Forest base attack damage increased 2 -> 20"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Super Mines DoT damage is entirely insignificant for the price range of this tower.",
                        "items": [
                            {
                                "text": "5-X-X Super Mines DoT damage per tic of damage increased 1 -> 500"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "The Monkeyopolis ‘space saving’ farm absorption shows to be far too much more efficient than the absorbed farms.",
                        "items": [
                            {
                                "text": "X-X-5 Monkeyopolis generation per $2000 reduced $300 -> 200"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "type": "Support",
                        "items": [
                            {
                                "text": "Lv20 True Adora buff increases Ball of Light Ability pierce from 43 -> 48"
                            },
                            {
                                "text": "Lv20 True Adora buff increases Ball of Light Ability damage to 100"
                            }
                        ]
                    },
                    {
                        "tower": "Geraldo",
                        "type": "Support",
                        "description": "Many of Geraldo's items are too strong for the required maintenance, Geraldo SHOULD be a top level hero, he is literally designed to be so as the most rewarding for your player knowledge and reaction to moment to moment gameplay, but too many items reward spammable gameplay over these knowledge & reactions so we are targeting a lot of durations/stock amounts with minimal price increases where it feels necessary. These are clearly a lot of small steps, as we did not want to do too many big changes from multiple angles all at once.",
                        "items": [
                            {
                                "text": "Lv1 Jar of Pickles: Price increased from $50 -> 100"
                            },
                            {
                                "text": "Lv1 Jar of Pickles: Duration reduced from 8 -> 5"
                            },
                            {
                                "text": "Lv3 Invisibility Potion: Can no longer target a number of towers that have no attacks"
                            },
                            {
                                "text": "Lv4 Glue Trap: Now expires from the track after 4 rounds"
                            },
                            {
                                "text": "Lv4 Glue trap: Pierce reduced from 300 -> 100"
                            },
                            {
                                "text": "Lv7 Maelstrom: Max stock reduced 5 to 3"
                            },
                            {
                                "text": "Lv7 Maelstrom: Price increased from $500 -> $650"
                            },
                            {
                                "text": "Lv12 Genie: Duration reduced from 3 -> 2 rounds"
                            },
                            {
                                "text": "Lv15 Super Maelstrom: No longer increases duration of the maelstrom"
                            },
                            {
                                "text": "Lv11 Rejuv Potion: Price increased from $1000 -> 2000"
                            },
                            {
                                "text": "Geraldo's Moustache will no longer contain hidden Glue Rats"
                            }
                        ]
                    },
                    {
                        "tower": "Bosses",
                        "description": "Vortex’s Stun radius has proved to be a little too small allowing for some cheesier strategies than intended, but instead of a flat increase at all tiers we have decide to trial a slight increase up throughout each tier.",
                        "items": [
                            {
                                "text": "Vortex tier 2 Stun Radius increased from 60 -> 65"
                            },
                            {
                                "text": "Vortex tier 3 Stun Radius increased from 60 -> 70"
                            },
                            {
                                "text": "Vortex tier 4 Stun Radius increased from 60 -> 75"
                            },
                            {
                                "text": "Vortex tier 5 Stun Radius increased from 60 -> 80"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "31.0": {
        "release": "2022-04-12",
        "items": [
            {
                "title": "Key Features",
                "items": [
                    {
                        "title": "New Hero, Geraldo the Mystic Shopkeeper!",
                        "items": [
                            {
                                "text": "A bold adventurer and seeker of fine things, Geraldo has explored the distant, mysterious reaches of the Monkey world to assemble his signature collection"
                            },
                            {
                                "text": "Geraldo is almost nothing without his shop, so select the “Shop” icon next to Geraldo’s portrait when he is selected; the shop will remember its open or closed state for easy access & can be toggled open/closed for PC users with the Monkey Special hotkey (PageDown)"
                            },
                            {
                                "text": "Shop items have a variety of uses - some place on the map, some on the track, others target Monkeys or subtowers; they all must be pulled from the shop to the playfield"
                            },
                            {
                                "text": "Get ready for a wild ride, as Geraldo is intended to be a “build” hero, supporting a variety of strategies that are designed to scale; heaps of dev and balance time behind this one - we hope you enjoy the mysteries!"
                            }
                        ]
                    },
                    {
                        "title": "New Bloon Boss - Vortex, Deadly Master of Air!",
                        "items": [
                            {
                                "text": "Affectionately known as speedy boi, but it may be some time before you feel any affection for this incredibly tough boss"
                            },
                            {
                                "text": "Spawns with a temporary shield of wind that for a short time blows away all projectiles that are too slow to pass through it"
                            },
                            {
                                "text": "Natural Bloon spawns are buffed by Vortex’s slipstream, moving at incredible speeds until they catch up"
                            },
                            {
                                "text": "On Skulls Vortex stuns all nearby towers with a burst of lightning, activates its storm shield, and retreats a short distance"
                            },
                            {
                                "text": "Periodically triggers a storm wave that destroys all projectiles in a large radius"
                            },
                            {
                                "text": "Distributed placements and ranged attacks are key to victory - good luck!"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Beginner Map, Scrapyard!",
                        "items": [
                            {
                                "text": "Old cars and other scrap go to die in places off the beaten track, but the Bloons have even found this remote location; defend the derelicts and don’t forget to play with the heavy machinery!"
                            },
                            {
                                "text": "Sorry to the players who submitted similar ideas during the competition, but we already had our own idea in the works for a while now"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Bloons: Cat Ear Bloons, Disguise Glasses"
                            },
                            {
                                "text": "Co-op: Pat Flex emote, Mind Blown emote"
                            },
                            {
                                "text": "Game & UI: Sunshine Serenade - Fiesta Mix music track, 2 New Avatars - Super Monkey & Striker Jones"
                            }
                        ]
                    },
                    {
                        "title": "Competition Winner banners",
                        "items": [
                            {
                                "text": "Banner winner (Arrival) - by betapotata"
                            },
                            {
                                "text": "Banner winner (Beneath the Waves) - by Cyliia"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "title": "New Special Conditions for Custom Challenge victory",
                        "items": [
                            {
                                "text": "Least Cash has no limits on earning cash & allows all forms of income generation, but rewards victory only if a player remains below a chosen cash spent thresholdWe've created a challenge for you to try this new condition out"
                            },
                            {
                                "text": "Least Tiers limits victory to staying under a chosen value of tiers which increments for every tower/ upgrades/ hero/ level purchased"
                            },
                            {
                                "text": "We added these special conditions for victory as we thought they would be fun on their own, but we also have them in mind for the Contested Territory update coming later this year, as a variety of victory conditions will make the team dynamics needed to capture and hold a range of territory more interesting"
                            }
                        ]
                    },
                    {
                        "title": "Updated Heroes Screen",
                        "items": [
                            {
                                "text": "We’ve been wanting to update the Heroes screen for awhile, so with the addition of our 14th Hero, Geraldo, we made that happen"
                            },
                            {
                                "text": "Hopefully you will enjoy the full rework - making it easier to see all Heroes, allowing side by side comparisons of Heroes’ powers, and surfacing the visual changes that accompany various upgrades"
                            }
                        ]
                    },
                    {
                        "text": "Structural and performance reworks to Bloons and the Bloon overlay system. All in the interest of tighter code and more flexibility for future updates."
                    },
                    {
                        "text": "Added commas to Cash, Damage Numbers, & Income for increased visibility and slightly delayed visits to your respective optometrists"
                    },
                    {
                        "text": "Large changes to backend co-op game communication between clients for increased stability"
                    },
                    {
                        "text": "Facebook friends’ scores has been replaced with LiNK Friends scores so that we have more reliable control of score sharing; please note your Facebook friends will not autopopulate into your LiNK Friends - you will have to reestablish any Friend connections manually"
                    },
                    {
                        "text": "Due to demand over the years, we have added a Logout option to our in game webview. Since we recommend players using another account for their modded games, it’s nice to support doing that a little better."
                    },
                    {
                        "text": "To prevent event games running past the final cutoff on score submission time for ranked events, there will now be a short break in the final moments of competitive events in which the event is still active but no further games can be started. *Note this will only be in place for ranked events, meaning that Boss events will allow you to create games still so long as you swap back to non-ranked mode",
                        "items": [
                            {
                                "text": "Example: there is a 24h event, with a 1hour cutoff (the cutoff can be set to any value, bosses will have a longer one but races wont need so much)"
                            },
                            {
                                "text": "When the event first starts it will display 23h remaining not 24"
                            },
                            {
                                "text": "After those 23 hours once the timer ends it begins a new timer with 1h remaining"
                            },
                            {
                                "text": "During this final hour you cannot start a new game or continue an existing game on ranked mode, but you can finish off one that is already started and open"
                            },
                            {
                                "text": "If you quit out of a run that has already started, that's it, you will not be able to enter the play menu to load that save again."
                            },
                            {
                                "text": "In the case of bosses, you can swap back to non-ranked mode and create as many games as you want as normal during this final hour to finish off your milestones if you have not done them"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Resolved an issue with Custom Odyssey title/description being reset"
                    },
                    {
                        "text": "Changed how boss bloon status overlays are applied to look better"
                    },
                    {
                        "text": "Resolved an issue with Techbot ignoring hard limits on ability use in custom challenges in regards to overlap, causing laggy animation loops"
                    },
                    {
                        "text": "Resolved players getting booted out of co-op sessions on some low end devices due to being timed out from a long desync"
                    },
                    {
                        "text": "Optimizations made to freeplay roundsets"
                    },
                    {
                        "text": "Resolved some low quality animation issues"
                    },
                    {
                        "text": "Using Thrive right before defeat, and restarting should no longer break the animation"
                    },
                    {
                        "text": "Fixed some incorrect medal displays on leaderboards"
                    },
                    {
                        "text": "Resolved some specific cases causing the pause penalty on races to carry over onto the next attempt"
                    },
                    {
                        "text": "Join Match button in play social now checks if you have internet again on press to prevent some edge case creation of broken lobbies requiring a game restart"
                    },
                    {
                        "text": "Map Area data converted to a new System which should improve performance & allow for more complex shapes"
                    },
                    {
                        "text": "Rocket Storm ability is now grayed out between rounds"
                    },
                    {
                        "text": "Add new localization for all hero skins to remove ‘skin’ from their names on player profiles."
                    },
                    {
                        "text": "Resolved some issues with retry last round in challenge editor"
                    },
                    {
                        "text": "Resolved some issues with hero skins changing when changing owner in co-op"
                    },
                    {
                        "text": "Resolved a number of rare crashes"
                    },
                    {
                        "text": "Added a new icon for the ‘Create Challenge’ button"
                    },
                    {
                        "text": "Fixed Water Textures on Cargo map"
                    },
                    {
                        "text": "A number of minor UI fixes"
                    },
                    {
                        "text": "Resolved some issues with UI animation speed"
                    },
                    {
                        "text": "Resolved a number of map specific height and placement issues"
                    },
                    {
                        "text": "Added in fixes in a number of places to prevent the game from crashing due to certain server issues or loading broken challenges"
                    },
                    {
                        "text": "Resolved an edge case crash on the data conflict screen"
                    },
                    {
                        "text": "Resolved a crash with Lych Soul being saved on multi-path maps"
                    },
                    {
                        "text": "Investigation success"
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "5-X-X Boomerang glaives again crosspath correctly with X-X-2"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Resolved Buccaneer showing wrong upgrade text after upgrading a ninja"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "items": [
                            {
                                "text": "1-0-4 Heli's Mini Comanche now correctly fire 5 darts at a time"
                            },
                            {
                                "text": "X-X-5 Comanche Commander's damage has been corrected with crosspaths"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "5-0-2 Mortar now applies burn to DDTs without MIB so long as they circumvent the camo"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-5-X MAD height inconsistencies compare to X-4-X Rocket Storm have been resolved"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "0-4-2 Summon Phoenix should now correctly interact with camo prio"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Resolved an issue with Master Bomber Stickies sometimes hitting regular Bloons instead of MOABs"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "5-X-X Superstorm now benefits from Ball Lightning 25% freeze chance regardless of crosspath"
                            },
                            {
                                "text": "Resolved an issue with the Cold Front MK not always showing ice overlays on Bloons"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "Resolved some inconsistencies with top path farm buff icons"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Adora sacrifice buff should now apply to Mini Sun Avatars from Temples"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "items": [
                            {
                                "text": "Resolved an issue with Admiral Brickell's Mega Mine sometimes not showing stun effects"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "If you have already placed your hero, your ‘Hero hotkey’ (U by default) will now swap to instead ‘select your hero’ wherever it is. If you have more than one hero this will cycle through them"
                    },
                    {
                        "text": "Resolved an issue with using hotkeys during loading screens causing some tower portraits to become faded out"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "To add a little more synergetic crosspath use for the Juggernaut 402 crosspath, xx2 will now also grant bonus projectile lifespan, this applies to any use of that crosspath though we feel it will in particular pair nicely with the ricocheting projectiles. Juggernaut in general is also seeing a small utility knockback buff to help it carry on a little longer into the game.",
                        "items": [
                            {
                                "text": "X-X-3 Long Range Darts also increases projectile lifespan +15%"
                            },
                            {
                                "text": "X-X-2 Enhanced Eyesight also increases projectile lifespan +20%"
                            },
                            {
                                "text": "4-X-X Juggernaut gains a slight Bloon knockback (Same as X-X-3 dartling, but half duration)"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "The Frags crosspath for top path Bomb Shooter has always been quite a poor choice, trying to compete with attack speed as a benefit for stun utility isn’t going to ever work out so we have instead gone the route of turning the frags crosspath into a DPS/Stun hybrid with a lot of small buffs to frag power.",
                        "items": [
                            {
                                "text": "3-0-2 Really Big Bombs frag damage increased 1 -> 3"
                            },
                            {
                                "text": "3-0-2 Really Big Bombs gains more frags 8 -> 12"
                            },
                            {
                                "text": "4-0-2 Bloon Impact frag pierce increased +1"
                            },
                            {
                                "text": "4-0-2 Bloon Impact frag damage increased 2 -> 3"
                            },
                            {
                                "text": "4-0-2 Bloon Impact gains even more frags 8 -> 16"
                            },
                            {
                                "text": "5-0-2 Bloon Crush remains at frag damage 12"
                            },
                            {
                                "text": "5-0-2 Bloon Crush frags gain bonus to ceramic +12"
                            },
                            {
                                "text": "5-0-2 Bloon Crush gains frag pierce 3 -> 20"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "2-X-X Corrosive Glue DoT rate increased 2.3s -> 2"
                            },
                            {
                                "text": "3-X-X Bloon Dissolver DoT ceramic bonus increased 0 -> 1"
                            },
                            {
                                "text": "4-X-X Bloon Liquifier DoT ceramic bonus unchanged"
                            },
                            {
                                "text": "5-X-X The Bloon Solver bonus moab damage increased 3 -> 5"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "Energizer upgrade offers nothing extra to the reactor sub aside from niche utility buffs, so we have increased the lategame cleanup potential by a large amount to help deal with Super Ceramics.",
                        "items": [
                            {
                                "text": "5-X-X Energizer damage increased 3 -> 5"
                            },
                            {
                                "text": "5-X-X Energizer now adds bonus damage to ceramics +5"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "The base Grape attack of T4 MOAB Takedown has had a ceramic bonus added to lead up to the T5 a little better.",
                        "items": [
                            {
                                "text": "X-4-X MOAB Takedown grapeshot ceramic bonus added +1"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Spy Plane is always a lesser crosspath aside from specific challenges that call for camo detection. It has a similar vibe to Night Vision sniper so we have given it a similar buff.",
                        "items": [
                            {
                                "text": "X-2-X Spy Plane grants attacks bonus damage to camos +1"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Previously Razor Rotor’s used to make the heli pursue for a further distance & this caused it to often fail to reach Lead Bloons with the rotor attack that could pop them. This overall seemed like a design flaw so that back-off distance has been moved up to the T4 instead. Apache Dartship has also fallen off over time as a viable saveup for prime, though it is meant to be reasonably difficult some changes have made this a little more difficult than it probably should be so we have increased the pierce of the machinegun attack.",
                        "items": [
                            {
                                "text": "3-X-X Razor Rotor’s pursuit no longer backs so far away from Leads that it can’t hit them"
                            },
                            {
                                "text": "4-X-X Apache Dartship pursuit distance increase now occurs here"
                            },
                            {
                                "text": "4-X-X Apache Dartship Machinegun pierce increased 5 -> 7"
                            },
                            {
                                "text": "5-X-X Apache Prime Machinegun pierce unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Ray of Doom suffers from the downsides of being designed as a high piercing tower, for the price this makes it feel far too weak against the round 100 BAD if you invest in it too early without some other forms of single target, to bring back a little of the interesting sort of targeting that the T4 has and help with this single target problem it will now deal a massive damage bonus to the first target hit along the beam’s path.",
                        "items": [
                            {
                                "text": "5-X-X Ray of Doom now deals bonus damage to the first target hit +55"
                            },
                            {
                                "text": "3-X-X Laser Cannon pierce increased from 4 -> 6"
                            },
                            {
                                "text": "3-0-2 Laser Cannon pierce increased from 6 -> 9"
                            },
                            {
                                "text": "X-X-2 Powerful Darts now also gives 'larger projectiles' as a crosspath",
                                "items": [
                                    {
                                        "text": "0-0-2 Powerful Darts normal projectile size increased from 2 -> 3"
                                    },
                                    {
                                        "text": "0-3-2 Hydra Rocket Pods explosion size increased from 8 -> 12"
                                    },
                                    {
                                        "text": "4-0-2 Plasma Accelerator focal point size increased from 4 -> 6"
                                    },
                                    {
                                        "text": "4-0-2 Plasma Accelerator beam width increased from 2 -> 3"
                                    },
                                    {
                                        "text": "5-0-2 Ray of Doom beam width increased from 6 -> 9"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Arcane Blast's benefit to the base tower is quite small for the price and also doesn't carry on well as a crosspath to the other T3s since they add new attacks instead of buffing the base attack, the price has been reduced to add a little more value here along with more MOAB damage at the T5 to give it a little more value over Arcane Spikes. As we somewhat expected the last Prince of Darkness rework didn’t end up really nerfing it so much, so we are now following up with a small price nerf.",
                        "items": [
                            {
                                "text": "2-X-X Arcane Blast price reduced $600 -> $450"
                            },
                            {
                                "text": "5-X-X Archmage bonus damage to MOABs 17 -> 19"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness price increased from $24,000 -> 26,500"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "Robo didn't need to lose pierce in the last Super Monkey T2 rework, and Dark Knight feels like it has too much pierce without ever considering the pierce crosspath. So to balance these together we’ve taken out pierce from Dark Knight and added it back into x2x carrying up into Robo Monkey. Dark Champion pierce is increased rather than decreased to push it further ahead of Dark Knight.",
                        "items": [
                            {
                                "text": "X-2-X Epic Range increases pierce further 3 -> 4"
                            },
                            {
                                "text": "X-X-3 Dark Knight pierce decreased 5 -> 4"
                            },
                            {
                                "text": "X-X-4 Dark Champion pierce increased 7 -> 8"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "Grand Sabotage is extremely powerful in freeplay, but really boring outside of that one scaling mechanic. For a little more flavour with the shinobi mechanic, the T5 will now boost the potential of your shinobi army.",
                        "items": [
                            {
                                "text": "X-5-X Grand Sabotage ability grants all your Shinobi on screen +5 range"
                            },
                            {
                                "text": "X-5-X Grand Sabotage ability grants all Shinobi +1 damage to MOABs"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "description": "Partially to help a little with tedious endgame farm collection in ranked boss events, or any other use you may desire for it, we have added a non-power form of easy banana collection. However we do not want to trivialize the intended downside of opting for a more micro intensive farm path too much, so this is still restricted behind a low-range tier 5 upgrade.",
                        "items": [
                            {
                                "text": "X-X-5 Monkey Wall Street now collects nearby bananas/crates as a Monkey Farmer would"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "To help make the tradeoff of building one T5 over multiple T4 not be as hard a choice, the basic attack on Carpet of Spikes has had power increased significantly over rate, range & damage.",
                        "items": [
                            {
                                "text": "X-5-X Carpet of Spikes range increased from 34 -> 50"
                            },
                            {
                                "text": "X-5-X Carpet of Spikes main damage increased from 3 -> 4"
                            },
                            {
                                "text": "X-5-X Carpet of Spikes main attack delay reduced 0.98s -> 0.33"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "Call to Arms ability suffers from uptime, for such an expensive upgrade which is such low range and purely support this makes it hard to use, so duration has now been increased to push it up to a 1/3rd uptime threshold",
                        "items": [
                            {
                                "text": "X-4-X Call To Arms ability duration increased 12 -> 15"
                            },
                            {
                                "text": "X-5-X Homeland duration remains unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Sentry Expert really needed some logic fixes to get more of the actual correct sentries placed at the right times, it has also received a number of power buffs across the board to the special sentries at T4 complimenting the new logic reworking. Cleansing Foam has had some extra crosspath utility added at the cost of a small price increase and a large decrease to Ultraboost price.",
                        "items": [
                            {
                                "text": "4-X-X Sentry Expert logic has been reworked to evaluate threat levels based on Bloon types that it can counter, Bloon types that counter the sentries that it wants to spawn, and which of the current threats on screen is the greatest. Distribution of sentry types should scale based on how much one Bloon threat is more of a threat than another."
                            },
                            {
                                "text": "4-X-X Sentry Expert Crush Sentry ceramic damage bonus increased from 1 -> 4"
                            },
                            {
                                "text": "4-X-X Sentry Expert Crush Sentry damage type changed from Sharp -> Shatter"
                            },
                            {
                                "text": "4-X-X Sentry Expert Bomb Sentry damage increased 2 -> 4"
                            },
                            {
                                "text": "4-X-X Sentry Expert Cold Sentry pierce increased from 15 -> 25"
                            },
                            {
                                "text": "4-X-X Sentry Expert Cold Sentry radius increased from 12 -> 18"
                            },
                            {
                                "text": "4-X-X Sentry Expert Energy Sentry gain moab damage bonus of +2"
                            },
                            {
                                "text": "X-3-X Cleansing Foam price increased from 800 -> 850"
                            },
                            {
                                "text": "0-3-2 Pin allows Cleansing Foam to slow Bloons 50% briefly"
                            },
                            {
                                "text": "1-3-0 Foam makes Sentries shoot Foamy nails that strip properties"
                            },
                            {
                                "text": "X-5-X Ultraboost price decreased from $120,000 -> 105,000"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "description": "Gwendolin’s Firestorm damage doesn’t carry well into the endgame so has been buffed at a later level.",
                        "items": [
                            {
                                "text": "Lv16 Firestorm base damage tic increases from 1 > 5"
                            },
                            {
                                "text": "Lv16 Firestorm MOAB damage tic increases from 10 > 15"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "description": "Pat Fusty was initially given a smaller footprint than it felt he should have due to concerns about balance with his small radius, but actually has been extremely powerful for a long time despite these radius issues. We feel like now giving him back the footprint size that he always should have had similar to Churchill will add a reasonable lategame downside to consider without harming his early use so badly.",
                        "items": [
                            {
                                "text": "Pat Fusty footprint increased from 7 -> 8"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "description": "The Sea Mines delay that was added back in 29 has done well for reducing some of Brickells weaknesses, but as we expected somewhat does add in new weaknesses to rush rounds of Bloons that can now sneak past before all of her mines have been able to acquire a target. To help lessen this new issue she has gained a brand new ability that will allow more Sea Mines to rapidly deploy and find a target over a short duration.",
                        "items": [
                            {
                                "text": "Lv7 Blast Chain utility ability added for Admiral Brickell. For 10 seconds all sea mines have their delay halved (the new one added in 29), & their projectile speed doubled"
                            }
                        ]
                    },
                    {
                        "tower": "Psi",
                        "description": "We felt that Psi’s early game too easily carried into some extremely powerful endgame setups. These setups were overperforming due to certain cooldown interactions with stalling out cooldown, however in an effort to try to avoid nerfing the cooldown for the average player we decided to make that stalling synergy harder to pull off instead.",
                        "items": [
                            {
                                "text": "Psi base price increased $800 -> 1000"
                            },
                            {
                                "text": "Lv10 Psionic Scream ability 'speed of blow back' increased from bloon speed 300% -> 600%"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Rat",
                        "description": "Glue Rat pet has been overperforming in all game modes for a while now without any apparent weakness or strategic downsides.",
                        "items": [
                            {
                                "text": "Base movement speed ramping level endures persistently"
                            },
                            {
                                "text": "Max level goggle tightness loosened from Max -> Sam"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "30.0": {
        "release": "2022-01-31",
        "items": [
            {
                "title": "Key Features",
                "items": [
                    {
                        "title": "Co-op Split Editing!",
                        "items": [
                            {
                                "text": "We’ve wanted this for a long time and have had bits of it working, but we’re pleased to start the 2022 updates with this great quality of life feature."
                            },
                            {
                                "text": "Players creating Co-op lobbies can now choose which Co-op split to use for the match"
                            },
                            {
                                "text": "Not content with just the change in splits, we’ve added 2 new splits (Radioactive and Stairs) that will make their way into Co-op Challenges and even Boss Events, and of course also be an option for player-created Co-op games. We’re hoping to see some awesome content creator games and challenges come out of this!"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Map, Sunken Columns",
                        "items": [
                            {
                                "text": "Absolutely a rock hard tribute to one of the new maps in Battles 2 but custom made for all the sight, overblockers, and co-op nuances of BTD6"
                            }
                        ]
                    },
                    {
                        "title": "New Hero Skin, Psimbals",
                        "items": [
                            {
                                "text": "you thought playing several instruments was difficult? Try playing them telekinetically at the same time! A very different take on Psi - hope you enjoy!"
                            }
                        ]
                    },
                    {
                        "title": "New Achievements",
                        "items": [
                            {
                                "text": "Sticky Situation - Glue 500,000 Bloons"
                            },
                            {
                                "text": "Big Spender - Spend 1,000,000 cash in one round"
                            },
                            {
                                "text": "The Daily Reid - Win 365 unique daily challenges"
                            },
                            {
                                "text": "I'll Be Back - Spend 1,000 MM on Continues or Checkpoints"
                            }
                        ]
                    },
                    {
                        "title": "New Monkey Knowledge",
                        "items": [
                            {
                                "text": "Bionic Augmentation - Allows Turbo Charge ability to grant boomers camo vision"
                            },
                            {
                                "text": "Bonus Glue Gunner - Instead of a free Dart Monkey, you may now choose to start with a free Glue Gunner instead."
                            },
                            {
                                "text": "X-ray Ultra - Allows Ultravision super monkeys to see, target and shoot through blocking objects."
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Striker Jones - German Shepherd pet, ETn Beam Down placement"
                            },
                            {
                                "text": "Monkeys: Necromancer Wizard Chomp Zombies projectile swap, Heli Pilot Hummingbird pet"
                            },
                            {
                                "text": "Bloons: BAD Whale skin"
                            },
                            {
                                "text": "Co-op: Thinking Monkey emote"
                            },
                            {
                                "text": "Game & UI: Flower Patch road spikes skin, Monkey Boost - Sugar Rush, Avatar 57 - Explorer Monkey Sub, Avatar 58 - Fusty Ice Cream"
                            }
                        ]
                    },
                    {
                        "title": "Limited Time only {trophy items if there’s a seasonal}",
                        "items": [
                            {
                                "text": "Bloon Decal - Daisy Chain Circlet"
                            },
                            {
                                "text": "Druid Spring Flowers avatar"
                            },
                            {
                                "text": "Obyn Peace emote"
                            },
                            {
                                "text": "So Buzzed profile banner"
                            }
                        ]
                    },
                    {
                        "title": "Competition Winner banners",
                        "items": [
                            {
                                "text": "Doodle Brilliance banner by bonbonni (*Now chompypaw)"
                            },
                            {
                                "text": "Arcanum Necronicom by _Concilliabule_"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "title": "Sound controls",
                        "items": [
                            {
                                "text": "By popular request (and sometimes demand), you now have more audio control over your Heroes and chaotic critters."
                            },
                            {
                                "text": "Pet sounds can now be toggled separately to other sound effects."
                            },
                            {
                                "text": "Additionally Hero Voices has instead been moved over into its own slider."
                            }
                        ]
                    },
                    {
                        "title": "Trophy Store filters",
                        "items": [
                            {
                                "text": "If your Trophy Store inventories are like some of ours, we all know some organization was due."
                            },
                            {
                                "text": "Added subcategory filters to each store section and the inventory to help find what you’re looking for."
                            },
                            {
                                "text": "The Trophy Store will now be unavailable for use whenever mods are active. Removing any mods from the install directory should restore it again. To be clear the goal here is purely to prevent players from bricking their accounts if they do mod, not to detract from modding."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Optimizations made to the trophy store for loading & performance"
                    },
                    {
                        "text": "Added a timer to the freeplay/restart/continue buttons in co-op. This delay will be shown on the buttons"
                    },
                    {
                        "text": "Strong target option should now prioritize fortified bloons correctly if they also have regrow"
                    },
                    {
                        "text": "Heroes can no longer receive customized names"
                    },
                    {
                        "text": "Resolved some boss leaderboards not always displaying the right medals from your profile"
                    },
                    {
                        "text": "Added individual reset buttons for each Odyssey island within the editor"
                    },
                    {
                        "text": "Resolved some Height/terrain inconsistencies with placement/visibility"
                    },
                    {
                        "text": "Resolved some edge of map tower footprint size issues"
                    },
                    {
                        "text": "Going AFK for a long time on a pause screen should no longer eventually break the UI"
                    },
                    {
                        "text": "Hitting Home on ‘waiting to rejoin co-op game’ should now prompt ‘are you sure?’"
                    },
                    {
                        "text": "Co-op resync should no longer mix up tower locations on Sanctuary"
                    },
                    {
                        "text": "Resolved some issues with UI being offset incorrectly on some devices/resolutions"
                    },
                    {
                        "text": "Translated Odyssey descriptions should no longer [???]"
                    },
                    {
                        "text": "Boss menu can no longer be entered without an internet connection"
                    },
                    {
                        "text": "Resolved some issues with players from previous versions seeing extremely buggy profiles when looking at player profiles that have equipped new items from future versions. This fix will not apply to anyone playing before v30"
                    },
                    {
                        "text": "Reworked how co-op resyncs interact at defeats"
                    },
                    {
                        "text": "Resolved an issue displaying player removed messages in co-op multiple times"
                    },
                    {
                        "text": "User ID now included on some menu screens"
                    },
                    {
                        "text": "Resolved an issue that could be causing the Alchermistman and Bloonacleboy achievement to not save completion"
                    },
                    {
                        "text": "Resolved some tower buffs preventing Bloons from becoming frozen"
                    },
                    {
                        "text": "Game no longer softlocks on Review Map screen when you hit Escape key before the Review Map UI transition completes."
                    },
                    {
                        "text": "Resolved a number of minor crashes"
                    },
                    {
                        "text": "Resolved a crash that could occur when selling Ezili to place multiple times"
                    },
                    {
                        "text": "Resolved an Odyssey crash that could occur when excluding all towers"
                    },
                    {
                        "text": "Resolved a crash that could occur from opening multiple deep links in a row"
                    },
                    {
                        "text": "Resolved an issue with Strong targeting working incorrectly with Camo Prio"
                    },
                    {
                        "text": "Resolved cases in which the remove disconnected player button would persist on co-op UI even though that player disconnected voluntarily"
                    },
                    {
                        "text": "Resolved an issue that could prevent players re-joining co-op games after a crash"
                    },
                    {
                        "text": "Resolved a number of different Locs issues"
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-2-X Should no longer become ‘lower’ and lose vision over objects"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-X-X Ice Monkey should no longer slow & remove camo from White Bloons without being able to damage them"
                            },
                            {
                                "text": "5-X-X Super Brittle debuff duration corrected from 2s -> 3"
                            },
                            {
                                "text": "X-3-X Arctic Wind :| - that is all"
                            },
                            {
                                "text": "X-5-X Absolute Zero now has an ability icon for the buff it grants other Ice Monkey"
                            },
                            {
                                "text": "X-5-X Absolute Zero ice monkey buff is now correctly drained by Lych"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "2-X-X Corrosive Glue and above now allows the top path of Glue Gunner to be targeted by Acidic Mixture Dip"
                            },
                            {
                                "text": "X-X-5 Super Glue can target Glued Bloons again"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-4-X First Strike Capability ability initial impact damage is now dealt before splash damage"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Missing sell/upgrade animations fixed"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Missing sell/upgrade animations fixed"
                            },
                            {
                                "text": "X-5-X Vine Rupture ability should now be influence by Challenge Editor cooldown slider"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "Resolved a save loading bug that could cause Foam to target the center of the map from any location"
                            },
                            {
                                "text": "X-3-X Cleansing Foam should now count damage when popping lead bloons"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "items": [
                            {
                                "text": "Lv3 Cocktail of Fire now extinguished by purple bloons"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "items": [
                            {
                                "text": "Resolved a save loading bug that could cause Wall of Trees to target the center of the map from any location"
                            },
                            {
                                "text": "Resolved some issues with buff applications not working correctly in all cases"
                            }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "items": [
                            {
                                "text": "Resolved some visual issues with Matrix Placement FX"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Resolved a launch softlock on Chromebooks"
                    },
                    {
                        "text": "Resolved an issue once again allowing scroll wheel to be a bindable hotkey"
                    },
                    {
                        "text": "Added new Tower Special hotkey (PageDown by default) this will activate tower unique functionality like Boomerang arm swap & Camo Prio"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "Juggernaut relying on ricochets felt too niche in the current game, sadly excelling in far too few situations, so instead the Ceramic damage strength has been increased leading a little better into the T5 and benefiting it in more general straight line situations. Crossbow Master is pretty much around the entry level T5 that we want, but a little too expensive for something that brings no extra utility.",
                        "items": [
                            {
                                "text": "4-X-X Juggernaut ceramic bonus increased from +2 -> 3"
                            },
                            {
                                "text": "X-X-5 Crossbow Master price $25,000 -> 23,500"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "To buff Glaive Lords middle crosspath as a choice & utilize more of an attack that is mostly rendered useless by this tier, the base damage of the thrown ricochet attack has been increased. Bionic Boomerang’s price has been lowered to make this upgrade slightly more approachable, but Turbo Charge’s price increased as we’re ok with the higher tiers on this path. Finally MOAB Dom’s price has been reduced a little, while this upgrade mostly fits as an early freeplay support/carry this price buff will make it more affordable before then and slightly benefit saveup for the paragon.",
                        "items": [
                            {
                                "text": "5-X-X Glaive Lord main attack damage increased from 1 -> 8"
                            },
                            {
                                "text": "X-3-X Bionic Boomerang price 1600 -> 1450"
                            },
                            {
                                "text": "X-4-X Turbo Charge price $4000 -> $4200"
                            },
                            {
                                "text": "0-0-5 Moab Domination price reduced $60k -> 50k"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "Has strong meta usage, Mauler as a moab focus upgrade no longer needs the bonus to ceramic crutch",
                        "items": [
                            {
                                "text": "X-3-X MOAB Mauler ceram bonus reduced 1 -> 0"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "Ring of Fire doesn’t keep up well enough for where it is placed, so the attack speed increase from this upgrade has been bumped up from 15% to 25%. Inferno Ring itself feels ok but for the difficult saveup not so much, so as a bit of a buff we have added crosspathing to the Meteor attack.",
                        "items": [
                            {
                                "text": "4-X-X Ring of Fire attack delay reduced from 0.5355 -> 0.4725"
                            },
                            {
                                "text": "5-X-X Inferno Ring still sets attack delay to a flat 0.1"
                            },
                            {
                                "text": "5-2-0 Inferno Ring, Super Range grants meteor base pierce 1 -> 2"
                            },
                            {
                                "text": "5-0-2 Inferno Ring, Even More Tacks grants meteor dmg 700 -> 1000"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Cryo Cannon has pulled far ahead of similar cheap Bloon control options, while leading into the also quite cheap Icicles which for most of the game offers more Bloon shredding support for cheaper than those other options.",
                        "items": [
                            {
                                "text": "X-X-4 Icicles price increased from $2000 -> 2750"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "Elite Sniper bouncing bullet jump distance has been reduced so that it can't quite bridge small track splits so easily, however to change up use this lost distance has been added back to crosspathing. Elite Defender falls off a lot after midgame & really lacks any true cross pathing choice, so it has had some MOAB damage added to the base attack with the amount improved from crosspathing.",
                        "items": [
                            {
                                "text": "X-3-X Bouncing Bullet - bounce distance reduced slightly 50 -> 40"
                            },
                            {
                                "text": "2-3-0 Bouncing Bullet distance increased back distance: 40 -> 50"
                            },
                            {
                                "text": "0-0-4 Full Auto Rifle gains MOAB bonus to initial hit 0 -> +1"
                            },
                            {
                                "text": "0-0-5 Elite Defender gains MOAB bonus to initial hit 0 -> +2"
                            },
                            {
                                "text": "1-0-5 Elite Defender gains MOAB bonus to initial hit 0 -> +3"
                            },
                            {
                                "text": "2-0-5 Elite Defender gains MOAB bonus to initial hit 0 -> +4"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "Previously the rate increase to Ballistic Missile from crosspath was reduced due to Airburst having enough value on it’s own. This reason still applies as Airburst provides a significant power boost just on it’s own, so all rate increase has been removed from Airburst and applied directly to the base Ballistic Missile to help crosspath diversity slightly.",
                        "items": [
                            {
                                "text": "0-3-0 Ballistic Missile attack rate 1.105 -> 0.9945"
                            },
                            {
                                "text": "0-3-2 Ballistic Missile no longer adds 10% rate"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Some parts of the new Buccaneer paragon were balanced more around a Degree 100 level without properly scaling, so we have fixed up some of this to better fit scaling up to 100 reaching those values, and moved the ability for it and any possible future paragons to also scale in cooldown based on the Degree.",
                        "items": [
                            {
                                "text": "All Paragon Ability Cooldowns will now increase rate in a similar formula to attack speed"
                            },
                            {
                                "text": "Navarch passive grapple hook rate: 0.02 -> 0.06"
                            },
                            {
                                "text": "Navarch active grapple hook cooldown: 20 -> 30"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "More of a straight quality of life, Ace has gained a new special toggle button to allow it to turn back and fly in reverse on any selected flight pattern. As Ground Zero stands out in power, & enough so to make the upgrade to Tsar Bomba questionable, some upgrade cost has been moved out of Tsar Bomba into Ground Zero to make Ground Zero more expensive while not changing Tsar much other than a slight overall cost buff. While Flying Fortress has started to see use in Boss events this feels like more of a cash dump than actual value in the tower. As Spectre value already drops off the later any game gets, the saveup into a ‘better version’ also drops off in value, and so the price should reflect that better.",
                        "items": [
                            {
                                "text": "0-0-0 Monkey Ace can now toggle flight direction for any pattern."
                            },
                            {
                                "text": "X-4-X Ground Zero price increased from $14,000 -> 18,000"
                            },
                            {
                                "text": "X-5-X Tsar Bomba price decreased from $35,000 -> 30,000"
                            },
                            {
                                "text": "X-X-5 Flying Fortress price 100k -> 85k"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Comanche Defense mostly suffered during downtime and so the base Heli at T4 has had some general improvements made to power, but the mini helis have also gained a pierce increase to provide the darts with some improved crowd control",
                        "items": [
                            {
                                "text": "X-X-4 Comanche Defense main heli Missile rate increased 3s -> 1"
                            },
                            {
                                "text": "X-X-4 Comanche Defense main heli dart damage increased 1 -> 2"
                            },
                            {
                                "text": "X-X-4 Comanche Defense mini heli pierce increased 3 -> 4"
                            },
                            {
                                "text": "X-X-5 Comanche Commander main heli dart damage increased 2 -> 3"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "Mortar top path feels too weak for the lead up to the Tier 5, so it along with the T5 have had some general number increases. Additionally the 302 crosspath has failed to ever see a great deal of use compared to much faster firing, to make it easier to to use up power from the DoT this path will now burn through faster",
                        "items": [
                            {
                                "text": "2-X-X Bloon Buster price reduced $650 -> 500"
                            },
                            {
                                "text": "3-X-X Shell Shock price reduced $1100 -> 900"
                            },
                            {
                                "text": "4-X-X The Big One damage increased 5 -> 7"
                            },
                            {
                                "text": "5-X-X The Biggest One center AoE damage increased 20 -> 25"
                            },
                            {
                                "text": "5-X-X The Biggest One outer AoE ceram damage 10 -> 20"
                            },
                            {
                                "text": "3-0-2 Shell Shock allows burn from this tower to tic twice as fast (also expires twice as fast)"
                            },
                            {
                                "text": "4-0-2 The Big One, Burny Stuff damage over time increased from 3 -> 5"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Dartling’s Ray of Doom is far too expensive for general use, so before looking at any further power related buffs we’re lowering the price. Middle Path rocket storm is too strong for something also so buffable so is getting some number changes. Additionally Rocket Storm has always fired through blockers as we didn’t want to cripple placement too much, at this point we feel like it should be strong enough of an upgrade to have to deal with the placement problems that come with blocking objects. Finally as the Laser Shock crosspath is not so favorable for Buckshot path dartlings, we have doubled down on the ‘Focus’ of Focussed Firing to also increase projectile travel distance.",
                        "items": [
                            {
                                "text": "5-X-X Ray of Doom price $95k -> $80k"
                            },
                            {
                                "text": "X-4-X Rocket Storm ability damage reduced 6 -> 5"
                            },
                            {
                                "text": "X-4-X Rocket Storm ability duration reduced 10s -> 8"
                            },
                            {
                                "text": "X-4-X Rocket Storm ability no longer ignores blockers"
                            },
                            {
                                "text": "1-0-3 Buckshot’s Focus Firing crosspath grants distance to projectiles +25%"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "As base Wizard shines in no way & doesn’t lead into any immediately good cheap lower tiers aside from Wall of Fire, the base price is being slightly lowered at the cost of an increase to Wall of Fire. The role Arcane Spike filled at game launch has been replaced as better synergies were learned & added over time. As it's slightly too expensive at some early key points the price is being lowered to hopefully fit some use in at those points. Wizard Prince of Darkness is annoying to position correctly due to the sudden massive radius increase & it also needs a power nerf. So overall here we are moving all of the range increase down into a lower amount at the T3 so that range positioning is known before buying any necromancer upgrades, as well as moving some of the lifespan of the zombies themselves into the lesser used 1xx lifespan crosspath.",
                        "items": [
                            {
                                "text": "0-0-0 Wizard price reduced $400 -> 375"
                            },
                            {
                                "text": "X-2-X Wall of Fire price increased from $900 -> 950"
                            },
                            {
                                "text": "4-X-X Arcane Spike price reduced from $10,900 -> 10,000"
                            },
                            {
                                "text": "X-X-3 Shimmer tower range increased from 40 -> 60"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness tower range reduced 80 -> 60"
                            },
                            {
                                "text": "X-X-4 Necromancer base Zombie travel distance reduced 250 -> 175"
                            },
                            {
                                "text": "1-0-4 Necromancer base Zombie travel distance remains at 250"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness base MOAB travel distance reduced 300 -> 225"
                            },
                            {
                                "text": "1-0-5 Prince of Darkness MOAB travel distance remains at 300"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness base BFB travel distance reduced 200 -> 150"
                            },
                            {
                                "text": "1-0-5 Prince of Darkness BFB travel distance increased from 200 -> 225"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "We wanted some more meaning to middle path being a pierce choice aside from just being cheaper, so we’ve lowered Plasma Blast pierce but reduced its price. Sun Avatar and Robo Monkey have had small price decreases while Dark Knight has had a small increase to line the T3s a little closer up. Dark Champion has had a ceramic bonus added to deal with super ceramics as it is priced only for use in that lategame range, and Legend has had a price reduction to compensate for a rework to the passive ability preventing chained use in deep freeplay.",
                        "items": [
                            {
                                "text": "2-X-X Plasma Blasts pierce 3 -> 2"
                            },
                            {
                                "text": "2-X-X Plasma Blasts price 4500 -> 3000"
                            },
                            {
                                "text": "3-X-X Sun Avatar $22,000 -> 20,000"
                            },
                            {
                                "text": "3-X-X Sun Avatar pierce is unchanged from the above reduction"
                            },
                            {
                                "text": "X-3-X Robo Monkey $8400 -> 8000"
                            },
                            {
                                "text": "X-X-3 Dark Knight $5500 -> 5600"
                            },
                            {
                                "text": "X-X-4 Dark Champion gains bonus damage to Ceramic -> +2"
                            },
                            {
                                "text": "X-X-5 Legend of the Night price reduced $240,000 -> 200,000"
                            },
                            {
                                "text": "X-X-5 LotN passive ability cooldown will carry on if the tower is sold and rebought."
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "Druid base price has been reduced slightly to fit it in a little better as a starter choice. Top path has had a number of buffs to help with both price and consistency in control over regular bloons through higher tiers. Superstorm has had a rather big price buff, however to prevent it locking up games in a boring stall state the blowback distance against ZOMGs has been halved (There may be disagreement here, but we see this Superstorm change as a double positive).",
                        "items": [
                            {
                                "text": "0-0-0 Druid price reduced from $425 -> 400"
                            },
                            {
                                "text": "3-X-X Druid of the Storm price reduced from $1850 to 1650"
                            },
                            {
                                "text": "4-X-X Ball Lightning's Storm blowback at T4 improved minimum 100 -> 150"
                            },
                            {
                                "text": "4-X-X Ball Lightning's Storm blowback at T4 improved maximum 200 -> 250"
                            },
                            {
                                "text": "4-X-X Ball Lightning's Storm pierce increased at T4 from 30 -> 60"
                            },
                            {
                                "text": "4-X-X Ball Lightning price reduced from $5100 -> 4500"
                            },
                            {
                                "text": "4-X-X Ball Lightning now has Cold Front MK freeze chance by default"
                            },
                            {
                                "text": "Cold Front MK now increases chance from 25% -> 100"
                            },
                            {
                                "text": "5-X-X Superstorm price reduced $80k -> 65,000"
                            },
                            {
                                "text": "5-X-X Superstorm blows back ZOMGs for half the distance"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "To improve the consistency of Primary Expertise as a long range cleanup the attack rate has been increased.",
                        "items": [
                            {
                                "text": "5-X-X Primary Expertise attack delay 3s -> 2.5"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "To add a bit of quality of life solving problems with trap needing to fill once before moving to target location, Bloontraps placed off-track never being able to fill, and maybe even to just add some interesting micro, any Bloontraps will now become expired after a short delay when their Engineer has a new target set.",
                        "items": [
                            {
                                "text": "0-1-4 Bloontrap: Picking new target expires current Bloontrap & places new one"
                            }
                        ]
                    },
                    {
                        "tower": "Quincy",
                        "description": "This upgrade didn’t have enough impact so late in the game and upgrade tree.",
                        "items": [
                            {
                                "text": "Lv17 now increases Quincy Explosive Arrow frequently from every 3 -> 2 shots"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "description": "To help Brickell excel a little better at her thematic niche of water support, we have added a small permanent buff to all water in her radius to allow her to give them a bit of extra juice even during ability downtime. Additional minor buffs to her main slow-hard hitting revolver attack as she levels up.",
                        "items": [
                            {
                                "text": "Lv8 Also grants a permanent +1 pierce to all water towers in radius"
                            },
                            {
                                "text": "Lv15 Revolver attack damage increased from 7 -> 9"
                            },
                            {
                                "text": "Lv17 Revolver attack damage increased from 7 -> 11"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "29.4": {
        "release": "2022-01-06",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "We've just pushed through a number of behind the scenes fixes to some background issues that popped up over the holiday break while we begin work on the next full update. There should be no difference for those who were not affected by these issues."
                    }
                ]
            }
        ]
    },
    "29.3": {
        "release": "2022-01-05",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "Only fix is some work around for the Navarch hooks causing invulnerable targets to be created in certain situations. (Apopalypse & Boss events) as well as a failsafe which should prevent it from being a problem if there is any issue. If anyone still had issues related to this in 29.3 please contact support with details"
                    }
                ]
            }
        ]
    },
    "29.2": {
        "release": "2021-12-10",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "Resolved an issue with Collection Events visually not showing bonus rewards"
                    },
                    {
                        "text": "Resolved an issue with some profiles being too large to play co-op"
                    },
                    {
                        "text": "Dartling X-X-2 Powerful Farts should no longer override the damage types of top path & prevent them popping lead"
                    },
                    {
                        "text": "Resolved an issue with Lead Bloons interfering with 4xx Sub damage to other targets"
                    },
                    {
                        "text": "Churchill Lv17 should correctly increase damage with Armour Piercing rounds"
                    },
                    {
                        "text": "Resolved a crash with loading old saves and building Navarch"
                    },
                    {
                        "text": "Resolved missing sounds and FX on Psi"
                    },
                    {
                        "text": "Resolved missing sounds on Boomerang Monkey"
                    },
                    {
                        "text": "Resolved a crash when loading trophy store while offline"
                    },
                    {
                        "text": "Super Mines should no longer lose damage bonuses on mini-explosions when crosspathed"
                    },
                    {
                        "text": "Resolved some issues with off-screen UI being interactable"
                    },
                    {
                        "text": "Resolved a crash that could occur when resyncing on co-op with redeployment"
                    },
                    {
                        "text": "Resolved a crash that could rarely occur at certain height levels when creating a Navarch using Portable lakes"
                    }
                ]
            }
        ]
    },
    "29.1": {
        "release": "2021-12-08",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "New Hero Sales fixed - we can do that now"
                    },
                    {
                        "text": "New Ice Monkey pet fixed - we can do that now"
                    },
                    {
                        "text": "Resolved a number of common crashes"
                    },
                    {
                        "text": "Resolved Challenge Editor now allowing you to scroll to the bottom"
                    },
                    {
                        "text": "Resolved 5-0-2 Glaive Lord not displaying the Candy Rangs cosmetic"
                    },
                    {
                        "text": "Resolved Acid Glue Gunners not dealing damage for the entire glue duration"
                    },
                    {
                        "text": "Resolved your owned medals not always displaying correctly in co-op lobbies"
                    },
                    {
                        "text": "Resolved a number of issues with the new Navarch, including save state problems & towers on the platforms not attacking"
                    },
                    {
                        "text": "Resolved an issue where going into freeplay then immediately exiting back home would not allow that save to start up again after being loaded"
                    }
                ]
            }
        ]
    },
    "29.0": {
        "release": "2021-12-07",
        "items": [
            {
                "title": "Key Features",
                "items": [
                    {
                        "title": "New Paragon Tower: Navarch of the Seas!",
                        "items": [
                            {
                                "text": "In Events intended to run each week, the Boss will appear on a different map to enhance the variety of tactical decisions around economy and placement. Bosses start appearing at Round 40 and the Tier 5 appears at round 120. Each Tier Boss must be defeated within 20 rounds of its appearance or it’s Game Over.\""
                            },
                            {
                                "text": "We enjoyed bringing Navarch into the mix as it covers both military category and water-heavy maps. With an emphasis on boat farming, destroyer spam for early rounds, and pop farming with active use of hooks it makes it a very different and fun road to Paragon. Portable Lake spam in non-ranked games has also led to some good laughs."
                            }
                        ]
                    },
                    {
                        "title": "Co-op Lobbies 2.0!",
                        "items": [
                            {
                                "text": "We have condensed the UI flow of co-op lobby creation, allowing more options to be picked after creating the lobby instead. Number of slots, Map, Difficulty & Mode are now all instead chosen within the lobby itself."
                            },
                            {
                                "text": "Once made public, these elements cannot be changed, in an effort to prevent co-op teams coming together but then bailing if the host changed settings."
                            },
                            {
                                "text": "Along with this Local Join Lobbies will now display player profile/avatar/banner rather than the map, as these feel like more important factors in a local search situation now."
                            },
                            {
                                "text": "Co-op quick match buckets reworked into: Any game, Medium Game & Long Game. The removal of short/easy button is a response to players mostly choosing longer games and in the interest of encouraging players to try more options, even if they have to lean on and learn from their teammates. Short/easy games will still come up in Any searches, and players who want that can Create Match and make that public for other Any players to join."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Intermediate map: Quiet Street",
                        "items": [
                            {
                                "text": "Chill out and enjoy the holiday here! Doubles up Trophy Store tracks Winter Nights (new) or Sunset - Silent really well."
                            },
                            {
                                "text": "Might look easy but side by side paths can create pierce-through issues when you least expect it"
                            }
                        ]
                    },
                    {
                        "title": "New Hero Skin: Ezili - Galaxili skin",
                        "items": [
                            {
                                "text": "And so she’s back, from outer space…"
                            },
                            {
                                "text": "Galaxili’s vibe is very different from her main, we hope you enjoy the way she reaches for the stars"
                            }
                        ]
                    },
                    {
                        "text": "New Achievements: Davids vs Goliath, So Spiiicey Ninja Kiwi, No Harvest, Student Loans, (redacted)"
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Psi Bison pet"
                            },
                            {
                                "text": "Monkeys: Village - Australia Flag"
                            },
                            {
                                "text": "Co-op: Emote - Cool Ben, Emote - Biker Bones Rage"
                            },
                            {
                                "text": "Game & UI: Time Stop Matrix skin, Avatar 52 - Boomerang, Avatar 53 - Pirate Captain, Avatar 54 - Geometric Quincy, Music Track Winter Nights Chilled Mix"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Added 2 new sliders for people to play with in the Challenge Editor. An Ability Cooldown % modifier as well as a Removable Object cost modifier. Maxing out this Removable Cost modifier in either direction will either make all removables Free or completely Disabled for interaction. (So to the No Corn Chimps gang, enjoy!)"
                    },
                    {
                        "text": "Added some stat tracking for players to view on Daily & Advanced Challenges"
                    },
                    {
                        "text": "Round ramping for deep freeplay has been increased on rounds 251, 301, 401 & 501, ramping on round 152 has been pulled back to 151"
                    },
                    {
                        "text": "Continues & Restarts in co-op will now send a message to other players saying that they have been used"
                    },
                    {
                        "text": "New Co-op Callouts: Boss Crusher, Well Rounded, Endless Power!"
                    },
                    {
                        "text": "Leaderboards for co-op boss events will now be able to display up to a 100 total ‘teams’ for each category rather than just 100 ‘players’ for each; we didn’t want the lists to get too long and cumbersome, but most people wanted long lists (hopefully not cumbersome!)"
                    },
                    {
                        "text": "Added individual stat tracking for Heroes & Hero skins to profile. This unfortunately cannot be retroactively recorded, as these were not part of existing stats that we could bring forward. We hope players will see the silver lining and start chasing high stat counts for heroes and alts into the New Year."
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Resolved a number of UI, interaction, and feedback issues. Full disclosure many of these were related to toolkit upgrades and internal changes necessary to support the console development that we are in late stages on. It is critical work and we’re using it to improve flow where possible but changes inevitably make bugs. Thanks for your patience on this and we hope that being able to play 4-player couch co-op on PlayStation and Xbox sometime next year will make up for it."
                    },
                    {
                        "text": "A lot of general polishing improvements made to the new Review Mode"
                    },
                    {
                        "text": "Resolved a number of localization issues"
                    },
                    {
                        "text": "Behind the scenes optimizations in multiple places"
                    },
                    {
                        "text": "Resolved an issue with lives not being restored after a short delay when hitting 0 in sandbox"
                    },
                    {
                        "text": "Resolved issues around Boss events not correctly assigning victory after defeating tier 5"
                    },
                    {
                        "text": "Resolved a number of issues with co-op reconnection"
                    },
                    {
                        "text": "Resolved an issue preventing some android issues loading correctly"
                    },
                    {
                        "text": "Review Mode has been removed from apopalypse as the design for this mode is incompatible with Review at this point"
                    },
                    {
                        "text": "Resolved some high resolution broken UI issues"
                    },
                    {
                        "text": "Resolved an issue with removing 2 trees on Dark Castle at the same time bugging the animation to remain permanently on screen"
                    },
                    {
                        "text": "Odyssey no longer visually shows ‘claimed’ on maps for first time completion"
                    },
                    {
                        "text": "Resolved a rare crash when removing obstacles in maps"
                    },
                    {
                        "text": "Resolved an issue with co-op daily lobbies not listing correct rewards"
                    },
                    {
                        "text": "Resolved an issue with Tech Bots remaining floating on water after selling an Ice Monkey they were floating on"
                    },
                    {
                        "text": "Resolved a UI selection issue that would occur after quitting to menu from a boss event"
                    },
                    {
                        "text": "Medal tooltip text should again display on tap and hold action for iOS and Android"
                    },
                    {
                        "text": "Fixed some visuals on normal version Lych boss models"
                    },
                    {
                        "text": "Resolved an issue with tower vision not always correctly visually updating after nearby removable objects have been removed"
                    },
                    {
                        "text": "Added proper sound effects to the Confetti Pops trophy store item"
                    },
                    {
                        "text": "Added helper text to boss mini leaderboard"
                    },
                    {
                        "text": "Resolved some minor texture resizing issues"
                    },
                    {
                        "text": "Resolved a number of issues with Odyssey custom roundsets"
                    },
                    {
                        "text": "Changing avatar in co-op lobby should now correctly save changes"
                    },
                    {
                        "text": "Fixed text clipping & button alignment related to some UI menus"
                    },
                    {
                        "text": "Resolved an issue with Insta Monkey Loot icon not matching the correct tier background in some menus"
                    },
                    {
                        "text": "Resolved certain symbols not being enterable into webview for login"
                    },
                    {
                        "text": "Reset challenge for individual maps in Odyssey Creator should now work correctly"
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-0-1 & 5-0-1 Ice Monkeys should now be able to stack their debuffs correctly without the Larger Radius crosspath overwriting the effect"
                            },
                            {
                                "text": "1-5-0 Absolute Zero should no longer apply an inconsistently weaker Permafrost"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "1-0-3 Signal Flare Camo removal AoE is now affected by the 1xx Bigger Blast crosspath"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-5-X Wizard Lord Phoenix permanent phoenix should no longer sometimes not take external buffs depending on build order"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "0-2-2 Caltrops gain distraction chance from crosspath"
                            },
                            {
                                "text": "0-2-3 Sticky Bombs gain distraction chance from crosspath"
                            },
                            {
                                "text": "X-X-3 Ninja Monkey Flash Bomb should no longer apply stun visuals to MOABs since it does not stun them"
                            },
                            {
                                "text": "Ninja Paragon sticky bomb attack should now correctly create an aoe when it destroys the target"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "5-X-X Superstorm no longer behaves differently in sandbox and real games"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-X-5 Monkeyopolis should now always benefit from the cash buff from another X-X-4 Village"
                            }
                        ]
                    },
                    {
                        "tower": "Captain Churchill",
                        "items": [
                            {
                                "text": "Resolved some background rogue spaghetti impacting performance; nothing worse than rogue spaghetti in a tank"
                            }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "items": [
                            {
                                "text": "Lv7 Ezili Sacrificial Totem now functions independently and stacks with Village buffs"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "items": [
                            {
                                "text": "Lv13 should now correctly increase stun duration"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "The \"Windows\" key should no longer be assignable as a hotkey due to issues caused with its normal functions"
                    },
                    {
                        "text": "Resolve a number of input issues raised in the latest Unity update"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "Just a cool/fun factor and “because it should” reasoning here honestly, not necessarily necessary but we think it fits. Separately, we noticed the Glaive Dominus press knockback’s actual explosion was only dealing a fraction of the damage of any other part on this upgrade, this combined with it pushing targets out of the tower’s radius made it somewhat stally so we juiced up the power of this explosion significantly.",
                        "items": [
                            {
                                "text": "5-0-1 Long Range Rangs now increases area of Orbits by 15%"
                            },
                            {
                                "text": "Paragon Press Attack: Explosion damage increased from 100 -> 2500"
                            },
                            {
                                "text": "Paragon Press Attack: Explosion bonus damage to boss + 5000"
                            },
                            {
                                "text": "Paragon Press Attack: Fire DoT increased from 100 -> 500"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "Since glue gunners can’t work together as we all want them to and we could not bite that off for this update, for now have decided to do more for the top and middle paths themselves. Bloon Solver’s single target power feels like it ramps slowly on larger targets, and while it is mainly a grouped cleanup, we decided to give a nudge here with bonuses to large targets to help with higher round falloff.",
                        "items": [
                            {
                                "text": "4-X-X Bloon Liquefier DoT deals +1 damage to ceramic"
                            },
                            {
                                "text": "5-X-X Bloon Solver DoT deals +1 damage to MOAB Class"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "The logic on a Lead crosspath not being required to give Lead popping to an attack based on something weak against Lead has never sat right, so we’re finally sorting that out and making sub a little angrier. Also, increasing the strength of the basic Ballistic Missile attack on the Pre-Emptive Strike sub, so that it can bring a little more to the table after the initial single hit on each spawn.",
                        "items": [
                            {
                                "text": "4-0-0 Reactor sub damage type changed from Normal -> Shatter"
                            },
                            {
                                "text": "4-2-0 Reactor sub damage type remains as Normal type"
                            },
                            {
                                "text": "Pre-Emptive Strike missile damage increased from 1 -> 10"
                            },
                            {
                                "text": "Pre-Emptive Strike missile ceram damage increased from 10 -> 15"
                            },
                            {
                                "text": "Pre-Emptive Strike missile MOAB damage increased from 10 -> 15"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "The MAD has come to stand out far too much in any Boss situation, often feeling like a crutch that must be used due to how perfectly it fits the Boss situation even though it wasn’t appreciated a great deal before that content was added. We’ve tried to pull it back in this situation with lowered damage per hit while making up for some of this lowered damage with increased pierce. The bottom path Bloon Exclusion Zone on the Dartling has had a lot of talk about damage types, with points raised on the viability here due to the high price. It did recently get a strong buff from the T3 up, but in order to work more into other synergies we have decided to finally do a damage type change here as well, starting from early on in the path.",
                        "items": [
                            {
                                "text": "X-5-X MAD damage to MOABs reduced from 750 -> 550"
                            },
                            {
                                "text": "X-5-X MAD pierce increased from 8 -> 12"
                            },
                            {
                                "text": "X-X-2 Powerful Darts damage type from Sharp -> Shatter"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "As Wall of Fire still stands out too much for a Tier 2 upgrade, it is seeing a nerf with some power being shifted further up to the T3 instead. In contrast, Fireball continues to underwhelm, so is seeing an initial buff plus a larger buff at T3.",
                        "items": [
                            {
                                "text": "X-2-X wall of fire tic rate decreased from 0.1s -> 0.15s"
                            },
                            {
                                "text": "X-3-X wall of fire tic rate increased back to current 0.1s"
                            },
                            {
                                "text": "0-2-1 pierce bonus to wall of fire reduced from 5 -> 4"
                            },
                            {
                                "text": "X-1-X Fireball fireball's attack delay reduced from 3s -> 2.2"
                            },
                            {
                                "text": "X-3-X Dragon's Breath fireball's damage increased from 3 -> 9"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "While having fun with the new Druid of the Vine changes, we want this new power to scale further with the T5. We are also starting to look at moving some cash farming potential with Jungle’s Bounty to favour Obyn as the ‘Druid Hero’ more than Benjamin who is meant to focus more on Banks - more on that further down in the Obyn section.",
                        "items": [
                            {
                                "text": "X-4-X Jungle Druid range reduced from 55 -> 45"
                            },
                            {
                                "text": "X-5-X spirit of the forest thorn pile damage increased from 1 -> 5"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "While we feel speed interactions for Spike Storm was a necessary evil for performance related concerns, we did not want to kill off self synergy contained local to the tower, so we are trying out an exception to this rule for the 042 crosspath. Additionally, due to the large annoyance in using spike storm in bosses due to the persistent rounds a boss will last for, Spike Storm will now be allowed to carry over one round before being cleaned up. Also, Super Mines gets damage - to stand it out in Bosses more.",
                        "items": [
                            {
                                "text": "0-4-2 Spike Storm ability will benefit from the xx2 crosspath start of round speed increase"
                            },
                            {
                                "text": "X-4-X Spike Storm now allows spikes created from the ability to last past the end of 1 round"
                            },
                            {
                                "text": "5-X-X Super Mines Base Spike damage increased from 10 to 50"
                            },
                            {
                                "text": "5-X-X Super Mines Base Spike ceramic bonus increased from 6 -> 20"
                            },
                            {
                                "text": "5-X-X Super Mines Base Spike fortified bonus increased from 1 -> 15"
                            },
                            {
                                "text": "5-X-X Super Mines mini explosion damage increased from 10 to 20"
                            },
                            {
                                "text": "5-X-X Super Mines mini explosion ceram bonus of 10"
                            },
                            {
                                "text": "5-X-X Super Mines mini explosion fort bonus of 5"
                            },
                            {
                                "text": "5-X-X Super Mines Large Explosion ceramic/moab bonus reduced from 2 -> 0"
                            },
                            {
                                "text": "5-X-X Super Mines Large Explosion fortified bonus increased from 1 -> 250"
                            },
                            {
                                "text": "Editorial: There is no such thing as any kind of ‘max spike limit’ and never has been. Just putting this out there, as we don't know who started that rumor but certainly don’t need to keep spreading it."
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Engineer’s bottom 2 paths have a heavier support focus, so to start them off a bit easier we have shifted some starting cost out and into the non-supportive path. For the sake of further improved crosspath potential, we have also re-envisioned the ‘Larger Service’ crosspath as giving smarter service as well in the form for targeting for Bloontrap & Cleansing Foam",
                        "items": [
                            {
                                "text": "Base price reduced from $450 > 400"
                            },
                            {
                                "text": "3-X-X Sprockets price increased from $525 > 575"
                            },
                            {
                                "text": "0-3-0 Cleansing Foam gains targeting for the Cleansing Foam"
                            },
                            {
                                "text": "0-1-4 Bloontrap gains targeting for the Bloontrap from the Larger Service crosspath"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "description": "Similar to Wall of Fire, Gwendolin’s Cocktail gains too much strength in grouped situations too early on and so this power has been pushed to higher levels.",
                        "items": [
                            {
                                "text": "Lv3 Cocktail of Fire’s pierce refresh rate slowed from 0.1 -> 0.2"
                            },
                            {
                                "text": "Lv3 Cocktail is no longer able to innately ignore Purple Bloons"
                            },
                            {
                                "text": "Lv7 Cocktail of Fire’s pierce refresh rate increased back again from 0.2 -> 0.1"
                            },
                            {
                                "text": "Lv16 Cocktail of Fire can once again damage Purple Bloons"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "description": "As a ‘druid buffing’ hero, Obyn has in actuality been a bottom path druid buffing hero, so we’ve tweaked a couple extra levels to give more path specific bonuses to other druid paths that weren’t benefiting as much from his wizened presence, regardless of whether your Obyn says “Fries” or “Clive”. Also since we worked out how to do more advanced targeting for the engineer anyway, this has been applied to Wall of Trees too. We considered brambles as well but prefer the early game variety, didn’t want brambles and WoT to appear at the same spot, and didn’t want to overcomplicate with 2 targeted placements, and WoT is clearly the more important.",
                        "items": [
                            {
                                "text": "Lv5 All your Druid of the Jungle have increased range +20%"
                            },
                            {
                                "text": "Lv9 All your Druid of the Storm projectile radius increased +20%"
                            },
                            {
                                "text": "Lv9 All your Druid of the Storm have MOAB damage +1"
                            },
                            {
                                "text": "Lv10 Wall of Trees now gains a Set Target option"
                            },
                            {
                                "text": "Lv12 All your Magic Monkey abilities cooldown 5% faster"
                            }
                        ]
                    },
                    {
                        "tower": "Psi",
                        "description": "Psi’s Psionic Scream often didn’t feel as satisfying if a lot of the blown back targets rolled a minimum distance, so we have upped the minimum distance that it can blow back",
                        "items": [
                            {
                                "text": "Lv10 Psionic Scream minimum blowback increased from 10 -> 50"
                            }
                        ]
                    },
                    {
                        "title": "Monkey Knowledge",
                        "description": "Gorgon Storm clearly released overtuned for a single knowledge point due to the way it works with large numbers of projectiles applying consecutive stuns. It will still be extremely powerful even after this, but should be harder to achieve an actual permastall on MOABs most of the time.",
                        "items": [
                            {
                                "text": "Gorgon Storm stun duration on MOAB class bloons reduced from 0.5 -> 0.1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "28.3": {
        "release": "2021-10-21",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Lych Soul HP has been increased by 1000*tier for both normal and Elite. This is to enhance the scaling formula to slightly prevent lower tiers being 1shot so quickly without changing the higher tiers too much."
                    },
                    {
                        "text": "Mortar Monkey xx5 Blooncineration should again strip camo from DDTs that it hits"
                    },
                    {
                        "text": "Resolved an issue on Windows builds preventing entering text in text fields"
                    },
                    {
                        "text": "Resolved a crash on challenge victory/defeat when using continue"
                    },
                    {
                        "text": "Resolved some issues causing a dead game state when opening the store in co-op boss events"
                    },
                    {
                        "text": "Resolved some lobby bugs related to entering Boss Lobby using a deep link"
                    },
                    {
                        "text": "Co-op panel show no longer run slower just because of game connection running slow"
                    },
                    {
                        "text": "Resolved an issue sometimes preventing co-op rejoin panel from appearing to allow players to rejoin"
                    },
                    {
                        "text": "Resolved an issue in boss co-op where crashing/closing program during a desynced round would then prevent you from properly rejoining"
                    },
                    {
                        "text": "Resolved an issue with the NK login webview from loading correctly in some cases for MacOS & iOS"
                    },
                    {
                        "text": "Resolved a number of crashes & exceptions"
                    }
                ]
            }
        ]
    },
    "28.2": {
        "release": "2021-10-20",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Resolved an at launch crash on some older Mac versions. Please note that 10.12 (MacOS Sierra) is no longer supported due to an incompatibility with Unity. 10.13 is now the minimum supported MacOS version."
                    },
                    {
                        "text": "Bug: Touch screens on some laptop devices have stopped working with the latest version of Unity, unfortunately a fix for the engine is required before this can be fixed so this will likely not be resolved until v29"
                    },
                    {
                        "text": "Lych will no longer drain and heal from the use of powers in non-ranked Boss Event (Thrive, Time Stop, Monkey Boost, etc)"
                    },
                    {
                        "text": "Mortar Monkey X-X-5 Blooncineration DoT should correctly tic each 0.75s"
                    },
                    {
                        "text": "Boss UI no longer blocks interacting with anything through it"
                    },
                    {
                        "text": "Fixed Lych’s Death Animation not playing correctly"
                    },
                    {
                        "text": "Resolved an issue with force closing the app in Odyssey resetting progress"
                    },
                    {
                        "text": "Resolved a case in which the choose hero button would not function"
                    },
                    {
                        "text": "Resolved a number of save loaded and co-op resync issues"
                    },
                    {
                        "text": "Resolved a common crash on the main menu for some iOS devices"
                    },
                    {
                        "text": "Added a visual to the bottom of co-op leaderboards to clarify when the max of 100 players are listed"
                    },
                    {
                        "text": "Resolved an issue where Impoppable games in co-op were no longer able to go public"
                    },
                    {
                        "text": "Fixed some projectiles clipping through the bridge on The Cabin"
                    },
                    {
                        "text": "Resolved some placement issues on The Cabin"
                    },
                    {
                        "text": "Resolved a number of visual UI issues"
                    },
                    {
                        "text": "Resolved an issue with some profile badges not displaying on profiles directly depending on the location the profile is being viewed from"
                    },
                    {
                        "text": "Robo Monkey no longer randomly gains Camo Prio without the 0-3-2 crosspath"
                    },
                    {
                        "text": "5-0-2 Boomerang no longer loses orbiting glaive trails at 5-0-2 crosspath"
                    },
                    {
                        "text": "Psi’s damage should no longer fail to deal damage to MOABs due to rounding errors"
                    },
                    {
                        "text": "Resolved an issue where changing your banner within a co-op lobby would not save"
                    },
                    {
                        "text": "Resolved an issue where restarting in sandbox would delete any save files on that map"
                    },
                    {
                        "text": "Resolved some issues allowing placement of multiple heroes in challenges"
                    },
                    {
                        "text": "Banana Farm xx5 Monkey Wall Street should produce the correct number of lives now"
                    },
                    {
                        "text": "Resolved an issue where searching for profanity in the challenge browser would immediately crash the game"
                    },
                    {
                        "text": "Resolved an issue where 150 Spirit of the Forest track vines did not pop lead"
                    },
                    {
                        "text": "Resolved an issue with Overlock throwing easter eggs with Vampire Hunter projectiles"
                    },
                    {
                        "text": "Resolved some player stats being downloaded twice"
                    },
                    {
                        "text": "Resolved some cursor size change issues with Mac"
                    },
                    {
                        "text": "Resolved an issue where people could amusingly run Twitch Polls during the tutorial and ban Quincy or Dart Monkey from use"
                    },
                    {
                        "text": "Left Click can no longer be assigned as a hotkey (lol)"
                    },
                    {
                        "text": "Resolved a number of issues with SHIFT/ALT/CTRL used as hotkeys"
                    },
                    {
                        "text": "Resolved a number of other minor crashes"
                    }
                ]
            }
        ]
    },
    "28.1": {
        "release": "2021-10-14",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Stonks Thrive trophy item skin is now available, we delayed this from the initial release due to some last minute issues we were having with it."
                    },
                    {
                        "text": "Resolved a number of exceptions in various areas that were causing game crashes"
                    },
                    {
                        "text": "Avast seems to have started deleting the game with a false positive, consider uninstalling Avast (you should also be able to enter the quarantine and allow it as an exception)."
                    },
                    {
                        "text": "Double Cash icon no longer displays for the entire party in co-op if one player has it enabled"
                    },
                    {
                        "text": "Resolved a crash on beating daily challenges"
                    },
                    {
                        "text": "Resolved a crash when setting Heli patrol points to a distance so small it was dividing by zero"
                    },
                    {
                        "text": "Resolved various visual problems with UI"
                    }
                ]
            }
        ]
    },
    "28.0": {
        "release": "2021-10-13",
        "items": [
            {
                "title": "Key Features",
                "items": [
                    {
                        "title": "Co-op Boss Events!",
                        "items": [
                            {
                                "text": "Play with friends or open up a public match and find how much fun co-op bosses can be"
                            },
                            {
                                "text": "Don’t be Player 3 - coordinate farming and placement to tip the fun:frustration ratio to the fun side (frunstration isn’t a word but should be)"
                            }
                        ]
                    },
                    {
                        "title": "Ranked Boss leaderboards!",
                        "items": [
                            {
                                "text": "Not content with just co-op Bosses, we wanted to give extra challenge through ranked play"
                            },
                            {
                                "text": "While not a race, Ranked Boss games time your play while the Boss is onscreen through the completion of the round on which the Tier 5 Boss is popped"
                            },
                            {
                                "text": "Leaderboards are unique for 1p, 2p, 3p, and 4p so you can show up on multiple leaderboards but you will only receive rewards for your best normal and best elite placement"
                            },
                            {
                                "text": "Note there are timer penalties for stalling, so don’t try a stalling strat. Careful with those Cripple Snipers; put them on First."
                            }
                        ]
                    },
                    {
                        "title": "New Boss added - Lych, the Gravelord",
                        "items": [
                            {
                                "text": "While some BTD fans want to see all of the known BMC bosses, we wanted to make it clear that we are committed to introducing new content and mechanics to keep the BTD universe dynamic and challenging"
                            },
                            {
                                "text": "True to its name, Lych draws power from others, draining buffs from Monkey Towers and stealing any Monkey’s lifeforce when sold to heal itself (avoid buff Alchemists and other familiar activated boosts!)"
                            },
                            {
                                "text": "When damaged to a Skull level on its health bar, the Lych is ethereally immobilized as it revives undead MOAB class Bloons, releases the stiletto-fast Lych-Soul, and steals lives as long as it remains ethereal"
                            },
                            {
                                "text": "Revivified MOABs and the Lych-Soul must be destroyed before Lych will return to normal state"
                            },
                            {
                                "text": "Due to their sheer awesomeness, Heroes are immune to the Lych’s buff drain effect"
                            },
                            {
                                "text": "The Lych can revive all MOAB class Bloons besides BADs"
                            }
                        ]
                    },
                    {
                        "title": "New Paragon - Ascended Shadow Ninja",
                        "items": [
                            {
                                "text": "To combat this new evil, the Ninja Paragon unleashes its triple mastery on Boss Bloons"
                            },
                            {
                                "text": "Painfully expensive but deals incredible damage, especially at high Degree"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "More New Awesomeness",
                "items": [
                    {
                        "text": "New Beginner Map - The Cabin, perfect for a dark, spooky night’s play"
                    },
                    {
                        "text": "New Hero Skin - Viking Sauda brings all the axetasticness"
                    },
                    {
                        "text": "New Achievement - Perfect Paragon"
                    },
                    {
                        "text": "New Boss Music track - Onslaught will play with Lych events but is not exclusive to Lych (not going to be a new music track per Boss, for game footprint issues)"
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Sentai Churchill Scifi Drone pet"
                            },
                            {
                                "text": "Monkeys: Monkey Village Canada flag, Glue Gunner Rat pet, Buccaneer Narwhal pet, Bats Upgrade FX"
                            },
                            {
                                "text": "Co-op: Pleeeease Monkey Emote, Panic Monkey Emote"
                            },
                            {
                                "text": "Game & UI: Sun Temple Banner, Best Ben avatar, Action Psi avatar, Community Avatar Lead Zeppelin by waywardzuck"
                            }
                        ]
                    },
                    {
                        "title": "Limited Time only",
                        "items": [
                            {
                                "text": "Hockey Mask limited Halloween avatar"
                            },
                            {
                                "text": "Vampire Hunter Engineer projectiles swap"
                            },
                            {
                                "text": "Jack-o-Lantern ZOMG"
                            },
                            {
                                "text": "Vampire Cape Bloons"
                            },
                            {
                                "text": "Haunted House music track"
                            },
                            {
                                "text": "Ghosts’n’Candy Banner"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Quality of Life & Other Additions",
                "items": [
                    {
                        "text": "Added a ‘Review Map’ option to all game modes which will allow you to look over your towers after any victory or defeat, mainly to look at Monkey pop counts for bragging rights or to optimize strategies"
                    },
                    {
                        "text": "Load Checkpoint option has now also been added to the Pause Menu during Boss Events"
                    },
                    {
                        "text": "Rich presence messages updated for player created odysseys"
                    },
                    {
                        "text": "Rich presence added for bosses"
                    },
                    {
                        "text": "Highest round stats added to profiles for both CHIMPS and Deflation"
                    },
                    {
                        "text": "Added Refresh button to race leaderboard"
                    },
                    {
                        "text": "Races now have a pause delay which will incur a penalty for pausing too frequently; the idea of a race is a strategic sprint - one fast run with your best thinking in the moment"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Avatar 44 Description to include the correct name LV-223_Deacon."
                    },
                    {
                        "text": "When players quit to menu (rather than crashing) they will now immediately be removed and have their resources distributed instead of waiting for a rejoin."
                    },
                    {
                        "text": "Various fixes for co-op rejoining & host migration"
                    },
                    {
                        "text": "Co-op callouts should no longer display on the defeat screen"
                    },
                    {
                        "text": "Added a small double cash icon to the in-game cash display to show when it is active"
                    },
                    {
                        "text": "Should now be less content required to be downloaded between versions"
                    },
                    {
                        "text": "Collection event bonus is now shared from the Host in co-op"
                    },
                    {
                        "text": "Free Race attempts will now prevent a Race Pass from being used"
                    },
                    {
                        "text": "Custom user banners now show in more locations"
                    },
                    {
                        "text": "Some general UI & Localization fixes"
                    },
                    {
                        "text": "Towers should no longer be redistributed to removed co-op players when multiple players are removed from any co-op session"
                    },
                    {
                        "text": "Loading a boss save will now pause"
                    },
                    {
                        "text": "Optimized music tracks behind the scenes"
                    },
                    {
                        "text": "Game will now on launch check if a co-op lobby actually still exists before showing the rejoin message on main menu"
                    },
                    {
                        "text": "Resolved low-resolution Powers icon as challenge reward"
                    },
                    {
                        "text": "Round-send flag and comparison timer fixed in Race mode"
                    },
                    {
                        "text": "Resolved an issue that was being really mean"
                    },
                    {
                        "text": "Paragon cost on the upgrades screen will now update based on game difficulty"
                    },
                    {
                        "text": "Resolved a few issues with Boss Music Tracks playing/not playing at correct times"
                    },
                    {
                        "text": "Obsolete patch notes button removed from main menu"
                    },
                    {
                        "text": "Resolved an issue where Paragons were displaying as 6-0-0 upgrades on victory callouts"
                    },
                    {
                        "text": "In Challenge Editor Reloading Last Round then returning to menu immediately will no longer delete the save"
                    },
                    {
                        "text": "Insta Monkey Menu now loads correctly if viewed in game"
                    },
                    {
                        "text": "Boss event state is now saved immediately when Boss is defeated."
                    },
                    {
                        "text": "Nonfunctional close button removed from *Waiting for end of round* message box."
                    },
                    {
                        "text": "Buff Icons now show on Monkey Farmers"
                    },
                    {
                        "text": "Resolved some final issues with the sword on Ravine so Setk can get his black border"
                    },
                    {
                        "text": "Hero Selection for Boss Events is now not displayed as an option if no selected hero is allowed under the challenge rules"
                    },
                    {
                        "text": "Muting players while they are emoting will no longer cause some emotes to loop"
                    },
                    {
                        "text": "Resolved an issue where creating a Paragon with a tower inside a Heli during redeployment or Door Gunnerisim would cause a crash"
                    },
                    {
                        "text": "Resolved a co-op softlock that could occur when playing with other players on a bad connection"
                    },
                    {
                        "text": "Removing camo from a Neon skin DDT when other players in the match have the shark skin will no longer change the DDT into a Shark skinned version"
                    },
                    {
                        "text": "Lotus flowers once again remember their ready state when loading a save"
                    },
                    {
                        "text": "Degree 1 paragons will now also deal double damage to Elite Bosses. Previously this bonus was not applying until at least Degree 2"
                    },
                    {
                        "text": "Co-op resync can no longer re-assign map areas to a disconnected+removed players"
                    },
                    {
                        "text": "Resolved some issues with not receiving mini race rewards"
                    },
                    {
                        "text": "Resolved an issue with profiles loading incorrectly in offline mode"
                    },
                    {
                        "text": "Resolved a softlock that could occur with 2 players attempting to rejoin into the same co-op lobby at the same time"
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "5-0-2 Glaive Lord with Red Hot Rangs crosspath will now use the red-tipped glaives projectile for rotating glaives"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Mortar Monkey's new decamo AoE at xx2 should no longer apply to DDTs without Paint Stripper MK"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Named monkey stats will track cash generation on super monkeys now."
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-3-X Unstable Concoction damage again increases for Fortified Bloon variants"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "First child of Bloons popped by Spirit of the Forest should take damage again"
                            },
                            {
                                "text": "Reworked some functionality around chinooking a Spirit of the Forest"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-3-X Monkey Bank resolved an issue where fractional cash amounts could sometimes round up instead of down"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "Alright, Sentry Paragon is now a Champion."
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "items": [
                            {
                                "text": "Resolved issues with Gwendolin Lv17 firestorm’s Heat it Up buff"
                            }
                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "Strikers Parachute drop placement animation should no longer break if you sell Striker after using it, and place him again"
                            },
                            {
                                "text": "Resolved an issue that could cause Strike Jones’ attack animations to permanently break"
                            }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "items": [
                            {
                                "text": "Resolved Benjamin’s Trojan displaying the wrong cash gain sometimes"
                            }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "items": [
                            {
                                "text": "Resolved an issue that could cause Ezili’s attack animations to permanently break"
                            },
                            {
                                "text": "Resolved an issue where Ground Zero could cause Ezili’s MOAB Hex to not remove children"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "items": [
                            {
                                "text": "Lv3 Rallying Roar buff will now pause between rounds"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Joan of Arc Adora’s ball of light should display correctly at all times"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "items": [
                            {
                                "text": "Lv3 Navel Tactics buff will now pause between rounds"
                            }
                        ]
                    },
                    {
                        "tower": "Psi",
                        "items": [
                            {
                                "text": "Psi should now inherit Monkey Town buffs more consistently"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Added 2 extra cursor options which will increase size, note that these options will result in a less precise cursor under intensive situations."
                    },
                    {
                        "text": "Holding a tower hotkey down once again allows you to place multiples"
                    },
                    {
                        "text": "Resolved some slow mouse scroll issues in Challenge Editor"
                    },
                    {
                        "text": "A bug; Due to some changes to the latest version of the engine, issues have risen with the first click returning the game to the foreground after being backgrounded. We have put our own temporary fix in place for now which may mostly resolve this for the time being but are also in talks with Unity about a true resolution."
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "title": "Camo Prioritization",
                        "description": "Instead of saying the same thing each time; many specific crosspaths that add a ‘camo specialty’ to a tower end up being viewed as rather inferior crosspaths due to camo being quite available to pick up through other methods. To give these upgrades more use even with other forms of camo reveal in play, we have added a brand new Camo Prioritization option that is added to the towers when taking this crosspath. When enabled this filter combines the selected target method with Camo Prioritization (e.g. Strong Camo would work through all Camos in strength order, then revert to normal Strong until any new Camos show up). Individual Monkeys are called out below.",
                    },
                    {
                        "title": "Stall Farming",
                        "description": "Instead of saying the same thing each time; many specific crosspaths that add a ‘camo specialty’ to a tower end up being viewed as rather inferior crosspaths due to camo being quite available to pick up through other methods. To give these upgrades more use even with other forms of camo reveal in play, we have added a brand new Camo Prioritization option that is added to the towers when taking this crosspath. When enabled this filter combines the selected target method with Camo Prioritization (e.g. Strong Camo would work through all Camos in strength order, then revert to normal Strong until any new Camos show up). Individual Monkeys are called out below.",
                    },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-X-2 Enhanced Eyesight now grants Dart Monkey the new Camo Prioritization filter"
                            },
                            {
                                "text": "Dart Paragon has had a slight performance change to improve bit rate issues when streaming. This will not change power in any way"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "While the higher tiers are quite good, Bionic Boomerang does not feel like a strong stepping ston, and 052 is still mostly considered an inferior crosspath due to base tower damage already being high, so Bionic’s ability increase to damage has been increased further. MOAB Domination’s MOAB damage has been increased to give it a little more power than just stalling & finally we’re tweaked up some of the numbers on Boomerang Paragon’s damage to even out some parts of it that were not contributing effectively",
                        "items": [
                            {
                                "text": "X-3-X Bionic Boomerang MOAB damage bonus increased from 1 -> 2"
                            },
                            {
                                "text": "0-5-2 Red Hot Rangs ability bonus damage increased from 8 -> 10"
                            },
                            {
                                "text": "X-X-5 MOAB Domination damage on MOAB throw per hit increased from 20 -> 25"
                            },
                            {
                                "text": "Boomerang Paragon burn DoT damage tic increased from 50 -> 100"
                            },
                            {
                                "text": "Boomerang Paragon Shred DoT damage tic increased from 250 -> 750"
                            },
                            {
                                "text": "Boomerang Paragon rotating glaive base damage increased from 20 to 42"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "While MOAB Maulers are a current popular meta the base bomb shooter is unaffordable early on for the little contribution it can make at early levels when not much pierce is really needed, so some cost has been moved out of the base upgrade and into the Mauler with an overall price increase to Mauler. We’ve acknowledged that Frag Bombs have felt like an inconsistent crosspath both in what they add to the tower and what they lose when upgraded further on their own path, so now in addition to frags popping Black Bloons xx2+ will allow all attacks from the tower to pop Black.",
                        "items": [
                            {
                                "text": "0-0-0 Bomb Shooter base price decreased from $600 -> 525"
                            },
                            {
                                "text": "0-3-0 MOAB Mauler price increased from $900 -> 1,100"
                            },
                            {
                                "text": "0-0-2 Frag Bombs upgrade now grants ‘fraggy explosions’ which allows all explosions from the tower to pop Black Bloons"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Embrittlement being a ‘camo reveal’ has not been viable due to the price, so T2 Metal Freeze has been granted camo detection to allow this tower to somewhat hold off camos while it saves up to become a reveal. Additionally Embrittlement will now be able to target and debuff MOAB Bloons for the smaller damage bonus without needing to be upgraded to T5. Additionally some smaller price nerfs have been made along the lower tiers of bottom path as each of these upgrades has been standing out a little much.",
                        "items": [
                            {
                                "text": "2-X-X Metal Freeze can now target camo"
                            },
                            {
                                "text": "2-X-X Metal Freeze price increased from $300 -> 350"
                            },
                            {
                                "text": "2-X-X name change from ‘Metal Freeze’ to 'Cold Snap'"
                            },
                            {
                                "text": "4-X-X Embrittlement can now target and debuff MOABs but not slow them"
                            },
                            {
                                "text": "X-X-1 Larger Radius price increased from $100 -> 175"
                            },
                            {
                                "text": "X-X-2 Re-Freeze price increased from $200 -> 225"
                            },
                            {
                                "text": "X-X-3 Cryo Cannon price increased from $1750 -> 1950"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "No wrist enjoys spamming cash drops, so sniper’s random cash drop has been standardized around a higher amount with slower cooldown for an overall buff. As middle path sniper has been feeling to be in a good spot with alchemist buffs, but other uses of sniper shrapnel weak due to lack of alchemist buff, we have decided to swap alchemist buffability over from the number of bounces to the power of the shrapnel itself.",
                        "items": [
                            {
                                "text": "X-2-X Night Vision Goggles now grants Sniper Monkey the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-4-X Supply Drop: Cash Generating abilities now have a 3 minute timeout"
                            },
                            {
                                "text": "Sniper X-4-X cooldown increased from 60s -> 90"
                            },
                            {
                                "text": "Sniper X-4-X cash produced increased from a range of $500-1000 to a flat $1200"
                            },
                            {
                                "text": "Sniper X-5-X cash produced increased from a range of $1500-3000 to a flat $3000"
                            },
                            {
                                "text": "0-2-0 Shrapnel Shot, shrapnel on all crosspaths is now able to receive any external buffs"
                            },
                            {
                                "text": "0-3-0 Bouncing Bullet is no longer able to receive external buffs to the number of bounces"
                            },
                            {
                                "text": "0-0-4 Full Auto Rifle price reduced from 4750 -> 4250"
                            },
                            {
                                "text": "0-0-4 Full Auto Rifle dmg type changed from Normal -> Sharp"
                            },
                            {
                                "text": "0-0-5 Elite Defender dmg type changed from Normal -> Sharp"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Bottom crosspath feels behind compared to others here, so in addition to the new Camo Prioritization filter Longer Range on this path will now also grant bonus pierce. Favored Trades stacking was never intended to be a feature but we previously updated the description to support the stacking instead of changing functionality, so this has now been corrected.",
                        "items": [
                            {
                                "text": "X-X-1 Longer Range now also grants +1 pierce to most Buccaneer projectiles"
                            },
                            {
                                "text": "X-X-2 Crow’s Nest now grants Buccaneer the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-X-4 Favoured Trades no longer stacks the sellback rate buff to other towers."
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Monkey Ace has had an overall rework to a lot of different upgrades in order to highlight the x1x Exploding Pineapples upgrade as a buff to all explosives, in addition to this Spectre has been reworked to have less base pierce but a higher damage bonus to Ceramic Bloons in order to make the new option of a pierce crosspath more viable while also allowing it to carry on better into the endgame against Super Ceramics.",
                        "items": [
                            {
                                "text": "3-0-0 Fighter Plane Missiles pierce increased from 3 -> 4"
                            },
                            {
                                "text": "4-0-0 Operation Dart Storm Missiles pierce remains 4"
                            },
                            {
                                "text": "3-1-0 Fighter Plane Missiles pierce increased from 3 -> 6"
                            },
                            {
                                "text": "3-1-0 Fighter Plane Missiles radius increased from 30 -> 34.5"
                            },
                            {
                                "text": "4-1-0 Dart Storm Missiles pierce increased from 4 -> 6"
                            },
                            {
                                "text": "5-1-0 Sky Shredder Missiles pierce increased from 5 -> 7"
                            },
                            {
                                "text": "0-0-4 Spectre Dart damage to ceramics increased from 2 -> 4"
                            },
                            {
                                "text": "0-0-4 Spectre Dart pierce reduced from 30 -> 15"
                            },
                            {
                                "text": "0-0-4 Spectre Bomb damage to ceramics increased from 3 -> 5"
                            },
                            {
                                "text": "0-0-4 Spectre Bomb pierce reduced from 60 -> 30"
                            },
                            {
                                "text": "0-1- Spectre Bomb pierce reduced from 60 -> 45"
                            },
                            {
                                "text": "0-1-4 Spectre Bomb radius increased from 20 -> 23"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "For similar reasons to Sniper, Chinook is a pretty annoying tower to farm with, so its ability has been standardized into a single producing both a life & a cash crate on a longer cooldown; the cash production of this has gone up while the life generation has been reduced as the power stood out too much compared to any other life generation method. MOAB Shove has had a missile attack similar to xx4’s mini comanches added to provide this path something extra for when the mini comanche are not active.",
                        "items": [
                            {
                                "text": "Heli X-4-X Support Chinook: Cash Generating abilities now have a 3 minute timeout"
                            },
                            {
                                "text": "Heli X-4-X Support Chinook’s Supply Drop now drops life and cash crates together"
                            },
                            {
                                "text": "Heli X-4-X Support Chinook’s Supply Drop cooldown increased from 60s -> 90"
                            },
                            {
                                "text": "Heli X-4-X Support Chinook’s Supply Drop cash increased from $1000-2000 to $1800"
                            },
                            {
                                "text": "Heli X-4-X Support Chinook’s Supply Drop lives produced decreased from 50-75 to 10"
                            },
                            {
                                "text": "Heli X-5-X Special Poperations increases Supply Drop values to $4500 and 25 lives"
                            },
                            {
                                "text": "X-X-3 MOAB Shove gains a ‘mini heli missile' attack with pierce 10 damage 1"
                            },
                            {
                                "text": "X-X-4 Comanche Defense increases ‘mini heli missile’ pierce to 30"
                            },
                            {
                                "text": "X-X-4 Comanche Defense increases ‘mini heli missile’ damage to 3"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "Bottom path Mortar burns have been reworked to burn faster and last longer at all upgrades; the Extra Burny Stuff MK has been tweaked in order to keep it’s benefit the same comparatively to the new & improved base values.",
                        "items": [
                            {
                                "text": "X-X-2 Burny Stuff DoT duration increased from 3s -> 3.75"
                            },
                            {
                                "text": "X-X-2 Burny Stuff DoT tic interval reduced from 1.5s -> 1.25"
                            },
                            {
                                "text": "X-X-5 Blooncineration DoT tic interval reduced from 1s -> 0.75"
                            },
                            {
                                "text": "MK: Extra Burny Stuff buff amount reduced 0.5s -> 0.25"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Even though we like the theme of the slow hitting upgrade, Buckshot has struggled to live up to its potential, so attack speed has been further increased through all tiers. Ray of Doom’s damage bonuses have been shuffled around in order to not be so weak against Super Ceramics as by the time anyone reasonably affords this SCs are the only ones you’ll be seeing.",
                        "items": [
                            {
                                "text": "X-X-3 Buckshot attack cooldown reduced from 1.8s -> 1.5"
                            },
                            {
                                "text": "5-X-X Ray of Doom damage increased from 5 -> 25"
                            },
                            {
                                "text": "5-X-X Ray of Doom MOAB Damage bonus reduced from 20 -> 0"
                            },
                            {
                                "text": "5-X-X Ray of Doom shock DoT damage increased from 15 -> 20"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Some general buffs have been made to Wizard’s abilities to give it a small boost. Prince of Darkness has been performing extremely well after all its buffs and this is nice after it underperformed for so long, but the round 81 change to counter reduced Bloon Children with bonus Graveyard per pop has made it sustain high levels of graveyard too easily, this bonus has been lowered a little.",
                        "items": [
                            {
                                "text": "X-4-X Summon Phoenix Ability cooldown reduced from 60 -> 45"
                            },
                            {
                                "text": "X-5-X Summon Phoenix Ability cooldown reduced from 50 -> 45"
                            },
                            {
                                "text": "X-4-X Summon Phoenix Ability damage increased from 4 -> 5"
                            },
                            {
                                "text": "X-4-X Summon Phoenix Ability pierce increased from 6 -> 10"
                            },
                            {
                                "text": "X-X-2 Monkey Sense now grants Wizard Monkey the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-X-5 Necromancer ‘bonus grave’ after r81 reduced from 7 -> 13 to 7 -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "In an attempt to reduce visual clutter, we have reworked the formula for Temple projectile size scaling to come out overall being smaller by roughly 25%. Dark Knights have been feeling strong with their stalling power but we don’t want to hit this too hard just yet so have reduced the slow amount slightly and restored it at the T4.",
                        "items": [
                            {
                                "text": "5-X-X Sun Temple Military sacrifice total projectile size increase formula has been reworked to give an overall reduction in size for the sake of visual clarity"
                            },
                            {
                                "text": "X-X-2 Ultravision now grants Super Monkey the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-X-3 Dark Knight lead/ceramic slow amount decreased from 100% -> 90%"
                            },
                            {
                                "text": "X-X-4 Dark Champion lead/ceramic slow remains at 100%"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "As ninja is the ‘Camo Specialist’ and has been since inception, it is the only tower that will unlock Camo Prioritization on the base tower. Master Bomber’s main flash bomb has also been buffed in damage slightly leading into the new Ninja Paragon.",
                        "items": [
                            {
                                "text": "Ninja Monkey now gains the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-X-5 Master Bomber Flash Bomb damage increased from 5 -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Acidic Mixture Dip did nothing for Glue Gunners but alchemist would waste it on them",
                        "items": [
                            {
                                "text": "2-X-X Acidic Mixture Dip will no longer pick Glue Gunners as valid buff targets"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "As an underused crosspath on this tower, Druid’s Hard Thorns will now allow them to counter all of its weaknesses instead of just frozen targets. Druid of the Storm has been reworked to more consistently blow targets back due to being stationary and slower firing compared to other upgrades that do a similar task. Jungle Druids have been reworked to have more offensive power at both T3 and the T4 while not being quite so good at farming",
                        "items": [
                            {
                                "text": "1-X-X Hard Thorns now allows Thorns to pop all Bloon Types"
                            },
                            {
                                "text": "3-0-0 Druid of the Storm minimum blowback distance increased 33 -> 100"
                            },
                            {
                                "text": "3-0-0 Druid of the Storm maximum blowback distance reduced 300 -> 200"
                            },
                            {
                                "text": "3-X-X Druid of the Storm tornado radius increased from 13 -> 16"
                            },
                            {
                                "text": "5-X-X Superstorm price reduced from $90,000 -> 80,000"
                            },
                            {
                                "text": "X-3-X Vine grab now drops spiky thorns to the track upon popping a target",
                                "items": [
                                    {
                                        "text": "Damage: 1"
                                    },
                                    {
                                        "text": "Pierce: 30"
                                    },
                                    {
                                        "text": "Pierce Refresh: 0.3"
                                    }
                                ]
                            },
                            {
                                "text": "X-4-X Jungle's Bounty can now grab 2 different Bloons at once"
                            },
                            {
                                "text": "X-4-X Jungle's Bounty ability cooldown reduced from 40 -> 60"
                            },
                            {
                                "text": "X-4-X Jungle's Bounty ability cash amount increased from 200 -> 240"
                            },
                            {
                                "text": "X-4-X Jungle's Bounty ability cash bonus per farm in radius increased from 100 -> 120"
                            },
                            {
                                "text": "X-4-X Jungle’s Bounty: Cash Generating abilities now have a 3 minute timeout preventing further use in any single round"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "description": "Banana Farm’s X-X-2 upgrade is the inferior crosspath, so we’ve amped up the utility with the lazy aspect so that if it’s going to be inferior for production, it’s at least going to be extra lazy & less far behind. Additionally, as Monkey Wall Street is the least interesting T5 Banana Farm & doesn’t benefit from the Healthy Bananas MK it will now produce a base amount of lives each round",
                        "items": [
                            {
                                "text": "0-3-2 Monkey Bank now autocollects at the end of the round it fills with no delay"
                            },
                            {
                                "text": "X-X-1 EZ Collect now also salvages Bananas for 50% if uncollected"
                            },
                            {
                                "text": "X-X-2 Banana Salvage, salvage value is now increased from 50% -> 85"
                            },
                            {
                                "text": "X-X-2 Banana Salvage, now also increases this farm’s sellback rate from 70% -> 80"
                            },
                            {
                                "text": "X-X-5 Monkey Wall Street now also generates 10 lives per round"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Some minor changes to a few upgrades on Spike Factory evening out some aspects of it.",
                        "items": [
                            {
                                "text": "1-0-5 Permaspike pierce increased from 80 -> 90"
                            },
                            {
                                "text": "5-X-X Super Mines price reduced from $162,500 -> $150,000"
                            },
                            {
                                "text": "5-X-X Super Mines 'Small Explosion' pierce increased 20 -> 30"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "Further enhancing the cooldown buff that is initially added by the T4",
                        "items": [
                            {
                                "text": "5-X-X Primary Expertise cooldown buff for primaries increased from 10 -> 20%"
                            },
                            {
                                "text": "X-5-X Summon Phoenix Ability cooldown reduced from 50 -> 45"
                            },
                            {
                                "text": "X-4-X Summon Phoenix Ability damage increased from 4 -> 5"
                            },
                            {
                                "text": "X-4-X Summon Phoenix Ability pierce increased from 6 -> 10"
                            },
                            {
                                "text": "X-X-2 Monkey Sense now grants Wizard Monkey the new Camo Prioritization filter"
                            },
                            {
                                "text": "X-X-5 Necromancer ‘bonus grave’ after r81 reduced from 7 -> 13 to 7 -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "description": "Biohack would attempt to buff/debuff Paragons but do nothing.",
                        "items": [
                            {
                                "text": "Lv3 Biohack no longer picks Paragons as valid targets"
                            }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "description": "Ezili’s main attack was causing large problems behind the scenes due to it applying a stacking dot, but as stacks do not play nicely with other root level mechanics we’ve streamlined her attack into a much simpler DoT with some additional stat changes.",
                        "items": [
                            {
                                "text": "Ezili DoT can no longer stack"
                            },
                            {
                                "text": "Ezili lv8 gains an on-hit moab damage bonus of 20"
                            },
                            {
                                "text": "Ezili lv8 dot damage per tic to moab class increased from 20 -> 30"
                            },
                            {
                                "text": "Ezili lv12 on-hit moab damage bonus increased from 20 -> 30"
                            },
                            {
                                "text": "Ezili lv15 DoT duration increased by 50%"
                            },
                            {
                                "text": "Ezili lv20 on-hit moab damage bonus increased from 30 -> 50"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "27.2": {
        "release": "2021-08-11",
        "items": [
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Boss HP will no longer display a number above 0 while playing through its death animation"
                    },
                    {
                        "text": "Bosses will no longer cause you to lose if you run out of rounds to beat them while they are playing their death animation"
                    },
                    {
                        "text": "Fixed an exception that could occur with Boss music"
                    },
                    {
                        "text": "Fixed an issue with some login methods failing to work for some devices"
                    },
                    {
                        "text": "Fixed an issue that caused the platforms on Sanctuary to be incorrect on modes starting above round 1"
                    },
                    {
                        "text": "Fixed a crash that would occur with Tech Bot attempting to overclock a tower that has already been sacrificed to a paragon (note this is not retroactive for existing saves)"
                    },
                    {
                        "text": "Fixed an issue with Brickell’s sea mines becoming unable to attack bloons after reloading a save in some cases"
                    },
                    {
                        "text": "Fixed an issue where Odyssey would not award default amounts of Monkey Money for each map"
                    },
                    {
                        "text": "Fixed an issue with missing follow/unfollow buttons on user profiles"
                    },
                    {
                        "text": "Fixed an issue with the ‘Snap of your fingers’ achievement not functioning"
                    },
                    {
                        "text": "Fixed an issue with level ups causing various softlocks when occurring at the wrong time"
                    },
                    {
                        "text": "Fixed a crash that could occur under certain conditions when Ezili levels up"
                    },
                    {
                        "text": "Fixed some low framerate issues on android devices"
                    },
                    {
                        "text": "Tidied up some existing Juggernaut projectile issues that have been highlighted by Dart Monkey Paragon"
                    },
                    {
                        "text": "Removed non-functional information button from Paragon upgrades"
                    },
                    {
                        "text": "Fixed some rare/minor UI issues"
                    },

                ]
            }
        ]
    },
    "27.1": {
        "release": "2021-07-28",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Fixed an issue with Gwen Fireball and Ezili Glyph Trophy Store Items preventing a player from having both enabled at the same time."
                    },
                    {
                        "text": "Fixed Bloonarius Prime reverse mode spawning Bloons in the wrong location."
                    },
                    {
                        "text": "Fixed an issue with the Door Gunner Monkey Knowledge."
                    },
                    {
                        "text": "Fixed an issue where the ability bar would disappear when creating a Paragon Tower in some cases."
                    },
                    {
                        "text": "Fixed an issue where the Boomerang Paragon portrait would break after loading a save."
                    },
                    {
                        "text": "Fixed an issue with the Boss Event not awarding the correct number of trophies.",
                        "items": [
                            {
                                "text": "This is not retroactive, so if this has happened to you, please get in touch with support and one of the team will help you out. (support.ninjakiwi.com)"
                            }
                        ]
                    },
                    {
                        "text": "Fixed a UI resolution issue within the upgrades info box."
                    },
                    {
                        "text": "Fixed an issue with Mortar Monkey where a player could get two Pop and Awe Abilities."
                    },
                    {
                        "text": "Fixed an issue with Sauda’s Sword Charge ability on Bloonarius Prime."
                    },
                    {
                        "text": "Fixed an issue with completion wins after entering freeplay."
                    },

                ]
            }
        ]
    },
    "27.0": {
        "release": "2021-07-25",
        "items": [
            {
                "title": "Key Features",
                "items": [
                    {
                        "title": "New Boss Bloon Event! Face off against the mighty hulk known as Bloonarius the Inflator!",
                        "items": [
                            {
                                "text": "In Events intended to run each week, the Boss will appear on a different map to enhance the variety of tactical decisions around economy and placement. Bosses start appearing at Round 40 and the Tier 5 appears at round 120. Each Tier Boss must be defeated within 20 rounds of its appearance or it’s Game Over."
                            },
                            {
                                "text": "Defeat the Tier 5 Normal Boss to unlock the Elite Boss for a whole new level of challenge. We mean it - Elite is bonkers monkey tough. Beating Tier 5 Normal and Elite Bosses award new badges to show off on Player Profile screens. An Elite badge is a true accomplishment - wear them with pride!"
                            },
                            {
                                "text": "Boss Events feature a checkpoint save system instead of normal continues, creating a save at the start of each new Boss Tier."
                            },
                            {
                                "text": "Because of downstream Co-op and competitive Leaderboard features we intend to add in future updates, Boss Events can only be played while online."
                            },
                            {
                                "text": "Difficulty Fair Warning - Bosses are designed to be crazy challenging! If you are new to BTD6, make sure you can win most hard modes and really know how to farm well and maximize tower damage before you take on a Boss. Expect defeat. Nay, revel in it - bathe in anguish then emerge smarter, more capable, and with improved tactics that help you get further each time. If you have built up a stockpile of Powers and Insta Monkeys, feel free to use them - they are not required but they are certainly fair game. And, yes, build those Paragons..."
                            }
                        ]
                    },
                    {
                        "title": "New Paragon Tower Tier!",
                        "items": [
                            {
                                "text": "Paragon status granted to Dart Monkey and Boomerang Monkey, unleashing the might of the Apex Plasma Master and the Glaive Dominus!"
                            },
                            {
                                "text": "Merge together all three Tier 5 upgrades of one Monkey Tower type to create an ultimate version that combines the powers of all 3 paths and deals incredible bonus damage to Boss Bloons."
                            },
                            {
                                "text": "Paragon Tier has a significant XP cost and can only be unlocked after unlocking the Tier 5 upgrade of all 3 paths."
                            },
                            {
                                "text": "In battle, Paragons gain strength by absorbing the power of all Monkey Towers of that type on the playfield - the greater the number and effectiveness of the Monkey Towers absorbed, the greater the Degree of Paragon you will create! Paragon Degrees start at 1 and reach a maximum Degree of 100."
                            },
                            {
                                "text": "Once created, Paragons cannot be buffed by other towers, nor can their transformation price be reduced."
                            }
                        ]
                    },
                    {
                        "text": "Co-op Rejoining! We’ve been working on this for some time, and we are delighted to announce support for crashed/disconnected games. Player towers & cash will no longer be immediately distributed when a player disconnects but give time for the disconnected player to rejoin. If remaining players know the disconnected player won’t return or do not want to wait, disconnected players can be removed within the co-op menu depending on player position. Please note that some games will not be recoverable if multiple players disconnect at the same time, but this feature should greatly improve general co-op experience when one player drops for any number of reasons and wants to get back in."
                    },
                    {
                        "text": "Twitch Polls! Twitch Steamers and viewers take note, we now allow automated polling directly from the game to Twitch chat for viewers to vote on tower restrictions. We have more Twitch features planned for future updates, so if you have thoughts on fun streaming integration features for BTD6 please shout them out!"
                    },
                    {
                        "text": "Every Day is Event Day! With Boss Events added, we will bridge the gap between Odysseys ending and the next week’s Odyssey starting. Odysseys will begin the weekend as usual, then Races a day later, then Boss Events that are intended to run until the next Odyssey starts. This allows access to all 3 Events over the weekend when most players have the most time to play and also keeps something special running every day of the week, in addition to our normal Daily and Content Browser Challenges."
                    },
                    {
                        "text": "Profile Banner Backgrounds! Customize the look of your Profile Screen background, and show off in leaderboards, co-op lobbies, and Content Browser entries! Look for these sweet profile backgrounds in the Trophy Store and don’t be surprised by the high trophy costs - you’ll know that players flairing these have earned the right to show off."
                    }
                ]
            },
            {
                "title": "More New Awesome",
                "items": [
                    {
                        "title": "New Intermediate map - Bloonarius Prime. Emphasis on the prime."
                    },
                    {
                        "title": "New Achievements",
                        "items": [
                            {
                                "text": "What is this new Bloonery?"
                            },
                            {
                                "text": "Who's the Boss?"
                            },
                            {
                                "text": "I'm the Boss"
                            },
                            {
                                "text": "Like a Boss"
                            },
                            {
                                "text": "Apotheosis"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Gwen Fireball placement animation"
                            },
                            {
                                "text": "Monkeys: Butterflies Upgrade FX, Village Germany Flag, Village UK Flag"
                            },
                            {
                                "text": "Bloons: Neon DDT, Water Bloon Pop FX, Bucket Hat Bloons"
                            },
                            {
                                "text": "Co-op: Next Round! Scary! emote, Fist Pump emote"
                            },
                            {
                                "text": "Game & UI: Aerials Banner, Spirit Wolf Banner, Dart Storm Banner, Reactive Banner, Incoming Banner, Ezili Avatar, Spiked Ball Avatar"
                            }
                        ]
                    },
                    {
                        "title": "Community Winner avatars",
                        "items": [
                            {
                                "text": "Avatar 44 SAS Monkey - by u/LV-223_Deacon"
                            },
                            {
                                "text": "Avatar 45 Blueprint - by u/dungeon-raided"
                            }
                        ]
                    },
                    {
                        "text": "Tweaks have been made to Freeplay Rounds 101-119 in order to balance out the length and difficulty in relation to the new Boss Events"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Custom Odyssey saves should now only show up under \"My Saved Games\", if the save has not been completed"
                    },
                    {
                        "text": "Odyssey UI now supports room for even more rules to be applied"
                    },
                    {
                        "text": "Added more of a visible difference between new/old Odyssey Browser challenges"
                    },
                    {
                        "text": "When share is still locked in Odyssey Browser added a pop-up like challenges to explain why"
                    },
                    {
                        "text": "Resolved a case where game close/crash on final round of Odyssey could cause players to have an unwinnable odyssey freeplay save"
                    },
                    {
                        "text": "Resolved some Odyssey specific save issues"
                    },
                    {
                        "text": "In Deflation, Hero 'cost to level up' should again update at the end of each round"
                    },
                    {
                        "text": "Resolved an issue where launching Steam via the BTD6 executable could fail to start Steam and also cause the game to not load"
                    },
                    {
                        "text": "Resolved some asset bundle caching issues on certain devices"
                    },
                    {
                        "text": "Fixed up some problems with restarting on Ravine causing problems with the sword, though it’s not perfect yet."
                    },
                    {
                        "text": "Resolved some localization issues - thanks to the native speakers who report issues!"
                    },
                    {
                        "text": "Resolved some rare crashes"
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-X-5 MOAB Domination press attack should correctly explode even if it runs out of pierce"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-X-X Bloon Impact no longer applies a ‘stunned’ debuff to MOABs without stunning them"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "5-2-0 Cripple MOAB once again applies it’s stun asset and debuff correctly in all cases"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "3-0-1 Berserker Brew’s Faster Throwing crosspath once again increases the rate of the Brew attack"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "items": [
                            {
                                "text": "5-X-X Super Mines damage for the main spike hit corrected from 2 -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-3-X MIB will now correctly allow supported towers with Ice attack to pop Rainbow Bloons into Frozen Zebras"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-4-X Overclock significant framerate loss issue resolved when linked to a tech bot without any target set for the Overclock ability"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "items": [
                            {
                                "text": "Lv10 Firestorm no longer damages the screen with an additional instance of Heat it Up"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Level 20 Ball of Light once again has sound when being cast"
                            }
                        ]
                    },
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Hotkeys menu on the in-game pause screen has been relocated into a PC-Only options sidebar next to the new twitch integration menu for affiliate streamers."
                    },
                    {
                        "text": "As mentioned above, Twitch Polls integration has been added for Affiliate & Partner streamers."
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "Due to large memory leak issues with Glaive Lord’s stacking DoT which could not be resolved this upgrade has seen a rework to the DoT. Bionic Boomerang’s base attack rate has been improved to compensate for recent reworking of the 2-X-X Glaives Crosspath",
                        "items": [
                            {
                                "text": "5-X-X DoT no longer stacks"
                            },
                            {
                                "text": "5-X-X DoT damage increased from 10 -> 100"
                            },
                            {
                                "text": "X-3-X Bionic Boomerang attack delay reduced from 0.28 -> 0.238"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Snowstorm’s duration has been improved to give it more bang for its buck as an alternate option to Ninja’s Bloon Sabotage, and Absolute Zero’s price has been reduced to bring it more within reach for a support upgrade.",
                        "items": [
                            {
                                "text": "X-4-X Snowstorm duration increased from 4s -> 6"
                            },
                            {
                                "text": "X-5-X Absolute Zero price reduced from $26,000 -> 20,000"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "Ballistic Missile’s 2-3-0 crosspath has been in a confusing spot for a while where it functioned different to Advanced Intel, so it has been converted to function with Advanced Intel in the same way that any other Sub upgrade would. Additionally First Strike's secondary explosion has had its target count reduced slightly.",
                        "items": [
                            {
                                "text": "2-3-0 Ballistic Missile now benefits from Advanced Intel's targeting in the same way as all other sub attacks to instead seek the radius from other towers on the map"
                            },
                            {
                                "text": "X-4-X First Strike ability secondary AoE pierce lowered -> 80"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Now allows you to find your center. Very zen.",
                        "items": [
                            {
                                "text": "X-X-2 Centered Path functions as normal until any path is set, but now allows players to set a center location similar to Heli Lock"
                            },
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "As a small quality of life feature Chinook’s redeploy ability has been reworked to allow slight movements of towers in a single use, rather than having to move them away and then use another redeployment to move them back again.",
                        "items": [
                            {
                                "text": "X-4-X Support Chinook’s Redeploy ability is now ability to move a tower back down over the top of its current location"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "Mortar Monkey has been given a T4 ability, since it didn’t have one and also to make up for Bloon Impact no longer triggering ‘stun debuff’ on MOABs when it hasn’t actually been stunning them. Signal Flare has had its camo revealing aspect reworked to make it more generally useful.",
                        "items": [
                            {
                                "text": "X-4-X Artillery Battery new ability 'Bombardment', for 8 seconds attack rate is increased by 4x & blast radius is increased by 15%, cooldown of 60 seconds"
                            },
                            {
                                "text": "X-X-3 Signal Flare triggers a larger secondary AoE on impact with no weakness which reveals all camo Bloons size 50 & pierce 80."
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "In order to allow for more strategic use of the birdy, Summoned Phoenix will now follow the set target priority.",
                        "items": [
                            {
                                "text": "X-4-X Phoenix now copies targeting of the Wizard"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "Robo Monkey has never filled the super effective role it held in BTD5, so Dr Monkey has installed updated HUD targeting systems that now deal occasional critical hits. Additionally as the abilities on this path didn’t match up to their history or other Monkey Tower options (like Ground Zero) so they have been improved significantly in damage and increased radius.",
                        "items": [
                            {
                                "text": "X-3-X Robo Monkey is now able to deal critical damage on it’s hits",
                                "items": [
                                    {
                                        "text": "Criticals occur every 20 shots within the 15th-20th shot"
                                    },
                                    {
                                        "text": "Criticals deal a damage increase from 1 -> 10"
                                    }
                                ]
                            },
                            {
                                "text": "X-3-X Robo Monkey price increased from $7000 -> 8400"
                            },
                            {
                                "text": "X-5-X The Anti-Bloon criticals occur every 17 shots within the 13th-17th shot"
                            },
                            {
                                "text": "X-5-X The Anti-Bloon criticals deal a damage increase from 5 -> 50"
                            },
                            {
                                "text": "X-4-X Tech Terror Bloon Annihilation ability damage increased from 1000 -> 2500"
                            },
                            {
                                "text": "X-4-X Tech Terror Bloon Annihilation ability radius increased from 60 -> 70"
                            },
                            {
                                "text": "X-5-X Anti Bloon Bloon Annihilation ability damage increased from 3500 -> 5000"
                            },
                            {
                                "text": "X-5-X Anti Bloon Bloon Annihilation ability radius increased from 110 -> 120"
                            },
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "To try and allow more strategic use Ninja’s Sticky Bombs will now use the targeting of the main tower instead of always Strong. Additionally as they weren’t feeling good enough in general Sticky Bombs will now deal a smaller amount of damage in an AoE to anything surrounding the main target.",
                        "items": [
                            {
                                "text": "X-X-4 Sticky Bomb now follows the tower's target priority for Sticky Bombs"
                            },
                            {
                                "text": "X-X-5 Master Bomber now follows the tower's target priority for Sticky Bombs"
                            },
                            {
                                "text": "X-X-4 Sticky Bombs now deals an additional AoE when they explode for 100 damage, 10 pierce and 40 AoE"
                            },
                            {
                                "text": "X-X-5 Master Bomber inherits this new AoE and increases damage to 300"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "To allow for more strategy in placement, Druid’s Spirit of the Forest track vines are now more dense & deadly the closer they are to the main tower. Also by popular demand Avatar of Wrath’s 2-0-5 crosspath will now benefit from improved Lightning damage proportional to the RBE of Bloons on screen similar to the main thorns.",
                        "items": [
                            {
                                "text": "X-5-X Bloons outside 100 Range take current 2 damage + 8 to Multi HP"
                            },
                            {
                                "text": "X-5-X Bloons within 100 Range will be hit for additional 1 damage +4 to Multi HP"
                            },
                            {
                                "text": "X-5-X Bloons within 50 Range will be hit for yet another 1 damage +4 to Multi HP"
                            },
                            {
                                "text": "2-0-5 Avatar of Wrath now grants a slight portion of it’s RBE damage bonus to the Heart of Thunder lightning chains as well equal to 1 damage for every 6000 rbe on screen with a cap of +15 damage"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "description": "Given the relatively low value and use case of upgrading Banks further to IMF Loan, the overall incredible power of the Bank Deposits MK on Banks, and the fact that Banks are majorly considered to be the most powerful farm; we have decided to limit this incredibly powerful Knowledge point until the IMF Loan to both reign it in and give a little more back to that lacking T4 upgrade.",
                        "items": [
                            {
                                "text": "X-3-X Monkey Bank is no longer able to deposit cash from the Bank Deposits MK until the X-4-X IMF Loan and above"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Due to a number of performance concerns, the ability for the Spike Storm factory will no longer be able to benefit from a denser storm of spikes via stacking speed buffs on the base tower.",
                        "items": [
                            {
                                "text": "X-4-X Spike Storm ability will no longer benefit from increases to rate of fire"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "description": "In order to just generally grant more value to this ability and develop strategy in what targets you want to pick to use it on and when, Adora's buff gained after sacrificing another tower will now scale based on the sacrifice's cost. Additionally as Sacrifice loses value when using it after Adora reaches the level 20 cap it now receives a large duration buff at that point.",
                        "items": [
                            {
                                "text": "Lv7 Sacrifice’s buff of 10% attack speed and range is now a ‘minimum’ amount"
                            },
                            {
                                "text": "Lv7 Sacrifice’s buff value now increase by +1% for every $100 value of sacrifice made"
                            },
                            {
                                "text": "Lv7 Sacrifice’s buff caps at a maximum buff of +25%"
                            },
                            {
                                "text": "Lv20 now increases Sacrifice’s buff to +1% for every $50 value to a maximum of +50%"
                            },
                            {
                                "text": "Lv20 now increases Sacrifice’s buff duration from 10s -> 60"
                            },
                            {
                                "text": "Lv20 True Sun Transformation damage bonus increased 5 -> 8"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "description": "Due to much user concern with Brickell’s Sea Mines seriously overkilling weak targets and wasting themselves in this way, they now have a short delay between activations.",
                        "items": [
                            {
                                "text": "Placed Sea Mines now have a small delay, only setting off max 1 per 0.4sec"
                            }
                        ]
                    },
                    {
                        "tower": "Sauda",
                        "description": "While we feel Sauda’s power has been balanced fairly well, we have also felt that too much of this power is generally available while ignoring the synergies that she was intended to be built around.To correct this her damage will in total remain the same, but some key levels that increased damage will now instead buff her weakness bonuses. We would also like to make it clear that this has been in the works for some time and has nothing to do with the recent 1TC completion, so please don’t be mad at that person. This will mean fairly little to most players, who are not doing those sorts of challenges anyway.",
                        "items": [
                            {
                                "text": "Lv13’s damage +1 now instead grants +1 damage to Sauda’s Lv7 Bloon Weakness"
                            },
                            {
                                "text": "Lv17 \"main attack damage +3\" reduced from 3 to 1"
                            },
                            {
                                "text": "Lv17 now grants +1 damage to Sauda’s Lv7 Bloon Weakness"
                            },
                            {
                                "text": "Lv17 now grants +1 damage to Sauda’s Lv11 Afflicted Bloons Weakness"
                            },
                        ]
                    },
                    {
                        "title": "Powers",
                        "description": "As Timestop is not considered to be an actual application of ‘slowing’ it will now apply to all Bloon types including BAD. This is a unique case that isn’t going to be changed for any Monkey Towers, just the Timestop.",
                        "items": [
                            {
                                "text": "BAD Bloons are no longer ignorant to the passage of time"
                            }
                        ]
                    },
                    {
                        "title": "Temple & Freeplay balance",
                        "description": "Temples feel like far too much of the bulk of total power in deeper Freeplay scenarios. While this is their role, ever since adding the hidden Vengeful version of the Temple the VTSG has pushed ahead so much that it nearly invalidates other freeplay tower options. While this change won’t completely alter that, we have scaled back temples compared to the new Paragons & expensive regular towers by reducing the damage bonus of 5-5-5 temple by 33%, and also roughly easing up on the freeplay health ramping of MOABs by a similar amount",
                        "items": [
                            {
                                "text": "5-5-5 Super Monkey base attack damage reduced from 75 -> 50"
                            },
                            {
                                "text": "5-5-5 Super Monkey attack multiplier for sacrifice powers reduced from 3x -> 2x"
                            },
                            {
                                "text": "Freeplay formula for MOAB Health Increase from round 125+ reduced from 0.20 -> 0.15"
                            },
                            {
                                "text": "Freeplay formula for MOAB Health Increase from round 152+ reduced from 0.50 -> 0.35"
                            },
                        ]
                    },
                ]
            }
        ]
    },
    "26.1": {
        "release": "2021-06-09",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Challenge Creator once again allows you to continue after quitting from a challenge before submission"
                    },
                    {
                        "text": "Monkey Teams achievements should correctly track progress"
                    },
                    {
                        "text": "Odyssey Monkey portrait is no longer the same for each difficulty"
                    },
                    {
                        "text": "MIB will now allow Psi to target Lead & Purple Bloons"
                    },
                    {
                        "text": "Resolved an issue where updating to v26.0 from some game versions could break some Odyssey Creation features"
                    },
                    {
                        "text": "Retry Last Round option during Odyssey Creation should no longer count an excessive amount of towers used to complete the Odyssey"
                    },
                    {
                        "text": "View Browser & Edit Odyssey buttons within the Social Play menu now require an internet connection"
                    },
                    {
                        "text": "Resolved an issue with android asset bundles loading incorrectly upon updating"
                    },
                    {
                        "text": "Added a failsafe to map unlocks on game launch"
                    },

                ]
            }
        ]
    },
    "26.0": {
        "release": "2021-06-03",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "text": "New Hero: Psi the Psionic Monkey, a youthful hero who uses their mental abilities over any distance to hold and unravel Bloons from the inside out"
                    },
                    {
                        "text": "New Expert Map: Sanctuary - where you can be mindful of the movement of things around you"
                    },
                    {
                        "title": "New Achievements",
                        "items": [
                            {
                                "text": "So Shiny!"
                            },
                            {
                                "text": "Glittering Gold"
                            },
                            {
                                "text": "Glorious Gold"
                            },
                            {
                                "text": "Magical Gold"
                            },
                            {
                                "text": "Hook, Line, and Sinker"
                            },
                            {
                                "text": "Moving House"
                            },
                            {
                                "text": "Social Butterfly"
                            },
                            {
                                "text": "Achievement of Achievements"
                            },
                            {
                                "text": "Team Player"
                            },
                            {
                                "text": "Team Captain"
                            },
                            {
                                "text": "Ultimate Team-up"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Etienne Roomba pet, Ezili Glyph Materialization placement"
                            },
                            {
                                "text": "Monkeys: Village Scotland Flag, Village NZ Flag, Village Banana Flag"
                            },
                            {
                                "text": "Bloons: Beard Bloons decal, Old Timey MOAB-Class Bloons"
                            },
                            {
                                "text": "Co-op: Activate! emote, Tumbleweed emote, Skull and Crossbones emote"
                            },
                            {
                                "text": "Game & UI: Music Track Tropical Carnival Octopus Mix, Avatar 42 - Corporate Patch"
                            }
                        ]
                    },
                    {
                        "title": "Community Winner avatars",
                        "items": [
                            {
                                "text": "Avatar 40 Harlegwen PFP by u/Qqertynn"
                            },
                            {
                                "text": "Avatar 41 Flash Bomb by u/_Concilliabule_"
                            }
                        ]

                    },
                    {
                        "title": "Limited Time only",
                        "items": [
                            {
                                "text": "4 cool items you can be the first to grab when it gets nearer to shooting off fireworks (135 total trophy cost if you want to start saving!)"
                            }
                        ]
                    },

                ]
            },
            {
                "title": "Key Features",
                "items": [
                    {
                        "text": "Play Social - The Co-Op main menu button has been updated to make room for more social features, including the Content Browser and visibility to weekly Co-Op challenges when those are running. We’re keen to keep adding more fun ways to play together and share creations, so watch for more here in future updates!"
                    },
                    {
                        "text": "Odyssey Creator & Browser! You’ve been able to make your own Challenges - now put them together in player-created Odysseys! Use all of the features you’d expect from Challenge creation but put them together with a theme, Odyssey difficulty (including Extreme!), and Crew restrictions and make the best Odysseys you can dream up for friends and community."
                    },
                    {
                        "text": "Monkey Teams: Stick to the chosen team to earn extra rewards! To mix things up with an alternative to the Golden Bloon, Monkey teams will be assigned to a random map in each category similar to the Golden Bloon, however for this event players have the option of beating the map using only their hero along with 3 randomly selected towers. If the game is completed without breaking this team rule then a small monkey money bonus will be awarded. Monkey Teams and Golden Bloon will alternate for variety, and both can be running while Collection Events are on."
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Freeplay rounds from 121 to 140 have now been added in the default round set, so like the recent 101-120 additions, these will now be consistent rounds. Interesting, I wonder if Ninja Kiwi is up to something..."
                    },
                    {
                        "text": "Minor tweaks have been made to the previously added 101 - 120 fixed freeplay rounds."
                    },
                    {
                        "text": "Player regions in Co-op are now labelled with their name"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Performance optimizations made to tower targeting"
                    },
                    {
                        "text": "Localization corrections made - native and fluent speakers please keep flagging non-English translations that are bugging you!"
                    },
                    {
                        "text": "Resolved an issue where towers would sometimes not have a complete range circle"
                    },
                    {
                        "text": "Default & Reset towers in Challenge Creation will now default to select hero"
                    },
                    {
                        "text": "Resolved an issue where the Hide Completed filter in the Challenge viewer would only be able to hide a maximum of 1024 challenges (so awesome that some of you were having this problem!)"
                    },
                    {
                        "text": "Hitting the send round button in races will no longer trigger a flag animation if all rounds have already been sent (if you liked just waving the flag, let us know if you want that or some other trophy store animations to play during races, especially if you’re making videos)"
                    },
                    {
                        "text": "Resolved some minor UI loading issues when changing menus"
                    },
                    {
                        "text": "Resolved a visual issue with Ravine’s Sword Easter Egg after restarting"
                    },
                    {
                        "text": "Resolved an issue with Lotus Island flowers not recharging correctly after use"
                    },
                    {
                        "text": "Quitting and loading a save on round 100 should now award Instamonkeys upon completion of the round"
                    },
                    {
                        "text": "Base Avatars no longer display as limited time under some odd circumstances"
                    },
                    {
                        "text": "Resolved a UI issue where Full Tower Unlock purchase would leave newly acquired upgrades as greyed out"
                    },
                    {
                        "text": "Resolved some issues with some hotkeys not working correctly after a game restart"
                    },
                    {
                        "text": "Resolved hero level 20 level up animation issue"
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-3-X Arctic Wind will no longer retain its frozen platforms after being transformed by an Alchemist as this could cause a crash upon ability expiration"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-X-5 Super Glue can now re-target Bloons that is has already Glued after stun expires"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-4-X Supply Drop sniper crate ability should no longer land inside high terrain"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "3-X-X Submerge and Support should no longer be possible to disconnect tower location from visible model"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "5-X-X Carrier Flagship has had a desync between the Flagship platforms when placed on moving platforms resolved"
                            },
                            {
                                "text": "X-X-5 Trade Empire should correctly buff the damage of other Merchantmen in CHIMPS"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "0-1-0 Exploding Pineapple should no longer display the wrong number on every 2nd Pineapple"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-0-4 Comanche Defense should now correctly be able to spawn Mini-Comanche if it is granted camo detection from an external source"
                            },
                            {
                                "text": "X-X-4 Comanche Defense should no longer be completely and utterly bonk on Workshop"
                            },
                            {
                                "text": "X-5-X Special Poperations will no longer crash the game if disabling MK after picking up a door gunner"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-3-X Robo Monkey now remembers target priorities when loading saves"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "3-X-X Druid of the Storm blowback should correctly remove ongoing glue damage effects from Bloons when the slow is removed"
                            }
                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "Lv5 debuff to Black Bloon immunity should no longer fail to work on Zebra Children from MOABs in rare cases"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Lv10 Ball of Light no longer breaks when she is placed above an Arctic Wind on water"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "BTD6 is now available on Windows Store, full PC features have been enabled."
                    },
                    {
                        "text": "Hotkeys are now available to view and edit from the pause menu in-game"
                    },
                    {
                        "text": "Improved Steam Rich Presence (moving onto Twitch features now - if you’re a Twitch streamer let us know what features and support you’d like to see, or anything that’s making it difficult or frustrating to stream BTD6)"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "While overall good, the difficulty of using PMFC to its full potential doesn’t feel quite worth it so price has been cut to make it a little easier to reach.",
                        "items": [
                            {
                                "text": "X-5-X Plasma Fan Club price reduced from $50,000 -> 45,000"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "To reduce some top crosspath dominance, have middle path stay the true speed crosspath and also provide a small buff to the base Boomerang, Glaive’s attack speed bonus has been moved down into the base Boomerang Tower. Glaive Lord’s innate lead popping has been removed to allow that meaning to remain in the crosspath along with price being reduced to compensate. MOAB Domination’s explosion has had pierce increased to improve consistency on children Bloons.",
                        "items": [
                            {
                                "text": "0-0-0 Boomerang attack delay reduced from 1.42 -> 1.2"
                            },
                            {
                                "text": "2-X-X Glaives no longer increases attack speed 15% -> 0%"
                            },
                            {
                                "text": "5-X-X Glaive Lord price reduced from 35,000 -> 32400"
                            },
                            {
                                "text": "5-X-X Glaive Lord no longer passively pops Lead without Red Hot Rangs"
                            },
                            {
                                "text": "X-X-5 MOAB Domination’s Explosion pierce increased from 20 -> 40"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "Super Glue currently fits a role of essentially a weaker Ice Impale that is also much more expensive (and, well, worse). For now the cost has been cut substantially to keep their function and value balanced.",
                        "items": [
                            {
                                "text": "X-X-5 Super Glue price reduced from $35,000 -> 28,000"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "Cripple MOAB’s price currently limits it mainly to freeplay and so has been reduced.",
                        "items": [
                            {
                                "text": "5-X-X Cripple MOAB price reduced from $40,000 -> 34,000"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "As Airburst Darts alone already gives a huge benefit to the tower regardless of not applying any crosspath buff, some of the attack speed benefit this upgrade gave to 0-3-2 Ballistic Missile has instead been moved into the base 0-3-0 Missile.",
                        "items": [
                            {
                                "text": "0-3-0 Ballistic Missile missile attack delay reduced from 1.3 -> 1.105"
                            },
                            {
                                "text": "0-3-2 Ballistic Missile missile rate buff reduced from 25% to 10%"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "As Dart Storm currently feels like a lossy stepping stone the damage has been increased.",
                        "items": [
                            {
                                "text": "4-X-X Operation: Dart Storm homing missile damage increased from 18 -> 24"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "We’ve noted that Special Poperations has save-up issues, and then once owned has uptime and single target issues. With the 30 second duration, it now has potentially no downtime and instead allowing careful (or techbot) management to give a short burst of increased single target.",
                        "items": [
                            {
                                "text": "X-5-X Special Poperations, Marine ability cooldown reduced from 40s -> 25"
                            },
                            {
                                "text": "X-5-X Special Poperations, Marine unit pierce reduced from 30 -> 20"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Rocket Storm is currently too powerful as just a ‘spam whenever it’s ready’ without much thinking really required, its cooldown is being lowered so that it remains quite powerful but may require more timing.",
                        "items": [
                            {
                                "text": "X-4-X Rocket Storm cooldown increased from 30s -> 40"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Pierce amounts for Spiked Balls and Mines fits their use cases too awkwardly due to super ceramics. Considering the power of Spiked Balls, their pierce has been reduced slightly to add value to the pierce focussed higher tier in addition to a price cut for Spiked Mines.",
                        "items": [
                            {
                                "text": "3-X-X Spiked Balls pierce reduced from 17 -> 14"
                            },
                            {
                                "text": "4-X-X Spiked Mines price reduced from $11,000 -> 9,500"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "As currently it doesn’t feel as valuable to use the City buff versus other cash producing towers, the buff Monkey City applies to other cash producing towers in radius has been increased.",
                        "items": [
                            {
                                "text": "X-X-4 Monkey City cash production bonus to towers in radius increased from 10% to 15%"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "It has been clear that Sentry Expert needs changes, with Cryo sentries the only ones that really seemed valuable and purposeful, so all of the others have been improved to fit their role. Additionally higher tier sentries will now be able to benefit from the X-X-2 Pin crosspath, so enjoy some laser pins. Bloon Trap redeployment rate has also been buffed a fair amount.",
                        "items": [
                            {
                                "text": "4-X-X Laser Sentry gains pierce increased from 4 -> 8"
                            },
                            {
                                "text": "4-0-1 Laser Sentry gains pierce increased from 5 -> 10"
                            },
                            {
                                "text": "4-X-X Ball Sentry damage increased from 1 -> 2"
                            },
                            {
                                "text": "4-X-X Ball Sentry attack cooldown increased from 1s -> 1.1"
                            },
                            {
                                "text": "4-X-X Boom Sentry attack cooldown reduced from 1.3s -> 0.9"
                            },
                            {
                                "text": "3-0-2 Sentries & Higher will now also be able to Pin Bloons they pop"
                            },
                            {
                                "text": "X-X-4 Bloon Trap redeployment cooldown reduced from 15s -> 12"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "description": "As the Firestorm ability itself drops off later anyway, Gwen’s level 17 buff to Heat it Up will now apply to the version granted to all towers by Firestorm as well.",
                        "items": [
                            {
                                "text": "Lv17 Firestorm’s full-map Heat It Up now also benefits from this level’s buff to Heat It Up"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "description": "We have to admit there were some mistakes not trusting ourselves as much as we should have due to lackluster initial reception of Etienne (except for you die hard Etienne fans, who we greatly appreciate). He was quickly buffed in the very next update before giving users time to settle and find out just how to use a hero who played so differently and after the resurgence in play with the ETn skin. While we still feel that those changes rather nicely sorted out quality of life issues and we took more time to avoid ping ponging him around, he clearly reigns far too supreme and needs some nerf stick. Rather than removing any of those usability changes we have decided to trim down the power of his very dominant UCAV ability.",
                        "items": [
                            {
                                "text": "Lv10 UCAV Damage reduced from 3 -> 2"
                            },
                            {
                                "text": "Lv15 UCAV Damage reduced from 6 -> 4"
                            },
                            {
                                "text": "Lv17 UCAV Damage reduced from 9 -> 7"
                            },
                            {
                                "text": "Lv20 UCAV Damage reduced from 12 -> 10"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "25.1": {
        "release": "2021-04-15",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "5-2-0 Sniper Monkey correctly spawns shrapnel again"
                    },
                    {
                        "text": "4-X-X Bloon Impact Bomb Shooters no longer ignore Black Bloons with Striker Jones lv5"
                    },
                    {
                        "text": "4-X-X Embrittlement correctly allows sharp damage to pop the Frozen Bloons again"
                    },
                    {
                        "text": "5-X-X Super Brittle Ice Monkey correctly debuffs MOABs again"
                    },
                    {
                        "text": "Admiral Brickell level 5 Naval Tactics grants Normal damage to water towers again"
                    },
                    {
                        "text": "Pat Fusty no longer grants Normal damage type with Rallying Roar"
                    },
                    {
                        "text": "Resolved an issue that could occur when exiting a lobby that was entered via Deep Link"
                    },
                    {
                        "text": "Fixed up some Deep Links related UI with Share/Shared icons"
                    },
                    {
                        "text": "We won’t name off every single case, but due to the damage type fixes in 25 any projectiles which had been assigned a ‘corrupted damage type’ thus defaulting to Normal should all be using their correct type now."
                    }
                ]
            }
        ]
    },
    "25.0": {
        "release": "2021-04-15",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "text": "New beginner map Resort"
                    },
                    {
                        "text": "New ETn skin for Etienne"
                    },
                    {
                        "text": "New non-trophy Music Track Sails Again, playable anytime via the Jukebox. Spice Islands, Off the Coast & Lotus Island also now rock this awesome track by default."
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Sauda Crane Pet, Pat Super Jump Placement"
                            },
                            {
                                "text": "Monkeys: Banana Farm Chicken, Monkey Village Brazil Flag, Monkey Village USA Flag (whoever makes the most noise gets their flag next, and by noise we mean youtube and twitch views!)"
                            },
                            {
                                "text": "Bloons: BTD4 Retro MOAB Skin, BTD4 Retro BFB Skin"
                            },
                            {
                                "text": "Co-op: Player Numbers Emote, Trophy Winner Emote"
                            },
                            {
                                "text": "Game & UI: Sharp Sauda Avatar, Portable Lava Lake"
                            }
                        ]
                    },
                    {
                        "title": "Community Winner avatars",
                        "items": [
                            {
                                "text": "Penguin Friend by u/ReconScoutTeemo"
                            },
                            {
                                "text": "Gloo Gunner by u/Cyliia"
                            }
                        ]
                    },
                    {
                        "title": "Limited Time only",
                        "items": [
                            {
                                "text": "It’s a surprise, but keep your eyes out for a new item that first weekend in May"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Key Features",
                "items": [
                    {
                        "text": "Mini-Races - for granular ad hoc competition and more rewards! Don’t worry - you don’t have to race twice! Instead, all Racers now submit their scores to 2 leaderboards. The Mini-Race leaderboard (look for the tab button on the leaderboard screen) will segment players into smaller groups of 100 on a first come first added basis when your first time is recorded.",
                        "items": [
                            {
                                "text": "We love the fierce competition at the very top of the full leaderboard, but for players unable to compete for those wickedly fast times, we wanted to offer the chance to shine on their own more granular leaderboards and enjoy the excitement of shaving just a fraction of time from your score to move up the standings."
                            },
                            {
                                "text": "Yes, there’s a little Contested Territory (Bloons Monkey City, and Adventure Time TD) thinking here but we wanted to greatly expand the range of competition within those pools so 100 players per Mini-Race made sense for that."
                            },
                            {
                                "text": "No, there are no badges for the Mini-Races, as it is incredibly important to us to not dilute the prestige of the main board rankings and badges."
                            }
                        ]
                    },
                    {
                        "text": "Veteran Levels have been added to the game! After reaching max level, players can now continue to earn additional Veteran Levels. Every one of these requires a substantial amount of experience, but that per level requirement stays flat.",
                        "items": [
                            {
                                "text": "We have been listening to the feedback on this topic - ranging from requests to increase the Player Level Max, adding stats that would track total xp, or create a paragon-style system."
                            },
                            {
                                "text": "We will raise the Player Level Max at some intentionally non-committal time in the future but only after we have further narrowed the delta between the available Monkey Knowledge Points including achievements and the total MK Points that can be spent."
                            },
                            {
                                "text": "Veteran Levels allow the awesome number of super dedicated players to keep earning XP and compete for bragging rights on an upcapped scale, but without unbalancing the Monkey Knowledge system."
                            },
                            {
                                "text": "And don’t worry about your Veteran Levels when we do raise the Player Level Max. At that time any Veteran Level player will start earning XP toward the new Player Max, and when that is hit, they will pick up their Veteran Level number and XP count right where they left off."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Player avatars have been added to in-game leaderboards. Because of course you want to show off your cool avatars in as many places as possible. We’ll keep thinking about more ways to do so."
                    },
                    {
                        "text": "New rewards screen popup for Races to explain the Mini-Races"
                    },
                    {
                        "text": "For more challenge consistency in high rounds, the standard roundset has been extended up to round 120. Now in game modes with standard roundsets the freeplay rounds from 101-120 will be predetermined. This is a big deal for us and we plan to do more custom rounds past 120, so we do want to hear feedback from the community here. BTD6 reddit is the best place for that - if you haven’t signed up, please do! https://www.reddit.com/r/btd6/"
                    },
                    {
                        "text": "A large damage type and Bloon type rework has been made to optimize performance, and this will resolve a number of issues with incorrect damage types dealing damage where they should not."
                    },
                    {
                        "text": "Players may now always attempt daily challenges & races even on maps that are currently locked for them. In the initial design we thought this was important to push players to unlock more maps than the first few, but as we have grown our map count it is now more important to give players a chance to sample maps they haven’t unlocked."
                    },
                    {
                        "text": "Added deep link share buttons for co-op games and custom challenges, which can be used to launch the game directly into a co-op lobby, or custom challenge screen! To create one, simply select the clipboard and share that link with your friends, and they will tunnel right into your game.",
                        "items": [
                            {
                                "text": "One important note on Steam - due to issues that we haven’t yet been able to resolve with Unity, the deeplink will only launch the game on Steam if BTD6 is not open. If BTD6 is already open, please copy and paste the code as normal. We’ll keep working to make it smoother with each update, but for now if you play on Steam please pay attention to the two options on the link page - if your game is open, copy the code; if your game is not open, choose the Launch Game button."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Various localization & UI text fixes"
                    },
                    {
                        "text": "Tower UI in co-op should now refresh when viewing a tower that is being upgraded by another player"
                    },
                    {
                        "text": "Strong target priority again picks Fortified Blimps over their standard variants"
                    },
                    {
                        "text": "Added a first-time trigger to explain recent changes to map unlocks"
                    },
                    {
                        "text": "Information on lobbies that cannot be made public has been moved from the corner of the screen to a popup over the public button"
                    },
                    {
                        "text": "Player XP bar now has comma separators"
                    },
                    {
                        "text": "Optimization to Bloon pop fx"
                    },
                    {
                        "text": "Resolved some issues with hero placement/upgrade effects"
                    },
                    {
                        "text": "Updated share icons within Challenge Editor"
                    },
                    {
                        "text": "Resolved a crash with entering Races or Daily Challenges too fast"
                    },
                    {
                        "text": "Drop & Lock placement mode now works with nudge state"
                    },
                    {
                        "text": "Resolved a UI issue with towers not correctly displaying locked upgrades"
                    },
                    {
                        "text": "Added [X] close button to race pass pop-up and hero bundle pop-ups in addition to them closing when tapping out of the menu"
                    },
                    {
                        "text": "Resolved a bug with Blowback which could cause a Golden Bloon to remain immune to damage forever"
                    },
                    {
                        "text": "Chutes co-op vertical split has been centered"
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "As a part of the damage & types rework above, basic Ice damage can no longer damage Golden Bloons without the correct upgrades / buffs"
                            },
                            {
                                "text": "0-2-0 Deep Freeze and higher upgrades should correctly play sound again"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "4-X-X Aircraft Carrier planes should no longer play extra spawn sounds"
                            },
                            {
                                "text": "X-4-X MOAB Takedown ability ‘tiebreakers’ picking incorrect targets has been resolved"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "items": [
                            {
                                "text": "3-X-X Laser Cannon path once again has a sell animation"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-2-X Wall of Fire visual issue resolved where tower attack animation would not be correct under some cases"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "As a part of the damage types rework mentioned above, Acidic Mixture Dip will now correctly allow Ice attacks to damage Lead Bloons"
                            },
                            {
                                "text": "As a part of the damage types rework, Acidic Mixture Dip will now correctly allow sharp towers to damage Golden Bloons"
                            },
                            {
                                "text": "As a part of the damage types rework, Acidic Mixture Dip will no longer allow Explosive attacks to damage DDTs"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "1-0-1 and higher upgrades should correctly play sound again"
                            }
                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "As a part of the damage & types rework, Lv5 will no longer allow energy attacks to damage DDTs"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "items": [
                            {
                                "text": "Level 8 ‘camo’ unlock visual correctly displays at this level again, not level 9"
                            },
                            {
                                "text": "Level 10 UCAV no longer creates a secondary ice platform when etienne is placed on frozen water"
                            }
                        ]
                    },
                    {
                        "title": "Achievements",
                        "items": [
                            {
                                "text": "Sapper achievement description has been clarified; the important note here for players chasing that achievement is to not one shot or strip the fortified state, so unstable concoction, shattering shells, and insta kills like moab takedown in particular should be avoided"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Unity has updated to allow cursor size to match system size so it is now possible to scale this up on Steam! We do not have a solution (still working with Unity on this) to scale the desktop cursor in game, so it must be done with system settings. On Windows this can be found by searching in the Windows search function “Mouse pointer size”. Also note the cursor resolution might become crusty due to the image size being scaled up."
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "For new players, camo is the first real game mechanic that presents a wall for new players. To combat this we have swapped the initial unlock costs of Spike-o-pult & Crossbow to nudge new players more towards upgrading down the camo path for Dart Monkeys first.",
                        "items": [
                            {
                                "text": "3-X-X Spike-o-pult XP unlock cost increased from 1900 -> 2100"
                            },
                            {
                                "text": "X-X-3 Crossbow XP unlock cost reduced from 2100 -> 1900"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "In some cases the effort to make upgrades feel powerful eclipsed the need for monkey tower weaknesses to be supported by path or other tower synergies. Reviewing the state of White compared to Black Bloons we feel it no longer makes sense for Bomb stall path to ignore inherent Bomb weakness compared to Ice, which can’t fully get around it’s weakness until T5. MOAB Maulers have been a very strong meta spam for a while now, so we are chipping off most of its ceramic bonus at T3.",
                        "items": [
                            {
                                "text": "4-X-X Bloon Impact damage type Normal (All) changed to Explosive"
                            },
                            {
                                "text": "5-X-X Bloon Crush remains Normal type"
                            },
                            {
                                "text": "X-3-X MOAB Mauler ceramic damage reduced from 3 -> 1"
                            },
                            {
                                "text": "X-4-X MOAB Assassin ceramic bonus unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "Inferno Ring is priced high for a low single-target damage pierce based tower when pierce isn't as important at high rounds, so price has been reduced. We liked Maelstrom’s pierce change, however want to ease off a little as higher density rounds feel a lot more position & timing dependent now than they need to be. Similar to Bomb, Tack Zone’s innate popping of Lead with obviously sharp projectiles no longer feels fitting and so along with a large price reduction the damage type stays Sharp.",
                        "items": [
                            {
                                "text": "5-X-X Inferno Ring price reduced from 50,000 -> 45,500"
                            },
                            {
                                "text": "X-4-X Maelstrom ability pierce increased 100 -> 200"
                            },
                            {
                                "text": "X-X-5 Tack Zone price reduced from $24,000 -> 20,000"
                            },
                            {
                                "text": "X-X-5 Tack Zone damage type changed Normal -> Sharp"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "By buffing Snowstorm to have the same cooldown as Absolute Zero we unintentionally ruined a certain style of player-made challenge based on Absolute Zero timing. We have reworked the buff from v24 in order to keep the same freeze uptime but allow this type of challenge to be possible once again.",
                        "items": [
                            {
                                "text": "X-5-X Absolute Zero ability cooldown reduced from 30s -> 20"
                            },
                            {
                                "text": "X-5-X Absolute Zero ability duration reduced from 15s -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Most cases for Buccaneer currently find you better off sticking to Destroyers and adding other buffs, so we have made a couple slight nudges to this top path",
                        "items": [
                            {
                                "text": "2-X-X Double Shot price increased from $500 -> 550"
                            },
                            {
                                "text": "4-X-X Aircraft Carrier price reduced from $7500 -> 7200"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Dartling Gunner’s Rocket Storm is currently overperforming versus Buckshot, so we made slight adjustments to the price of these upgrades.",
                        "items": [
                            {
                                "text": "X-4-X Rocket Storm price increased from $4800 -> 5100"
                            },
                            {
                                "text": "X-X-3 Buckshot price reduced from $3800 -> 3400"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Wall of Fire has been reworked in order to cut down on cases of frustrating randomness as well as the initial cooldown on the attack being reduced. Additionally at the highest tier all fire attacks will be further enhanced in damage",
                        "items": [
                            {
                                "text": "X-2-X Wall of Fire now targets ‘closest’ track position by default"
                            },
                            {
                                "text": "X-2-X Wall of Fire initial cooldown reduced from 5.5s -> 1"
                            },
                            {
                                "text": "X-5-X Wizard Lord Phoenix, Fireball damage increased from 9 -> 27"
                            },
                            {
                                "text": "X-5-X Wizard Lord Phoenix, Wall of Fire damage increased 1 -> 3"
                            },
                            {
                                "text": "X-5-X Wizard Lord Phoenix, Breath damage increased from 2 -> 6"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "As Super Monkey’s range crosspath is too often considered unnecessary for Sun Avatar & Dark Knight we have chosen to move some of Robo Monkey’s pierce down into a lower tier again",
                        "items": [
                            {
                                "text": "0-1-0 Super Range now also increases Super Monkey pierce by 1"
                            },
                            {
                                "text": "0-3-0 Robo Monkey pierce remains at 6"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "Ninja’s Bloon Sabotage is often used in tricky rounds as a powerful slow with a long duration, so we have made a gentle price increase here to reflect that support strength.",
                        "items": [
                            {
                                "text": "X-4-X Bloon Sabotage price increased from $5000 -> 5200"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "Druid’s top path Storm & Ball Lightning upgrades needed a value boost versus other options versus other paths of other tower choices, so these have been given a small price buff for now.",
                        "items": [
                            {
                                "text": "3-X-X Druid of the Storm price reduced from $2000 -> 1850"
                            },
                            {
                                "text": "4-X-X Ball Lightning price reduced from $5500 -> 5100"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "Monkey Village’s range at Primary Expertise has been increased slightly to open up downstream strategies by fitting additional Primary towers within range",
                        "items": [
                            {
                                "text": "5-X-X Village influence radius increased from 48 -> 55"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Engineer XXL trap is extremely powerful but too expensive for backline dps and we’d like to see it more viable for frontline engineer builds",
                        "items": [
                            {
                                "text": "X-X-5 XXL Trap price reduced from $60,000 -> 54,000"
                            }
                        ]
                    },
                    {
                        "tower": "Sauda",
                        "description": "Yes, here it is the nerf you’ve all been waiting for. But as some in the community predicted, it’s not that much of a nerf. Sauda’s range has been tightened up as her role is specifically about high damage in a small, focused area.",
                        "items": [
                            {
                                "text": "Attack range reduced from 25 to 23"
                            },
                            {
                                "text": "Lv6 Attack range bonus reduced from 4 -> 3"
                            },
                            {
                                "text": "Lv15 Attack range bonus reduced from 4 -> 3"
                            }
                        ]
                    },
                    {
                        "title": "Monkey Knowledge",
                        "description": "Hypothermia’s benefits have been made redundant so the MK now has a brand new effect.",
                        "items": [
                            {
                                "text": "Hypothermia now instead increases the duration of snowstorm by 1 second"
                            }
                        ]
                    },
                    {
                        "title": "Powers",
                        "description": "Thrive has been one of the least understood Powers in the game, and that misunderstanding has only added to the use case delta vs Cash Drops. To improve balance Thrive has been upgraded.",
                        "items": [
                            {
                                "text": "In addition to increasing the Cash Generation of towers that generate cash, Thrive will now also increase the amount of Cash gained from Bloon pops for its duration"
                            },
                            {
                                "text": "New visual fx have been added to Thrive to show that it is currently active"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "24.2": {
        "release": "2021-03-10",
        "items": [
            {
                "title": "Update Notes",
                "items": [
                    {
                        "text": "Changing round in sandbox above 80 and then back below again no longer requires a restart to fix scaling"
                    },
                    {
                        "text": "Fixed wrong Trophy Count value displaying upon first time viewing race section"
                    },
                    {
                        "text": "Fixed some upgrades causing the tower to lose certain sound effects"
                    },
                    {
                        "text": "Fixed an issue for some players having certain MK points visually applied when not assigned but not working correctly at all times"
                    },
                    {
                        "text": "Fixed Fortified Variants for new limited Easter Chocolate MOAB Skins"
                    },
                    {
                        "text": "Fixed Trending not working correctly upon first entering Challenge Browser"
                    },
                    {
                        "text": "Fixed a spelling issue in new Discord Rich Presence for steam builds"
                    },
                    {
                        "text": "Fixed a rare co-op crash"
                    }
                ]
            }
        ]
    },
    "24.1": {
        "release": "2021-03-10",
        "items": [
            {
                "title": "Update Notes",
                "items": [
                    {
                        "text": "Restarting a game should no longer prevent it from giving Collection Event progress"
                    },
                    {
                        "text": "Resolved an issue that reverted the Recurring Rangs MK point for many users"
                    },
                    {
                        "text": "Resolved an issue where loading a save could prevent it granting Collect Event progress"
                    }
                ]
            }
        ]
    },
    "24.0": {
        "release": "2021-03-10",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "text": "New Melee hero - Sauda the Swordmaster, to hack, slash and slice your way to victory.",
                        "items": [
                            {
                                "text": "Melee towers have a long history of discussion by both dev team and community. We’ve enjoyed adding them to the mix with Pat Fusty, and several characters in BATTD. The design concept for Sauda has been around for a few years, and we truly hope the many, many players who have asked for a “sword hero” over the years will enjoy!"
                            }
                        ]
                    },
                    {
                        "text": "New Intermediate map Balance. You can play it in CHIMPS right now using this challenge code: ZMUHSGK"
                    },
                    {
                        "text": "New Benjamin skin Sushi Bento - treat him nicely or else there’s NO SUSHI FOR YOU!"
                    },
                    {
                        "text": "The Golden Bloon has returned! A chosen map in each difficulty will now contain an extra Golden Bloon every 10 rounds, these Golden Bloons can get tricky to pop on the higher rounds but do not cost any lives when they escape. If popped successfully every Golden Bloon will reward a small monkey money bonus. (Gold Bloons will not spawn in Deflation or CHIMPS modes)",
                        "items": [
                            {
                                "text": "Golden Bloon is another design item we’ve had on the “add this” list since BTD6 was launched. We had fun adding the Golden Bloon to BTD5 and even more frustrating fun when it went into BSM2, so for BTD6 we wanted to take elements of each and make it work even better with the scaling power of BTD6. And who doesn’t love-hate treasure gobliny things!"
                            },
                            {
                                "text": "We’ve felt it ourselves and had feedback from players that they like chasing the Collection Reward bonuses on different maps and that they’d like to have a way to earn a bit more Monkey Money each game. Adding the Golden Bloon helps address those items, and making it evolve and stay relevant as late round power grows feels good to us from a design side. We hope you enjoy!"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Heroes: Benjamin Matrix Placement"
                            },
                            {
                                "text": "Monkeys: Ninja kiwi ninja pets for Ninja Kiwi fans (yes, we finally put a kiwi in the game!)"
                            },
                            {
                                "text": "Bloons: Flowers Pop FX"
                            },
                            {
                                "text": "Co-op: Dancing Monkey emote, Blooming Flowers emote"
                            }
                        ]
                    },
                    {
                        "title": "Community Winner avatars",
                        "items": [
                            {
                                "text": "Tack Monkey - by u/mutamarkl"
                            },
                            {
                                "text": "Powerful Sentai - by u/Kuzuyku"
                            },
                            {
                                "text": "Intense Wizard - by u/_Concilliabule_"
                            },
                            {
                                "text": "To the other 7 winners and the many contributors and voters - thanks so much for your patience. We didn’t want to flood the Trophy Store or profile inventory all at once, and we want each group of winners to have some time in the sun. The others will be coming in the next updates!"
                            }
                        ]
                    },
                    {
                        "text": "Limited Time only: Obyn Bunny Pet, Obyn’s Eggs Avatar, Chocolate MOAB, Chocolate BFB, Bunny Ear Bloons, Dartling Easter Eggs projectiles for Buckshot & Hydra Rockets"
                    },
                    {
                        "text": "Race Pass IAPs have been added to the game (in a block of 4, or a discounted block of 12). Each Race Pass will grant unlimited Race Entries for one entire Race Event.",
                        "items": [
                            {
                                "text": "Races have been a locus of some of the most dedicated BTD6 play in the game, and we’ve been putting a lot of effort into keeping Races challenging and working with community race ideas. Our goals since launch have been to keep Races challenging, fair, leaderboard policed, and practical to play over and over for dedicated players."
                            },
                            {
                                "text": "We’ve recently had feedback from the community that the practical repeat play has not been achieved. The idea of a pay to play over and over was raised and that is what the Race Pass seeks to address. Making this IAP keeps the system extra secure, and we chose to make it a per use rather than time-based system so players could skip races by choice or if they can’t play on any given weekend."
                            },
                            {
                                "text": "We’ll keep listening to feedback on Races and on these Race Passes, and we will also do more discounted Race entry weekends as we’ve done in the past for players who want to stick with Monkey Money entry."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Key Features",
                "items": [
                    {
                        "text": "The experience reduction for continuing into freeplay has been reduced from 90% to 70%. Whatever the game mode, rounds beyond 100 remain at 90% reduction. As players are having more fun going into freeplay, especially in co-op, we agree that the rounds up to 100 should have this additional xp value."
                    },
                    {
                        "text": "New Challenge Info information button has been added to all custom user challenges. Open this panel to view some detailed stats for any challenge including Attempts, Wins, Fails, Unique Players, Victorious Players as well as the First & most recent players to win the challenge."
                    },
                    {
                        "text": "Some of the last few Bloons that cause you to lose in any game will now be displayed on the defeat screen. We’re hoping this will help new and experienced players both - helping underscore whether you are missing a certain damage type or deep damage ability, and whether you were close to beating it, or still hundreds of lives off!"
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Advanced Challenges should now count towards most player stats."
                    },
                    {
                        "text": "Those daring should now attempt to take on the challenge of Ravine CHIMPS."
                    },
                    {
                        "text": "Map unlocking system has been reworked. Instead of unlocking in the same order for all players when you beat a map from a lower difficulty, you will now gain the option to choose a map from the next higher difficulty to unlock. This is in response to watching many new Twitch streamers wanting to choose the look of a later map in the list but having to go one by one, and we like the flexibility to choose within each difficulty much better."
                    },
                    {
                        "text": "As they do not spawn until after round 80 naturally, DDT and BAD Bloons will now spawn in sandbox with at least the minimum level of freeplay ramping they would normally have in regular game conditions."
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Upgrade description and localization fixes and tweaks - each update it’s important that we capture balance changes, as well as crosspath functions that players might otherwise miss (more info below)"
                    },
                    {
                        "text": "Regrow Rate icon now correctly displays on Odysseys when rate has been modified"
                    },
                    {
                        "text": "Many behind the scenes optimizations & removing of some unused art assets"
                    },
                    {
                        "text": "Heroes no longer play level 20 audio when they hit level 20 if hero audio is disabled"
                    },
                    {
                        "text": "Resolved some issues in sandbox freeplay with MOABs leaking incorrect amounts of lives"
                    },
                    {
                        "text": "Due to past corruption issues, loading cloud data will no longer load challenge creation saves"
                    },
                    {
                        "text": "Resolved a Crash/UI break caused by cycling through instamonkey pages too fast"
                    },
                    {
                        "text": "Monkey Meadow modified slightly to allow for Juggernaut bounces off new trees near the map entrance. We’ve watched too many players try the Juggernaut for the first time on this map with good placement but not see the value of object rebounds."
                    },
                    {
                        "text": "Spike Factory pineapples skin description has been updated with more detail"
                    },
                    {
                        "text": "Fancied up the save conflict screen"
                    },
                    {
                        "text": "Resolved some layering of UI popups"
                    },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "X-4-X Super Monkey Fan Club description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "5-X-X Glaive Lord description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "3-X-X Really Big Bombs description has been corrected"
                            },
                            {
                                "text": "X-4-X MOAB Assassin description has been updated with more detail"
                            },
                            {
                                "text": "X-X-5 Bomb Blitz description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-X-X Ring of Fire description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-X-X Embrittlement description has been updated with more detail"
                            },
                            {
                                "text": "X-3-X Arctic Wind description has been updated with more detail"
                            },
                            {
                                "text": "X-5-X Absolute Zero description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-1-0 Bloon Liquifier can now correctly pierce through 3 Bloons, not just 2."
                            },
                            {
                                "text": "4-X-X Bloon Liquifier description has been updated with more detail"
                            },
                            {
                                "text": "X-4-X Glue Storm description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-4-X Supply Drop description has been updated with more detail"
                            },
                            {
                                "text": "X-X-4 Full Auto Rifle description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "3-X-X Submerge and Support description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "1-X-X Faster Shooting description has been corrected"
                            },
                            {
                                "text": "X-5-X Pirate Lord description has been updated with more detail"
                            },
                            {
                                "text": "X-X-1 Long Range description has been corrected"
                            },
                            {
                                "text": "X-X-4 Favoured Trades description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-1-X Exploding Pineapples description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-X-1 Faster Firing description has been updated with more detail"
                            },
                            {
                                "text": "X-X-3 MOAB Shove description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-X-2 Burny Stuff description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "items": [
                            {
                                "text": "3-X-X Laser Cannon description has been updated with more detail"
                            },
                            {
                                "text": "X-3-X Hydra Rocket Pods description has been updated with more detail"
                            },
                            {
                                "text": "X-4-X Rocket Storm description has been updated with more detail"
                            },
                            {
                                "text": "X-5-X M.A.D description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-3-X Dragon’s Breath description has been updated with more detail"
                            },
                            {
                                "text": "X-X-3 Shimmer description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-X-3 Dark Knight description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-2-X Counter-Espionage description has been updated with more detail"
                            },
                            {
                                "text": "0-0-4 Sticky Bomb should work correctly now and not break with DoTs - please tell us if not because we’ve spent so much time on this, but hopefully we won’t hear from anyone on this!"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "2-X-X Acidic Mixture Dip description has been updated with more detail"
                            },
                            {
                                "text": "X-X-3 Lead to Gold description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-5-X Spirit of the Forest vine visuals should correctly layer over split tracks now"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "items": [
                            {
                                "text": "0-4-2 Spike Storm now correctly works on splitting tracks"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-4-X Call to Arms description has been corrected"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-2-X Deconstruction description has been updated with more detail"
                            },
                            {
                                "text": "X-4-X Overclock description has been updated with more detail"
                            },
                            {
                                "text": "X-5-X Ultraboost description has been updated with more detail"
                            },
                            {
                                "text": "X-X-1 Oversize Nails description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Level 3 The Long Arm of the Light description has been updated with more detail"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "items": [
                            {
                                "text": "UCAV should no longer have a footprint slightly below Etienne that blocks towers from being placed in that area"
                            }
                        ]
                    },
                    {
                        "title": "Monkey Knowledge Force vs Force",
                        "items": [
                            {
                                "text": "Description has been corrected"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Improved integration with discord - now shows a variety of game and menu states",
                        "items": [
                            {
                                "text": "We are working on improved integration with Steam and Twitch for future updates, we appreciate your patience on these!"
                            }
                        ]
                    },
                    {
                        "text": "Resolved an issue that could occur on Steam causing the game to hang at step 3 of 8"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "The previous sharpshooter rework caused more trouble than intended in setups without much other cleanup by popping Black Bloons into large clusters of reds which then clogged up the pierce. We decided to keep the buffed attack speed value as well as adding back the stronger damage value.",
                        "items": [
                            {
                                "text": "X-X-4 sharpshooter damage increased 5 -> 6"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "Rotating Glaives aren’t quite enough for higher tier rounds, and especially struggle against Fortified Super Ceramics so we have added a small bonus to combat these.",
                        "items": [
                            {
                                "text": "5-X-X Glaive Lord’s rotating glaives now deal bonus damage to Fortified Bloons +2"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "Maelstrom upgrades are in a good spot overall, but specifically for the low cost of this tower with such a rapid cooldown it was able to hit too many targets under race conditions. This targeted nerf is to the value of it under those race conditions and should be negligible in other game areas.",
                        "items": [
                            {
                                "text": "X-4-X Blade Maelstrom pierce per blade reduced to 100"
                            },
                            {
                                "text": "X-5-X Super Maelstrom pierce per blade reduced to 500"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Small tweaks to the benefit of still under-utilized T5 Ice Monkey upgrades.",
                        "items": [
                            {
                                "text": "5-X-X Super Brittle price reduced from $30,000 -> 28,000"
                            },
                            {
                                "text": "X-5-X Absolute Zero Ability & buff duration increased from 10s -> 15"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "More tweaks with the intent of viable stepping stones toward The Bloon Solver. Due to quirks with game state interactions temporarily preventing more nuanced changes, we have decided to leave MOAB Glue’s slow amount on MOABs as it was previously, coming back to Relentless later. However X-X-4 Relentless Glue will still layer over the top of it.",
                        "items": [
                            {
                                "text": "3-X-X Bloon Dissolver price reduced $2600 -> 2500"
                            },
                            {
                                "text": "4-X-X Bloon Liquifier price reduced $5500 -> 5000"
                            },
                            {
                                "text": "X-X-3 MOAB Glue MOAB slow effectiveness changed from 0.75x back to 0.625x"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Similar to Tack Shooter Maelstrom upgrades, we have targeted a nerf to Ground Zero for race conditions by amounts which are not relevant outside of those conditions. Additionally Tsar Bomba has received a much smaller version of this nerf along with a reduced cooldown to increase its relevance.",
                        "items": [
                            {
                                "text": "X-4-X Ground Zero ability pierce reduced to 1000"
                            },
                            {
                                "text": "X-5-X Tsar Bomba ability pierce reduced to 5000"
                            },
                            {
                                "text": "X-5-X Tsar Bomba ability cooldown reduced from 40s -> 35"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Razor Rotors doesn’t synergize well with it’s own T2 and is kinda the dunce of T3 Helis",
                        "items": [
                            {
                                "text": "3-X-X Razor Rotors blade damage increased from 1 -> 2"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "As an expensive high-layer T5 DPS tower lurking behind a mainly support path on path 3 Mortar it’s not easy to save for, so Blooncineration has had a fair price reduction.",
                        "items": [
                            {
                                "text": "X-X-5 Blooncineration price reduced from $45,000 -> 40,000"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "Base Dartling performance doesn’t quite offset the handholding necessary to use it well, so base price has been reduced to make those first couple upgrades come a little faster. Plasma Accelerator attack delay has been buffed so that now the beam ‘tic rate’ matches the attack speed at tier 3, overall giving it a 20% buff to all DPS which carries on up to the Tier 5. Finally Bloon Exclusion Zone’s price has as well been reduced slightly for edge case balance.",
                        "items": [
                            {
                                "text": "Base Price reduced from $1000 -> 850"
                            },
                            {
                                "text": "4-X-X Plasma Accelerator attack delay buffed from 0.25s -> 0.2"
                            },
                            {
                                "text": "X-X-5 Bloon Exclusion Zone price reduced from $60,000 -> 58,000"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "While not considered an issue on the same level for Races, the Bloon Annihilation ability has preemptively had pierce reduced under the same reasoning as Ground Zero and Maelstrom, but by amounts that still likely won’t be noticeable even under most Race conditions - but we’re keeping an eye on it. Additionally the price of this upgrade has been reduced by a fair amount.",
                        "items": [
                            {
                                "text": "X-4-X Tech Terror price reduced from $22,000 -> 19,000"
                            },
                            {
                                "text": "X-4-X Tech Terror ability pierce reduced to 2000"
                            },
                            {
                                "text": "X-5-X Anti Bloon ability pierce reduced to 10,000"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Alchemist has been given a small push towards the current underused Brew crosspath. Previously this crosspath only applied a benefit to Brew & Stimulant but now along with a buff to that, Acidic Mixture Dip will also gain a slight benefit from the crosspath.",
                        "items": [
                            {
                                "text": "2-2-0 - Acidic Mixture Dip charges per stack increased from 10 -> 13"
                            },
                            {
                                "text": "3-2-0 - Berserker Brew charges per stack increased from 35 -> 40"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Spiked Balls are used quite a lot, but we like their overall position right now so they have had only a slight bump up in price, along with a bigger decrease to the price of T4 Spiked Mines. In addition, Permaspike’s neglected crosspath has had a small pierce increase as currently their only real use is under custom challenge rules.",
                        "items": [
                            {
                                "text": "3-X-X Spiked Balls price increased from $2200 -> 2300"
                            },
                            {
                                "text": "4-X-X Spiked Mines price reduced from $12,000 -> 11,000"
                            },
                            {
                                "text": "1-0-5 Permaspike pierce increased from 70 -> 80"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "description": "To cut down a little on the RNG aspect of Obyn strategies, his abilities will now be able to target Bloons in the same fashion as Gwendolin’s Cocktail, and only place randomly while none are within radius (yay!).",
                        "items": [
                            {
                                "text": "Obyn’s level 3 Brambles will now target Bloons in radius unless there is none"
                            },
                            {
                                "text": "Obyn’s level 10 Wall of Trees will now target Bloons in radius unless there is none"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "23.0": {
        "release": "2021-02-01",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "title": "New Expert Map, Ravine!"
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Monkeys: Pineapple projectiles for Spiked Ball factory"
                            },
                            {
                                "text": "Bloons: Trucker Hats, Lantern BFB skin, Pow Pop FX"
                            },
                            {
                                "text": "Game & UI: BMC Street Party music track, Kabuki Ninja avatar, Heli Pilot avatar"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Challenge Browser changes / additions",
                "items": [
                    {
                        "text": "Challenges now allow users to toggle between Player Completion Rate (current number, which displays % of players who have beaten the challenge) & Win Rate (displays the total % of wins against losses)"
                    },
                    {
                        "text": "Challenge Browser now supports an option to “hide” challenges from searches if you have already completed them"
                    },
                    {
                        "text": "Added a ‘follow user’ option & ‘Following’ search to the challenge browser"
                    },
                    {
                        "text": "Challenges that have been greyed out in searches from a previous version of the game will now update to blue again if they are passed on a newer version without using double cash by enough players"
                    },
                    {
                        "text": "Challenge browser now supports filtering challenges by maximum number of rounds & minimum number of rounds. This filter will unfortunately not work on existing challenges."
                    },
                    {
                        "text": "Challenge browser win rates now support displaying >99% & <1% for win rate, if a challenge is not quite actually 100% or 0%."
                    },
                    {
                        "text": "Challenge browser has had some general improvements & optimization to filters, sorting, searching & returning from a challenge"
                    },
                    {
                        "text": "Added an option to disable Double Cash in challenge creation"
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Added warnings to some screens which had started to be blocked from loading under certain settings in VPN’s & other 3rd party DNS based filters."
                    },
                    {
                        "text": "Reworking of tower upgrade UI when hovering/holding over upgrades"
                    },
                    {
                        "text": "Added a first-time pop-up for targeting priorities"
                    },
                    {
                        "text": "First ever continue to be used is now free"
                    },
                    {
                        "text": "Added a ‘customized rounds’ icon for when rounds are changed in Odyssey/ Race"
                    },
                    {
                        "text": "Improved sorting of race leaderboard scores"
                    },
                    {
                        "text": "Apopalypse screen will now display a victory at round 60"
                    },
                    {
                        "text": "Some new profile stats have been added, Most Experienced Monkey & its XP, Insta Collection progress, & Collection Chests opened (This stat begins tracking now)"
                    },
                    {
                        "text": "Center lanes widened on the intermediate map Bazaar to allow Medium placement."
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Resolved some map specific FX not speeding up their animations when in 3x speed"
                    },
                    {
                        "text": "Resolved an issue that would cause pets to continue playing their SFX after being sold"
                    },
                    {
                        "text": "Resolved some issues causing Bloons to choose path inconsistently when tracks split off in multiple directions"
                    },
                    {
                        "text": "Fixed login prompts which had stopped working for guest users"
                    },
                    {
                        "text": "Login page should correctly load in the webview"
                    },
                    {
                        "text": "A number of localization issues resolved"
                    },
                    {
                        "text": "Improved tutorial to feel less clunky"
                    },
                    {
                        "text": "Resolved some collision on Flooded Valley"
                    },
                    {
                        "text": "Snap of Your Fingers achievement correctly works again for players with Double Cash"
                    },
                    {
                        "text": "The corner of some random Heli can no longer be spotted in the corner of Chutes"
                    },
                    {
                        "text": "Resolved an issue with Techbots linked to engineers not remembering to trigger Overclock after loading a save"
                    },
                    {
                        "text": "Resolved an issue with Odyssey wins getting mixed up with regular wins sometimes"
                    },
                    {
                        "text": "Restarting apopalypse will no longer pause the game"
                    },
                    {
                        "text": "Resolved an issue with Flooded Valley blocking vision on some towers at times when it should not"
                    },
                    {
                        "text": "Added some instruction for how to unlock locked maps"
                    },
                    {
                        "text": "Minor UI fixes and optimizations in a few places"
                    },
                    {
                        "text": "Some general minor cleaning up of UI in challenge creation"
                    },
                    {
                        "text": "Changing hero skin right before a co-op game should no longer cause a desync"
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "2-X-X Advanced Intel no longer gains camo detection from Lvl 1 Etienne or Dartling"
                            },
                            {
                                "text": "3-X-X & 4-X-X Subs have had some optimizations to unnecessary code"
                            },
                            {
                                "text": "4-X-X Sub correctly layers assets onto regrow Bloons again"
                            },
                            {
                                "text": "5-X-X Sub inconsistencies resolved with how buffs were applying"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "No longer locks in place after enabling wingmonkey and then disabling knowledge"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-X-4 Shattering Shells removing fortification should now reflect the children Bloons losing their fortification as well towards the damage counter"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "1-1-0 Fireball now correctly ignores blockers with Guided Magic"
                            },
                            {
                                "text": "X-X-4 Necromancer no longer depletes grave from current round before previous"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "3-X-X Berserker Brew no longer closes open UI panels when buffing selected tower"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-1-X Regrow Blocker has had some inconsistencies fixed"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "5-X-X Paragon Sentry “can always sell” property on sentries has been fixed to work in challenges as well"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Can no longer shoot over walls when locked on top of them"
                            },
                            {
                                "text": "Lock Targeting Reticle now scales in size to reflect accuracy changes"
                            },
                            {
                                "text": "4-X-X Plasma Accelerator no longer creates Plasma Pools when beams are obstructed but would be crossing streams if they were not"
                            }
                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "Is no longer so terrified of MOAB Class Bloons that he is occasionally rendered speechless by the mere sight of them"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "items": [
                            {
                                "text": "Track items should once again always be retained when loading saves"
                            }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "items": [
                            {
                                "text": "Lvl 11 description updated to reflect interaction with Necromancers"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "items": [
                            {
                                "text": "Visual effects should all work correctly again while Pat is placed in water"
                            },
                            {
                                "text": "Resolved a crash caused by chinooking Pat under specific circumstances"
                            }
                        ]
                    },
                    {
                        "tower": "Knowledge",
                        "items": [
                            {
                                "text": "Backroom Deals knowledge once again works"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "While we’re happy with Dart Monkey being a more niche or early use tower, too many people were finding Juggernaut itself even further niche or lackluster on first impression. While retaining the overpower power potential we’ve added a beefy impact to each individual target hit, and we’ve tweaked sharpshooter slightly to provide similar power but with more of a speed focus to enable more distinct crosspath choice between speed and pierce.",
                        "items": [
                            {
                                "text": "4-X-X Juggernaut damage increased from 1 -> 2"
                            },
                            {
                                "text": "4-X-X Juggernaut pierce reduced from 100 -> 50"
                            },
                            {
                                "text": "X-X-4 Sharpshooter attack rate increased from 0.85 -> 0.75"
                            },
                            {
                                "text": "X-X-4 Sharpshooter damage reduced from 6 -> 5"
                            },
                            {
                                "text": "T5's both remain the same"
                            }
                        ]
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "Small price adjustment to push when you get this tower a little closer to when it’s useful.",
                        "items": [
                            {
                                "text": "5-X-X Glaive Lord price reduced from $40,000 to $35,000"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "Small nerf to the regular-Bloon power of MOAB Mauler’s domination.",
                        "items": [
                            {
                                "text": "X-3-X MOAB Mauler bonus to Ceramic reduced from 4 -> 3"
                            },
                            {
                                "text": "X-4-X MOAB Assassin unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "With pierce and range on the base Tack Zone so high that increases weren’t noticeable the middle crosspath was underserved. To balance crosspathing we have reworked the base Tack Zone around lower values then improving them greatly for the crosspaths.",
                        "items": [
                            {
                                "text": "X-X-5 The Tack Zone damage increased from 1 -> 2"
                            },
                            {
                                "text": "X-X-5 The Tack Zone range reduced from 46 -> 30"
                            },
                            {
                                "text": "X-X-5 The Tack Zone pierce reduced from 9 to 4"
                            },
                            {
                                "text": "0-2-5 The Tack Zone range increased to 50"
                            },
                            {
                                "text": "0-2-5 The Tack Zone pierce increased to 10"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "Ice Monkey power is currently too bottom heavy and mid-to-higher tiers are neglected, so some tweaks to mid-tier upgrades have been made.",
                        "items": [
                            {
                                "text": "4-X-X Embrittlement price reduced from $3000 -> 2200"
                            },
                            {
                                "text": "X-3-X Arctic Wind price reduced from $3200 -> 2900"
                            },
                            {
                                "text": "X-X-3 Cryo Cannon price reduced from $2000 -> 1750"
                            },
                            {
                                "text": "X-4-X Snowstorm ability cooldown decreased from 60s -> 30"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "Adjustments to top-path upgrades to make each step more noticeable. Very small nerf to the slow amount on MOAB Glue as it has for a long time held a dominating spot in MOAB support, but this same amount has been returned to the previous value at Tier 4. We are still looking at future improvements here, including reworking the priority tree of glue stacks.",
                        "items": [
                            {
                                "text": "3-X-X Bloon Dissolver price reduced from $2700 -> 2600"
                            },
                            {
                                "text": "4-X-X Bloon Liquifier pierce increased from 1 -> 2"
                            },
                            {
                                "text": "X-X-3 MOAB Glue slow amount on MOABs reduced from 0.625x -> 0.75x"
                            },
                            {
                                "text": "X-X-4 Relentless Glue slow amount on MOABs remains 0.625x"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "Small improvements for underloved sniper upgrades with respective path specialties intact. As bottom path sniper has proven superiority for group damage dealing in many situations and middle T4 on the group-damage path has only offered a farming option, the pierce of shrapnel has been doubled at this T4 to add offensive value as well..",
                        "items": [
                            {
                                "text": "5-X-X Cripple MOAB damage increased from 60 -> 80"
                            },
                            {
                                "text": "X-4-X Supply Drop’s shrapnel pierce increased from 3 -> 6"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "As Bloontonium Reactor rarely uses up enough pierce that the pierce crosspath would ever matter, a large chunk of this has been moved into the middle crosspath.",
                        "items": [
                            {
                                "text": "4-0-0 Bloontonium Reactor pierce reduced from 70 -> 50"
                            },
                            {
                                "text": "4-1-0 Bloontonium Reactor pierce reduced from 84 -> 70"
                            },
                            {
                                "text": "4-2-0 Bloontonium Reactor pierce increased from 50 -> 100"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Monkey Ace was never intended to be a great starting tower and instead come into power at mid- and high-tier upgrades, but since the base tower feels lacking to new players (and some of us old timers) we decided to rework low tier power into the base tower. In addition to this we are experimenting with adding a small amount of homing to the spectre upgrade as rapid fire missing is not the intended design.",
                        "items": [
                            {
                                "text": "Monkey Ace projectile size increased from 2 -> 3"
                            },
                            {
                                "text": "Monkey Ace attack cooldown reduced from 2.1s -> 1.68"
                            },
                            {
                                "text": "1-X-X Rapid Fire attack rate buff reduced from 40% -> 25%"
                            },
                            {
                                "text": "X-1-X Exploding Pineapple attack cooldown reduced from 3s -> 2"
                            },
                            {
                                "text": "1-0-4 Spectre which always gained 25% from Rapid Fire is unchanged"
                            },
                            {
                                "text": "X-X-5 Spectre now has a very slight seeking effect on the dart projectiles"
                            },
                            {
                                "text": "X-X-5 Flying Fortress price reduced from $105k -> 100k"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Further small buff to Comanche as prior balancing has not felt sufficient.",
                        "items": [
                            {
                                "text": "X-X-4 Heli reinforcements duration increased from 12s -> 15"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Despite ranking low overall, Wizard Lord Phoenix has dodged balance changes because of its extremely popular place as a challenge tower. With the rise of other towers in challenges, we’ve decided to start off buffing it based on its own merits in general gameplay. We’ve also added some previously intended minor changes to Prince of Darkness which were held back due to bugs that have now been resolved.",
                        "items": [
                            {
                                "text": "X-5-X Wizard Lord Phoenix price reduced from $60,000 -> 54,000"
                            },
                            {
                                "text": "X-3-X Dragon's Breath, X-1-X Fireball radius increased from 10 -> 14"
                            },
                            {
                                "text": "X-3-X Dragon's Breath, X-1-X Fireball damage increased from 1 -> 3"
                            },
                            {
                                "text": "X-5-X Wizard Lord, X-1-X Fireball damage increased from 1 -> 9"
                            },
                            {
                                "text": "X-5-X Wizard Lord Dragon's Breath damage increased from 1 -> 2"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness pops retained in graveyard increased from 2 -> 3 rounds"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness grave required for damage stacks increased from 200 -> 300"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Lead to Gold hasn’t been a competitive 3rd tier outside of special game modes and challenges, so we’ve added some more uniqueness by allowing it to truly live up to its description and deal enough damage to instantly ‘convert’ a Lead Bloon, children layers and all, also carrying on some value here in the later game by allowing this bonus to deal extra against DDTs as well.",
                        "items": [
                            {
                                "text": "X-X-3 Lead to Gold attacks deals +9 damage to Lead & DDT"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "The most recent buff to Superstorm was great fun, but when spending pierce so quickly we wouldn’t see many extra Ball Lightnings. Since many find Superstorm lacking in pierce overall, the ‘extra’ pierce consumptions for hitting larger targets have been reduced to make it more effective and more lightningey.",
                        "items": [
                            {
                                "text": "4-X-X Ball Lighting price reduced from $6000 -> 5500"
                            },
                            {
                                "text": "5-X-X Superstorm pierce consumptions buffed: MOAB 20 -> 5"
                            },
                            {
                                "text": "5-X-X Superstorm pierce consumptions buffed: BFB 50 -> 20"
                            },
                            {
                                "text": "5-X-X Superstorm pierce consumptions buffed: ZOMG 200 -> 50"
                            },
                            {
                                "text": "5-X-X Superstorm pierce consumptions buffed: DDT to 50 -> 10"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "description": "Monkey Bank is just too stonks even without Benjamin. This nerf shouldn’t hurt it too much, but will make it snowball a little bit slower and balance with the other paths better.",
                        "items": [
                            {
                                "text": "X-3-X Monkey Bank price increased from $3300 -> 3500"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Like a few other towers before it, the attack speed crosspath for Spike Factory has outshined the others. We have reworked the lower Spike Factory tiers to distribute this power more evenly while keeping high tier factories at a similar level of power.",
                        "items": [
                            {
                                "text": "Spike Factory price increased from $800 -> 1000"
                            },
                            {
                                "text": "X-1-X Faster Production price reduced from $700 -> 600"
                            },
                            {
                                "text": "X-2-X Even Faster Production price reduced from $900 -> 800"
                            },
                            {
                                "text": "Spike Factory rate increased from 2.2s -> 1.75"
                            },
                            {
                                "text": "X-1-X Spike Factory rate increase reduced from 40% -> 20"
                            },
                            {
                                "text": "X-2-X Spike Factory rate increase increased from 25% -> 30"
                            },
                            {
                                "text": "X-5-X Carpet of Spikes price reduced from $42,000 -> 40,000"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "description": "Call to Arms didn’t last enough in some critical situations where it could have made the difference, so this duration has been increased slightly.",
                        "items": [
                            {
                                "text": "X-4-X Call to Arms duration increased from 10s -> 12"
                            },
                            {
                                "text": "X-5-X Homeland Defense unchanged"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Sentry Expert has underperformed for a while, so we’re adding solid crosspathing buffs to all Sentries. We’ve added a pierce & speed boost to Overclock’s base upgrade and lowered the cooldown on Ultraboost to allow the possibility for it to achieve full uptime as a freeplay tower and get its stacks up faster. Finally last update we allowed Bloontrap to be set multiple times per round, and we wanted to stay on the side of caution with a long cooldown, but after seeing it in the wild we are happy to make this cooldown faster.",
                        "items": [
                            {
                                "text": "1-2-0 Deconstruction now gives all Sentries +1 damage to Fort & MOAB"
                            },
                            {
                                "text": "4-0-1 now increases sentry pierce by roughly 25% instead of +1",
                                "items": [
                                    {
                                        "text": "4-0-1 Crushing Sentry pierce increased from 22 -> 28"
                                    },
                                    {
                                        "text": "4-0-1 Bomb Sentry pierce increased from 30 -> 38"
                                    },
                                    {
                                        "text": "4-0-1 Cold Sentry pierce increased from 15 -> 19"
                                    }
                                ]
                            },
                            {
                                "text": "X-4-X Overclock projectile speed increased 375 -> 750"
                            },
                            {
                                "text": "X-4-X Overclock base pierce increased from 3 -> 15"
                            },
                            {
                                "text": "X-5-X Ultraboost base pierce increased from 3 -> 30"
                            },
                            {
                                "text": "X-5-X Ultraboost ability cooldown reduced from 45 -> 35"
                            },
                            {
                                "text": "X-X-4 Bloontrap rate increased from 20 -> 15"
                            },
                            {
                                "text": "2-0-4 Bloontrap rate buff increased from 0.8x -> 0.6x"
                            }
                        ]
                    },
                    {
                        "tower": "Dartling Gunner",
                        "type": "Military",
                        "description": "As our most recently added tower we are very happy with all the excitement surrounding this beloved monkey tower and the general middleground play position. We’re happy enough with its time in the wild to make some first impression changes here which we hope you’ll continue to enjoy.",
                        "items": [
                            {
                                "text": "4-X-X Plasma Accelerator can now apply Laser Shock with the beam as well as focal point"
                            },
                            {
                                "text": "5-X-X Ray of Doom price reduced from $110,000 -> 95,000"
                            },
                            {
                                "text": "1-4-0 Rocket storm ability spread reduction increased from 30% -> 60%"
                            },
                            {
                                "text": "X-5-X M.A.D price reduced from $65k -> 60k"
                            },
                            {
                                "text": "X-X-3 Buckshot price reduced from $4000 -> 3800"
                            },
                            {
                                "text": "X-X-3 Buckshot now knocks back non-MOAB class Bloons a small amount on hit"
                            }
                        ]
                    },
                    {
                        "tower": "Gwendolin",
                        "description": "The last Gwendolin change didn’t come through as well as intended for a number of reasons, so while keeping true to the intention behind this change it has been improved across the board to properly buff this again",
                        "items": [
                            {
                                "text": "Lv4 Heat it Up should trigger roughly 30% more at all levels"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "description": "Ball of Light’s power before level 20 has been improved to scale through the mid game better",
                        "items": [
                            {
                                "text": "Lv10 Ball of Light damage increased from Adora Damage +1 to +2"
                            },
                            {
                                "text": "Lv15 Ball of Light damage increased from Adora Damage +1 to +3"
                            },
                            {
                                "text": "Lv20 Ball of Light remains at Adora Damage +18"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "description": "Etienne’s main power through mid-to-endgame intentionally comes from his UCAV, however it still overperforms and needs to be pulled back a bit.",
                        "items": [
                            {
                                "text": "Level 10 UCAV duration reduced from 20s -> 18"
                            },
                            {
                                "text": "Level 15 UCAV duration reduced from 25s -> 20"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Some Known Issues",
                "items": [
                    {
                        "text": "'Ghost' MOAB Class Bloons visible briefly during Pat Fusty Big Squeeze ability"
                    },
                    {
                        "text": "Tower UI may break if too many actions are taken during garbage collection"
                    },
                    {
                        "text": "Save integrity of any current Odyssey progress may have issues updating if not already completed"
                    }
                ]
            }
        ]
    },
    "21.1": {
        "release": "2020-10-14",
        "items": [
            {
                "title": "Fixes",
                "items": [
                    {
                        "text": "Collection event softlock when opening crates"
                    },
                    {
                        "text": "Power/insta related achievements not tracking in co-op"
                    },
                    {
                        "text": "Collection points not being consumed correctly"
                    }
                ]
            }
        ]
    },
    "21.0": {
        "release": "2020-10-14",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "text": "New map Encrypted - Do you dare enter the ruins to discover the ancient secrets?"
                    },
                    {
                        "text": "At least 4 new spooooky Achievements",
                        "items": [
                            {
                                "text": "Oathbreakers - Summon a giant army of the undead!"
                            },
                            {
                                "text": "Freaky Friday - Using Transforming Tonic"
                            },
                            {
                                "text": "Living on the Edge - Win non-CHIMPS/Impoppable with 1 life left"
                            },
                            {
                                "text": "Monkey Fan Club - Create or Login to your Ninja Kiwi account"
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store Items",
                        "items": [
                            {
                                "text": "Monkeys: Super Monkey Bat pet, Ghost Upgrade FX, Sub Ducky Pet"
                            },
                            {
                                "text": "Bloons: Skeleton BAD"
                            },
                            {
                                "text": "Co-op: Scream emote!"
                            },
                            {
                                "text": "Game & UI: Etienne Avatar, Mortar Avatar, Flamenco - Synthwave music track, Super Vampire Storm skin"
                            }
                        ]
                    },
                    {
                        "text": "Limited Time Only during the Halloween event! Get these Trophy Store items while you can!",
                        "items": [
                            {
                                "text": "Bomb Shooter Pumpkin Bombs, Banana Farm Candy Corn 'Nanas, Monkey Ace Bone Darts, Bones Pop FX, Hatchet Bloons, Frankenmonkey Avatar, Wolf Monkey Avatar, Coffin Drop skin, Grim Farmer Skin"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Key Features",
                "items": [
                    {
                        "text": "Stats summary now displays upon Game Over in freeplay"
                    },
                    {
                        "text": "A rather massive behind the scenes overhaul of the Buff Icons system, and they will also not clip out the edges of the map anymore."
                    },
                    {
                        "text": "The Insta-monkey system in BTD6 has evolved a lot since launch, from a farmable mechanic to grant easier wins into more of a collection system. With this, we have found that while the initial intention was to give a nice beefy reward for any win, this has resulted in Tier 3 and 4 insta-monkeys being far too common while Tiers 0-2 are much more coveted with no farmable way to get them. We have decided to work on this by redefining the free reward earned on round 100, instead of being a random chance of Tier 3 or 4 rewards will now follow this logic",
                        "items": [
                            {
                                "text": "Beginner maps: Insta reward range Tier 0 to Tier 2"
                            },
                            {
                                "text": "Intermediate maps: Insta reward range Tier 1 to Tier 3"
                            },
                            {
                                "text": "Advanced maps: Insta reward range Tier 2 to Tier 4"
                            },
                            {
                                "text": "Expert maps: Insta reward range Tier 3 to Tier 4"
                            },
                            {
                                "text": "Round 200 and higher remains at the past Tier 3 to Tier 4 regardless of difficulty"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "Following up on the changes in 20.0 in relation to making for smaller and faster updates, additional changes have been made to more efficiently and correctly clean up old bundles when updating before downloading new & changed files"
                    },
                    {
                        "text": "Added Hover/Tap and hold state to all medals on the stats screen"
                    },
                    {
                        "text": "Odyssey Menu now supports the display of a seasonal theme"
                    },
                    {
                        "text": "Added in a ‘Loop’ option to the Jukebox for current song"
                    },
                    {
                        "text": "After having had a name set at least once before, Monkey Names can now be edited from the Player profile page"
                    },
                    {
                        "text": "Added Search Functionality to the Achievements menu"
                    },
                    {
                        "text": "Hidden Achievements now appear in the Achievements menu and display progress before being completely unlocked. Description & title will remain hidden until the achievement is earned. You can find these by searching for ‘???’"
                    },
                    {
                        "text": "Added a new ‘More Money Pack’ offering 20 Cash Drops, 5 Monkey Farmers & 5 Thrive boosters at a discounted price"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Co-op Purchasing multiple continues in a row should no longer end in situations where the game is stuck losing even though no Bloons are leaking for some players"
                    },
                    {
                        "text": "Dad of Quincy pet should now be visible again & will be re-enabled for purchase in the Trophy store on 21.0"
                    },
                    {
                        "text": "Pets now have shadows"
                    },
                    {
                        "text": "Using a restart before beating round 100 in any game will no longer lock off the round 100 insta from being awarded"
                    },
                    {
                        "text": "Necro Bloons Reanimated & Transforming Tonics used now record to player stats"
                    },
                    {
                        "text": "Added support to prevent the game crashing at launch under some situations where Player files were corrupted"
                    },
                    {
                        "text": "Resolved an issue causing Advanced Challenge to sometimes not give any rewards at random"
                    },
                    {
                        "text": "Gears on ‘Geared’ map should now rotate at a rate that will cause the teeth of the gears to not fall out of sync"
                    },
                    {
                        "text": "Double tapping checkmark to place towers should no longer cause a crash"
                    },
                    {
                        "text": "Decimals have been cut off from displaying in challenge editor"
                    },
                    {
                        "text": "Jukebox should no longer scroll to the bottom of the song list when opened"
                    },
                    {
                        "text": "Etienne, Adora, Heli Pilot and Engineer should correctly play placement sounds"
                    },
                    {
                        "text": "Resolved some issues with selling towers crashing the game simulation"
                    },
                    {
                        "text": "Resolved a Race issue with the ‘Last’ set round in a race being completed before the final Bloon of a previous round is popped caused the timer to continue for a second before victory being recorded"
                    },
                    {
                        "text": "Updated Spring Spring map icon to match the actual map"
                    },
                    {
                        "text": "Fixed some layering issues with Top Hats and Glue"
                    },
                    {
                        "text": "Hitting ‘back’ from a monkey in the monkey menu no longer takes you all the way back to the primary menu"
                    },
                    {
                        "text": "Monkey Knowledge respec option should no longer sometimes open twice when pressed"
                    },
                    {
                        "text": "Odyssey stats correctly reset on replay"
                    },
                    {
                        "text": "Resolved an issue where in the challenge editor less ‘slots’ were displayed than actual towers there are in the game"
                    },
                    {
                        "text": "Current Race Rank will no longer disappear after opening rewards and exiting back out"
                    },
                    {
                        "text": "Resolved a co-op crash related to players attempting to reconnect to a lobby that has already launched when on a bad internet connection"
                    },
                    {
                        "text": "Co-op should correctly match all upgrades again after a resync"
                    },
                    {
                        "text": "Added polish to some UI which was clipping under certain resolutions"
                    },
                    {
                        "text": "Resolved some issues with a slight delay on the pause menu"
                    },
                    {
                        "text": "Adjusted size of Odyssey description box to allow for more detail"
                    },
                    {
                        "text": "Challenge Editor can again apply camo/regrow properties to apopalypse"
                    },
                    {
                        "text": "Resolved an issue where starting an apopalypse game & restarting immediately would cause it to not begin"
                    },
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "2-0-4 Kylie Boomerang no longer loses the ability to hit 1 Bloon multiple times with regular attack"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "4-X-X Embrittlement once again allows ‘Sharp’ damage to penetrate any Bloons frozen in the Embrittled state"
                            },
                            {
                                "text": "X-3-X Placing an Arctic Wind on top of a flagship will no longer create an ice platform on top of the buccaneer"
                            },
                            {
                                "text": "X-3-X Arctic Wind no longer inconsistently slows one of two Zebra children after popping a rainbow"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "0-2-4 Recursive Clusters now have an alternate missile projectile for recursive shots"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Corrected a typo for Pre-emptive Strike’s description"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "items": [
                            {
                                "text": "X-3-X Downdraft Blowback effects can no longer push Bloons out of bounds"
                            },
                            {
                                "text": "X-5-X Resolved an issue with Door Gunner allowing deployment on invalid terrain"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Resolved an issue with selling mortars leaving target circles on screen"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "Resolved an issue where Alchemist’s 3-2-0 increased number of shots for Berserker Brew would read the number it should give from the wrong upgrade & give a lower number"
                            },
                            {
                                "text": "X-4-X Cookie Monster range buff from Strong Tonic knowledge lasts the entire duration"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "4-X-X Temple can no longer receive ‘water tower’ buffs unless it is placed in water"
                            },
                            {
                                "text": "X-3-X Resolved an issue with Robo Monkey arm targeting which allowed same target or crashed on some devices."
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "3-X-X Druid of the Storm Blowback effects can no longer push Bloons out of bounds"
                            },
                            {
                                "text": "5-X-X Superstorm no longer creates an additional cloud platform every time it is crosspathed"
                            },
                            {
                                "text": "X-5-X Spirit of the Forest no longer deal damage inconsistently on different numbers of child spawns that come out of any Parent it destroys"
                            },
                            {
                                "text": "X-X-5 Avatar of Wrath once again upgrades asset of projectiles"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-4-X Abilities will no longer block others from being used while they are still in debt"
                            }
                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "Zebra Children no longer have a chance to become immune to Jones’ immunity removal"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "items": [
                            {
                                "text": "Level 11 Pierce buff applies in the correct order"
                            },
                            {
                                "text": "Savegames now load totems with the correct skin applied"
                            }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "items": [
                            {
                                "text": "Level 16 description updated to reflect 2x Trojan cash"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "items": [
                            {
                                "text": "Level 10 ability no longer freezes the pause button until animation is done"
                            },
                            {
                                "text": "Should no longer create invincible MOAB Class Bloons after grabbing a MOAB hooked by Buccaneer"
                            },
                            {
                                "text": "Can no longer receive ‘water tower’ buffs unless it is placed in water"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "items": [
                            {
                                "text": "Reworked how Adora’s sacrifice functions in Extreme Odyssey events, so that it only consumes following the same rules as if you were to sell the towers"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Desktop Version",
                "items": [
                    {
                        "text": "Added a new options toggle to disable the precision ‘Nudge Mode’. With this disabled towers will always snap to where you click during placement"
                    },
                    {
                        "text": "Your ‘Placement Mode’ is now saved locally per device rather than in your player save"
                    },
                    {
                        "text": "In addition to ESC acting as a general hybrid back/pause button, the Tilde/Backquote key (~) will now act as an instant uninterruptible pause (unless you lose) that will only open the pause menu, not close it. As with all hotkeys this can be remapped from the options in the main menu."
                    },
                    {
                        "text": "Scrolling with the mouse wheel will now move at the correct speed on scroll-able menus that go from side-to-side"
                    },
                    {
                        "text": "Uninstallation on steam will now open an additional prompt to remove all login information from your machine as well"
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Boomerang Monkey",
                        "type": "Primary",
                        "description": "Glaive Lord’s 5-0-2 gives no use over 5-2-0 with how the main attack currently works, so now 5-0-2 will additionally apply damage to the secondary revolving attack to target a different niche. MOAB Press spam is overperforming with a high 0-2-4 preference, so we are moving pierce from the base 0-0-4 into a 2-0-4 buff to give this choice some more high density round value.",
                        "items": [
                            {
                                "text": "5-0-2 Glaive Lord Boomerang gains increased Orbital Glaives damage 2 -> 3"
                            },
                            {
                                "text": "0-0-4 MOAB Press pierce reduced from 300 -> 200"
                            },
                            {
                                "text": "1-0-4 MOAB Press pierce reduced from 350 -> 300"
                            },
                            {
                                "text": "2-0-4 MOAB Press pierce increased from 410 -> 420"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "The Ring of Fire & Inferno Ring upgrades recently received a crosspath functional rework, as we’re happy with the X-2-X range/pierce combo now this small follow-up is just to bring a bit more impact to the short-range 4-0-2 variant.",
                        "items": [
                            {
                                "text": "4-0-1 Ring of Fire crosspath now increases damage from 3 -> 4"
                            },
                            {
                                "text": "4-0-2 Ring of Fire crosspath now increases damage from 4 -> 5"
                            },
                            {
                                "text": "5-0-1 Inferno Ring crosspath now increases damage from 4 -> 5"
                            },
                            {
                                "text": "5-0-2 Inferno Ring crosspath now increases damage from 5 -> 6"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "description": "While Icicles is quite fun for midgame cleanup, we acknowledge points raised on Cryo Cannon trading off it’s freeze prowess too quickly when the smaller freeze area even with such a fast rate increase still overall makes it struggle to slow as effectively. To counter this a little we have doubled the freeze radius of Cryo Cannon, but also increased damage of both the Ice Balls & Icicles to highlight more the intention of this path swapping to a damage hybrid earlier.",
                        "items": [
                            {
                                "text": "X-X-3 Cryo Cannon Blast Radius increased 10 -> 20"
                            },
                            {
                                "text": "X-X-3 Cryo Cannon ice ball damage increased 1 -> 2"
                            },
                            {
                                "text": "X-X-4 Icicles 'shard' damage increased 1 -> 2"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "The Bloon Solver recently received a small functional rework buff, this follow-up buff will make the stepping stones to it a little easier on saving.",
                        "items": [
                            {
                                "text": "4-X-X Bloon Liquifier price reduced from $6500 -> $5500"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "To retain value in more Lead-heavy situations including against DDTs, this upgrade that has always allowed Lead popping to main attack will now also grant this to the Shrapnel from any shrapnel shot snipers mixing in this upgrade",
                        "items": [
                            {
                                "text": "1-2-0 Shrapnel now gains Normal type damage from Full Metal Jacket"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "description": "Aircraft carriers have ongoing trouble with missing targets, these changes can hopefully offer a few extra ways of supporting the weakness internally while we keep investigating this.",
                        "items": [
                            {
                                "text": "4-X-X Aircraft Carrier's forward dart projectile radius increased by 2"
                            },
                            {
                                "text": "5-X-X Carrier Flagship Missiles damage type changed from Explosive -> Normal"
                            },
                            {
                                "text": "X-X-1 Long Range increases projectile speed of all attacks by +25%"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "description": "Tsar Bomba currently holds low value compared to multiple Ground Zero purchases aside from the stun, this greatly requested change should hopefully add more niche benefit.",
                        "items": [
                            {
                                "text": "X-5-X Tsar Bomba bombs damage type changes from Explosive -> Normal"
                            },
                            {
                                "text": "X-5-X Tsar Bomba cooldown reduced from 45 -> 40"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Heli Pilot manages on pursuit far too easily without any need to consider Bigger Jets unless camo or downdraft is required. For more crosspath variety than just ‘camo’ we moved more of the base Heli speed out and back into Bigger Jets with an overall buff to Bigger Jets. This should allow Bigger Jets to scale a little better than other helis through early speed ramping. Due to overall comparisons between Downdraft’s blowback & MOAB Shove we have also slashed MOAB Shove’s price by 30% to give it & Comanche more of a kickstart",
                        "items": [
                            {
                                "text": "Heli base speed reduced from 45 -> 40"
                            },
                            {
                                "text": "X-1-X Bigger Jets speed increased from 67.5 to 70"
                            },
                            {
                                "text": "X-X-4 Heli MOAB Shove price reduced from $5000 -> 3500"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "description": "Mortar’s Faster Reload feels like a ‘required’ as a crosspath with Burny Stuff never scaling well on any path but it’s own. We like choices not requirements so to counter this we have made Burny Stuff scale with top-path damage & shifted a small amount of the speed from Faster Reload onto the base mortar and reduced base accuracy considerably.",
                        "items": [
                            {
                                "text": "Base Mortar random spread area increased in size from 18 -> 30"
                            },
                            {
                                "text": "X-X-1 Increased Accuracy random spread area stays the same as it currently is (8)"
                            },
                            {
                                "text": "Mortar base rate of fire increased from 2.2 -> 2"
                            },
                            {
                                "text": "X-1-X Faster Reload rate buff reduced from 30% -> 25%"
                            },
                            {
                                "text": "X-2-X Rapid Reload rate buff reduced from 30% -> 28%"
                            },
                            {
                                "text": "3-0-2 Shell Shock, Burny Stuff damage increased from 1 -> 2"
                            },
                            {
                                "text": "4-0-2 The Big One, Burny Stuff damage increased from 1 -> 3"
                            },
                            {
                                "text": "5-0-2 The Biggest One, Burny Stuff damage increased from 1 -> 25"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Though it was never a goal for the base tower to be great, given the additional purple weakness since BTD5 and how poorly it currently performs we feel it deserves to take rank as the cheapest magic tower along with a small buff. Dragon’s Breath crosspathing has also been finished up along with a considerable boost to scale Dragon’s Breath up against Ceramics. Finally, Unpopped Army changes are also here! We wanted to cover all of the usability issues with this upgrade while also powering it up and expanding more on the mechanic that makes it so unique. We hope this will be enough to make Wizard very useful in a number of ways, but will be keeping a watchful eye on how it plays out.",
                        "items": [
                            {
                                "text": "0-0-0 Wizard Monkey price reduced from $450 -> 400"
                            },
                            {
                                "text": "0-0-0 Wizard Monkey pierce increased from 2 -> 3"
                            },
                            {
                                "text": "0-3-0 Dragon's Breath, breath attack gains bonus damage to ceramic +1"
                            },
                            {
                                "text": "1-3-0 Dragon's Breath increases lifespan of Dragon Breath 0.4 -> 0.8"
                            },
                            {
                                "text": "0-4-0 Summon Phoenix projectile radius increased from 5 -> 6"
                            },
                            {
                                "text": "0-4-0 Summon Phoenix damage increased from 3 -> 4"
                            },
                            {
                                "text": "0-4-0 Summon Phoenix pierce increased from 5 -> 6"
                            },
                            {
                                "text": "0-4-0 Summon Phoenix projectile speed increased from 300 -> 350"
                            },
                            {
                                "text": "X-X-4 Unpopped Army now gains a bonus to graveyard after round 81 to make up for the total decrease in child Bloons that are created from Super Ceramics (About 10 per pop)"
                            },
                            {
                                "text": "X-X-4 Unpopped Army targeting has been reworked to function in a smarter way, summoning Zombie Bloons further back to avoid them spawning behind Bloons, and also on multi-lane tracks targeting the lanes that are likely to leak sooner"
                            },
                            {
                                "text": "X-X-4 Unpopped Army now enhances the power of all of it’s attacks by 1 for every 200 souls in it’s Graveyard. This can stack up to 10 times for Prince of Darkness"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness max Graveyard capacity increased from 2000 -> 3000"
                            }
                        ]
                    },
                    {
                        "tower": "Ninja Monkey",
                        "type": "Magic",
                        "description": "While Sticky Bomb still has issues we are investigating, this damage buff allows Sticky Bombs to destroy all regular MOABs from round 81 to 100 in a single bomb in standard games whether they are fortified or not. In addition since this damage runs off a timed function, somewhat similar to Alchemist’s Unstable Concoction, we felt that adding a range increase to the Sticky attack similar to Concoction should give a better chance to actually explode before the target MOAB is destroyed by other towers.",
                        "items": [
                            {
                                "text": "X-X-4 Sticky Bomb damage increased from 400 to 500"
                            },
                            {
                                "text": "X-X-4 Sticky Bomb 'sticky attack' range increased to Ninja's range * 1.5"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Follow up steps in overall balancing use of the 4-2-0 and 4-0-2 alchemist upgrades, this brings both combinations more in-line for total cost and allows us to think about Acid Pools as its own upgrade in future rather than worrying about the impact of changing 4-0-2.",
                        "items": [
                            {
                                "text": "X-X-1 Acid Pools & X-X-2 Faster Throwing upgrades have been swapped"
                            },
                            {
                                "text": "4-X-X Stronger Stimulant price increased from $2500 -> 3000"
                            },
                            {
                                "text": "X-X-1 Faster Throwing price increased from 500 -> 650"
                            },
                            {
                                "text": "X-X-2 Acid Pools price reduced from 600 -> 450"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "description": "We’ve wanted to work on this upgrade for a while but first had to deal with an issue causing it to perform far differently to intended. Unfortunately while we expected improvement from this fix, it ended up being an overall nerf. We have cut the price by a large amount to counter this and will revisit the upgrade again after this settles.",
                        "items": [
                            {
                                "text": "X-5-X Druid Spirit of the Forest price reduced from 50,000 -> 35,000"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Since launch X-X-2 has never brought enough to the table as a crosspath. Working into the long life trend of the bottom path we felt that introducing longer life at a ‘cross-pathable stage’ may work in some new niche. Along with this we made a couple small tweaks buffing what should be the ‘strength areas’ of a few of the more underperforming high tier Spike upgrades",
                        "items": [
                            {
                                "text": "X-X-1 Long Reach -> lifespan increased 70 -> 100"
                            },
                            {
                                "text": "X-X-4 Deadly Spikes last for 1 more round before expiring"
                            },
                            {
                                "text": "0-4-1 Spike Storm lifespan will increase by 50% with this change"
                            },
                            {
                                "text": "(No changes here carry over to X-X-3 Long Life Spikes or X-X-5 permaspike)"
                            },
                            {
                                "text": "X-5-X Carpet of Spikes passive cooldown reduced 20s -> 15"
                            },
                            {
                                "text": "4-X-X Spiked Mines blast radius increased from 15 to 19"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Engineer is quite poor in terms of crosspathing, so we’ve added crosspath benefits to Cleansing Foam as well as an overall price buff to the middle crosspathing upgrades. We’ve been somewhat unhappy with how Overclock sits in the game for a while and especially how the interaction with tower cost causes levelling heroes naturally to be far advantageous over purchasing upgrades when this is already underused. We have made an attempt to rework these issues by moving it to a tier-based system rather than price.",
                        "items": [
                            {
                                "text": "5-X-X Sentry Paragon explosion damage increased from 85 -> 100"
                            },
                            {
                                "text": "0-1-0 Larger Service Area price reduced from $550 -> 250"
                            },
                            {
                                "text": "0-2-0 Deconstruction price increased from $200 -> 350"
                            },
                            {
                                "text": "2-3-0 Faster Engineering increases Cleansing Foam rate 2 -> 1.2"
                            },
                            {
                                "text": "0-3-1 Oversize Nails increases Cleansing Foam pierce 10 -> 15"
                            },
                            {
                                "text": "X-4-X Overclock duration formula has been reworked to apply on a tier by tier basis rather than just lasting for a shorter duration based on the cost of the tower.",
                                "items": [
                                    {
                                        "text": "Based on the current “100% duration” of 60seconds"
                                    },
                                    {
                                        "text": "Overclock used on T5 duration reduced to 50%"
                                    },
                                    {
                                        "text": "Overclock used on T4 duration reduced to 75%"
                                    },
                                    {
                                        "text": "Overclock used on T3 duration remains at 100%\""
                                    },
                                    {
                                        "text": "Overclock used on T2 duration increased by 25%"
                                    },
                                    {
                                        "text": "Overclock used on T1 duration increased by 50%"
                                    },
                                    {
                                        "text": "Overclock used on T0 duration increased by 75%"
                                    }
                                ]
                            },
                            {
                                "text": "X-4-X Overclock for purpose of this duration, Hero tier is equivalent to 'Hero level / 4' (starting at level 0 rather than 1)"
                            }
                        ]
                    },
                    {
                        "tower": "Captain Churchill",
                        "description": "Churchill is a chunky, expensive & slow levelling powerful hero, when he was launched he fit well in this spot but his synergies have not aged well. We have started with a small XP adjustment and greatly improved the power of his MOAB Barrage",
                        "items": [
                            {
                                "text": "XP Requirement for all levels reduced by 5%"
                            },
                            {
                                "text": "Churchill level 10 MOAB Barrage damage increased 100 -> 200"
                            },
                            {
                                "text": "Churchill level 20 MOAB Barrage damage increased 250 -> 500"
                            }
                        ]
                    },
                    {
                        "tower": "Ezili",
                        "description": "It felt fitting for so many reasons right now, but in addition to Unpopped Army buffs Ezili will now offer them a large pierce boost who then in turn offer up an improved cleanup tower to assist Ezili in dealing with with her main weakness",
                        "items": [
                            {
                                "text": "Lv 11 Ezili also increases pierce of ALL Zombie Bloons you summon by +50%"
                            }
                        ]
                    },
                    {
                        "tower": "Pat Fusty",
                        "description": "We feel that applying the entire recent Roar nerf right away from level 3 was a mistake. To alleviate the impact here we have increased the level 3 duration to a little more than it was",
                        "items": [
                            {
                                "text": "Lv 3 Rallying Roar buff duration increased from 5s -> 8"
                            },
                            {
                                "text": "Lv 14 Rallying Roar buff duration remains the same"
                            }
                        ]
                    },
                    {
                        "tower": "Adora",
                        "description": "Keeping in line with our “Slow” hero XP curve, Adora’s XP requirement will be reduced to match the new curve applied on Churchill",
                        "items": [
                            {
                                "text": "XP Requirement for all levels reduced by 5%"
                            }
                        ]
                    },
                    {
                        "tower": "Etienne",
                        "description": "While he has been highly underrated, we wanted to fit in a few quality of life tweaks to add overall nicety and smoothen progression.",
                        "items": [
                            {
                                "text": "Lv3 Drone Swarm ability duration increased from 15 -> 17"
                            },
                            {
                                "text": "Lv3 Drone Swarm ability lasts +0.5s longer for every level of Etienne"
                            },
                            {
                                "text": "Lv16 Drone Swarm no longer increases ability duration"
                            },
                            {
                                "text": "Lv20 'Ability' UCAV duration increased from 15 -> 20"
                            },
                            {
                                "text": "Lv20 'Ability' UCAV deals normal damage for buff duration"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "20.1": {
        "release": "2020-09-07",
        "items": [
            {
                "title": "Bug Fixes",
                "items": [
                    {
                        "text": "Resolved a crash that could occur when selling Etienne after a level up"
                    },
                    {
                        "text": "Resolved a crash from selling Etienne with Drone Swarm active then immediately placing him again"
                    },
                    {
                        "text": "Resolved an issue where placing then selling and placing Etienne again would not display his Drone Swarm in the ability bar"
                    },
                    {
                        "text": "Loading a save on Mesa after removing 1 rock should now correctly load that they are removed"
                    },
                    {
                        "text": "Resolved some Placement issues on Mesa"
                    },
                    {
                        "text": "Resolved an issue causing Odyssey progress to become stuck after using certain powers"
                    },
                    {
                        "text": "Resolved issues with Robo Monkey’s left arm not acquiring the correct targets"
                    },
                    {
                        "text": "Resolved some multipliers adding together incorrectly for Bloontrap’s Cash generation"
                    },
                    {
                        "text": "Resolved an issue with the Mauling MOABs skin not cycling through damage states"
                    },
                    {
                        "text": "Resolved some crashes related to loading specific save games from 19.2"
                    },
                    {
                        "text": "Resolved an issue where the Banana Farmers removing corn on Cornfield would scale to random sizes"
                    },
                    {
                        "text": "Resolved an issue causing Admiral Brickell to have no highlight outline when selected"
                    }
                ]
            }
        ]
    },
    "20.0": {
        "release": "2020-09-01",
        "items": [
            {
                "title": "New Awesome",
                "items": [
                    {
                        "text": "New air-based drone hero, Etienne!",
                        "items": [
                            {
                                "text": "Etienne controls an army of drones to take out the Bloons from above & behind cover, watch out for his abilities which supercharge his drones temporarily & unleash a barrage of Bloon doom from above"
                            }
                        ]
                    },
                    {
                        "title": "New Advanced Map, Mesa"
                    },
                    {
                        "title": "New Admiral Brickell Skin, Dread Pirate Brickell"
                    },
                    {
                        "title": "Expanded Odyssey Events system",
                        "items": [
                            {
                                "text": "Extreme Mode added! When set to Extreme mode once your monkeys are placed they are used up! Be careful how many you use on early islands!"
                            },
                            {
                                "text": "Do note that Heroes will always fight by your side and will not be consumed in Extreme mode."
                            },
                            {
                                "text": "Odysseys now display a stats summary at the end with a number of interesting details including total time taken"
                            },
                            {
                                "text": "Finalized all the map statues for Odyssey, this now allows us to make any map available during the event. Which maps would you like to see next?"
                            },
                            {
                                "text": "Added Clear All Monkeys / Powers options for crew selection"
                            },
                            {
                                "text": "Added a number of new Odyssey related achievements!"
                            },
                            {
                                "text": "Odyssey crew panels now show their category coloring"
                            },
                            {
                                "text": "Odyssey events now offer a replay option after being completed, but note that this does not increase the rewards earned. The thinking behind this to try different builds and create personal challenges for friends and community."
                            }
                        ]
                    },
                    {
                        "title": "New Trophy Store items",
                        "items": [
                            {
                                "text": "New Player Icons for Adora, Engineer, Brickell & Benjamin"
                            },
                            {
                                "text": "New Hero items Obyn Ghost Wolf, Ezili Frog & Striker Jones Paradrop placement"
                            },
                            {
                                "text": "New Bloon Modifiers Top Hats, Mo’ Monkeys pop fx, Sci Fi BFB & Steampunk ZOMG"
                            },
                            {
                                "text": "New Co-op emotes Let’s Go!, OK, Crickets, & Sparkling Hearts"
                            },
                            {
                                "text": "New Music Track Sunset - Silent Night"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Key Features",
                "items": [
                    {
                        "text": "Co-op players may now change their hero in the co-op lobby"
                    },
                    {
                        "text": "Races will now display a popup showing how much faster/slower you are doing compared to your best time every 5 rounds"
                    },
                    {
                        "text": "Fortification Bands have been added to skinned versions of MOABs"
                    },
                    {
                        "text": "In-game update notes can now be viewed from the options page on the main menu "
                    }
                ]
            },
            {
                "title": "Big Changes / Additions",
                "items": [
                    {
                        "text": "A larger overall behind the scenes change splitting up our assets and the way they load/download. This won’t have too noticeable an impact on this update but in the future should allow us to have more flexibility in cutting down the size of updates.This should also help with memory, and help us find memory leaks"
                    },
                    {
                        "text": "There were some good requests for help in something other than a Quincy start, so we have tweaked the Expert Infernal map slightly to allow for some more varied starting strategies"
                    },
                    {
                        "text": "Prevented a crash or game quit upon the last seconds of a final round from failing to award a completion medal"
                    },
                    {
                        "text": "Lots of changes related to the way the game saves & loads, should improve load times and load certain other things in a more natural state"
                    },
                    {
                        "text": "Purchasing any trophy items should correctly trigger an immediate backup to the server"
                    },
                    {
                        "text": "Instamonkeys in combinations of 1-1-0/1-0-1/0-1-1 and 2-2-0/2-0-2/0-2-2 should correctly be able to appear in their respective drop pools for all cases of randomised Tier 1 & 2 Instamonkeys"
                    },
                    {
                        "text": "Incorrect or ‘Unknown Powers’ will no longer be stored in account save files. This should prevent ‘infinite notifications’ on the power screen when the player can never view them."
                    },
                    {
                        "text": "Added a new ‘More Money Pack’ offering 20 Cash Drops, 5 Monkey Farmers & 5 Thrive boosters at a discounted price"
                    }
                ]
            },
            {
                "title": "Bug Fixes & General Changes",
                "items": [
                    {
                        "text": "Playing a new game over the top of an old save should no longer double stack the stats summary at the end"
                    },
                    {
                        "text": "Added some effects limitation to help improve performance"
                    },
                    {
                        "text": "Map: In The Loop now allows for collision with the trees for Juggernaut projectiles"
                    },
                    {
                        "text": "Co-op improvements made to ‘game start disconnects’"
                    },
                    {
                        "text": "Co-op double tapping join button should no longer cause an occasional crash"
                    },
                    {
                        "text": "Co-op improvements to ‘Local Lobby’ system including a refresh button on the page"
                    },
                    {
                        "text": "Co-op: cleaned up how the game handles disconnecting and reconnecting in lobbies"
                    },
                    {
                        "text": "Daily Challenges now have a modifier icon to display when a challenge does not allow for a round 100 Instamonkey reward to be claimed"
                    },
                    {
                        "text": "Corrected some visual issues with the water on Adora’s Temple"
                    },
                    {
                        "text": "The tutorial should no longer count as a game played in player stats"
                    },
                    {
                        "text": "Double tapping events menu will not load it twice anymore"
                    },
                    {
                        "text": "Some localization formatting & translation fixes"
                    },
                    {
                        "text": "Resolved an issue where playing custom challenges would reroll collection event bonus maps"
                    },
                    {
                        "text": "Chromebook touchpads should function like steam touchpads now."
                    },
                    {
                        "text": "Behind the scenes components cleanup to MOAB-class assets & damage states"
                    },
                    {
                        "text": "Performance improvements for all cash-related modifiers applied to Bloons"
                    },
                    {
                        "text": "Resolved a number of height issues related to redeploying towers"
                    },
                    {
                        "text": "Receiving a conflict popup while another menu is open in game should no longer cause the game to lock up"
                    },
                    {
                        "text": "All hero placement related animations & voice lines should work correctly now even if the hero starts above level 1"
                    },
                    {
                        "text": "Resolved an issue causing some models on the main menu to t-pose occasionally"
                    },
                    {
                        "title": "Race specific:",
                        "items": [
                            {
                                "text": "Exiting from viewing a player profile from a leaderboard should no longer throw you down the list"
                            },
                            {
                                "text": "Viewing a Profile created on a future version will no longer cause a crash"
                            },
                            {
                                "text": "Race timer should now immediately stop when the last Bloon is popped"
                            },
                            {
                                "text": "Races once again correctly display your own rank"
                            },
                            {
                                "text": "Display of the race leaderboard will update less frequently for players with scores outside of the top 100"
                            }
                        ]
                    },
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "Master Double Cross no longer allows you to use 1 Crossbow Master in Daily Challenges where this tower is prohibited"
                            }
                        ]
                    },
                    {
                        "tower": "Ice Monkey",
                        "type": "Primary",
                        "items": [
                            {
                                "text": "0-0-0 Base Ice Monkey attack hitbox should allow it to hit Bloons from below the track now"
                            },
                            {
                                "text": "X-5-X Pre-Emptive Strike description reworded as the effect is very different to ‘MOAB Assassin’"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Buccaneer",
                        "type": "Military",
                        "items": [
                            {
                                "text": "5-X-X Carrier Flagship should no longer inflate summary screen stats when save is loaded"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Ace",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Should no longer cause a crash on Geared when map is turning"
                            },
                            {
                                "text": "X-4-X Ground Zero description updated to include base Bombs being upgraded"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "items": [
                            {
                                "text": "Should no longer cause a crash on Geared when map is turning"
                            },
                            {
                                "text": "Resolved a crash related to 2 chinook helis targeting the same tower"
                            },
                            {
                                "text": "Co-op no longer allows towers to be upgraded while redeployingr"
                            }
                        ]
                    },
                    {
                        "tower": "Mortar Monkey",
                        "type": "Military",
                        "items": [
                            {
                                "text": "5-X-X The Biggest One description updated as it deals much more damage now"
                            },
                            {
                                "text": "X-5-X Artillery Battery description updated as ‘triple pain’ doesn’t describe 4x attack speed very well"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-4-X Phoenix summons should no longer be consumed when moving off an ice platform"
                            },
                            {
                                "text": "X-X-5 Prince of Darkness should no longer display buff icon when placing towers that cannot receive its buff"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "5-X-X Resolved a number of art issues on gained temple powers"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "3-X-X Lower tier brews should no longer cancel out higher tiers from upgrading the tower’s buff when they target the same tower at the same time"
                            }
                        ]
                    },
                    {
                        "tower": "Druid",
                        "type": "Magic",
                        "items": [
                            {
                                "text": "X-X-3 Druid of Wrath description updated to \"attacking Bloons\" not \"popping\""
                            },
                            {
                                "text": "X-X-4 Poplust description updated to mention ‘pierce’ not just attack speed"
                            }
                        ]
                    },
                    {
                        "tower": "Banana Farm",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-X-2 Banana Salvage now gives the correct amount of cash"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-X-5 Carpet of Spikes now correctly gains +2 damage to all, not just 1"
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Village",
                        "type": "Support",
                        "items": [
                            {
                                "text": "X-X-4 Monkey City description updated to include increased cash production in radius"
                            },
                            {
                                "text": "X-X-5 Monkeyopolis no longer takes buffs from Alchemist"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "items": [
                            {
                                "text": "5-X-X Sentry Paragon should no longer cause a secondary explosion when manually sold"
                            },
                            {
                                "text": "X-X-4 Bloontrap, resolved collection sometimes displaying less cash than it should"
                            }

                        ]
                    },
                    {
                        "tower": "Striker Jones",
                        "items": [
                            {
                                "text": "Fixed Co-op icon emote for Octojones"
                            }
                        ]
                    },
                    {
                        "tower": "Obyn Greenfoot",
                        "items": [
                            {
                                "text": "Resolved an issue where reloading with level 20 Obyn reduced Wall of Trees to level 10"
                            },
                            {
                                "text": "Resolved an issue with reloading a CHIMPS save file giving the wrong cash value from Wall of Trees"
                            }
                        ]
                    },
                    {
                        "tower": "Benjamin",
                        "items": [
                            {
                                "text": "Resolved a sequence of cash multipliers with Syphon Funding that could cause Bloons to give negative cash upon pop"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "items": [
                            {
                                "text": "Resolved an issue where reloading with level 20 Brickell reduced Mega Mine to level 10"
                            }
                        ]
                    },
                    {
                        "title": "Energising Totem",
                        "items": [
                            {
                                "text": "Some UI issues cleaned up"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Balance Changes",
                "items": [
                    {
                        "tower": "Dart Monkey",
                        "type": "Primary",
                        "description": "Dart Monkey at its core is an early game focus tower, so we added some projectile speed options to try and help with its tendency to miss faster Bloons. Spike-o-pult’s rate was also increased and damage type changed to shatter to be more versatile of a stepping stone in niche setups saving for Juggernaut",
                        "items": [
                            {
                                "text": "X-X-2 Enhanced Eyesight projectile speed increased 300 -> 330"
                            },
                            {
                                "text": "X-X-3 Crossbow projectile speed increased from 300 -> 360"
                            },
                            {
                                "text": "X-X-4 Sharp Shooter projectile speed increased from 300 -> 400"
                            },
                            {
                                "text": "X-X-5 Crossbow Master remains at 450 speed"
                            },
                            {
                                "text": "3-X-X Spike-o-pult can now damage frozen Bloons type changed Sharp -> Shatter"
                            },
                            {
                                "text": "3-X-X Spike-o-pult rate increased from 1.25s -> 1.15s"
                            },
                            {
                                "text": "4-X-X Juggernaut DOES NOT carry over this rate increase"
                            }
                        ]
                    },
                    {
                        "tower": "Bomb Shooter",
                        "type": "Primary",
                        "description": "We’re really excited about the recent rise in Bomb fame, and we want to encourage this by buffing some of the detracting parts of Bomb Shooters. But larger groups of basic T3 Maulers are now performing far too well against everything when they are intended to be more of a MOAB Specialist. This change means little in the early game, but should pull these groups back a little in more higher round gameplay.",
                        "items": [
                            {
                                "text": "3-X-X Really Big Bombs damage increased 2 -> 3"
                            },
                            {
                                "text": "4-X-X Bloon Impact does NOT gain any improvement from this change"
                            },
                            {
                                "text": "3-X-X MOAB Mauler Ceramic bonus reduced from 5 -> 4"
                            },
                            {
                                "text": "X-4-X MOAB Assassin MOAB bonus increased from 18 -> 25"
                            },
                            {
                                "text": "X-5-X MOAB Eliminator MOAB bonus increased from 79 -> 99"
                            }
                        ]
                    },
                    {
                        "tower": "Tack Shooter",
                        "type": "Primary",
                        "description": "Inferno Ring has felt very outclassed for a long time, and more recently the tack shooter was reworked to give pierce on x2x which made the old 402 pierce crosspath not make as much sense anymore. We wanted to start work on both these issues together by reworking how Ring of Fire and Inferno Ring interact with crosspaths",
                        "items": [
                            {
                                "text": "4-0-1 Ring of Fire & Inferno Ring no longer gain pierce +10"
                            },
                            {
                                "text": "4-0-2 Ring of Fire & Inferno Ring no longer gain pierce +10"
                            },
                            {
                                "text": "4-1-0 Ring of Fire & Inferno Ring now increase total pierce by +10"
                            },
                            {
                                "text": "4-2-0 Ring of Fire & Inferno Ring now increase total pierce by +10"
                            },
                            {
                                "text": "4-0-2 Ring of Fire now increases base damage from 3 -> 4"
                            },
                            {
                                "text": "5-0-2 Inferno Ring now increases base damage from 4 -> 5"
                            }
                        ]
                    },
                    {
                        "tower": "Glue Gunner",
                        "type": "Primary",
                        "description": "Many people seem to agree 5xx Glue is ‘good’, but simply outclassed (mainly by 5xx mortar at a similar price). This won’t completely fix that, we hope to work on making the earlier stepping stone tiers a little easier to use and provide the 520 crosspath with a better niche by making Bloon Solver benefit from all pierce twice as much (which x2x provides).",
                        "items": [
                            {
                                "text": "3-X-X Bloon Dissolver $3,300 -> $2,700"
                            },
                            {
                                "text": "4-X-X Bloon Liquifier $7,000 -> $6,500"
                            },
                            {
                                "text": "5-X-X Bloon Solver now fires 2 projectiles per attack"
                            },
                            {
                                "text": "5-X-X Bloon Solver total pierce per projectile reduced from 12 -> 6"
                            },
                            {
                                "text": "5-1-0 Bloon Solver total pierce per projectile reduced from 13 -> 7"
                            },
                            {
                                "text": "5-2-0 Bloon Solver total pierce per projectile reduced from 16 -> 11"
                            }
                        ]
                    },
                    {
                        "tower": "Sniper Monkey",
                        "type": "Military",
                        "description": "This tower felt like it’s strength too heavily required the xx2 upgrade, and that this harmed crosspath choices. So we increased the base attack rate while nerfing the increase from these upgrades. This is a slight overall buff",
                        "items": [
                            {
                                "text": "000 Sniper Monkey fire rate increased from 2s -> 1.59"
                            },
                            {
                                "text": "xx1 Fast Firing rate bonus reduced from 35% -> 30%"
                            },
                            {
                                "text": "xx2 Even Faster Firing rate bonus reduced from 40% -> 30%"
                            },
                            {
                                "text": "5xx Cripple MOAB duration rates for stun/debuff increased",
                                "items": [
                                    {
                                        "text": "MOAB 6 -> 7"
                                    },
                                    {
                                        "text": "BFB 3 -> 6"
                                    },
                                    {
                                        "text": "ZOMG 1.5 -> 3"
                                    },
                                    {
                                        "text": "DDT 1.5 -> 4"
                                    },
                                    {
                                        "text": "BAD 0.25 -> 0.75"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "tower": "Monkey Sub",
                        "type": "Military",
                        "description": "The cost efficiency of Sub Commander's +5 pierce favored low tiers more than we’d like. Fortunately other paths of sub don’t care so much about pierce, so as xx4 AP Darts gives its own large pierce increase we hope lowering the amount of this buff slightly will make driving to T4 more meaningful.",
                        "items": [
                            {
                                "text": "X-X-5 Sub Commander pierce buff reduced from 5 -> 4"
                            }
                        ]
                    },
                    {
                        "tower": "Heli Pilot",
                        "type": "Military",
                        "description": "Pursuit Downdraft has felt like an overperformer for a very long time, but instead of outright nerfing it we increased crosspath potential for those who manually take control over their heli micro. On the opposite end of the spectrum, Pursuit Razor Rotors has underperformed due to distancing itself far too much, so we increased the range of this attack slightly.",
                        "items": [
                            {
                                "text": "3-0-0 Razor Rotors area increased from 33 to 35"
                            },
                            {
                                "text": "0-3-0 blow rate reduced from 0.125 -> 0.15"
                            },
                            {
                                "text": "0-3-2 blow rate increased from 0.125 -> 0.12"
                            },
                            {
                                "text": "X-X-4 Comanche Defense duration increased 10 -> 12"
                            }
                        ]
                    },
                    {
                        "tower": "Wizard Monkey",
                        "type": "Magic",
                        "description": "Second and third path upgrades get some fine tuning for more internal consistency. We want to make slow tweaks here to bring them into better balance",
                        "items": [
                            {
                                "text": "0-3-1 Dragon’s Breath crosspath now benefits from increased pierce 4 -> 6"
                            },
                            {
                                "text": "X-4-X & x5x Phoenix summon states should now save between games"
                            },
                            {
                                "text": "X-X-3 Shimmer price reduced from $1800 -> 1700"
                            },
                            {
                                "text": "X-X-5 Unpopped Army, we know how badly changes are wanted here, but there was more to do than we could achieve in this update"
                            }
                        ]
                    },
                    {
                        "tower": "Super Monkey",
                        "type": "Magic",
                        "description": "We were finally able to properly implement a popular suggestion for the Robo Monkey, and will be keeping an eye on it’s performance more closely in this update. In addition to this, Dark Knight’s reliance on Alchemist/Obyn to reach a reasonable pierce value made it too difficult to enjoy teleporting around using Dark Knight’s new ability so we tried to cut out that dependency with a sizable pierce increase.",
                        "items": [
                            {
                                "text": "X-3-X Robo Monkey is now able to independently set its arms to different target priorities"
                            },
                            {
                                "text": "X-X-3 Dark Knight pierce increased from 3 -> 5 (please note the xx4 Dark Champion does not inherit the pierce buff from xx3)"
                            }
                        ]
                    },
                    {
                        "tower": "Alchemist",
                        "type": "Magic",
                        "description": "Alchemist is already widely used, but we thought of an interesting way to add some more crosspath value and wanted to take the chance to perform a small rebalance at the same time.",
                        "items": [
                            {
                                "text": "3-X-X Berserker Brew buff shots per brew reduced from 30 -> 25"
                            },
                            {
                                "text": "4-X-X Stronger Stimulant buff shots per brew reduced from 50 -> 40"
                            },
                            {
                                "text": "3-2-0 Berserker Brew buff shots per brew increased from 25 -> 35"
                            },
                            {
                                "text": "4-2-0 Stronger Stimulant buff shots per brew increased from 40 -> 50"
                            },
                            {
                                "text": "3-2-0 Berserker Brew duration increased from 5s -> 6"
                            },
                            {
                                "text": "3-2-0 Berserker Brew re-application cooldown reduced from 5s -> 4"
                            },
                            {
                                "text": "4-2-0 Stronger Stimulant duration increased from 12s -> 13"
                            },
                            {
                                "text": "4-2-0 Stronger Stimulant re-application cooldown reduced from 5s -> 4"
                            }
                        ]
                    },
                    {
                        "tower": "Spike Factory",
                        "type": "Support",
                        "description": "Bigger balance shifts including Super Mines were not feasible for this update, but we did make a meaningful price reduction.",
                        "items": [
                            {
                                "text": "5-X-X Super Mines Price reduced from $175,000 -> 162,500"
                            }
                        ]
                    },
                    {
                        "tower": "Engineer",
                        "type": "Support",
                        "description": "Continuing our efforts to make crosspaths meaningful and fit the style of each path more solidly, a number of crosspath and base level balance shifts were made.",
                        "items": [
                            {
                                "text": "1-1-0 Larger Service Area now applies 1/5th the range (+4) to any sentries produced"
                            },
                            {
                                "text": "1-0-1 Oversize Nails allows sentries produced by this tower to pop frozen Bloons"
                            },
                            {
                                "text": "1-0-1 Oversize Nails now increases sentry pierce by +1"
                            },
                            {
                                "text": "2-X-X Faster Engineering sentry deployment rate increased further from 7s -> 6"
                            },
                            {
                                "text": "4-X-X Sentry Expert base range of all sentries increased from 45 -> 50"
                            },
                            {
                                "text": "5-X-X Sentry Paragon explosion radius scales with sentry radius"
                            },
                            {
                                "text": "X-4-X Engineer Overclock ability active buff state will now be included in save files"
                            },
                            {
                                "text": "X-5-X Ultraboost will now apply ‘perma’ stacks upon ability activation rather than expiration"
                            }
                        ]
                    },
                    {
                        "tower": "Admiral Brickell",
                        "description": "While Brickell setups have a very specific select group of interactions, it is clear her abilities in this interaction are over performing so we want to try take a slow approach toning these back while we continue to review all Heroes each update.",
                        "items": [
                            {
                                "text": "Lv 3: Naval Tactics Duration reduced 10 -> 9"
                            },
                            {
                                "text": "Lv 14: Naval Tactics Duration reduced 15 -> 12"
                            },
                            {
                                "text": "Lv 10: Mega Mine damage reduced from 5000 -> 4000"
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
