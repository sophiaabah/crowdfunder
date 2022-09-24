import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x7B24ec913c6a5019b6E88A46654FE14Ae985c2fd"
);

export default instance;
