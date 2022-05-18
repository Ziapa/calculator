import React, { MouseEvent } from 'react';

import 'App.scss';
import { useDispatch, useSelector } from 'react-redux';

import {
  allClearValueAC,
  InitialAppStateType,
  setCalculationValueAC,
  setEqualsAC,
  setOperatorAC,
} from 'redux/app-reducer';
import { AppRootStateType } from 'redux/store';

const App: React.FC<any> = () => {
  const appData = useSelector<AppRootStateType, InitialAppStateType>(state => state.app);
  const dispatch = useDispatch();

  const buttonsHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    // console.log(event.currentTarget.value);

    if (event.currentTarget.id === 'number') {
      dispatch(setCalculationValueAC(event.currentTarget.value));
    } else if (event.currentTarget.value === 'C') {
      dispatch(allClearValueAC());
    } else if (event.currentTarget.id === 'operator') {
      dispatch(setOperatorAC(event.currentTarget.value));
    } else if (event.currentTarget.id === 'equals') {
      dispatch(setEqualsAC());
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="display_result">{appData.previousOperation}</div>
          <div className="display_entryField">
            {appData.finish ? appData.secondValue : appData.firstValue}
            {appData.resultOperation}
          </div>
          <div className="buttons">
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
    </div>
  );
};

export default App;
