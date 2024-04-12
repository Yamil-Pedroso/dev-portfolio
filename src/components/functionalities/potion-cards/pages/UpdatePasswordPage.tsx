import UpdatePassword from "../components/update-password/UpdatePassword"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

const UpdatePasswordPage = () => {
  return (
    <Container>
        <UpdatePassword />
    </Container>
  )
}

export default UpdatePasswordPage