import React from 'react';

function Header() {
    return (
        <div className="header-container">
            <div className="h-title">Movie Reviews</div>
            <input type="text" placeholder="Search Movie" />
        </div>
    );
}
export default Header;