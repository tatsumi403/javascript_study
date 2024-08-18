<img src="https://img.shields.io/badge/-JavaScript-000000.svg?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E">

ペットを管理するための Pet クラスを作成してください。次の要件を満たすようにクラスを設計してください。

## コンストラクタ:

- コンストラクタは name（ペットの名前）と type（ペットの種類）の2つの引数を受け取り、それらをクラスのプロパティとして設定してください。  

- name と type は文字列で、クラスのインスタンスが作成されるときに必ず設定されるべきです。

## プロパティ:

- name: ペットの名前（文字列）

- type: ペットの種類（文字列）

- isHungry: ペットが空腹かどうかを示すブール値（デフォルト値は true）

## メソッド:

- feed(): このメソッドはペットに餌を与えるものとします。このメソッドが呼び出されると、isHungry プロパティを false に変更し、<ペットの名前> is no longer hungry. というメッセージをコンソールに出力してください。

- play(): このメソッドはペットと遊ぶものとします。isHungry プロパティが true の場合、<ペットの名前> is too hungry to play. というメッセージをコンソールに出力してください。そうでない場合、<ペットの名前> is playing happily. というメッセージを出力してください。

## 追加要件:

speak(): このメソッドはペットが話す（または鳴く）動作をシミュレートします。  
ペットの type に応じて異なるメッセージをコンソールに出力してください。  
例えば、type が "dog" ならば "Woof!"、type が "cat" ならば "Meow!" のようにします。

> const myPet = new Pet('Buddy', 'dog');  
> myPet.play(); // 出力: Buddy is too hungry to play.  
> myPet.feed(); // 出力: Buddy is no longer hungry.  
> myPet.play(); // 出力: Buddy is playing happily.  
> myPet.speak(); // 出力: Woof!

この問題では、JavaScriptのクラスの基本的な構造やプロパティ、メソッドの作成方法を練習することが目的です。
    