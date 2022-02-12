import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";


export const List = styled("ul", globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

/**
 * Legal unordered list
 *
 * @param {Object} props Component props
 * @param {any} props.children Children supplied to the unordered list item
 */
export default function LegalUList({children, ...rest}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <List
                data-dm={darkMode}
                { ...rest }
            >
                {children}
            </List>
        </>
    );
}