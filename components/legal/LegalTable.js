import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

import TowerText from "../tower/TowerText";
import {getDarkMode} from "../../lib/redux/selectors";


export default function LegalTable({head, rows, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TableContainer { ...rest }>
                <Table>
                    <TableHead>
                        <TableRow>
                            {head.map((h, idx) => (
                                <TableCell key={idx}>
                                    <TowerText variant="h6">
                                        {h}
                                    </TowerText>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell component="th" scope="row">
                                    <TowerText variant="body1" font={true}>
                                        {row.name}
                                    </TowerText>
                                </TableCell>
                                {row.columns.map((col, idx) => (
                                    <TableCell key={idx}>
                                        <TowerText variant="body1" font={true}>
                                            {col}
                                        </TowerText>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}