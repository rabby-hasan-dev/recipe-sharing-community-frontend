"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { protectedRoutes } from "@/src/constant";
import { useUser } from "@/src/context/cureentUser";
import { logOut } from "@/src/services/AuthService";

const NavbarDropdwon = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const router = useRouter();
  const path = usePathname();

  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };
  const handleLogout = () => {
    logOut();
    userLoading(true);
    if (protectedRoutes.some((route) => path.match(route))) {
      router.push("/");
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user?.profilePicture || undefined} />
      </DropdownTrigger>
      {user?.role == "user" ? (
        <>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onClick={() => handleNavigation("/user/profile/my-recipes")}
            >
              My Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/user/settings")}>
              Settings
            </DropdownItem>
            <DropdownItem
              className="text-danger"
              color="danger"
              onClick={handleLogout}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </>
      ) : (
        <>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              onClick={() =>
                handleNavigation("/user/profile/my-recipes")
                // handleNavigation("/admin/admin-profile/my-recipes")
              }
            >
              My Profile
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/dashboard")}>
              Dashboard
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/admin/settings")}>
              Settings
            </DropdownItem>
            <DropdownItem
              className="text-danger"
              color="danger"
              onClick={handleLogout}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </>
      )}
    </Dropdown>
  );
};

export default NavbarDropdwon;
