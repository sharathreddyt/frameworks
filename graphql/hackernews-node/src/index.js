const {
    GraphQLServer
} = require('graphql-yoga');
let links = [{
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'

    },
    {
        id: 'link-1',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'

    }
]

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => `this is an api for hacekr news clone`,
        feed: () => links,
        link: (root, args) => {
            return links.filter((item) => item.id === args.id)[0]
        }

    },
    Mutation: {
        post: (root, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        },
        updateLink: (root, args) => {
            links = links.map((item) => {
                if (args.id === item.id)
                    return { ...args
                    }
                else return item;
            });
            return links.filter((item) => item.id === args.id)[0]

        },
        deleteLink: (root, args) => {
            const removedItem = links.filter((item) => item.id === args.id)[0]
            links = links.filter((item) => item.id !== args.id);
            return removedItem;


        }
    }
};
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql', //absolute path wrt project directory not relative path wrt this file
    resolvers,
});
server.start(() => console.log('server is running on http://localhost:4000'));