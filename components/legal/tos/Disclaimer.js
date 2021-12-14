import {ToSText, ToSTitle} from "./TermsOfService";

export default function Disclaimer({tag}) {

    return (
        <>
            <ToSTitle id={tag.href} variant="h4">
                {tag.title}
            </ToSTitle>
            <ToSText variant="h6" font={true}>
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
                THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
                RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
                YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE
                SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE
                AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1)
                ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY
                UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR
                ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF
                TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN
                HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
                SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
                CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
                INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
                PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
                THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
                MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING,
                AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
                MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
                PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
                PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
                YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
                APPROPRIATE
            </ToSText>
        </>
    );
}