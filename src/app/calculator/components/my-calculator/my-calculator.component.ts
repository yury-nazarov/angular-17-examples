import { Component } from '@angular/core';

interface CalcGroup {
  first: CalcVar,
  second: CalcVar,
  operations: CalcOperations,
}

interface CalcVar {
  value:  number,
  modificator: CalcModifiers,
}

// enum - строгое перечисление
enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcMidifiers = CalcModifiers;
  // Массив для того, что бы можно было добавить несколько калькуляторов
  public calcGroups: CalcGroup[] = [
    // Значения по умолчанию
    {
      first: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      operations: CalcOperations.plus
    },
  ];

  // История с инициализируемым значением - пустой массив
  public history: string[] = [];

  public operationsBetweenGroups: CalcOperations[] = [];

  public result?: number;

  // 15-24
  // Метод для добавлении еще одной группы калькулятора
  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      operations: CalcOperations.plus
    })

    this.operationsBetweenGroups.push(CalcOperations.plus);
  }
  // Метод для удаления группы калькулятора
  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }

  // 27-12
  // Операции между группами калькуляторов
  public calcGroup() {
    let result = 0;
    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operations);
      } else {
        let tempResult = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operations);
        result = this.calc(result, tempResult, this.operationsBetweenGroups[i - 1]);
      }
      tempHistory.push(
        `(
          ${group.first.modificator !== this.calcMidifiers.none ? group.first.modificator: ''} ${group.first.value}
          ${group.operations}
          ${group.second.modificator !== this.calcMidifiers.none ? group.second.modificator: ''} ${group.second.value}

          )`
      )
      tempHistory.push(`= ${result}`);
      this.history.push(tempHistory.join(' '));
      this.result = result;
    })

  }

  // Операции с модификатором
  public calcValueWithModif(value: CalcVar) {
    switch (value.modificator) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
    }
  }

  // Операции в рамках одного блока калькулятора
  public calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
    }
  }
}
