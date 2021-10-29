# React Slim Multiple Select

## Installation

```
npm i react-slim-multiple-select
```

## Usage

```
import React from "react";
import ReactDOM from "react-dom";
import SlimMultipleSelect from "react-slim-multiple-select";

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

```

## Props

| Props                   | type   | default | description                                                                                                                                                    |
| ----------------------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options                 | array  | []      | pass options as array of object <br> unique key and value are required <br> example) <br> `[{id: 1, name: 'label for id 1'}, {id: 2, name: 'label for id 2'}]` |
| optKey <br> ※required   | string | ''      | options propety name which is unique value <br> example) 'id'                                                                                                  |
| optLabel <br> ※required | string | ''      | options propety name which is label for key and displayed as options <br> example) 'name'                                                                      |
| value                   | array  | []      | value which is the part of options selected <br> example) `[{id: 2, name: 'label for id 2'}]`                                                                  |
| placeholder             | string | ''      | set placeholder                                                                                                                                                |

## Event Handle

| Props          | param | Description                      |
| -------------- | ----- | -------------------------------- |
| onHandleChange | value | Trigger on change value selected |

## License

MIT © [ftakahiro](https://github.com/ftakahiro)
