// Services
import axios from "axios";
import type { UpdateProduct, NewProduct } from "../types/product";

const base_URL = "https://fakestoreapi.com/products";

export async function getAllProducts () {
    const response = await axios.get(base_URL)
        return response.data;
}

export async function getProductById (id:number) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function addProduct(newProduct:NewProduct) {
    try {
        const response = await axios.post(base_URL, newProduct);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function updateProduct( id: number, updatedProduct: UpdateProduct ) {
    try {
        const response = await axios.patch(
            `https://fakestoreapi.com/products/${id}`, updatedProduct
        );
        return response.data
    } catch (error) {
        console.log(error);
    }
}


export async function deleteProduct(id: number) {

    try {
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await axios.delete(url, {method: "DELETE"})
        if (!response) {
            throw new Error(`Response status: ${response}`);
        }
        return response
    } catch (error) {
        console.log(error)
    }
}
