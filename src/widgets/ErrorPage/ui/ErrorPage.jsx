export default function ErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div id="error-page">
      <h1>Error</h1>
      <button className="error-page__button" onClick={() => handleReload()}>
        reload page
      </button>
    </div>
  );
}
