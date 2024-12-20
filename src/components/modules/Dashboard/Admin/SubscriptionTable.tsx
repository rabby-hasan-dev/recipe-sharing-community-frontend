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

const SubscriptionTable = ({ subscriptions }: { subscriptions: IUser[] }) => {
  // const subscriptions = [
  //     { user: 'John Doe', status: 'Active', expiry: '12/31/2024' },
  //     { user: 'Jane Smith', status: 'Expired', expiry: '07/15/2023' },
  // ];
  const expiredDate = (date: any) => {
    return new Date(date).toString().slice(0, 16);
  };

  return (
    <div className="p-6">
      <Table
        aria-label="Subscription management table"
        style={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <TableHeader>
          <TableColumn>User</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Expiry Date</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {subscriptions?.map((subscription, index) => (
            <TableRow key={index}>
              <TableCell>{subscription?.username}</TableCell>
              <TableCell>
                <Badge
                  color={
                    subscription.status === "Active" ? "success" : "danger"
                  }
                >
                  {subscription.status}
                </Badge>
              </TableCell>
              <TableCell>
                {expiredDate(subscription?.premiumExpiresAt)}
              </TableCell>
              <TableCell>
                <Button color="warning" size="sm">
                  Renew
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubscriptionTable;
