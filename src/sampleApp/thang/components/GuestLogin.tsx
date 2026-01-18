interface GuestLoginProps {
  text: string,
  onLogin: () => void
}

function GuestLogin({ text, onLogin }: GuestLoginProps) {
  return (
    <div 
    className="alert-box">
      <h1>{text}</h1>
      <button 
      className="alert-button"
      onClick ={onLogin} >
        Login
      </button>
    </div>
  );
}

export default GuestLogin