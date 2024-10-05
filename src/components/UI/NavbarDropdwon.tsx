'use client'

import { protectedRoutes } from '@/src/constant';
import { useUser } from '@/src/context/cureentUser';

import { logOut } from '@/src/services/AuthService';
import { Avatar } from '@nextui-org/avatar';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { usePathname, useRouter } from 'next/navigation';


const NavbarDropdwon = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const router = useRouter();
  const path = usePathname();

  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  }
  const handleLogout = () => {
    logOut()
    userLoading(true);
    if (protectedRoutes.some((route) => path.match(route))) {
      router.push('/')
    }



  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user?.profilePicture || undefined} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation('/dashboard/user')} >UserProfile</DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/dashboard/user/settings")} >Settings</DropdownItem>
        <DropdownItem onClick={() => handleNavigation('/dashboard/user/create-recipe')} >Create Post</DropdownItem>
        <DropdownItem onClick={handleLogout} className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdwon;