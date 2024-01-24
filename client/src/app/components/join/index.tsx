"use client";

import { useState } from "react";
import * as S from "./styled";
import axios from "axios";

interface ShowProps {
  showJoinModal: () => void;
}

export default function Join({ showJoinModal }: ShowProps) {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [checkShowPassword, setCheckShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const passwordShow = (e: React.MouseEvent<HTMLElement>) => {
    setShowPassword(!showPassword);
  };

  const checkPasswordShow = (e: React.MouseEvent<HTMLElement>) => {
    setCheckShowPassword(!checkShowPassword);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    name.length < 3 ? setNameError(true) : setNameError(false);
    !email.includes("@") ? setEmailError(true) : setEmailError(false);
    password.length < 6 ? setPasswordError(true) : setPasswordError(false);

    const data = {
      username: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/local/register`,
        data
      );
      if (response.status === 200) {
        alert("회원가입을 축하합니다. \n 함께하게되어 영광이에요!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          `회원가입에 실패했어요.\n관리자에게 문의하세요. \n에러코드 : ${
            error.response && error.response.status
          }`
        );
      }
    }
  };

  return (
    <S.JoinBackground onClick={showJoinModal}>
      <S.JoinContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={showJoinModal} />
        <S.Header>JOIN</S.Header>
        <S.Explanation>
          회원가입 페이지에요
          <br />
          소셜 로그인으로 간편 로그인도 할 수 있어요!
        </S.Explanation>
        <S.Form onSubmit={onSubmit}>
          <label>
            <S.InputBox
              type="text"
              name="name"
              id="username"
              placeholder="닉네임을 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="패스워드를 입력해주세요."
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.PasswordView onClick={passwordShow} />
          </S.Label>
          <S.Label>
            <S.InputBox
              type={checkShowPassword ? "text" : "password"}
              name="password"
              placeholder="패스워드를 확인합니다."
              autoComplete="off"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <S.PasswordView onClick={checkPasswordShow} />
          </S.Label>
          {nameError && <S.ErrorMSG>닉네임은 3자 이상이어야해요.</S.ErrorMSG>}
          {emailError && <S.ErrorMSG>이메일 형식을 확인해주세요.</S.ErrorMSG>}
          {passwordError && (
            <S.ErrorMSG>비밀번호는 6자 이상이어야해요.</S.ErrorMSG>
          )}
          <S.JoinButton type="submit">회원가입</S.JoinButton>
        </S.Form>
      </S.JoinContainer>
    </S.JoinBackground>
  );
}
