import { motion } from "framer-motion";
import "./Tips.css";

const Tips = () => {
  const tips = [
    {
      title: "Use Senhas Fortes",
      description:
        "Evite senhas óbvias. Combine letras, números e caracteres especiais.",
    },
    {
      title: "Habilite a Autenticação de Dois Fatores",
      description:
        "Adicione uma camada extra de segurança para proteger suas contas.",
    },
    {
      title: "Cuidado com Links Suspeitos",
      description:
        "Não clique em links desconhecidos ou que pareçam suspeitos.",
    },
  ];

  return (
    <section className="tips" id="tips">
      <h2>Dicas de Segurança</h2>
      <div className="tips-container">
        {tips.map((tip, index) => (
          <motion.div
            className="tip-card"
            key={index}
            whileHover={{ boxShadow: "0 0 15px 5px #00ff00", scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
