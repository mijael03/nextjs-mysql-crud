import { pool } from "../../../config/db"

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return await saveProduct(req, res)
        case 'GET':
            return await getProducts(req, res)

    }
}
const saveProduct = async (req, res) => {
    const { name, description, price } = req.body
    const [result] = await pool.query('INSERT INTO product SET ?', {
        name,
        description,
        price
    })
    return res
        .status(200)
        .json({ name, price, description, id: result.insertId })
}
const getProducts = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM product')
    return res.status(200).json(result)
}