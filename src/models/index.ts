import { User } from './User';
import { Category } from "./Category";  
import { Course }  from "./Course";
import { Favorite } from './Favorite';
import { Episode } from "./Episode";
import { Like } from './Like';

Category.hasMany(Course, { as: 'courses'})

Course.belongsTo(Category)
Course.belongsToMany(User, { through: Favorite})
Course.belongsToMany(User, { through: Like})
Course.hasMany(Episode, { as: 'episodes'})
Course.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'course_id'})

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite})
User.belongsToMany(Course, { through: Like})
User.hasMany(Favorite, { as: 'FavoritesCourse', foreignKey: 'user_id'})

export {
  Category,
  Course,
  Episode,
  Favorite,
  Like,
  User
}