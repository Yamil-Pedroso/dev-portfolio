import React, { useState } from "react";
import { useAuth } from "../../hook";
import {
  Container,
  HeaderTitle,
  InputWrapper,
  Input,
  FigureWrapper,
  Figure,
  UpdateBtnWrapper,
  UpdateBtn,
  CustomFileInput,
  UpdateProfileWrapper,
  UpdateProfileIcon,
} from "./styles";

const UpdateProfile = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    avatar: null,
  })
  const [formErrors, setFormErrors] = React.useState({
    name: false,
    email: false,
    avatar: false,
  })
  const { user, updateUser } = useAuth() as any;
  const [userAvatar, setUserAvatar] = useState(user?.avatar);

  const handleFormData = (e: any) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      formData.avatar = file; // Store the file for submitting

      const reader = new FileReader();
      reader.onloadend = () => {
        setUserAvatar(reader.result); // Update the local UI to show new avatar immediately
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const submitData = new FormData()
    if (formData.name) submitData.append('name', formData.name)
    if (formData.email) submitData.append('email', formData.email)
    if (formData.avatar) submitData.append('avatar', formData.avatar)

    const response = await updateUser(formData, user._id)
    if (response.success) {
      console.log('User updated')
      
    } else {
      console.log('Update failed')
    }
  }

  //const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //    const reader = new FileReader()
  //    reader.onload = () => {
  //        if (reader.readyState === 2) {
  //            setAvatarPreview(reader.result as string)
  //            setAvatarIcon(reader.result as string)
  //        }
  //    }
  //    reader.readAsDataURL(e.target.files![0])
  //}


  return (
    <Container>
      <UpdateProfileWrapper>
        <UpdateProfileIcon />
      </UpdateProfileWrapper>
      <HeaderTitle>
        <span>Update</span> Profile
      </HeaderTitle>
      <form 
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <InputWrapper>
          <Input type="text" 
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleFormData}
            className={formErrors.name ? 'error' : ''}
        />
        </InputWrapper>
        <InputWrapper>
          <Input type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleFormData}
            className={formErrors.email ? 'error' : ''}
           />
        </InputWrapper>
        <div
          style={{
            margin: "1rem auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #88419c",
          }}
        >
           <img src={userAvatar || user?.avatar} alt="profile" style={{
            borderRadius: "50%",
            width: "4rem",
            height: "4rem",
            objectFit: "cover",
            objectPosition: "center",
          }} />
        </div>
        <InputWrapper>
          <Input
            type="file"
            placeholder="Profile Picture"
            id="customFile"
            accept="images/*"
            name="avatar"
            onChange={handleFormData}
          />
        </InputWrapper>

        <UpdateBtnWrapper>
          <UpdateBtn type="submit">Update</UpdateBtn>
        </UpdateBtnWrapper>
      </form>
    </Container>
  );
};

export default UpdateProfile;
