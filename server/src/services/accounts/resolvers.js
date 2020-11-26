const accounts = [
    {
        id: "1",
        email: "dante@mail.com"
    }
]

const resolvers = {
    Account: {
        __resolveReference(reference, context, info) {
            return accounts.find(account => account.id === reference.id)
        }
    },

    Query: {
        viewer() {
            return accounts[0]
        }
    }
}

export default resolvers