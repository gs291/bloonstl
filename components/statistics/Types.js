import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const PaddedCell = styled(TableCell)`
  padding: 0 3px;
  border-bottom: 1px solid ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const Row = styled(TableRow)`
  ${props => props["data-s"] ? `background-color: ${rgbaHex(props["data-dm"] ? siteColors.stats.types.dark : siteColors.stats.types.light, 0.4)};` : ""}
`;

const TypeText = styled(TowerText)`
  
`;

const Enabled = styled(CheckBoxIcon)`
  color: ${props => props["data-dm"] ? siteColors.pros.dark : siteColors.pros.light};;
`;


const createData = (type, black, white, purple, lead, frozen) => {
    return { type, black, white, purple, lead, frozen };
}

const rows = [
    createData("Normal", true, true, true, true, true),
    createData("Acid", true, true, true, true, true),
    createData("Sharp", true, true, true, false, false),
    createData("Explosion", false, true, true, true, true),
    createData("Cold", true, false, true, false, false),
    createData("Glacier", true, false, true, false, true),
    createData("Shatter", true, true, true, false, true),
    createData("Energy", true, true, false, false, true),
    createData("Plasma", true, true, false, true, true),
    createData("Fire", true, true, false, true, true)
];

export default function Types({type}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <PaddedCell data-dm={darkMode}><TowerText variant="caption">Type</TowerText></PaddedCell>
                            <PaddedCell align="center" data-dm={darkMode}><TowerText variant="caption">Black</TowerText></PaddedCell>
                            <PaddedCell align="center" data-dm={darkMode}><TowerText variant="caption">White</TowerText></PaddedCell>
                            <PaddedCell align="center" data-dm={darkMode}><TowerText variant="caption">Purple</TowerText></PaddedCell>
                            <PaddedCell align="center" data-dm={darkMode}><TowerText variant="caption">Lead</TowerText></PaddedCell>
                            <PaddedCell align="center" data-dm={darkMode}><TowerText variant="caption">Frozen</TowerText></PaddedCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.type}
                                data-s={row.type.toLowerCase() === type}
                            >
                                <PaddedCell component="th" scope="row" data-dm={darkMode}>
                                    <TypeText variant="caption" font={true}>
                                        {row.type}
                                    </TypeText>
                                </PaddedCell>
                                <PaddedCell align="center" data-dm={darkMode}>{row.black && <Enabled data-dm={darkMode} />}</PaddedCell>
                                <PaddedCell align="center" data-dm={darkMode}>{row.white && <Enabled data-dm={darkMode} />}</PaddedCell>
                                <PaddedCell align="center" data-dm={darkMode}>{row.purple && <Enabled data-dm={darkMode} />}</PaddedCell>
                                <PaddedCell align="center" data-dm={darkMode}>{row.lead && <Enabled data-dm={darkMode} />}</PaddedCell>
                                <PaddedCell align="center" data-dm={darkMode}>{row.frozen && <Enabled data-dm={darkMode} />}</PaddedCell>
                            </Row>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}