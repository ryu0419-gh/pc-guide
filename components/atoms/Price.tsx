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
      color: '#22c55e', 
      fontSize: '18px', 
      fontWeight: 'bold', 
      marginBottom: '10px' 
    }}>
      ¥{numericPrice.toLocaleString()}
    </div>
  );
};

export default Price;