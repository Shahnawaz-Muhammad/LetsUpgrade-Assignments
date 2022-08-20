import React from 'react'

const Table = () => {
    
const tableData=[
    {
      "id": 1,
      "firstname": "Abhishek",
      "lastname": "Yadav"
    },
    {
      "id": 2,
      "firstname": "Anupam",
      "lastname": "Mishra"
    },
    {
      "id": 3,
      "firstname": "Ahmed",
      "lastname": "Khan"
    },
    {
      "id": 4,
      "firstname": "Muhammad",
      "lastname": "Shahnawaz"
    },
    {
      "id": 5,
      "firstname": "Surya",
      "lastname": "Kumar"
    }
]

  return (
    <div>
        <h2>Table</h2>
        <table style={{border: '1px solid black', width:'100%'}}>
        <tbody>
                <tr style={{backgroundColor: 'green', color:'#fff'}}>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                </tr>
                {tableData.map((user, i) => (
                    <tr key={i} style={{backgroundColor:'yellow'}}>
                        <td>{user.id}</td>
                        <td style={{textTransform: 'capitalize'}}>{user.firstname}</td>
                        <td style={{textTransform: 'capitalize'}}>{user.lastname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table