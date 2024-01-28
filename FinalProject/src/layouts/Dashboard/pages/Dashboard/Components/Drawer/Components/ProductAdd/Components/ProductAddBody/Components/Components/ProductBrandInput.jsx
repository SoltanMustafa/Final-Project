import React, { useEffect, useState } from "react";
import { GetBrands } from "../../../../../../../../../../../../services/Product";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductBrandInput() {
  const [brandData, setBrandData] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const brandDispatch = useDispatch();

  useEffect(() => {
    GetBrands().then((r) => {
      const data = r?.data;
      setBrandData(data);
    });
  }, []);

  const handleBrandChange = (event) => {
    const selectedId = event.target.value;
    setSelectedBrandId(selectedId);
    brandDispatch(setData({ brand: selectedId }));
  };

  return (
    <>
      <div className="product-brand">
        <label htmlFor="">Brand</label>
        <div className="selector-container">
          <div className="search-wrapper">
            <select
              className="w-full"
              name="brandSelector"
              id="brandSelector"
              onChange={handleBrandChange}
              value={selectedBrandId}
              required
            >
              <option value="">Select Brand</option>
              {brandData.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
