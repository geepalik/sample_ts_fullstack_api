import { PaymentEntityDto } from "./dto/PaymentEntityDto";
import { TransferEntityDto } from "./dto/TransferEntityDto";

function createTransfersForPayment (payment: PaymentEntityDto): Array<TransferEntityDto>{
    const {amount, payorState, collect, deliver} = payment;
    return [{
        amount,
        sourceAccountId: defaultBankAccountId(payorState, deliver.type),
        destinationAccountId: deliver.accountId,
        paymentMethodType: deliver.type,
        flow: "deliver"
    },{
            amount,
            sourceAccountId: collect.accountId,
            destinationAccountId: defaultBankAccountId(payorState, deliver.type),
            paymentMethodType: collect.type,
            flow: "collect"
        }];
};

//not the most optimal solution
//conditions and number of banks can be changed
//more optimal solution: each rule should generate a numberic score
//divided by number of banks
//when running rules, the rule with highest score wins
//if all 0, then return default rule, 5th bullet point with percentage distribution
function defaultBankAccountId(payorState: string, deliverType: string): string{
    const banks = ['melio-A', 'melio-b', 'melio-c'];
    if(stateLevelTransfer(payorState)){
        return banks[0];
    }

    //determine by deliver type
    if(deliverTypeTransferVirtual(deliverType) || deliverTypeTransferInternational(deliverType)){
        return banks[1];
    }

    //determine by deliver type and time
    if(deliverTypeAndTimeTransfer(deliverType)){
        return banks[2];
    }

    //default response
}

function distributePayments(banks, amount){}

function stateLevelTransfer(payorState: string): boolean{
    return payorState === 'TX';
}

function deliverTypeTransferVirtual(deliverType: string): boolean{
    return deliverType === "virtualCard";
}

function deliverTypeTransferInternational(deliverType: string): boolean{
    return deliverType === "international";
}

function deliverTypeAndTimeTransfer(deliverType: string): boolean{
    return deliverType === "check" && new Date().getHours() > 14;
}

const samplePayment: PaymentEntityDto = {
    "amount": 25.73,
    "payorState": "NY",
    "collect": {
      "accountId": "123",
      "type": "ach"
    },
    "deliver": {
      "accountId": "456",
      "type": "check"
    }
  };

const result = createTransfersForPayment(samplePayment);
console.log(result);