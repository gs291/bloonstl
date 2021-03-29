import {useState} from "react";
import {useSelector} from "react-redux";
import {Divider} from "@material-ui/core";

import styled from "@emotion/styled";
import HeroDetailed from "./HeroDetailed";
import HeroContainer from "./HeroContainer";
import {getMobile} from "../../lib/redux/selectors";
import FilterDifficulty from "../filters/FilterDifficulty";

const MediumDivider = styled(Divider)`
  width: 80%;
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function HeroPage({ hero }) {
    const mobile = useSelector(getMobile);
    const [ difficulty, setDifficulty ] = useState("medium");

    const handleDifficulty = (event) => setDifficulty(event.target.value);


    return (
        <>
            <HeroContainer hero={hero} difficulty={difficulty} />
            <MediumDivider/>
            <FilterDifficulty difficulty={difficulty} handleDifficulty={ handleDifficulty }/>
            <MediumDivider/>
            <HeroDetailed hero={hero} />
        </>
    );
}

