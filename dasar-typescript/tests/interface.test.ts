import { Seller } from "../src/seller";
import { Person } from "../src/person";
import { Employee, Manager } from "../src/employee";
describe('Interface', function () {
    /**
     * 1. Interface merupakan cara yang paling banyak digunakan untuk tipe data kompeleks
     * 2. Interface dapat memiliki readonly properties
     * 3. Interface function dapat digunakan untuk declare param
     */
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: 'Toko Aotearoa',
            nib: "2012121",
            npwp: "212121",
        };

        seller.name = 'lastar'; 
        console.info(seller);
    });

    it('should support function interface', function () {
        interface AddFunction {
            (value1: number, value2: number) : number;
        }

        const add: AddFunction = (value1: number, value2: number) : number => {
            return value1 + value2;
        };

        expect(add(1,2)).toBe(3);
    });

    it('should support indexable interface', () => {
        interface stringArray {
            [index: number]: string;
        }

        const names: stringArray = ['austand', 'sil'];
        console.info(names);
    });

    it('should support indexable interface for non number index', function () {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            'name': 'ara',
            'address': 'Germany',
        };

        expect(dictionary['name']).toBe('ara');
        expect(dictionary['address']).toBe('Germany');
    });
    it('should support extends interface', function () {
        const employee: Employee = {
            id: 1,
            name: 'Ara',
            division: 'IT',
        };

        console.info(employee);

        const manager: Manager = {
            id: 2,
            name: 'Sil',
            division: 'IT',
            numberOfEmployees: 11,
        };

        console.info(manager);
    });
    /**
     * 1. Kenapa tidak bisa menggunakan this pada arrow function (af)? karena af punya konsep mengunci this di luar konteksnya
     * jadi, jika kita gunain this pada af maka dia akan reference ke konteks terluar dari object yang mendefinisikannya (dalam artian case ini, global)
     * 2. Instead of using this di af, akses langsung aja attribut dari si person dengan gunain -> person.name maka, akan lakuin hal yang sama
     * ketika make func biasa yaitu this.name
     */

    it('should support function in interface', function () {
        const person: Person = {
            name: 'Austand',
            sayHello: (name: string): string => {
                return `Hello ${name}, my name is ${person.name}`;
            }
        }
        console.info(person.sayHello('Ara'));
    });

    /**
     * 1. Intersection Type 
     */
    it('should support intersection types', function () {
        interface hasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasId & hasName;

        const domain: Domain = {
            id: '1',
            name: 'Ara',
        };

        console.info(domain);
    });
    /**
     * 1. Ketika gunain Type Assertions Typescript tidak menghiraukan apakah datanya cocok
     * atau tidak antara person dengan interface Person, jadi jika kita tidak gunain
     * properties dan method yang ada di Person itu tidak menyebabkan error, jadi hati2 lah dalam
     * gunain Type Assertion jangan lupa cek!
     * 2. Namun jika kita mencoba akses properties atau method di Person yang ga kita define di person
     * maka akan menyebabkan error, tidak percaya? coba saja 
     */

    it('should support type assertions', function () {
        const person: any = {
            name: 'ara',
            age: 21,
        };

        const person2: Person = person as Person;

        person2.sayHello("ara");
    });

    it('should ')
});