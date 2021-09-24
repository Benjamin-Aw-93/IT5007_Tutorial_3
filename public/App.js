"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var initialWaitList = [{
  id: 1,
  name: 'John Smith',
  number: '93659622',
  created: new Date('2018-08-15')
}, {
  id: 2,
  name: 'Mary Sue',
  number: '9817170+',
  created: new Date('2018-08-15')
}, {
  id: 3,
  name: 'Test Test',
  number: '000000000',
  created: new Date('2018-08-15')
}];

var DisplayHomePage = /*#__PURE__*/function (_React$Component) {
  _inherits(DisplayHomePage, _React$Component);

  var _super = _createSuper(DisplayHomePage);

  function DisplayHomePage() {
    _classCallCheck(this, DisplayHomePage);

    return _super.apply(this, arguments);
  }

  _createClass(DisplayHomePage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "Use me to keep track of customers in the waiting list.");
    }
  }]);

  return DisplayHomePage;
}(React.Component);

function DisplayFreeSlots(props) {
  var length = props.length;
  return /*#__PURE__*/React.createElement("div", null, "Current capactity: ", length, " / 25");
}

function WaitRow(props) {
  var entry = props.entry;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, entry.id), /*#__PURE__*/React.createElement("td", null, entry.name), /*#__PURE__*/React.createElement("td", null, entry.number), /*#__PURE__*/React.createElement("td", null, entry.created.toDateString()));
}

function DisplayCustomers(props) {
  var waitRows = props.waitlist.map(function (entry) {
    return /*#__PURE__*/React.createElement(WaitRow, {
      key: entry.id,
      entry: entry
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Mobile Number"), /*#__PURE__*/React.createElement("th", null, "Date"))), /*#__PURE__*/React.createElement("tbody", null, waitRows));
}

var AddingCustomer = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddingCustomer, _React$Component2);

  var _super2 = _createSuper(AddingCustomer);

  function AddingCustomer() {
    _classCallCheck(this, AddingCustomer);

    return _super2.apply(this, arguments);
  }

  _createClass(AddingCustomer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "addCustomer",
        onSubmit: this.handleAddCust
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "number",
        placeholder: "Mobile Number"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return AddingCustomer;
}(React.Component);

var DeleteCustomer = /*#__PURE__*/function (_React$Component3) {
  _inherits(DeleteCustomer, _React$Component3);

  var _super3 = _createSuper(DeleteCustomer);

  function DeleteCustomer() {
    _classCallCheck(this, DeleteCustomer);

    return _super3.call(this);
  }

  _createClass(DeleteCustomer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "removeCustomer",
        onSubmit: this.handleRmCust
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "id",
        placeholder: "ID"
      }), /*#__PURE__*/React.createElement("button", null, "Remove"));
    }
  }]);

  return DeleteCustomer;
}(React.Component);

var HotelWaitlist = /*#__PURE__*/function (_React$Component4) {
  _inherits(HotelWaitlist, _React$Component4);

  var _super4 = _createSuper(HotelWaitlist);

  function HotelWaitlist() {
    var _this;

    _classCallCheck(this, HotelWaitlist);

    _this = _super4.call(this);
    _this.state = {
      waitlist: []
    };
    return _this;
  }

  _createClass(HotelWaitlist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          waitlist: initialWaitList
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Hotel Waitlist"), /*#__PURE__*/React.createElement(DisplayHomePage, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DisplayFreeSlots, {
        length: this.state.waitlist.length
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DisplayCustomers, {
        waitlist: this.state.waitlist
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddingCustomer, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DeleteCustomer, null));
    }
  }]);

  return HotelWaitlist;
}(React.Component);

var element = /*#__PURE__*/React.createElement(HotelWaitlist, null);
ReactDOM.render(element, document.getElementById('contents'));