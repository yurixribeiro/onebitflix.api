import { User } from './User';
import { Category } from "./Category";  
import { Course }  from "./Course";
import { Favorite } from './Favoreite';
import { Episode } from "./Episode";

Category.hasMany(Course, { as: 'courses'})

Course.belongsTo(Category)
Course.belongsToMany(User, { through: Favorite})
Course.hasMany(Episode, { as: 'episodes'})
Course.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'course_id'})

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite})
User.hasMany(Favorite, { as: 'FavoritesCourse', foreignKey: 'user_id'})

export {
  Category,
  Course,
  Episode,
  Favorite,
  User
}