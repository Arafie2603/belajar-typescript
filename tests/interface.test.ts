import {Seller} from "../src/seller"
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
});