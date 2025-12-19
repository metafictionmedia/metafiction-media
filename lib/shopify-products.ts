export type ShopifyProduct = {
  id: string;
  shopifyId: string;
  componentId: string;
  slug: string;
  name: string;
  description: string;
  category: 'jeffrey' | 'yudy';
}

export const shopifyProducts: ShopifyProduct[] = [
  {
    id: '1',
    shopifyId: '7946056106063',
    componentId: 'product-component-1766127030674',
    slug: 'product-1',
    name: 'Product 1',
    description: 'Description will be loaded from Shopify',
    category: 'jeffrey'
  },
  {
    id: '2',
    shopifyId: '7946155688015',
    componentId: 'product-component-1766127233033',
    slug: 'product-2',
    name: 'Product 2',
    description: 'Description will be loaded from Shopify',
    category: 'jeffrey'
  },
  {
    id: '3',
    shopifyId: '7946171482191',
    componentId: 'product-component-1766127267731',
    slug: 'product-3',
    name: 'Product 3',
    description: 'Description will be loaded from Shopify',
    category: 'jeffrey'
  },
  {
    id: '4',
    shopifyId: '7947997773903',
    componentId: 'product-component-1766127296397',
    slug: 'product-4',
    name: 'Product 4',
    description: 'Description will be loaded from Shopify',
    category: 'yudy'
  },
  {
    id: '5',
    shopifyId: '7947999674447',
    componentId: 'product-component-1766127324581',
    slug: 'product-5',
    name: 'Product 5',
    description: 'Description will be loaded from Shopify',
    category: 'yudy'
  },
  {
    id: '6',
    shopifyId: '7949145047119',
    componentId: 'product-component-1766127355386',
    slug: 'product-6',
    name: 'Product 6',
    description: 'Description will be loaded from Shopify',
    category: 'yudy'
  },
  {
    id: '7',
    shopifyId: '7949466959951',
    componentId: 'product-component-1766167564136',
    slug: 'product-7',
    name: 'Product 7',
    description: 'Description will be loaded from Shopify',
    category: 'yudy'
  }
]
