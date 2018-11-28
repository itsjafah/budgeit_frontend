import React, { Component } from 'react';
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Category from './category/Category'
import Budget from './budget/Budget'
import Expense from './expense/Expense'
import WeekMonth from './weekmonth/WeekMonth'
import Year from './year/Year'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class BudgeIt extends Component {

  state = {
    date: Date(),
    // home: false,
    // category: false,
    // budget: false,
    // expense: false,
    // weekmonth: false,
    // year: false
  }

  render() {
    return (
      <Router>
        <div>
          <div> {this.state.date} </div>
          <Navbar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/budgets" component={Budget} />
            <Route exact path="/expenses" component={Expense} />
            <Route exact path="/weekmonth" component={WeekMonth} />
            <Route exact path="/year" component={Year} />
        </div>
      </Router>
    );
  }
}

export default BudgeIt;
//
// import React from "react";
// import List from "./List";
// const App = () => (
//   <div className="row mt-5">
//     <div className="col-md-4 offset-md-1">
//     <h2>Articles</h2>
//       <List />
//     </div>
//   </div>
// );
// export default App;
//

// <List>
// import React from "react";
// import { connect } from "react-redux";
// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
// const ConnectedList = ({ articles }) => (
//   <ul className="list-group list-group-flush">
//     {articles.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.title}
//       </li>
//     ))}
//   </ul>
// );
// const List = connect(mapStateToProps)(ConnectedList);
// export default List;
//
