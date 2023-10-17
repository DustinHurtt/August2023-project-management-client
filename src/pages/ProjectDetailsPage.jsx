// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

import { get } from "../services/authService";


function ProjectDetailsPage () {
  const [project, setProject] = useState(null);

    const { projectId } = useParams()

    const getProject = (id) => {

        get(`/projects/${id}`)
            .then((response) => {
                console.log("Found project ==>", response.data)
                setProject(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {

        getProject(projectId)

    }, [])
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => (
            <TaskCard key={task._id} {...task} />
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
