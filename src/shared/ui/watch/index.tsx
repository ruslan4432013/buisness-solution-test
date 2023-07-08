import { Component } from 'react';

interface WatchState {
  time: string;
}

export class Watch extends Component<object, WatchState> {
  timerId: NodeJS.Timeout | null = null;

  constructor(props: object) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  getCurrentTime() {
    const now = new Date();
    const hours = this.formatDigits(now.getHours());
    const minutes = this.formatDigits(now.getMinutes());
    const seconds = this.formatDigits(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  formatDigits(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
