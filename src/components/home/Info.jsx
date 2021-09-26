import logo from "../../images/me.jpg";
import Images from "./Images";

function Info() {
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex mt-1 flex-wrap">
            <img
              alt="me"
              className="lg:w-1/2 w-full object-cover object-center rounded-3xl border border-gray-500"
              src={logo}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Pár viet o mne
              </h1>
              <p className="leading-relaxed text-2xl m-3 text-gray-700">
              Ahoj Volám sa Peter Dinis. Mám 20 rokov. Pochádzam z Bardejova. Naštevoval som Priemyslovku v Bardejove. Skúsil som to aj na vysokej škole v Žiline, ale tam mi to nevyšlo. Odbor Informatika. Medzi moje záujmy patrí futbal, volejbal. Akutálne si hľadám prácu a som otvorený všetkých ponukám.
              </p>
              <p className="leading-relaxed text-2xl m-3 text-gray-700">
              Najväčšie skúsenosti mám z technológiami: React Python Django a Typescript Node.
              </p>
              <p className="leading-relaxed text-2xl m-3 text-gray-700">
              Rád by som v budúcnosti pracoval ako Frontend vývojár alebo ako backend vývojár.
              </p>
              <p className="leading-relaxed text-3xl text-gray-700 mt-6">
                Môj obľubený stack
                <div className="mt-1">
                <Images />
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
