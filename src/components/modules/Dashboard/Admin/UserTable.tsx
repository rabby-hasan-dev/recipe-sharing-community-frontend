"use client";

import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { IUser } from "@/src/types";
import { useChangeUserStatus, useDeleteUser } from "@/src/hooks/adminHooks";

const userStatus = {
  ACTIVE: "active",
  IN_PROGRESS: "in-progress",
  BLOCKED: "blocked",
};
const UserTable = ({ users }: { users: IUser[] }) => {
  const { mutate: changUserStatus } = useChangeUserStatus();
  const { mutate: deleteUser } = useDeleteUser();

  const handleChangeUserStatus = (userId: string) => {
    changUserStatus({ userId, status: { status: userStatus.BLOCKED } });
  };
  const handleDeleteUser = (userId: string) => {
    deleteUser(userId);
  };

  return (
    <div className="p-6">
      <Table
        aria-label="User management table"
        style={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>Name/username</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users?.map((user: IUser, index) => (
            <TableRow key={index}>
              <TableCell>
                {user?.name ? user.fullName : user?.username}
              </TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.role}</TableCell>
              <TableCell>
                <Badge color={user.status === "Active" ? "success" : "danger"}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  color="warning"
                  size="sm"
                  onClick={() => handleChangeUserStatus(user._id)}
                >
                  Block
                </Button>
                <Button
                  className="lg:ml-2"
                  color="danger"
                  size="sm"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
