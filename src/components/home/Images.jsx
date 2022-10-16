import pgLogo from "../../images/pg.png";
import queryLogo from "../../images/query.svg"
import nativeLogo from "../../images/native.png"
import typescriptLogo from "../../images/typescript.png"
import jestLogo from "../../images/jest.png";
import djangoLogo from "../../images/django-logo.png";
import expressLogo from "../../images/express.png";
import reactLogo from "../../images/react.png";
import nestjsLogo from "../../images/nestjs.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Images() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 mt-2">
      <LazyLoadImage
        src={pgLogo}
        alt="Postgresql"
        className="w-18"
      />
      <LazyLoadImage
        src={queryLogo}
        alt="React-Query"
        className="w-18"
      />
      <LazyLoadImage
        src={nativeLogo}
        alt="React-Native"
        className="w-18 "
      />
      <LazyLoadImage
        src={typescriptLogo}
        alt="Typescript"
        className="w-18"
      />
      <LazyLoadImage
        src={jestLogo}
        alt="Jest"
        className="w-18"
      />
      <LazyLoadImage
        src={djangoLogo}
        alt="Python Django"
        className="w-18"
      />
      <LazyLoadImage
        src={expressLogo}
        alt="Express"
        className="w-18"
      />
      <LazyLoadImage
        src={reactLogo}
        alt="React"
        className="w-18"
      />
      <LazyLoadImage
        src={nestjsLogo}
        alt="Nestjs"
        className="w-18"
      />
    </div>
  );
}

export default Images;
