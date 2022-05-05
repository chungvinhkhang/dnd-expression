import React from 'react';
import { ExpressionItem, isOperator } from '../Base';
import "./style.css";

export interface ExpressionDisplayProp {
    expression: ExpressionItem[]
    onClick: () => void;
}

const ExpressionDisplay = ({expression, onClick}: ExpressionDisplayProp) => {
    return <div className="expression-display">
        {expression && expression.map((item, index) => <span 
            key={`expression-display-item-${index}`} 
            className={`expression-display-item ${isOperator(item)?'operator':'operand'}`}>
            {isOperator(item) ? item : item.name}
        </span>)}
        <button className="switch-edit-mode" onClick={onClick}>Edit</button>
    </div>
}

export default ExpressionDisplay;