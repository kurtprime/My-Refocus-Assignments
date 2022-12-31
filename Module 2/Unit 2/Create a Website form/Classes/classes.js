class Animal {
    animal = {
        nameAndSound: [{
            name: "cat",
            sound: "meow"
        }, {
            name: "dog",
            sound:"bark"
        }, {
            name:"bird",
            sound:"tweet"
        },{
            name:"tiger",
            sound:"rawr"
        }]
    }

    constructor () {

    }
    speak () {
        this.length = this.animal.nameAndSound.length;
        
        for (let index = 0; index < this.length; index++) {
            const name = this.animal.nameAndSound[index].name;
            const sound = this.animal.nameAndSound[index].sound;

            const sounds = sound.charAt(0).toUpperCase() + sound.slice(1)

            console.log(sounds +"! I am a "+name);
        }
        for (let index = 0; index < this.length; index++) {
            const name = this.animal.nameAndSound[index].name;
            const sound = this.animal.nameAndSound[index].sound;

            const nam = name.charAt(0).toUpperCase() + name.slice(1)

            console.log(nam+ ' is currently eating...');
        }


    }
}

const animal = new Animal();
animal.speak();