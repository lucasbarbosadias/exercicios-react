import './App.css';
import Container from './components/Container'
import Table from './components/Table'
import TableHead from './components/Table/Head'
import TableBody from './components/Table/Body'
import Title from './components/Title'
import { PRODUCTS } from './mockup/product.js'
import Row from './components/Row'
import Column from './components/Column';
import ColumnHead from './components/Column/Head';
import Button from './components/Button'

const App = () => {

  return(
    <>
      <Container>
        <Title 
          className="title"
        >
          Invoice
        </Title>
        <Table className="table">
          <TableHead className="table__head">
            <Row className="table__title">
              <ColumnHead className="table__col--first">PRODUCT</ColumnHead>
              <ColumnHead className="table__col--center">UNIT</ColumnHead>
              <ColumnHead className="table__col--last">PRICE</ColumnHead>
            </Row>
          </TableHead>
          <TableBody>
            {PRODUCTS.map((product) => (
              <Row key={product.id}>
                <Column>{product.product}</Column>
                <Column className="table__col--center">{product.unit}</Column>
                <Column className="table__col--last">{product.price}</Column>
              </Row>
            ))}
          </TableBody>
        </Table>
        <div class="total">
          <span>Total</span>
          <span>$60.00</span>
        </div>
        <Button
          className="btn"
        >
          PAY NOW
        </Button>
      </Container>
    </>
  )
}

export default App;
