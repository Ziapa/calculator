import React, { MouseEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import s from './Calculator.module.scss';

// import s from '../Calculator.module.scss';

import {
  allClearValueAC,
  InitialAppStateType,
  setCalculationValueAC,
  setEqualsAC,
  setOperatorAC,
} from 'redux/app-reducer';
import { AppRootStateType } from 'redux/store';

export const Calculator: React.FC<any> = () => {
  const appData = useSelector<AppRootStateType, InitialAppStateType>(state => state.app);
  const dispatch = useDispatch();

  const buttonsHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    // console.log(event.currentTarget.value);

    const equals = (
      firstValue: string,
      operator: string,
      secondValue: string,
    ): string => {
      let result = '';
      switch (operator) {
        case '+':
          result = String(+firstValue + +secondValue);
          return result;
        case '-':
          result = String(+firstValue - +secondValue);
          return result;
        case '×':
          result = String(+firstValue * +secondValue);
          return result;
        case '/':
          result = String(+firstValue / +secondValue);
          return result;
        default:
          return result;
      }
    };

    if (event.currentTarget.id === 'number') {
      dispatch(setCalculationValueAC(event.currentTarget.value));
    } else if (event.currentTarget.value === 'C') {
      dispatch(allClearValueAC());
    } else if (event.currentTarget.id === 'operator') {
      dispatch(setOperatorAC(event.currentTarget.value));
    } else if (event.currentTarget.id === 'equals') {
      dispatch(
        setEqualsAC(equals(appData.firstValue, appData.operator, appData.secondValue)),
      );
    }
  };

  return (
    <div className={s.calculator}>
      <div className={s.calculator_display}>
        <div className={s.calculator_display__previousOperation}>
          {appData.previousOperation}
        </div>
        <div className={s.calculator_display__entryField}>
          {appData.finish ? appData.secondValue : appData.firstValue}
        </div>
        <div className={s.calculator_buttons}>
          {appData.buttons.map(({ value, id, type }) => (
            <button
              onClick={buttonsHandler}
              key={id}
              type="button"
              id={type}
              value={value}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
