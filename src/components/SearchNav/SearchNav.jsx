import DropdownCategory from "./DropdownCategory.jsx";
import DropdownDate from "./DropdownDate.jsx";
import KeywordSearch from "./KeywordSearch.jsx";
import { FaSearch } from "react-icons/fa";
import "./SearchNav.scss";

export default function SearchNav({
	category,
	setCategory,
	date,
	setDate,
	keyword,
	setKeyword,
	getSearchResults,
}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		getSearchResults(category, date, keyword);
	};

	return (
		<div>
			<form className="search-navbar" onSubmit={handleSubmit}>
				<div className="search-icon">
					<FaSearch />
				</div>
				<DropdownCategory category={category} setCategory={setCategory} />
				<DropdownDate date={date} setDate={setDate} />
				<KeywordSearch keyword={keyword} setKeyword={setKeyword} />
				<button type="submit">GO</button>
			</form>
		</div>
	);
}
