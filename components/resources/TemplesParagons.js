import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";


const TemplesParagonsContainer = styled("div")`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(TowerText)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
`;

const Description = styled(TowerText)`
  text-align: center;
  
  margin-top: 20px;
`;

const TextLink = styled("a")`
  font-family: monospace;
  text-decoration: underline;
`;

/**
 * Resource page temples and paragons helper
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function TemplesParagons({ className, tag }) {

    return (
        <>
            <TemplesParagonsContainer className={className} id={tag.href}>
                <Title variant="h2">
                    {tag.title}
                </Title>
                <Description variant="h5" font={true}>
                    Temples and Paragons are an amazing feature to help get to higher rounds!
                </Description>
                <Description variant="h6" font={true}>
                    Temples refer to an upgraded Super Monkey.
                    More specifically with the ability path of 4-X-X or 5-X-X.
                    Temples sacrifice all the non-hero towers in range to contribute to its power.
                    Temples have different sacrifice levels that increase its power with a higher sacrifice level.
                    To view and understand how Temples are created/calculated visit the informative Temple Popology page on&nbsp;
                    <TextLink href="https://www.reddit.com/r/btd6/comments/f813rx/advanced_popology_vol_6_temple/">Reddit</TextLink>!
                </Description>
                <Description variant="h6" font={true}>
                    Paragon towers refer to Monkeys that have an ability path of 5-5-5.
                    For example, Dart Monkey has a Paragon tower called Apex Plasma Master.
                    A Paragon upgrade becomes available when all three tier 5s (5-X-X & X-5-X & X-X-5) of a tower are on the map at once.
                    Paragons have different Degrees that contribute power to the tower.
                    To view and understand how Paragons are created/calculated visit the informative Paragon Popology page on&nbsp;
                    <TextLink href="https://www.reddit.com/r/btd6/comments/qk3c09/advanced_popology_vol_7_paragons/">Reddit</TextLink>!
                </Description>
            </TemplesParagonsContainer>
        </>
    );
}