import './InfoAlert.css';



function InfoAlert({ id, onClose, onCancel, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
    onClose();
  };


  return (
    <>
      <p
        className="poof"
      >Poof! Gone forever. Delete?</p>
      <button
        type="button"
        className="info-alert-btn"
        onClick={onCancel}
      >Cancel</button>
      <button
        type="button"
        className="info-alert-btn delete"
        onClick={handleDelete}
      >Delete</button>
    </>
  );
}



export default InfoAlert;