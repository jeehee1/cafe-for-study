import ShowShops from "../components/shops/ShowShops";
import { ShopType } from "../../types/shopTypes";

const ShopsList = () => {
  const DUMMY_SHOPS: ShopType[] = [
    {
      name: "카페1",
      img: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVFQyVCOSVCNCVFRCU4RSU5OHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      city: "서울시 강남구",
      features: ["와이파이", "넓은 좌석"],
      icons: [
        require("../components/icons/wifi-btn.png"),
        require("../components/icons/seat-btn.png"),
      ],
    },
  ];

  for (let i = 0; i < 16; i++) {
    DUMMY_SHOPS.push({
      name: "카페1",
      img: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVFQyVCOSVCNCVFRCU4RSU5OHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      city: "서울시 강남구",
      features: ["와이파이", "넓은 좌석"],
      icons: [
        require("../components/icons/wifi-btn.png"),
        require("../components/icons/seat-btn.png"),
      ],
    });
  }
  return <ShowShops shops={DUMMY_SHOPS} />;
};

export default ShopsList;
