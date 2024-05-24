import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = [
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1711177742/GoForMeet/logo_splashscreen_ionlpu.png",
    name: "Goformeet",
    role: "Full Stack Developer Intern",
    time: "March 2024 - Present",
    externalLink: "https://www.goformeet.co",
  },
];

const communityExperience = [
  {
    imageUrl:
      "https://imgs.search.brave.com/LTIJcNMh9jJV1d-d9b4S2oyHD3N1nL-6_4tleBXJ7oM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nZHNj/amdlYy5naXRodWIu/aW8vYXNzZXRzL2xv/Z28ucG5n",
    name: "Google Developer Student Club",
    role: "Campus Lead",
    time: "June 2023 - June 2024",
    externalLink:
      "https://www.linkedin.com/posts/phani-cse_gdsc2023-selectedlead-dreamscometrue-activity-7086325334333165568-C35H",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1716553651/gcc_lavebp.jpg",
    name: "GIST Coding Club",
    role: "Founder and President",
    time: "September 2022 - June 2023",
    externalLink: "https://www.instagram.com/coding_club.gist/",
  },
];

const education = [
  {
    imageUrl:
      "https://yt3.googleusercontent.com/g0xIPM1Opfk9qtIF1PmFVUxkS9LQ9Zj4d9NMRRKHM0mE4QqfYMAwTBzDdxbYMOuLDzrb_fSmD1A=s900-c-k-c0x00ffffff-no-rj",
    name: "Geethanjali Institute of Science and Technology",
    educationClass: "CSE(AI&ML), Bachelor of Technology(B.Tech)",
    time: "2021 - 2025",
    externalLink: "https://www.gist.edu.in/",
  },
  {
    imageUrl:
      "https://imgs.search.brave.com/oAD72SOTg670rq7ZlxnwuP7PwaBwCLQqkQWcPJ9Cbzk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YmFuZ2Fsb3JlL2c4/LzA4MHB4eDgwLnh4/ODAuMjMwMzI1MTY1/ODA3LmcxZzgvY2F0/YWxvZ3VlL3dxaGUz/MXNtOHpzb2gwaC04/YTM5cGI0ODFzLTI1/MC5qcGc_Y2xyPSM0/NTJkMjE_dz0zODQw/JnE9NzU",
    name: "Narayana Intermediate College",
    educationClass: "MPC, Intermediate",
    time: "2019 - 2021",
    externalLink: "https://www.narayanagroup.com/",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1716556004/cropped-cropped-kishoreratnam-1_iuh5bl.jpg",
    name: "Dr.Kishore Ratnam High School",
    educationClass: "8th Grade - 10th Grade",
    time: "2016 - 2019",
    externalLink: "https://www.kishoreratnam.com/",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dv0oedkxm/image/upload/v1716557341/download_qrom80.png",
    name: "Theerdha Children's Home",
    educationClass: "LKG - 7th Grade",
    time: "2006 - 2016",
    externalLink: "",
  },
];

const Experience = () => {
  return (
    <div className="py-16 pl-10 lg:flex gap-10">
      <div className="flex-1">
        <section className="mb-3">
          <h2 className="text-2xl font-bold">Experience</h2>
          <ul>
            {WorkExperience.map((experience, index) => (
              <ExperienceCard
                key={index}
                imageUrl={experience.imageUrl}
                name={experience.name}
                role={experience.role}
                time={experience.time}
                externalLink={experience.externalLink}
              />
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Community Experience</h2>
          <ul>
            {communityExperience.map((experience, index) => (
              <ExperienceCard
                key={index}
                imageUrl={experience.imageUrl}
                name={experience.name}
                role={experience.role}
                time={experience.time}
                externalLink={experience.externalLink}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className="flex-1">
        <section>
          <h2 className="text-2xl font-bold">Education</h2>
          <ul>
            {education.map((education, index) => (
              <EducationCard
                key={index}
                imageUrl={education.imageUrl}
                name={education.name}
                educationClass={education.educationClass}
                time={education.time}
                externalLink={education.externalLink}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Experience;
