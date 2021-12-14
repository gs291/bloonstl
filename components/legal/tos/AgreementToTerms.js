import {ToSText, ToSTitle} from "./TermsOfService";

export default function AgreementToTerms({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h3">
                {tag.title}
            </ToSTitle>
            <ToSText  variant="h6" font={true}>
                These Terms of Service constitute a legally binding agreement made between you,
                whether personally or on behalf of an entity (“you”) and bloonstl (“we," “us," or “our”),
                concerning your access to and use of the https://bloonstl.netlify.app/ website as well as any other media form,
                media channel, mobile website or mobile application related, linked, or otherwise connected thereto
                (collectively, the “Site”). You agree that by accessing the Site, you have read,
                understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT
                AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY
                PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </ToSText>
            <ToSText variant="h6" font={true}>
                Supplemental terms and conditions or documents that may be posted on the Site
                from time to time are hereby expressly incorporated herein by reference. We reserve
                the right, in our sole discretion, to make changes or modifications to these Terms of
                Use from time to time. We will alert you about any changes by updating the “Last
                updated” date of these Terms of Service, and you waive any right to receive specific
                notice of each such change. Please ensure that you check the applicable Terms
                every time you use our Site so that you understand which Terms apply. You will be
                subject to, and will be deemed to have been made aware of and to have accepted,
                the changes in any revised Terms of Service by your continued use of the Site after the
                date such revised Terms of Service are posted.
            </ToSText>
            <ToSText variant="h6" font={true}>
                The information provided on the Site is not intended for distribution to or use by any
                person or entity in any jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any registration
                requirement within such jurisdiction or country. Accordingly, those persons who
                choose to access the Site from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the extent local laws are
                applicable.
            </ToSText>
            <ToSText variant="h6" font={true}>
                The Site is not tailored to comply with industry-specific regulations (Health Insurance
                Portability and Accountability Act (HIPAA), Federal Information Security Management
                Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may
                not use this Site. You may not use the Site in a way that would violate the GrammLeach-Bliley Act (GLBA).
            </ToSText>
            <ToSText variant="h6" font={true}>
                All users who are minors in the jurisdiction in which they reside (generally under the
                age of 18) must have the permission of, and be directly supervised by, their parent or
                guardian to use the Site. If you are a minor, you must have your parent or guardian
                read and agree to these Terms of Service prior to you using the Site.
            </ToSText>
        </>
    );
}