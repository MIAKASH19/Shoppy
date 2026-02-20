const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts (){
    const res = await fetch(`${BASE_URL}/products`)
    if (!res) {
        throw new Error("Failed to Fetch Product")
    }
    return res.json();
}

export async function getProductById (id){
    const res = await fetch(`${BASE_URL}/products/${id}`)
    if (!res) {
        throw new Error("Failed to Fetch Product")
    }
    return res.json();
}

export async function getCategories (){
    const res = await fetch(`${BASE_URL}/products/categories`)
    if (!res) {
        throw new Error("Failed to Fetch Categories")
    }
    return res.json();
}