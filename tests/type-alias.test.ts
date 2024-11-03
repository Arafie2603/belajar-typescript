import {Category, Product} from "../src/type-alias";
describe('Type alias', function () {
    it('should support in Typescript', function () {
        const category : Category = {
            id: 1,
            name: "handphone",
        };

        const product: Product = {
            id: "1",
            name: "Samsung s20",
            price: 200000,
            category: category,
        };

        // product.descript = "Test" / error

        console.info(category);
        console.info(product);
    });
});