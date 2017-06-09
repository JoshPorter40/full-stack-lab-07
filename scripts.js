var diceArray = []; //Stores all the die objects created from clicking generate die

document.addEventListener('DOMContentLoaded', function() { //When the page is loaded run this function
    var container = document.createElement('div'); //created a new div called container
    document.body.appendChild(container); //Added the container to the body tag of the document
    function Die () { //created a class oop called Die
        this.dice = document.createElement('div'); //created a div for the generated die
        this.dice.className = 'dice'; //gave all the die created a classname of 'dice'
        this.para = document.createElement('p'); //created a paragraph for the generated die
        container.appendChild(this.dice); //made the container div a parent of the this.dice div
        this.dice.appendChild(this.para); //made the this.dice div a parent of the this.para <p>
        this.roll();

    }
    Die.prototype.roll = function() { // created function roll
        this.value = Math.floor(Math.random() * 6 + 1); //generates a random number 1-6
        this.para.innerHTML = this.value; // inserts the random value into the die
    }
    var btn = document.getElementById('button1');
    btn.addEventListener('click', function () {
        var dieRoll = new Die();
        diceArray.push(dieRoll);
    });
    var btn = document.getElementById('button2');
    btn.addEventListener('click', function () {
        for (var i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    })
});