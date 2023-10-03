import axios from "axios";
import { SUBGRAPH_URLS } from "./constants";

function getQueryByName(name, page, addr) {
  switch (name) {
    case "latest":
      return `
      {
        donations(orderBy: blockNumber, orderDirection: desc, first: 10) {
          id
          donator
          recipient
          token
          amount
          blockTimestamp
          tag
          memo
        }
      }
      `;
    case "personal":
      return `
      {
        donations(where: {recipient: "${addr}"}, orderBy: blockNumber, orderDirection: desc, first: 100, skip: ${page * 100}) {
          id
          donator
          recipient
          token
          amount
          blockTimestamp
          tag
          memo
        }
      }
      `;
    default:
      break;
  }
}

export async function subgraphGet(name, page, addr = "") {
  let query = getQueryByName(name, page, addr);
  let arr = Object.keys(SUBGRAPH_URLS).map(async (key) => {
    let url = SUBGRAPH_URLS[key];
    try {
      let ret = await axios.post(url, { query });
      return ret.data.data.donations.slice().map(v=>{
        return {
          ...v,
          network: key,
        }
      });
    } catch (error) {
      console.error('subgraphGet error', url, error);
      return null;
    }
  });

  let ret = await Promise.all(arr);
  // filter 
  ret = ret.filter((item) => item !== null);
  // concat
  ret = ret.reduce((acc, cur) => acc.concat(cur), []);
  // sort
  ret.sort((a, b) => b.blockTimestamp - a.blockTimestamp);
  // return
  return ret;
}

export function toShortAddress(address) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}
