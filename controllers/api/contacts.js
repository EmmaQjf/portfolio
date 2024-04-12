const Contact = require('../../models/contact')


module.exports = {
    create,
    show,
    jsonContact
}

// jsonTodos jsonTodo
// viewControllers

function jsonContact (_, res) {
    res.json(res.locals.data.contact)
}


/****** C - Create *******/
async function create(req, res, next){
    try {
        const contact = await Contact.create(req.body)
        console.log(contact)
        res.locals.data.contact = contact
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


async function show(req ,res,next) {
    try {
        const contact = await Contact.findById(req.params.id)
        res.locals.data.contact = contact
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


