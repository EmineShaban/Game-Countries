export default function Country(
    {

        capital,
        name,
        flags,
    }
) {
    // console.log(index)
    return (
        <div>

            <p>{capital} is the capital of</p>
            <img src={flags.png} />

            <p>{name.common}</p>


        </div>
    )
}