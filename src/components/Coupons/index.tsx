import { Button } from "components/Button";
import { CartContext } from "context/CartProvider";
import { useContext, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineCheck } from "react-icons/ai";
import { RiCoupon2Fill } from "react-icons/ri";
import { GrCopy } from "react-icons/gr";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "./styles.module.scss";

export const Coupons = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentCopyCoupon, setCurrentCopyCoupon] = useState<string>("");

  const { coupons } = useContext(CartContext);

  const toggleOpenOrClose = () => setOpen((open) => !open);

  const handleCopyCoupon = (coupon: string) => {
    setCurrentCopyCoupon(coupon);

    setTimeout(() => {
      setCurrentCopyCoupon("");
    }, 2000);
  };

  return (
    <>
      <div className={styled.buttonModal}>
        <Button
          title="Ver cupons válidos"
          onClick={toggleOpenOrClose}
          fullWidth
          icon={<RiCoupon2Fill />}
          type="button"
        />
      </div>
      {open && (
        <div className={styled.overlay}>
          <div className={styled.container}>
            <button
              className={styled.closeButton}
              onClick={toggleOpenOrClose}
              type="button"
            >
              <AiOutlineCloseCircle />
            </button>

            <h1>Cupons Válidos</h1>

            <ul>
              {coupons.map((c) => (
                <li key={c.id}>
                  {c.name}{" "}
                  <CopyToClipboard
                    text={c.name}
                    onCopy={() =>
                      currentCopyCoupon === "" && handleCopyCoupon(c.name)
                    }
                  >
                    {currentCopyCoupon === c.name ? (
                      <AiOutlineCheck />
                    ) : (
                      <GrCopy />
                    )}
                  </CopyToClipboard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
