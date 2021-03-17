import styled from "@emotion/styled";

import Abilities from "../ability/Abilities";

const MonkeyDetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export default function MonkeyDetailed({ className, monkey, rank }) {

    return (
        <MonkeyDetailedContainer className={className}>
            <Abilities abilities={ monkey.abilities } monkeyFile={ monkey.filename } rank={ rank } ranks={ monkey.rank[rank] }/>
        </MonkeyDetailedContainer>
    );
};
