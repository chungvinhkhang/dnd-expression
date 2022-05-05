import React from 'react';
import { isOperator, ExpressionItem } from '../../Base';
import './style.css';

export interface ExpressionItemProp {
    item: ExpressionItem;
    children?: React.ReactNode;
}

const ExpressionItemSpan = ({item, children}: ExpressionItemProp) => <span className={`expression-item ${isOperator(item) ? 'operator': 'operand'}`}>
    {isOperator(item) ? item : item.name}
    {children}
</span>

export default ExpressionItemSpan;