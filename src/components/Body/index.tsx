
import { Header } from "../Header"

import { Container, Grid } from "./styles"

const Body = ({page, componentPage}:{page:string, componentPage:any}) => {
    return (
        <Container>
            <Grid>
              <Header title={page} />
              {componentPage}
            </Grid>
        </Container>
    )
}

export default Body