export default function Country(
    {

        capital,
        name,
        flags,
    }
) {
   
    return (
        <div>

            <p>{capital} is the capital of</p>
            <img src={flags.png} />

            <p>{name.common}</p>


        </div>
    )
}