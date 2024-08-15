import React, { useState } from 'react';
import './Table.css'; // Import the CSS file

const TableUser = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleState, setToggleState] = useState({});
    const [showPopup, setShowPopup] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { id: 1, name: 'Cameron Williamson', email: 'paul.fin@gmail.com', points: 120, status: true, registrationDate: '2024-08-14', username: 'username001', entreprise: 'Company A', subscription: 'Gratuit' },
        { id: 2, name: 'Lisa Smith', email: 'lisa.smith@example.com', points: 95, status: false, registrationDate: '2024-07-22', username: 'username002', entreprise: 'Company B', subscription: 'Premium' },
        // Add more rows as needed
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

    const sortedData = [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className="table-wrapper">
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
                        <th>
                            Entreprise
                        </th>
                        <th onClick={() => handleSort('email')}>
                            Contact
                            <span className={`sort-icon ${sortConfig.key === 'email' ? sortConfig.direction : ''}`}></span>
                        </th>
                        <th onClick={() => handleSort('subscription')}>
                            Abonnement
                            <span className={`sort-icon ${sortConfig.key === 'subscription' ? sortConfig.direction : ''}`}></span>
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
                            <td>{row.entreprise}</td>
                            <td>{row.email}</td>
                            <td>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    paddingLeft: 4,
                                    paddingRight: 4,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    background: row.subscription === 'Gratuit' ? 'rgba(0, 189, 192, 0.08)' : 'rgba(129, 11, 255, 0.10)',
                                    borderRadius: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                    display: 'inline-flex'
                                }}>
                                    <div style={{
                                        color: row.subscription === 'Gratuit' ? '#00BDBA' : '#810AFF',
                                        fontSize: 18,
                                        fontFamily: 'revert',
                                        fontWeight: '400',
                                        wordWrap: 'break-word'
                                    }}>
                                        {row.subscription}
                                    </div>
                                </div>
                            </td>
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

export default TableUser;
