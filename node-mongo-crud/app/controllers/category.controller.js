//category.controller.js will have following methods :

const Category = require('../models/category.model.js');

// Create and Save a new Category
exports.create = (req, res) => {
	if(!req.body.name) {
        return res.status(400).send({
            message: "Fields can not be empty"
        });
    }

    // Create a Category
    const category = new Category({
        name: req.body.name, 
        details: req.body.details
    });

    // Save Category in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong."
        });
    });
};

// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
	Category.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong."
        });
    });
};

// Find a single category with a id
exports.findOne = (req, res) => {
	Category.findById(req.params.categoryId)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category does not exist"
            });            
        }
        res.send(category);
    }).catch(err => {        
        return res.status(500).send({
            message: "Something went wrong."
        });
    });
};

// Update a category identified by the id in the request
exports.update = (req, res) => {
	if(!req.body.name) {
        return res.status(400).send({
            message: "Fields can not be empty"
        });
    }
     // Find category and update it with the request body
    Category.findByIdAndUpdate(req.params.categoryId, {
        name: req.body.name,
        details: req.body.details
    }, {new: true})
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category does not exist"
            });
        }
        res.send(category);
    }).catch(err => {        
        return res.status(500).send({
            message: "Something went wrong"
        });
    });
};

// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.categoryId)
   .then(category => {
       if(!category) {
           return res.status(404).send({
               message: "Category does not exist"
           });
       }
       res.send({message: "Category deleted successfully!"});
   }).catch(err => {      
       return res.status(500).send({
           message: "Something went wrong"
       });
   });
};