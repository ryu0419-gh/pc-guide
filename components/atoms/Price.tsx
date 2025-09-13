interface PriceProps {
  price: string;
}

const parsePrice = (priceString: string): number => {
  return parseInt(priceString.replace(/,/g, ''));
};

const Price: React.FC<PriceProps> = ({ price }) => {
  const numericPrice = parsePrice(price);
  
  return (
    <div style={{ 
      color: '#00FFFF', 
      fontSize: '24px', 
      fontWeight: 'bold', 
      marginBottom: '15px',
      textShadow: '0 0 15px #00FFFF',
      fontFamily: 'Staatliches, system-ui, sans-serif',
      letterSpacing: '1px'
    }}>
      ¥{numericPrice.toLocaleString()}
    </div>
  );
};

export default Price;