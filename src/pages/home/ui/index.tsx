import { Component } from 'react';
import { Header } from '@widgets/header';
import { Main } from '@widgets/main';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
