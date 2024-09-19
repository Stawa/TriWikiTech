"use client";

import React from "react";
import ComingSoonScreen from "@default/components/upcoming";
import { IoLogInOutline } from "react-icons/io5";

const LoginPage = () => {
  return (
    <ComingSoonScreen
      title="Login"
      description="We are working on the login page and it will be available in the future."
      icon={IoLogInOutline}
    />
  );
};

export default LoginPage;
