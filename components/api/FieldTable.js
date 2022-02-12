import styled from "@emotion/styled";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

import TowerText from "../tower/TowerText";


const FieldContainer = styled("div")`
  width: 100%;
  margin-bottom: 40px;
`;

const FieldName = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TypeContainer = styled("div")`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  margin-left: 5px;
`;

const Type = styled(TowerText)`
    font-weight: bold;
`;


/**
 * GraphQL API object table item
 *
 * @param {Object} props Component props
 * @param {Object<{name: string, fields: Array<{key: string, type: string, text: string}>}>} props.row
 *   Row for an API Object item
 */
export default function FieldTable({row}) {

    return (
        <>
            <FieldContainer>
                <TowerText variant="h4" font={true}>
                    {row.name}
                </TowerText>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TowerText variant="h6">
                                        Name
                                    </TowerText>
                                </TableCell>
                                <TableCell>
                                    <TowerText variant="h6">
                                        Description
                                    </TowerText>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.fields.map(field => (
                                <TableRow key={field.key}>
                                    <TableCell align="left">
                                        <FieldName>
                                            <TowerText variant="body1" font={true}>
                                                {field.key}
                                            </TowerText>
                                            <TypeContainer>
                                                <TowerText variant="body1" font={true}>
                                                    (&nbsp;
                                                </TowerText>
                                                <Type variant="body1" font={true}>
                                                    {field.type}
                                                </Type>
                                                <TowerText variant="body1" font={true}>
                                                    &nbsp;)
                                                </TowerText>
                                            </TypeContainer>
                                        </FieldName>
                                    </TableCell>
                                    <TableCell align="left">
                                        <TowerText variant="body1" font={true}>
                                            {field.text}
                                        </TowerText>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </FieldContainer>
        </>
    );
}