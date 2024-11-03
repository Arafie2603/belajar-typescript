describe('Union Type', function () {
    it('should support in typescript', function () {
        let sampel: number | boolean | string = "ara";
        console.info(sampel);

        sampel = 100;
        console.info(sampel);
        sampel = true;
        console.info(sampel);
    });

    it('should support in typescript', function () {
        function process(value: number | string | boolean) {
            if (typeof value == 'string') {
                return value.toUpperCase();
            }else if (typeof value == 'number') {
                return value + 2;
            }else {
                return !value;
            }
        }

        expect(process('ara')).toBe('ARA');
        expect(process(20)).toBe(22);
        expect(process(true)).toBe(false);
    });
}); 