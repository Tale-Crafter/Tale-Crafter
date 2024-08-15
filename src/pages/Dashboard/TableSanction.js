import React, { useState } from 'react';
import './TableUser.css'; // Import the CSS file

const TableSanction = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleState, setToggleState] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [searchTerm, setSearchTerm] = useState('');
    const [searchPopupTerm, setSearchPopupTerm] = useState('');
    const [currentTab, setCurrentTab] = useState('Panélistes'); // Manage current tab
    const [currentPage, setCurrentPage] = useState(1); // Manage pagination
    const [showAddSanctionPopup, setShowAddSanctionPopup] = useState(false);

    // Data for Panélistes and Clients
    const Panélistesdata = [
        { id: 1, name: 'Alice Johnson', Typesanction: 'alice.johnson@example.com', Raison: 'Violation', registrationDate: '2024-08-01', username: 'alicej', entreprise: 'Company A', subscription: 'Actif' },
        { id: 2, name: 'Bob Smith', Typesanction: 'bob.smith@example.com', Raison: 'Misuse', registrationDate: '2024-08-02', username: 'bobsmith', entreprise: 'Company B', subscription: 'Inactif' },
        { id: 3, name: 'Charlie Brown', Typesanction: 'charlie.brown@example.com', Raison: 'Abuse', registrationDate: '2024-08-03', username: 'charlieb', entreprise: 'Company C', subscription: 'Actif' },
        { id: 4, name: 'David Wilson', Typesanction: 'david.wilson@example.com', Raison: 'Fraud', registrationDate: '2024-08-04', username: 'davidw', entreprise: 'Company D', subscription: 'Inactif' },
        { id: 5, name: 'Emma Davis', Typesanction: 'emma.davis@example.com', Raison: 'Negligence', registrationDate: '2024-08-05', username: 'emmda', entreprise: 'Company E', subscription: 'Actif' },
        { id: 6, name: 'Frank Thomas', Typesanction: 'frank.thomas@example.com', Raison: 'Theft', registrationDate: '2024-08-06', username: 'frankth', entreprise: 'Company F', subscription: 'Inactif' },
        { id: 7, name: 'Grace Lee', Typesanction: 'grace.lee@example.com', Raison: 'Misconduct', registrationDate: '2024-08-07', username: 'gracelee', entreprise: 'Company G', subscription: 'Actif' },
        { id: 8, name: 'Hannah Taylor', Typesanction: 'hannah.taylor@example.com', Raison: 'Breach', registrationDate: '2024-08-08', username: 'hannaht', entreprise: 'Company H', subscription: 'Inactif' },
        { id: 9, name: 'Isaac Martinez', Typesanction: 'isaac.martinez@example.com', Raison: 'Violation', registrationDate: '2024-08-09', username: 'isaacm', entreprise: 'Company I', subscription: 'Actif' },
        { id: 10, name: 'Jasmine Garcia', Typesanction: 'jasmine.garcia@example.com', Raison: 'Neglect', registrationDate: '2024-08-10', username: 'jasmineg', entreprise: 'Company J', subscription: 'Inactif' },
        { id: 11, name: 'Kevin Anderson', Typesanction: 'kevin.anderson@example.com', Raison: 'Fraud', registrationDate: '2024-08-11', username: 'kevinan', entreprise: 'Company K', subscription: 'Actif' },
        { id: 12, name: 'Laura Robinson', Typesanction: 'laura.robinson@example.com', Raison: 'Abuse', registrationDate: '2024-08-12', username: 'laurar', entreprise: 'Company L', subscription: 'Inactif' },
        { id: 13, name: 'Michael Lewis', Typesanction: 'michael.lewis@example.com', Raison: 'Misuse', registrationDate: '2024-08-13', username: 'michaell', entreprise: 'Company M', subscription: 'Actif' },
        { id: 14, name: 'Nina Clark', Typesanction: 'nina.clark@example.com', Raison: 'Negligence', registrationDate: '2024-08-14', username: 'ninac', entreprise: 'Company N', subscription: 'Inactif' },
        { id: 15, name: 'Oscar Walker', Typesanction: 'oscar.walker@example.com', Raison: 'Breach', registrationDate: '2024-08-15', username: 'oscarw', entreprise: 'Company O', subscription: 'Actif' },
        { id: 16, name: 'Paula Hall', Typesanction: 'paula.hall@example.com', Raison: 'Violation', registrationDate: '2024-08-16', username: 'paulah', entreprise: 'Company P', subscription: 'Inactif' },
        { id: 17, name: 'Quincy Young', Typesanction: 'quincy.young@example.com', Raison: 'Misconduct', registrationDate: '2024-08-17', username: 'quincyy', entreprise: 'Company Q', subscription: 'Actif' },
        { id: 18, name: 'Rachel King', Typesanction: 'rachel.king@example.com', Raison: 'Theft', registrationDate: '2024-08-18', username: 'rachelk', entreprise: 'Company R', subscription: 'Inactif' },
        { id: 19, name: 'Steve Wright', Typesanction: 'steve.wright@example.com', Raison: 'Fraud', registrationDate: '2024-08-19', username: 'stevew', entreprise: 'Company S', subscription: 'Actif' },
        { id: 20, name: 'Tina Scott', Typesanction: 'tina.scott@example.com', Raison: 'Abuse', registrationDate: '2024-08-20', username: 'tinas', entreprise: 'Company T', subscription: 'Inactif' },
        { id: 21, name: 'Hamda Yedes', Typesanction: 'tina.scott@example.com', Raison: 'Abuse', registrationDate: '2024-08-20', username: 'tinas', entreprise: 'Company T', subscription: 'Inactif' }
    ];

    const Clientesdata = [
        { id: 1, name: 'John Doe', Typesanction: 'john.doe@example.com', Raison: 'Error', registrationDate: '2024-08-01', username: 'johndoe', entreprise: 'Client A', subscription: 'Active' },
        { id: 2, name: 'Jane Smith', Typesanction: 'jane.smith@example.com', Raison: 'Mismanagement', registrationDate: '2024-08-02', username: 'janesmith', entreprise: 'Client B', subscription: 'Inactive' },
        { id: 3, name: 'Emily Johnson', Typesanction: 'emily.johnson@example.com', Raison: 'Neglect', registrationDate: '2024-08-03', username: 'emilyj', entreprise: 'Client C', subscription: 'Active' },
        { id: 4, name: 'Michael Brown', Typesanction: 'michael.brown@example.com', Raison: 'Violation', registrationDate: '2024-08-04', username: 'michaelb', entreprise: 'Client D', subscription: 'Inactive' },
        { id: 5, name: 'Sarah Davis', Typesanction: 'sarah.davis@example.com', Raison: 'Misuse', registrationDate: '2024-08-05', username: 'sarahd', entreprise: 'Client E', subscription: 'Active' },
        { id: 6, name: 'Daniel Wilson', Typesanction: 'daniel.wilson@example.com', Raison: 'Fraud', registrationDate: '2024-08-06', username: 'danielw', entreprise: 'Client F', subscription: 'Inactive' },
        { id: 7, name: 'Olivia Martinez', Typesanction: 'olivia.martinez@example.com', Raison: 'Theft', registrationDate: '2024-08-07', username: 'oliviam', entreprise: 'Client G', subscription: 'Active' },
        { id: 8, name: 'Ethan Moore', Typesanction: 'ethan.moore@example.com', Raison: 'Abuse', registrationDate: '2024-08-08', username: 'ethanm', entreprise: 'Client H', subscription: 'Inactive' },
        { id: 9, name: 'Ava Taylor', Typesanction: 'ava.taylor@example.com', Raison: 'Negligence', registrationDate: '2024-08-09', username: 'avat', entreprise: 'Client I', subscription: 'Active' },
        { id: 10, name: 'James Anderson', Typesanction: 'james.anderson@example.com', Raison: 'Breach', registrationDate: '2024-08-10', username: 'jamesa', entreprise: 'Client J', subscription: 'Inactive' },
        { id: 11, name: 'Isabella Lee', Typesanction: 'isabella.lee@example.com', Raison: 'Violation', registrationDate: '2024-08-11', username: 'isabellal', entreprise: 'Client K', subscription: 'Active' },
        { id: 12, name: 'Benjamin Harris', Typesanction: 'benjamin.harris@example.com', Raison: 'Misconduct', registrationDate: '2024-08-12', username: 'benjaminh', entreprise: 'Client L', subscription: 'Inactive' },
        { id: 13, name: 'Sophia Clark', Typesanction: 'sophia.clark@example.com', Raison: 'Theft', registrationDate: '2024-08-13', username: 'sophiac', entreprise: 'Client M', subscription: 'Active' },
        { id: 14, name: 'Liam Lewis', Typesanction: 'liam.lewis@example.com', Raison: 'Fraud', registrationDate: '2024-08-14', username: 'liaml', entreprise: 'Client N', subscription: 'Inactive' },
        { id: 15, name: 'Mia Young', Typesanction: 'mia.young@example.com', Raison: 'Misuse', registrationDate: '2024-08-15', username: 'miay', entreprise: 'Client O', subscription: 'Active' },
        { id: 16, name: 'Noah Robinson', Typesanction: 'noah.robinson@example.com', Raison: 'Neglect', registrationDate: '2024-08-16', username: 'noahr', entreprise: 'Client P', subscription: 'Inactive' },
        { id: 17, name: 'Charlotte Walker', Typesanction: 'charlotte.walker@example.com', Raison: 'Violation', registrationDate: '2024-08-17', username: 'charlottew', entreprise: 'Client Q', subscription: 'Active' },
        { id: 18, name: 'Lucas Scott', Typesanction: 'lucas.scott@example.com', Raison: 'Breach', registrationDate: '2024-08-18', username: 'lucass', entreprise: 'Client R', subscription: 'Inactive' },
        { id: 19, name: 'Amelia Hall', Typesanction: 'amelia.hall@example.com', Raison: 'Fraud', registrationDate: '2024-08-19', username: 'ameliah', entreprise: 'Client S', subscription: 'Active' },
        { id: 20, name: 'Oliver King', Typesanction: 'oliver.king@example.com', Raison: 'Abuse', registrationDate: '2024-08-20', username: 'oliverk', entreprise: 'Client T', subscription: 'Inactive' }
    ];

    // Determine which data to display
    const data = currentTab === 'Panélistes' ? Panélistesdata : Clientesdata;

    // Handle page change
    const handlePageChange = (direction) => {
        setCurrentPage((prevPage) => {
            if (direction === 'next') return prevPage + 1;
            if (direction === 'prev') return prevPage - 1;
            return prevPage;
        });
    };

    // Paginate data
    const rowsPerPage = 10;
    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    const totalPages = Math.ceil(Panélistesdata.length / rowsPerPage);
    const totalPagesC = Math.ceil(Clientesdata.length / rowsPerPage);

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

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleUpdate = () => {
        handleShowPopup(); // Show the popup
    };
    const handleActionClick1 = (id) => {
        setShowPopup1((prev) => (prev === id ? null : id));
    };
    const handleActionClick = () => {
        setShowPopup(true);
    };
    const handleAddSanctionClick = () => {
        setShowAddSanctionPopup(true);
    };

    const handleCloseAddSanctionPopup = () => {
        setShowAddSanctionPopup(false);
    };

    const handleSort = (key) => {
        const direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handlePopupSearch = (event) => {
        setSearchPopupTerm(event.target.value.toLowerCase());
    };

    const filteredData = paginatedData.filter((row) =>
        row.name.toLowerCase().includes(searchTerm) ||
        row.Typesanction.toLowerCase().includes(searchTerm) ||
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

    const filteredPopupData = data.filter((row) =>
        row.name.toLowerCase().includes(searchPopupTerm)
    );

    return (
        <div className="table-wrapper1">
            <button onClick={handleActionClick} style={{    border: 0, padding: 18,    paddingInline: 70, background: 'linear-gradient(80deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Ajouter</div>
            </button>
            <div className="tabs" style={{display:"flex",gap:40,position:"absolute",left:20,    top: 32}}>
                <div
                    onClick={() => setCurrentTab('Panélistes')}
                    style={{ cursor: 'pointer', textAlign: 'center', color: currentTab === 'Panélistes' ? '#111111' : '#666666', fontSize: 16, fontFamily: 'revert', fontWeight: currentTab === 'Panélistes' ? '700' : 'normal', borderBottom: currentTab === 'Panélistes' ? '2px solid #111111' : 'none' }}
                >
                    Panélistes
                </div>
                <div
                    onClick={() => setCurrentTab('Clients')}
                    style={{ cursor: 'pointer', textAlign: 'center', color: currentTab === 'Clients' ? '#111111' : '#666666', fontSize: 16, fontFamily: 'revert', fontWeight: currentTab === 'Clients' ? '700' : 'normal', borderBottom: currentTab === 'Clients' ? '2px solid #111111' : 'none' }}
                >
                    Clients
                </div>
            </div>
            <div style={{width: '50%', height: '100%', transform: 'rotate(-180deg)', transformOrigin: '0 0',position:"relative", border: '1px #DDDDDD solid'}}></div>

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
                        <th onClick={() => handleSort('Typesanction')}>
                            Type de sanction
                            <span className={`sort-icon ${sortConfig.key === 'Typesanction' ? sortConfig.direction : ''}`}></span>
                        </th>
                        <th onClick={() => handleSort('Raison')}>
                            Raison
                            <span className={`sort-icon ${sortConfig.key === 'Raison' ? sortConfig.direction : ''}`}></span>
                        </th>
                        <th onClick={() => handleSort('subscription')}>
                            Abonnement
                            <span className={`sort-icon ${sortConfig.key === 'subscription' ? sortConfig.direction : ''}`}></span>
                        </th>
                        <th onClick={() => handleSort('registrationDate')}>
                            Date de sanction
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
                            <td>{row.Typesanction}</td>
                            <td>{row.Raison}</td>
                            <td>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    paddingLeft: 4,
                                    paddingRight: 4,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    background: row.subscription === 'Actif' ? 'rgba(0, 189, 192, 0.08)' : 'rgba(129, 11, 255, 0.10)',
                                    borderRadius: 4,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 10,
                                    display: 'inline-flex'
                                }}>
                                    <div style={{
                                        color: row.subscription === 'Actif' ? '#00BDBA' : '#810AFF',
                                        fontSize: 18,
                                        fontFamily: 'revert',
                                        fontWeight: '400',
                                        wordWrap: 'break-word'
                                    }}>
                                        {row.subscription}
                                    </div>
                                </div>
                            </td>
                            <td>{row.registrationDate}</td>
                            <td>
                                {/*<button className="update-button" onClick={handleUpdate}>Update</button>*/}
                                <div className="actions-menu" onClick={() => handleActionClick1(row.id)}>
                                    &#x22EE;
                                </div>
                                {showPopup1 === row.id && (
                                    <div className="popup">
                                        <button onClick={handleUpdate}>Voir détails</button>
                                        <button onClick={handleUpdate}>Modifier</button>
                                        <button onClick={handleUpdate}>Révoquer</button>
                                        <button onClick={handleUpdate}>Confirmer</button>
                                        <button onClick={handleUpdate}>Ajouter une note</button>
                                    </div>
                                )}

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br></br>

            </div>
            <br></br>
            <div className="pagination">
                <button className="page-button" onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
                    <div></div>
                </button>
                <div className={`page-item ${currentPage === 1 ? 'active-page' : 'inactive-page'}`}>1</div>
                <div className={`page-item ${currentPage === 2 ? 'active-page' : 'inactive-page'}`}>2</div>
                <div className="page-item inactive-page">...</div>
                <div className={`page-item ${currentPage === (currentTab === 'Panélistes' ? totalPages : totalPagesC) ? 'active-page' : 'inactive-page'}`}>
                    {currentTab === 'Panélistes' ? totalPages : totalPagesC}
                </div>
                <button className="page-buttonSuivant" onClick={() => handlePageChange('next')} disabled={currentPage * rowsPerPage >= data.length}>
                    <div></div>
                </button>
            </div>
            {showPopup && (
                <>
                    <div className="popup-overlay" onClick={handleClosePopup}></div>
                    <div className="popup1">
                        <button onClick={handleClosePopup} className="close-button">X</button>
                        <h2>Liste des comptes bloqués</h2>
                        <input
                            type="text"
                            className="popup-search-input"
                            placeholder="Recherche..."
                            value={searchPopupTerm}
                            onChange={handlePopupSearch}
                        />
                        <div className="popup-content">
                            {filteredPopupData.map((item) => (
                                <div key={item.id} className="popup-item">
                                    {item.name}
                                    <button onClick={handleAddSanctionClick} className="add-button">Ajouter</button>
                                </div>
                            ))}
                        </div>
                    </div>


                </>

            )}
            {showAddSanctionPopup && (
                <div className="popup2">
                    <div className="popup-header">
                        <div className="popup-close" onClick={handleCloseAddSanctionPopup}></div>
                        <h2>Ajouter une Sanction pour Marvin McKinney</h2>
                    </div>
                    <div className="popup-body">
                        <div className="form-group">
                            <label htmlFor="sanctionType">Type de sanction:</label>
                            <input id="sanctionType" type="text" placeholder="Sélectionner" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason">Raison:</label>
                            <input id="reason" type="text" placeholder="Décrire la raison de la sanction" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">Date de début:</label>
                            <input id="startDate" type="date" placeholder="JJ/MM/AAAA" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">Date de fin:</label>
                            <input id="endDate" type="date" placeholder="JJ/MM/AAAA" />
                        </div>
                    </div>
                    <div className="popup-footer">
                        <button className="popup-submit">Submit</button>
                        <button className="popup-cancel" onClick={handleCloseAddSanctionPopup}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableSanction;
