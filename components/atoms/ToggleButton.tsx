interface ToggleButtonProps {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ options, selected, onChange }) => (
  <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
    {options.map((option) => (
      <button
        key={option.value}
        style={{
          padding: '16px 32px',
          border: '2px solid #00FFFF',
          backgroundColor: selected === option.value ? '#00FFFF' : 'transparent',
          color: selected === option.value ? '#000000' : '#FFFFFF',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Staatliches, system-ui, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: selected === option.value 
            ? '0 0 25px rgba(0, 255, 255, 0.6)' 
            : '0 0 10px rgba(0, 255, 255, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (selected !== option.value) {
            e.currentTarget.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
          }
        }}
        onMouseLeave={(e) => {
          if (selected !== option.value) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
          }
        }}
        onClick={() => onChange(option.value)}
      >
        {option.label}
      </button>
    ))}
  </div>
);

export default ToggleButton;