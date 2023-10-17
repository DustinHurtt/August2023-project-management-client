import { Link } from "react-router-dom";

const ProjectCard = ({ _id, title, description }) => {
    return (
        <div className="ProjectCard card" key={_id} >
          <Link to={`/projects/${_id}`}>
            <h3>{title}</h3>
          </Link>
          <p style={{ maxWidth: "400px" }}>{description} </p>
        </div>
      );
}

export default ProjectCard