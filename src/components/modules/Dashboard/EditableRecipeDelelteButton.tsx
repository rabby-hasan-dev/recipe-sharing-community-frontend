"use client"

import { useDeleteRecipe } from '@/src/hooks/receipeHooks';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { Trash2 } from 'lucide-react';



const EditableRecipeDelelteButton = ({ recipeId }: { recipeId: string, }) => {
    const { mutate: deleteRecipe, } = useDeleteRecipe()
    const handleDelete = () => {
        deleteRecipe(recipeId)
    }

    return (


        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='Delete  Recipe!'  >

                <Button onClick={() => handleDelete()} className="bg-black text-white" radius="full" size="sm">

                    <Trash2 />
                </Button>
            </Tooltip>
        </div>



    );
};

export default EditableRecipeDelelteButton;

