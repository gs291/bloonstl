import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import TowerText from "../tower/TowerText";
import ImageFill from "../image/ImageFill";
import DefaultButton from "../button/DefaultButton";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
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

const ButtonContainer = styled("div")`
  color: ${props => props.theme.palette.text.primary};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ImgContainer = styled("a")`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  
  padding-bottom: 57%;
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
    const mobile = useSelector(getMobile);
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
                <Title variant={mobile ? "h3" : "h2"} component="h2">
                    {tag.title}
                </Title>
                <Description variant="h6" font={true}>
                   Below is a useful visual representation of the default in-game keybinds.
                   Click the button below to switch between keyboard keys and icons. Click on the image to view the full image.
                </Description>
                <ButtonContainer>
                    <DefaultButton variant={darkMode ? "outlined" : "contained"} onClick={handleClick}>
                        <TowerText variant="h6">
                            REPLACE {show ? "ICONS WITH KEYS" : "KEYS WITH ICONS"}
                        </TowerText>
                    </DefaultButton>
                </ButtonContainer>

                <ImgContainer href={`https://res.cloudinary.com/bloons/image/upload/q_100/${src[show]}`}>
                    <ImageFill src={src[show]} alt="Hotkey image helper" quality={100} priority={true} />
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
