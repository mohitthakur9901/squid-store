import { useRef, useState, useEffect, ChangeEvent } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Button } from '../ui/Button';
import { TextInput } from '../ui/TextInput';

const SearchBar = () => {
  const ref = useRef(null);
  const [search, setSearch] = useState<string>('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar); 
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


 
  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="relative">
    {!showSearchBar ? (
      <Button onClick={toggleSearchBar} className="bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none font-bold text-lg">
        <CiSearch />
      </Button>
    ) : (
      <div className="flex">
        <TextInput
          placeholder="Search"
          label=""
          value={search}
          onChange={handleInputChange}
          className="mr-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
        />
        <Button
          onClick={() => {console.log(search);
           }}
          className="px-4 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none mt-4 mb-2"
        >
          Search
        </Button>
      </div>
    )}
  </div>
  );
};

export default SearchBar;
