import Cart from "../models/cart"




export const listCart = async(req,res) =>{
    try {
       const Carts = await Cart.find()
       res.json(Carts)
    } catch (error) {
        res.status(400).json({
            message: "khong lis duoc danh sach"
        })
    }
}
export const createCart = async(req,res) =>{
    try {
        const cartt = await new Cart(req.body).save()
        res.json(cartt)
    } catch (error) {
        res.status(400).json({
            message: "khong them duoc"
        })
    }
}
export const readCart = async(req,res) =>{
    try {
        const cartt = await Cart.findOne({_id: req.params.id})
        res.json(cartt)
    } catch (error) {
        res.status(400).json({
            message: "khong lay duoc chi tiet"
        })
    }
}