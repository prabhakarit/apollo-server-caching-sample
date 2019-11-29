import { getUser, createUser } from '../services';
import 'apollo-cache-control';

const resolvers = {
  Query: {
    getUser: ( root:any, args: any, info: any, { cacheControl }: any ) => {
      //console.log(info._extensionStack.extensions[0]);
      //console.log(cacheControl);
      cacheControl.setCacheHint({ maxAge: 20, scope: 'PUBLIC' });
      return getUser(args.id);
    }
  },
  Mutation: {
    CreateUser(root: any, args: any){
      createUser(args.id, args.name, args.phoneNumber, args.organisation, args.email, args.imageURL);
    }
  }
};

export default resolvers;
