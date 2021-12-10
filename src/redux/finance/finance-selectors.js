export const totalBalance = state => state.finance.totalBalance;
export const data = state => state.finance.data;

export const getIsFinanceLoader = state => state.finance.isLoading;
export const getIsError = state => state.finance.isErrorTransation;
export const getErrorMessage = state => state.finance.errorMessage;
export const getListCategories = state => state.finance.listCategories;
