import {useRef} from "react";

import {dataSources} from "../lib/mysql/db";
import Header from "../components/page/Header";
import HomePage from "../components/index/HomePage";
import MainContainer from "../components/page/MainContainer";
import TopSection from "../components/index/TopSection";

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
