import "./SkipToMain.css";

function SkipToMain({ setPage }) {
  return (
    <a
      href="#main"
      className="skip-to-main"
      title="Skip to main content"
      aria-label="Skip to main content"
      onClick={(event) => {
        event.preventDefault();
        setPage('Home');
      }}
    >
      Skip to main content
    </a>
  );
}

export default SkipToMain;