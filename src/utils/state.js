let orderSuccess = false;

export function setOrderSuccess(value) {
  orderSuccess = value;
  console.log(orderSuccess);
}

export function getOrderSuccess() {
  console.log(orderSuccess);
  return orderSuccess;
}
