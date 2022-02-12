import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import ImageFill from "../image/ImageFill";
import siteColors from "../../lib/utils/siteColors";
import DefaultButton from "../button/DefaultButton";
import {getDarkMode} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../lib/utils/ga4";


const KeybindContainer = styled("div")`
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

const ButtonContainer = styled("div", globalOptions)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ImgContainer = styled("a")`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 515px;
  max-height: 515px;
`;

const Author = styled("div")`
  width: 100%;
`;

const TextLink = styled("a")`
  text-decoration: underline;
`;


const GA4_KEYBINDINGS_ID = "KEYBINDINGS";

/**
 * Resource page keybinding component with image
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 * @param {Object<{href: string, title: string}>} props.tag Tag used for table of contents
 */
export default function Keybindings({ className, tag }) {
    const darkMode = useSelector(getDarkMode);
    const [show, setShow] = useState(false);
    const src = {
        "false": "resources/hotkeys.png",
        "true": "resources/hotkeys-icons.png"
    };

    const handleClick = () => {
        setShow(prevShow => !prevShow);
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_KEYBINDINGS_ID}`});
    };

    return (
        <>
            <KeybindContainer className={className} id={tag.href}>
                <Title variant="h2">
                    Keybindings
                </Title>
                <Description variant="h6" font={true}>
                    Below is a useful visual representation of the default in-game keybindings.
                   Click the button below to switch between keyboard keys and icons. Click on the image to view the full image.
                </Description>
                <ButtonContainer data-dm={darkMode}>
                    <DefaultButton variant={darkMode ? "outlined" : "contained"} onClick={handleClick}>
                        <TowerText variant="h6">
                            REPLACE {show ? "ICONS WITH KEYS" : "KEYS WITH ICONS"}
                        </TowerText>
                    </DefaultButton>
                </ButtonContainer>

                <ImgContainer href={`https://res.cloudinary.com/bloons/image/upload/q_100/${src[show]}`}>
                    <ImageFill src={src[show]} alt="Hotkey image helper" quality={100} />
                </ImgContainer>
                <Author>
                    <TowerText variant="body1">
                        Created by <TextLink href="https://www.reddit.com/user/benny0629/">u/benny0629</TextLink>
                    </TowerText>
                </Author>
            </KeybindContainer>
        </>
    );
}
