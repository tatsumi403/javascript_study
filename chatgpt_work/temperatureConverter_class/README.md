<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

以下の要件に基づいて TemperatureConverter クラスを作成してください。

## プロパティ:

特にプロパティは必要ありません。

## メソッド:

**celsiusToFahrenheit(celsius):**  
摂氏温度 (celsius) を華氏温度に変換して返すメソッド。  
計算式: 華氏温度 = 摂氏温度 \* 9/5 + 32

**fahrenheitToCelsius(fahrenheit):**  
華氏温度 (fahrenheit) を摂氏温度に変換して返すメソッド。  
計算式: 摂氏温度 = (華氏温度 - 32) \* 5/9

> // 例: TemperatureConverter クラスのインスタンス化とメソッドの使用例  
> let converter = new TemperatureConverter();  
> console.log(converter.celsiusToFahrenheit(0)); // 32  
> console.log(converter.fahrenheitToCelsius(32)); // 0

### 要件

- TemperatureConverter クラスを作成し、上記のメソッドを実装してください。
- インスタンスを作成し、いくつかの温度変換を行って結果をコンソールに表示してください。
