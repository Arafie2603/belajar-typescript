/**
 * Latihan 1: Interface Function 
 */

export interface Product {
    id: number;
    title: string;
    varian: string;
    harga: number;
    stock: 'tersedia' | 'tidak tersedia';
}

export interface TransactionProduct extends Product {
    userId: number;
    username: string;
}


