<<<<<<< HEAD
import express from "express";
import { Category } from "../entities/Category";

const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({
      relations: { products: true },
    });
  
    return res.json(categories);
  } catch {
    return res.status(404);
  }
});

=======
import express from "express";
import { Category } from "../entities/Category";

const router = express.Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({
      relations: { products: true },
    });
  
    return res.json(categories);
  } catch {
    return res.status(404);
  }
});

>>>>>>> a31134411f04b6fc26e2b6bc2df67123841ebd68
export { router as CategoriesRouter };