import React, {Component} from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {type, column, row} = this.props;
    const text = row[column.dataIndex] ||'';
    return (
      type === 'th'
        ? <th key={column.key || column.dataIndex} scope="row">
          {
            column.render
              ? column.render(text, row)
              : text.toString()
          }
        </th>
        : <td key={column.key || column.dataIndex}>
          {
            column.render
              ? column.render(text, row)
              : text.toString()
          }
        </td>
    )
  }
}

export default Cell;