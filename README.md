## Graph Press 
A simple web app to integrate Wordpress as Headless CMS with GraphQL and Reactjs.

***

#### Built With

- [Wordpress](https://wordpress.org) - Wordpress as Headless CMS.
- [React.js](https://reactjs.org) - A JavaScript library for building user interfaces.
- [GraphQL](https://graphql.org/) - A query language for your API.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapidly building custom designs.


#### Getting Started

- Install a new Wordpress on your local machine (please refer to readme.html in root directory for thorough Wordpress installation).
- Add this snippet in `/wp-content/themes/APPLIED_THEME_NAME/functions.php` to make a new custom post type supports graphql query 
```
  add_action('init', function() {
		  register_post_type('toaster', [
			'public' 							=> true,
			'label' 							=> 'Toasters',
			'show_in_graphql' 		=> true,
			'graphql_single_name' => 'Toasters',
			'graphql_plural_name' => 'Toasters'
		]);
  });
```
- Add the following plugins to `/wp-content/plugins`
  - https://github.com/wp-graphql/wp-graphql
  - https://github.com/wp-graphql/wp-graphiql
  - https://wordpress.org/plugins/advanced-custom-fields
  - https://github.com/wp-graphql/wp-graphql-acf
- Navigate to Wordpess Dashboard, add new field group `toasterMeta`, then:
  - Connect it to `Toasters` post type.
  - Toggle `Show in GraphQL` to `Yes` value.
  - Assign `GraphQL Field Name` to `toasterMeta`.
  - Add Fields, `Price` and `Weight` of field type `Number`.
- Navigate to Wordpess Dashboard and make new Toasters (preferably 3).
- Run `cd frontend` to enter frontend folder.
- Run `npm install && npm run start` to run the client-side.