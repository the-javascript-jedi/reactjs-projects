interface CoinProps {
  name: string;
  icon: string;
  price: number;
  symbol: string;
}

const Coin = ({ name, icon, price, symbol }: CoinProps) => {
  return (
    <div className="coin">
      <h1> Name: {name}</h1>
      <img src={icon} />
      <h3> Price: {price}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
  );
};

export default Coin;
