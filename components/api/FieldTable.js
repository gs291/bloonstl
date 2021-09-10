import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

import TowerText from "../tower/TowerText";

export default function FieldTable({row}) {

    return (
        <>
            <div>
                <TowerText variant="h4">
                    {row.name}
                </TowerText>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.fields.map(field => (
                                <TableRow key={field.key}>
                                    <TableCell align="right">{field.key} ({field.type})</TableCell>
                                    <TableCell align="right">{field.text} </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}