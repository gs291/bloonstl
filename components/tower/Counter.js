import CountUp from "react-countup";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {goldCost} from "../../lib/utils/utils";
import {getDifficulty} from "../../lib/redux/selectors";

export default function Counter({cost}){
    const difficulty = useSelector(getDifficulty);
    const [prevCost, setPrevCost] = useState(cost);
    const [currCost, setCurrCost] = useState(goldCost(cost));

    useEffect(() => {
        setPrevCost(currCost);
        setCurrCost(goldCost(cost, difficulty));
    }, [difficulty, cost]);

    return (
      <>
          <CountUp
              start={prevCost}
              end={currCost}
              duration={0.75}
              separator=" "
          />
      </>
    );
}