import { AccountEntityDto } from "./AccountEntityDto";

export interface PaymentEntityDto{
    amount: number;
    payorState: string;
    collect: AccountEntityDto;
    deliver: AccountEntityDto;
}