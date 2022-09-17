import {useSelector} from "react-redux";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import {getMobile} from "../../lib/redux/selectors";


const Title = styled(Typography)`
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
  color: ${props => props.theme.palette.text.primary};
  border-bottom: 6px solid ${props => props.theme.palette.primary.main};
  text-overflow: ellipsis;
  overflow: hidden;
`;

/**
 * Website title for a page
 *
 * @param {Object} props Component props
 * @param {string} props.title Title to be displayed in the page
 */
export default function PageTitle({title}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Title variant={mobile ? "h2" : "h1"} component="h1">
                {title}
            </Title>
        </>
    );
}