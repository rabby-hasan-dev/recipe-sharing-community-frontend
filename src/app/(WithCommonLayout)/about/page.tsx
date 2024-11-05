import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-6">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>

      {/* Mission Section */}
      <div className="grid grid-cols-1 gap-8 justify-center">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <h3 className="text-3xl font-medium text-orange-500">
                Our Mission
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-lg leading-relaxed">
                Our mission is to bring together a community of passionate
                cooks, food lovers, and culinary experts to share recipes, tips,
                and tricks, and inspire each other in the kitchen. Whether
                you're an experienced chef or a home cook, you'll find a place
                in our community to explore, learn, and share your culinary
                creations.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <Spacer y={4} />
      <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Meet Our Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        <div className="col-span-1">
          <Card>
            <CardBody className="flex flex-col items-center">
              <Image
                alt="Team Member 1"
                height={150}
                objectFit="cover"
                src="https://media.licdn.com/dms/image/v2/D5622AQERjzzan9gdyA/feedshare-shrink_800/feedshare-shrink_800/0/1726046691025?e=2147483647&v=beta&t=WXjVO4u2A_oDLbabEI4S5QBlWN4rX3642vZk1jCnNO8"
                width={150}
              />
              <Spacer y={0.5} />
              <h4 className="text-xl font-bold text-center">John Doe</h4>
              <p className="text-center text-gray-500">Founder & CEO</p>
            </CardBody>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardBody className="flex flex-col items-center">
              <Image
                alt="Team Member 2"
                height={150}
                objectFit="cover"
                src="https://www.courier-journal.com/gcdn/-mm-/f984968caa25e692794962089c3943b3d055df9b/c=0-250-2988-4235/local/-/media/2016/05/03/Louisville/Louisville/635978706532113036-5DS-1082.jpg?width=660&height=881&fit=crop&format=pjpg&auto=webp"
                width={150}
              />
              <Spacer y={0.5} />
              <h4 className="text-xl font-bold text-center">Jane Smith</h4>
              <p className="text-center text-gray-500">Chief Recipe Officer</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* History Section */}
      <Spacer y={4} />
      <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Our History
      </h3>
      <div className="grid grid-cols-1 gap-8 justify-center">
        <div className="col-span-1">
          <Card>
            <CardBody>
              <p className="text-lg leading-relaxed">
                Founded in 2023, the Recipe Sharing Community has grown rapidly,
                attracting home cooks, food bloggers, and culinary professionals
                from around the world. Over the years, we have shared thousands
                of recipes and built a passionate, thriving community dedicated
                to exploring the culinary arts.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <Spacer y={4} />
      <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Get In Touch
      </h3>
      <div className="grid grid-cols-1 gap-8 justify-center">
        <div className="col-span-1">
          <Card>
            <CardBody>
              <p className="text-lg leading-relaxed">
                Have questions or suggestions? We'd love to hear from you! Feel
                free to reach out through our contact form, or drop us an email
                at support@recipecommunity.com.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
