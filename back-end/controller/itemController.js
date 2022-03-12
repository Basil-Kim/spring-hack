const asyncHandler = require('express-async-handler')

// @desc Get Items
// @route GET/fridge/items
// @access private
const getItems = asyncHandler (async(req, res) => {
  res.status(200).json({ message: 'Items obtained' })
})

// @desc Post Items
// @route POST/fridge/items
// @access private
const postItem = asyncHandler (async (req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('item name cannot be null')
  }
  res.status(200).json(req.body)

})

// @desc Update Items
// @route PUT/fridge/items/:id
// @access private
const updateItem = asyncHandler (async (req, res) =>{
  
  
  res.status(200).json({message: `${req.params.id} item updated.`})

})
// @desc Delete Items
// @route DELETE/fridge/items/:id
// @access private
const deleteItem = asyncHandler(async (req, res) =>{
  res.status(200).json({message: `${req.params.id} item deleted.`})

})





module.exports = {
  getItems, postItem, updateItem, deleteItem
}
