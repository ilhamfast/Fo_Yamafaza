import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../redux/reducers/campaignReducer";

function PageNumberSearch() {
  const { pageSearch } = useSelector((state) => state.campaign);
  const limit = pageSearch;
  const pages = Array.from({ length: limit }, (_, index) => index + 1);

  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.campaign);

  const handlePage = (value) => {
    dispatch(setPageNumber(value));
  };

  const renderPagination = () => {
    if (pages.length < 1) {
      return null;
    }

    const currentIndex = pages.indexOf(pageNumber);
    const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const nextPage =
      currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

    return (
      <>
        {pageSearch > 1 && (
          <nav
            aria-label="Page navigation example"
            className="flex justify-center gap-4 items-end"
          >
            <p className="font-Inter font-semibold text-gray-600 md:text-lg lg:text-xl">Halaman :</p>
            <ul className="inline-flex -space-x-px text-sm">
              {prevPage !== null && (
                <li key={prevPage}>
                  <button
                    className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 text-gray-500 bg-white hover:bg-green-400 hover:text-white `}
                    onClick={() => handlePage(prevPage)}
                  >
                    {prevPage}
                  </button>
                </li>
              )}

              <li key={pageNumber}>
                <button
                  className={`text-lg flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${"text-white bg-green-400 hover:bg-green-400 hover:text-gray-700 "}`}
                  onClick={() => handlePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>

              {nextPage !== null && (
                <li key={nextPage}>
                  <button
                    className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 text-gray-500 bg-white hover:bg-green-400 hover:text-white `}
                    onClick={() => handlePage(nextPage)}
                  >
                    {nextPage}
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </>
    );
  };

  return <div>{renderPagination()}</div>;
}

export default PageNumberSearch;
