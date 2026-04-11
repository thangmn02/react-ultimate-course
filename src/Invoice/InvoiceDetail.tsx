import { useParams, useNavigate } from "react-router-dom";
import { invoiceData } from "./invoiceData";

export default function InvoiceDetail() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();

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

      <button
        onClick={() => navigate("/invoice")}
        className="mt-8 px-5 py-2 border border-gray-400 rounded hover:bg-gray-100"
      >
        ← Back to Invoices List
      </button>
    </div>
  );
}