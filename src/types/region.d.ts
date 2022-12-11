export interface Region {
  id: number;
  destination_url_name: string; // Not sure if this is needed
  default_currency_code: string;
  parent_id: string;
  timezone: string;
  sort_order: string;
  destination_name: string;
  destination_id: number;
  destination_type: string;
  latitude: number;
  longitude: number;
  parent_id: number;
}
