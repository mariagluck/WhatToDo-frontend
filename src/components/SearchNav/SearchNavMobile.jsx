// import DropdownCategory from "./DropdownCategory.jsx";
// import DropdownDate from "./DropdownDate.jsx";
// import KeywordSearch from "./KeywordSearch.jsx";
// import { FaSearch } from "react-icons/fa";
// import "./SearchNav.scss";

// export default function SearchNavMobile({
//   category,
//   setCategory,
//   date,
//   setDate,
//   keyword,
//   setKeyword,
//   getSearchResults,
// }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getSearchResults(category, date, keyword);
//   };

//   return (
//     <div>
//       <form className="search-navbar-mobile" onSubmit={handleSubmit}>
//         {/* <div className="search-icon-mobile">
//           <FaSearch />
//         </div> */}
//         <DropdownCategory category={category} setCategory={setCategory} />
// 		<DropdownDate date={date} setDate={setDate} />
// 		<KeywordSearch keyword={keyword} setKeyword={setKeyword} />
//         <button className="submit-mobile-search" type="submit">GO</button>
//       </form>
//     </div>
//   );
// }
