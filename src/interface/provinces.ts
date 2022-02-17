export interface IProvince {
      name: string,
      type: string,
      codename: string,
      province_code: number,
      district_code: number | null,
      ward_code: number | null,
      province_id: number | null,
      district_id: number | null,
      organizations_count: number
}