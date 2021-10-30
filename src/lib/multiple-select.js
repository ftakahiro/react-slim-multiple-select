import React from "react";
import "./multiple-select.css";

export default class SlimMultipleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdOptions: this.props.options || [],
            selectedOptions: this.props.value || [],
        };
        this.onFilter = this.onFilter.bind(this);
        this.choseOption = this.choseOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.toggleUsed = this.toggleUsed.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
        this.isUsed = this.isUsed.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.setState({ filterdOptions: this.props.options });
        }
        if (prevProps.value !== this.props.value) {
            this.setState({ selectedOptions: this.props.value });
        }
    }

    toggleOptions(e) {
        e.currentTarget.nextSibling.classList.toggle("open");
    }

    onFilter(e) {
        const query = e.currentTarget.value;
        const filterd = this.props.options.filter((option) => {
            return option[this.props.optLabel].includes(query);
        });
        this.setState({ filterdOptions: filterd });
    }

    toggleUsed(option) {
        return this.isUsed(option) ? "used" : "";
    }

    toggleChecked(option) {
        return this.isUsed(option) ? "check_box" : "check_box_outline_blank";
    }

    isUsed(option) {
        let isSelected = false;
        for (let i = 0; i < this.state.selectedOptions.length; i++) {
            if (
                this.state.selectedOptions[i][this.props.optKey] ==
                option[this.props.optKey]
            ) {
                isSelected = true;
            }
        }
        return isSelected;
    }

    choseOption(e) {
        e.stopPropagation();
        const dataKey = e.currentTarget.dataset.key;
        const selected = this.props.options.filter((option) => {
            return option[this.props.optKey] == dataKey;
        })[0];

        const selectedOptions = this.state.selectedOptions;
        let isExist = false;
        for (let i = 0; i < selectedOptions.length; i++) {
            if (selectedOptions[i][this.props.optKey] == dataKey) {
                isExist = true;
            }
        }
        if (!isExist) {
            selectedOptions.push(selected);
        }
        // handle value change
        this.props.onHandleChange && this.props.onHandleChange(selectedOptions);
        this.setState({ selectedOptions: selectedOptions });
    }

    removeOption(e) {
        e.stopPropagation();
        const dataKey = e.currentTarget.dataset.key;
        const filtered = this.state.selectedOptions.filter((option) => {
            return option[this.props.optKey] != dataKey;
        });
        // handle value change
        this.props.onHandleChange && this.props.onHandleChange(filtered);
        this.setState({ selectedOptions: filtered });
    }

    render() {
        return (
            <div className='react-slim-multiple-select'>
                <div
                    className='react-slim-multiple-select-input-container'
                    onClick={this.toggleOptions}>
                    <div className='react-slim-multiple-select-selected-options-container'>
                        {this.state.selectedOptions.map((option) => {
                            return (
                                <span
                                    key={option[this.props.optKey]}
                                    className='react-slim-multiple-select-selected-option-container'>
                                    <span>{option[this.props.optLabel]}</span>
                                    <i
                                        className='react-slim-multiple-select-icon-remove material-icons'
                                        onClick={this.removeOption}
                                        data-key={option[this.props.optKey]}>
                                        close
                                    </i>
                                </span>
                            );
                        })}
                    </div>
                    <div className='react-slim-multiple-select-search-container'>
                        <input
                            className='react-slim-multiple-select-search'
                            onInput={this.onFilter}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            placeholder={this.props.placeholder || ""}></input>
                        <i className='react-slim-multiple-dropdown-icon material-icons'>
                            arrow_drop_down
                        </i>
                    </div>
                </div>
                <div className='react-slim-multiple-select-options-container'>
                    {this.props.options &&
                        this.props.options.length > 0 &&
                        this.state.filterdOptions.map((option) => {
                            return (
                                <div
                                    className={`react-slim-multiple-select-option-container ${this.toggleUsed(
                                        option
                                    )}`}
                                    key={option[this.props.optKey]}
                                    data-key={option[this.props.optKey]}
                                    data-value={option[this.props.optLabel]}
                                    onMouseDown={this.choseOption}>
                                    <i className='react-slim-multiple-checkbox-icon material-icons'>
                                        {this.toggleChecked(option)}
                                    </i>
                                    <div>{option[this.props.optLabel]}</div>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
