describe('Object', function() {
    it('should support in typescript', function () {

        // Object Type disarankan jika kasusnya sederhana
        const person: {id: string, name: string, description?: string[]} = {
            id: "1",
            name: "ara",
        };

        console.info(person);

        person.id = "2";
        person.name = "sil";

        // person.address = 'Lousiana'; /error

        console.info(person);

    });
}); 