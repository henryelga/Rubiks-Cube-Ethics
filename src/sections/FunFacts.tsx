import '../index.css'
import my_collection from '../assets/my_collection.jpg'

const funFacts = [
  "My average solve time for a 3x3 cube is 58 seconds",
  "AI robots can solve a 3x3 Rubik's Cube in 0.38 seconds",
  "The standard 3x3 cube world record is 3.13 seconds for humans",
  "The Rubik's Cube has 43 quintillion possible combinations",
];

const FunFacts = () => {
  return (
    <section className="fun-facts-section">
      <span className="section-badge">FUN FACTS</span>
      <h2>Fun Facts About Rubik's Cubes</h2>
      <div className="fun-facts-content">
        <div className="fun-facts-image">
          <img src={my_collection} alt="My Rubik's Cube Collection" />
          <small>My Collection of Rubik's Cubes</small>
        </div>
        <ul className="fun-facts-list">
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FunFacts;
