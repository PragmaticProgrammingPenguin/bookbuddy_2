import SingleBook from "../../components/SingleBook/SingleBook"
const GetReservations = ({ reservations }) => {
    console.log(reservations)
    return(
        <div className="book-list">
            {reservations?.map((book) => (
                <SingleBook key={book.id} book={book} parent="reservations" token={token} />
            ))}
        </div>
    )
}

export default GetReservations