"use client"


import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';


const DetailButton = ({ id }: { id: string }) => {
    return (
        <Link href={`/recipe-feeds/recipe/${id}`} >
            <Button
                className="bg-black text-tiny text-white"
                radius="full"
                size="sm"
            >
                Details
            </Button>
        </Link>
    );
};

export default DetailButton;