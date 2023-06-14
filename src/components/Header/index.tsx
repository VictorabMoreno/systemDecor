import { Container, Title } from "./styles"

export const Header = ({title}:{title:string}) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}