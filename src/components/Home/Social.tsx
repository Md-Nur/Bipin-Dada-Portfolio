import { FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="flex gap-2 justify-between w-full mt-3 max-w-sm">
      <a
        href="https://github.com/bipin-saha"
        target="_blank"
        className="cursor-pointer"
      >
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/bipinsaha/?originalSubdomain=bd"
        className="cursor-pointer"
        target="_blank"
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        href="https://x.com/saha_bipin"
        target="_blank"
        className="cursor-pointer"
      >
        <FaXTwitter className="text-3xl" />
      </a>
      <a
        href="https://scholar.google.com/citations?user=3oJ0SboAAAAJ&hl=en&oi=ao"
        target="_blank"
        className="cursor-pointer"
      >
        <FaGraduationCap className="text-4xl" />
      </a>
    </div>
  );
};

export default Social;
