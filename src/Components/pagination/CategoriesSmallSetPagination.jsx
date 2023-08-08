
import { useState } from 'react';

function CategoriesSmallSetPagination({get_blog_list_page, blog_list, count, category_id}){

    const [active, setActive] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const visitPage = (page) => {
        // window.scrollTo(0, 0);
        setCurrentPage(page);
        setActive(page);
        get_blog_list_page(category_id,page)
    }

    const previous_number = () => {
      // window.scrollTo(0, 0);
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
            get_blog_list_page(category_id,currentPage-1)
        }
    };

    const next_number = () => {window.scrollTo(0, 0);
      if (currentPage !== Math.ceil(blog_list.length/3)) {
          setCurrentPage(currentPage+1);
          setActive(currentPage+1);
          get_blog_list_page(category_id,currentPage+1)
      }
    };

    let numbers = [];

    const getNumbers = () => {
      let itemsPerPage = listingsPerPage;
      let pageNumber = 1;

      for (let i = 0; i < count; i += itemsPerPage) {
        const page = pageNumber;
        let content = null;

        if (active === page) {
          content = (
              <div key={i} >
                  <div >
                  {pageNumber}
                  </div>
              </div>
          );
        }
        else {
          content = (
              <div key={i} onClick={() => {
                visitPage(page)
                }} >
                <div >
                  {pageNumber}
                </div>
              </div>
          );
        }

        numbers.push(
          content
        );
        pageNumber++;
      }

      return numbers;
    }

    return(
        <div className="pagination">
        <nav className=" nav-pagination">
          <div>
            <button className=" button-pagination"
              onClick={() => {
                previous_number();
              }}
            >
              <i className ="fa fa-caret-left"></i>
            </button>
          </div>
  
          {getNumbers()}
  
          <div>
            <button className=" button-pagination"
              onClick={() => {
                next_number();
              }}
            >
               <i className ="fa fa-caret-right"></i>
            </button>
          </div>
        </nav>
      </div>
    
    )
}

export default CategoriesSmallSetPagination