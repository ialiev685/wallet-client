export const totalBalance = state => state.finance.totalBalance;
export const data = state => state.finance.data;
export const dataNewTransaction = state => state.finance.dataNewTransaction;
export const filter = state => state.finance.filter;
export const dataByCategory = state => state.finance.dataByCategory;
export const dataYears = state => state.finance.dataYears;

export const getIsFinanceLoader = state => state.finance.isLoading;
export const getIsError = state => state.finance.isErrorTransation;
export const getErrorMessage = state => state.finance.errorMessage;
export const getListCategories = state => state.finance.listCategories;
