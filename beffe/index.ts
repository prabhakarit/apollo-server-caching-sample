import OrganisationalModule from './organisational';
import IdentityServiceModule from './identityservice';
import { ApolloServer } from 'apollo-server';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

const server = new ApolloServer({
  modules: [OrganisationalModule, IdentityServiceModule],
  tracing: true,
  introspection: true,
  playground: true,
  cacheControl: {
    defaultMaxAge: 20,
    calculateHttpHeaders: true,
    stripFormattedExtensions: false
  },
  plugins: [responseCachePlugin({
    sessionId: (o) => ((o.request.http===undefined)?null:o.request.http.headers.get('sessionid') || null),
  })],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}
