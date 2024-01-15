import * as S from "./style";

export default function Login() {
  return (
    <S.LoginBackground>
      <S.LoginContainer>
        <S.CloseButton />
        <S.Header>LOGIN</S.Header>
        <S.GoogleButton>
          <S.GoogleIcon />
          구글 로그인
        </S.GoogleButton>
        <S.KaKaoButton>
          <S.KaKaoIcon />
          카카오 로그인
        </S.KaKaoButton>
        <label>
          <S.InputBox
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요."
          />
        </label>
        <S.Label>
          <S.InputBox
            type="password"
            name="password"
            placeholder="패스워드를 입력해주세요."
          />
          <S.PasswordView />
        </S.Label>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginContainer>
    </S.LoginBackground>
  );
}
