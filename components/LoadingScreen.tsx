import Loader from "./Loader";
export default function LoadingScreen() {
  return (
    <aside
      aria-busy={true}
      aria-label="loading"
      aria-live="assertive"
      className="screen"
      role="alert"
    >
      <Loader />
      <style jsx>{`
        .screen {
          position: fixed;
          width: 100%;
          height: 100%;
          background: #fff;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </aside>
  );
}
