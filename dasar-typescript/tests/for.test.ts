describe('for', function ()  {
    it('should support for', function() {
        const names: string[] = ['Eko', 'Silbert', 'Ara'];


        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
    
        for(const name of names) {
            console.info(name);
        }
    
        for (const index in names) {
            console.info(names[index]);
        }
    });

    it('support while loop', function() {
        let counter: number = 0;

        while (counter < 10) {
            console.info(counter);
            counter++;
        }

    });

    it('support do while', function() {
        let counter: number = 0;
        do {
            counter++;

            if (counter == 10) {
                break;
            }

            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        }while(counter < 10);
    });
});