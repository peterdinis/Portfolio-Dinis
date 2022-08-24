import pgLogo from "../../images/pg.png";
import queryLogo from "../../images/query.svg"
import nativeLogo from "../../images/native.png"
import typescriptLogo from "../../images/typescript.png"
import graphqlLogo from "../../images/graphql.png";
import djangoLogo from "../../images/django-logo.png";
import expressLogo from "../../images/express.png";
import reactLogo from "../../images/react.png";
import nestjsLogo from "../../images/nestjs.svg"

function Images() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 mt-2">
      <img
        src={pgLogo}
        alt="Postgresql"
        className="w-18"
      />
      <img
        src={queryLogo}
        alt="React-Query"
        className="w-18"
      />
      <img
        src={nativeLogo}
        alt="React-Native"
        className="w-18 "
      />
      <img
        src={typescriptLogo}
        alt="Typescript"
        className="w-18"
      />
      <img
        src={graphqlLogo}
        alt="Graphql"
        className="w-18"
      />
      <img
        src={djangoLogo}
        alt="Python DJango"
        className="w-18"
      />
      <img
        src={expressLogo}
        alt="Express"
        className="w-18"
      />
      <img
        src={reactLogo}
        alt="React"
        className="w-18"
      />
      <img
        src={nestjsLogo}
        alt="Nestjs"
        className="w-18"
      />
    </div>
  );
}

export default Images;
