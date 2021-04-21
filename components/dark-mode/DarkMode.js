import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";

import {hexToRgb} from "../../lib/utils/utils";
import siteSizes from "../../lib/utils/siteSizes";
import siteColors from "../../lib/utils/siteColors";
import {toggleDarkMode} from "../../lib/redux/actions";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const Switch = styled.input`
  --size: 2rem;

  appearance: none;
  cursor: pointer;
  outline: none;

  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: ${siteColors.text.dark};

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

const DarkModeContainer = styled.div`
  height: ${props => props["data-m"] ? siteSizes.nav.height : siteSizes.nav.link.height};
  width: ${props => props["data-m"] ? "100%" : "75px"};
  border-radius: ${props => props["data-m"] ? 0 : 50}%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  
  &:hover {
    cursor: pointer;
    background-color: rgba(${props => props["data-dm"] ? hexToRgb(siteColors.accent.dark) : hexToRgb(siteColors.accent.light)}, 0.25);
  }
`;

export default function DarkMode({}){
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const changeDarkMode = () => dispatch(toggleDarkMode());

    return (
        <>
            <DarkModeContainer
                onClick={changeDarkMode}
                data-dm={darkMode}
                data-m={mobile}
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