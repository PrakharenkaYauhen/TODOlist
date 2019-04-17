import React from 'react';

// TableCellsVisionCurrentDate Component

function TableCellsVisionCurrentDate(props) {
    return (
        <td className='todo__table__data todo__table__data_cells todo__table__data_choisen'
            onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            {props.currentDate}
        </td>
    );
}

export { TableCellsVisionCurrentDate };