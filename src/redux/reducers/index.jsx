import { combineReducers } from 'redux';
import blog from './blog';
import categories from './categories';
import recetas from './recetas';
import contact from './contact';
import repository from './repository';

export default combineReducers({
    recetas, 
    blog,
    categories,
    contact,
    repository,
})