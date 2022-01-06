import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";


import ApiItem from "../api/ApiItem";
import TowerText from "../tower/TowerText";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const GraphQLContainer = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Information = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const Title = styled(TowerText)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`;

const Description = styled(TowerText)`
  
`;

const Link = styled('a', globalOptions)`
  font-family: monospace;
  transition: 0.3s;
  font-size: 1.25rem;
  line-break: anywhere;
  text-decoration: underline;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const ExpanderContainer = styled("div")`
  width: 100%;
`;

const Expander = styled(Accordion, globalOptions)`
  ${props => {
      const rgb = props["data-dm"] ? '255 255 255' : '0 0 0';
      return `box-shadow: 0px 2px 10px -1px rgb(${rgb} / 20%), 0px 1px 3px 0px rgb(${rgb} / 14%), 0px 1px 3px 0px rgb(${rgb} / 12%);`;
  }}
`;

const ExpandMore = styled(ExpandMoreIcon, globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const ExpanderSummary = styled(AccordionSummary, globalOptions)`
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
`;

const ExpandedDetails = styled(AccordionDetails, globalOptions)`
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};
`;

export default function GraphQL({ className, api, tag}) {
    const darkMode = useSelector(getDarkMode);
    const [path, setPath] = useState("");

    useEffect(() => {
        if (window) {
            setPath(`${window.location.protocol}//${window.location.host}/api/graphql`)
        }
    }, [])

    return (
        <>
            <GraphQLContainer className={className} id={tag.href}>
                <Information>
                    <Title variant="h2">
                        GraphQL API
                    </Title>
                    <Title variant="h2">
                        Documentation
                    </Title>
                </Information>
                <Information>
                    <Description variant="h6" font={true}>
                        Expand below to get information on the GraphQL API endpoint located at:
                    </Description>
                    <Link href={path} data-dm={darkMode}>
                        {path}
                    </Link>
                </Information>

                <ExpanderContainer>
                    <Expander data-dm={darkMode}>
                        <ExpanderSummary
                            expandIcon={<ExpandMore data-dm={darkMode} />}
                            data-dm={darkMode}
                        >
                            <TowerText variant="h5">Queries and Objects</TowerText>
                        </ExpanderSummary>
                        <ExpandedDetails data-dm={darkMode}>
                            <ApiItem api={api.queries} type="queries"/>
                            <FixedDivider width={100} />
                            <ApiItem api={api.objects} type="obj"/>
                        </ExpandedDetails>
                    </Expander>
                </ExpanderContainer>
            </GraphQLContainer>
        </>
    );
}
