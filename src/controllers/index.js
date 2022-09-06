import ProductosDao from "../database/daos/ProductosDao.js"

export const getIndex = async (req, res) => {
    res.render("index", {
      data: await ProductosDao.mostrarTodos(),
      user: req.user.username,
    });
  
}

export const postIndex = async (req, res) => {
    let objNew = {
      title: req.body.title,
      price: req.body.price,
      thumbnail: req.body.thumbnail,
    };
    await ProductosDao.guardar(objNew)
    res.redirect('/')
  }