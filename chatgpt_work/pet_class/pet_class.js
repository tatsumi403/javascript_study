class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isHungry = true;
    }

    // メソッド
    // ペットに餌を与えてisHungryプロパティをfalseに変えてメッセージを出力
    feed() {
        this.isHungry = false;
        console.log(`${this.name} is no longer hungry.`);
    }

    // ペットと遊ぶ
    play() {
        if (this.isHungry) {
            console.log(`${this.name} is too hungry to play.`);
        } else {
            console.log(`${this.name} is playing happily.`);
        }
    }

    // ペットと話す
    speak() {
        if (this.type === 'dog') {
            console.log('Woof!');
        } else if (this.type === 'cat') {
            console.log('Meow!');
        } else {
            console.log('Hmm!');
        }
    }
}

const myPet = new Pet('Moco', 'dog');
myPet.play();
myPet.feed();
myPet.play();
myPet.speak();