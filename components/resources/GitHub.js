import TowerText from "../tower/TowerText";
import styled from "@emotion/styled";

const GitHubContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(TowerText)`
  text-align: center;
  margin-bottom: 30px;
`;

const TextLink = styled.a`
  font-family: monospace;
  text-decoration: underline;
`;

const Text = styled(TowerText)`
  text-align: center;
  margin-bottom: 7.5px;
`;

export default function GitHub({className, tag}) {

    return (
        <>
            <GitHubContainer className={className} id={tag.href}>
                <Title variant="h2">
                    GitHub Information
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