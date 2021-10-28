"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./multiple-select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SlimMultipleSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(SlimMultipleSelect, _React$Component);

  var _super = _createSuper(SlimMultipleSelect);

  function SlimMultipleSelect(props) {
    var _this;

    _classCallCheck(this, SlimMultipleSelect);

    _this = _super.call(this, props);
    _this.state = {
      filterdOptions: _this.props.options,
      selectedOptions: _this.props.value
    };
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.choseOption = _this.choseOption.bind(_assertThisInitialized(_this));
    _this.removeOption = _this.removeOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SlimMultipleSelect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.options !== this.props.options) {
        this.setState({
          filterdOptions: this.props.options
        });
      }

      if (prevProps.value !== this.props.value) {
        this.setState({
          selectedOptions: this.props.value
        });
      }
    }
  }, {
    key: "toggleOptions",
    value: function toggleOptions(e) {
      e.currentTarget.nextSibling.classList.toggle("open");
    }
  }, {
    key: "onFilter",
    value: function onFilter(e) {
      var _this2 = this;

      var query = e.currentTarget.value;
      var filterd = this.props.options.filter(function (option) {
        return option[_this2.props.optLabel].includes(query);
      });
      this.setState({
        filterdOptions: filterd
      });
    }
  }, {
    key: "toggleUsed",
    value: function toggleUsed(option) {
      var isSelected = false;

      for (var i = 0; i < this.state.selectedOptions.length; i++) {
        if (this.state.selectedOptions[i][this.props.optKey] == option[this.props.optKey]) {
          isSelected = true;
        }
      }

      return isSelected ? "used" : "";
    }
  }, {
    key: "choseOption",
    value: function choseOption(e) {
      var _this3 = this;

      e.stopPropagation();
      var dataKey = e.currentTarget.dataset.key;
      var selected = this.props.options.filter(function (option) {
        return option[_this3.props.optKey] == dataKey;
      })[0];
      var selectedOptions = this.state.selectedOptions;
      var isExist = false;

      for (var i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i][this.props.optKey] == dataKey) {
          isExist = true;
        }
      }

      if (!isExist) {
        selectedOptions.push(selected);
      } // handle value change


      this.props.onHandleChange && this.props.onHandleChange(selectedOptions);
      this.setState({
        selectedOptions: selectedOptions
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(e) {
      var _this4 = this;

      e.stopPropagation();
      var dataKey = e.currentTarget.dataset.key;
      var filtered = this.state.selectedOptions.filter(function (option) {
        return option[_this4.props.optKey] != dataKey;
      }); // handle value change

      this.props.onHandleChange && this.props.onHandleChange(filtered);
      this.setState({
        selectedOptions: filtered
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-slim-multiple-select"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-slim-multiple-select-input-container",
        onClick: this.toggleOptions
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-slim-multiple-select-selected-options-container"
      }, this.state.selectedOptions.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: option[_this5.props.optKey],
          className: "react-slim-multiple-select-selected-option-container"
        }, /*#__PURE__*/_react["default"].createElement("span", null, option[_this5.props.optLabel]), /*#__PURE__*/_react["default"].createElement("i", {
          className: "react-slim-multiple-select-icon-remove material-icons",
          onClick: _this5.removeOption,
          "data-key": option[_this5.props.optKey]
        }, "close"));
      })), /*#__PURE__*/_react["default"].createElement("input", {
        className: "react-slim-multiple-select-search",
        name: "scope",
        onInput: this.onFilter,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        placeholder: this.props.placeholder || ""
      })), this.props.options.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-slim-multiple-select-options-container"
      }, this.state.filterdOptions.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "react-slim-multiple-select-option-container ".concat(_this5.toggleUsed(option)),
          key: option[_this5.props.optKey],
          "data-key": option[_this5.props.optKey],
          "data-value": option[_this5.props.optLabel],
          onMouseDown: _this5.choseOption
        }, option[_this5.props.optLabel]);
      })));
    }
  }]);

  return SlimMultipleSelect;
}(_react["default"].Component);

exports["default"] = SlimMultipleSelect;