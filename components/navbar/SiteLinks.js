import Link from "next/link";
import styled from "@emotion/styled";

import siteLinks from "../../lib/sitelinks.json";

const Left = styled.div`
  left: 0;
`;

const Middle = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  right: 0;
`;

export default function SiteLinks({ mobile, login }) {
    return (
        <>
            { siteLinks.map( link => {
                if (link.loc === -1) {
                    return (
                        <Left key={ link.key }>
                            <Link href={ link.path }>
                                <a>{ link.text }</a>
                            </Link>
                        </Left>
                    );
                } else if (link.loc === 0) {
                    return (
                        <Middle key={ link.key }>
                            <Link href={ link.path }>
                                <a>{ link.text }</a>
                            </Link>
                        </Middle>
                    );
                }
                if (login) {
                    return (
                        <Right key={ link.key }>
                            <Link href={link.path}>
                                <a>{link.text}</a>
                            </Link>
                        </Right>
                    );
                }
            })}
        </>
    );
}