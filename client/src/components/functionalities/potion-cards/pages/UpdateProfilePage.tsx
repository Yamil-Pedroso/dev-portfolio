import UpdateProfile from "../components/update-profile/UpdateProfile"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`

const UpdateProfilePage = () => {
  return (
    <Container>
        <UpdateProfile />
    </Container>
  )
}

export default UpdateProfilePage