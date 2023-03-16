import './Pagination.css'
const Pagination = (props) => {
    const links=props.links
    console.log(links)
    return ( 
        <div className="pagination">
            <a href={links.prev_page_url} >Prev</a>
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href={links.next_page_url}>Next</a>
        </div>


     );
}
 
export default Pagination;