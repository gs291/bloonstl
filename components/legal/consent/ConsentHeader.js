import styled from "@emotion/styled";
import Cookies from "universal-cookie";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import TowerText from "../../tower/TowerText";
import {globalOptions} from "../../../lib/utils/emotionStyled";
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from "../../../lib/utils/ga4";


const Header = styled("div", globalOptions)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0.86rem 1.4rem;
  background-color: ${props => props["data-e"] ? props.theme.palette.toast.error.header : props.theme.palette.toast.header};

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Title = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(TowerText)`
  margin-left: 10px;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  color: ${props => props.theme.palette.text.primary};
`;

const CancelIcon = styled(CancelOutlinedIcon)`
  transition: 0.3s;
  color: ${props => props.theme.palette.text.primary};
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;


const GA4_COOKIE_CONSENT_ID = "COOKIE_CONSENT";

/**
 * Consent toast header component
 *
 * @param {Object} props Component props
 * @param {boolean} props.error Shows if there was an error with accepting the cookie toast
 * @param {function} props.checkConsent Function to check if the cookie consent was set properly
 */
export default function ConsentHeader({checkConsent, error}) {

    const acceptConsent = () => {
        const cookies = new Cookies();
        const current = new Date();
        const nextYear = new Date();

        nextYear.setFullYear(current.getFullYear() + 1);

        try {
            cookies.set("cookie_consent", "accepted", { path: '/', expires: nextYear });
        } catch (e) {
            console.error("Unable to set consent cookie:", e);
        }

        const clicked = true;
        checkConsent(clicked);

        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_COOKIE_CONSENT_ID}`})
    };

    return (
        <>
            <Header data-e={error}>
                <Title>
                    <InfoIcon />
                    <TitleText variant="h6">
                        Cookies
                    </TitleText>
                </Title>
                <CancelIcon onClick={acceptConsent}/>
            </Header>
        </>
    );
}