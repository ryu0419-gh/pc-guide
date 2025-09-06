interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => (
  <span style={{ 
    backgroundColor: score >= 85 ? '#22c55e' : score >= 70 ? '#f59e0b' : '#ef4444', 
    color: 'white', 
    padding: '4px 8px', 
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold'
  }}>
    {score}点
  </span>
);

export default ScoreBadge;