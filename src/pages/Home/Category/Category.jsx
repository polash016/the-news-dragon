import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    const {id} = useParams();
  const category = useLoaderData();
  return (
    <div>
      {id && <h3>Number of News: {category.length}</h3>}
      {
      category.map((news) => 
        <NewsCard key={news._id} news={news}></NewsCard>
      )
      }
    </div>
  );
};

export default Category;
