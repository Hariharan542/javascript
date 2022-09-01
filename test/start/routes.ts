/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.post('maths','ConsController.maths').middleware('Mid')
Route.get('maths','ConsController.maths').middleware('Mid')
Route.put('maths','ConsController.maths').middleware('Mid')
Route.patch('maths','ConsController.maths').middleware('Mid')


Route.post('create','CurdsController.create')
Route.delete('del','CurdsController.del')
Route.patch('upd','CurdsController.upd')
Route.get('read','CurdsController.read')
