import classes from "../discovery/ModalContent.module.scss";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { adressActions } from "../../redux/adress-slice";

import ModalContentItem from "./ModalContentItem";
import ModalSetLoaction from "./ModalSetLocation";
import { useState } from "react";
import ModalAdvanced from "./ModalAdvanced";
import ModalLocationItem from "./ModalLocationItem";

export default function ModalContent(props) {
  const userAdress = useSelector((state) => state.adress);
  const [location, setLocation] = useState("");
  const [advancedLocation, setAdvancedLocation] = useState({});
  const [whichModal, setWhichModal] = useState(0);

  const dispatch = useDispatch();

  function getLocationHandler(info) {
    setLocation(info);
  }
  function getAdvancedLocationHandler(info) {
    setAdvancedLocation(info);
    dispatch(adressActions.setAdress({ location, ...info }));
  }
  function whichModalHandler(number) {
    setWhichModal(number);
  }

  return (
    <div className={classes.text}>
      {whichModal === 0 ? (
        <>
          <p className={classes.heading}>Where?</p>
          <ul className={classes.list}>
            {userAdress.adress.map((item) => {
              return <ModalLocationItem city={item} key={item.entrance} />;
            })}
            <ModalContentItem onClick={whichModalHandler} />
          </ul>
        </>
      ) : (
        ""
      )}
      {whichModal === 1 ? (
        <ModalSetLoaction
          getLocation={getLocationHandler}
          onClick={whichModalHandler}
        />
      ) : (
        ""
      )}
      {whichModal === 2 ? (
        <ModalAdvanced
          location={location}
          onClick={getAdvancedLocationHandler}
          onCancel={props.onClick}
        />
      ) : (
        ""
      )}
      <MdOutlineCancel
        className={classes.cancel}
        onClick={() => {
          dispatch(adressActions.toggle(!userAdress.isShown));
        }}
      />
      {whichModal !== 0 && (
        <AiOutlineArrowLeft
          className={classes.back}
          onClick={() => {
            if (whichModal === 1) {
              setWhichModal(0);
            } else if (whichModal === 2) {
              setWhichModal(1);
            }
          }}
        />
      )}
    </div>
  );
}
