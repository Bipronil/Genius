"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d7e07ef8-c507-4e0b-a734-9cc408a0954b");
  }, []);

  return null;
};