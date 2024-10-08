"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGetMe, useGetMeAnUpdate } from "@/src/hooks/userHooks";
import RSForm from "@/src/components/form/RSForm";
import RSInput from "@/src/components/form/RSInput";
import RSTextarea from "@/src/components/form/RSTextarea";
import { ChangeEvent, useState } from "react";
import { useUser } from "@/src/context/cureentUser";


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
    const { mutate: updateProfile, isPending } = useGetMeAnUpdate();
    const { data } = useGetMe();
    const { setIsLoading } = useUser();


    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        const formData = new FormData();

        if (imageFiles !== null) {
            formData.append('file', imageFiles)
        }

        formData.append('data', JSON.stringify(data));

        console.log(formData.getAll('data'))

        updateProfile(formData);

        setIsLoading(true)


    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files![0];
        setImageFiles(files)

    }






    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <RSForm onSubmit={onSubmit}
                resolver={zodResolver(profileSchema)}
                defaultValues={data?.data}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Personal Information Section */}
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <div className="py-3">
                            <RSInput
                                name="firstName"
                                label="First Name"
                                type="text"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="py-3">
                            <RSInput
                                name="lastName"
                                label="Last Name"
                                type="text"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="py-3">
                            <RSInput
                                name="phone"
                                label="Phone Number"
                                type="number"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="py-3">
                            <RSInput
                                name="address"
                                label="Address"
                                type="text"
                                placeholder="Enter your address"
                            />
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Bio</h3>
                        <RSTextarea

                            name="bio"
                            label="Tell us about yourself"
                            placeholder="Write a brief bio..."
                        />

                        <div className="py-3">
                            <label
                                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
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

                <div className="text-center">
                    <Button
                        className="my-3 w-full rounded-md bg-blue-600 text-white font-semibold"
                        size="lg"
                        type="submit"
                        disabled={isPending} // Disable button while loading
                    >
                        {isPending ? "Updating..." : "Update Profile"}

                    </Button>
                </div>
            </RSForm>
        </div>
    );
};

export default EditMyProfilePage;
