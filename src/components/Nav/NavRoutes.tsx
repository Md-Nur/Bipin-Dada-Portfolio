"use client";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import NavLink from "./NavLink";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const NavRoutes = () => {
  const { userAuth } = {
    userAuth: {
      id: "abc",
      name: "Bipin",
      isAdmin: false,
    },
  };

  interface Route {
    $id: string;
    name: string;
    route: string;
    isActive?: boolean;
  }

  const [routes, setRoutes] = useState<Route[]>();
  useEffect(() => {
    databases
      .listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_NAV_ID!,
        [Query.equal("isActive", true)]
      )
      .then((res: { documents: any[] }) => {
        setRoutes(res.documents);
      });
  }, []);

  return (
    <>
      {routes?.map((route: any) => (
        <NavLink key={route.$id} name={route.name} route={route.route} />
      ))}

      {userAuth?.isAdmin && (
        <NavDropdown
          name="Admin"
          routes={[
            { name: "User Approval", url: "/admin/user-approval" },
            { name: "Content Approval", url: "/admin/content-approval" },
          ]}
        />
      )}
    </>
  );
};

export default NavRoutes;
