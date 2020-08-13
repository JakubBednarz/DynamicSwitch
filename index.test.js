const {  Switch } = require("./index");

const instance1 = new Switch();
const value1 = "Lorem Ipsum";

instance1.add(value1.length > 15, ()=>{
    console.log("value is to long")
})

instance1.add(value1.includes('ą'), ()=>{
    console.log("value should not have polish signs")
})

instance1.add(!isNaN(value1), ()=>{
    console.log("value is a number")
})

const instance2 = new Switch();
const value2 = 50;
const callback = jest.fn();

instance2.add(value2 > 10, ()=>{
    console.log("value is to low")
})

instance2.add(value2 < 70, ()=>{
    console.log("Value is to high")
})

instance2.add(isNaN(value2), callback())

test('Is isValid returning true with 3 false cases, and false with 1 false and 2 true cases', () => {
    expect(instance1.isValid()).toBeTruthy()
    expect(instance2.isValid()).not.toBeTruthy()
});

test('Is isValid using callback when there are false cases', () => {
    expect(callback).toHaveBeenCalled()
});

test('Is isValid clearing cases and conditions after it is called and is add method working after isValid', () => {
    instance1.add(true, callback);
    expect(instance1.conditions).toHaveLength(1);
    expect(instance1.cases).toHaveLength(1);
});

test('Is isValid working after being called, with 3 true cases', () => {
    instance1.add(true, callback);
    instance1.add(true, callback);
    expect(instance1.isValid()).not.toBeTruthy()
});

