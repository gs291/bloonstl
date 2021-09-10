import styled from "@emotion/styled";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

import TowerText from "../tower/TowerText";

const FieldContainer = styled.div`
  width: 100%;
`;

export default function FieldTable({row}) {

    return (
        <>
            <FieldContainer>
                <TowerText variant="h4">
                    {row.name}
                </TowerText>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.fields.map(field => (
                                <TableRow key={field.key}>
                                    <TableCell align="left">{field.key} ({field.type})</TableCell>
                                    <TableCell align="left">{field.text} </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </FieldContainer>
        </>
    );
}