import { getHello } from '../services';

const resolvers = {
  Query: {
    Hello(root: any, args: any) {
      return getHello(args.name);
    },
  },
};

export default resolvers;
