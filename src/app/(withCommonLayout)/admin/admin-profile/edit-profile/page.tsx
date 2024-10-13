"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGetMe, useGetMeAnUpdate } from "@/src/hooks/userHooks";
import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";
import RSTextarea from "@/src/components/form/RSTextarea";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";


// Define the validation schema with Zod
const profileSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    bio: z.string().optional(),
});

const EditMyProfilePage = () => {

    const [imageFiles, setImageFiles] = useState<File | null>(null)
    const { mutate: updateProfile, isPending, isSuccess: isSuccessMutation } = useGetMeAnUpdate();
    const { data, isLoading, isSuccess } = useGetMe();




    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        const formData = new FormData();

        if (imageFiles !== null) {
            formData.append('file', imageFiles)
        }

        formData.append('data', JSON.stringify(data));



        updateProfile(formData);




    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles(files)

    }

    useEffect(() => {
        if (data && data?.success) {
            toast.success(data?.message as string);
        }
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

    }, [isSuccessMutation, data,]);




    return (
        <>

            {isLoading && !isSuccess && <p>Loading...</p>}
            <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Edit Profile</h2>

                <RSForm onSubmit={onSubmit}
                    resolver={zodResolver(profileSchema)}

                    defaultValues={data?.data}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                        {/* Personal Information Section */}
                        <div className="border p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Personal Information</h3>

                            <div className="py-3">
                                <RSInput
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="bg-gray-100 dark:bg-gray-600 dark:text-white"
                                />
                            </div>

                            <div className="py-3">
                                <RSInput
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="bg-gray-100 dark:bg-gray-600 dark:text-white"
                                />
                            </div>

                            <div className="py-3">
                                <RSInput
                                    name="phone"
                                    label="Phone Number"
                                    type="number"
                                    placeholder="Enter your phone number"
                                    className="bg-gray-100 dark:bg-gray-600 dark:text-white"
                                />
                            </div>

                            <div className="py-3">
                                <RSInput
                                    name="address"
                                    label="Address"
                                    type="text"
                                    placeholder="Enter your address"
                                    className="bg-gray-100 dark:bg-gray-600 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="border p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md">
                            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Bio</h3>

                            <RSTextarea
                                name="bio"
                                label="Tell us about yourself"
                                placeholder="Write a brief bio..."
                                className="bg-gray-100 dark:bg-gray-600 dark:text-white"
                            />

                            <div className="py-3 ">
                                <label
                                    className="flex border-dashed h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-300 shadow-sm transition-all duration-100 hover:border-gray-400 dark:hover:border-gray-500"
                                    htmlFor="image"
                                >
                                    Change Profile Picture
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

                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <Button
                            className="my-3 w-full rounded-md bg-blue-600 text-white font-semibold transition-all duration-200 hover:bg-blue-700 disabled:bg-blue-300"
                            size="lg"
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? "Updating..." : "Update Profile"}
                        </Button>
                    </div>
                </RSForm>
            </div>
        </>



    );
};

export default EditMyProfilePage;
