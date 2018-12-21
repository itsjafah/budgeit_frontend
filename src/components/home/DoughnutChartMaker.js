import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChartMaker = (props) => {
  let data = {
    labels: ['Pink', 'Blue', 'Yellow'],
    datasets: [{
      data: [700, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FFFFFF'
      ]
    }]
  }

  if (props.categories.length === 0) {
    return <div></div>
  } else {
    // console.log(props)
    let data = {
      labels: ['Pink', 'Blue', 'Yellow'],
      datasets: [{
        data: [700, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FFFFFF'
        ]
      }]
    }
    data.labels = props.categories.map(cat => cat.title)
    data.labels.push('Remainder')
    data.datasets[0].backgroundColor = props.categories.map(cat => cat.color)
    data.datasets[0].backgroundColor.push('#6B8F71')
    data.datasets[0].data = props.categories.map(cat => {
      let expenses = props.expenses.filter(e => e.category_id === cat.id)
      expenses = expenses.map(exp => exp.amount)
      return expenses ? expenses.reduce((acc, val) => (acc + val), 0) : 0
    })
    data.datasets[0].data.push((props.budgetAmt - data.datasets[0].data.reduce((acc, val) => (acc + val), 0) ))
    let arr = []
    for (let i=0; i < props.categories.length; i++) {
      arr.push('#B9F5D8')
    }
    arr.push('black')
    data.datasets[0].hoverBackgroundColor = arr

    return (
      <div>
        <Doughnut data={data} />
      </div>
    )
  }
}

export default DoughnutChartMaker
