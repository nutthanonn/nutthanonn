import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("product")
export class Product extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
  })
  product_id: string;

  @Column()
  product_name: string;

  @Column()
  product_price: number;

  @Column()
  product_img: string;
}
