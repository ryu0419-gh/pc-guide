interface ToggleButtonProps {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ options, selected, onChange }) => (
  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
    {options.map((option) => (
      <button
        key={option.value}
        style={{
          padding: '12px 24px',
          border: '2px solid #d1d5db',
          backgroundColor: selected === option.value ? '#2563eb' : 'white',
          color: selected === option.value ? 'white' : '#374151',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          borderColor: selected === option.value ? '#2563eb' : '#d1d5db'
        }}
        onClick={() => onChange(option.value)}
      >
        {option.label}
      </button>
    ))}
  </div>
);
export default ToggleButton;