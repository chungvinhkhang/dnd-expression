
export type Operator = { name: string, precedence: number, isParenthesis: boolean };

export type Operand = { name: string };

export function isOperator(op: Operator | Operand): op is Operator {
    return (op as Operator).precedence !== undefined;
}

export const Operators: { [key: string] : Operator } = {
    Plus: {
        name: '+',
        precedence: 1000,
        isParenthesis: false
    },
    Minus: {
        name: '-',
        precedence: 1000,
        isParenthesis: false
    },
    Multiply: {
        name: '*',
        precedence: 100,
        isParenthesis: false
    },
    Divide: {
        name: '/',
        precedence: 100,
        isParenthesis: false
    },
    LeftParenthesis: {
        name: '(',
        precedence: 10,
        isParenthesis: true
    },
    RightParenthesis: {
        name: ')',
        precedence: 10,
        isParenthesis: true
    }
} as const;