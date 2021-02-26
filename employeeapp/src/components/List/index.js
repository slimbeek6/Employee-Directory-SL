import React from "react";
import { useEmployeeContext } from "../../utils/GlobalState";
import "./style.css";

function List() {
    const [state, dispatch] = useEmployeeContext();

    function runSort(e) {
        e.preventDefault();
        
        dispatch({
            type: "sort"
        });
    }

    return (
        <div>
            <h3><strong>Employee Contact List:</strong></h3>
            <br />
            <div className="row tableheader">
                <p className="col-2"><strong>Image: </strong></p>
                <p className="col-2"><strong>Name: </strong></p>
                <p className="col-2" onClick={runSort}><strong>Phone: </strong></p> 
                <p className="col-2"><strong>Email: </strong></p>
                <p className="col-2"><strong>DOB: </strong></p>
            </div>
            <ul className="list-group">
                {state.map((item, index) => (
                    <li className="list-group-item" key={item.id}>
                        <div className="row empllist">
                            <img className="image col-2" src={item.img} alt="" />
                            <p className="col-2">{item.name}</p>
                            <p className="col-2">{item.phone}</p>
                            <p className="col-2">{item.email}</p>
                            <p className="col-2">{item.dob}</p>
                        </div>
                    </li>
                ))};
            </ul>
        </div>
  )
}

export default List;

// need to add a link to the name line header that executes a switch on a sort