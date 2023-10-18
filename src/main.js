"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_table_1 = require("@tanstack/react-table");
var dataUrl = "https://reqres.in/api/users?per_page=100";
var columnHelper = (0, react_table_1.createColumnHelper)();
var columns = [
    columnHelper.accessor('id', {
        cell: function (info) { return info.getValue(); },
        footer: function (info) { return info.column.id; },
    }),
    columnHelper.accessor(function (row) { return row.first_name; }, {
        id: 'first_name',
        cell: function (info) { return React.createElement("i", null, info.getValue()); },
        header: function () { return React.createElement("span", null, "First Name"); },
        footer: function (info) { return info.column.id; },
    }),
    columnHelper.accessor(function (row) { return row.last_name; }, {
        id: 'last_name',
        cell: function (info) { return React.createElement("i", null, info.getValue()); },
        header: function () { return React.createElement("span", null, "Last Name"); },
        footer: function (info) { return info.column.id; },
    }),
    columnHelper.accessor(function (row) { return row.email; }, {
        id: 'email',
        cell: function (info) { return React.createElement("i", null, info.getValue()); },
        header: function () { return React.createElement("span", null, "Email"); },
        footer: function (info) { return info.column.id; },
    }),
    columnHelper.accessor(function (row) { return row.avatar; }, {
        id: 'avatar',
        cell: function (info) { return React.createElement("img", { src: info.getValue(), alt: 'avatar' }); },
        header: function () { return React.createElement("span", null, "Avatar"); },
        footer: function (info) { return info.column.id; },
    }),
];
function App() {
    var _a = React.useState(function () { return []; }), data = _a[0], setData = _a[1];
    React.useEffect(function () {
        fetch(dataUrl)
            .then(function (res) { return res.json(); })
            .then(function (json) { return setData(json.data); });
    }, []);
    var table = (0, react_table_1.useReactTable)({
        data: data,
        columns: columns,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
    });
    return (React.createElement("div", { className: "p-2" },
        React.createElement("table", null,
            React.createElement("thead", null, table.getHeaderGroups().map(function (headerGroup) { return (React.createElement("tr", { key: headerGroup.id }, headerGroup.headers.map(function (header) { return (React.createElement("th", { key: header.id }, header.isPlaceholder
                ? null
                : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()))); }))); })),
            React.createElement("tbody", null, table.getRowModel().rows.map(function (row) { return (React.createElement("tr", { key: row.id }, row.getVisibleCells().map(function (cell) { return (React.createElement("td", { key: cell.id }, (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()))); }))); })))));
}
exports.default = App;
