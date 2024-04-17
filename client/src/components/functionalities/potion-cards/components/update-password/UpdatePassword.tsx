import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { Container, HeaderTitle, InputWrapper, Input, UpdatePasswordBtnWrapper, UpdatePasswordBtn,PasswordIconWrapper, PasswordIcon } from './styles'
import { useAuth } from '../../hook'

const UpdatePassword = () => {
  const {user, updateUserPassword } = useAuth() as any

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const [formErrors, setFormErrors] = useState({
    oldPassword: false,
    newPassword: false
  })

  const handleFormData = async (e: any) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))

    const data = await updateUserPassword(formData)
    if (data.success) {
       
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
  }

  return (
    <Container>
      <PasswordIconWrapper>
        <PasswordIcon />
      </PasswordIconWrapper>
      <HeaderTitle><span>Update</span> Password</HeaderTitle>
      <form>
        <InputWrapper>
           <Input type="text" 
            placeholder="Current Password" 
            name="oldPassword" 
            value={formData.oldPassword} 
            onChange={handleFormData}
           />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" 
            placeholder="New Password" 
            name="newPassword" 
            value={formData.newPassword} 
            onChange={handleFormData}
          />
        </InputWrapper>
        <UpdatePasswordBtnWrapper>
          <UpdatePasswordBtn type="submit">Update Password</UpdatePasswordBtn>
        </UpdatePasswordBtnWrapper>
      </form>

      <Toaster 
        position="top-center"
      />
    </Container>
  )
}

export default UpdatePassword