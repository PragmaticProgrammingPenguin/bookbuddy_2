export default AccountNode = ({ accountInfo }) => {
    return(
        <div className="accountInfo">
            <p>Hello, {accountInfo?.email}</p>
            {accountInfo.books?.length === 0 ? (
                <p>No books checked out.</p>    
            ) : (
                null
            )}
        </div>
    )
}