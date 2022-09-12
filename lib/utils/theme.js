import {createTheme} from '@mui/material';

export default function getThemeOptions(darkMode){

    return createTheme({
        palette: {
            mode: (darkMode ? 'dark' : 'light'),
            primary: {
                main: (darkMode ? '#0C4367' : '#14C8EB'),
                mainOpposite: (darkMode ? '#14C8EB' : '#0C4367'),
                hover: (darkMode ? '#109081' : '#00338A')
            },
            secondary: {
                main: (darkMode ? '#3A414B' : '#767473')
            },
            text: {
                primary: (darkMode ? '#FFFFFF' : '#000000'),
                gridTitle: (darkMode ? '#000000' : '#000000'),
                navLink:  (darkMode ? '#188CD9' : '#14C8EB'),
                optional: (darkMode ? '#D53E73' : '#b00020'),
                description: (darkMode ? '#CCCCCC' : '#565656'),
                gold: (darkMode ? '#eba407' : '#DD9A06'),
                xp: (darkMode ? '#5BCF00' : '#94E458'),
                cash: (darkMode ? '#9ae42c' : '#8CD427'),
            },
            textOpposite: {
                primary: (darkMode ? '#000000' : '#FFFFFF')
            },
            background: {
                default: (darkMode ? '#0D202B' : '#FFFFFF'),
                paper: (darkMode ? '#3A414B' : '#d0cfcc'),
                tooltip: (darkMode ? '#183C51' : '#FFFFFF')
            },
            divider: (darkMode ? '#243b53' : '#0052d8'),
            scrollbar: {
                primary: (darkMode ? '#0D202B' : '#ffffff'),
                thumb: (darkMode ? '#225675' : '#12bcdd'),
                hover: (darkMode ? '#1A415A' : '#0DA4C3'),
            },
            shadow: {
                main: (darkMode ? '#0C6A60' : '#0058EF')
            },
            border: {
                main: (darkMode ? '#1CDECA' : '#0052D8'),
                tooltip: (darkMode ? '#FFFFFF' : '#183C51')
            },
            hover: {
                main: (darkMode ? '#56636F' : '#9D9C99')
            },
            button: {
                primary: (darkMode ? '#086475' : '#14C8EB'),
                patch: (darkMode ? '#258EA6' : '#4DD9F5'),
                switch: (darkMode ? '#0D869E' : '#14C8EB'),
                select: (darkMode ? '#0C4367' : '#FFFFFF'),
                pagination: {
                    primary: (darkMode ? '#205373' : '#076BFF'),
                    selected: (darkMode ? '#133041' : '#079EFF'),
                },
                returnTop: {
                    primary: (darkMode ? '#2D719C' : '#14C8EB'),
                    hover: (darkMode ? '#388CC2' : '#15B9FF'),
                },
                expander: {
                    primary: (darkMode ? '#183C51' : '#F2F2F2'),
                    hover: (darkMode ? '#1A8DF2' : '#0F9CB7'),
                }
            },
            toast: {
                primary: (darkMode ? '#154460' : '#81D6E8'),
                header: (darkMode ? '#149ABB' : '#14C8EB'),
                error: {
                    primary: (darkMode ? '#7C2B2B' : '#BF4343'),
                    header: (darkMode ? '#AF3D3D' : '#FF5B5C'),
                    alert: (darkMode ? '#FF0000' : '#FF0000'),
                }
            },
            filters: {
                on: (darkMode ? '#4BB543' : '#90EE90'),
                off: (darkMode ? '#C03D29' : '#C92131')
            },
            informational: {
                pros: (darkMode ? '#4BB543' : '#30CA53'),
                cons: (darkMode ? '#C03D29' : '#C92131'),
                error: (darkMode ? '#DD3D31' : '#F16360'),
                info: (darkMode ? '#1A8DF2' : '#0F9CB7')
            },
            ability: {
                activated: '#FFDC00',
                card: (darkMode ? '#1f4e6a' : '#079EFF'),
                shadow: (darkMode ? '#2A526A' : '#000000'),
                paragon: (darkMode ? '#720993' : '#B212E0')
            },
            tower: {
                type: {
                    primary: {
                        color: '#add8e6',
                        hover: (darkMode ? '#374E59' : '#97BECB'),
                        grid: (darkMode ? '#2C3B3E' : '#97BECB'),
                        card: (darkMode ? '#4A6773' : '#ADD8E6')
                    },
                    military: {
                        color: '#90EE90',
                        hover: (darkMode ? '#2F5928' : '#7FD27F'),
                        grid: (darkMode ? '#20371D' : '#70B970'),
                        card: (darkMode ? '#3C7233' : '#90EE90')
                    },
                    magic: {
                        color: '#C89BFF',
                        hover: (darkMode ? '#43365A' : '#9078B0'),
                        grid: (darkMode ? '#372B4D' : '#AD86DC'),
                        card: (darkMode ? '#554370' : '#AA8FCC')
                    },
                    support: {
                        color: '#F2B368',
                        hover: (darkMode ? '#B5844C' : '#AB7D48'),
                        grid: (darkMode ? '#4D3B25' : '#BC8B50'),
                        card: (darkMode ? '#735837' : '#D09959')
                    },
                    heroes: {
                        color: '#7ED9EB',
                        hover: (darkMode ? '#305860' : '#55939F'),
                        grid: (darkMode ? '#2B4D54' : '#4E8691'),
                        card: (darkMode ? '#3E707A' : '#62A9B7')
                    }
                },
                hero: {
                    quincy: {
                        color: '#E59C68',
                        grid: (darkMode ? '#4B3628' : '#EF7E4E')
                    },
                    gwendolin: {
                        color: '#FF8F57',
                        grid: (darkMode ? '#5D3725' : '#E5753F')
                    },
                    strikerJones: {
                        color: '#C7ED83',
                        grid: (darkMode ? '#3B4A2B' : '#9CBA66')
                    },
                    obynGreenfoot: {
                        color: '#3AD7A5',
                        grid: (darkMode ? '#12493A' : '#2EAD84')
                    },
                    sauda: {
                        color: '#84D2FF',
                        grid: (darkMode ? '#325467' : '#69A7CC')
                    },
                    captainChurchill: {
                        color: '#75D23E',
                        grid: (darkMode ? '#254618' : '#64B835')
                    },
                    benjamin: {
                        color: '#13E8EC',
                        grid: (darkMode ? '#06565A' : '#0CA8AB')
                    },
                    ezili: {
                        color: '#BD8DFF',
                        grid: (darkMode ? '#473967' : '#A080D9')
                    },
                    patFusty: {
                        color: '#FFA11D',
                        grid: (darkMode ? '#5D3D10' : '#CC8C34')
                    },
                    adora: {
                        color: '#FFED8A',
                        grid: (darkMode ? '#6A6540' : '#CCBD6E')
                    },
                    admiralBrickell: {
                        color: '#8D92FF',
                        grid: (darkMode ? '#3E4774' : '#707BCB')
                    },
                    psi: {
                        color: '#FFBC33',
                        grid: (darkMode ? '#5D431B' : '#CC872E')
                    },
                    etienne: {
                        color: '#7BC1DE',
                        grid: (darkMode ? '#2A4552' : '#5990A9')
                    },
                    geraldo: {
                        color: '#00fbb5',
                        grid: (darkMode ? '#008560' : '#00c790')
                    }
                }
            },
            tier: {
                s: {
                    color: '#ff7f7f',
                    selected: '#B25656',
                    hover: (darkMode ? '#4A2323' : '#D66565'),
                    grid: (darkMode ? '#311818' : '#BF5D5D'),
                    card: (darkMode ? '#622D2D' : '#F27777')
                },
                a: {
                    color: '#ffbf7f',
                    selected: '#BF8D5D',
                    hover: (darkMode ? '#5E3E25' : '#D79B64'),
                    grid: (darkMode ? '#462E1C' : '#BF8D5D'),
                    card: (darkMode ? '#654B32' : '#F0AC6E')
                },
                b: {
                    color: '#68D868',
                    selected: '#55BA55',
                    hover: (darkMode ? '#43622D' : '#4BA24B'),
                    grid: (darkMode ? '#334A23' : '#52AD52'),
                    card: (darkMode ? '#547B37' : '#61CA61')
                },
                c: {
                    color: '#7DC0FC',
                    selected: '#5183AB',
                    hover: (darkMode ? '#4E78A1' : '#598AB9'),
                    grid: (darkMode ? '#436788' : '#6AA2D5'),
                    card: (darkMode ? '#5384B2' : '#73B4F2')
                },
                heroes: {
                    color: '#7DC0FC',
                    selected: '#5183AB',
                    hover: (darkMode ? '#4E78A1' : '#598AB9'),
                    grid: (darkMode ? '#436788' : '#6AA2D5'),
                    card: (darkMode ? '#5384B2' : '#73B4F2')
                }
            },
            stats: {
                primary: (darkMode ? '#183C51' : '#42A5E5'),
                hover: (darkMode ? '#183C51' : '#42A5E5'),
                pros: (darkMode ? '#4BB543' : '#1D7D33'),
                cons: (darkMode ? '#C03D29' : '#C92131'),
                types: (darkMode ? '#2A6A90' : '#3D9BD8'),
                abils: {
                    primary: (darkMode ? '#BFA300' : '#F9AA40'),
                    border: (darkMode ? '#726100' : '#998300'),
                    background: (darkMode ? '#726100' : '#998300')
                },
                attacks: {
                    primary: (darkMode ? '#00557C' : '#00B1FF'),
                    border: (darkMode ? '#003249' : '#007BB2'),
                    background: (darkMode ? '#003249' : '#007BB2')
                },
                buffs: {
                    primary: (darkMode ? '#294900' : '#61B41B'),
                    border: (darkMode ? '#1F3E05' : '#458113'),
                    background: (darkMode ? '#1F3E05' : '#458113')
                },
                statuses: {
                    primary: (darkMode ? '#843C0B' : '#F9751A'),
                    border: (darkMode ? '#512406' : '#AC5112'),
                    background: (darkMode ? '#512406' : '#AC5112')
                }
            }
        },
        typography: {
            fontFamily: '"Luckiest Guy", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1000,
                lg: 1200,
                xl: 1536,
            }
        }
    });
}
