export interface Activity {
  id: number;
  region_id: number;
  tag_ids: number;
  product_code: string;
  match_rating: number;
  description: string;
  star_rating: number;
  title: string;
  productLink: string;
  image_url: string;
  supplier: string;
  price: number;
  currency: string;
  duration: string;
}