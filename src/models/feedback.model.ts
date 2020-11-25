import {Entity, model, property} from '@loopback/repository';

@model()
export class Feedback extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  capturedUrl: string;

  @property({
    type: 'number',
  })
  rating?: number;

  @property({
    type: 'string',
  })
  comment?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tags?: string[];

  @property({
    type: 'string',
    required: true,
  })
  componentName: string;

  @property({
    type: 'string',
    required: true,
  })
  componentVersion: string;

  constructor(data?: Partial<Feedback>) {
    super(data);
  }
}

export interface FeedbackRelations {
  // describe navigational properties here
}

export type FeedbackWithRelations = Feedback & FeedbackRelations;
