import { LazyLoadImage } from "react-lazy-load-image-component";

function KnowledgeCard(props) {
  return (
    <div className="bg-white rounded shadow px-8 py-6 flex items-center">
      <div className="p-4 rounded">
        <LazyLoadImage
          className="w-20"
          src={props.image}
          alt="KnowledgePicture"
        />
      </div>
      <div className="ml-6">
        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
          {props.name}
        </h3>
      </div>
    </div>
  );
}

export default KnowledgeCard;
