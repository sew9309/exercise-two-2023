"use client"

const ArticleCard = ({description, title}) => { //arrow function rather than function declaration
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ArticleCard;