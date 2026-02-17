const editModal = ({ handleCloseModal, isOpen, onSubmit }) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, imageUrl });
  };
    useEffect(() => {
      if (isOpen === true) {
        setName("");
        setUrl("");
      }
    }, [isOpen]);
  return (
    <EditModalWithForm
      title="Changle Profile Data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal_form-label">
        Name
        <input
          className="modal_form-input"
          placeholder="Name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label className="modal_form-label">
        Avatar URL
        <input
          className="modal_form-input"
          placeholder="Avatar URL"
          type="url"
          name="link"
          minLength="1"
          maxLength="300"
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>
    </EditModalWithForm>
  );
};
export default editModal;
