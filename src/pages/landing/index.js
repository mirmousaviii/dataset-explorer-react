import React from "react";
import './index.css'
import TextField from '@material-ui/core/TextField';

function Home() {
    const [search, setSearch] = React.useState('');
    const publicPath = window.location.href;
    const list = [
        {
            "id": 1,
            "name": "Employees",
            "path": "data/employees.csv"
        }, {
            "id": 2,
            "name": "Customers",
            "path": "data/customers.csv"
        }, {
            "id": 3,
            "name": "Products",
            "path": "data/products.csv"
        }, {
            "id": 4,
            "name": "Orders",
            "path": "data/orders.csv"
        }
    ]

    return (
        <div className='landing'>
            <div class="search-box">
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Search datasets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
            <div class="result-container">
                <h1>{list.length} datasets found</h1>
                {list.map((e) => (
                    e.name.includes(search) && (
                        <div className='result-content'>
                            <p className="name">{e.name}</p>
                            <a
                                href={`${publicPath}` + e.path}
                                target="_blank"
                                download
                            >csv</a>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Home