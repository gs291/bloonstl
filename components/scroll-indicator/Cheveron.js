import {styled} from "@mui/material/styles";

import {rgbaHex} from "../../lib/utils/utils";
import {globalOptions} from "../../lib/utils/emotionStyled";


const AnimatedChevron = styled("div", globalOptions)`
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
    background: ${props => rgbaHex(props.theme.palette.primary.main, 0.75)};
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

/**
 * Chevron that animates down then disappears
 *
 * @param {Object} props Component props
 * @param {number} props.delay Number to delay the chevron
 */
export default function Chevron({delay}) {

    return (
        <>
            <AnimatedChevron data-d={delay} />
        </>
    );
}