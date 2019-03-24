import React, {Component} from 'react';
import Cell from './Cell';

class Tbody extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tbody>
      {this.props.data.map(row => {
          if (row.key === undefined || !(typeof row.key === 'string' || typeof row.key === 'number')){
            throw new Error('each data object should have a key property type of String or Number')
          }
          return (<tr key={row.key}>
              {this.props.columns.map((col, i) => {
                if (i === 0) {
                  return (
                    <Cell
                      key={col.dataIndex}
                      row={row}
                      type='th'
                      column={col}
                    />
                  )
                }
                else {
                  return (
                    <Cell
                      key={col.dataIndex}
                      row={row}
                      column={col}
                    />
                  )
                }
              })
              }
            </tr>
          )
        }
      )}
      </tbody>
    )
  }
}

export default Tbody;