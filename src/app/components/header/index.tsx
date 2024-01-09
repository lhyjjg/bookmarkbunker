import Link from "next/link";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/">
          <S.Logo />
        </Link>
        {/* 로그인 전 */}
        <S.LoginButton>LOGIN</S.LoginButton>
        {/* 로그인 후 */}
        <S.LoginAfter>
          <S.MyPageButton>
            <S.MyIcon />
            마이페이지
          </S.MyPageButton>
          <S.LogoutButton>LOGOUT</S.LogoutButton>
        </S.LoginAfter>
      </S.HeaderContainer>
    </S.Header>
  );
}
