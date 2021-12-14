import {ToSText, ToSTitle} from "./TermsOfService";

export default function UserData({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                We will maintain certain data that you transmit to the Site for the purpose of
                managing the performance of the Site, as well as data relating to your use of the Site.
                Although we perform regular routine backups of data, you are solely responsible for
                all data that you transmit or that relates to any activity you have undertaken using the
                Site. You agree that we shall have no liability to you for any loss or corruption of any
                such data, and you hereby waive any right of action against us arising from any such
                loss or corruption of such data.
            </ToSText>
        </>
    );
}