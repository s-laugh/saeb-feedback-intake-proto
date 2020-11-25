import {DefaultCrudRepository} from '@loopback/repository';
import {Feedback, FeedbackRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FeedbackRepository extends DefaultCrudRepository<
  Feedback,
  typeof Feedback.prototype.id,
  FeedbackRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Feedback, dataSource);
  }
}
