import images from '../assets/images';

const Loader = () => {
  return (
    <>
        <div className="loader">
            <img src={images.woodOven} alt="loading" />
        </div>
    </>
  )
}

export default Loader