import "./KeywordSearch.scss";

export default function KeywordSearch({ keyword, setKeyword }) {
	return (
		<input
			type="text"
			placeholder="Keyword"
			className="keyword-mobile"
			name="s"
			value={keyword}
			onChange={(e) => setKeyword(e.target.value)}
		/>
	);
}
