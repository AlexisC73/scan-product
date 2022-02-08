import Header from '../components/Header'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { barcode } = useParams()
  return (
    <>
      <Header />
      <Product barcode={barcode} />
    </>
  )
}
