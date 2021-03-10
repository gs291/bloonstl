import Link from "next/link";
import styled from "@emotion/styled";

import {background} from "../../lib/site-colors.json";
import { nav } from "../../lib/site-sizes.json";

const HoverLink = styled.div`
  width: 100px;
  transition: 0.3s;
  text-align: center;
  
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${ background.hover.dark };
  }
`;

const A = styled.a`
  line-height: ${ nav.height };
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export default function NavLink({ id_key, path, text, closeDrawer }) {

    return (
        <HoverLink key={ id_key } onClick={closeDrawer}>
            <Link href={ path } >
                <A>{ text }</A>
            </Link>
        </HoverLink>
    );
}