type ActionsType =
  | SetCalculationValueACType
  | AllClearValueACType
  | SetOperatorACType
  | SetEqualsACType;

export type InitialAppStateType = {
  firstValue: string;
  secondValue: string;
  operator: string;
  resultOperation: string;
  finish: boolean;
  previousOperation: string;
  buttons: Array<{ value: string; id: number; type: string }>;
};

const initialState = {
  firstValue: '0',
  secondValue: '',
  operator: '',
  resultOperation: '',
  finish: false,
  previousOperation: '',
  buttons: [
    { value: 'C', id: 1, type: 'operator' },
    { value: '√', id: 2, type: 'operator' },
    { value: '%', id: 3, type: 'operator' },
    { value: '/', id: 4, type: 'operator' },
    { value: '7', id: 5, type: 'number' },
    { value: '8', id: 7, type: 'number' },
    { value: '9', id: 8, type: 'number' },
    { value: '×', id: 9, type: 'operator' },
    { value: '4', id: 10, type: 'number' },
    { value: '5', id: 11, type: 'number' },
    { value: '6', id: 12, type: 'number' },
    { value: '-', id: 13, type: 'operator' },
    { value: '1', id: 14, type: 'number' },
    { value: '2', id: 15, type: 'number' },
    { value: '3', id: 16, type: 'number' },
    { value: '+', id: 18, type: 'operator' },
    { value: '00', id: 19, type: 'number' },
    { value: '0', id: 20, type: 'number' },
    { value: ',', id: 21, type: 'number' },
    { value: '=', id: 22, type: 'equals' },
  ],
};

export type SetCalculationValueACType = ReturnType<typeof setCalculationValueAC>;
export type AllClearValueACType = ReturnType<typeof allClearValueAC>;
export type SetOperatorACType = ReturnType<typeof setOperatorAC>;
export type SetEqualsACType = ReturnType<typeof setEqualsAC>;

export const appReducer = (
  state: InitialAppStateType = initialState,
  action: ActionsType,
): InitialAppStateType => {
  switch (action.type) {
    case 'ALL_CLEAR_VALUE':
      return {
        ...state,
        firstValue: '0',
        secondValue: '',
        operator: '',
        resultOperation: '',
        finish: false,
        previousOperation: '',
      };

    case 'SET_CALCULATION_FIRST_VALUE':
      if (state.firstValue === '0') {
        return { ...state, firstValue: action.payload };
      }
      if (state.secondValue === '' && state.operator === '') {
        return { ...state, firstValue: state.firstValue + action.payload };
      }
      if (state.secondValue === '0') {
        return { ...state, secondValue: action.payload, finish: false, firstValue: '0' };
      }
      return { ...state, secondValue: state.secondValue + action.payload };

    case 'SET_OPERATOR_VALUE':
      // if (state.secondValue === '0') {
      //   console.log(';');
      //   return {
      //     ...state,
      //     previousOperation: state.previousOperation + state.operator + state.firstValue,
      //   };
      // }
      return {
        ...state,
        // operator: action.payload,
        // finish: true,
        // previousOperation: state.previousOperation + state.operator + +state.firstValue,
        // secondValue: '0',
      };
    case 'SET_EQUALS':
      return {
        ...state,
        // previousOperation: `${state.firstValue} ${state.operator} ${state.secondValue}`,
        // firstValue: '0',
        // finish: false,
      };

    default:
      return state;
  }
};
// ActionCreators
export const allClearValueAC = () => ({ type: 'ALL_CLEAR_VALUE' } as const);
export const setEqualsAC = () => ({ type: 'SET_EQUALS' } as const);
export const setOperatorAC = (payload: string) =>
  ({ type: 'SET_OPERATOR_VALUE', payload } as const);
export const setCalculationValueAC = (payload: string) =>
  ({ type: 'SET_CALCULATION_FIRST_VALUE', payload } as const);
