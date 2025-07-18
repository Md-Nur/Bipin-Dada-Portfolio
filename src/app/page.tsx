"use client";
import { useState } from "react";
import { account, ID } from "@/lib/appwrite";
import Hero from "@/components/Home/Hero/Hero";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<
    null | import("appwrite").Models.User<import("appwrite").Models.Preferences>
  >(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return <Hero />;
};

export default LoginPage;
