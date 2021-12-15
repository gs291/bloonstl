import Link from "next/link";
import styled from "@emotion/styled";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import TowerText from "../tower/TowerText";
import siteColors from "../../lib/utils/siteColors";
import {useSelector} from "react-redux";
import {getDarkMode} from "../../lib/redux/selectors";

const Toast = styled.div`
  width: 25.33rem;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 99;
  
  box-shadow: -5px 5px 5px 0 rgb(0 0 0 / 30%);
  border: 1px solid ${props => props["data-dm"] ? siteColors.accent.dark : siteColors.accent.light};
  background-color: ${props => props["data-dm"] ? siteColors.toast.dark : siteColors.toast.light};
  border-radius: 15px;
  transition-duration: 0.3s;
`;

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

const Body = styled.div`
  padding: 0.86rem 1.4rem;
  
  display: flex;
  flex-direction: row;
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

const ATag = styled.a`
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`;

export default function ConsentToast({}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Toast data-dm={darkMode}>
                <Header data-dm={darkMode}>
                    <Title>
                        <InfoIcon data-dm={darkMode}/>
                        <TitleText variant="h6">
                            Cookies
                        </TitleText>
                    </Title>
                    <CancelIcon data-dm={darkMode}/>
                </Header>
                <Body>
                    <TowerText variant="body1" font={true}>
                        We use cookies to enhance your user experience.
                        By continuing using this website,
                        you agree to the use of cookies · <Link href="/legal/cookie-policy" prefetch={false}><ATag>Learn more</ATag></Link>
                    </TowerText>
                </Body>
            </Toast>
        </>
    );
}