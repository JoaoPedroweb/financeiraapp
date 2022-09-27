import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable/index";
import { Container } from "./styles";

export function Dashboard () {
    return(
      
     <Container>
     
      <Summary />
      <TransactionsTable />

     </Container>
      

    )
}