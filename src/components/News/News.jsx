import React from "react";
import s from "./News.module.css";

class News extends React.Component {
  constructor(props) {
    super(props); // базовый родительский конструктор
    this.state = { date: new Date() };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    // componentWillUnmount() {
    //     clearInterval(this.timerID); //if itll be delete
    // }

    tick() {
        this.setState({
            date: new Date()
        })
    }

  render() {
    return (
      <div className={s.item}>
        <h2>the Time </h2>
        <h3 className={s.time}>right now {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default News;
