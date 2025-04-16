import React,{useState} from "react";


const Budget =()=>{

    const items = [
        { name: "Item A", value: 20 },
        { name: "Item B", value: 10 },
        { name: "Item C", value: 30 },
        { name: "Item D", value: 5 },
        { name: "Item D", value: 15 },
        { name: "Item D", value: 50 },
        { name: "Item D", value: 80 },

      ]; 
let [cost,setvalue] = useState(0)

    return(
<div>
    <input type = "number"
    onChange={(e)=>setvalue(e.target.value)}
    placeholder="Enter Budget"/>
    <p>This is your table data</p>
    <table>
        <thead>
        <tr>
        <th>Item Name</th>
        <th>Item Cost</th>
        </tr>
        </thead>
        {
            items.map((value)=>{
                 let isOverBudget = value.value>cost
                 return <tbody><tr>
                    <td>
                        {value.name}
                    </td >
                    <td style={{ color: isOverBudget ? "red" : "green" }}>{value.value}</td>
                </tr>
                </tbody>
            })
        }
    </table>
</div>

    )
}

export default Budget