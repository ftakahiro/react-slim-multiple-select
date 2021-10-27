import React from 'react';
import ReactDOM from 'react-dom';
import SlimMultipleSelect from './lib/index';

ReactDOM.render(

    <SlimMultipleSelect
        options={[
            { id: 1, name: "サンプルネーム1" },
            { id: 2, name: "サンプルネーム2" },
            {
                id: 3,
                name: "sample3ネーム長い文字列のテストです。",
            },
            {
                id: 4,
                name: "sample3ネーム長い文字列のテストです。さらに長いテストです。４",
            },
            {
                id: 5,
                name: "sample3ネーム長い文字列のテストです。さらに長いテストです。４",
            },
            {
                id: 6,
                name: "sample3ネーム長い文字列のテストです。さらに長いテストです。４",
            },
            {
                id: 7,
                name: "sample3ネーム長い文字列のテストです。さらに長いテストです。４",
            },
        ]}
        value={[
            { id: 1, name: "サンプルネーム1" },
            { id: 2, name: "サンプルネーム2" },
            {
                id: 3,
                name: "sample3ネーム長い文字列のテストです。",
            },
        ]}
        optLabel='name'
        optKey='id'
        placeholder='ユーザーを選択してください'
    />
 ,
  document.getElementById('root')
);

