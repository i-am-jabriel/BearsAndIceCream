// hey what's up
// I am starting my project

function iceCreamIsBetterThanBears(flavor) {
    console.log("mwahahaha");
}


function bearsAreBetterThanIceCream(func) {
    func();
    console.log('no way!');
}

function assignValueToMe(){
    this.me = Math.random();
    return iceCreamIsBetterThanBears();
}

bearsAreBetterThanIceCream(iceCreamIsBetterThanBears);
