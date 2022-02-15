# Utilities

## siteColors.js

When the project was initially created MUI (formerly Material UI) was only needed to borrow a few components.
Due to this a MUI theme was never incorporated due to the small use case of MUI components.
As the project progressed more components were used by MUI. 
Unfortunately, by the time it was realized that an MUI theme would be helpful it was too late.
It was too late in the sense that since this siteColors "theme" was so deeply incorporated it would be waste of time and resources to change something that's not broken.

With that being said, if it is found that incorporating a MUI theme would drastically improve performance then it will be done.
Create an issue if this is the case.

## utils.js

### Ability Modifier Parsing

Below you can find how ability modifiers are parsed

| Code                 | Description                                                                               |
|----------------------|-------------------------------------------------------------------------------------------|
| +                    | Adds to the stat                                                                          |
| -                    | Subtracts from the stat                                                                   |
| *                    | multiply to the stat                                                                      |
| (nothing)            | Assign the stat                                                                           |
| &#x7c;               | Assigns the stat AND assigns the default stat                                             |
| $                    | Assigns the stat as infinite                                                              |
| note:                | Adds a note to the stat                                                                   |
| type:                | Sets the stat damage type                                                                 |
| cross:XXX:           | Adds a crosspath to the stat (for ability path X-X-X)                                     |
| abil:NAME-NEWNAME:   | Sets or modifies the stat ability                                                         |
| status:NAME-NEWNAME: | Sets or modifies the stat status                                                          |
| attack:NAME-NEWNAME: | Sets or modifies the stat attack                                                          |
| buff:NAME-NEWNAME:   | Sets or modifies the stat buff                                                            |
| NAME-NEWNAME         | Sets the status/ability/buff/attack NAME or to NEWNAME if the name changed                |
| NAME&#x7c;NEWNAME    | Modifies the NAME status/ability/buff/attack or to the other NEWNAME if NAME is not found |
