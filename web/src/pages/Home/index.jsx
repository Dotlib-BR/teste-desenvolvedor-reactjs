import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Content } from "../../components/Content";

import * as S from './styles'

export function Home() {
    return (
        <>
            <Header />
            <S.Container>
                <S.GridContainer>
                    <SideBar />
                    <Content />
                </S.GridContainer>
            </S.Container>
        </>
    )
};