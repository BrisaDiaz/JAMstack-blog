export default function Loader() {
  return (
    <div className="cubes">
      <div className="sk-cube sk-cube1" />
      <div className="sk-cube sk-cube2" />
      <div className="sk-cube sk-cube3" />
      <div className="sk-cube sk-cube4" />
      <div className="sk-cube sk-cube5" />
      <div className="sk-cube sk-cube6" />
      <div className="sk-cube sk-cube7" />
      <div className="sk-cube sk-cube8" />
      <div className="sk-cube sk-cube9" />

      <style jsx>{`
        .cubes {
          width: 40px;
          height: 40px;
          margin: 100px auto;
        }

        .cubes .sk-cube {
          width: 33%;
          height: 33%;
          background-color: var(--primary-main);
          float: left;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        }

        .cubes .sk-cube1 {
          animation-delay: 0.2s;
        }

        .cubes .sk-cube2 {
          animation-delay: 0.3s;
        }

        .cubes .sk-cube3 {
          animation-delay: 0.4s;
        }

        .cubes .sk-cube4 {
          animation-delay: 0.1s;
        }

        .cubes .sk-cube5 {
          animation-delay: 0.2s;
        }

        .cubes .sk-cube6 {
          animation-delay: 0.3s;
        }

        .cubes .sk-cube7 {
          animation-delay: 0s;
        }

        .cubes .sk-cube8 {
          animation-delay: 0.1s;
        }

        .cubes .sk-cube9 {
          animation-delay: 0.2s;
        }
        @keyframes sk-cubeGridScaleDelay {
          0%,
          70%,
          100% {
            transform: scale3D(1, 1, 1);
          }
          35% {
            transform: scale3D(0, 0, 1);
          }
        }
      `}</style>
    </div>
  );
}
