import MenuButton from "./MenuButton";
import {left} from "../../lib/sitelinks.json";
import { NavLink } from "./SiteLinks"
import styled from "@emotion/styled";

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