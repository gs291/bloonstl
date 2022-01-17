import ReactGA from "react-ga4";

const MEASUREMENT_ID="G-ERWW6617M8";


export const initializeGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};