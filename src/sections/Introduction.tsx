import '../index.css';

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="digital-age-puzzle-tag">
        <span className="dot red" /> <span className="dot green" /> <span className="dot yellow" /> <span className="dot blue" /> 
        RUBIKS CUBE
      </div>

      <h1 className="main-title">
        SOLVING <br />
        <span className="puzzle-gradient">RUBIKS CUBE</span> <br />
        <span className="subheading">IN THE AGE OF <span className="puzzle-gradient">AI</span></span>
      </h1>

      <p className="subtitle">
        Exploring the gap between AI perfection and human rules.
      </p>
    </div>
  );
};

export default Introduction;
