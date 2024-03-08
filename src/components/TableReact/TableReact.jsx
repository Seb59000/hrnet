import { useStore, useSelector } from "react-redux";
import { getEmployees } from '../../services/selectors'
import React, { useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { RetrieveEmployees } from '../../services/EmployeeModel';

const columns = [
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',
    },
    {
        Header: 'Department',
        accessor: 'department',
    },
    {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
    },
    {
        Header: 'Street',
        accessor: 'street',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'State',
        accessor: 'state',
    },
    {
        Header: 'Zip Code',
        accessor: 'zipCode',
    },
];

const TableReact = () => {
    const data = useSelector(getEmployees);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Paramètres initiaux de la pagination
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter } = state;

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                id="search"
            />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '↓'
                                                : '↑'
                                            : '↕️'}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TableReact;
