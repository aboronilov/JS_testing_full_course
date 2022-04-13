const mapArrToStrings = require('./mapArrToStrings')

describe('сценарии для mapArrToStrings', ()=>{
    test("только цифры в массиве", ()=>{
        expect(mapArrToStrings([1,2,3])).toEqual(['1','2','3']);
    })
    test("цифры и буквы в массиве", ()=>{
        expect(mapArrToStrings([1,2,3,'a'])).toEqual(['1','2','3']);
    })
    test("пустой массив", ()=>{
        expect(mapArrToStrings([])).toEqual([]);
    })
    test("отрицание неверного решения", ()=>{
        expect(mapArrToStrings([1,2,3,4])).not.toEqual(['1','2','3']);
    })
})
