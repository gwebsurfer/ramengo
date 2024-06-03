export function getActiveIdsFromLocalStorage() {
  return {
    activeBrothId: localStorage.getItem('brothsId'),
    activeProteinId: localStorage.getItem('proteinsId'),
  };
}

export function removeItemsFromLocalStorage() {
  localStorage.removeItem('brothsId');
  localStorage.removeItem('proteinsId');
}
