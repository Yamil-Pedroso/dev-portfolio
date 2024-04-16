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
  const [avatarIcon, setAvatarIcon] = useState("");
  const { user } = useAuth() as any;

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
      <form style={{}}>
        <InputWrapper>
          <Input type="text" placeholder="Name" />
        </InputWrapper>
        <InputWrapper>
          <Input type="email" placeholder="Email" />
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
          {user && (
            <div>
              <img src={user?.avatar} alt="profile" style={{
                borderRadius: "50%",
                width: "4rem",
                height: "4rem",
                objectFit: "cover",
                objectPosition: "center",
              }} />
            </div>
          )}
        </div>
        <InputWrapper>
          <Input
            type="file"
            placeholder="Profile Picture"
            id="customFile"
            accept="images/*"
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
