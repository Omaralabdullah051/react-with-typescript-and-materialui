type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = ({status}: StatusProps) => {
    return (
        <div>
           {status === 'loading' ? <h2>Loading....</h2> : ''}
           {status === 'success' ? <h2>Data Fetched successfullly</h2> : ''}
           {status === 'error' ? <h2>Error fetching data</h2> : ''}
        </div>
    )
}