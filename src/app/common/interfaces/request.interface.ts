export interface GetRequestDto{
  customer_id: string;
  entry_city_id: number;
  receive_at_airport: boolean;
  devolution_city_id: number;
  returns_at_airport: boolean;
  entry_date: Date;
  entry_time: string;
  devolution_date: Date;
  devolution_time: string;
  gamma_id: number;
  transmission_id: number;
  comments?: string;
}

export interface CreateRequestDto{
  name: string;
  phone: string;
  email?: string;
  entry_city_id: number;
  receive_at_airport: boolean;
  devolution_city_id: number;
  returns_at_airport: boolean;
  entry_date: Date;
  entry_time: string;
  devolution_date: Date;
  devolution_time: string;
  gamma_id: number;
  transmission_id: number;
  comments?: string;
}
