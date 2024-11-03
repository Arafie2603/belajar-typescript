describe('array', function () {
    it('should same with javascript', function () {
        const names: String[] = ['budi', 'joko'];
        const values: Number[] = [1,2,3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ['membaca', 'menulis'];
        console.info(hobbies)
        console.info(hobbies[0])

        // hobbies[0] = 'main game'; / error
    });

    it('should support tuple', function () {
        const person: readonly [string, string, number] = ['ara', 'sil', 21];
        console.info(person);
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);

        // person[0] = 'budi'; /error
    });
});