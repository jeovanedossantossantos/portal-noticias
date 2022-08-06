import React from "react";
import { Container, Logo,  Wrapper } from "./style";


export const Header: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>Portal de Noticias</Logo>
                {/* <Menu>
                    <Link>Home</Link>
                    <Link>Sobre</Link>

                </Menu> */}
            </Wrapper>
        </Container>
    )
}