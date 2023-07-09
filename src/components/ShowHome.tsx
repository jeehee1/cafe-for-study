import { useNavigate } from "react-router-dom";
import classes from "./ShowHome.module.css";

const ShowHome = () => {
  const navigate= useNavigate();
  const city = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충청",
    "전라",
    "경상",
    "제주",
  ];

  return (
    <div className={classes.home}>
      <div className={classes["home-left"]}>
        <img
          className={classes["title-img"]}
          src="https://images.unsplash.com/photo-1605362814200-8efc2d015560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"
          alt="cafe"
        />
      </div>
      <div className={classes["home-right"]}>
        <div>
          <h1 className={classes.title}>
            CAFE <span>FOR</span> STUDY
          </h1>
          <p className={classes.subtitle}>업무를 위한 카페를 찾고 계신가요?</p>
          <div className={classes.explain}>
            <div>
              <h3>Productivity</h3>
              <p>
                Wi-Fi와 충전을 위한 콘센트 제공, 넓은 좌석이 준비되어 있어요
              </p>
            </div>
            <div>
              <h3>Coffee & Food</h3>
              <p>머물고 싶은 장소에서 커피 한잔의 에너지를 얻어보세요</p>
            </div>
            <div>
              <h3>Favorite</h3>
              <p>내가 좋아하는 카페를 다른사람들과 공유해보세요</p>
            </div>
          </div>
          <div className={classes["city-list"]}>
            {city.map((c) => (
              <div>
                <button key={c} className={classes["city-btn"]} onClick={() => navigate(`/cafes?city=${c}`)}>
                  {c}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowHome;
