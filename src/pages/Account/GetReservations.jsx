import SingleBook from "../../components/SingleBook/SingleBook"
export default GetReservations = ({ reservations }) => {
    return(
        <div className="book-list">
            {reservations?.map((book) => (
                <SingleBook key={book.id} book={book} parent="reservations" token={token} />
            ))}
        </div>
    )
}