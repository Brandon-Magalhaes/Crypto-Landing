import Coins from "./Coins";

const Bitcoin = require("../../../../public/Images/Icons/BitcoinIcon.svg");
const Ethereum = require("../../../../public/Images/Icons/EthereumIcon.svg");
const Cardano = require("../../../../public/Images/Icons/CardanoIcon.svg");
const Tether = require("../../../../public/Images/Icons/TetherIcon.svg");
const Avalanche = require("../../../../public/Images/Icons/AvalancheIcon.svg");
const Algorand = require("../../../../public/Images/Icons/AlgorandIcon.svg");

export default function AllCoins() {
  return (
    <>
      <Coins
        name="Bitcoin"
        sigla="BTC"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Bitcoin Icone"
        src={Bitcoin.default}
      ></Coins>
      <Coins
        name="Ethereum"
        sigla="ETH"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Ethereum Icone"
        src={Ethereum.default}
      ></Coins>
      <Coins
        name="Cardano"
        sigla="ADA"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Cardano Icone"
        src={Cardano.default}
      ></Coins>
      <Coins
        name="Tether"
        sigla="USDT"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Tether Icone"
        src={Tether.default}
      ></Coins>
      <Coins
        name="Avalanche"
        sigla="AVAX"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Avalanche Icone"
        src={Avalanche.default}
      ></Coins>
      <Coins
        name="Algorand"
        sigla="ALGO"
        valorTotal="$1,046,899,935,348"
        valor="653,452"
        alt="Algorand Icone"
        src={Algorand.default}
      ></Coins>
    </>
  );
}
