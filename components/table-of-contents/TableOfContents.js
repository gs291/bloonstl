import Link from "next/link";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {rgbaHex} from "../../lib/utils/utils";
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
`;

const TocWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 2em 3em;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.25)};
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.5)};
`;

const TocList = styled("ul")`
  margin: 0;
`;

const TocItem = styled("li")`
  margin-top: 10px;
  list-style-type: lower-roman;
  
  &::marker {
    color: ${props => props.theme.palette.text.primary};
  }
`;

const TocLink = styled('a')`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.palette.text.primary};
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
                <TocWrapper>
                    <TocList>
                        {tags.map(tag => (
                            <TocItem key={tag.href} onClick={() => handleClick(`#${tag.href}`)}>
                                <Link href={`#${tag.href}`} passHref>
                                    <TocLink>
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
