import React from "react";
import { AppContext } from "../../Context";
import Card from "../../Components/Card";

function Category() {
  const { filteredItems } = React.useContext(AppContext);

  return (
    <div className="grid grid-cols-12 place-content-center place-items-center gap-8 container mx-auto w-full h-full">
      {filteredItems.length > 0
        ? filteredItems?.map((item) => (
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
        : "Not finding this time..."}
    </div>
  );
}

export default Category;
