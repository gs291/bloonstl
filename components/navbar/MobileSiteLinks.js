import MenuButton from "./MenuButton";
import styled from "@emotion/styled";

import NavLink from "./NavLink";
import {siteLinks} from "../../lib/utils";

const LeftNavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function MobileSiteLinks() {
    return (
        <>
            <LeftNavSection>
                <MenuButton />
                { <NavLink {...siteLinks.left.home} />}
            </LeftNavSection>
        </>
    );
}