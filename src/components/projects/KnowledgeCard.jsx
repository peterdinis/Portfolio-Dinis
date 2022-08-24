import React from "react";

function KnowledgeCard(props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
      <div className="p-4 rounded">
        <img
          className="w-20"
          src={props.image}
          alt="KnowledgePicture"
        />
      </div>
      <div className="ml-6">
        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">
          {props.name}
        </h3>
      </div>
    </div>
  );
}

export default KnowledgeCard;
