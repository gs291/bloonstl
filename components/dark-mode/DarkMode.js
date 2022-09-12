import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";

import {rgbaHex} from "../../lib/utils/utils";
import siteSizes from "../../lib/utils/siteSizes";
import {toggleDarkMode} from "../../lib/redux/actions";
import {globalOptions} from "../../lib/utils/emotionStyled";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";
import {BUTTON_PREFIX, ga4SendSelectContent, SELECT_CONTENT_BUTTON} from "../../lib/utils/ga4";


const Switch = styled("input")`
  --size: 2rem;

  appearance: none;
  cursor: pointer;
  outline: none;

  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: ${props => props.theme.palette.text.primary};

  transition: all 500ms;


  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);

    transform: scale(0.75);
    color: hsl(40, 100%, 50%);
    box-shadow:
            inset 0 0 0 var(--size),
            calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
            var(--offset-orthogonal) 0 0 var(--ray-size),
            0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
            0 var(--offset-orthogonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
            var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
            var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }
`;

const DarkModeContainer = styled("div", globalOptions)`
  height: ${props => props["data-m"] ? "100%" : siteSizes.icon.darkMode.height};
  width: ${props => props["data-m"] ? "100%" : siteSizes.icon.darkMode.height};
  border-radius: ${props => props["data-m"] ? 0 : 50}%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    background-color: ${props => rgbaHex(props.theme.palette.primary.main, 0.5)};
  }
`;


const GA4_DARK_MODE_ID = "DARK_MODE";

/**
 * Dark mode full component
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function DarkMode({className}){
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const changeDarkMode = () => {
        dispatch(toggleDarkMode());
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_DARK_MODE_ID}`});
    }

    return (
        <>
            <DarkModeContainer
                onClick={changeDarkMode}
                data-m={mobile}
                className={className}
            >
                <Switch
                    checked={!darkMode}
                    type="checkbox"
                    readOnly
                />
            </DarkModeContainer>
        </>
    );
}