
import * as userService from './services/user'




export default {
    Query: {

        allUsers: (parent, args, { models })=>
            models.User.findAll(),

        getUser: (parent, { id }, { models })=>
            models.User.findOne({ where:{ id } })
    },

    Mutation: {

        registerUser: (parent, { firstName, lastName, email, password } , { models })=>
            userService.register(firstName, lastName, email, password),

        loginUser:( parent, { email, password }, { models })=>
            userService.login( email, password ),

        updateUser: ( parent, { id, firstName, email }, { models }) =>
            models.User.update({ firstName, email }, { where: { id } }),

        deleteUser: ( parent, { id }, { models }) =>
            models.User.destroy({ where: { id }})
    }
}