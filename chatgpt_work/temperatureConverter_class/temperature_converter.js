class TemperatureConverter {
  // メソッド
  // 摂氏温度を華氏温度温度に変換して返すメソッド
  celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
  }

  // 華氏温度を摂氏温度に変換して返すメソッド
  fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

// TemperatureConverterクラスのインスタンス化
let converter = new TemperatureConverter();

// celsiusToFahrenheitメソッドを呼び出してコンソールに表示
console.log(converter.celsiusToFahrenheit(25));
console.log(converter.fahrenheitToCelsius(77));
