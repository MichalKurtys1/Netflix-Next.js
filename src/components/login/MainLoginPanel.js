import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";
import { useState } from "react";

const MainLoginSection = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(true);

  const flipHandler = () => {
    if (isOpenLogin) {
      setIsOpenLogin(false);
    } else {
      setIsOpenLogin(true);
    }
  };

  return (
    <div>
      {isOpenLogin && <LoginSection registerHandler={flipHandler} />}
      {!isOpenLogin && <RegisterSection loginHandler={flipHandler} />}
    </div>
  );
};

export default MainLoginSection;
