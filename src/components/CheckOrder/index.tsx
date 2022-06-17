import styled from "./styles.module.scss";
import { formatCurrency } from "utils/currency";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { Coupon } from "types/Coupon";
import { getSessionStorage } from "utils/session-storage";
import { supJsonParse } from "utils/sup-jsonparse";

export type CheckOrderProps = {
  order: {
    totalProducts: number;
    valueProducts: number;
    toPay: number;
    discount?: number;
  };
  // eslint-disable-next-line no-unused-vars
  verifyCoupon: (coupon: string) => void;
  activeCoupons: Coupon | null;
  handleFinishPurchase: () => void;
};

export const CheckOrder = ({
  order,
  verifyCoupon,
  activeCoupons,
  handleFinishPurchase
}: CheckOrderProps) => {
  const [couponText, setCouponText] = useState<string>("");

  useEffect(() => {
    const activeCoupon = getSessionStorage("active-coupon");
    activeCoupon && setCouponText(supJsonParse(activeCoupon));
  }, []);

  return (
    <div className={styled.checkOrderContent}>
      <h1>Resumo do pedido</h1>

      <ul>
        <li>
          Total de produtos <span>({order.totalProducts}) itens</span>
        </li>
        <li>
          Valor dos Produtos: <span>{formatCurrency(order.valueProducts)}</span>
        </li>
        <li>
          Frete:{" "}
          <span>
            {order.toPay - (order?.discount || 0) > 1000
              ? "Grátis"
              : formatCurrency(10)}
          </span>
        </li>
        {order.discount && order.discount > 0 ? (
          <li>
            Valor do desconto: <span>{formatCurrency(order.discount)}</span>
          </li>
        ) : null}
        <li>
          Valor total:{" "}
          <span>
            {formatCurrency(
              order.discount && order.toPay < 1000
                ? order.toPay - order.discount + 10
                : order.discount
                ? order.toPay - order.discount
                : order.toPay
            )}
          </span>
        </li>
      </ul>

      <div className={styled.contentInput}>
        <input
          type="text"
          placeholder="Cupom de desconto"
          value={couponText}
          onChange={(e) => setCouponText(e.target.value)}
        />

        <Button
          title="aplicar"
          variant="button-light"
          size="small"
          type="button"
          onClick={() => verifyCoupon(couponText)}
        />
      </div>
      {activeCoupons?.discount && (
        <span className={styled.couponValid}>Cupom aplicado com sucesso!</span>
      )}

      <Button
        fullWidth
        title="Finalizar Compra"
        variant="button-dark"
        size="medium"
        onClick={handleFinishPurchase}
        type="button"
      />
    </div>
  );
};
