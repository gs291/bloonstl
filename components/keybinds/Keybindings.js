import {useState} from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {FormControl, FormControlLabel, Switch} from "@mui/material";

import TowerText from "../tower/TowerText";
import ImageFill from "../image/ImageFill";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const KeybindContainer = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled(TowerText)`
  text-align: center;
  
  margin-top: 20px;
`;

const SliderContainer = styled(FormControl)`
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  transition: 0.3s;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Label = styled(FormControlLabel)`
  color: inherit;
  
  & .MuiFormControlLabel-label {
    font-size: 1.5em;
  }
`;

const Slider = styled(Switch)`
    & .MuiSwitch-switchBase.Mui-checked {
      color: ${props => props["data-dm"] ? siteColors.switch.dark : siteColors.switch.light};
    }

  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track{
    background-color: ${props => props["data-dm"] ? siteColors.switch.dark : siteColors.switch.light};
  }
`;

const ImgContainer = styled.a`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 515px;
  max-height: 515px;
`;

const Author = styled.div`
  width: 100%;
`;

const TextLink = styled.a`
  text-decoration: underline;
`;

export default function Keybindings({ className, tag }) {
    const darkMode = useSelector(getDarkMode);
    const [show, setShow] = useState(false);
    const src = {
        "false": "resources/hotkeys.png",
        "true": "resources/hotkeys-icons.png"
    };

    const handleChange = (e) => {
        setShow(e.target.checked);
    };

    return (
        <>
            <KeybindContainer className={className} id={tag.href}>
                <TowerText variant="h2">
                    Keybindings
                </TowerText>
                <Description variant="h6" font={true}>
                    Below is a useful visual representation of the default in-game keybindings.
                    Toggle the slider below to switch between keyboard keys and icons. Click on the image to view the full image.
                </Description>
                <SliderContainer data-dm={darkMode}>
                    <Label
                        control={<Slider
                            checked={show}
                            onChange={handleChange}
                            data-dm={darkMode}
                        />}
                        label="Replace keys with icons"
                    />
                </SliderContainer>

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
