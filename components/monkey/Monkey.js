import styled from "@emotion/styled";
import MonkeyCard from "./Card";
import Icon from "./Icon";


export default function Monkey({ monkey, expanded, detailed  }) {
    return (
        <>
            <MonkeyCard monkey={ monkey } expanded={ expanded } detailed={ detailed }/>
        </>
    );
}