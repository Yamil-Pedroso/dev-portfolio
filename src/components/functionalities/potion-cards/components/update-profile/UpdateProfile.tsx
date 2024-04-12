import React, { useState } from 'react'
import { Container, HeaderTitle, InputWrapper, Input, FigureWrapper, Figure, UpdateBtnWrapper, UpdateBtn, CustomFileInput, UpdateProfileWrapper, UpdateProfileIcon } from './styles'
import { UseAuth } from '../../hook/AuthContext'

const UpdateProfile = () => {
    const { user } = UseAuth()
    const [avatarIcon, setAvatarIcon] = useState('')
    const [avatarPreview, setAvatarPreview] = useState(user.avatar)
   

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result as string)
                setAvatarIcon(reader.result as string)
            }
        }
        reader.readAsDataURL(e.target.files![0])
    }


  return (
    <Container>
       <UpdateProfileWrapper>
          <UpdateProfileIcon />
        </UpdateProfileWrapper>
        <HeaderTitle><span>Update</span> Profile</HeaderTitle>
        <form style={{}}>
            <InputWrapper>
              <Input type="text" placeholder="Name" />
            </InputWrapper>
            <InputWrapper>
                <Input type="email" placeholder="Email" />
            </InputWrapper>
            <FigureWrapper>
                <Figure src={avatarPreview} alt="Avatar Preview" />
                {avatarIcon && (
                    <CustomFileInput>
                        <img src={avatarIcon} alt="Avatar Icon" />
                    </CustomFileInput>
                )
                      }
            </FigureWrapper>
            <InputWrapper>
                <Input 
                  type="file" 
                  placeholder="Profile Picture" 
                  id="customFile"
                  accept="images/*"
                  onChange={onChange}
                />
            </InputWrapper>

            <UpdateBtnWrapper>
              <UpdateBtn type="submit">Update</UpdateBtn>
            </UpdateBtnWrapper>
        </form>
    </Container>
  )
}

export default UpdateProfile