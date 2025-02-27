import { SearchIcon } from "@/assets/Icons";

const SearchBar = () => {
  return (
    <div className="px-4 w-full mb-12">
      <div className="flex px-2 justify-between border rounded-lg py-2 bg-gray-100 w-full">
        <input type="text" className="bg-transparent" placeholder="جستجو ..." />
        <button type="button" className="search-button">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
