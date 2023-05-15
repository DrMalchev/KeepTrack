import React, { useState } from 'react'
import { Project } from './Project';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList({ projects, onSave }) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (x) => {
        setProjectBeingEdited(x)
    }

    const cancelEditing = () => {
        setProjectBeingEdited({});
    }

    return (
        <div className="row">
            {projects.map((x) => (
                <div className="cols-sm" key={x.id}>
                    {x == projectBeingEdited ?
                        <ProjectForm onCancel={cancelEditing} onSave={onSave} project={x}></ProjectForm>
                        : <ProjectCard project={x} onEdit={() => { handleEdit(x) }}></ProjectCard>
                    }
                </div>
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList