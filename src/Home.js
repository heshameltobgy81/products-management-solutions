import React from 'react';
import Table from 'react-bootstrap/Table'
import { useState, useMemo } from 'react'
import ProductPagination from './Components/ProductPagination'
import { sortRows, filterRows, paginateRows } from './Components/methods';
import { Link } from 'react-router-dom';

const Home = ({productValues, productLabels}) => {
    const [activePage, setActivePage] = useState(1);
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'name' })
    const rowsPerPage = 5
    const [lists, setLists] = useState(productValues);
    const handleRemove = (id) => {
        setLists(lists.filter(list => list.id !== id));
    };
    const filteredRows = useMemo(() => filterRows(lists, filters), [lists, filters])
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)
    const count = filteredRows.length
    const totalPages = Math.ceil(count / rowsPerPage)
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const handleSort = (label) => {
    setActivePage(1)
    setSort((prevSort) => ({
        order: prevSort.order === 'asc' && prevSort.orderBy === label ? 'desc' : 'asc',
        orderBy: label,
    }))
    }

    return  (
        <div className="home">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {productLabels.map((productLabel, index) => 
                                <th key={index}>
                                    <span>{productLabel.label}</span>
                                    <button className="sort-btn" onClick={() => handleSort(productLabel.label)}>Sort</button>
                                </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                {calculatedRows.map((productValue, index) => 
                    <tr key={beginning + index} id={'product_' + beginning + index}>
                    {productLabels.map((productLabel, index) =>
                        (productLabel.format) ?
                            <td key={productLabel.label}>{productLabel.format(productValue[productLabel.label])}</td>
                        :          
                            <td key={productLabel.label}>{productValue[productLabel.label]}</td>
                    )}  
                    <td>  
                        <button onSubmit={(evt) => handleRemove(evt,productValue.id )} onClick={() => {
                          let text = "Are you sure you want to delete this row?";
                          if (confirm(text) == true) {
                             handleRemove(productValue.id)
                          }}}>Delete</button>
                    </td>
                    </tr>
                )}
                 </tbody>
            </Table>
            {count > 0 ? (
                <ProductPagination
                activePage={activePage}
                count={count}
                rowsPerPage={rowsPerPage}
                totalPages={totalPages}
                setActivePage={setActivePage}
                />
            ) : (
                <p>No data found</p>
            )}
        </div>
    )
}

export default Home
