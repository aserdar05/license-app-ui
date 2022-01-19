import { Table, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Plus from "../UI/Icons/Plus";

const ProjectList = (props) => {
  const navigate = useNavigate();
  const handleAddProject = () => {
    navigate("/user/project");
  };

  return (
    <div>
      <Button variant="btn btn-secondary float-end" onClick={handleAddProject}>
        <Plus />
        Add New Project
      </Button>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th width="120px"></th>
          </tr>
        </thead>
        <tbody>
          {props.projectList &&
            props.projectList.length > 0 &&
            props.projectList.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.startDate}</td>
                <td>{p.endDate}</td>
                <td>{p.status}</td>
                <td className="text-center">
                  {<NavLink to={`/user/project/${p.id}`} className="btn btn-secondary">Detail</NavLink> }
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectList;
