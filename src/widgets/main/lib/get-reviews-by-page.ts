import { ReviewDto } from '@entities/review';

export const getReviewByPage = (reviews: ReviewDto[], page: number, limit: number) => {
  if (page === 1) {
    return reviews.slice(0, limit);
  }
  const min = (page - 1) * limit;
  const max = page * limit;
  return reviews.slice(min, max);
};
