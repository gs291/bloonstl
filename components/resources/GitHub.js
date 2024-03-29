import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";

import TowerText from "../tower/TowerText";
import {getMobile} from "../../lib/redux/selectors";


const GitHubContainer = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(TowerText)`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TextLink = styled("a")`
  font-family: monospace;
  text-decoration: underline;
`;

const Text = styled(TowerText)`
  text-align: center;
  margin-bottom: 7.5px;
`;

/**
 * Resources page GitHub section
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function GitHub({className, tag}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <GitHubContainer className={className} id={tag.href}>
                <Title variant={mobile ? "h3" : "h2"} component="h2">
                    {tag.title}
                </Title>

                <Title variant="h5" font={true}>
                    This project is Open Source!
                </Title>
                <Text variant="h6" font={true}>
                    The project was created with a powerful React framework, Next.js, that incorporates a multitude of services such as redux, GraphQL, MySQL, etc.
                </Text>
                <Text variant="h6" font={true}>
                    To view or contribute to this project you can locate it at:&nbsp;
                    <TextLink href="https://github.com/gs291/bloonstl">bloonstl</TextLink>
                </Text>
            </GitHubContainer>
        </>
    );
}