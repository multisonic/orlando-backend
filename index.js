const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const dotenv = require('dotenv').config();
const PROJECT_NAME = 'Orlando Drop';
const adapterConfig = { mongoUri: process.env.MONGO_URI };

const UserSchema = require('./lists/User');
const SnagSchema = require('./lists/Snag');
const CarpenterSchema = require('./lists/Carpenter');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('User', UserSchema);
keystone.createList('Snag', SnagSchema);
keystone.createList('Carpenter', CarpenterSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secret: 'password',
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
