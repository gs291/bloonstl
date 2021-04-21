import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import {hexToRgb} from "../../lib/utils/utils";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const AnimatedChevron = styled.div`
  position: absolute;
  width: 28px;
  height: 5px;
  opacity: 0;
  bottom: 50px;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 8s ease-out infinite;
  animation-delay: -${props => props["data-d"]}s;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: rgba(${props => hexToRgb(props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light)}, 0.75);
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes move {
    25% {
      opacity: 1;

    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
`;

export default function Chevron({delay}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <AnimatedChevron data-d={delay} data-dm={darkMode}/>
        </>
    );
}