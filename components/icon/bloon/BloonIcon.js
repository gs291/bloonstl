import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import BloonIconAnimator from "./BloonIconAnimator";
import {getDarkMode} from "../../../lib/redux/selectors";
import {globalOptions} from "../../../lib/utils/emotionStyled";


const Svg = styled("svg")`
  padding: 5px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const OuterPath = styled("path", globalOptions)`
  opacity: 0.07;
  fill: currentColor;
  color: ${props => props.theme.palette.text.primary};
`;

const FollowPath = styled("path")`
  opacity: 0;
`;

const InnerPath = styled("path", globalOptions)`
  fill: currentColor;
  color: ${props => props.theme.palette.background.default}
`;

/**
 * Bloon SVG Icon used in the home page background
 *
 * @param {Object} props Component props
 * @param {string} [props.className] class to apply to the component
 */
export default function BloonIcon({className}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Svg className={className} id="bloon-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0, -5, 400,500">
                <OuterPath d="M154.190 5.224 C 80.884 19.126,34.059 68.391,11.776 155.056 C 10.081 161.648,8.531 169.401,8.330 172.285 C 8.130 175.169,7.086 185.455,6.010 195.143 C -0.377 252.645,25.368 325.764,72.192 383.108 L 81.030 393.932 74.369 400.337 C 57.729 416.338,62.835 438.968,89.042 465.358 C 122.445 498.995,153.612 493.264,167.785 450.879 C 171.910 438.545,170.108 439.822,191.818 433.847 C 291.606 406.386,353.981 352.100,381.366 268.878 C 421.766 146.106,382.082 54.355,272.827 17.929 C 233.888 4.946,183.887 -0.408,154.190 5.224 " />
                <FollowPath id="bloon-icon-path" d="M 216.724 10.094 C 371.613 30.398 428.021 141.54 366.567 291.144 C 362.039 302.166 354.478 313.617 354.737 313.856 C 356.013 315.039 339.233 338.287 327.032 351.091 C 291.181 388.711 242.877 414.706 181.071 430.237 L 165.251 434.539 L 161.872 446.252 C 150.847 484.478 123.111 490.519 95.621 462.923 C 64.666 431.849 60.586 406.069 93.632 399.816 C 95.642 399.437 94.886 399.589 88.922 393.347 C 43.663 345.976 14.168 279.744 12.01 235.335 C 11.702 229.011 11.686 222.021 11.18 218.215 C 10.096 210.057 13.128 182.853 16.538 166.344 C 39.717 54.121 126.57 -8.455 216.724 10.094" />
                <InnerPath d="M 214.867 17.245 C 366.217 37.085 426.838 157.594 355.572 296.952 C 351.057 305.781 347.569 313.197 347.822 313.431 C 349.069 314.587 333.307 334.764 321.385 347.275 C 286.353 384.036 238.518 410.072 178.124 425.248 L 161.395 429.452 L 158.093 440.897 C 147.32 478.25 125.932 484.153 99.07 457.187 C 68.823 426.823 69.915 407.347 102.206 401.237 C 104.17 400.866 102.161 397.84 93.794 388.566 C 50.906 341.036 20.748 280.098 18.639 236.704 C 18.338 230.524 17.688 222.425 17.194 218.706 C 16.135 210.734 18.462 186.056 21.794 169.924 C 44.444 60.266 115.345 4.199 214.867 17.245" />
                <BloonIconAnimator />
            </Svg>
        </>
    );
}