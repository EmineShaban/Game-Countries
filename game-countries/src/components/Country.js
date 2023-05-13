export default function Country(
    {

        capital,
        name,
        flags,
        // index
    }
) 


//    console.log(index)
{
    return (
        <div>
{/* <p>{index}</p> */}
            <p>{capital} is the capital of</p>
            <img src={flags} />

            <p>{name}</p>


        </div>
    )
}