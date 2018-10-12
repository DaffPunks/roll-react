import React from "react";
import './style.scss';
import Header from '../../components/Header';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Header/>
      </div>
    );
  }
}
