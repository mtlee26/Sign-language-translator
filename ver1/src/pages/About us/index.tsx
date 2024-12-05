import Layout from "Layout";
import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  msv: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  msv,
  imageUrl,
}) => (
  <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-[262px] h-[289px] ml-1 mr-1 p-4">
    <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4" />
    <h2 className="text-xl font-semibold">{name}</h2>
    <p className="text-gray-500 text-sm mt-1">{role}</p>
    <p className="text-gray-500 text-sm mt-1 mb-5">MSV: {msv}</p>
  </div>
);

const teamMembers = [
  {
    name: "Le Thi Minh Tam",
    role: "Leader",
    msv: "22028322",
    imageUrl: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/28-School_Girl-128.png",
  },
  {
    name: "Hoang Linh Chi",
    role: "Member",
    msv: "22028132",
    imageUrl: "https://cdn4.iconfinder.com/data/icons/avatars-2-12/512/Avatar_2-22-128.png",
  },
  {
    name: "Luong Thi Linh",
    role: "Member",
    msv: "22028202",
    imageUrl: "https://cdn4.iconfinder.com/data/icons/avatars-2-12/512/Avatar_2-21-128.png",
  },
  {
    name: "Nguyen Thi Thu Trang",
    role: "Member",
    msv: "22028254",
    imageUrl: "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/8-Employee-128.png",
  },
];

function Aboutus(props: IProps) {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-bold mb-6">About us</h1>
        <hr className="mb-6 border-gray-300" />
        <p className="mb-4 text-lg">University: VNU University of Engineering and Technology.</p>
        <p className="mb-4 text-lg">Class: INT2041 55 - Human Machine Interaction.</p>
        <p className="mb-4 text-lg">Team: 9</p>
        <p className="mb-12 text-lg">Project: Building applications to support people with disabilities.</p>
        <hr className="mb-6 border-gray-300" />

        <div className="container mx-auto p-2">
          <h1 className="text-3xl font-bold mb-8">Our Team</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.msv}
                name={member.name}
                role={member.role}
                msv={member.msv}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 text-center">
          <div className="mt-8 text-3xl">
            <span className="font-bold">Help us</span> make sign language accessible for anyone
          </div>
          <div className="mt-8 text-xl">
            We have some <span className="font-bold">great laughs</span> and are dedicated to delighting our clients. Why not join us?
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;
