import styles from './ProjectsStyles.module.css';
import soooccer from "../../assets/football_project.png";
import stockoo from "../../assets/stock_market.png";
import taktik from "../../assets/taktik.png";
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={soooccer}
          link="https://github.com/haddad142/soccer_prediction"
          h3="Soooccer"
          p="Predicting Soccer Winner"
        />
        <ProjectCard
          src={stockoo}
          link="https://github.com/haddad142/Stock-Market-Prediction"
          h3="Stockoo"
          p="Predicting Stock Market"
        />
        <ProjectCard
          src={taktik}
          link="https://github.com/haddad142"
          h3="TakTik"
          p="Soccer Analysis System (ongoing)"
        />
      </div>
    </section>
  );
}

export default Projects