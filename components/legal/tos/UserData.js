import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function UserData({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                We will maintain certain data that you transmit to the Site for the purpose of
                managing the performance of the Site, as well as data relating to your use of the Site.
                Although we perform regular routine backups of data, you are solely responsible for
                all data that you transmit or that relates to any activity you have undertaken using the
                Site. You agree that we shall have no liability to you for any loss or corruption of any
                such data, and you hereby waive any right of action against us arising from any such
                loss or corruption of such data.
            </LegalText>
            <LegalText variant="body1" font={true}>
                Please be advised the Site is hosted in the United States. If you access the Site from
                any other region of the world with laws or other requirements governing personal
                data collection, use, or disclosure that differ from applicable laws in the United
                States, then through your continued use of the Site, you are transferring your data to
                the United States, and you agree to have your data transferred to and processed in
                the United States.
            </LegalText>
        </>
    );
}