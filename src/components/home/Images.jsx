import pgLogo from "../../images/pg.png";
import queryLogo from "../../images/query.svg"

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
        src="https://mkharibalaji.github.io/react-native-adyen-payment/rn_logo.png"
        alt="React-Native"
        className="w-18 "
      />
      <img
        src="https://www.manejandodatos.es/wp-content/uploads/2015/03/typescript.png"
        alt="Typescript"
        className="w-18"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
        alt="Graphql"
        className="w-18"
      />
      <img
        src="https://brandlogos.net/wp-content/uploads/2021/11/django-logo.png"
        alt="Python DJango"
        className="w-18"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboM_bCClquhBlDUWeyL_xnZr_5a3KqQ2FZA&usqp=CAU"
        alt="Express"
        className="w-18"
      />
      <img
        src="https://www.sportsengineers.com/wp-content/uploads/2015/05/react-logo-570x570.png"
        alt="React"
        className="w-18"
      />
      <img
        src="https://docs.nestjs.com/assets/logo-small.svg"
        alt="Nestjs"
        className="w-18"
      />
    </div>
  );
}

export default Images;
