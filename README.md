# TodoApp -->

To sync up schema with Heroku database run: 

- npx prisma db push --preview-feature --force 
- notes
  - need to setup postgreSQL database URI as env variable to connect.

Apollo manages state and utilizes a cache
  will bypass Apollo cache usage and utilize Redux
  store data essentially as duplicate in Redux to utilize redux state management.
