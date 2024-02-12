"use client";

import axios from "axios";
import * as S from "./style";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ShowProps {
  showLoginModal: () => void;
}

export default function Login({ showLoginModal }: ShowProps) {
  const backendUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      identifier: email,
      password: password,
    };

    try {
      const response = await axios.post(`${backendUrl}/api/auth/local`, data);
      if (response.status === 200) {
        showLoginModal();
        alert("로그인에 성공했어요");
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert("로그인에 실패했어요.\n정보를 확인해주세요.");
        console.log(data);
      }
    }
  };

  const GoogleLoginButton = () => {
    return (
      <a href={`${backendUrl}/api/connect/google`}>
        <S.GoogleButton>
          <S.GoogleIcon />
          구글 로그인
        </S.GoogleButton>
      </a>
    );
  };

  return (
    <S.LoginBackground onClick={showLoginModal}>
      <S.LoginContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={showLoginModal} />
        <S.Header>LOGIN</S.Header>
        {/* <S.GoogleButton>
          <S.GoogleIcon />
          구글 로그인
        </S.GoogleButton> */}
        <GoogleLoginButton />
        <S.KaKaoButton>
          <S.KaKaoIcon />
          카카오 로그인
        </S.KaKaoButton>
        <S.Form onSubmit={onSubmit}>
          <label>
            <S.InputBox
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <S.Label>
            <S.InputBox
              type="password"
              name="password"
              placeholder="패스워드를 입력해주세요."
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.PasswordView />
          </S.Label>
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
      </S.LoginContainer>
    </S.LoginBackground>
  );
}
