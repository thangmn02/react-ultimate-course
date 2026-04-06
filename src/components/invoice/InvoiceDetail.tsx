import { useParams } from "react-router"

function InvoiceDetail() {
  const { invoiceId } = useParams();

  console.log('params: ', invoiceId)
  return (
    <div>
      <h3>InvoiceDetail</h3>
    </div>
  )
}

export default InvoiceDetail