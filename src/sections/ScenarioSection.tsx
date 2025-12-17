import { useEffect, useState, type JSX } from 'react';
import '../index.css';
import Scenario_1 from '../components/scenarios/Scenario_1';
import Scenario_2 from '../components/scenarios/Scenario_2';
import Scenario_Conclusion from '../components/scenarios/Scenario_Conclusion';

interface Scenario {
    id: number;
    title: string;
    shortDesc: string;
    fullDesc: string;
    icon: string;
    Content: () => JSX.Element;
}

const scenarios: Scenario[] = [
    {
        id: 1,
        title: 'The Legal Void',
        shortDesc: 'Who owns the AI-invented algorithm?',
        fullDesc: 'This scenario explores the failure of current Intellectual Property (IP) law to recognize machine creativity. The law must choose whether to keep following rules from the past or recognize the reality of machine-made ideas.',
        icon: '⚖️',
        Content: Scenario_1,
    },
    {
        id: 2,
        title: 'The Ethical / Philosophical Void',
        shortDesc: 'Does AI perfection destroy human purpose?',
        fullDesc: 'This scenario explores the impact of AI achieving a super-human, perfect solution. It asks if machine speed replaces the real value of human hard work and learning.',
        icon: '💡',
        Content: Scenario_2,
    },
    {
        id: 3,
        title: 'Overall Conclusion',
        shortDesc: '',
        fullDesc: 'Summarizing the lessons from both scenarios.',
        icon: '🔍',
        Content: Scenario_Conclusion,
    },
]

const ScenarioSection = () => {
    const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);

    useEffect(() => {
        if (activeScenario) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeScenario]);


    return (
        <section className="void-section">
            <span className="section-badge">EXPLORING TWO SCENARIOS</span>
            <br /> <br />

            <div className="void-cards">
                {scenarios.slice(0, 2).map((scenario) => (
                    <div key={scenario.id} className="void-card">
                        <div className="void-icon">{scenario.icon}</div>

                        <h3>{scenario.title}</h3>
                        <p><i>{scenario.shortDesc}</i></p>
                        <p>{scenario.fullDesc}</p>

                        <button
                            className="read-more"
                            onClick={() => setActiveScenario(scenario)}
                        >
                            READ MORE <span>→</span>
                        </button>
                    </div>
                ))}
            </div>

            <div className="void-cards conclusion-card">
                <div className="void-card">
                    <div className="void-icon">{scenarios[2].icon}</div>

                    <h3>{scenarios[2].title}</h3>
                    <p><i>{scenarios[2].shortDesc}</i></p>
                    <p>{scenarios[2].fullDesc}</p>

                    <button
                        className="read-more"
                        onClick={() => setActiveScenario(scenarios[2])}
                    >
                        READ MORE <span>→</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {activeScenario && (
                <div className="fs-modal-overlay">
                    <button
                        className="fs-close"
                        onClick={() => setActiveScenario(null)}
                    >
                        ✕
                    </button>

                    <div className="fs-modal">
                        <div className="fs-content">
                            <activeScenario.Content />
                        </div>
                    </div>
                </div>
            )}



        </section>
    );
};

export default ScenarioSection;
