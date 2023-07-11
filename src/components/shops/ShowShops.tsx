import classes from "./ShowShops.module.css";
import { ShopType } from "../../../types/shopTypes";
import React, { useState } from "react";

const features = [
  { name: "와이파이", icon: require("../icons/wifi-btn.png"), isActive: false },
  {
    name: "넓은 좌석",
    icon: require("../icons/seat-btn.png"),
    isActive: false,
  },
  {
    name: "멋진 인테리어",
    icon: require("../icons/coffee-btn.png"),
    isActive: false,
  },
  {
    name: "콘센트 보유",
    icon: require("../icons/plug-btn.png"),
    isActive: false,
  },
  {
    name: "화장실",
    icon: require("../icons/toilet1-btn.png"),
    isActive: false,
  },
];

const ShowShops = ({ shops }: { shops: ShopType[] }) => {
  const [filters, setFilters] =
    useState<{ name: string; icon: any; isActive: boolean }[]>(features);
  console.log(filters);

  return (
    // 필터 선택 버튼 리스트
    <div className={classes["show-page"]}>
      <div className={classes["features-list"]}>
        {filters.map((f) => (
          <img
            className={
              f.isActive
                ? classes["filter-icon-active"]
                : classes["filter-icon"]
            }
            src={f.icon}
            onClick={
              () => {
                f.isActive = !f.isActive;
                setFilters([...filters]);
              }
              // selectedFeature
              //   ? setSelectedFeature([...selectedFeature, f])
              //   : setSelectedFeature([f])
            }
          />
        ))}
      </div>
      {/* 선택된 필터 리스트
      <div className={classes["selected-filter-frame"]}>
        <div className={classes["selected-filter"]}>
          <h4 className={classes["filter-header"]}>선택된 필터</h4>
          {selectedFeature?.map((f) => (
            <span>{f.name} <span className={classes['delete-filter-btn']}>x</span></span>
          ))}
        </div>
        <hr />
      </div> */}
      {/* 카페 정보 리스트 */}
      <div className={classes["shops-list"]}>
        {shops.map((s) => (
          // 단일 카페 정보
          <div className={classes.shop}>
            <img src={s.img!} className={classes["shop-img"]} />
            <div className={classes["shop-info"]}>
              <h4 className={classes["shop-name"]}>{s.name}</h4>
              <p className={classes["shop-city"]}>{s.city}</p>
              <p className={classes["shop-filter-icons"]}>
                {s.icons.map((i) => (
                  <img src={i} />
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowShops;
