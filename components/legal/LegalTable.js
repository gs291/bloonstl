import {styled} from "@mui/material/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

import TowerText from "../tower/TowerText";

const TableItem = styled(TableCell)`
  border-bottom: 1px solid ${props => props.theme.palette.text.primary}
`;

/**
 * Legal table
 *
 * @param {Object} props Component props
 * @param {Array<string>} props.head Table head columns
 * @param {Array<Object<{name: string, columns: Array<string>}>>} props.rows Table rows
 */
export default function LegalTable({head, rows, ...rest}) {

    return (
        <>
            <TableContainer { ...rest }>
                <Table>
                    <TableHead>
                        <TableRow>
                            {head.map((h, idx) => (
                                <TableItem key={idx}>
                                    <TowerText variant="h6">
                                        {h}
                                    </TowerText>
                                </TableItem>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableItem component="th" scope="row">
                                    <TowerText variant="body1" font={true}>
                                        {row.name}
                                    </TowerText>
                                </TableItem>
                                {row.columns.map((col, idx) => (
                                    <TableItem key={idx}>
                                        <TowerText variant="body1" font={true}>
                                            {col}
                                        </TowerText>
                                    </TableItem>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}