import { useTranslation } from "react-i18next";
import HelperModal from "../shared/HelperModal";

export default function TimeLine() {
  const { t } = useTranslation();

  return (
    <div className="pt-2">
      <h1 className="text-center text-4xl mt-4">
        {t("description.work")} <HelperModal />
      </h1>
      <div className="p-4 mt-4">
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  {t("description.workOne")}
                </h3>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  {" "}
                  {t("description.workTwo")}
                </h3>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  {" "}
                  {t("description.workThree")}
                </h3>
              </div>

              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">
                    (5 Mesiace) Navisys
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
