describe('array', function () {
    it('should same with javascript', function () {
        const names: String[] = ['budi', 'joko'];
        const values: Number[] = [1,2,3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<String> = ['membaca', 'menulis'];
        console.info(hobbies)
        console.info(hobbies[0])

        // hobbies[0] = 'main game'; / error
    });
});