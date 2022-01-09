import "./DropdownCategory.scss";

export default function DropdownCategory({ category, setCategory }) {
	return (
		<div className="select">
			<select
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				className="standard-select"
			>
				<option className="option-category" value="Anything">
					Anything
				</option>
				<option className="option-category" value="Free">
					Free
				</option>
				<option className="option-category" value="Workshop">
					Workshop
				</option>
				<option className="option-category" value="Family">
					Family
				</option>
				<option className="option-category" value="Market">
					Market
				</option>
				<option className="option-category" value="Food">
					Food and drinks
				</option>
				<option className="option-category" value="Reading">
					Reading
				</option>
				<option className="option-category" value="Opening">
					Opening
				</option>
				<option className="option-category" value="Exhibition">
					Exhibition
				</option>
				<option className="option-category" value="Performing Arts">
					Performing Arts
				</option>
				<option className="option-category" value="Film">
					Film
				</option>
				<option className="option-category" value="Music">
					Music
				</option>
				<option className="option-category" value="Party">
					Party
				</option>
			</select>
		</div>
	);
}
