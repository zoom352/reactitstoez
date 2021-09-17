import React from 'react';
import s from './Settings.module.css';


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Barcelona" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value})
  }

  handleSubmit(event) {
      alert('dedededed: ' + this.state.value)
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Lime">Lime</option>
            <option value="Barcelona">Barcelona</option>
            <option value="liverpool">liverpool</option>
            <option value="real">real</option>
          </select>
        </label>
        <input type="submit" value="sent" />
      </form>
    );
  }
}


export default Settings;