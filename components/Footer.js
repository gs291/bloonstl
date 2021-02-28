import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 50px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <div>Footer</div>
        </FooterContainer>
    );
}