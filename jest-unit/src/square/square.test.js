const square = require('./square')

describe('сценарии для square', ()=>{
    let mockValue;
    // перед каждым
    beforeEach(()=>{
        mockValue = Math.random();
        // добавили в БД
    })
    // один раз перед всеми
    beforeAll(()=>{

    })
    test("корректное значение", ()=>{
        // expect(square(2)).toBe(4);
        // expect(square(-1)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(1);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test("корректное значение", ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)

    })

    afterEach(()=>{
        // удалили из БД
        jest.clearAllMocks()
    })
    afterAll(()=>{

    })

})