import LegalText from "../LegalText";
import LegalTitle from "../LegalTitle";

export default function TargetedAdvertising({tag}) {

    return (
        <>
            <LegalTitle id={tag.href} variant="h3">
                {tag.title}
            </LegalTitle>
            <LegalText variant="body1" font={true}>
                Third parties may serve cookies on your computer or mobile device to serve
                advertising through our Websites. These companies may use information about your
                visits to this and other websites in order to provide relevant advertisements about
                goods and services that you may be interested in. They may also employ technology
                that is used to measure the effectiveness of advertisements. This can be
                accomplished by them using cookies or web beacons to collect information about
                your visits to this and other sites in order to provide relevant advertisements about
                goods and services of potential interest to you. The information collected through this
                process does not enable us or them to identify your name, contact details or other
                details that directly identify you unless you choose to provide these.
            </LegalText>
        </>
    );
}