const { UserList, MovieList } = require('../Fakedata')
const _ = require('lodash')

const resolvers = {
   Query: {
      // USER RESOLVERS
      users: () => {
         return UserList
      },
      user: (_parent, args) => {
         // return UserList.find(user => user.id === Number(args.id))
         return _.find(UserList, { id: Number(args.id) })
      },

      // MOVIE RESOLVERS
      movies: () => {
         return MovieList
      },
      movie: (_parent, { name }) => {
         return _.find(MovieList, { name })
      },
   },
   User: {
      favoriteMovies: (User) => {
         console.log(User)
         return _.filter(MovieList, (movie) =>
            User.favoriteMovies.includes(movie.id)
         )
      },
   },

   Mutation: {
      createUser: (_parent, args) => {
         const exist = _.find(UserList, { username: args.input.username })
         if (exist) {
            throw new Error('Username already exist')
         }
         const newUser = args.input
         newUser.id = UserList.length + 1
         UserList.push(newUser)
         return newUser
      },
      updateUser: (_parent, args) => {
         console.log(args)
         const exist = _.find(UserList, { id: Number(args.id) })
         if (!exist) {
            throw new Error('User not found')
         }
         const updatedUser = _.find(UserList, { id: Number(args.id) })
         _.merge(updatedUser, args.input)
         return updatedUser
      },
        deleteUser: (_parent, args) => {
            const exist = _.find(UserList, { id: Number(args.id) })
            if (!exist) {
                throw new Error('User not found')
            }
            const deletedUser = _.find(UserList, { id: Number(args.id) })
            _.remove(UserList, { id: Number(args.id) })
            return deletedUser
        },
   },
}

module.exports = { resolvers }
