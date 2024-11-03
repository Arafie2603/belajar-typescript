import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello ara', function () {
        expect(sayHello('ara')).toBe('Hello ara');
    });
});