import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Arrow from "../../assets/Arrow.png";
import styles from "./Modal.module.scss";
import { MODAL_PRODUCTS } from "../../constants";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    borderRadius: "20px",
  },
}));

const Modal = ({ open, setOpen, currentProduct }) => {
  const [initial, setInitial] = useState({
    logo: "",
    title: "",
    descript: "",
    list: [],
    price: "",
  });
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    open && setInitial(MODAL_PRODUCTS[currentProduct]);
  }, [open, currentProduct]);
  const { title, descript, list, price } = initial;

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "https://t.me/katerina_kexx";
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <div className={styles.main}>
          <h2 className={styles.title}>{title}</h2>
          {descript && <p className={styles.descript}>{descript}</p>}
          {list && (
            <ul className={styles.descript}>
              {list.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>
          )}
          <div className={styles.customButton} onClick={handleClick}>
            <p>КУПИТЬ</p>
            <img src={Arrow} alt='Arrow'></img>
            <p>{price}</p>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default Modal;
