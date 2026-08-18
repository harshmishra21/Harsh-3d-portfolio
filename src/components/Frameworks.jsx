import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    "react/react-original.svg",
    "nodejs/nodejs-original.svg",
    "mongodb/mongodb-original.svg",
    "express/express-original.svg",
    "typescript/typescript-original.svg",
    "javascript/javascript-original.svg",
    "cplusplus/cplusplus-original.svg",
    "python/python-original.svg",
    "docker/docker-original.svg",
    "git/git-original.svg",
    "nextjs/nextjs-original.svg",
    "tailwindcss/tailwindcss-original.svg"
  ];

  const innerSkills = [
    "android/android-original.svg",
    "amazonwebservices/amazonwebservices-original-wordmark.svg",
    "firebase/firebase-original.svg",
    "mysql/mysql-original.svg",
    "postgresql/postgresql-original.svg",
    "django/django-plain.svg",
    "figma/figma-original.svg",
    "linux/linux-original.svg",
    "html5/html5-original.svg",
    "css3/css3-original.svg",
    "jenkins/jenkins-original.svg",
    "kubernetes/kubernetes-original.svg",
    "postman/postman-original.svg"
  ];

  const getCdnUrl = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={getCdnUrl(skill)} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={getCdnUrl(skill)} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
