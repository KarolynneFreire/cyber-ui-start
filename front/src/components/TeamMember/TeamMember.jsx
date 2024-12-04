import Images from "../../assets/images";
import { Team, ImgContainer, About, Name, SocialMedia } from "./TeamMember.styles";
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const TeamMember = ({ image, name, linkedinURL, githubURL, role }) => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: Math.random() * 0.5 }}
    >
    <Team>
      <ImgContainer>
        <img src={image} alt={`Foto de ${name}`} />
      </ImgContainer>
      <About>
        <Name>{name}</Name>
        <SocialMedia>
          <a href={linkedinURL} target="_blank">
            <img src={Images.LinkedinLogo} alt="Ícone do LinkedIn" />
          </a>
          <a href={githubURL} target="_blank">
            <img src={Images.GithubLogo} alt="Ícone do GitHub" />
          </a>
        </SocialMedia>
      </About>
      <span>{role}</span>
    </Team>
    </motion.div>
    </>
  );
};

TeamMember.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    linkedinURL: PropTypes.string.isRequired,
    githubURL: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired
};

export default TeamMember;
