import React, { useState } from "react";
import "./Gallery.css";
import GalleryItems from "./GalleryItems.js";
import ItemCard from "./ItemCard";

function Gallery() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("asc");

    const handleButtonClick = () => {
        if (sortType === "asc") {
            setSortType("desc");
        }
        else {
            setSortType("asc");
        }
    }

    const filterButton = sortType === "asc" ? "gg-sort-za" : "gg-sort-az";

    const sortedItems = GalleryItems.sort((a, b) => {
        const isReversed = sortType === "asc" ? 1 : -1;
        return isReversed * a.title.localeCompare(b.title);
    });

    const filteredItems = sortedItems.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    return (
        <div className="gallery">
            <div className="gallery-header">
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                    className="gallery-input"
                >
                </input>
                <button className="gallery-filter" onClick={handleButtonClick} aria-label="filter cards">
                    <i class={filterButton}></i>
                </button>
            </div>
            <div className="gallery-content">
                {filteredItems.map(item => (
                    <ItemCard key={item.title} title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
