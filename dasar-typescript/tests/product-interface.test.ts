import { Product, TransactionProduct } from "../src/product";

describe('Test Interface Function', function () {
    it('should support in TS', function () {
        interface TransactionProcess {
            (product: Product | TransactionProduct) : string;
        }

        const processTransaction: TransactionProcess = (product) => {
            if ('userId' in product && 'username' in product) {
                return `${product.username} berhasil melakukan proses pembayaran untuk produks ${product.title}`;
            }
            return `Gagal melakukan proses pembayaran pada ${product.title}`;
        }

        const transactionProduct: TransactionProduct = {
            id: 1,
            title: "Chat GPT Premium 1 abad",
            varian: "Platinum Infinity",
            harga: 7000,
            stock: 'tersedia',
            userId: 1,
            username: 'Austand Sil',
        };

        const result = processTransaction(transactionProduct);
        expect(result).toBe("Austand Sil berhasil melakukan proses pembayaran untuk produks Chat GPT Premium 1 abad")
    });
});

