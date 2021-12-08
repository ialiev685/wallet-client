export const totalBalance = state => state.finance.totalBalance;

export const isFetchingTotalBalance = state =>
  state.finance.isFetchingTotalBalance;

export const getIsFinanceLoader = state => state.finance.isLoading;
export const getIsError = state => state.finance.isErrorTransation;
export const getErrorMessage = state => state.finance.errorMessage;
