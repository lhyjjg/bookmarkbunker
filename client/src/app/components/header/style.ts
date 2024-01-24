import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
import HeaderLogo from "@/assets/logos/headerLogo.svg";

export const Header = styled.header`
  padding: 16px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled(HeaderLogo)`
  width: 120px;
  height: 30px;
`;

export const HeaderContents = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const LoginButton = styled.button`
  border: none;
  background-color: var(--color-main);
  border: 2px solid var(--color-main);
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 12px;
  width: 80px;
`;

export const JoinButton = styled.button`
  border: none;
  background-color: var(--color-main);
  border: 2px solid var(--color-main);
  color: white;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  font-size: 12px;
  width: 80px;
`;

export const MyPageButton = styled.button`
  border: none;
  background-color: var(--color-main);
  border: 2px solid var(--color-main);
  color: white;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const MyIcon = styled(IoPerson)`
  margin-right: 4px;
`;

export const LogoutButton = styled.button`
  background-color: white;
  border: 2px solid var(--color-main);
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  font-size: 12px;
  color: black;
`;
