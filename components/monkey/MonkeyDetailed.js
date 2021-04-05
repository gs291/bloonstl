import styled from "@emotion/styled";

import MonkeyAbilities from "../abilities/MonkeyAbilities";

const MonkeyDetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export default function MonkeyDetailed({ className, monkey, rank }) {

    return (
        <MonkeyDetailedContainer className={className}>
            <MonkeyAbilities abilities={ monkey.abilities } monkeyFile={ monkey.filename } rank={ rank } ranks={ monkey.rank[rank] }/>
        </MonkeyDetailedContainer>
    );
};
