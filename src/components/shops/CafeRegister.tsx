import classes from "./CafeRegister.module.css";

const CafeRegister = () => {
  return (
    <div className={classes.register}>
      <h4>카페 정보를 입력해주세요.</h4>
      <div className={classes["regi-block"]}>
        <label htmlFor="name">카페 이름</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={classes["regi-block"]}>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" name="address" />
      </div>
      <div className={classes["regi-block"]}>
        <label htmlFor="img">이미지 url</label>
        <input type="text" id="img" name="img" />
      </div>
      <div className={classes["regi-block"]}>
        <label htmlFor="desc">한줄 설명</label>
        <input type="text" id="desc" name="desc" />
      </div>
      <div className={classes["regi-block"]}>
        <label htmlFor="name">해당하는 아이콘을 선택해주세요</label>
        <input type="text" />
      </div>
      <div className={classes["btn-list"]}>
        <button className={classes["cancel-btn"]}>취소</button>
        <button className={classes["save-btn"]}>다음</button>
      </div>
    </div>
  );
};

export default CafeRegister;
