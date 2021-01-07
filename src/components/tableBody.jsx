import React from "react";

const TableBody = ({ currentItem, toggleList, id }) => {
  return (
    <>
      <tbody>
        {currentItem.map((i, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{i.item}</td>
              <td>#{i.price}</td>
              <td>{i.amount}</td>
              <td>
                <input type='checkbox' checked={i.isChecked} onClick={() => toggleList(id, i.itemID)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
