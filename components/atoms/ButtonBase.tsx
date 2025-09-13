import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'small';
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

const ButtonBase: React.FC<ButtonProps> = ({ variant, children, onClick, fullWidth = false }) => {
  const styles = {
    primary: { 
      backgroundColor: '#00FFFF', 
      color: '#000000', 
      padding: '12px 24px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
      border: '2px solid #00FFFF'
    },
    secondary: { 
      backgroundColor: 'transparent', 
      color: '#FFFFFF', 
      border: '2px solid #00FFFF', 
      padding: '12px 24px',
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
    },
    success: { 
      backgroundColor: '#22C55E', 
      color: '#FFFFFF', 
      padding: '12px 24px',
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
      border: '2px solid #22C55E'
    },
    small: { 
      backgroundColor: 'transparent', 
      color: '#CCCCCC', 
      border: '1px solid #666666', 
      padding: '6px 12px',
      fontSize: '12px'
    }
  };

  const hoverEffect = {
    transform: 'scale(1.05)',
    transition: 'all 0.2s ease'
  };

  return (
    <button 
      style={{ 
        ...styles[variant],
        borderRadius: '8px',
        cursor: 'pointer',
        flex: fullWidth ? 1 : undefined,
        fontSize: variant === 'small' ? '12px' : '16px',
        fontFamily: 'Staatliches, system-ui, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBase;