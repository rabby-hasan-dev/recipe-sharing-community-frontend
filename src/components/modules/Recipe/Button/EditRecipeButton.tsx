"use client"

import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { FilePenLine } from 'lucide-react';


const EditRecipeButton = ({ recipeId, }: { recipeId: string, }) => {


    return (


        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='Edit  Recipe!'  >

                <Button className="bg-black text-white" radius="full" size="sm">
                    <FilePenLine />
                </Button>

            </Tooltip>
        </div>



    );
};

export default EditRecipeButton;

