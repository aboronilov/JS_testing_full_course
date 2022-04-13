const validateValue = require('./validateValue')

test("Валидация значения", ()=>{
    expect(validateValue(50)).toBe(true);
})

// можно сделать сценарий с разными параметрами
describe('сценарии для validateValue', ()=>{
    test("корректное значение", ()=>{
        expect(validateValue(50)).toBe(true);
    })
    test("меньше корректного значения", ()=>{
        expect(validateValue(-1)).toBe(false);
    })
    test("больше корректного значения", ()=>{
        expect(validateValue(101)).toBe(false);
    })
    test("пограничное значение снизу", ()=>{
        expect(validateValue(0)).toBe(true);
    })
    test("пограничное значение сверху", ()=>{
        expect(validateValue(100)).toBe(true);
    })
})
