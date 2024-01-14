import * as S from "./style";

export default function Login() {
  return (
    <S.LoginBackground>
      <S.LoginContainer>
        <S.Header>LOGIN</S.Header>
        <S.GoogleButton>
          <S.GoogleIcon />
          구글 로그인
        </S.GoogleButton>
        <S.KaKaoButton>
          <S.KaKaoIcon />
          카카오 로그인
        </S.KaKaoButton>
      </S.LoginContainer>
    </S.LoginBackground>
  );
}
