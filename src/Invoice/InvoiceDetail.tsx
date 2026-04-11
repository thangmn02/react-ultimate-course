import { useParams } from "react-router-dom";
import { invoiceData } from "./invoiceData";

export default function InvoiceDetail() {
  const { invoiceId } = useParams();

  const invoice = invoiceData.find(
    (inv) => inv.number.toString() === invoiceId
  );

  if (!invoice) return <h2>Invoice not found!</h2>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Total Due: <span className="text-red-600">{invoice.amount}</span>
      </h1>
      <p className="text-xl mb-2">
        {invoice.name}: {invoice.number}
      </p>
      <p className="text-xl">Due Date: {invoice.due}</p>
    </div>
  );
}