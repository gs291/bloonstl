import CountUp from "react-countup";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {goldCost} from "../../lib/utils/utils";
import {getDifficulty} from "../../lib/redux/selectors";
import {globalOptions} from "../../lib/utils/emotionStyled";

const StyledCountUp = styled(CountUp, globalOptions)`
  
`;

export default function Counter({cost, gold = true, ...rest}){
    const difficulty = useSelector(getDifficulty);
    const [prevCost, setPrevCost] = useState(cost);
    const [currCost, setCurrCost] = useState(gold ? goldCost(cost) : cost);

    useEffect(() => {
        setPrevCost(currCost);
        setCurrCost(gold ? goldCost(cost, difficulty) : cost);
    }, [difficulty, cost]);

    return (
      <>
          <StyledCountUp
              start={prevCost}
              end={currCost}
              duration={0.75}
              separator=" "
              {...rest}
          />
      </>
    );
}