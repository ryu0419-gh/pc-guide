interface RankBadgeProps {
  rank: 'recommended' | 'alternative' | 'budget';
}

const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => {
  const styles = {
    recommended: { backgroundColor: '#7c3aed', label: 'ハイエンド' },
    alternative: { backgroundColor: '#2563eb', label: '推奨' },
    budget: { backgroundColor: '#059669', label: 'コスパ重視' }
  };

  return (
    <span style={{ 
      backgroundColor: styles[rank].backgroundColor,
      color: 'white', 
      padding: '4px 8px', 
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold'
    }}>
      {styles[rank].label}
    </span>
  );
};

export default RankBadge;