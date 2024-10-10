
"use client";
import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";
import RSSelect from "@/src/components/form/RSSelect";
import Loading from "@/src/components/UI/Loading";
import { useUserRagistration } from "@/src/hooks/authHooks";
import { registerValidationSchemaAdmin } from "@/src/schemas/registerValidation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


export default function AdminRegisterPage() {
    const [imageFiles, setImageFiles] = useState<File | null>(null)
    const { mutate: handleUserRegistration, isPending, isSuccess } = useUserRagistration();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        const formData = new FormData();
        if (imageFiles !== null) {
            formData.append('file', imageFiles)
            formData.append('data', JSON.stringify(data));

            handleUserRegistration(formData);
        } else {
            toast.error("Please input profile picture")
        }


    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles(files)

    }

    const RoleOptions = [
        { key: "user", label: "USER" },
        { key: "admin", label: "ADMIN" }

    ]

    return (

        <>
            {isPending && <Loading />}
            <div className="flex flex-col items-center justify-center">
                <h3 className="my-2 text-xl font-bold">Create  Admin For Recipe Sharing Community</h3>
                <p className="mb-4">For Better User  Experience</p>
                <div className="w-full  sm:w-[60%] md:w-[60%] lg:w-[60%] ">
                    <RSForm
                        resolver={zodResolver(registerValidationSchemaAdmin)}
                        onSubmit={onSubmit}

                    >
                        <div className="py-3">
                            <RSInput label="User Name" name="username" size="sm" />
                        </div>
                        <div className="py-3">
                            <RSInput label="Email" name="email" size="sm" />
                        </div>

                        <div className="py-3">
                            <RSInput
                                label="Password"
                                name="password"
                                size="sm"
                                type="password"
                            />
                        </div>



                        <div className="flex items-center justify-between">
                            <div>

                                <RSSelect name="role" label="Select Role" options={RoleOptions}></RSSelect>

                            </div>

                            <div>
                                <label
                                    className="flex border-dashed h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                                    htmlFor="image"
                                >
                                    Select Profile Picture
                                </label>
                                <input
                                    multiple
                                    className="hidden"
                                    id="image"
                                    type="file"
                                    onChange={(e) => handleImageChange(e)}
                                />

                            </div>
                        </div>



                        <Button
                            className="my-3 w-full rounded-md bg-default-900 text-default"
                            size="lg"
                            type="submit"
                        >
                            Create Admin
                        </Button>
                    </RSForm>

                </div>
            </div>
        </>
    );
}