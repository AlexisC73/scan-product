import data from '../data/test.json'

interface ProductProps {
    barcode: string | undefined
}

export default function Product ({barcode}: ProductProps) {
    console.log(data)
    return <div className="product">
        </div>
}