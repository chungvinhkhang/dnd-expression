import React, { useState } from 'react';
import './App.css';
import DndExpressionEditor from './DndExpressionEditor';
import { ExpressionItem } from './DndExpressionEditor/Base';
import { Param } from './DndExpressionEditor/ParamTree';
import _params from './params.json';

const params = _params as Param[];

function App() {
  const [expression, setExpression] = useState<ExpressionItem[]>([]);
  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Payroll main info</legend>
          <label>Payroll Code</label> <br/>
          <input type="text" /><br/>
          <label>Name</label> <br/>
          <input type="text" /><br/>
          <label>Description</label> <br/>
          <input type="text" /><br/>
          <label>Expression</label><br/>
          <DndExpressionEditor value={expression} params={params} onSave={expression => setExpression(expression)}/>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
