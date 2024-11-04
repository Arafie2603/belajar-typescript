describe('if statement', function () {
    it('should support in TS', function () {
        const example = 90;

        if (example > 80) {
            console.info('good');
        } else if (example > 60) {
            console.info('not bad');
        } else {
            console.info('try again');
        }
    });

    it('should support ternary operator', function () {
        const value = 80;
        const say = value >= 75 ? "congrats": "Trt again";
        console.info(say);
    });

    it('should support switch statement', function () {
        function sayHai(name: string): string {
            switch(name) {
                case 'ara':
                    return `hai ara`;
                default: 
                    return `hai`;
            }
        }
        console.info(sayHai('ara'));
    });
});