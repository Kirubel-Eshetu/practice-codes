import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello master ninja Kirubel. This is the tekwando server!");
});

app.get("/products", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Book" },
    { id: 2, name: "Phone" },
  ]);
});

app.post("/products", (req: Request, res: Response) => {
  const newProduct = { id: 3, name: "Keyboard" };
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req: Request, res: Response)=> {
    const id = req.params.id;
    res.json({ message: `Product ${id} has been updated successfully`})
})

app.delete("/products/:id", (req: Request, res: Response)=> {
    const id = req.params.id;
    res.json( {message: `Product ${id} has been deleted succesfully!`})
})

app.use(express.static("public"));

app.listen(2300, () => {
  console.log("Server is running on Port 4000");
});
