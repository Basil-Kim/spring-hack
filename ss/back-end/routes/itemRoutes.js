const express = require('express')
const router = express.Router()
const {getItems, postItem, updateItem, deleteItem} = require('../controller/itemController')



router.route('/').get(getItems).post(postItem)
router.route('/:id').put(updateItem).delete(deleteItem)


module.exports = router