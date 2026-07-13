const Notification = ({ hasMessage = true, message }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasMessage && <p className="notification">{message}</p>}
    </div>
  );
};

export default Notification;
