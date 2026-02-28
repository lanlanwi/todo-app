import './InfoAlert.css';



function InfoAlert({ info, onToggleAlert, onDelete }) {
  return (
    <div className="info-alert">
      <p>Poof! Gone forever. Delete?</p>
      <button
        onClick={() => onToggleAlert(false)}
      >Cancel</button>
      <button
        className="info-alert-delete"
        onClick={() => onDelete(info.id)}
      >Delete</button>
    </div>
  );
}



export default InfoAlert;