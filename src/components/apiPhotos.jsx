

export const ApiPhotos = (props) =>{
    return (
        <>
        <img className="img-cover" alt="random" src={props.photo.url}/>
        </>
    )
}