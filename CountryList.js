import Country from "./Country"

export default function CountryList({
  country,

}) {

  return (
    <div>
      <p>
        Hello
      </p>
      {country.map((c, index) => 
      // console.log(index)
      <Country key={index} {...c}/>
      )

      }
    </div>
  );
  // })}

}