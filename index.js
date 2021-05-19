const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const dotenv = require('dotenv').config();
const PROJECT_NAME = 'Orlando Drop';
const adapterConfig = { mongoUri: process.env.MONGO_URI };

const SnagSchema = require('./lists/Snag');
const CarpenterSchema = require('./lists/Carpenter');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('Snag', SnagSchema);
keystone.createList('Carpenter', CarpenterSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
