
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";



const ContactUsPage = () => {
    return (
        <div className="my-10">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold ">Contact Us</h1>
                <p className="mt-4">
                    We're here to help! Send us your questions or feedback.
                </p>
            </div>

            {/* Form Section */}
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Form */}
                <Card className="p-8 shadow-lg ">
                    <h2 className="text-2xl font-medium mb-6">Get In Touch</h2>
                    <form className="space-y-6">
                        <Input
                            fullWidth
                            variant="bordered"
                            label="Your Name"
                            type="text"
                            className="border-gray-300"
                        />
                        <Input
                            fullWidth
                            variant="bordered"
                            label="Your Email"
                            type="email"
                            className="border-gray-300"
                        />
                        <Input
                            fullWidth
                            variant="bordered"
                            label="Subject"
                            type="text"
                            className="border-gray-300"
                        />
                        <Textarea
                            fullWidth
                            variant="bordered"
                            label="Message"
                            rows={6}
                            className="border-gray-300"
                        />

                        <Button
                            color="default"
                            className="w-full bg-default-900 font-semibold text-default"
                        >
                            Submit
                        </Button>
                    </form>
                </Card>

                {/* Contact Information and Map */}
                <div className="space-y-8">
                    {/* Contact Info */}
                    <Card className="p-8 shadow-lg ">
                        <h2 className="text-2xl font-medium mb-4">Our Contact Details</h2>
                        <p className=" mb-2">
                            <span className="font-semibold">Phone:</span> +123-456-7890
                        </p>
                        <p className=" mb-2">
                            <span className="font-semibold">Email:</span> support@recipecommunity.com
                        </p>
                        <p className="">
                            <span className="font-semibold">Address:</span> 123 Culinary Street, Flavor Town, USA
                        </p>
                    </Card>

                    {/* Embedded Map */}
                    <div className="shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.315678056425!2d-122.4194152846813!3d37.77492967975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4bb6c8df%3A0x4b6f9c7f2ba118b!2s123%20Culinary%20Street%2C%20Flavor%20Town%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                            width="100%"
                            height="300"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
