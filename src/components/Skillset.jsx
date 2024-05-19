import SkillIcon from "./SkillIcon";

const SkillSet = [
  {
    imageUrl: "https://img.icons8.com/color/48/html-5--v1.png",
    language: "HTML",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/css3.png",
    language: "CSS",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/javascript--v1.png",
    language: "Javascript",
  },
  {
    imageUrl: "https://img.icons8.com/plasticine/100/react.png",
    language: "React JS",
  },
  {
    imageUrl: "https://img.icons8.com/fluency/48/node-js.png",
    language: "Node Js",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/tailwindcss.png",
    language: "Tailwind CSS",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/mongo-db.png",
    language: "Mongo DB",
  },
  {
    imageUrl:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-sql-computer-programming-flaticons-lineal-color-flat-icons.png",
    language: "SQL",
  },
  {
    imageUrl: "https://img.icons8.com/nolan/64/amazon-web-services.png",
    language: "Amazon Web Services(AWS)",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/python--v1.png",
    language: "Python",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/git.png",
    language: "Git",
  },
  {
    imageUrl: "https://img.icons8.com/clouds/100/github.png",
    language: "Github",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/google-cloud.png",
    language: "Google Cloud",
  },
  {
    imageUrl: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
    language: "VS Code",
  },
];

const Skillset = () => {
  return (
    <div className="py-14">
      <h1 className="text-center font-bold text-2xl mb-10">My Skillset</h1>
      <ul className="flex flex-wrap align-center mx-auto gap-y-10 justify-center lg:max-w-[1200px]">
        {SkillSet.map((skill) => (
          <SkillIcon details={skill} key={skill.language} />
        ))}
      </ul>
    </div>
  );
};

export default Skillset;
