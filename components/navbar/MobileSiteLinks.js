import MenuButton from "./MenuButton";
import styled from "@emotion/styled";

import NavLink from "./NavLink";
import {left} from "../../lib/site-links.json";

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
                { <NavLink {...left.home} />}
            </LeftNavSection>
        </>
    );
}