import { Component } from 'react';
import s from './styles.module.scss';
import cn from 'classnames';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface State {
  mid: number;
}

export class Pagination extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mid: Math.ceil(props.totalPages / 2),
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.totalPages !== this.props.totalPages) {
      this.setState({
        mid: Math.ceil(this.props.totalPages / 2),
      });
    }
  }

  componentDidMount() {
    this.goToPage(this.props.currentPage);
  }

  goToPage(page: number) {
    const { onPageChange } = this.props;
    this.setState({ mid: page });
    onPageChange(page);
  }

  render() {
    const { currentPage, totalPages } = this.props;
    const { mid } = this.state;

    return (
      <div className={s.pagination}>
        {currentPage !== 1 && (
          <button className={s.numeral} onClick={() => this.goToPage(1)}>
            1
          </button>
        )}
        {mid > 2 && <span>...</span>}
        {mid > 2 && (
          <button className={s.numeral} onClick={() => this.goToPage(mid - 1)}>
            {mid - 1}
          </button>
        )}
        <button
          className={cn(s.numeral, {
            [s.active]: currentPage === mid,
          })}
        >
          {mid}
        </button>
        {mid < totalPages - 1 && (
          <button className={s.numeral} onClick={() => this.goToPage(mid + 1)}>
            {mid + 1}
          </button>
        )}
        {mid < totalPages - 1 && <span>...</span>}
        {currentPage !== totalPages && (
          <button className={s.numeral} onClick={() => this.goToPage(totalPages)}>
            {totalPages}
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
