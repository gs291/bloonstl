import Link from "next/link";
import {styled} from "@mui/material/styles";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import TowerText from "../../tower/TowerText";


const Body = styled("div")`
  padding: 0.86rem 1.4rem;
  
  display: flex;
  flex-direction: column;
`;

const Error = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const ErrorText = styled(TowerText)`
  margin-left: 10px;
`;

const ATag = styled("a")`
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`;

const ErrorIcon = styled(ErrorOutlineIcon)`
  color: ${props => props.theme.palette.toast.error.alert};
`;

/**
 * Consent toast body component
 *
 * @param {Object} props Component props
 * @param {boolean} props.error Shows if there was an error with accepting the cookie toast
 */
export default function ConsentBody({error}) {

    return (
        <>
            <Body>
                {error && (
                    <Error>
                        <ErrorIcon fontSize="large" />
                        <ErrorText variant="h6" font={true}>
                            An error occurred trying to accept cookie usage!
                        </ErrorText>
                    </Error>
                )}
                <TowerText variant="body1" font={true}>
                    We use cookies to enhance your user experience.
                    By continuing using this website,
                    you agree to the use of cookies · <Link href="/legal/cookie-policy" prefetch={false} passHref><ATag>Learn more</ATag></Link>
                </TowerText>
            </Body>
        </>
    );
}