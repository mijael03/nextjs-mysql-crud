import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";

export default function HomePage({ products }) {

  return (
    <Layout>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <a>
            <div className='border border-gray shadow-md p-6'>
              <h1>{product.name}</h1>
              <h1>{product.description}</h1>
              <h1>{product.price}</h1>
            </div>
          </a>
        </Link>
      ))}
    </Layout>
  )
}
export const getServerSideProps = async context => {
  const { data: products } = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      products
    }
  }
}

