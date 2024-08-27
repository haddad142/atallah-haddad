import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from "../../assets/hipsster.png";
import stockmarket from "../../assets/stock_market.png";
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/projectlink"
          h3="project 1"
          p="Discription of the project"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/projectlink"
          h3="project 2"
          p="Discription of the project"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/projectlink"
          h3="project 2"
          p="Discription of the project"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/projectlink"
          h3="project 2"
          p="Discription of the project"
        />
      </div>
    </section>
  );
}

export default Projects