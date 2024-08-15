import React, { useState } from 'react';
import './TableUser.css'; // Import the CSS file

const TableAdmin = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleState, setToggleState] = useState({});
    const [showPopup, setShowPopup] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { id: 1, name: 'Cameron Williamson', email: 'paul.fin@gmail.com', points: 120, status: true, registrationDate: '2024-08-14', username: 'username001' },
        { id: 2, name: 'Lisa Smith', email: 'lisa.smith@example.com', points: 95, status: false, registrationDate: '2024-07-22', username: 'username002' },
        { id: 3, name: 'John Doe', email: 'john.doe@example.com', points: 150, status: true, registrationDate: '2024-06-15', username: 'username003' },
        { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', points: 80, status: false, registrationDate: '2024-05-11', username: 'username004' },
        { id: 5, name: 'Michael Brown', email: 'michael.brown@example.com', points: 200, status: true, registrationDate: '2024-04-10', username: 'username005' },
        { id: 6, name: 'Emma Wilson', email: 'emma.wilson@example.com', points: 60, status: true, registrationDate: '2024-03-30', username: 'username006' },
        { id: 7, name: 'Olivia Taylor', email: 'olivia.taylor@example.com', points: 75, status: false, registrationDate: '2024-02-20', username: 'username007' },
        { id: 8, name: 'James Anderson', email: 'james.anderson@example.com', points: 110, status: true, registrationDate: '2024-01-12', username: 'username008' },
        { id: 9, name: 'Sophia Martinez', email: 'sophia.martinez@example.com', points: 140, status: false, registrationDate: '2023-12-05', username: 'username009' },
        { id: 10, name: 'Benjamin Harris', email: 'benjamin.harris@example.com', points: 130, status: true, registrationDate: '2023-11-01', username: 'username010' },
        { id: 11, name: 'Charlotte Clark', email: 'charlotte.clark@example.com', points: 105, status: false, registrationDate: '2023-10-15', username: 'username011' },
        { id: 12, name: 'William Lewis', email: 'william.lewis@example.com', points: 125, status: true, registrationDate: '2023-09-20', username: 'username012' },
    ];

    const handleCheckboxChange = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        setSelectAll((prev) => {
            const newSelectAll = !prev;
            if (newSelectAll) {
                setSelectedRows(data.map((row) => row.id));
            } else {
                setSelectedRows([]);
            }
            return newSelectAll;
        });
    };

    const handleToggleChange = (id) => {
        setToggleState((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleActionClick = (id) => {
        setShowPopup((prev) => (prev === id ? null : id));
    };

    const handleClosePopup = () => {
        setShowPopup(null);
    };

    const handleUpdate = () => {
        // Handle update logic here
        handleClosePopup();
    };

    const handleDelete = () => {
        // Handle delete logic here
        handleClosePopup();
    };

    const handleSort = (key) => {
        const direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction });
    };
    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchTerm) ||
        row.email.toLowerCase().includes(searchTerm) ||
        row.username.toLowerCase().includes(searchTerm)
    );
    const sortedData = [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className="table-wrapper1">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Recherche par nom, email, nombre de points, statut"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="three-dots-button">...</button>
            </div>
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />
                    </th>
                    <th onClick={() => handleSort('name')}>
                        Nom
                        <span className={`sort-icon ${sortConfig.key === 'name' ? sortConfig.direction : ''}`}></span>
                    </th>
                    <th onClick={() => handleSort('email')}>
                        Contact
                        <span className={`sort-icon ${sortConfig.key === 'email' ? sortConfig.direction : ''}`}></span>
                    </th>
                    <th onClick={() => handleSort('points')}>
                        Nombre de points
                        <span className={`sort-icon ${sortConfig.key === 'points' ? sortConfig.direction : ''}`}></span>
                    </th>
                    <th onClick={() => handleSort('status')}>
                        Statut
                        <span className={`sort-icon ${sortConfig.key === 'status' ? sortConfig.direction : ''}`}></span>
                    </th>
                    <th onClick={() => handleSort('registrationDate')}>
                        Date d’inscription
                        <span className={`sort-icon ${sortConfig.key === 'registrationDate' ? sortConfig.direction : ''}`}></span>
                    </th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRows.includes(row.id)}
                                onChange={() => handleCheckboxChange(row.id)}
                            />
                        </td>
                        <td className="name-cell">
                            <div className="avatar">{row.name.split(' ').map((n) => n[0]).join('')}</div>
                            <div className="name-details">
                                <div className="fullname">{row.name}</div>
                                <div className="username">@{row.username}</div>
                            </div>
                        </td>
                        <td>{row.email}</td>
                        <td>{row.points}</td>
                        <td>
                            <div
                                className={`toggle-switch ${toggleState[row.id] ?? row.status ? 'active' : ''}`}
                                onClick={() => handleToggleChange(row.id)}
                            >
                                <div className="toggle-slider"></div>
                            </div>
                        </td>
                        <td>{row.registrationDate}</td>
                        <td>
                            <div className="actions-menu" onClick={() => handleActionClick(row.id)}>
                                &#x22EE;
                            </div>
                            {showPopup === row.id && (
                                <div className="popup">
                                    <button onClick={handleUpdate}>Update</button>
                                    <button onClick={handleDelete}>Delete</button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default TableAdmin;
