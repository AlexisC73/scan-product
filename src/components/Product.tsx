import { useEffect, useState } from 'react'

interface ProductProps {
  barcode: string | undefined
}

interface ProductData {
  product: {
    product_name: string
    categories_tags: [string]
    quantity: string
    image_url: string
    allergens_tags: [string]
    ingredients_text: string
    nutriscore_grade: string
  }
}

export default function Product({ barcode }: ProductProps) {
  const [data, setData] = useState<ProductData | boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then((rep) => {
        if (rep.ok) {
          return rep.json()
        }
      })
      .then((res) => {
        setLoading(false)
        if (res.status !== 0) {
          setData(res)
        }
      })
  }, [barcode])

  if (loading) {
    return <div>Données en cours de chargement</div>
  }

  if (typeof data === 'boolean') {
    return <div>Aucune données</div>
  }
  const productName = data.product.product_name
  const image =
    'https://openfoodfacts.org' +
    data.product.image_url.split('openfoodfacts.org')[1]
  const allergens = data.product.allergens_tags.map(
    (allergen) => allergen.split('en:')[1]
  )
  const categories =
    data &&
    data.product.categories_tags.map((category) => category.split('en:')[1])

  return (
    <div className='wrapper'>
      <div className='product'>
        <div className='left'>
          <div className='row'>
            <ul className='allergens'>
              <span className='title'>Allergènes:</span>
              {allergens.map((allergen) => (
                <li key={allergen} className='allergen'>
                  {allergen}
                </li>
              ))}
            </ul>
            <div className='nutriscore'>{data.product.nutriscore_grade}</div>
          </div>
          <h1>
            {productName}
            <span className='quantity'>
              ({data && data.product.quantity})
            </span>{' '}
          </h1>
          <div className='ingredients'>
            <h3>Ingrédients:</h3>
            <p>{data.product.ingredients_text}</p>
          </div>
          <div className='categories'>
            <h3>Catégories:</h3>
            <ul className='list'>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='right'>
          <img src={image} alt={productName} />
        </div>
      </div>
    </div>
  )
}
