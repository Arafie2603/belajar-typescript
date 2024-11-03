describe('Optional Parameter', function () {
    it('should support null and undefined', function () {
        /**
         * 1. null dan undefined berbeda
         * 2. null merupakan tipe data di Javascript itu sebabnya kita harus mencantumkan
         * tipe data null pada function sayHello jika ingin menambahkannya
         * 3. undefined tidak perlu dideklar karena bukan tipe data, melainkan nilai default
         * jika suatu var yang tidak diinisialisasi
         */
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info('helo');
            }
        }

        sayHello('ara');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});