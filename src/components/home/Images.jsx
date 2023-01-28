import pgLogo from "../../images/pg.png";
import queryLogo from "../../images/query.svg";
import typescriptLogo from "../../images/typescript.png";
import jestLogo from "../../images/jest.png";
import expressLogo from "../../images/express.png";
import reactLogo from "../../images/react.png";
import nestjsLogo from "../../images/nestjs.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nextLogo from "../../images/next-js.svg";
import netLogo from "../../images/net.png";

function Images() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 mt-2">
      <LazyLoadImage src={pgLogo} alt={"Postgresql"} width={300} height={300} />
      <LazyLoadImage
        src={queryLogo}
        alt={"React-Query"}
        width={300}
        height={300}
      />
      <LazyLoadImage src={nextLogo} alt={"Nextjs"} width={300} height={300} />
      <LazyLoadImage
        src={typescriptLogo}
        alt={"Typescript"}
        width={300}
        height={300}
      />
      <LazyLoadImage src={jestLogo} alt={"Jest"} width={300} height={300} />
      <LazyLoadImage
        src={expressLogo}
        alt={"Express"}
        width={300}
        height={300}
      />
      <LazyLoadImage src={reactLogo} alt={"React"} width={300} height={300} />
      <LazyLoadImage src={netLogo} alt={"Asp.NET"} width={300} height={300} />
      <LazyLoadImage src={nestjsLogo} alt={"Nestjs"} width={300} height={300} />
    </div>
  );
}

export default Images;
