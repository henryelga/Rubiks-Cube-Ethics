import './spinningCube.css';

const SpinningCube = () => {
  return (
    <div className="spinning-cube-container">
      <div className="container">
        <div className="rubiks-cube rubiks-cube-1">
          {[...Array(27)].map((_, i) => (
            <div key={i} className="detail">
              <div className="side front" />
              <div className="side back" />
              <div className="side top" />
              <div className="side bottom" />
              <div className="side left" />
              <div className="side right" />
            </div>
          ))}
        </div>

        <div className="reflection">
          <div className="rubiks-cube rubiks-cube-1">
            {[...Array(27)].map((_, i) => (
              <div key={i} className="detail">
                <div className="side front" />
                <div className="side back" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side left" />
                <div className="side right" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningCube;
