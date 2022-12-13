import { integerPropType } from "@mui/utils";

export interface Activity {
  id: number;
  regionId: number;
  tagIds: Array<string>;
  productCode: string;
  matchRating: number;
  description: string;
  starRating: number;
  title: string;
  productLink: string;
  imageUrl: string;
  supplier: string;
  price: number;
  currency: string;
  duration: string;
}


export interface ActivityRequest {
  destSelected: integer;
  searchQuery?: string; //search title + description + provider <- not sure if this is a concatenated string
  tagIds?: Array<string>; // Not sure if its an object or array
  highestRating?: number;
  lowestRating?: number;
  highestPrice?: number;
  lowestPrice?: number;
  sortBy?: string;
  startIndex: integer;
  count: integer;
}