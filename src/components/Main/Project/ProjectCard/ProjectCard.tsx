import "./ProjectCard.css";

const ProjectCard: React.FC<{
  icon: string;
  status: string;
  name: string;
  caption: string;
  date: string;
  budget: string;
}> = ({ icon, status, name, caption, date, budget }) => {
  return (
    <div className="project-card">
      <div className="card-head">
        <div className="icon">
          <img src={icon} alt="icon" className="icon-img" />
        </div>
        <div className="status progress">{status}</div>
      </div>
      <div className="card-title">
        <p className="title">{name}</p>
        <p className="caption">{caption}</p>
      </div>
      <div className="mini-card-container">
        <div className="mini-card dotted-border">
          <p className="card-title-color">{date}</p>
          <p className="caption">Due Date</p>
        </div>
        <div className="mini-card dotted-border">
          <p className="card-title-color">${budget}</p>
          <p className="caption">Budget</p>
        </div>
      </div>
      <div className="completion-bar blue-50"></div>
      <div className="user-bubble">
        <div className="bubble bg-red">S</div>
        <div className="bubble bg-blue">A</div>
        <div className="bubble bg-yellow">B</div>
        <div className="bubble bg-green">Q</div>
      </div>
    </div>
  );
};

export default ProjectCard;
