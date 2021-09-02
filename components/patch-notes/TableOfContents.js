import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const TocWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  min-width: 60%;
  padding: 1em 2em;
  border-radius: 20px;
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light, 0.25)};
`;

const TocContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 15px;
  margin-bottom: 15px
`;

const TocList = styled.ul`
  
`;

const TocItem = styled.li`
  margin-top: 10px;
  list-style-type: lower-roman;
  
  &::marker {
    transition: 0.3s;
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TocLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TocText = styled(TowerText)`
  padding-left: 10px;
`;

export default function TableOfContents({ tags }) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TocContainer>
                <TocWrapper data-dm={darkMode}>
                    <TowerText variant="h5">
                        Contents
                    </TowerText>
                    <TocList>
                        {tags.map(tag => (
                            <TocItem key={tag.href} data-dm={darkMode}>
                                <Link href={`#${tag.href}`}>
                                    <TocLink data-dm={darkMode}>
                                        <TocText variant="h6">
                                            {tag.title}
                                        </TocText>
                                    </TocLink>
                                </Link>
                            </TocItem>
                        ))}
                    </TocList>
                </TocWrapper>
            </TocContainer>
        </>
    );
}
