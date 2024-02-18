import { ResourceOptions } from 'adminjs';

export const categoryResourceOptionns: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'createdAt', 'updateAt'],
  listProperties: ['id', 'name', 'postion'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updateAt']
}