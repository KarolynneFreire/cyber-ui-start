import { Bg, Initial, Title, Content } from "./Team.styles";
import Images from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import TeamMember from "../../components/TeamMember/TeamMember";

const teamData = [
    {
        image: Images.Photo,
        name: "Maria Morais",
        linkedinURL: "https://www.linkedin.com/in/mariargmorais/",
        githubURL: "GitHub.com/mariargmorais",
        role: "Desenvolvedor ---------",
      },
    {
        image: Images.Photo,
        name: "Glaydon Lima",
        linkedinURL: "Linkedin.com/in/glaydonlima/",
        githubURL: "https://github.com/",
        role: "Desenvolvedor Back-End",
      },
      {
        image: Images.Photo,
        name: "Leonam Lucius",
        linkedinURL: "https://www.linkedin.com/in/leonamlucius/",
        githubURL: "https://github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Grasiela Maria",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
      {
        image: Images.Photo,
        name: "Rodrigo Félix",
        linkedinURL: "https://www.linkedin.com/in/grasielamrib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        githubURL: "github.com/",
        role: "Desenvolvedor ---------",
      },
];

const TeamPage = () => {
    const randomList = (array) => {
      return array
        .map((item) => ({ ...item, randomSort: Math.random() }))
        .sort((a, b) => a.randomSort - b.randomSort)
    };
  
    const randomTeamData = randomList(teamData)
  
    return (
      <Bg>
        <Initial>
        <Link to='/'><i className='bx bx-chevrons-left'></i></Link>
            <Title>Conheça nossa equipe</Title>
            <p></p>
        </Initial>
        <Content>
          {randomTeamData.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              linkedin={member.linkedin}
              github={member.github}
              role={member.role}
              delay={`${index * 0.2}s`}
            />
          ))}
        </Content>
        <Footer/>
      </Bg>
    )
  }

export default TeamPage;
