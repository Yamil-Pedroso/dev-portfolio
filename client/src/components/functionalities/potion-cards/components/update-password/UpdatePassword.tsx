import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { Container, HeaderTitle, InputWrapper, Input, UpdatePasswordBtnWrapper, UpdatePasswordBtn,PasswordIconWrapper, PasswordIcon } from './styles'
import { useAuth } from '../../hook'

const UpdatePassword = () => {
  const {user, updateUserPassword } = useAuth() as any

  const [formData, setFormData] = useState({
   currentPassword: '',
    newPassword: ''
  })

  const [formErrors, setFormErrors] = useState({
    currentPassword: false,
    newPassword: false
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await updateUserPassword(formData);
    if (data.success) {
      toast.success(data.message);
      toast.success('Password updated successfully');
    } else {
      toast.error(data.message);
      toast.error("Error updating password");
    }

    setFormData({
      currentPassword: '',
      newPassword: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  return (
    <Container>
      <PasswordIconWrapper>
        <PasswordIcon />
      </PasswordIconWrapper>
      <HeaderTitle><span>Update</span> Password</HeaderTitle>
      <form
        onSubmit={handleSubmit}
      >
        <InputWrapper>
           <Input type="password" 
            placeholder="Current Password" 
            name="currentPassword" 
            value={formData.currentPassword}
            onChange={handleInputChange}
           />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" 
            placeholder="New Password" 
            name="newPassword" 
            value={formData.newPassword} 
            onChange={handleInputChange}
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