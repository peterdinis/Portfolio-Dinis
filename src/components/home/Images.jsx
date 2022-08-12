function Images() {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 mt-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
        alt="Postgresql"
        className="w-18"
      />
      <img
        src="data:image/png;base64,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"
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
