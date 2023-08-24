import { Form } from "react-router-dom";
import classes from "../discovery/ModalAdvanced.module.scss";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adressActions } from "../../redux/adress-slice";
export default function ModalAdvanced(props) {
  const [show, setShow] = useState(false);
  const onCancel = useSelector((state) => state.adress.isShown);
  const dispatch = useDispatch();

  const [type, setType] = useState("Zvono");

  const optionRef = useRef(null);
  const entranceRef = useRef(null);
  const otherRef = useRef(null);
  const floorRef = useRef(null);
  const apartmentRef = useRef(null);
  const passwordRef = useRef(null);

  function onSelectHandler(e) {
    e.preventDefault();
    if (e.target.value === "Home") {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  function onSubmitHandler(e) {
    e.preventDefault();

    if (!show) {
      props.onClick({
        type: optionRef.current.value,
        entrance: entranceRef.current.value,
        other: otherRef.current.value,
      });
    }
    if (type === "Zvono" && show) {
      props.onClick({
        type: optionRef.current.value,
        entrance: entranceRef.current.value,
        floor: floorRef.current.value,
        apartment: apartmentRef.current.value,
        number: passwordRef.current.value,
        other: otherRef.current.value,
      });
    } else if (type === "Sifra" && show) {
      props.onClick({
        type: optionRef.current.value,
        entrance: entranceRef.current.value,
        floor: floorRef.current.value,
        apartment: apartmentRef.current.value,
        sifra: passwordRef.current.value,
        other: otherRef.current.value,
      });
    } else if (type === "Vrata" && show) {
      props.onClick({
        type: optionRef.current.value,
        entrance: entranceRef.current.value,
        floor: floorRef.current.value,
        apartment: apartmentRef.current.value,
        other: otherRef.current.value,
      });
    }
    dispatch(adressActions.toggle(!onCancel));
  }

  function onRadioHandler(e) {
    setType(e);
  }

  return (
    <div className={classes.transform}>
      <p className={classes.heading}>Details about adress</p>
      <p className={classes.subheading}>
        Providing us with information about your address enables us to expedite
        the delivery of your order.
      </p>
      <p className={classes.bold}>Adress</p>
      <p className={classes.city}>Belgrade</p>
      <p className={classes.street}>{props.location}</p>
      <Form>
        <div className={classes.relative}>
          <select
            ref={optionRef}
            id="dropdown"
            name="dropdown"
            onChange={onSelectHandler}
            className={classes.select}
          >
            <option value={"Home"}>Home</option>
            <option value={"Aparment"}>Apartment</option>
          </select>
          <label htmlFor={"dropdown"} className={classes.type}>
            Type
          </label>
        </div>
      </Form>
      <Form onSubmit={onSubmitHandler}>
        {!show ? (
          <>
            <div className={classes.relative}>
              <input
                type="number"
                name={"entrance"}
                id={"entrance"}
                className={`${classes.input}`}
                ref={entranceRef}
                required
              />
              <label htmlFor={"entrance"} className={`${classes.label} `}>
                Entrance/staircase
              </label>
            </div>
          </>
        ) : (
          <>
            <div className={classes.relative}>
              <input
                type="text"
                name={"name"}
                id={"name"}
                className={classes.input}
                ref={entranceRef}
              />
              <label htmlFor={"name"} className={`${classes.label} `}>
                Name of aparment
              </label>
            </div>
            <div className={classes.apartment}>
              <input
                type="number"
                name={"Floor"}
                id={"Floor"}
                className={classes.input}
                ref={floorRef}
                required
              />
              <label htmlFor={"Floor"} className={`${classes.label} `}>
                Floor
              </label>
              <input
                type="number"
                name={"Apartment"}
                id={"Apartment"}
                className={classes.input}
                ref={apartmentRef}
                required
              />
              <label htmlFor={"Apartment"} className={classes.floor}>
                Apartment
              </label>
            </div>
            <p className={classes.how}>Kako da udjemo?</p>
            <div className={classes.forRadio}>
              <input
                type="radio"
                id="Zvono"
                name="fav"
                value="Zvono"
                className={classes.radio}
                defaultChecked
                onClick={() => onRadioHandler("Zvono")}
              />
              <label htmlFor="Zvono" className={classes.radioText}>
                Bell
              </label>
            </div>
            <div className={classes.forRadio}>
              <input
                type="radio"
                id="Sifra"
                name="fav"
                value="Sifra"
                className={classes.radio}
                onClick={() => onRadioHandler("Sifra")}
              />
              <label htmlFor="Sifra" className={classes.radioText}>
                Password for doors
              </label>
            </div>
            <div className={`${classes.forRadio} ${classes.margin}`}>
              <input
                type="radio"
                id="Vrata"
                name="fav"
                value="Vrata"
                className={classes.radio}
                onClick={() => onRadioHandler("Vrata")}
              />
              <label htmlFor="Vrata" className={classes.radioText}>
                Doors are open
              </label>
            </div>
            {type === "Zvono" || type === "Sifra" ? (
              <div className={classes.relative}>
                <input
                  type="text"
                  name={"apartmentNumber"}
                  id={"apartmentNumber"}
                  className={classes.input}
                  ref={passwordRef}
                />
                <label htmlFor={"apartmentNumber"} className={classes.label}>
                  {type === "Zvono"
                    ? `Name/Number of aparment`
                    : "Password for doors"}
                </label>
              </div>
            ) : (
              ""
            )}
          </>
        )}
        <div className={classes.relative}>
          <input
            type="text"
            name={"other"}
            id={"other"}
            className={classes.input}
            ref={otherRef}
          />
          <label htmlFor={"other"} className={classes.label}>
            Other
          </label>
        </div>
        <button className={classes.button}>Confrim</button>
      </Form>
    </div>
  );
}
