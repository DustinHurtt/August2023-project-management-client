// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

const API_URL = "http://localhost:3000";

function ProjectListPage() {

  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        console.log("Projects ==>", response.data)
        setProjects(response.data)
    })
      .catch((error) => console.log(error));
  };

  const updateProjects = (newProject) => {

    let newArray = [...projects, newProject]
    setProjects(newArray)

  }

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">

        <AddProject refreshProjects={getAllProjects} updateProjects={updateProjects} />
      
        {
            projects.map((project) => {
          return (
            <ProjectCard key={project._id} {...project} />
          )
        })
        }     
       
    </div>
  );
}

export default ProjectListPage;
