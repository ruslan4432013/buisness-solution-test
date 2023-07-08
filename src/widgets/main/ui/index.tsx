import { Component } from 'react';
import { data } from '../model';
import { ReviewCard, ReviewDto } from '@entities/review';
import s from './styles.module.scss';
import { Pagination } from '@shared/ui/pagination';
import { getReviewByPage, setPageToPath } from '@widgets/main/lib';
import { getCurrentPage } from '@widgets/main/lib/page-location';
import { Lang } from '@features/change-language/types';
import { connect } from 'react-redux';

type State = {
  currentPage: number;
};

const MAX_REVIEWS_ON_PAGE = 10;
type StateProps = {
  lang: Lang;
};
const mapState = (state: RootState) => ({
  lang: state.lang.currentLang,
});

type Props = StateProps;

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const page = getCurrentPage();
    this.state = {
      currentPage: page || 1,
    };
  }

  setCurrentPage = (page: number) => {
    this.setState({ currentPage: page });
    setPageToPath(page);
  };

  render() {
    const { currentPage } = this.state;
    const { lang } = this.props;
    const reviews: ReviewDto[] = Object.values(data[lang]);
    const totalPages = Math.ceil(reviews.length / MAX_REVIEWS_ON_PAGE);
    return (
      <main>
        <div className={s.review_list}>
          {getReviewByPage(reviews, currentPage, MAX_REVIEWS_ON_PAGE).map(({ name, review, date }) => (
            <ReviewCard key={name} name={name} review={review} date={date} />
          ))}
        </div>
        <div className={s.pagination_wrapper}>
          <Pagination currentPage={this.state.currentPage} totalPages={totalPages} onPageChange={this.setCurrentPage} />
        </div>
      </main>
    );
  }
}

export default connect(mapState)(Main);
