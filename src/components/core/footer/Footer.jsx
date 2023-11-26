import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes["footer"]}>
      <span>Email: aglisc@gmail.com</span>
      <span>Phone: 064 123 456 789</span>
      <span>Location: Kragujevac</span>
    </div>
  );
}

export default Footer;
