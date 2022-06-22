import { useState, useTransition } from "react";
import { Input } from "antd";

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

const dummyProducts = generateProducts();

const Transition = () => {
  const [isPendingSearch, startTransitionSearch] = useTransition();
  const [filterTerm, setFilterTerm] = useState<string>("");

  const updateFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransitionSearch(() => {
      setFilterTerm(event.target.value);
    });
  };

  const filterProducts = (filterTerm: string) => {
    if (!filterTerm) {
      return dummyProducts;
    }
    return dummyProducts.filter((product) => product.includes(filterTerm));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input type="text" onChange={updateFilterHandler} />
        {isPendingSearch && <p>Updating List...</p>}
        <ul>
          {filterProducts(filterTerm).map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Transition;
