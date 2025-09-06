import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'purple' | 'small';
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

const ButtonBase: React.FC<ButtonProps> = ({ variant, children, onClick, fullWidth = false }) => {
  const styles = {
    primary: { backgroundColor: '#2563eb', color: 'white', padding: '10px 20px' },
    secondary: { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', padding: '10px 20px' },
    success: { backgroundColor: '#059669', color: 'white', padding: '10px 20px' },
    purple: { backgroundColor: '#7c3aed', color: 'white', padding: '10px 20px' },
    small: { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', padding: '4px 8px' }
  };

  return (
    <button 
      style={{ 
        ...styles[variant],
        border: variant === 'secondary' || variant === 'small' ? '1px solid #d1d5db' : 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        flex: fullWidth ? 1 : undefined,
        fontSize: variant === 'small' ? '12px' : '14px'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBase;