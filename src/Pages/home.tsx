import Body from "../components/Body"
import {SideBar} from "../components/SideBar"
import { Container } from "./styles"

export const Home = ({page, componentPage}:{page:string, componentPage:any}) => {
    return (
        <Container>
         <SideBar />
         <Body page={page} componentPage={componentPage}/>
        </Container>
    )
}