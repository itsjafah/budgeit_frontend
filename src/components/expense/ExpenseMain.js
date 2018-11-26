import React, { Component } from 'react';

class ExpenseMain extends Component {

  render() {
    return (
      <div>

        <div>
          <select>
            <option> Week </option>
            <option> Month </option>
          </select>
        </div>

        <div>

          <table>
            <tbody>
              <tr>
                <th> Budget Title <button> Sort </button></th>
                <th> Expense Dates <button> Sort </button></th>
                <th> Expense Amount <button> Sort </button></th>
                <th> Remaining <button> Sort </button></th>
              </tr>

              <tr>
                <th> Category Color </th>
              </tr>

              <tr>
                <td></td>
                <td> Expense Description </td>
                <td> Expense Date </td>
                <td> Expense Amount </td>
                <td>
                  <button> Edit </button>
                  <button> Delete </button>
                </td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> Remaining </td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    );
  }
}

export default ExpenseMain;
