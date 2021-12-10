export const totalBalance = state => state.finance.totalBalance;
export const data = state => state.finance.data;
export const dataByCategory = state => state.finance.dataByCategory;

export const getIsFinanceLoader = state => state.finance.isLoading;
export const getIsError = state => state.finance.isErrorTransation;
export const getErrorMessage = state => state.finance.errorMessage;
