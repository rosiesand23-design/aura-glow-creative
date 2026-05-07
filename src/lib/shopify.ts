import { toast } from "sonner";

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'hbk21r-71.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'f5f2dd435ef4ac94a1716ccc3c83d700';

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Your store needs an active Shopify billing plan. Visit https://admin.shopify.com to upgrade.",
    });
    return;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

   let data = await response.json();
 
  // Handle visual image edits: Swap specific Shopify product images with
  // local transparent-background versions so Polaroid cards blend cleanly.
  const imageSwaps: Array<{ target: RegExp; replacement: string }> = [
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/Collagen_and_Retinol_Serum\.png(\?v=\d+)?/g, replacement: "/collagen-retinol-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/Anti-aging_Rose_Gold_Oil\.png(\?v=\d+)?/g, replacement: "/anti-aging-rose-gold-oil-shopify-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9238\.png(\?v=\d+)?/g, replacement: "/e3178861-81c9-4929-9df7-0644fde82a22-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9239\.png(\?v=\d+)?/g, replacement: "/939b55e3-3cf0-4f26-985c-f0c1b9f25939-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9240\.png(\?v=\d+)?/g, replacement: "/09419d70-fcb3-457c-abb0-42cb53bed55f-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/Collagen_Moisturizer_2\.png(\?v=\d+)?/g, replacement: "/embrace-collagen-moisturizer-1-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9241\.png(\?v=\d+)?/g, replacement: "/glow-mask-1-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9252_be098561-1a02-4a4b-84d9-cc553c2f60de\.png(\?v=\d+)?/g, replacement: "/kale-face-cleanser-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9253\.png(\?v=\d+)?/g, replacement: "/age-defying-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9254\.png(\?v=\d+)?/g, replacement: "/mint-exfoliating-facial-polish-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9255\.png(\?v=\d+)?/g, replacement: "/hydrating-facial-cleanser-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9256\.png(\?v=\d+)?/g, replacement: "/hyaluronic-acid-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9279\.png(\?v=\d+)?/g, replacement: "/soothing-emulsion-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9291\.png(\?v=\d+)?/g, replacement: "/shea-body-butter-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9290\.png(\?v=\d+)?/g, replacement: "/oil-control-hydrator-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9289\.png(\?v=\d+)?/g, replacement: "/niacinamide-vitamin-boost-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9285\.png(\?v=\d+)?/g, replacement: "/anti-aging-rose-gold-oil-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9284\.png(\?v=\d+)?/g, replacement: "/active-eye-cream-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9274_c77928e6-15df-47f6-9be9-b75630722e07\.png(\?v=\d+)?/g, replacement: "/hydration-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9282\.png(\?v=\d+)?/g, replacement: "/glycolic-acid-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9281\.png(\?v=\d+)?/g, replacement: "/nourish-hand-cream-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9280\.png(\?v=\d+)?/g, replacement: "/night-renewal-creme-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9277\.png(\?v=\d+)?/g, replacement: "/oil-free-daily-moisturizer-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9272\.png(\?v=\d+)?/g, replacement: "/firm-serum-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9275\.png(\?v=\d+)?/g, replacement: "/extreme-moisture-blend-nobg.png" },
    { target: /https:\/\/cdn\.shopify\.com\/s\/files\/1\/0781\/8880\/6366\/files\/IMG_9274_0e5d56da-f05c-4443-8581-b604ed7208de\.png(\?v=\d+)?/g, replacement: "/soothing-moisturizer-nobg.png" },
  ];
 
   if (data && typeof data === 'object') {
     let dataString = JSON.stringify(data);
     let modified = false;
     
      for (const swap of imageSwaps) {
        swap.target.lastIndex = 0;
        if (swap.target.test(dataString)) {
          swap.target.lastIndex = 0;
          dataString = dataString.replace(swap.target, swap.replacement);
          modified = true;
        }
      }
     
     if (modified) {
       data = JSON.parse(dataString);
     }
   }
 
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }
  return data;
}

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export async function fetchProducts(first = 20, query?: string): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(STOREFRONT_QUERY, { first, query });
  return data?.data?.products?.edges || [];
}

export async function fetchProductByHandle(handle: string) {
  const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
  const product = data?.data?.productByHandle;
  if (!product) return null;
  return { node: product } as ShopifyProduct;
}

// Cart mutations
const CART_QUERY = `query cart($id: ID!) { cart(id: $id) { id totalQuantity } }`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_UPDATE_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { id }
      userErrors { field message }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { id }
      userErrors { field message }
    }
  }
`;

function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

function isCartNotFoundError(userErrors: Array<{ field: string[] | null; message: string }>): boolean {
  return userErrors.some(e => e.message.toLowerCase().includes('cart not found') || e.message.toLowerCase().includes('does not exist'));
}

export interface CartItem {
  lineId: string | null;
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

export async function createShopifyCart(item: CartItem) {
  const data = await storefrontApiRequest(CART_CREATE_MUTATION, {
    input: { lines: [{ quantity: item.quantity, merchandiseId: item.variantId }] },
  });
  if (data?.data?.cartCreate?.userErrors?.length > 0) return null;
  const cart = data?.data?.cartCreate?.cart;
  if (!cart?.checkoutUrl) return null;
  const lineId = cart.lines.edges[0]?.node?.id;
  if (!lineId) return null;
  return { cartId: cart.id, checkoutUrl: formatCheckoutUrl(cart.checkoutUrl), lineId };
}

export async function addLineToShopifyCart(cartId: string, item: CartItem) {
  const data = await storefrontApiRequest(CART_LINES_ADD_MUTATION, {
    cartId,
    lines: [{ quantity: item.quantity, merchandiseId: item.variantId }],
  });
  const userErrors = data?.data?.cartLinesAdd?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };
  const lines = data?.data?.cartLinesAdd?.cart?.lines?.edges || [];
  const newLine = lines.find((l: { node: { id: string; merchandise: { id: string } } }) => l.node.merchandise.id === item.variantId);
  return { success: true, lineId: newLine?.node?.id };
}

export async function updateShopifyCartLine(cartId: string, lineId: string, quantity: number) {
  const data = await storefrontApiRequest(CART_LINES_UPDATE_MUTATION, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });
  const userErrors = data?.data?.cartLinesUpdate?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };
  return { success: true };
}

export async function removeLineFromShopifyCart(cartId: string, lineId: string) {
  const data = await storefrontApiRequest(CART_LINES_REMOVE_MUTATION, {
    cartId,
    lineIds: [lineId],
  });
  const userErrors = data?.data?.cartLinesRemove?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };
  return { success: true };
}

export async function fetchCart(cartId: string) {
  return storefrontApiRequest(CART_QUERY, { id: cartId });
}
