import { Component } from 'react';
import s from './styles.module.scss';
import { Watch } from '@shared/ui/watch';
import { ChangeLanguageDropdown } from '@features/change-language';

const logoSrc = 'https://mtg-biz.ru/bitrix/templates/mtg/img/logo.png';

export class Header extends Component {
  render() {
    return (
      <header className={s.main_header}>
        <a className={s.logo} href="#">
          <img alt="logo" src={logoSrc} />
        </a>
        <ChangeLanguageDropdown />
        <Watch />
      </header>
    );
  }
}
