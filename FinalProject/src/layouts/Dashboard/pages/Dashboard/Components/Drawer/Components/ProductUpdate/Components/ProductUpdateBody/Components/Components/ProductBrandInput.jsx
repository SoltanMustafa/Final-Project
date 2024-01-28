import React, { useEffect, useState } from "react";
import { GetBrands } from "../../../../../../../../../../../../services/Product";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductBrandInput({ editData }) {
  const [brandData, setBrandData] = useState([]);
  const currentBrandId = editData?.brandId;
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [selectedBrandId, setSelectedBrandId] = useState(currentBrandId);
  const brandDispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const r = await GetBrands();
      const data = r?.data;
      setBrandData(data);

      const selectedBrand = data.find((brand) => brand._id === currentBrandId);
      if (selectedBrand) {
        setSelectedBrandName(selectedBrand.name);
      }
      brandDispatch(setData({ brand: currentBrandId }));
    };

    fetchData();
  }, [currentBrandId]);

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
              <option value="">{selectedBrandName}</option>
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
