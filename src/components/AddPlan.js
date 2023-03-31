import style from "./AddPlan.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img1 from "public/static/przelewy24.png";
import img2 from "public/static/blik.png";
import img3 from "public/static/dotpay.jpg";
import img4 from "public/static/gpay.png";
import img5 from "public/static/maestro.png";
import img6 from "public/static/mastercard.png";
import img7 from "public/static/paypal.png";
import img8 from "public/static/visa.png";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";

const AddPlan = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [dataSaved, setDataSaved] = useState(false);
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.progressContainer}>
        <div className={style.progressBox}>
          <FontAwesomeIcon icon={faCheck} className={style.icon} />
        </div>
        <hr className={style.line}></hr>
        <div
          className={style.progressBox}
          style={{
            backgroundColor: `${
              paymentMethod !== null ? "#008d3d" : "#919191"
            }`,
          }}
        >
          <FontAwesomeIcon
            icon={paymentMethod === null ? faMinus : faCheck}
            className={style.icon}
          />
        </div>
        <hr className={style.line}></hr>
        <div
          className={style.progressBox}
          style={{
            backgroundColor: `${dataSaved === false ? "#919191" : "#008d3d"}`,
          }}
        >
          <FontAwesomeIcon
            icon={dataSaved === false ? faMinus : faCheck}
            className={style.icon}
          />
        </div>
      </div>
      {paymentMethod === null && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className={style.wrapper}
        >
          <h1>Wybierz metodę płatności</h1>
          <div className={style.payMethodsBox}>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("przelewy24")}
            >
              <Image src={img1} alt="przelewy24" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("blik")}
            >
              <Image src={img2} alt="blik" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("dotpay")}
            >
              <Image src={img3} alt="dotpay" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("gpay")}
            >
              <Image src={img4} alt="gpay" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("maestro")}
            >
              <Image src={img5} alt="maestro" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("mastercard")}
            >
              <Image src={img6} alt="mastercard" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("paypal")}
            >
              <Image src={img7} alt="paypal" className={style.image} />
            </div>
            <div
              className={style.payMethod}
              onClick={() => setPaymentMethod("visa")}
            >
              <Image src={img8} alt="visa" className={style.image} />
            </div>
          </div>
        </motion.div>
      )}
      {paymentMethod !== null && dataSaved === false && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className={style.wrapper}
        >
          <h1>Uzupełnij dane</h1>
          <p onClick={() => setPaymentMethod(null)}>Powrót</p>
          <div className={style.dataForm}>
            <h2 className={style.text}>Tu będzie zawartość formularza</h2>
            <button
              className={style.saveBtn}
              onClick={() => setDataSaved(true)}
            >
              Zapisz
            </button>
          </div>
        </motion.div>
      )}
      {dataSaved && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className={style.wrapper}
        >
          <h1>Sprawdź dane</h1>
          <p onClick={() => setDataSaved(false)}>Powrót</p>
          <div className={style.dataForm}>
            <h2 className={style.text}>
              Tu będą wypisane wszystkie uzupełnione dane
            </h2>
            <button
              className={style.saveBtn}
              onClick={() =>
                router.push("/account?current=accountDetails&createdPlan=true")
              }
            >
              Zapłać
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AddPlan;
