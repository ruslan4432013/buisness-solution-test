import { Component } from 'react';
import s from './styles.module.scss';
import { ReviewDto } from '../types';

type Props = ReviewDto;

const getNameReviewer = (fullName: string) => {
  const meta = fullName.split(' ');
  if (meta.length === 0) {
    return 'Неопознанный енот';
  }
  if (meta.length === 1) {
    return fullName;
  }
  const firstName = meta[1];
  return `${meta[0]} ${firstName[0]}.`;
};

export class ReviewCard extends Component<Props, unknown> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, review, date } = this.props;
    return (
      <div className={s.review}>
        <div className={s.top}>
          <div>{getNameReviewer(name)}</div>
          <time>{date}</time>
        </div>
        <div>{review}</div>
      </div>
    );
  }
}
