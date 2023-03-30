import request from "../index";

export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice",
  });
}
