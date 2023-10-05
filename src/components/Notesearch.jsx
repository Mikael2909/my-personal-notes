import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
function Notesearch({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");  // state untuk melacak input
    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);  // Memperbarui state dengan input saat ini
        onSearch(value);  // Mengirimkan input ke komponen utama untuk melakukan pencarian
    }
    return(
        <>
        <div className="note-search bg-info bg-opacity-25">
            <input type="text"  placeholder="Cari Catatan...."  value={searchTerm} onChange={handleInputChange}/>
        </div>
    </>
    )
   
}

export default Notesearch;