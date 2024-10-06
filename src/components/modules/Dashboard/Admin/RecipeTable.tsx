'use client'

import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";


const RecipeTable = () => {
    const recipes = [
        { title: 'Spaghetti Carbonara', author: 'John Doe', status: 'Published' },
        { title: 'Chicken Tikka', author: 'Jane Smith', status: 'Unpublished' },
    ];

    return (
        <div className="p-6">
            <Table
                aria-label="Recipe management table"
                style={{
                    height: "auto",
                    minWidth: "100%",
                }}
            >
                <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Author</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {recipes.map((recipe, index) => (
                        <TableRow key={index}>
                            <TableCell>{recipe.title}</TableCell>
                            <TableCell>{recipe.author}</TableCell>
                            <TableCell>
                                <Switch checked={recipe.status === 'Published'} />
                            </TableCell>
                            <TableCell>
                                <Button color="danger" size="sm">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}


export default RecipeTable;