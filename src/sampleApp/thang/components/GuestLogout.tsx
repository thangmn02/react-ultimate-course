interface GuestLogoutProps {
  text: string,
  name: string,
  onLogout: () => void
}

function GuestLogout({ text, name, onLogout }: GuestLogoutProps) {
  return (
    <div className="alert-box">
      <h1>{text} {name}</h1>
      <button 
        className="alert-button" 
        onClick={onLogout} >
        Logout
      </button>
    </div>
  );
}

export default GuestLogout