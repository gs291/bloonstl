import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


const Number = styled("div", globalOptions)`
  margin-top: ${props => props["data-e"] ? 7.5 : 0}px;
  margin-bottom: ${props => props["data-m"] ? 0 : 5}px;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TotalContainer = styled("div", globalOptions)`
  width: 100%;
  min-width: ${props => props["data-m"] ? 175 : 225}px;
  display: flex;
  flex-direction: column;
`;

const TotalText = styled(TowerText)`
  width: ${props => props["data-w"]}%;
  text-align: right;
`;

const TotalNumber = styled(TowerText)`
  margin-left: 15px;
  width: ${props => props["data-w"]}%;
`;

/**
 * The stat numbers component
 *  - Shows the row of numbers side by side
 *
 * @param {Object} props Component props
 * @param {Array<Object<{title: string, text: string}>>} props.rows Array list of numbers
 * @param {number} [props.widthLeft=50] How much width the left title should be
 * @param {number} [props.widthRight=50] How much width the right text should be
 */
export default function StatNumbers({rows, widthLeft = 50, widthRight = 50}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <TotalContainer>
                {rows.map(row => (
                    <Number key={row.title} data-e={row.title === "Total"} data-m={mobile}>
                        <TotalText variant="body1" data-w={widthLeft}>{row.title}</TotalText>
                        <TotalNumber variant="body1" font={true} data-w={widthRight}>{row.text}</TotalNumber>
                    </Number>
                ))}
            </TotalContainer>
        </>
    );
}