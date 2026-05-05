import { useState } from 'react';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [listing, setListing] = useState('');

  return (
    <div className="search-wrap">
      <div className="search-box">
        <div className="sf">
          <label>Location</label>
          <input
            type="text"
            placeholder="Suburb, city or postcode"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="sf">
          <label>Property Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="">All Types</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Townhouse</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="sf">
          <label>Listing Type</label>
          <select value={listing} onChange={e => setListing(e.target.value)}>
            <option value="">Buy or Rent</option>
            <option>Buy</option>
            <option>Rent</option>
          </select>
        </div>
        <button className="btn-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}
