import '../index.css'
import { Cpu } from 'lucide-react';
import SpinningCube from '../components/spinningCube/SpinningCube';

const ContextSection = () => {
    return (
        <section className="context-section">
            <div className="context-left">
                <h2 className="context-title">
                    <Cpu className="icon-chip" />
                    The Optimal Puzzle
                </h2>

                <p className="context-text">
                    The Rubik's Cube is a bounded system. While there are trillions of scrambles, 
                    they all follow strict rules. This is where AI excels. Unlike humans who
                    rely on quick guesses, AI can explore all options to find an optimal answer
                    (the best possible solution) every time.
                </p>

                <p className="context-text muted">
                    This machine certainty creates a major conflict. Our laws and ethics were 
                    built for human effort and human error, not a world where AI can achieve
                    technical perfection. <br />
                    The result is a
                    <strong> policy void</strong>:
                    a gap where our existing rules have no clear answer.
                </p>

                <div className="scenario-cards">
                    <div className="scenario-card">
                        <span className="scenario-tag">Scenario 01: Legal Void</span>
                        <p>
                            Who owns the AI-invented algorithm?
                        </p>
                    </div>

                    <div className="scenario-card">
                        <span className="scenario-tag">Scenario 02: Ethical / Philosophical Void</span>
                        <p>
                            Does AI perfection destroy human purpose?
                        </p>
                    </div>
                </div>
            </div>

            <div className="context-right">
                <div className="context-right">
                    <SpinningCube />
                    <br />
                    <p className="cube-reference">
                        Cube simulation inspired by <a href="https://codepen.io/h20x/pen/YQYrOa" target="_blank" rel="noopener noreferrer">this CodePen</a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ContextSection;
