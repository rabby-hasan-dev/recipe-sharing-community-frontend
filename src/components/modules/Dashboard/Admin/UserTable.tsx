'use client'

import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

const UserTable = () => {
    const users = [
        { name: 'John Doe', email: 'john@example.com', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'Blocked' },
    ];

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
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Badge color={user.status === 'Active' ? 'success' : 'danger'}>
                                    {user.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Button color="warning" size="sm">Block</Button>
                                <Button color="danger" size="sm" className="ml-2">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default UserTable;