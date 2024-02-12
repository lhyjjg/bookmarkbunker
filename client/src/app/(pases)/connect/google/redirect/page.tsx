"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const backendUrl = process.env.NEXT_PUBLIC_BASE_URL;

const loginRedirect = () => {
  const [text, setText] = useState("Loading...");
  const router = useRouter();
  const params = useSearchParams();

  const getCallback = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/auth/google/callback?id_token=${params.get(
          "id_token"
        )}`
      );
      if (response.status === 200) {
        console.log("응답 정상");
        // document.cookie = `jwt=${response.jwt}`
        console.log(response);
        console.log(response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getCallback();
  }, [router, params]);

  return <p>{text}</p>;
};

export default loginRedirect;
