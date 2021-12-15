import styled from "@emotion/styled";
import Cookies from "universal-cookie";
import {useSelector} from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import TowerText from "../../tower/TowerText";
import siteColors from "../../../lib/utils/siteColors";
import {getDarkMode} from "../../../lib/redux/selectors";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0.86rem 1.4rem;
  background-color: ${props => props["data-dm"] ? siteColors.toast.header.dark : siteColors.toast.header.light};

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition-duration: 0.3s;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(TowerText)`
  margin-left: 10px;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const CancelIcon = styled(CancelOutlinedIcon)`
  transition: 0.3s;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;


export default function ConsentHeader({setShow, checkConsent}) {
    const darkMode = useSelector(getDarkMode);

    const acceptConsent = () => {
        const cookies = new Cookies();
        const current = new Date();
        const nextYear = new Date();

        nextYear.setFullYear(current.getFullYear() + 1);

        try {
            cookies.set("eu_cookie_consent", "accepted", { path: '/', expires: nextYear });
        } catch (e) {
            console.log(e);
        }

        checkConsent();
    };

    return (
        <>
            <Header data-dm={darkMode}>
                <Title>
                    <InfoIcon data-dm={darkMode}/>
                    <TitleText variant="h6">
                        Cookies
                    </TitleText>
                </Title>
                <CancelIcon data-dm={darkMode} onClick={acceptConsent}/>
            </Header>
        </>
    );
}