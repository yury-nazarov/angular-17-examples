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
  divide = '/ '
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
}
