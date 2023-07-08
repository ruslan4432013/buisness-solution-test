import { Component, createRef } from 'react';
import s from './styles.module.scss';
import cn from 'classnames';
import ArrowDown from './arrow-down.svg';
import { Lang } from '../types';
import { connect } from 'react-redux';
import { changeLang } from '../model';

const metaLang: Record<Lang, string> = {
  ru: 'Русский',
  en: 'Английский',
};

type OverlayProps = {
  onClick: () => void;
};

type State = {
  isOpen: boolean;
};

const Overlay = (props: OverlayProps) => <div {...props} className={s.overlay} />;

const mapState = (state: RootState) => ({
  lang: state.lang.currentLang,
});

const mapDispatch = {
  changeLang,
};

type StateProps = {
  lang: Lang;
};
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

class ChangeLanguageDropdown extends Component<Props, State> {
  ulRef = createRef<HTMLUListElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggleDropdown = () => {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleChangeLand = (lang: Lang) => () => {
    this.props.changeLang(lang);
  };

  render() {
    const { isOpen } = this.state;
    const { lang } = this.props;
    const dropdownHeight = this.ulRef.current?.scrollHeight || 0;
    const dropdownStyles = {
      height: isOpen ? dropdownHeight : 0,
    };
    return (
      <div
        className={s.dropdown}
        onKeyDown={(e) => {
          if (e.code === 'Escape') {
            this.handleClose();
          }
        }}
      >
        <button
          onClick={this.handleToggleDropdown}
          className={cn(s.dropdown, s.lang, {
            [s.lang_ru]: lang === 'ru',
            [s.lang_en]: lang === 'en',
          })}
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isOpen}
        >
          {metaLang[lang]}
          <ArrowDown className={s.arrow_down} />
        </button>
        <ul className={s.dropdown_menu} style={dropdownStyles} ref={this.ulRef} aria-labelledby="dropdownMenuButton">
          <li className={s.dropdown_menu_item} onClick={this.handleChangeLand('ru')}>
            <a className={cn(s.dropdown_menu_link, s.dropdown_menu_link_ru)} href="#">
              Русский
            </a>
          </li>
          <li className={s.dropdown_menu_item}>
            <a className={cn(s.dropdown_menu_link, s.dropdown_menu_link_en)} onClick={this.handleChangeLand('en')} href="#">
              English
            </a>
          </li>
        </ul>
        {isOpen && <Overlay onClick={this.handleClose} />}
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps, unknown, RootState>(mapState, mapDispatch)(ChangeLanguageDropdown);
