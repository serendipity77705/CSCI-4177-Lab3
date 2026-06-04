import React, { useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { apartments } from "../data/mockData";
import "../css/dashboard.css";

function ApartmentCard({ apartment }) {
    return (
        <div className="apartment-card">
            <img src={apartment.image} alt={apartment.name} />
            <div className="card-content">
                <h3>{apartment.name}</h3>
                <p className="address">📍 {apartment.address}</p>
                <p className="neighbourhood">{apartment.neighbourhood}</p>
                <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(apartment.rating))}</span>
                    <span className="review-count">({apartment.reviewCount} reviews)</span>
                </div>
                {apartment.tags && apartment.tags.length > 0 && (
                    <div className="tags">
                        {apartment.tags.map((tag, idx) => (
                            <span key={idx} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [filterNeighbourhood, setFilterNeighbourhood] = useState("all");

    const initials = (user.name.split(' ')[0][0] + user.name.split(' ')[user.name.split(' ').length - 1][0]).toUpperCase();

    function handleLogout() {
        logout();
        navigate("/signin");
    }

    const neighborhoods = ["all", ...new Set(apartments.map(a => a.neighbourhood))];

    const filteredAndSorted = useMemo(() => {
        let result = apartments;

        if (searchTerm) {
            result = result.filter(apt =>
                apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                apt.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterNeighbourhood !== "all") {
            result = result.filter(apt => apt.neighbourhood === filterNeighbourhood);
        }

        if (sortBy === "name") {
            result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "reviews") {
            result = [...result].sort((a, b) => b.reviewCount - a.reviewCount);
        }

        return result;
    }, [searchTerm, sortBy, filterNeighbourhood]);

    return (
        <>
        <div className="dashboard-page">

            <nav className="navbar">
                <div className="navbar-left">
                    <h1 className="product-name">TenantTrails</h1>
                    <input
                        type="text"
                        placeholder="🔍 Search by name or address..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="navbar-right">
                    <span className="initials">{initials}</span>
                    <span className="username">{user.name.split(' ')[0]}</span>
                    <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
                </div>
            </nav>
            
            <div className="dashboard-content">
            <div className="dash-header">
                <h1>Apartments in Halifax</h1>
                <p>Honest reviews from real tenants. Read before you rent.</p>
            </div>
            <div className="data">
                <div className="data-item">
                    <span className="number">5 </span><span className="label">apartments</span>
                </div>
                <div className="data-item">
                    <span className="number">13 </span><span className="label">reviews</span>
                </div>
                <div className="data-item">
                    <span className="number">4 </span><span className="label">neightbourhoods</span>
                </div>

            </div>
            <div className="dashboard-container">
                <div className="controls">
                    <select
                        className="filter-select"
                        value={filterNeighbourhood}
                        onChange={(e) => setFilterNeighbourhood(e.target.value)}
                    >
                        {neighborhoods.map(hood => (
                            <option key={hood} value={hood}>
                                {hood === "all" ? "All Neighbourhoods" : hood}
                            </option>
                        ))}
                    </select>
                    <select
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="name">Highest Rating</option>
                        <option value="rating">Highest Reviews</option>
                    </select>
                </div>

                <div className="apartments-grid">
                    {filteredAndSorted.length > 0 ? (
                        filteredAndSorted.map(apartment => (
                            <ApartmentCard key={apartment.id} apartment={apartment} />
                        ))
                    ) : (
                        <p className="no-results">No apartments found</p>
                    )}
                </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default Dashboard;
