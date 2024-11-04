describe('Any', function () {
    it('should support in typescript', function () {
        const person: any = {
            id: 1,
            name: "Ara sil",
            age: 21,
        };

        person.age = 22;
        person.address = 'Indonesia';

        console.info(person);
    });
});