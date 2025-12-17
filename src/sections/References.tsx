import references from '../files/references.json';
import '../index.css'

const References = () => {
  return (
    <section className="references-section">
      <span className="section-badge">REFERENCES</span>
      <h2>References</h2>
      <ul className="reference-list">
        {references.map((ref) => (
          <li key={ref.id} className="reference-item">
            {ref.citation.split('Available at: ')[0]}
            Available at: 
            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ref-link">
              {ref.url}
            </a>
            {ref.citation.split(ref.url)[1]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default References;
