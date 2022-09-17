import {styled} from "@mui/material/styles";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const PaddedCell = styled(TableCell)`
  padding: 0 3px;
  border-bottom: 1px solid ${props => props.theme.palette.text.primary};
`;

const Row = styled(TableRow, globalOptions)`
  ${props => props["data-s"] ? `background-color: ${rgbaHex(props.theme.palette.stats.types, 0.4)};` : ""}
`;

const TypeText = styled(TowerText)`
  
`;

const EnabledContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnabledCheckbox = styled(CheckBoxIcon)`
  color: ${props => props.theme.palette.informational.pros};
`;

const Enabled = ({}) => (
    <>
        <EnabledContainer>
            <EnabledCheckbox/>
        </EnabledContainer>
    </>
);

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

/**
 * The tower damage type table
 *
 * @param {Object} props Component props
 * @param {string} props.type The tower damage type
 */
export default function Types({type}) {

    return (
        <>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <PaddedCell><TowerText variant="caption">Type</TowerText></PaddedCell>
                            <PaddedCell align="center"><TowerText variant="caption">Black</TowerText></PaddedCell>
                            <PaddedCell align="center"><TowerText variant="caption">White</TowerText></PaddedCell>
                            <PaddedCell align="center"><TowerText variant="caption">Purple</TowerText></PaddedCell>
                            <PaddedCell align="center"><TowerText variant="caption">Lead</TowerText></PaddedCell>
                            <PaddedCell align="center"><TowerText variant="caption">Frozen</TowerText></PaddedCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.type}
                                data-s={row.type.toLowerCase() === type}
                            >
                                <PaddedCell component="th" scope="row">
                                    <TypeText variant="caption" font={true}>
                                        {row.type}
                                    </TypeText>
                                </PaddedCell>
                                <PaddedCell align="center">{row.black && <Enabled />}</PaddedCell>
                                <PaddedCell align="center">{row.white && <Enabled />}</PaddedCell>
                                <PaddedCell align="center">{row.purple && <Enabled />}</PaddedCell>
                                <PaddedCell align="center">{row.lead && <Enabled />}</PaddedCell>
                                <PaddedCell align="center">{row.frozen && <Enabled />}</PaddedCell>
                            </Row>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}