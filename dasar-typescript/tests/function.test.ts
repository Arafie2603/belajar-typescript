describe('Function', function () {
    /**
     * 1. Mendukung default value seperti di JS
     * 2. Mendukung rest parameter (variabel argument)
     * 3. Ketika mendefine parameter di function TS kita wajib memberikan parameter
     * pada function tersebut
     * 4. TS mendukung optional parameter pada function, itu berarti kita tidak wajib
     * mengisi parameter yang diberi optional symbol(?)
     * 5. Namun jika parameter optional yang tidak diisi value di returnkan akan memiliki
     * default undefined
     */
    it('should support in typescript', function () {
        function sayHello(name: string) : string {
            return `Hello ${name}`;
        }

        expect(sayHello('ara')).toBe('Hello ara');
    });

    it('should support default value', function () {
        function sayHello(name: string = "Guest") : string {
            return `Hello ${name}`;
        } 

        expect(sayHello()).toBe("Hello Guest");
    });

    it('should support rest parameter', function () {
        function sum(...values: number[]) : number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1,2,3)).toBe(6);
    });

    it('should suppport optional parameter', function () {
        function sayHello(fName: string, lname?: string) : string {
            if (lname) {
                return `Hello ${fName} ${lname}`;
            } else {
                return `Hello ${fName}`;
            }
        }

        expect(sayHello('eko')).toBe('Hello eko');
        expect(sayHello('ara')).toBe('Hello ara');
    });
    /**
     * 1. Function overloading di TS
     */

    it('should support function overloading', function () {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }else if (typeof value === 'number') {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe('ara')).toBe('ARA');
    });

    /**
     * 1. Function parameter di mana function memiliki parameter function lainnya
     * konsepnya sama kayak di JS
     * 2. TS support anonymous function di function parameter
     */

    it('should support function parameter', function () {
        function sayHello(name: string, filter: (name: string) => string) : string {
            return `Hello, ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('ara', toUpper)).toBe('Hello, ARA');

        // function biasa (anonymous function)
        expect(sayHello('ara', function (name: string): string {
            return name.toUpperCase();
        })).toBe('Hello, ARA');

        // arrow function
        expect(sayHello('ara', (name: string): string => name.toUpperCase())).toBe('Hello, ARA');
    }); 
    /**
     * 1. Latihan studi case func overloading TS
     */
    interface User {
        id: number;
        email: string;
        name: string;
    }

    const users: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ]

    function getUser(identifier: number): User | undefined;
    function getUser(identifier: string): User | undefined;
    function getUser(identifier: number | string): User | undefined {
        if (typeof identifier === 'number') {
            return users.find(user => user.id === identifier);
        } else if (typeof identifier === 'string') {
            return users.find(user => user.email === identifier);
        }
        return undefined;
    }

    const userById = getUser(1);
    const testById = getUser(1);
    expect(userById).toBe(testById);
});