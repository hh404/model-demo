import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr title;
  @attr body;
}
