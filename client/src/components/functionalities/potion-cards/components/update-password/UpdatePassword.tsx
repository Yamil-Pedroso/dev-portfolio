import { Container, HeaderTitle, InputWrapper, Input, UpdatePasswordBtnWrapper, UpdatePasswordBtn,PasswordIconWrapper, PasswordIcon } from './styles'

const UpdatePassword = () => {
  return (
    <Container>
      <PasswordIconWrapper>
        <PasswordIcon />
      </PasswordIconWrapper>
      <HeaderTitle><span>Forgot</span> Password</HeaderTitle>
      <form>
        <InputWrapper>
           <Input type="text" placeholder="Old Password" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="New Password" />
        </InputWrapper>
        <UpdatePasswordBtnWrapper>
          <UpdatePasswordBtn type="submit">Update Password</UpdatePasswordBtn>
        </UpdatePasswordBtnWrapper>
      </form>
    </Container>
  )
}

export default UpdatePassword