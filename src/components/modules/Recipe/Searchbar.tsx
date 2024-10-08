
"use client"
import useDebounce from '@/src/hooks/debounceHooks';
import { Input } from '@nextui-org/input';
import { SearchIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Searchbar = () => {

    const { handleSubmit, register, watch } = useForm();
    const searchTerm = useDebounce(watch('search'));
    const [searchResults, setSearchResults] = useState<[] | []>([]);


    useEffect(() => {
        if (searchTerm) {

        }
    }, [searchTerm])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Input
                {...register('search')}
                isClearable
                radius="lg"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}

                placeholder="Search by ingredients, title, etc...."
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            />
        </form>
    );
};

export default Searchbar;