import React, { createContext, useReducer, useContext } from "react";

const EmployeeContext = createContext({
    id: "",
    name: "",
    img: "",
    phone: "",
    email: "",
    dob: ""
});

const { Provider } = EmployeeContext;

function reducer (state, action) {
    switch (action.type) {
        case "add":
            return [...state, 
                {
                id: state.length * Math.random(),
                name: action.name,
                img: action.img,
                phone: action.phone,
                email: action.email,
                dob: action.dob
                }
            ];
        case "sort":
            return [...state].sort((a,b)=> (a.name > b.name ? 1 : -1))
     default:
         return state;       
    }
}

function EmployeeProvider({ value= [], ...props}) {
    const [state, dispatch] = useReducer(reducer, []);

    return <Provider value={[state, dispatch]}{...props} />;
}

function useEmployeeContext(){
    return useContext(EmployeeContext);
}

export { EmployeeProvider , useEmployeeContext};