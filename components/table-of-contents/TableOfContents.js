import Link from "next/link";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {ga4SendSelectContent, LINK_PREFIX, SELECT_CONTENT_LINK} from "../../lib/utils/ga4";


const TocContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 60%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 20px;
  transition: 0.3s;
`;

const TocWrapper = styled("div", globalOptions)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 2em 3em;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light, 0.25)};
  transition: 0.3s;
`;

const TitleContainer = styled("div", globalOptions)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => rgbaHex(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light, 0.5)};
  transition: 0.3s;
`;

const TocList = styled("ul")`
  margin: 0;
`;

const TocItem = styled("li", globalOptions)`
  margin-top: 10px;
  list-style-type: lower-roman;
  
  &::marker {
    transition: 0.3s;
    color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TocLink = styled('a', globalOptions)`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  }
`;

const TocText = styled(TowerText)`
  padding-left: 10px;
`;

const GA4_TABLE_OF_CONTENTS_ID = "TABLE_OF_CONTENTS";

/**
 * Table of Contents component
 *
 * @param {Object} props Component props
 * @param {Array<Object<{href: string, title: string}>>} props.tags Tags used for table of contents
 * @param {string} [props.className] class to apply to the component
 */
export default function TableOfContents({ tags, className }) {
    const darkMode = useSelector(getDarkMode);

    const handleClick = (href) => ga4SendSelectContent(SELECT_CONTENT_LINK, {
        item_id: `${LINK_PREFIX}${GA4_TABLE_OF_CONTENTS_ID}`,
        href: href,
    });

    return (
        <>
            <TocContainer className={className}>
                <TitleContainer>
                    <TowerText variant="h5">
                        Contents
                    </TowerText>
                </TitleContainer>
                <TocWrapper data-dm={darkMode}>
                    <TocList>
                        {tags.map(tag => (
                            <TocItem key={tag.href} data-dm={darkMode} onClick={() => handleClick(`#${tag.href}`)}>
                                <Link href={`#${tag.href}`} passHref>
                                    <TocLink data-dm={darkMode}>
                                        <TocText variant="h6" data-h={`#${tag.href}`}>
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
