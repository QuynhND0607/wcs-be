import { Router } from "express";
import { createCart, listCart, readCart } from "../controllers/cart";

const router = Router();
router.get("/cart",listCart);
router.post("/cart",createCart);
router.get("/cart/:id",readCart);

module.exports = router;