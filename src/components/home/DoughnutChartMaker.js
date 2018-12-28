import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import './DoughnutChartMaker.css'

const DoughnutChartMaker = (props) => {
  if (props.categories.length === 0) {
    return <div></div>
  } else {
    // console.log(props)
    let data = {
      labels: [],
      datasets: [{
        data: [],
        hoverBackgroundColor: [
          '#FFFFFF'
        ]
      }]
    }
    data.labels = props.categories.map(cat => cat.title)
    data.labels.push('Remainder')
    data.datasets[0].backgroundColor = props.categories.map(cat => cat.color)
    data.datasets[0].backgroundColor.push('lightgrey')
    data.datasets[0].data = props.categories.map(cat => {
      let expenses = props.expenses.filter(e => e.category_id === cat.id)
      expenses = expenses.map(exp => exp.amount)
      return expenses ? expenses.reduce((acc, val) => (acc + val), 0) : 0
    })
    data.datasets[0].data.push((props.budgetAmt - data.datasets[0].data.reduce((acc, val) => (acc + val), 0) ))
    let arr = []
    for (let i=0; i < props.categories.length; i++) {
      arr.push('black')
    }
    arr.push('darkgrey')
    data.datasets[0].hoverBackgroundColor = arr

    return (
      <div id="doughnut_chart">
        <Doughnut data={data} />
      </div>
    )
  }
}

export default DoughnutChartMaker
