import spinner from './spinner-8565_128.gif';

const Loader = () => {
  return (
    <div className="loader">
        <img src={spinner} alt="Loading..." />
        <h1>Fetching data</h1>
    </div>
  )
}

export default Loader