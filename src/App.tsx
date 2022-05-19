import React from 'react';

import 'App.scss';

import { Calculator } from 'components/Calculator/Calculator';

const App: React.FC<any> = () => (
  <div className="App">
    <Calculator />
  </div>
);

export default App;
