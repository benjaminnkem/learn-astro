type Image = { src: string; alt: string };
type Skill = { icon: { name: string }; name: string };

export const images = [];
export const skills: Skill[] = [
  { name: "HTML", icon: { name: "skills/html" } },
  { name: "CSS", icon: { name: "skills/css" } },
  { name: "SCSS", icon: { name: "skills/scss" } },
  { name: "Tailwind CSS", icon: { name: "skills/tailwind-css" } },
  { name: "Bootstrap", icon: { name: "skills/bootstrap" } },
  { name: "Javascript", icon: { name: "skills/javascript" } },
  { name: "Typescript", icon: { name: "skills/typescript" } },
  { name: "React", icon: { name: "skills/react" } },
  { name: "Redux", icon: { name: "skills/redux" } },
  { name: "Next.js", icon: { name: "skills/next" } },
  { name: "Astro", icon: { name: "skills/astro" } },
  { name: "Python", icon: { name: "skills/python" } },
  { name: "Node.js", icon: { name: "skills/nodejs" } },
  { name: "Express.js", icon: { name: "skills/express" } },
  { name: "Nest.js", icon: { name: "skills/nest" } },
  { name: "MySQL", icon: { name: "skills/mysql" } },
  { name: "Mongo DB", icon: { name: "skills/mongodb" } },
];
