import styled from "./styles.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbTrash } from "react-icons/tb";

export type AddQuantityControlProps = {
  quantity: number;
  id: string;
  // eslint-disable-next-line no-unused-vars
  removeProduct: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeQuantity: (quantity: number, op: "add" | "remove") => void;
};

export const AddQuantityControl = ({
  onChangeQuantity,
  quantity = 1,
  removeProduct,
  id
}: AddQuantityControlProps) => {
  return (
    <div className={styled.contentAddQuantity}>
      <div className={styled.rowAddQuantity}>
        <button
          type="button"
          onClick={() => onChangeQuantity(quantity, "remove")}
        >
          <IoIosArrowBack />
        </button>

        <span>{quantity}</span>

        <button type="button" onClick={() => onChangeQuantity(quantity, "add")}>
          <IoIosArrowForward />
        </button>
      </div>

      <button type="button" onClick={() => removeProduct(id)}>
        <TbTrash />
      </button>
    </div>
  );
};
