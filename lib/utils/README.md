# Utilities

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
