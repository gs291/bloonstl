import {styled} from "@mui/material/styles";

import Endpoint from "./Endpoint";
import FieldTable from "./FieldTable";
import TowerText from "../tower/TowerText";


const TitleDescContainer = styled("div")`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled(TowerText)`
  margin-bottom: 10px;
`;


/**
 * GraphQL API Item
 *
 * @param {Object} props Component props
 * @param {Object} props.api Object containing information about the API item
 * @param {string} props.type Shows which API endpoint type it is (object or query)
 */
export default function ApiItem({ api, type }) {

    return (
        <>
            <TitleDescContainer>
                <Title variant="h3">
                    {api.title}
                </Title>
                <TowerText variant="h6" font={true}>
                    {api.description}
                </TowerText>
            </TitleDescContainer>

            {api.items.map(item => (
                <div key={item.name}>
                    {type === "obj" && (<FieldTable row={item}/>)}
                    {type === "queries" && (<Endpoint item={item}/>)}
                </div>
            ))}
        </>
    );
}