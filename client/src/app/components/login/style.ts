import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

export const LoginBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
  background-color: var(--color-main);
  padding: 24px 32px;
  position: relative;

  > a {
    text-decoration: none;
  }
`;

export const Header = styled.h1`
  color: white;
  margin-bottom: 24px;
  font-size: 44px;
`;

export const GoogleButton = styled.button`
  width: 280px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 2px solid white;
  border-radius: 10px;
  padding: 8px 0;
  margin-bottom: 12px;
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 48px;
`;

export const KaKaoButton = styled.button`
  width: 280px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  background-color: #fee500;
  border: 2px solid #fee500;
  border-radius: 10px;
  padding: 8px 0;
  margin-bottom: 24px;
`;

export const KaKaoIcon = styled(RiKakaoTalkFill)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 48px;
`;

export const CloseButton = styled(IoMdCloseCircle)`
  width: 24px;
  height: 24px;
  color: white;
  position: absolute;
  cursor: pointer;
  right: 24px;
  top: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
`;

export const InputBox = styled.input`
  width: 272px;
  border: 2px solid var(--color-main);
  border-radius: 10px;
  padding: 8px 4px;
  margin-bottom: 12px;
  outline: none;
  &::placeholder {
    font-weight: bold;
  }
  &:focus {
    border: 1px solid red;
  }
`;

export const PasswordView = styled(IoEyeSharp)`
  color: var(--color-main);
  width: 24px;
  height: 24px;
  position: absolute;
  right: 6px;
  top: 6px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 120px;
  padding: 8px 0;
  border: 2px solid var(--color-main);
  border-radius: 20px;
  font-weight: bold;
  background-color: white;
  color: black;
  cursor: pointer;
`;
