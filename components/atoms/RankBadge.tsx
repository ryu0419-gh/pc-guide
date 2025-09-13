interface RankBadgeProps {
  rank: 'budget' | 'recommended' | 'highend';
}

const RankBadge: React.FC<RankBadgeProps> = ({ rank }) => {
  const styles = {
    budget: { 
      backgroundColor: '#22C55E', // 緑 - 安価・エコ
      label: 'コスパ重視',
      shadow: '0 0 15px rgba(34, 197, 94, 0.5)'
    },
    recommended: { 
      backgroundColor: '#3B82F6', // 青 - 安心・推奨
      label: '推奨',
      shadow: '0 0 15px rgba(59, 130, 246, 0.5)'
    },
    highend: { 
      backgroundColor: '#EF4444', // 赤 - 高性能・高価
      label: 'ハイエンド',
      shadow: '0 0 15px rgba(239, 68, 68, 0.5)'
    }
  };

  return (
    <span style={{ 
      backgroundColor: styles[rank].backgroundColor,
      color: '#FFFFFF', 
      padding: '6px 12px', 
      borderRadius: '8px',
      fontSize: '12px',
      fontWeight: 'bold',
      boxShadow: styles[rank].shadow,
      fontFamily: 'Staatliches, system-ui, sans-serif'
    }}>
      {styles[rank].label}
    </span>
  );
};

export default RankBadge;