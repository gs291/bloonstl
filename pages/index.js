import {useRef} from "react";

import Header from "../components/page/Header";
import HomePage from "../components/index/HomePage";
import MainContainer from "../components/page/MainContainer";
import TopSection from "../components/index/TopSection";

export default function Home() {
    const tierSection = useRef(null);

    return (
        <>
            <Header />
            <TopSection scrollTo={tierSection}/>
            <MainContainer>
                <HomePage scrollTo={tierSection}/>
            </MainContainer>
        </>
  );
}
