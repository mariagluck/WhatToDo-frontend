import React from "react";
import DropdownCategory from "./DropdownCategory";
import DropdownDate from "./DropdownDate";
import KeywordSearch from "./KeywordSearch.jsx";
import { FaTimes } from "react-icons/fa";
import "./SearchNav.scss";
import "./SearchModalMobile.scss";

export default function SearchNavMobile({
    show,
    close,
    title,
    category,
    setCategory,
    date,
    setDate,
    keyword,
    setKeyword,
    getSearchResults
}) {
    const handleSubmit = () => {
        getSearchResults(category, date, keyword)
    }
    
    if (!show) {
        return null
    }

    return (
        <div className="search-modalContainer" onClick={close}>
            <div className="search-modal" onClick={(e) => e.stopPropagation()}>
                <header className="search-modal_header">
                    <h2 className="search-modal-header-title">{title}</h2>
                    <button className="close-search-modal" onClick={close}>
                        <FaTimes />
                    </button>
                </header>
                <main className="search-modal_content">
                    <DropdownCategory category={category} setCategory={setCategory} />
                    <DropdownDate date={date} setDate={setDate} />
                    <KeywordSearch keyword={keyword} setKeyword={setKeyword} className="keyword-mobile" />
                </main>
                <footer className="search-modal_footer">
                    <button className="submit-mobile-search" onClick={handleSubmit}>GO</button>
                    <button className="modal-close-search" onClick={close}>Cancel Search</button>
                </footer>
            </div>
        </div>
    );
}