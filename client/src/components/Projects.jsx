import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../querys/project';
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

function Projects() {
  const { loading, data, error } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p> Error </p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p> No projects </p>
      )}
    </>
  );
}

export default Projects;
