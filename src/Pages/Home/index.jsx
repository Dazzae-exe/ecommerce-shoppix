import React from "react";
import Card from "../../Components/Card";
import { AppContext } from "../../Context";
import ProductDetails from "../../Components/ProductDetails";

function Home() {
  const { items, inputSearchHandler, filteredItems, searchByTitle } = React.useContext(AppContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map((item) => (
            <Card
              key={item.id}
              data={item}
              title={item.title}
              price={item.price}
              category={item.category.name}
              image={item.images[0]}
              id={item.id}
            />
          ))
        )
      } else {
        return (
          <div>
            No se ha encontrado nada...
          </div>
        )
      }
    } else {
      return (
        items?.map((item) => (
              <Card
                key={item.id}
                data={item}
                title={item.title}
                price={item.price}
                category={item.category.name}
                image={item.images[0]}
                id={item.id}
              />
            ))
      )
    }
  }

  return (
    <div className="grid grid-cols-12 place-content-center place-items-center gap-8 container mx-auto w-full h-full">

      <input type="text" placeholder="Search" className="col-span-12 w-80 border border-black rounded-lg outline-none px-2 py-1" onChange={(event) => inputSearchHandler(event)}/>

      {renderView()}
      <ProductDetails />
    </div>
  );
}

export default Home;
