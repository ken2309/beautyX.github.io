export interface Combo {
      id: number,
      name: string,
      use_value: number,
      price: number,
      discount: number,
      status: boolean,
      note: string,
      commission_percen: number,
      commission_money: number,
      reward_percent: number,
      reward_money: number,
      expired: number,
      branch_id: number,
      deleted: false,
      created_date: string,
      created_by_id: string,
      images: null | string,
      is_momo_ecommerce_enable: number,
      image_url: string
      products: [],
      services: []
}