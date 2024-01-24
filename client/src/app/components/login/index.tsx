"use client";

import { useState } from "react";
import * as S from "./style";

interface ShowProps {
  showLoginModal: () => void;
}

export default function Login({ showLoginModal }: ShowProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <S.LoginBackground onClick={showLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={showLoginModal} />
        <S.Header>LOGIN</S.Header>
        <S.GoogleButton>
          <S.GoogleIcon />
          구글 로그인
        </S.GoogleButton>
        <S.KaKaoButton>
          <S.KaKaoIcon />
          카카오 로그인
        </S.KaKaoButton>
        <S.Form
          method="post"
          action={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/local`}
        >
          <label>
            <S.InputBox
              type="text"
              name="email"
              id="identifier"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <S.Label>
            <S.InputBox
              type="password"
              name="password"
              id="password"
              placeholder="패스워드를 입력해주세요."
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.PasswordView />
          </S.Label>
          <S.LoginButton>로그인</S.LoginButton>
        </S.Form>
      </S.LoginContainer>
    </S.LoginBackground>
  );
}
