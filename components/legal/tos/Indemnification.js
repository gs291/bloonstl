import {ToSText, ToSTitle} from "./TermsOfService";

export default function Indemnification({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText variant="body1" font={true}>
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
                affiliates, and all of our respective officers, agents, partners, and employees, from
                and against any loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or arising out of: (1)
                use of the Site; (2) breach of these Terms of Service; (3) any breach of your
                representations and warranties set forth in these Terms of Service; (4) your violation of
                the rights of a third party, including but not limited to intellectual property rights; or (5)
                any overt harmful act toward any other user of the Site with whom you connected via
                the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to
                assume the exclusive defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate, at your expense, with our defense of such
                claims. We will use reasonable efforts to notify you of any such claim, action, or
                proceeding which is subject to this indemnification upon becoming aware of it.
            </ToSText>
        </>
    );
}