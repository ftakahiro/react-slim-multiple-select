import React from "react";
import ReactDOM from "react-dom";
import SlimMultipleSelect from "./lib/index";

ReactDOM.render(
    <SlimMultipleSelect
        options={[
            { id: 1, name: "sample item 1" },
            { id: 2, name: "sample item 2" },
            { id: 3, name: "sample item 3" },
            { id: 4, name: "sample item 4" },
            { id: 5, name: "sample item 5" },
            { id: 6, name: "sample item 6" },
            { id: 7, name: "sample item 7" },
        ]}
        value={[
            { id: 1, name: "sample item 1" },
            { id: 2, name: "sample item 2" },
        ]}
        optLabel='name'
        optKey='id'
        placeholder='search item'
        onHandleChange={(value) => console.log(value)}
    />,
    document.getElementById("root")
);
