import Join from "../join";
import Link from "next/link";
import * as S from "./style";
import Login from "../login";
import { useState } from "react";

export default function Header() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showJoin, setShowJoin] = useState<boolean>(false);

  const showLoginModal = () => {
    setShowLogin(!showLogin);
  };

  const showJoinModal = () => {
    setShowJoin(!showJoin);
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/">
          <S.Logo />
        </Link>
        {/* 로그인 전 */}
        <S.HeaderContents>
          <S.LoginButton onClick={showLoginModal}>LOGIN</S.LoginButton>
          <S.JoinButton onClick={showJoinModal}>JOIN</S.JoinButton>
        </S.HeaderContents>
        {/* 로그인 후 */}
        {/* <S.HeaderContents>
          <S.MyPageButton>
            <S.MyIcon />
            마이페이지
          </S.MyPageButton>
          <S.LogoutButton>LOGOUT</S.LogoutButton>
        </S.HeaderContents> */}
      </S.HeaderContainer>
      {showLogin && <Login showLoginModal={showLoginModal} />}
      {showJoin && <Join showJoinModal={showJoinModal} />}
    </S.Header>
  );
}
