import { Article } from '../../../types';

export type Methods = {
  get: {
    query: {
      user: number;
    },
    resBody: Article;
  }
}
