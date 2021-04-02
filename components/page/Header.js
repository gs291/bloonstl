import Head from "next/head";

export default function Header({ title }) {
    return (
        <>
            <Head>
                <title>{ title && `${title} - ` }Bloons</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}