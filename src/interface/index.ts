export interface IStateRequest<T> {
  isLoading: boolean;
  data: null | T[];
  isError: null | object;
}
