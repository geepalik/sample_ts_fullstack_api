export interface TransferEntityDto{
    amount: number;
    sourceAccountId: string;
    destinationAccountId: string;
    paymentMethodType: string;
    flow: string;
}