import styled from "@emotion/styled";

import TowerText from "../tower/TowerText";
import DonateLink from "./DonateLink";


const DonationText = styled(TowerText)`
  text-align: center;
  margin-bottom: 20px;
`;

const DonationDescription = styled(DonationText)`
  margin-bottom: 50px;
`;

const DonationLinks = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Donation Page
 */
export default function DonatePage() {

    return (
        <>
            <DonationText variant="h4" font={true}>
                Consider donating to help keep this website running!
            </DonationText>
            <DonationDescription variant="h6" font={true}>
                The services it will help: Netlify hosting, GraphQL API requests, Cloudinary image processing and running a remote MySQL database
            </DonationDescription>
            <DonationLinks>
                <DonateLink
                    href="https://www.paypal.com/paypalme/sanchegr"
                    title="PAYPAL"
                    text="@sanchegr"
                />
                <DonateLink
                    href="https://venmo.com/u/gs291"
                    title="VENMO"
                    text="@gs291"
                />
                <DonateLink
                    href="https://cash.app/$gs291"
                    title="CASH APP"
                    text="$gs291"
                />

            </DonationLinks>
        </>
    );
}