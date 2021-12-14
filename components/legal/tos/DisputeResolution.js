import {ToSText, ToSTitle} from "./TermsOfService";

export default function DisputeResolution({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSTitle variant="h5">
                Informal Negotiations
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                To expedite resolution and control the cost of any dispute, controversy, or claim
                related to these Terms of Service (each "Dispute" and collectively, the “Disputes”)
                brought by either you or us (individually, a “Party” and collectively, the “Parties”), the
                Parties agree to first attempt to negotiate any Dispute (except those Disputes
                expressly provided below) informally for at least thirty (30) days before initiating
                arbitration. Such informal negotiations commence upon written notice from one Party
                to the other Party.
            </ToSText>

            <ToSTitle variant="h5">
                Binding Arbitration
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                If the Parties are unable to resolve a Dispute through informal negotiations, the
                Dispute (except those Disputes expressly excluded below) will be finally and
                exclusively resolved through binding arbitration.
                YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT
                AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted
                under the Commercial Arbitration Rules of the American Arbitration Association
                ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer
                Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA
                website: www.adr.org. Your arbitration fees and your share of arbitrator compensation
                shall be governed by the AAA Consumer Rules and, where appropriate, limited by
                the AAA Consumer Rules. The arbitration may be conducted in person, through the
                submission of documents, by phone, or online. The arbitrator will make a decision in
                writing, but need not provide a statement of reasons unless requested by either
                Party. The arbitrator must follow applicable law, and any award may be challenged if
                the arbitrator fails to do so. Except where otherwise required by the applicable AAA
                rules or applicable law, the arbitration will take place in Multnomah, Oregon. Except
                as otherwise provided herein, the Parties may litigate in court to compel arbitration,
                stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment
                on the award entered by the arbitrator.
            </ToSText>
            <ToSText variant="h6" font={true}>
                If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall
                be commenced or prosecuted in the state and federal courts located in Multnomah,
                Oregon, and the Parties hereby consent to, and waive all defenses of lack of
                personal jurisdiction, and forum non conveniens with respect to venue and
                jurisdiction in such state and federal courts. Application of the United Nations
                Convention on Contracts for the International Sale of Goods and the Uniform
                Computer Information Transaction Act (UCITA) is excluded from these Terms of Service.
            </ToSText>
            <ToSText variant="h6" font={true}>
                In no event shall any Dispute brought by either Party related in any way to the Site be
                commenced more than one (1) years after the cause of action arose. If this provision
                is found to be illegal or unenforceable, then neither Party will elect to arbitrate any
                Dispute falling within that portion of this provision found to be illegal or
                unenforceable, and such Dispute shall be decided by a court of competent
                jurisdiction within the courts listed for jurisdiction above, and the Parties agree to
                submit to the personal jurisdiction of that court.
            </ToSText>

            <ToSTitle variant="h5">
                Restrictions
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                The Parties agree that any arbitration shall be limited to the Dispute between the
                Parties individually. To the full extent permitted by law, (a) no arbitration shall be
                joined with any other proceeding; (b) there is no right or authority for any Dispute to
                be arbitrated on a class-action basis or to utilize class action procedures; and (c)
                there is no right or authority for any Dispute to be brought in a purported
                representative capacity on behalf of the general public or any other persons.
            </ToSText>

            <ToSTitle variant="h5">
                Exceptions to Informal Negotiations and Arbitration
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                The Parties agree that the following Disputes are not subject to the above provisions
                concerning informal negotiations and binding arbitration: (a) any Disputes seeking to
                enforce or protect, or concerning the validity of, any of the intellectual property rights
                of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy,
                invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this
                provision is found to be illegal or unenforceable, then neither Party will elect to
                arbitrate any Dispute falling within that portion of this provision found to be illegal or
                unenforceable and such Dispute shall be decided by a court of competent jurisdiction
                within the courts listed for jurisdiction above, and the Parties agree to submit to the
                personal jurisdiction of that court.
            </ToSText>
        </>
    );
}