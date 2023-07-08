import { Component } from 'react';
import s from './styles.module.scss';
import { ReviewDto } from '../types';

type Props = ReviewDto;

export class ReviewCard extends Component<Props, unknown> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, review, date } = this.props;
    return (
      <div className={s.review}>
        <div className={s.top}>
          <div>{name}</div>
          <time>{date}</time>
        </div>
        <div>{review}</div>
      </div>
    );
  }
}
