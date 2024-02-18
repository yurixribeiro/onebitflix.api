import { Optional, Model} from "sequelize"

export interface Category {
  id: number
  nume: string
  position: number
}

export interface CategoryCreationAttributes extends Optional<Category, 'id'> { }

export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category { }
