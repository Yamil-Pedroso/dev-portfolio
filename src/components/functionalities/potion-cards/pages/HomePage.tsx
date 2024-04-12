import styled from 'styled-components'
import Cards from '../components/cards/Cards'

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  return (
    <Container>
        <Cards />
    </Container>
  )
}

export default HomePage