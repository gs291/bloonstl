import {useRef} from "react";

import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import HomePage from "../components/index/HomePage";
import TopSection from "../components/index/TopSection";
import MainContainer from "../components/page/MainContainer";
import HorizontalAD from "../components/advertisment/HorizontalAD";

export default function Home({ monkeys }) {
    const tierSection = useRef(null);
    monkeys = JSON.parse(monkeys);
    
    return (
        <>
            <Header />
            <TopSection scrollTo={tierSection}/>
            <MainContainer>
                <HomePage scrollTo={tierSection} monkeys={monkeys}/>
            </MainContainer>
        </>
  );
}

export async function getStaticProps(context) {
    const monkeys = await dataSources().monkeysAPI.getAllMonkeysForIndexPage();

    return {
        props: {
            monkeys: JSON.stringify(monkeys)
        }
    }
}
