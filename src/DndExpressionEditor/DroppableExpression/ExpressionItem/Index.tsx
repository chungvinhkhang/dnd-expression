import React from 'react';
import { isOperator, Operand, Operator } from '../../Base';
import './style.css';

export interface ExpressionItemProp {
    item: Operator | Operand;
    children?: React.ReactNode;
}

const ExpressionItem = ({item, children}: ExpressionItemProp) => <span className={`expression-item ${isOperator(item) ? 'operator': 'operand'}`}>
    {item.name}
    {children}
</span>

export default ExpressionItem;