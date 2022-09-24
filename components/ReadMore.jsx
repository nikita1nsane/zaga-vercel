import React, { useState } from "react";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<div className="text">
	{isReadMore ? text.slice(0, 250) : text}
	{text.length > 250 ? 
        <div onClick={toggleReadMore} className="gameFull">
		{isReadMore ? "Читать полностью" : "Показать меньше"}
	</div> :
    null}
	</div>
);
};

export default ReadMore
